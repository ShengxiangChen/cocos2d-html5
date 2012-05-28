var SettingsLayer = cc.Layer.extend({
    init:function(){
        var bRet = false;
        if(this._super()){
            this._s = cc.Director.sharedDirector().getWinSize();
            // 用一个图片做画面的背景
            var sp = cc.Sprite.spriteWithFile(s_loading);
            sp.setAnchorPoint(cc.PointZero());
            // 既然是背景，zOrder值尽量小。
            this.addChild(sp, 0, 1);

            var cacheImage = cc.TextureCache.sharedTextureCache().addImage(s_menuTitle)
            var title = cc.Sprite.spriteWithTexture(cacheImage,cc.RectMake(0,0,134,34));
            title.setPosition(cc.ccp(this._s.width/2,this._s.height-120));
            this.addChild(title);

            // 设置标题字体
            cc.MenuItemFont.setFontName("Arial");
            cc.MenuItemFont.setFontSize(18);
            // 用一个禁用状态的菜单项作为标题
            var title1 = cc.MenuItemFont.itemFromString("Sound");
            title1.setIsEnabled(false);

            // 设置选项字体（设置不同的字体以示与标题的区别）
            cc.MenuItemFont.setFontName("Arial");
            cc.MenuItemFont.setFontSize(26);
            // 设置可切换的菜单项，菜单状态：开、关。
            var item1 = cc.MenuItemToggle.itemWithTarget(null, null,
                cc.MenuItemFont.itemFromString("On"), cc.MenuItemFont.itemFromString("Off"), null);

            // 设置标题字体
            cc.MenuItemFont.setFontName("Arial");
            cc.MenuItemFont.setFontSize(18);
            var title2 = cc.MenuItemFont.itemFromString("Music");
            title2.setIsEnabled(false);

            // 设置选项字体
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

            // 设置多选项效果。首先加入一个子选项（subItems），再加入一个包含了多个子菜单的数组。
            cc.MenuItemFont.setFontName("Arial");
            cc.MenuItemFont.setFontSize(26);
            var item4 = cc.MenuItemToggle.itemWithTarget(null, null,cc.MenuItemFont.itemFromString("Easy"), null);
            var more_items =[cc.MenuItemFont.itemFromString("Normal"),
                cc.MenuItemFont.itemFromString("Hard"), cc.MenuItemFont.itemFromString("Nightmare"), null]
            // TIP: you can manipulate the items like any other cc.MutableArray
            //item4.getSubItems().addObjectsFromArray(more_items);
            // you can change the one of the items by doing this
            item4.setSelectedIndex(0);

            cc.MenuItemFont.setFontName("Arial");
            cc.MenuItemFont.setFontSize(26);
            var label = cc.LabelTTF.labelWithString("Go back", "Arial",20);
            var back = cc.MenuItemLabel.itemWithLabel(label, this, this.backCallback);
            back.setScale(0.8);

            // 组合创建菜单层
            var menu = cc.Menu.menuWithItems(title1, title2, item1, item2,
                title3, title4, item3, item4, back, null);
            // 设置多列的菜单项布局
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