var Enemy = cc.Sprite.extend({
    active:true,
    speed:200,
    bulletSpeed:-200,
    HP:15,
    bulletPowerValue:1,
    moveType:null,
    scoreValue:200,
    canBeAttack:true,
    zOrder:1000,
    delayTime:1.5 + 1.5 * Math.random(),
    attackMode:global.AttackMode.Normal,
    _hurtColorLife:0,
    ctor:function (arg) {
        this.HP = arg.HP;
        this.moveType = arg.moveType;
        this.scoreValue = arg.scoreValue;
        this.attackMode = arg.attackMode;
        cc.SpriteFrameCache.sharedSpriteFrameCache().addSpriteFramesWithFile(s_Enemy_plist, s_Enemy);

        this.initWithSpriteFrameName(arg.textureName);
        this.schedule(this.shoot, this.delayTime)
    },
    _timeTick:0,
    update:function (dt) {
        if (this.HP <= 0) {
            this.active = false;
        }
        this._timeTick += dt;
        if (this._timeTick > 0.1) {
            this._timeTick = 0;
            if (this._hurtColorLife > 0) {
                this._hurtColorLife--;
            }
            if (this._hurtColorLife == 1) {
                this.setColor(new cc.Color3B(255, 255, 255));
            }
        }
    },
    destroy:function () {
        global.score += this.scoreValue;
        this.getParent().addChild(new Explosion(this.getPosition()));
        this.getParent().removeChild(this);
        if(global.sound){
            cc.AudioManager.sharedEngine().playEffect(s_explodeEffect);
        }
    },
    shoot:function () {
        var b = new Bullet(this.bulletSpeed, "W2.png", this.attackMode);
        this.getParent().addChild(b, b.zOrder, global.Tag.EnemyBullet);
        b.setPosition(cc.ccp(this.getPosition().x, this.getPosition().y - this.getContentSize().height * 0.2));
    },
    hurt:function () {
        this._hurtColorLife = 2;
        this.HP--;
        this.setColor(cc.RED());
    },
    collideRect:function(){
        var a = this.getContentSize();
        var r = new cc.RectMake(this.getPositionX() - a.width/2,this.getPositionY() - a.height/4,a.width,a.height/2);
        return r;
    }
});