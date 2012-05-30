var additiveSprite = cc.Sprite.extend({
    draw:function (ctx) {
        var context = ctx || cc.renderContext;
        context.globalCompositeOperation = 'lighter';
        this._super(ctx);
    }
});

function playerShoot(target, that) {
    var dur = 0.075;
    var offset = 13;
    cc.SpriteFrameCache.sharedSpriteFrameCache().addSpriteFramesWithFile(s_bullet_plist);
    var effect = new additiveSprite();
    effect.initWithSpriteFrameName("W1.png");
    target.addChild(effect, 999999);
    effect.setPosition(cc.ccp(that.getPosition().x + offset, that.getPosition().y + 3 + that.getContentSize().height * 0.3));
    effect.setScaleY(0.3);
    effect.setScaleX(2);

    var effect2 = new additiveSprite();
    effect2.initWithSpriteFrameName("W1.png");
    target.addChild(effect2, 999999);
    effect2.setPosition(cc.ccp(that.getPosition().x - offset, that.getPosition().y + 3 + that.getContentSize().height * 0.3));
    effect2.setScaleY(0.3);
    effect2.setScaleX(2);

    var chargeUp = cc.ScaleTo.actionWithDuration(dur, 1, 1);
    var brighter = cc.FadeOut.actionWithDuration(dur);

    effect.runAction(chargeUp);
    effect.runAction(brighter);

    effect2.runAction(chargeUp.copy());
    effect2.runAction(brighter.copy());
    setTimeout(function () {
        effect.getParent().removeChild(effect);
        effect2.getParent().removeChild(effect2);
        var b = new Bullet(that.bulletSpeed, "W1.png", global.AttackMode.Normal);
        target.addChild(b, b.zOrder, global.Tag.ShipBullet);
        b.setPosition(cc.ccp(that.getPosition().x + offset, that.getPosition().y + 3 + that.getContentSize().height * 0.3));

        var bb = new Bullet(that.bulletSpeed, "W1.png", global.AttackMode.Normal);
        target.addChild(bb, bb.zOrder, global.Tag.ShipBullet);
        bb.setPosition(cc.ccp(that.getPosition().x - offset, that.getPosition().y + 3 + that.getContentSize().height * 0.3));

    }, dur * 1000);
}


function explode(ccpoint, parent, scale, duration) {
    scale = scale || 0.3;
    duration = duration || 0.5;
    var sprite1 = "Resources/explode1.jpg";
    var sprite2 = "Resources/explode2.jpg";
    var sprite3 = "Resources/explode3.jpg";
    var one = new additiveSprite();
    one.initWithFile(sprite1);
    var two = new additiveSprite();
    two.initWithFile(sprite2);
    var three = new additiveSprite();
    three.initWithFile(sprite3);
    one.setPosition(ccpoint);
    two.setPosition(ccpoint);
    three.setPosition(ccpoint);
    parent.addChild(one);
    parent.addChild(two);
    parent.addChild(three);
    one.setScale(scale);
    two.setScale(scale);
    three.setScale(scale);
    three.setRotation(Math.random() * 360);
    var left = cc.RotateBy.actionWithDuration(duration, -45);
    var right = cc.RotateBy.actionWithDuration(duration, 45);
    var scaleBy = cc.ScaleBy.actionWithDuration(duration, 4, 4);
    var fadeOut = cc.FadeOut.actionWithDuration(duration);
    one.runAction(left);
    two.runAction(right);
    one.runAction(scaleBy);
    two.runAction(scaleBy.copy());
    three.runAction(scaleBy.copy());
    one.runAction(fadeOut);
    two.runAction(fadeOut.copy());
    three.runAction(fadeOut.copy());
    setTimeout(function () {
        parent.removeChild(one);
        parent.removeChild(two);
        parent.removeChild(three);
    }, duration * 1000);
}

var flareEffect = function (parent, target, callback) {
    var flare = new additiveSprite();
    flare.initWithFile(s_flare);
    parent.addChild(flare, 10);
    flare.setOpacity(0);
    flare.setPosition(cc.ccp(-30, 297));
    flare.setRotation(-120);
    flare.setScale(0.2);

    var opacityAnim = cc.FadeTo.actionWithDuration(0.5, 255);
    var opacDim = cc.FadeTo.actionWithDuration(1, 0);
    var biggeAnim = cc.ScaleBy.actionWithDuration(0.7, 1.2, 1.2);
    var biggerEase = cc.EaseSineOut.actionWithAction(biggeAnim);
    var moveAnim = cc.MoveBy.actionWithDuration(0.5, cc.ccp(328, 0));
    var easeMove = cc.EaseSineOut.actionWithAction(moveAnim);
    var rotateAnim = cc.RotateBy.actionWithDuration(2.5, 90);
    var rotateEase = cc.EaseExponentialOut.actionWithAction(rotateAnim)
    var bigger = cc.ScaleTo.actionWithDuration(0.5, 1);

    var onComplete = cc.CallFunc.actionWithTarget(target, callback);
    var killflare = cc.CallFunc.actionWithTarget(flare, function () {
        this.getParent().removeChild(this);
    });
    flare.runAction(cc.Sequence.actions(opacityAnim, biggerEase, opacDim, killflare, onComplete));
    flare.runAction(easeMove);
    flare.runAction(rotateEase);
    flare.runAction(bigger);
};


var SysMenu = cc.Layer.extend({
    _ship:null,
    _s:null,
    init:function () {
        var bRet = false;
        if (this._super) {
            this._s = cc.Director.sharedDirector().getWinSize();
            var sp = cc.Sprite.spriteWithFile(s_loading);
            sp.setAnchorPoint(cc.PointZero());
            this.addChild(sp, 0, 1);

            var logo = cc.Sprite.spriteWithFile(s_logo);
            logo.setAnchorPoint(cc.ccp(0, 0));
            logo.setPosition(cc.ccp(0, 250));
            this.addChild(logo, 10, 1);

            var newGameNormal = cc.Sprite.spriteWithFile(s_menu, cc.RectMake(0, 0, 126, 33));
            var newGameSelected = cc.Sprite.spriteWithFile(s_menu, cc.RectMake(0, 33, 126, 33));
            var newGameDisabled = cc.Sprite.spriteWithFile(s_menu, cc.RectMake(0, 33 * 2, 126, 33));

            var gameSettingsNormal = cc.Sprite.spriteWithFile(s_menu, cc.RectMake(126, 0, 126, 33));
            var gameSettingsSelected = cc.Sprite.spriteWithFile(s_menu, cc.RectMake(126, 33, 126, 33));
            var gameSettingsDisabled = cc.Sprite.spriteWithFile(s_menu, cc.RectMake(126, 33 * 2, 126, 33));

            var aboutNormal = cc.Sprite.spriteWithFile(s_menu, cc.RectMake(252, 0, 126, 33));
            var aboutSelected = cc.Sprite.spriteWithFile(s_menu, cc.RectMake(252, 33, 126, 33));
            var aboutDisabled = cc.Sprite.spriteWithFile(s_menu, cc.RectMake(252, 33 * 2, 126, 33));

            var newGame = cc.MenuItemSprite.itemFromNormalSprite(newGameNormal, newGameSelected, newGameDisabled, this, function () {
                this.onButtonEffect();
                flareEffect(this, this, this.onNewGame);
            });
            var gameSettings = cc.MenuItemSprite.itemFromNormalSprite(gameSettingsNormal, gameSettingsSelected, gameSettingsDisabled, this, this.onSettings);
            var about = cc.MenuItemSprite.itemFromNormalSprite(aboutNormal, aboutSelected, aboutDisabled, this, this.onAbout);

            var menu = cc.Menu.menuWithItems(newGame, gameSettings, about);
            menu.alignItemsVerticallyWithPadding(10);
            this.addChild(menu, 1, 2);
            menu.setPosition(cc.ccp(this._s.width / 2, this._s.height / 2 - 80));
            this.schedule(this.update, 0.1);

           var tmp = cc.TextureCache.sharedTextureCache().addImage(s_ship01);
            this._ship = cc.Sprite.spriteWithTexture(tmp,cc.RectMake(0, 0, 60, 38));
            this.addChild(this._ship, 0, 4);
            this._ship.setPosition(cc.ccp(Math.random() * this._s.width, 0));
            this._ship.runAction(cc.MoveBy.actionWithDuration(2, cc.ccp(Math.random() * this._s.width, this._ship.getPosition().y + this._s.height + 100)));

            if (global.sound) {
                cc.AudioManager.sharedEngine().setBackgroundMusicVolume(0.7);
                cc.AudioManager.sharedEngine().playBackgroundMusic(s_mainMainMusic, true);
            }
            bRet = true;
        }
        return bRet;
    },
    onNewGame:function (pSender) {
        var scene = cc.Scene.node();
        scene.addChild(GameLayer.node());
        scene.addChild(GameControlMenu.node());
        cc.Director.sharedDirector().replaceScene(cc.TransitionFade.transitionWithDuration(1.2, scene));
    },
    onSettings:function (pSender) {
        this.onButtonEffect();
        var scene = cc.Scene.node();
        scene.addChild(SettingsLayer.node());
        cc.Director.sharedDirector().replaceScene(cc.TransitionFade.transitionWithDuration(1.2, scene));
    },
    onAbout:function (pSender) {
        this.onButtonEffect();
        var scene = cc.Scene.node();
        scene.addChild(AboutLayer.node());
        cc.Director.sharedDirector().replaceScene(cc.TransitionFade.transitionWithDuration(1.2, scene));
    },
    update:function () {
        if (this._ship.getPosition().y > 480) {
            this._ship.setPosition(cc.ccp(Math.random() * this._s.width, 10));
            this._ship.runAction(cc.MoveBy.actionWithDuration(parseInt(5 * Math.random()), cc.ccp(Math.random() * this._s.width, this._ship.getPosition().y + 480)));
        }
    },
    onButtonEffect:function(){
        if (global.sound) {
            var s = cc.AudioManager.sharedEngine().playEffect(s_buttonEffect);
        }
    }
});

SysMenu.node = function () {
    var sg = new SysMenu();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};

SysMenu.scene = function () {
    var scene = cc.Scene.node();
    var layer = SysMenu.node();
    scene.addChild(layer);
    return scene;
};