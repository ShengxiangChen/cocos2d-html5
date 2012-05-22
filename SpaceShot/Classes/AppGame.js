var keys = [];
//ship
var Ship = cc.Sprite.extend({
    speed:6,
    hp:3,
    ctor:function () {
        this.initWithFile(s_plane);
    },
    shoot:function () {
        /*pl.playerBullets.push(Bullet({
         speed:15,
         x:bulletPosition.x,
         y:bulletPosition.y
         }))*/
    },
    explode:function () {
        if (this.hp > 0) {
            this.hp -= 1;
        }
    },
    update:function () {
        var newX = this.getPositionX(), newY = this.getPositionY();
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
        this.setPosition(cc.ccp(newX, newY));
    }
});

//Ememy
var Ememy = cc.Sprite.extend({
    active:true,
    age:Math.floor(Math.random() * 128),
    xVolocity:0,
    yVolocity:2,
    ctor:function(){
      this.initWithFile(s_ememy1);
      this.setPosition(cc.ccp(100 + Math.random() * 200,cc.canvas.height));
    },
    inBounds:function () {
        var I = this.getPosition();
        return I.x >= 0 && I.x <= 400 && I.y >= 0 && I.y <= 550;
    },
    update:function () {
        var newX = this.getPositionX(),newY = this.getPositionY();
        newX -= this.xVolocity;
        newY -= this.yVolocity;
        this.setPosition(cc.ccp(newX, newY));
        this.xVolocity = 3 * Math.sin(this.age * Math.PI / 64);
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
    yVolocity:-this.speed,
    inBounds:function () {
        return this.x >= 0 && this.x <= 400 && this.y >= 0 && this.y <= 550;
    },
    update:function () {
        this.x += this.xVolocity;
        this.y += this.yVolocity;
        this.active = this.active && this.inBounds();
    }
})

var spaceGame = cc.Layer.extend({
    _batchNode:null,
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
    update:function(){
        if(Math.random() < 0.1){
            var em = new Ememy();
            this.addChild(em);
            em.update()
        }
        this._ship.update();
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