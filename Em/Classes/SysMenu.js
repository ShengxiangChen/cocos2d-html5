var _shipTemp = cc.Sprite.extend({

});

var SysMenu = cc.Layer.extend({
    _ship:null,
    _s:null,
    init:function () {
        var bRet = false;
        if (this._super) {
            this._s = cc.Director.sharedDirector().getWinSize();
            // 用一个图片做画面的背景
            var sp = cc.Sprite.spriteWithFile(s_loading);
            sp.setAnchorPoint(cc.PointZero());
            // 既然是背景，zOrder值尽量小。
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

            // 逐一创建3个菜单项
            var newGame = cc.MenuItemSprite.itemFromNormalSprite(newGameNormal, newGameSelected, newGameDisabled, this, this.onNewGame);
            var gameSettings = cc.MenuItemSprite.itemFromNormalSprite(gameSettingsNormal, gameSettingsSelected, gameSettingsDisabled, this, this.onSettings);
            var about = cc.MenuItemSprite.itemFromNormalSprite(aboutNormal, aboutSelected, aboutDisabled, this, this.onAbout);

            // 将这些菜单项都加入到菜单对象中
            var menu = cc.Menu.menuWithItems(newGame, gameSettings, about);
            // 设置菜单以纵向布局显示
            menu.alignItemsVerticallyWithPadding(10);
            // 最重要的是不要忘记把菜单加入主层对象，否则不会显示
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
        // 特别说明，我们将游戏层和控制层在此分开，由scene作为他们统一的父节点。
        scene.addChild(GameLayer.node());
        scene.addChild(GameControlMenu.node());
        // 从右至左滚动画面切换到游戏场景。
        cc.Director.sharedDirector().replaceScene(scene);
    },
    onSettings:function (pSender) {
        var scene = cc.Scene.node();
        scene.addChild(SettingsLayer.node());
        // 缩放变换切换到游戏设置画面。
        cc.Director.sharedDirector().replaceScene(scene);
    },
    onAbout:function (pSender) {
        var scene = cc.Scene.node();
        scene.addChild(AboutLayer.node());
        // 缩放变换切换到游戏设置画面。
        cc.Director.sharedDirector().replaceScene(scene);
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