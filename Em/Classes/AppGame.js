var spaceGame = cc.Layer.extend({

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