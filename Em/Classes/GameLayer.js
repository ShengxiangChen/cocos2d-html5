var GameLayer = cc.Layer.extend({
    time:null,
    flight:null,
    init:function () {
        var bRet = false;
        if(this._super())
        {
            var s = cc.Director.sharedDirector().getWinSize();
            // 游戏场景背景图
            var bg = cc.Sprite.spriteWithFile(s_bg01);
            bg.setAnchorPoint(cc.PointZero());
            // 为了突出游戏场景中的精灵，将背景色彩变淡
            this.addChild(bg, 0, 1);

            // 使用位图字体显示游戏时间
            //var lbScore = cc.LabelTTF.labelWithString("Time: 0","Arial",16);
            var lbScore = cc.LabelTTF.labelWithString("Time: 0", cc.SizeMake(s.width/2, 50), cc.TextAlignmentRight, "Marker Felt", 16);
            this.addChild(lbScore, 1, 3);
            lbScore.setPosition(cc.ccp(s.width-100, s.height-45));

            // 载入飞船图像集。整个图像集仅载入一次，可以被使用多次。
            var mgr = cc.SpriteBatchNode.batchNodeWithFile(s_ship01, 5);
            this.addChild(mgr, 0, 4);

            // 在状态栏显示一个飞船的图标
            var sprite = cc.Sprite.spriteWithTexture(mgr.getTexture(), cc.RectMake(12, 9, 50, 37));
            mgr.addChild(sprite, 1, 5);
            sprite.setScale(1.1);
            sprite.setAnchorPoint(cc.ccp(0, 1));
            sprite.setPosition(cc.ccp(10, 460));

            // 显示当前飞船生命条数
            var lbLife = cc.LabelTTF.labelWithString("3","Arial",20);
            lbLife.setAnchorPoint(cc.ccp(0, 1));
            this.addChild(lbLife, 1, 6);
            lbLife.setPosition(cc.ccp(50, 450));

            // 设定时间回调函数，修改游戏用时显示
            this.schedule(this.step);


            // 显示飞船。为了让飞船有不断闪烁的火焰喷射效果，这是一个简单的重复性动作。
            // 在后面的章节中我们会专门讲解动作。
            this.flight = cc.Sprite.spriteWithTexture(mgr.getTexture(), cc.RectMake(0, 54, 101, 61));
            this.flight.setPosition(cc.ccp(160, 30));
            this.addChild(this.flight);
            //mgr.addChild(this.flight, 1, 99);

             /*// 设定动画每一帧的内容
            var animation = cc.Animation.animation();
            animation.setName("flight");
            animation.setDelay(0.2);
            for (var i = 0; i < 3; ++i)
            {
                var x = i % 3;
                animation.addFrameWithTexture(mgr.getTexture(), cc.RectMake(101, 54, 101, 61));
            }

            // 基于动画创建动作
            var action = cc.Animate.actionWithAnimation(animation);
            // 主角精灵不断重复动作，实现动态飞行效果
            this.flight.runAction(cc.RepeatForever.actionWithAction(action));
*/
            // accept touch now!
            this.setIsTouchEnabled(true);

            bRet = true;
        }
        return bRet;
    },
    ccTouchesEnded:function (pTouches, pEvent) {
        if (pTouches.length <= 0)
            return;

        var touch = pTouches[0];
        // 获得触摸点坐标
        var location = touch.locationInView(touch.view());
        // 让飞船在1秒钟内移动过去
        this.flight.runAction(cc.MoveTo.actionWithDuration(1.0, cc.ccp(location.x, location.y)));
    },
    step:function (dt) {
        this.time += dt;
        var time_str = "Time:" + parseInt(this.time);
        var label1 = this.getChildByTag(3);
        label1.setString(time_str);
    }
});

GameLayer.node = function () {
    var sg = new GameLayer();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};