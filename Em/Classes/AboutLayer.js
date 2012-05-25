var AboutLayer = cc.Layer.extend({
    init:function () {
        var bRet = false;
        if (this._super()) {
            var s = cc.Director.sharedDirector().getWinSize();

            var sp = cc.Sprite.spriteWithFile(s_loading);
            sp.setAnchorPoint(cc.PointZero());
            this.addChild(sp, 0, 1);

            var cacheImage = cc.TextureCache.sharedTextureCache().addImage(s_menuTitle)
            var title = cc.Sprite.spriteWithTexture(cacheImage, cc.RectMake(0, 34, 100, 34));
            title.setPosition(cc.ccp(s.width / 2, s.height - 120));
            this.addChild(title);

            var about = cc.LabelTTF.labelWithString("\n \n This is a first game using cocos2d- html5 engine,It’s a smaple game to test the performance.You can revise this smaple by yourself.We sincerely expect more and more excellent  developers to join in our team.",cc.SizeMake(s.width * 0.85 ,100),cc.TextAlignmentLeft,"Arial",16)
            about.setPosition(cc.ccp(s.width/2,s.height/2));
            this.addChild(about);

            var author = cc.LabelTTF.labelWithString("Author: \n Shengxiang Chen",cc.SizeMake(s.width * 0.85 ,100),cc.TextAlignmentLeft,"Arial",16)
            author.setPosition(cc.ccp(s.width/2,s.height/4+30));
            this.addChild(author);

            var label = cc.LabelTTF.labelWithString("Go back", "Arial", 14);
            var back = cc.MenuItemLabel.itemWithLabel(label, this, this.backCallback);
            var menu = cc.Menu.menuWithItems(back);
            menu.setPosition(cc.ccp(s.width/2,s.height/5));
            this.addChild(menu);
            bRet = true;
        }

        return bRet;
    },
    backCallback:function (pSender) {
        var scene = cc.Scene.node();
        scene.addChild(SysMenu.node());
        cc.Director.sharedDirector().replaceScene(scene);
    }
});

AboutLayer.node = function () {
    var sg = new AboutLayer();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};