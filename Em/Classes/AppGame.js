var Ship = cc.Sprite.extend({
    ctor:function(){
        this.initWithFile(s_ship01);
    }
});
var spaceGame = cc.Layer.extend({
    _ship:null,
    onEnter:function(){
        //bg
        var bg01 = cc.Sprite.spriteWithFile(s_bg01);
        bg01.setAnchorPoint(cc.ccp(0, 0));
        var voidNode = cc.ParallaxNode.node();
        voidNode.addChild(bg01, -1, cc.ccp(0, 0), cc.PointZero());

        var goUp = cc.MoveBy.actionWithDuration(4, cc.ccp(0, 100));
        var goDown = goUp.reverse();
        var go = cc.MoveBy.actionWithDuration(8, cc.ccp(200, 0));
        var goBack = go.reverse();
        var seq = cc.Sequence.actions(goUp, go, goDown, goBack, null);
        voidNode.runAction(cc.RepeatForever.actionWithAction(seq));
        this.addChild(voidNode,0);

        //ship
        this._ship = new Ship();
        this._ship.setPosition(cc.ccp(100,100));

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