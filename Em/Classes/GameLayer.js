var keys = [];

var Ship = cc.Sprite.extend({
    wid:50,
    hig:50,
    weaponspeed:1,
    weapontype:1,
    weapondamage:1,
    firechoice:1,
    firenum:1,
    gunk:1,
    gunc:1,
    gunm:1,
    attri:0,
    useonce:false,
    rotval:0,
    orifiremulti:0,
    speedram:0,
    weaponrotation:0,
    infect:0,
    gotox:0,
    typex:true,
    xc:-350,
    yc:-350,
    firetimer:0,
    freecounter:0,
    rotationx:0,
    _speed:200,
    _s:null,
    ctor:function () {
        var mgr = cc.SpriteBatchNode.batchNodeWithFile(s_ship01, 5);
        this.addChild(mgr, 0, 4);
        this._s = cc.Director.sharedDirector().getWinSize();
        this.initWithTexture(mgr.getTexture(), cc.RectMake(0, 0, 90, 56));
    },
    update:function (dt) {
        var newX = this.getPosition().x, newY = this.getPosition().y;
        if (keys[cc.key.w] && this.getPosition().y <= this._s.height) {
            newY = newY + dt * this._speed;
        }
        if (keys[cc.key.s] && this.getPosition().y >= 0) {
            newY = newY - dt * this._speed;
        }
        if (keys[cc.key.a] && this.getPosition().x >= 0) {
            newX = newX - dt * this._speed;
        }
        if (keys[cc.key.d] && this.getPosition().x <= this._s.width) {
            newX = newX + dt * this._speed;
        }
        this.setPosition(cc.ccp(newX, newY));
    },
    shipdamage:function (param1) {
        this.shieldcharge = this.chargedelay;
        this.resettint = 1;
        if (this.shp > 0) {
            this.shp = this.shp - param1 * this.defence;
            this.bars.a1.x = this.bars.a1.x + 5;
            this.alltint.setTint(3407871, 0.2);
            this.bars.a1.transform.colorTransform = this.alltint;
            this.alltint.setTint(2872831, 0.5);
            this.ship.ax.transform.colorTransform = this.alltint;
        }
        else {
            this.shieldtimer = 100;
            this.alltint.setTint(16777215, 0.2);
            this.bars.a2.transform.colorTransform = this.alltint;
            this.alltint.setTint(16722731, 0.5);
            this.ship.ax.transform.colorTransform = this.alltint;
            this.hp = this.hp - param1 * this.defence * this.armordefence;
            this.bars.a2.x = this.bars.a2.x + 5;
        }
        return;
    }
});

/*//bullet
var Bullet = cc.Sprite.extend({
    active:true,
    xVolocity:0,
    yVolocity:-6,
    ctor:function () {
        this.initWithFile(s_bullet);
    },
    inBounds:function () {
        var I = this.getPosition();
        return I.x >= 0 && I.x <= s.width && I.y >= 0 && I.y <= s.height;
    },
    update:function () {
        var newX = this.getPositionX(), newY = this.getPositionY();
        newX -= this.xVolocity;
        newY -= this.yVolocity;
        this.setPosition(cc.ccp(newX, newY));
        this.active = this.active && this.inBounds();
    }
})*/

var Enemy = cc.Sprite.extend({
    hp:0,
    weapon:null,
    path:null,
    textureName:"",
    espeed:1,
    wid:1,
    hig:1,
    hp:5,
    thp:5,
    yc:0,
    xc:0,
    yc2:0,
    xc2:0,
    firerate:0,
    firerate2:0,
    fireburst:0,
    fireburst2:0,
    firetimer:0,
    rebirthtimer:0,
    bonusval:0,
    helper:false,
    boss:false,
    helpernum:0,
    downrate:0,
    downrate2:0,
    hittol:0,
    rotspeed:1,
    otradiff:0,
    bossweaponnum:1,
    useok:true,
    bossweapons:new Array(),
    weaponselect:1,
    weapontim:1,
    bval:0,
    jump:0,
    xgoto:Math.random() * 700,
    ygoto:Math.random() * 500,
    deathx:0,
    rotationx:0,
    crashval:0,
    crashtol:0,
    hpflash:0,
    rotrandom:0,
    bossbehave:0,
    xdiff:0,
    xdiffval:1,
    orix:0,
    oriy:0,
    cont:1,
    yneg:0,
    infect:0,
    hitchance:0,
    rshield:0,
    rshieldori:0,
    rshieldgen:0,
    rshieldgenori:0,
    gotox2:0,
    weaponspeed:1,
    weapontype:1,
    weapondamage:1,
    firechoice:1,
    firenum:1,
    gunk:1,
    gunc:1,
    gunm:1,
    attri:0,
    useonce:false,
    rotval:0,
    orifiremulti:0,
    speedram:0,
    speedset:0,
    negtimer:0,
    negmode:0,
    weaponrotation:0,
    gotox:0,
    typex:false,
    ctor:function () {
        cc.SpriteFrameCache.sharedSpriteFrameCache().addSpriteFramesWithFile(s_Enemy_plist, s_Enemy);
        this.initWithSpriteFrameName(this.textureName);
    },
    update:function () {

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
            var s = cc.Director.sharedDirector().getWinSize();
            // 游戏场景背景图
            var bg = cc.Sprite.spriteWithFile(s_bg01);
            bg.setAnchorPoint(cc.PointZero());
            // 为了突出游戏场景中的精灵，将背景色彩变淡
            //this.addChild(bg, 0, 1);

            // 使用位图字体显示游戏时间
            //var lbScore = cc.LabelTTF.labelWithString("Time: 0","Arial",16);
            var lbScore = cc.LabelTTF.labelWithString("Time: 0", cc.SizeMake(s.width / 2, 50), cc.TextAlignmentRight, "Marker Felt", 16);
            this.addChild(lbScore, 1, 3);
            lbScore.setPosition(cc.ccp(s.width - 100, s.height - 45));

            // 载入飞船图像集。整个图像集仅载入一次，可以被使用多次。
            var mgr = cc.SpriteBatchNode.batchNodeWithFile(s_ship01, 5);
            this.addChild(mgr, 0, 4);

            // 在状态栏显示一个飞船的图标
            var sprite = cc.Sprite.spriteWithTexture(mgr.getTexture(), cc.RectMake(0, 0, 90, 56));
            sprite.setScale(0.5);
            mgr.addChild(sprite, 1, 5);
            sprite.setAnchorPoint(cc.ccp(0, 1));
            sprite.setPosition(cc.ccp(10, 460));

            // 显示当前飞船生命条数
            var lbLife = cc.LabelTTF.labelWithString("3", "Arial", 20);
            lbLife.setAnchorPoint(cc.ccp(0, 1));
            this.addChild(lbLife, 100, 6);
            lbLife.setPosition(cc.ccp(50, 450));


            //Enemy
            var e1 = new E1();
            e1.setPosition(cc.ccp(s.width / 2, s.height / 2));
            this.addChild(e1, 11);

            var e2 = new E2();
            e2.setPosition(cc.ccp(s.width / 2, s.height / 2));
            this.addChild(e2, 12);

            var e3 = new E3();
            e3.setPosition(cc.ccp(s.width / 2, s.height / 2));
            this.addChild(e3, 13);

            var e4 = new E4();
            e4.setPosition(cc.ccp(s.width / 2, s.height / 2));
            this.addChild(e4, 14);

            var e5 = new E5();
            e5.setPosition(cc.ccp(s.width / 2, s.height / 2));
            this.addChild(e5, 15);

            var e6 = new E6();
            e6.setPosition(cc.ccp(s.width / 2, s.height / 2));
            //this.addChild(e6,16);

            // schedule
            this.schedule(this.update);

            //tilemap
            var level01TileMap = cc.TMXTiledMap.tiledMapWithTMXFile(s_level01);

            //parallax
            var voidNode = cc.ParallaxNode.node();
            voidNode.addChild(bg, -1, cc.ccp(1, 1), cc.PointZero());
            voidNode.addChild(level01TileMap, 2, cc.ccp(2, 2), cc.PointZero());

            var voidNodeUp = cc.MoveBy.actionWithDuration(60, cc.ccp(0, -bg.getContentSize().height));
            voidNode.runAction(cc.RepeatForever.actionWithAction(voidNodeUp));
            this.addChild(voidNode, -1);

            // ship
            this._ship = new Ship();
            this._ship.setPosition(cc.ccp(160, 30));
            this.addChild(this._ship);
            //mgr.addChild(this._ship, 1, 99);

            // 设定动画每一帧的内容
            var animation = cc.Animation.animation();

            animation.addFrameWithTexture(mgr.getTexture(), cc.RectMake(0, 0, 90, 56));
            animation.addFrameWithTexture(mgr.getTexture(), cc.RectMake(90, 0, 90, 56));

            // animate
            var action = cc.Animate.actionWithDuration(0.4, animation, true);
            this._ship.runAction(cc.RepeatForever.actionWithAction(action));

            // accept touch now!
            this.setIsTouchEnabled(true);

            //accept keypad
            this.setIsKeypadEnabled(true);
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
        for (var k in e) {
            keys[k] = true;
        }
    },
    keyUp:function (e) {
        keys[e] = false;
    },
    update:function (dt) {
        this._ship.update(dt);
    },
    step:function (dt) {
        this.time += dt;
        var time_str = "Time:" + parseInt(this.time);
        var label1 = this.getChildByTag(3);
        label1.setString(time_str);
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