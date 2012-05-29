var GameOver = cc.Layer.extend({
    _ship:null,
    _s:null,
    init:function () {
        var bRet = false;
        if (this._super) {
            this._s = cc.Director.sharedDirector().getWinSize();
            var sp = cc.Sprite.spriteWithFile(s_loading);
            sp.setAnchorPoint(cc.PointZero());
            this.addChild(sp, 0, 1);

            var logo = cc.Sprite.spriteWithFile(s_gameOver);
            logo.setAnchorPoint(cc.ccp(0,0));
            logo.setPosition(cc.ccp(0,300));
            this.addChild(logo,10,1);

            var playAgainNormal = cc.Sprite.spriteWithFile(s_menu, cc.RectMake(0, 0, 126, 33));
            var playAgainSelected = cc.Sprite.spriteWithFile(s_menu, cc.RectMake(0, 33, 126, 33));
            var playAgainDisabled = cc.Sprite.spriteWithFile(s_menu, cc.RectMake(0, 33 * 2, 126, 33));

            var playAgain = cc.MenuItemSprite.itemFromNormalSprite(playAgainNormal, playAgainSelected, playAgainDisabled, this, function(){
                flareEffect(this,this,this.onNewGame);
            });

            var menu = cc.Menu.menuWithItems(playAgain);
            this.addChild(menu, 1, 2);
            menu.setPosition(cc.ccp(this._s.width / 2, this._s.height / 2 - 80));

            this.schedule(this.update,0.1);

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
    onPlayAgain:function (pSender) {
        var scene = cc.Scene.node();
        scene.addChild(GameLayer.node());
        scene.addChild(GameControlMenu.node());
        cc.Director.sharedDirector().replaceScene(cc.TransitionFade.transitionWithDuration(1.2,scene));
    },
    update:function(){
    }
});

GameOver.node = function () {
    var sg = new GameOver();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};

GameOver.scene = function () {
    var scene = cc.Scene.node();
    var layer = GameOver.node();
    scene.addChild(layer);
    return scene;
};