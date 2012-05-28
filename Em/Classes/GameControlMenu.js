var GameControlMenu = cc.Layer.extend({
    init:function () {
        var bRet = false;
        if (this._super()) {
            cc.MenuItemFont.setFontSize(22);
            var s = cc.Director.sharedDirector().getWinSize();
            var systemMenu = cc.MenuItemFont.itemFromString("Main Menu", this, this.sysMenu);
            var menu = cc.Menu.menuWithItems(systemMenu, null);
            menu.setPosition(cc.ccp(0, 0));
            systemMenu.setAnchorPoint(cc.ccp(0, 0));
            systemMenu.setPosition(cc.ccp(s.width-110, 10));
            this.addChild(menu, 1, 2);
            bRet = true;
        }

        return bRet;
    },
    sysMenu:function (pSender) {
        var scene = cc.Scene.node();
        scene.addChild(SysMenu.node());
        cc.Director.sharedDirector().replaceScene(cc.TransitionFade.transitionWithDuration(1.2,scene));
    }
});

GameControlMenu.node = function () {
    var sg = new GameControlMenu();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};