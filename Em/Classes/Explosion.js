var Explosion = cc.Sprite.extend({
    ctor:function (ccp) {
        this._super();
        cc.SpriteFrameCache.sharedSpriteFrameCache().addSpriteFramesWithFile(s_explosion_plist);
        var pFrame = cc.SpriteFrameCache.sharedSpriteFrameCache().spriteFrameByName("explosion_01.png");
        this.initWithSpriteFrame(pFrame);

        var animFrames = [];
        var str = "";
        for (var i = 1; i < 35; i++) {
            str = "explosion_" + (i < 10 ? ("0" + i) : i) + ".png";
            var frame = cc.SpriteFrameCache.sharedSpriteFrameCache().spriteFrameByName(str);
            animFrames.push(frame);
        }
        var animation = cc.Animation.animationWithFrames(animFrames, 0.04);

        this.setPosition(ccp);
        //this.spark(1.2, 0.7);


        this.runAction(cc.Sequence.actions(
            cc.Animate.actionWithAnimation(animation, false),
            cc.CallFunc.actionWithTarget(this, this.destroy)
        ));
    },
    update:function () {
    },
    draw:function (ctx) {
        var context = ctx || cc.renderContext;
        context.globalCompositeOperation = 'lighter';
        this._super(ctx);
    },
    destroy:function () {
        this.getParent().removeChild(this);
    },
    spark:function (scale, duration) {
        scale = scale || 0.3;
        duration = duration || 0.5;
        var one = new additiveSprite();
        one.initWithFile(s_explode1);
        var two = new additiveSprite();
        two.initWithFile(s_explode2);
        var three = new additiveSprite();
        three.initWithFile(s_explode3);

        this.addChild(one);
        this.addChild(two);
        this.addChild(three);
        one.setScale(scale);
        two.setScale(scale);
        three.setScale(scale);
        three.setRotation(Math.random() * 360);
        var left = cc.RotateBy.actionWithDuration(duration, -45);
        var right = cc.RotateBy.actionWithDuration(duration, 45);
        var scaleBy = cc.ScaleBy.actionWithDuration(duration, 4, 4);
        var fadeOut = cc.FadeOut.actionWithDuration(duration);
        one.runAction(left);
        two.runAction(right);
        one.runAction(scaleBy);
        two.runAction(scaleBy.copy());
        three.runAction(scaleBy.copy());
        one.runAction(fadeOut);
        two.runAction(fadeOut.copy());
        three.runAction(fadeOut.copy());

        this.removeChild(one);
        this.removeChild(two);
        this.removeChild(three);


    }
});

/*
 var Spark =function (ccpoint, parent, scale, duration) {
 scale = scale || 0.3;
 duration = duration || 0.5;
 var one = new additiveSprite();
 one.initWithFile(s_explode1);
 var two = new additiveSprite();
 two.initWithFile(s_explode2);
 var three = new additiveSprite();
 three.initWithFile(s_explode3);
 one.setPosition(ccpoint);
 two.setPosition(ccpoint);
 three.setPosition(ccpoint);
 parent.addChild(one);
 parent.addChild(two);
 parent.addChild(three);
 one.setScale(scale);
 two.setScale(scale);
 three.setScale(scale);
 three.setRotation(Math.random() * 360);
 var left = cc.RotateBy.actionWithDuration(duration, -45);
 var right = cc.RotateBy.actionWithDuration(duration, 45);
 var scaleBy = cc.ScaleBy.actionWithDuration(duration, 4, 4);
 var fadeOut = cc.FadeOut.actionWithDuration(duration);
 one.runAction(left);
 two.runAction(right);
 one.runAction(scaleBy);
 two.runAction(scaleBy.copy());
 three.runAction(scaleBy.copy());
 one.runAction(fadeOut);
 two.runAction(fadeOut.copy());
 three.runAction(fadeOut.copy());
 setTimeout(function () {
 parent.removeChild(one);
 parent.removeChild(two);
 parent.removeChild(three);
 }, duration * 1000);
 }*/
