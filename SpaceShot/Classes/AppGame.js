var keys = [];

//ship
var Ship = cc.Sprite.extend({
    speed:6,
    hp:3,
    ctor:function () {
        this.initWithFile(s_plane);
    },
    explode:function () {
        if (this.hp > 0) {
            this.hp -= 1;
        }
    },
    update:function () {
        var newX = this.getPosition().x, newY = this.getPosition().y;
        if (keys[cc.key.w]) {
            newY = newY + this.speed;
        }
        if (keys[cc.key.s]) {
            newY = newY - this.speed;
        }
        if (keys[cc.key.a]) {
            newX = newX - this.speed;
        }
        if (keys[cc.key.d]) {
            newX = newX + this.speed;
        }
        if(keys[cc.key.w] || keys[cc.key.s] || keys[cc.key.a] || keys[cc.key.d]){
            this.setPosition(cc.ccp(newX, newY));
        }
    }
});

//Ememy
var Ememy = cc.Sprite.extend({
    active:true,
    age:Math.floor(Math.random() * 128),
    xVolocity:0,
    yVolocity:1,
    ctor:function () {
        var texture = cc.TextureCache.sharedTextureCache().addImage(s_ememy1);
        var frame0 = cc.SpriteFrame.frameWithTexture(texture, cc.RectMake(0, 0, 24, 24));
        var frame1 = cc.SpriteFrame.frameWithTexture(texture, cc.RectMake(24, 0, 24, 24));
        var frame2 = cc.SpriteFrame.frameWithTexture(texture, cc.RectMake(24 * 2, 0, 24, 24));
        var frame3 = cc.SpriteFrame.frameWithTexture(texture, cc.RectMake(24 * 3, 0, 24, 24));
        var frame4 = cc.SpriteFrame.frameWithTexture(texture, cc.RectMake(24 * 4, 0, 24, 24));
        var frame5 = cc.SpriteFrame.frameWithTexture(texture, cc.RectMake(24 * 5, 0, 24, 24));
        var frame6 = cc.SpriteFrame.frameWithTexture(texture, cc.RectMake(24 * 6, 0, 24, 24));
        var frame7 = cc.SpriteFrame.frameWithTexture(texture, cc.RectMake(24 * 7, 0, 24, 24));
        var frame8 = cc.SpriteFrame.frameWithTexture(texture, cc.RectMake(24 * 8, 0, 24, 24));
        var frame9 = cc.SpriteFrame.frameWithTexture(texture, cc.RectMake(24 * 9, 0, 24, 24));
        var frame10 = cc.SpriteFrame.frameWithTexture(texture, cc.RectMake(24 * 10, 0, 24, 24));
        var frame11 = cc.SpriteFrame.frameWithTexture(texture, cc.RectMake(24 * 11, 0, 24, 24));
        var frame12 = cc.SpriteFrame.frameWithTexture(texture, cc.RectMake(24 * 12, 0, 24, 24));
        var frame13 = cc.SpriteFrame.frameWithTexture(texture, cc.RectMake(24 * 13, 0, 24, 24));
        var frame14 = cc.SpriteFrame.frameWithTexture(texture, cc.RectMake(24 * 14, 0, 24, 24));
        var frame15 = cc.SpriteFrame.frameWithTexture(texture, cc.RectMake(24 * 15, 0, 24, 24));

        this.initWithSpriteFrame(frame0);

        var animFrames = [];
        animFrames.push(frame0);
        animFrames.push(frame1);
        animFrames.push(frame2);
        animFrames.push(frame3);
        animFrames.push(frame4);
        animFrames.push(frame5);
        animFrames.push(frame6);
        animFrames.push(frame7);
        animFrames.push(frame8);
        animFrames.push(frame9);
        animFrames.push(frame10);
        animFrames.push(frame11);
        animFrames.push(frame12);
        animFrames.push(frame13);
        animFrames.push(frame14);
        animFrames.push(frame15);

        var animation = cc.Animation.animationWithFrames(animFrames, 0.1);
        var animate = cc.Animate.actionWithAnimation(animation, false);
        var seq = cc.Sequence.actions(animate);

        this.runAction(cc.RepeatForever.actionWithAction(seq));

        this.setPosition(cc.ccp(Math.random() * cc.canvas.width, cc.canvas.height));
    },
    inBounds:function () {
        var I = this.getPosition();
        return I.x >= 0 && I.x <= cc.canvas.width && I.y >= 0 && I.y <= cc.canvas.height;
    },
    update:function () {
        var newX = this.getPositionX(), newY = this.getPositionY();
        newX -= this.xVolocity;
        newY -= this.yVolocity;
        this.setPosition(cc.ccp(newX, newY));
        this.xVolocity = 2 * Math.sin(this.age * Math.PI / 64);
        this.age++;
        this.active = this.active && this.inBounds();
    },
    explode:function () {
        this.active = false;
    }
});

//bullet
var Bullet = cc.Sprite.extend({
    active:true,
    xVolocity:0,
    yVolocity:-6,
    ctor:function () {
        this.initWithFile(s_bullet);
    },
    inBounds:function () {
        return this.x >= 0 && this.x <= 400 && this.y >= 0 && this.y <= 550;
    },
    update:function () {
        var newX = this.getPositionX(), newY = this.getPositionY();
        newX -= this.xVolocity;
        newY -= this.yVolocity;
        this.setPosition(cc.ccp(newX, newY));
        this.active = this.active && this.inBounds();
    }
})

var spaceGame = cc.Layer.extend({
    _batchNode:[],
    _ship:null,
    init:function () {
        this.setIsKeypadEnabled(true);
        var winSize = cc.Director.sharedDirector().getWinSize();
        this._ship = new Ship();
        this._ship.setPosition(cc.ccp(winSize.width / 2, winSize.height / 10));
        this.addChild(this._ship, 1);

        this.schedule(this.update)
        return true;
    },
    keyDown:function (e) {
        for (var k in e) {
            keys[k] = true;
        }
    },
    keyUp:function (e) {
        keys[e] = false;
    },
    update:function () {
        if (keys[cc.key.j]) {
            var b = new Bullet();
            var p = this._ship.getPosition();
            this.addChild(b);
            b.setPosition(cc.ccp(p.x, p.y+ this._ship.getContentSize().height/2));
        }

        if (Math.random() < 0.1) {
            var em = new Ememy();
            this.addChild(em);
        }

        for (var i = 0; i < this._m_pChildren.length; i++) {
            var pChild = this._m_pChildren[i];
            pChild.update();
            if (pChild instanceof Ememy && !pChild.active) {
                this.removeChild(pChild);
            }
        }
    }
});

spaceGame.node = function () {
    var sg = new spaceGame();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};

spaceGame.scene = function () {
    var scene = cc.Scene.node();
    var layer = this.node();
    scene.addChild(layer)
    return scene;
}