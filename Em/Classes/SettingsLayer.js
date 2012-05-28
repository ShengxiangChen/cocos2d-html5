var SettingsLayer = cc.Layer.extend({
    init:function(){
        var bRet = false;
        if(this._super()){
            this._s = cc.Director.sharedDirector().getWinSize();
            var sp = cc.Sprite.spriteWithFile(s_loading);
            sp.setAnchorPoint(cc.PointZero());
            this.addChild(sp, 0, 1);

            var cacheImage = cc.TextureCache.sharedTextureCache().addImage(s_menuTitle)
            var title = cc.Sprite.spriteWithTexture(cacheImage,cc.RectMake(0,0,134,34));
            title.setPosition(cc.ccp(this._s.width/2,this._s.height-120));
            this.addChild(title);

            cc.MenuItemFont.setFontName("Arial");
            cc.MenuItemFont.setFontSize(18);
            var title1 = cc.MenuItemFont.itemFromString("Sound");
            title1.setIsEnabled(false);

            cc.MenuItemFont.setFontName("Arial");
            cc.MenuItemFont.setFontSize(26);
            var item1 = cc.MenuItemToggle.itemWithTarget(null, null,
                cc.MenuItemFont.itemFromString("On"), cc.MenuItemFont.itemFromString("Off"), null);

            cc.MenuItemFont.setFontName("Arial");
            cc.MenuItemFont.setFontSize(18);
            var title2 = cc.MenuItemFont.itemFromString("Music");
            title2.setIsEnabled(false);

            cc.MenuItemFont.setFontName("Arial");
            cc.MenuItemFont.setFontSize(26);
            var item2 = cc.MenuItemToggle.itemWithTarget(null, null,
                cc.MenuItemFont.itemFromString("On"), cc.MenuItemFont.itemFromString("Off"), null);

            cc.MenuItemFont.setFontName("Arial");
            cc.MenuItemFont.setFontSize(18);
            var title3 = cc.MenuItemFont.itemFromString("AI");
            title3.setIsEnabled(false);

            cc.MenuItemFont.setFontName("Arial");
            cc.MenuItemFont.setFontSize(26);
            var item3 = cc.MenuItemToggle.itemWithTarget(null, null,
                cc.MenuItemFont.itemFromString("Attack"), cc.MenuItemFont.itemFromString("Defense"), null);

            cc.MenuItemFont.setFontName("Arial");
            cc.MenuItemFont.setFontSize(18);
            var title4 = cc.MenuItemFont.itemFromString("Mode");
            title4.setIsEnabled(false);

            cc.MenuItemFont.setFontName("Arial");
            cc.MenuItemFont.setFontSize(26);
            var item4 = cc.MenuItemToggle.itemWithTarget(null, null,cc.MenuItemFont.itemFromString("Easy"), null);
            var more_items =[cc.MenuItemFont.itemFromString("Normal"),
                cc.MenuItemFont.itemFromString("Hard"), cc.MenuItemFont.itemFromString("Nightmare"), null]
            item4.setSelectedIndex(0);

            cc.MenuItemFont.setFontName("Arial");
            cc.MenuItemFont.setFontSize(26);
            var label = cc.LabelTTF.labelWithString("Go back", "Arial",20);
            var back = cc.MenuItemLabel.itemWithLabel(label, this, this.backCallback);
            back.setScale(0.8);

            // 组合创建菜单层
            var menu = cc.Menu.menuWithItems(title1, title2, item1, item2,
                title3, title4, item3, item4, back, null);
            menu.alignItemsInColumns(2, 2, 2, 2, 1, null);
            this.addChild(menu);

            // 手工微调一下最后一个菜单项的位置
            var cp_back = back.getPosition();
            cp_back.y -= 50.0;
            back.setPosition(cp_back);

            bRet = true;
        }

        return bRet;
    },
    backCallback:function(pSender){
        var scene = cc.Scene.node();
        scene.addChild(SysMenu.node());
        cc.Director.sharedDirector().replaceScene(cc.TransitionFade.transitionWithDuration(1.2,scene));
    }
});

SettingsLayer.node = function () {
    var sg = new SettingsLayer();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};