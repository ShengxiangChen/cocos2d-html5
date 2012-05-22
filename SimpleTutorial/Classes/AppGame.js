var plane = cc.Sprite.extend({
    x:200,
    y:450,
    speed:8,
    color:"#ff0000",
    hp:3,
    ctor:function(){
        this._super();
    },
    shoot:function(){
        var bulletPosition = this.midpoint();
        /*pl.playerBullets.push(Bullet({
         speed:15,
         x:bulletPosition.x,
         y:bulletPosition.y
         }))*/
    },
    boom:function(){
        console.log("扔炸弹啦");
    },
    midpoint:function(){
        return {
            x:this.x + (this.width/2) - 4,
            y:this.y
        }
    },
    explode:function(){
        if (this.hp >0 ){
            this.hp -= 1;
        }
    }
});
var spaceGame = cc.Layer.extend({
    _batchNode:null,
    _ship:null,
    _spacedust1:null,
    _spacedust2:null,
    _planetsunrise:null,
    _galaxy:null,
    _spacialanomaly:null,
    _spacialanomaly2:null,
    _backgroundNode:null,
    _shipPointsPerSec:100,
    init:function(){
        var winSize = cc.Director.sharedDirector().getWinSize();
        this._ship = new plane();
        this._ship.initWithFile(s_plane);
        this._ship.setPosition(cc.ccp(winSize.width/2,winSize.height/2))
        this.addChild(this._ship,1)
        return true;
    },
    update:function(dt){
        var winSize = cc.Director.sharedDirector().getWinSize();
        var diff = this._shipPointsPerSec * dt;
        var newX = this._ship.getPositionX() + diff;
        var newY = this._ship.getPositionY() + diff;
        this._ship.setPosition(cc.ccp(newX,newY))
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