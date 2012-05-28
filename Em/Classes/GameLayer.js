var keys = [];
var global = {
    level:1,
    bulletType:{
        Ship:1,
        Enemy:2
    },
    Tag:{
        Bullet:900,
        Enemy:901
    },
    moveType:{
        Random:0,
        Vertical:1,
        Horizontal:2,
        Overlap:3
    }
};

var winSize = null;

var Ship = cc.Sprite.extend({
    speed:220,
    bulletSpeed:700,
    score:0,
    HP:3,
    life:3,
    flashTime:150,
    bulletTypeValue:1,
    bulletPowerValue:1,
    shotting:false,
    throwBombing:false,
    canBeAttack:false,
    canBeControl:false,
    isThrowingBomb:false,
    zOrder:3000,
    maxBulletPowerValue:4,
    canShot:true,
    lifeUpScores:[50000, 100000, 150000, 200000, 250000, 300000],
    appearPosition:cc.ccp(160, 30),
    ctor:function () {
        //init life
        this.life = global.level + 4;
        var shipTexture = cc.TextureCache.sharedTextureCache().addImage(s_ship01);
        this.initWithTexture(shipTexture, cc.RectMake(0, 0, 90, 56));
        this.setTag(this.zOrder);

        // set frame
        var animation = cc.Animation.animation();
        animation.addFrameWithTexture(shipTexture, cc.RectMake(0, 0, 90, 56));
        animation.addFrameWithTexture(shipTexture, cc.RectMake(90, 0, 90, 56));

        // ship animate
        var action = cc.Animate.actionWithDuration(0.4, animation, true);
        this.runAction(cc.RepeatForever.actionWithAction(action));
    },
    update:function (dt) {
        var newX = this.getPosition().x, newY = this.getPosition().y;
        if (keys[cc.key.w] && this.getPosition().y <= winSize.height) {
            newY += dt * this.speed;
        }
        if (keys[cc.key.s] && this.getPosition().y >= 0) {
            newY -= dt * this.speed;
        }
        if (keys[cc.key.a] && this.getPosition().x >= 0) {
            newX -= dt * this.speed;
        }
        if (keys[cc.key.d] && this.getPosition().x <= winSize.width) {
            newX += dt * this.speed;
        }
        this.setPosition(cc.ccp(newX, newY));
    },
    shoot:function (dt) {
        if (this.canShot) {
            var b = new Bullet(this.bulletSpeed);
            this.getParent().addChild(b, b.zOrder, global.Tag.bullet);
            b.setPosition(cc.ccp(this.getPosition().x, this.getPosition().y + this.getContentSize().height * 0.3));
        }
    },
    destroy:function () {
        this.getParent().removeChild(this);
    },
    throwBomb:function () {
    }
});

//bullet
var Bullet = cc.Sprite.extend({
    active:true,
    xVolocity:0,
    yVolocity:200,
    power:1,
    HP:1,
    moveType:null,
    zOrder:3000,
    parentType:global.bulletType.Ship,
    ctor:function (bulletSpeed) {
        this.yVolocity = -bulletSpeed;
        this.initWithFile(s_bullet);
    },
    inBounds:function () {
        var b = this.getPosition();
        return b.x >= 0 && b.x <= winSize.width && b.y >= 0 && b.y <= winSize.height;
    },
    update:function (dt) {
        var newX = this.getPositionX(), newY = this.getPositionY();
        newX -= this.xVolocity * dt;
        newY -= this.yVolocity * dt;
        this.setPosition(cc.ccp(newX, newY));
        this.active = this.active && this.inBounds();
    },
    destroy:function () {
        this.getParent().removeChild(this);
    },
    draw:function (ctx) {
        var context = ctx || cc.renderContext;
        context.globalCompositeOperation = 'lighter';
        this._super(ctx);
    }
})

var Enemy = cc.Sprite.extend({
    speed:200,
    bulletSpeed:200,
    HP:15,
    bulletPowerValue:1,
    moveType:null,
    bulletFature:null,
    scoreValue:200,
    canBeAttack:true,
    zOrder:1000,
    canBeOverlapedToAttackPlane:true,
    ctor:function (arg) {
        this.HP = arg.HP;
        this.moveType = arg.moveType;
        this.scoreValue = arg.scoreValue;
        cc.SpriteFrameCache.sharedSpriteFrameCache().addSpriteFramesWithFile(s_Enemy_plist, s_Enemy);
        this.initWithSpriteFrameName(arg.textureName);
    },
    update:function () {

    },
    destroy:function () {
        this.getParent().removeChild(this);
    }
});

var E1 = Enemy.extend({
    textureName:"E01.png",
    ctor:function () {
        this._super();
    }
});

var E2 = Enemy.extend({
    textureName:"E02.png",
    ctor:function () {
        this._super();
    }
});

var E3 = Enemy.extend({
    textureName:"E03.png",
    ctor:function () {
        this._super();
    }
});

var E4 = Enemy.extend({
    textureName:"E04.png",
    ctor:function () {
        this._super();
    }
});

var E5 = Enemy.extend({
    textureName:"E05.png",
    ctor:function () {
        this._super();
    }
});

var E6 = Enemy.extend({
    textureName:"E06.png",
    ctor:function () {
        this._super();
    }
});

var GameLayer = cc.Layer.extend({
    time:null,
    _ship:null,
    init:function () {
        var bRet = false;
        if (this._super()) {
            winSize = cc.Director.sharedDirector().getWinSize();
            // bg
            var bg = cc.Sprite.spriteWithFile(s_bg01);
            bg.setAnchorPoint(cc.PointZero());

            //tilemap
            var level01TileMap = cc.TMXTiledMap.tiledMapWithTMXFile(s_level01);

            //parallax
            var voidNode = cc.ParallaxNode.node();
            voidNode.addChild(bg, -1, cc.ccp(1, 1), cc.PointZero());
            voidNode.addChild(level01TileMap, 2, cc.ccp(2, 2), cc.PointZero());

            var voidNodeUp = cc.MoveBy.actionWithDuration(60, cc.ccp(0, -bg.getContentSize().height));
            voidNode.runAction(cc.RepeatForever.actionWithAction(voidNodeUp));
            this.addChild(voidNode, -1);

            // score
            var lbScore = cc.LabelTTF.labelWithString("Time: 0", cc.SizeMake(winSize.width / 2, 50), cc.TextAlignmentRight, "Marker Felt", 16);
            this.addChild(lbScore, 1, 3);
            lbScore.setPosition(cc.ccp(winSize.width - 100, winSize.height - 45));

            // ship life
            var shipTexture = cc.TextureCache.sharedTextureCache().addImage(s_ship01);
            var life = cc.Sprite.spriteWithTexture(shipTexture, cc.RectMake(0, 0, 90, 56));
            life.setScale(0.5);
            life.setAnchorPoint(cc.ccp(0, 1));
            life.setPosition(cc.ccp(10, 460));
            this.addChild(life, 1, 5);

            // 显示当前飞船生命条数
            var lbLife = cc.LabelTTF.labelWithString("3", "Arial", 20);
            lbLife.setAnchorPoint(cc.ccp(0, 1));
            this.addChild(lbLife, 100, 6);
            lbLife.setPosition(cc.ccp(50, 450));


            /*//Enemy
             var e1 = new E1();
             e1.setPosition(cc.ccp(winSize.width / 2, winSize.height / 2));
             this.addChild(e1, 11);

             var e2 = new E2();
             e2.setPosition(cc.ccp(winSize.width / 2, winSize.height / 2));
             this.addChild(e2, 12);

             var e3 = new E3();
             e3.setPosition(cc.ccp(winSize.width / 2, winSize.height / 2));
             this.addChild(e3, 13);

             var e4 = new E4();
             e4.setPosition(cc.ccp(winSize.width / 2, winSize.height / 2));
             this.addChild(e4, 14);

             var e5 = new E5();
             e5.setPosition(cc.ccp(winSize.width / 2, winSize.height / 2));
             this.addChild(e5, 15);

             var e6 = new E6();
             e6.setPosition(cc.ccp(winSize.width / 2, winSize.height / 2));
             this.addChild(e6, 16);*/

            for (var i in Level1.Enemy) {
                var tmpSet = Level1.Enemy[i];
                var tmpEmy = new Enemy(EnemyType[tmpSet.Type]);
                var pos = cc.ccp(80 + (winSize.width-160) * Math.random(), winSize.height);

                var offset, tmpAction;
                switch (tmpEmy.moveType) {
                    case global.moveType.Random:
                        offset = cc.ccp(0, 120 + 200 * Math.random());
                        break;
                    case global.moveType.Vertical:
                        offset = cc.ccp(0, -winSize.height - tmpEmy.getContentSize().height);
                        tmpAction = cc.MoveBy.actionWithDuration(4, offset);
                        break;
                    case global.moveType.Horizontal:
                        offset = cc.ccp(0, -100 - 200 * Math.random());
                        var a0 = cc.MoveBy.actionWithDuration(0.5, offset);
                        var a1 = cc.MoveBy.actionWithDuration(1, cc.ccp(-50 - 100 * Math.random(), 0));
                        var a2 = cc.DelayTime.actionWithDuration(1);
                        var a3 = cc.MoveBy.actionWithDuration(1, cc.ccp(100 + 100 * Math.random(), 0));
                        var onComplete = cc.CallFunc.actionWithTarget(tmpEmy, function (pSender) {
                            pSender.runAction(cc.RepeatForever.actionWithAction(
                                cc.Sequence.actions(a2, a3.copy(), a2, a3.copy().reverse())
                            ));
                        });
                        var tmpAction = cc.Sequence.actions(a0, a1, onComplete);
                        break;
                    case global.moveType.Overlap:
                        var newX = (tmpEmy.getPosition().x <= winSize.width/2) ? 320 : -320;
                        tmpAction = cc.MoveBy.actionWithDuration(4, cc.ccp(newX,-320));
                        break;
                }

                tmpEmy.setPosition(cc.ccp(80 + (winSize.width-160) * Math.random(), winSize.height));
                this.addChild(tmpEmy,global.Tag.Enemy);
                tmpEmy.runAction(tmpAction);
            }

            // ship
            this._ship = new Ship();
            this._ship.setPosition(this._ship.appearPosition);
            this.addChild(this._ship);

            // accept touch now!
            this.setIsTouchEnabled(true);

            //accept keypad
            this.setIsKeypadEnabled(true);

            // schedule
            this.schedule(this.update);
            this.schedule(this.shoot, 1 / 4);
            bRet = true;
        }
        return bRet;
    },
    ccTouchesEnded:function (pTouches, pEvent) {
        if (pTouches.length <= 0)
            return;

        var touch = pTouches[0];
        var location = touch.locationInView(touch.view());
        // 让飞船在1秒钟内移动过去
        this._ship.runAction(cc.MoveTo.actionWithDuration(1.0, cc.ccp(location.x, location.y)));
    },
    keyDown:function (e) {
        keys[e] = true;
    },
    keyUp:function (e) {
        keys[e] = false;
    },
    update:function (dt) {
        for (var i = 0; i < this._m_pChildren.length; i++) {
            this._m_pChildren[i].update(dt);
        }

        //remove bullet out of screen
        for (var i in this.getChildren()) {
            if ((this.getChildren()[i].getTag() == global.bulletTag) && !this.getChildren()[i].active) {
                this.getChildren()[i].destroy();
            }
        }
    },
    shoot:function (dt) {
        this._ship.shoot(dt);
    }

});

GameLayer.node = function () {
    var sg = new GameLayer();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};

GameLayer.scene = function () {
    var scene = cc.Scene.node();
    var layer = GameLayer.node();
    scene.addChild(layer);
    return scene;
};