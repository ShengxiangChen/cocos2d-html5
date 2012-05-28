var additiveSprite = cc.Sprite.extend({
    draw:function(ctx){
        var context = ctx || cc.renderContext;
        context.globalCompositeOperation = 'lighter';
        this._super(ctx);
    }
});
var flareEffect = function(parent, target, callback){
    var flare = new additiveSprite();
    flare.initWithFile(s_flare);
    parent.addChild(flare,10);
    flare.setOpacity(0);
    flare.setPosition(cc.ccp(-30,297));
    flare.setRotation(-120);
    flare.setScale(0.2);

    var opacityAnim = cc.FadeTo.actionWithDuration(0.5,255);
    var opacDim = cc.FadeTo.actionWithDuration(1, 0);
    var biggeAnim = cc.ScaleBy.actionWithDuration(0.7,1.2,1.2);
    var biggerEase = cc.EaseSineOut.actionWithAction(biggeAnim);
    var moveAnim = cc.MoveBy.actionWithDuration(0.5,cc.ccp(328,0));
    var easeMove = cc.EaseSineOut.actionWithAction(moveAnim);
    var rotateAnim = cc.RotateBy.actionWithDuration(2.5,90);
    var rotateEase = cc.EaseExponentialOut.actionWithAction(rotateAnim)
    var bigger = cc.ScaleTo.actionWithDuration(0.5,1);

    var onComplete = cc.CallFunc.actionWithTarget(target,callback);
    var killflare = cc.CallFunc.actionWithTarget(flare, function(){
        this.getParent().removeChild(this);
    });
    flare.runAction(cc.Sequence.actions(opacityAnim,biggerEase, opacDim, killflare, onComplete));
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
            logo.setAnchorPoint(cc.ccp(0,0));
            logo.setPosition(cc.ccp(0,250));
            this.addChild(logo,10,1);

            var newGameNormal = cc.Sprite.spriteWithFile(s_menu, cc.RectMake(0, 0, 126, 33));
            var newGameSelected = cc.Sprite.spriteWithFile(s_menu, cc.RectMake(0, 33, 126, 33));
            var newGameDisabled = cc.Sprite.spriteWithFile(s_menu, cc.RectMake(0, 33 * 2, 126, 33));

            var gameSettingsNormal = cc.Sprite.spriteWithFile(s_menu, cc.RectMake(126, 0, 126, 33));
            var gameSettingsSelected = cc.Sprite.spriteWithFile(s_menu, cc.RectMake(126, 33, 126, 33));
            var gameSettingsDisabled = cc.Sprite.spriteWithFile(s_menu, cc.RectMake(126, 33 * 2, 126, 33));

            var aboutNormal = cc.Sprite.spriteWithFile(s_menu, cc.RectMake(252, 0, 126, 33));
            var aboutSelected = cc.Sprite.spriteWithFile(s_menu, cc.RectMake(252, 33, 126, 33));
            var aboutDisabled = cc.Sprite.spriteWithFile(s_menu, cc.RectMake(252, 33 * 2, 126, 33));

            var newGame = cc.MenuItemSprite.itemFromNormalSprite(newGameNormal, newGameSelected, newGameDisabled, this, function(){
                flareEffect(this,this,this.onNewGame);
            });
            var gameSettings = cc.MenuItemSprite.itemFromNormalSprite(gameSettingsNormal, gameSettingsSelected, gameSettingsDisabled, this, this.onSettings);
            var about = cc.MenuItemSprite.itemFromNormalSprite(aboutNormal, aboutSelected, aboutDisabled, this, this.onAbout);

            var menu = cc.Menu.menuWithItems(newGame, gameSettings, about);
            menu.alignItemsVerticallyWithPadding(10);
            this.addChild(menu, 1, 2);
            menu.setPosition(cc.ccp(this._s.width / 2, this._s.height / 2 - 80));
            this.schedule(this.update,0.1)

            var mgr = cc.SpriteBatchNode.batchNodeWithFile(s_ship01, 5);
            this._ship = cc.Sprite.spriteWithTexture(mgr.getTexture(), cc.RectMake(12, 9, 50, 37));
            this.addChild(mgr, 0, 4);
            mgr.addChild(this._ship, 1, 5);
            this._ship.setPosition(cc.ccp(Math.random() * this._s.width, 0));
            this._ship.runAction(cc.MoveBy.actionWithDuration(2, cc.ccp(Math.random()  * this._s.width, this._ship.getPosition().y + this._s.height + 100)));

            bRet = true;
        }
        return bRet;
    },
    onNewGame:function (pSender) {
        var scene = cc.Scene.node();
        scene.addChild(GameLayer.node());
        scene.addChild(GameControlMenu.node());
        cc.Director.sharedDirector().replaceScene(cc.TransitionFade.transitionWithDuration(1.2,scene));
    },
    onSettings:function (pSender) {
        var scene = cc.Scene.node();
        scene.addChild(SettingsLayer.node());
        cc.Director.sharedDirector().replaceScene(cc.TransitionFade.transitionWithDuration(1.2,scene));
    },
    onAbout:function (pSender) {
        var scene = cc.Scene.node();
        scene.addChild(AboutLayer.node());
        cc.Director.sharedDirector().replaceScene(cc.TransitionFade.transitionWithDuration(1.2,scene));
    },
    update:function(){
        if(this._ship.getPosition().y > 480){
        this._ship.setPosition(cc.ccp(Math.random() * this._s.width, 10));
        this._ship.runAction(cc.MoveBy.actionWithDuration(parseInt(5 * Math.random()), cc.ccp(Math.random()  * this._s.width, this._ship.getPosition().y + 480)));
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