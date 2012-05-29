var keys = [];
var winSize = null;

var Ship = cc.Sprite.extend({
    speed:220,
    bulletSpeed:700,
    HP:10,
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
    appearPosition:cc.ccp(160, 0),
    _hurtColorLife:0,
    active:true,
    ctor:function () {
        //init life
        this.life = global.level + 4;
        var shipTexture = cc.TextureCache.sharedTextureCache().addImage(s_ship01);
        this.initWithTexture(shipTexture, cc.RectMake(0, 0, 90, 56));
        this.setTag(this.zOrder);
        this.setPosition(this.appearPosition);
        // set frame
        var animation = cc.Animation.animation();
        animation.addFrameWithTexture(shipTexture, cc.RectMake(0, 0, 90, 56));
        animation.addFrameWithTexture(shipTexture, cc.RectMake(90, 0, 90, 56));

        // ship animate
        var action = cc.Animate.actionWithDuration(0.4, animation, true);

        var onBorn = cc.CallFunc.actionWithTarget(this,function(pSender){
            pSender.runAction(cc.RepeatForever.actionWithAction(action));
        });
        this.runAction(cc.Sequence.actions(
            cc.MoveBy.actionWithDuration(0.5,cc.ccp(0, 60)),onBorn
        ));
        this.schedule(this.shoot, 1 / 10);
    },
    update:function (dt) {
        var newX = this.getPosition().x, newY = this.getPosition().y;
        if (keys[cc.key.w]  && this.getPosition().y <= winSize.height) {
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

        if (this.HP <= 0) {
            this.active = false;
        }
        this._timeTick += dt;
        if (this._timeTick > 0.1) {
            this._timeTick = 0;
            if (this._hurtColorLife > 0) {
                this._hurtColorLife--;
            }
            if (this._hurtColorLife == 1) {
                this.setColor(new cc.Color3B(255, 255, 255));
            }
        }
    },
    shoot:function (dt) {
        if (this.canShot) {
            var b = new Bullet(this.bulletSpeed, "W1.png", global.AttackMode.Normal);
            this.getParent().addChild(b, b.zOrder, global.Tag.ShipBullet);
            b.setPosition(cc.ccp(this.getPosition().x, this.getPosition().y + this.getContentSize().height * 0.3));
        }
    },
    destroy:function () {
        global.life--;
        this.getParent().addChild(new Explosion(this.getPosition().x, this.getPosition().y));
        this.getParent().removeChild(this);
    },
    throwBomb:function () {
    },
    hurt:function () {
        this._hurtColorLife = 2;
        this.HP--;
        this.setColor(cc.RED());
        this.runAction(cc.Sequence.actions(
            cc.MoveBy.actionWithDuration(0.05,cc.ccp(2.5,5)),
            cc.MoveBy.actionWithDuration(0.05,cc.ccp(-5,-5)),
            cc.MoveBy.actionWithDuration(0.05,cc.ccp(5,-2.5))
        ));
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
    attackMode:global.AttackMode.Normal,
    parentType:global.bulletType.Ship,
    ctor:function (bulletSpeed, weaponType, attackMode) {
        this.yVolocity = -bulletSpeed;
        this.attackMode = attackMode;
        cc.SpriteFrameCache.sharedSpriteFrameCache().addSpriteFramesWithFile(s_bullet_plist);
        this.initWithSpriteFrameName(weaponType);

        /*var tmpAction;
        switch (this.attackMode) {
            case global.AttackMode.Normal:
                tmpAction = cc.MoveBy.actionWithDuration(2, cc.ccp(this.getPosition().x, 400));
                break;
            case global.AttackMode.Tsuihikidan:
                tmpAction = cc.MoveTo.actionWithDuration(2, GameLayer.node()._ship.getPosition());
                break;
        }
        this.runAction(tmpAction);*/

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
        if (this.HP <= 0) {
            this.active = false;
        }
    },
    destroy:function () {
        this.getParent().removeChild(this);
    },
    draw:function (ctx) {
        var context = ctx || cc.renderContext;
        context.globalCompositeOperation = 'lighter';
        this._super(ctx);
    },
    hurt:function () {
        this.HP--;
    }
})

var Explosion = cc.Sprite.extend({
    ctor:function (x, y) {
        cc.SpriteFrameCache.sharedSpriteFrameCache().addSpriteFramesWithFile(s_explosion_plist);
        var pFrame = cc.SpriteFrameCache.sharedSpriteFrameCache().spriteFrameByName("explosion_01.png");
        this.initWithSpriteFrame(pFrame);

        var animFrames = [];
        var str = "";
        for (var i = 1; i < 35; i++) {
            str = "explosion_" + (i < 10 ? ("0" + i) : i) + ".png";
            var frame = cc.SpriteFrameCache.sharedSpriteFrameCache().spriteFrameByName(str);
            animFrames.push(frame);
        }
        var animation = cc.Animation.animationWithFrames(animFrames, 0.04);

        this.setPosition(cc.ccp(x, y));
        this.runAction(cc.Sequence.actions(
            cc.Animate.actionWithAnimation(animation, false),
            cc.CallFunc.actionWithTarget(this, this.destroy)
        ));
    },
    update:function () {

    },
    draw:function (ctx) {
        var context = ctx || cc.renderContext;
        context.globalCompositeOperation = 'lighter';
        this._super(ctx);
    },
    destroy:function () {
        this.getParent().removeChild(this);
    }
});

var Enemy = cc.Sprite.extend({
    active:true,
    speed:200,
    bulletSpeed:-200,
    HP:15,
    bulletPowerValue:1,
    moveType:null,
    scoreValue:200,
    canBeAttack:true,
    zOrder:1000,
    delayTime:1.5 + 1.5 * Math.random(),
    attackMode:global.AttackMode.Normal,
    ctor:function (arg) {
        this.HP = arg.HP;
        this.moveType = arg.moveType;
        this.scoreValue = arg.scoreValue;
        this.attackMode = arg.attackMode;
        cc.SpriteFrameCache.sharedSpriteFrameCache().addSpriteFramesWithFile(s_Enemy_plist, s_Enemy);
        this.initWithSpriteFrameName(arg.textureName);
        this.schedule(this.shoot, this.delayTime)
    },
    _timeTick:0,
    update:function (dt) {
        if (this.HP <= 0) {
            this.active = false;
        }
        this._timeTick += dt;
        if (this._timeTick > 0.1) {
            this._timeTick = 0;
            if (this._hurtColorLife > 0) {
                this._hurtColorLife--;
            }
            if (this._hurtColorLife == 1) {
                this.setColor(new cc.Color3B(255, 255, 255));
            }
        }
    },
    destroy:function () {
        global.score += this.scoreValue;
        this.getParent().addChild(new Explosion(this.getPosition().x, this.getPosition().y));
        this.getParent().removeChild(this);
    },
    shoot:function () {
        var b = new Bullet(this.bulletSpeed, "W2.png", this.attackMode);
        this.getParent().addChild(b, b.zOrder, global.Tag.EnemyBullet);
        b.setPosition(cc.ccp(this.getPosition().x, this.getPosition().y - this.getContentSize().height * 0.2));
    },
    _hurtColorLife:0,
    hurt:function () {
        this._hurtColorLife = 2;
        this.HP--;
        this.setColor(cc.RED());
    }
});

var GameLayer = cc.Layer.extend({
    _time:null,
    _ship:null,
    _backSky:null,
    _backSkyHeight:0,
    _backSkyRe:null,
    _backTileMap:null,
    _backTileMapHeight:0,
    _backTileMapRe:null,
    _levelManager:null,
    _tmpScore:0,
    lbScore:null,
    screenRect:null,
    init:function () {
        var bRet = false;
        if (this._super()) {
            winSize = cc.Director.sharedDirector().getWinSize();
            this._levelManager = new LevelManager(this);
            this.initBackground();
            this.screenRect = new cc.Rect(0, 0, winSize.width, winSize.height);

            // score
            this.lbScore = cc.LabelTTF.labelWithString("Score: 0", cc.SizeMake(winSize.width / 2, 50), cc.TextAlignmentRight, "Arial", 14);
            this.addChild(this.lbScore, 1000);
            this.lbScore.setPosition(cc.ccp(winSize.width - 100, winSize.height - 15));

            // ship life
            var shipTexture = cc.TextureCache.sharedTextureCache().addImage(s_ship01);
            var life = cc.Sprite.spriteWithTexture(shipTexture, cc.RectMake(0, 0, 90, 56));
            life.setScale(0.5);
            life.setPosition(cc.ccp(30, 460));
            this.addChild(life, 1, 5);

            // ship Life count
            this._lbLife = cc.LabelTTF.labelWithString("0", "Arial", 20);
            this._lbLife.setPosition(cc.ccp(60, 463));
            this._lbLife.setColor(cc.RED());
            this.addChild(this._lbLife,1000);

            // ship
            this._ship = new Ship();
            this.addChild(this._ship,this._ship.zOrder,global.Tag.Ship);

            // accept touch now!
            this.setIsTouchEnabled(true);

            //accept keypad
            this.setIsKeypadEnabled(true);

            // schedule
            this.schedule(this.update);
            this.schedule(this.checkEnemyIsInBound, 5);
            this.schedule(this.timeCounter, 1);

            bRet = true;
        }
        return bRet;
    },
    timeCounter:function () {
        this._time++;

        var minute = 0 | (this._time / 60);
        var second = this._time % 60;
        minute = minute > 9 ? minute : "0" + minute;
        second = second > 9 ? second : "0" + second;
        var curTime = minute + ":" + second;
        this._levelManager.loadLevelResource(this._time);
    },
    updateUI:function(dt){
        if(this._tmpScore < global.score){
            this._tmpScore += 5;
        }
        this._lbLife.setString(global.life);
        this.lbScore.setString("Score: " + this._tmpScore);
    },
    initBackground:function () {
        // bg
        this._backSky = cc.Sprite.spriteWithFile(s_bg01);
        this._backSky.setAnchorPoint(cc.PointZero());
        this._backSkyHeight = this._backSky.getContentSize().height;
        this.addChild(this._backSky, -10);

        //tilemap
        this._backTileMap = cc.TMXTiledMap.tiledMapWithTMXFile(s_level01);
        this.addChild(this._backTileMap, -9);
        this._backTileMapHeight = this._backTileMap.getMapSize().height * this._backTileMap.getTileSize().height;

        this._backSkyHeight -= 48;
        this._backTileMapHeight -= 200;
        this._backSky.runAction(cc.MoveBy.actionWithDuration(3, new cc.Point(0, -48)));
        this._backTileMap.runAction(cc.MoveBy.actionWithDuration(3, new cc.Point(0, -200)));

        this.schedule(this.movingBackground, 3);
    },

    _isBackSkyReload:false,
    _isBackTileReload:false,
    movingBackground:function () {
        this._backSky.runAction(cc.MoveBy.actionWithDuration(3, new cc.Point(0, -48)));
        this._backTileMap.runAction(cc.MoveBy.actionWithDuration(3, new cc.Point(0, -200)));
        this._backSkyHeight -= 48;
        this._backTileMapHeight -= 200;

        if (this._backSkyHeight <= winSize.height) {
            if (!this._isBackSkyReload) {
                this._backSkyRe = cc.Sprite.spriteWithFile(s_bg01);
                this._backSkyRe.setAnchorPoint(cc.PointZero());
                this.addChild(this._backSkyRe, -10);
                this._backSkyRe.setPosition(new cc.Point(0, winSize.height));
                this._isBackSkyReload = true;
            }
            this._backSkyRe.runAction(cc.MoveBy.actionWithDuration(3, new cc.Point(0, -48)));
        }
        if (this._backSkyHeight <= 0) {
            this._backSkyHeight = this._backSky.getContentSize().height;
            this.removeChild(this._backSky);
            this._backSky = this._backSkyRe;
            this._backSkyRe = null;
            this._isBackSkyReload = false;
        }

        if (this._backTileMapHeight <= winSize.height) {
            if (!this._isBackTileReload) {
                this._backTileMapRe = cc.TMXTiledMap.tiledMapWithTMXFile(s_level01);
                this.addChild(this._backTileMapRe, -9);
                this._backTileMapRe.setPosition(new cc.Point(0, winSize.height));
                this._isBackTileReload = true;
            }
            this._backTileMapRe.runAction(cc.MoveBy.actionWithDuration(3, new cc.Point(0, -200)));
        }
        if (this._backTileMapHeight <= 0) {
            this._backTileMapHeight = this._backTileMapRe.getMapSize().height * this._backTileMapRe.getTileSize().height;
            this.removeChild(this._backTileMap);
            this._backTileMap = this._backTileMapRe;
            this._backTileMapRe = null;
            this._isBackTileReload = false;
        }
    },
    checkEnemyIsInBound:function () {
        var layerChildren = this.getChildren();
        for (var i = 0; i < layerChildren.length; i++) {
            var selChild = layerChildren[i];
            if (selChild.getTag() == global.Tag.Enemy) {
                var childRect = selChild.boundingBoxToWorld();
                if (!cc.Rect.CCRectIntersectsRect(this.screenRect, childRect)) {
                    this.removeChild(selChild, true);
                }
            }
        }
    },
    shakingScreen:function(){

    },
    ccTouchesEnded:function (pTouches, pEvent) {
        if (pTouches.length <= 0)
            return;

        var touch = pTouches[0];
        var location = touch.locationInView(touch.view());
        //this._ship.runAction(cc.MoveTo.actionWithDuration(1.0, cc.ccp(location.x, location.y)));
    },
    keyDown:function (e) {
        keys[e] = true;
    },
    keyUp:function (e) {
        keys[e] = false;
    },
    update:function (dt) {
        var pChild, pxChild, bulletChild;
        //check collide
        for (var i in this.getChildren()) {
            pxChild = this.getChildren()[i];
            if (pxChild.getTag() == global.Tag.Enemy) {
                for (var j in this.getChildren()) {
                    bulletChild = this.getChildren()[j];
                    if (bulletChild.getTag() == global.Tag.ShipBullet) {
                        if (this.collide(pxChild, bulletChild)) {
                            bulletChild.hurt();
                            pxChild.hurt();
                        }
                    }
                }
                if(this.collide(pxChild, this._ship)){
                    if(this._ship.active){
                        pxChild.hurt();
                        this._ship.hurt();
                    }
                }
            }
            else if (pxChild.getTag() == global.Tag.EnemyBullet){
                if (this.collide(pxChild, this._ship)) {
                    if(this._ship.active){
                    pxChild.hurt();
                    this._ship.hurt();
                    }
                }
            }
        }


        //remove child
        for (var i in this.getChildren()) {
            pChild = this.getChildren()[i];
            if (pChild) {
                pChild.update(dt);
                if ((pChild.getTag() == global.Tag.Ship) || (pChild.getTag() == global.Tag.ShipBullet) ||
                    (pChild.getTag() == global.Tag.Enemy) || (pChild.getTag() == global.Tag.EnemyBullet)) {
                    if (pChild && !pChild.active) {
                        pChild.destroy();
                    }
                }
            }
        }

        if(global.life > 0 && !this._ship.active){
            // ship
            this._ship = new Ship();
            this.addChild(this._ship,this._ship.zOrder,global.Tag.Ship);
        }
        else if(global.life <= 0 && !this._ship.active){
            this.runAction(cc.Sequence.actions(
                cc.DelayTime.actionWithDuration(3),
                cc.CallFunc.actionWithTarget(this,this.onGameOver)))
        }


        this.updateUI();
    },
    shoot:function (dt) {
        //enemy shoot
        var pChild;
        for (var i in this.getChildren()) {
            pChild = this.getChildren()[i];
            if (pChild && pChild.getTag() == global.Tag.Enemy) {
                pChild.shoot();
            }
        }
    },
    collide:function (a, b) {
        return a.getPosition().x - a.getContentSize().width * a.getAnchorPoint().x < b.getPosition().x - b.getContentSize().width * b.getAnchorPoint().x + b.getContentSize().width &&
            a.getPosition().x - a.getContentSize().width * a.getAnchorPoint().x + a.getContentSize().width > b.getPosition().x - b.getContentSize().width * b.getAnchorPoint().x &&
            a.getPosition().y - a.getContentSize().height * a.getAnchorPoint().y < b.getPosition().y + b.getContentSize().height &&
            a.getPosition().y - a.getContentSize().height * a.getAnchorPoint().y + a.getContentSize().height > b.getPosition().y - b.getContentSize().height * b.getAnchorPoint().y;
    },
    onGameOver:function () {
        var scene = cc.Scene.node();
        scene.addChild(GameOver.node());
        cc.Director.sharedDirector().replaceScene(cc.TransitionFade.transitionWithDuration(1.2,scene));
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
    scene.addChild(layer,1);
    return scene;
};