public function funb22() : String
{
    if (this.itemx[this.i + this.idiff] >= 4)
    {
        var _loc_1:String = this;
        return "( +" + _loc_1.this["item" + (this.i + this.idiff) + "f"]() + "% Missile Damage )";
    }
    return "( +10% Missile Damage )";
}// end function

public function funb28() : String
{
    if (this.itemx[this.i + this.idiff] >= 4)
    {
        var _loc_1:String = this;
        return "( " + _loc_1.this["item" + (this.i + this.idiff) + "f"]() + " Missiles in 5 Seconds)";
    }
    return "( 1 Missile in 5 Seconds)";
}// end function

public function funb36() : String
{
    if (this.itemx[this.i + this.idiff] >= 4)
    {
        var _loc_1:String = this;
        return "( +" + _loc_1.this["item" + (this.i + this.idiff) + "f"]() * 50 + "% Luck )";
    }
    return "( +50% Luck )";
}// end function

public function funb30() : String
{
    if (this.itemx[this.i + this.idiff] >= 4)
    {
        var _loc_1:String = this;
        return "( " + _loc_1.this["item" + (this.i + this.idiff) + "f"]() + "% Chance )";
    }
    return "( 3% Chance )";
}// end function

public function funb25() : String
{
    if (this.itemx[this.i + this.idiff] >= 4)
    {
        var _loc_1:String = this;
        return "( -" + _loc_1.this["item" + (this.i + this.idiff) + "f"]() + "% Energy Use )";
    }
    return "( -10% Energy Use )";
}// end function

public function funb35() : String
{
    return "( Energy Gain )";
}// end function

public function funb27() : String
{
    if (this.itemx[this.i + this.idiff] >= 4)
    {
        var _loc_1:String = this;
        return "( +" + _loc_1.this["item" + (this.i + this.idiff) + "f"]() * 50 + "% Shield Charge )";
    }
    return "( +100% Shield Charge )";
}// end function

public function funb42() : String
{
    if (this.itemx[this.i + this.idiff] >= 4)
    {
        var _loc_1:String = this;
        return "( +" + _loc_1.this["item" + (this.i + this.idiff) + "f"]() + "% All Stats )";
    }
    return "( +8% All Stats )";
}// end function

public function continuem2() : void
{
if (this.autosave !== 0)
{
    this.savemode = 1;
    this.autosavenow = 2;
    this.savesave();
    this.bonusdisplay("Game Saved (Auto Save)", 3);
}
if (this.cheater == 2)
{
    CustomMetrics.Log("Cheater");
}
else if (this.cheater == 4)
{
    CustomMetrics.Log("Cheater4");
}
else if (this.cheater == 5)
{
    CustomMetrics.Log("Cheater5");
}
this.imagelevel = 0;
this.stopMusic();
this.currentMusic = this.music1;
this.soundPosition = 0;
this.playMusic();
this.pausegame = true;
this.shopscreen.visible = false;
this.shoptimer = 0;
if (this.lockon)
{
    Mouse.hide();
}
this.gameloaded = false;
this.shoponce = true;
this.lockpause = true;
this.chatlevel = 10;
if (this.notyours && this.username2 !== "Text Save")
{
    this.bars.ny.visible = true;
    this.bars.ny.ax2.text = this.username2 + "\'s Game";
    this.bars.ny.ax.width = this.bars.ny.ax2.textWidth + 36;
    this.bars.kbut.visible = false;
}
else
{
    this.bars.kbut.visible = true;
    this.bars.ny.visible = false;
}
if (this.dietem !== 0)
{
    this.levelx = this.calcdia();
    this.replayx = 4;
    this.overrideboss = false;
    this.bars.na.visible = true;
}
else
{
    this.bars.na.visible = false;
    if (this.namenow == "bw")
    {
        this.levelx = 36;
        this.replayx = 2;
        this.bossscreentimer = 50;
        this.bossscreen.ax.text = "Boss World";
        this.bossscreen.ax2.text = "Boss World";
        this.leveltimer = this.leveltimer * 3;
    }
    else if (this.namenow == "nl")
    {
        (this.levelx + 1);
        this.replayx = 1;
    }
    else
    {
        this.levelx = this.setlevel;
        this.replayx = 2;
    }
}
this.orbcounter = 0;
this.savexonce = false;
this.BOSSFIND = 0;
this.shipchange();
this.skillschange();
if (Math.random() < 0.7 && this.replayx !== 4)
{
    this.missionshow = Math.random() * this.levellength - 300;
    this.noteshow = Math.random() * this.levellength - 300;
    if (this.missionshow < 500)
    {
        this.missionshow = 500 - Math.random() * 100;
    }
    if (this.noteshow < 500)
    {
        this.missionshow = 500 - Math.random() * 100;
    }
}
else
{
    this.missionshow = -1;
}
if (this.gold > this.score + 1000000)
{
    this.cheater = 5;
}
if (Math.random() < 0.2 && loaderInfo.url.indexOf("kongregate") !== -1 && this.replayx !== 4)
{
    this.avatarshow = Math.random() * this.levellength - 300;
    if (this.avatarshow < 500)
    {
        this.avatarshow = 500 - Math.random() * 100;
    }
}
else
{
    this.avatarshow = -1;
}
this.lvx = this.levelx % 6;
if (this.lvx == 0)
{
    this.lvx = 6;
}
this.bg1.gotoAndStop(this.lvx);
this.createobjects(this.cont1, 0);
this.createobjects(this.cont2, 20);
this.risktaker = 0;
this.ecrashcounter = 0;
this.excelcounter = 0;
this.amazingcounter = 0;
this.perfectcounter = 0;
this.totaldamage = 0;
this.acctotal = 1;
this.acchit = 1;
this.shopgraf = 1;
this.achonce = true;
this.intuse = 2;
this.j = 45 + 1;
do
{

    if (this.itemx[this.j] == 1 || this.itemx[this.j] == -1)
    {
        this.intuse = 1;
    }
    var _loc_1:String = this;
    _loc_1.j = this.j - 1;
}while (--this.j > 0)
if (this.itemx[343] == 1)
{
    if (this.intuse == 2)
    {
        this.achievef(343);
    }
}
this.intuse = 2;
this.j = 21 + 1;
do
{

    if (this.itemx[100 + this.j] == 1 || this.itemx[100 + this.j] == -1)
    {
        this.intuse = 1;
    }
    var _loc_1:String = this;
    _loc_1.j = this.j - 1;
}while (--this.j > 0)
if (this.itemx[342] == 1)
{
    if (this.intuse == 2)
    {
        this.achievef(342);
    }
}
if (this.itemx[339] == 1)
{
    if (this.thp >= 5000)
    {
        this.achievef(339);
    }
}
this.axtext1 = 0;
this.axtext2 = 0;
this.axtext3 = 0;
this.goldthis = 0;
this.ekillthis = 0;
this.ecthis = 0;
this.bonusthis = 0;
this.leveltimec = 0;
this.axtext4 = 0;
this.sremove();
this.shopscreen.gotoAndStop(2);
return;
}// end function

public function funb34() : String
{
    if (this.itemx[this.i + this.idiff] >= 4)
    {
        var _loc_1:String = this;
        return "( +" + _loc_1.this["item" + (this.i + this.idiff) + "f"]() + " Bonus Damage )";
    }
    return "( +2 Bonus Damage )";
}// end function

public function newgamenow() : void
{
if (this.deathmode)
{
    this.deathscreen.ax2.kg.removeEventListener(MouseEvent.MOUSE_UP, this.gotoKong);
    this.deathscreen.ax2.a1.removeEventListener(MouseEvent.MOUSE_UP, this.loadgamef);
    this.deathscreen.ax2.a2.removeEventListener(MouseEvent.MOUSE_UP, this.newgamefun);
    this.deathmode = false;
    this.deathscreen.visible = false;
    this.deathscreen.gotoAndStop(1);
}
this.clearscreen();
this.hp = 2;
this.lockpause = false;
this.bg1.gotoAndStop(1);
this.createobjects(this.cont1, 0);
this.createobjects(this.cont2, 20);
this.ship.visible = true;
return;
}// end function

public function findrotation(param1:MovieClip, param2:MovieClip) : int
{
    if (param1.x - param2.x < 0)
    {
        return this.atan((param1.y - param2.y) / (param1.x - param2.x)) * this.toDegrees + 90;
    }
    return this.atan((param1.y - param2.y) / (param1.x - param2.x)) * this.toDegrees - 90;
}// end function

public function numfun(param1:MovieClip, param2:int) : void
{
if (this.numuse !== 0)
{
    if (this.numuse > 0)
    {
        param1["c" + param2].text = "+" + this.numuse;
        param1["c" + param2].x = param1["a" + param2].x + param1["a" + param2].textWidth + 4;
        param1["c" + param2].transform.colorTransform = new ColorTransform();
    }
    else
    {
        this.alltint.setTint(16711680, 1);
        param1["c" + param2].transform.colorTransform = this.alltint;
        param1["c" + param2].text = this.numuse;
        param1["c" + param2].x = param1["a" + param2].x + param1["a" + param2].textWidth + 4;
    }
}
return;
}// end function

public function funb31() : String
{
    return "( Save\'s Your Life )";
}// end function

function frame1()
{
    stop();
    Tracker.Initialise(loaderInfo.loaderURL);
    Tracker.LogView();
    this.localMode = loaderInfo.url.indexOf("file") == 0;
    this.sitehack = loaderInfo.url.indexOf("srilankafoundation") == -1;
    if (this.sitehack)
    {
        this.sitehack = loaderInfo.url.indexOf("armorgames") == -1;
    }
    if (this.sitehack)
    {
        this.sitehack = loaderInfo.url.indexOf("flashgamelicense") == -1;
    }
    this.loadingProgress = 0;
    this.pg.visible = false;
    loaderInfo.addEventListener(Event.COMPLETE, this.onCompletelyDownloaded);
    loaderInfo.addEventListener(ProgressEvent.PROGRESS, this.onProgressMade);
    stage.addEventListener(Event.ENTER_FRAME, this.fakeload);
    this.mload = 0;
    if (this.sitehack == false || this.localMode == true)
    {
        this.mload = 300;
    }
    this.kbut.addEventListener(MouseEvent.MOUSE_UP, this.gotoKong);
    this.kbut2.addEventListener(MouseEvent.MOUSE_UP, this.gotoKong);
    this.g1.ax.addEventListener(MouseEvent.MOUSE_UP, this.g1fx);
    this.g2.ax.addEventListener(MouseEvent.MOUSE_UP, this.g2fx);
    this.g3.ax.addEventListener(MouseEvent.MOUSE_UP, this.g3fx);
    this.s1.ax.addEventListener(MouseEvent.MOUSE_UP, this.s1fx);
    this.s2.ax.addEventListener(MouseEvent.MOUSE_UP, this.s2fx);
    this.soundon = false;
    this.musicon = false;
    if (loaderInfo.url.indexOf("file") !== 0)
    {
        this.soundon = true;
        this.musicon = true;
    }
    this.qualityx = 1;
    this.optionupdatex();
    this.newgame = false;
    this.gameonce = false;
    this.paramObj = LoaderInfo(root.loaderInfo).parameters;
    this.apiPath = this.paramObj.kongregate_api_path || "http://www.kongregate.com/flash/API_AS3_Local.swf";
    Security.allowDomain(this.apiPath);
    this.request = new URLRequest(this.apiPath);
    this.loader = new Loader();
    this.loader.contentLoaderInfo.addEventListener(Event.COMPLETE, this.loadComplete);
    this.loader.load(this.request);
    this.addChild(this.loader);
    this.kongloadscreen.gotoAndStop(2);
    this.kongid = 0;
    this.kongname = "";
    this.kongpermalink = "";
    this.konglabel = "";
    this.username = "";
    this.textuse = "";
    this.textuseK = "";
    this.textnow = 0;
    this.gameParams = LoaderInfo(root.loaderInfo).parameters;
    this.urlLoader = new Loader();
    this.urlLoader.contentLoaderInfo.addEventListener(Event.COMPLETE, this.loadFinished);
    this.urlLoader.load(new URLRequest(this.gameParams.mjPath || "http://static.mindjolt.com/api/as3/scoreapi_as3_local.swf"));
    this.addChild(this.urlLoader);
    return;
}// end function

public function openstats(event:MouseEvent) : void
{
this.optionscreen.sts.visible = true;
this.optionscreen.sts.td.text = this.commaf(this.totaldamage);
this.optionscreen.sts.td1.text = this.commaf(this.sharedObject.data["totaldamageHS"]);
this.optionscreen.sts.ed.text = this.commaf(this.ekillthis);
this.optionscreen.sts.ed1.text = this.commaf(this.sharedObject.data["ekillthisHS"]);
this.optionscreen.sts.ac.text = this.round(this.acchit / this.acctotal * 100) + "%";
this.optionscreen.sts.ac1.text = this.sharedObject.data["accHS"] + "%";
this.optionscreen.sts.gc1.text = this.commaf(this.goldthis);
this.optionscreen.sts.gc2.text = this.commaf(this.sharedObject.data["goldthisHS"]);
this.optionscreen.sts.bc.text = this.commaf(this.bonusthis);
this.optionscreen.sts.bc1.text = this.commaf(this.sharedObject.data["bonusthisHS"]);
this.optionscreen.sts.levt.text = this.round(this.leveltimec / 24) + " Seconds";
this.optionscreen.sts.levt1.text = this.sharedObject.data["leveltimeHS"] + " Seconds";
return;
}// end function

public function savesave() : void
{
if (this.autosavenow == 2)
{
    this.i = this.autosave;
    this.autosavenow = 1;
}
this.autosave = this.i;
if (this.savetype == 1)
{
    this.havesaved = true;
    this.sharedObject.data["savegame" + this.i] = "1";
    this.sharedObject.data["hp" + this.i] = this.thp;
    this.sharedObject.data["shp" + this.i] = this.tshp;
    this.sharedObject.data["ep" + this.i] = this.tep;
    this.sharedObject.data["gold" + this.i] = this.gold;
    this.sharedObject.data["score" + this.i] = this.score;
    this.sharedObject.data["level" + this.i] = this.levelx;
    this.sharedObject.data["shipname" + this.i] = this.shipname;
    this.sharedObject.data["shipselect" + this.i] = this.shipselect;
    this.sharedObject.data["equipnum" + this.i] = this.equipnum;
    this.sharedObject.data["equipmax" + this.i] = this.equipmax;
    this.sharedObject.data["shipbuynum" + this.i] = this.shipbuynum;
    this.sharedObject.data["achpoints" + this.i] = this.achpoints;
    this.j = 45 + 1;
    do
    {

        this.sharedObject.data["itemx" + this.j + "a" + this.i] = this.itemx[this.j];
        var _loc_1:String = this;
        _loc_1.j = this.j - 1;
    }while (--this.j > 0)
    this.j = 18 + 1;
    do
    {

        this.sharedObject.data["itemx" + (this.j + 100) + "a" + this.i] = this.itemx[this.j + 100];
        var _loc_1:String = this;
        _loc_1.j = this.j - 1;
    }while (--this.j > 0)
    this.stringuse = "";
    this.j = 4 + 1;
    do
    {

        this.stringuse = this.stringuse + (this.itemx[117 + this.j] + "?");
        var _loc_1:String = this;
        _loc_1.j = this.j - 1;
    }while (--this.j > 0)
    this.sharedObject.data["itemx" + 118 + "a" + this.i] = this.stringuse;
    this.j = 9 + 1;
    do
    {

        this.sharedObject.data["itemx" + (this.j + 200) + "a" + this.i] = this.itemx[this.j + 200];
        var _loc_1:String = this;
        _loc_1.j = this.j - 1;
    }while (--this.j > 0)
    this.j = 45 + 1;
    do
    {

        this.sharedObject.data["itemx" + (this.j + 300) + "a" + this.i] = this.itemx[this.j + 300];
        var _loc_1:String = this;
        _loc_1.j = this.j - 1;
    }while (--this.j > 0)
    this.j = 15 + 1;
    do
    {

        this.sharedObject.data["itemx" + (this.j + 400) + "a" + this.i] = this.itemx[this.j + 400];
        var _loc_1:String = this;
        _loc_1.j = this.j - 1;
    }while (--this.j > 0)
    this.j = 12 + 1;
    do
    {

        this.sharedObject.data["itemx" + (this.j + 500) + "a" + this.i] = this.itemx[this.j + 500];
        var _loc_1:String = this;
        _loc_1.j = this.j - 1;
    }while (--this.j > 0)
    this.j = 12 + 1;
    do
    {

        this.sharedObject.data["shipown" + this.j + "a" + this.i] = this.shipown[this.j];
        var _loc_1:String = this;
        _loc_1.j = this.j - 1;
    }while (--this.j > 0)
    this.j = 10 + 1;
    do
    {

        this.sharedObject.data["skillsArray" + this.j + "a" + this.i] = this.skillsArray[this.j];
        var _loc_1:String = this;
        _loc_1.j = this.j - 1;
    }while (--this.j > 0)
    this.j = 20 + 1;
    do
    {

        this.sharedObject.data["missleAmmo" + (this.j + 19) + "a" + this.i] = this.missleAmmo[this.j + 19];
        var _loc_1:String = this;
        _loc_1.j = this.j - 1;
    }while (--this.j > 0)
    this.sharedObject.data["num0" + this.i] = this.nnum[0];
    this.sharedObject.data["num15" + this.i] = this.nnum[15];
    this.sharedObject.data["num30" + this.i] = this.nnum[30];
    this.sharedObject.data["savehp" + this.i] = this.savehp;
    this.sharedObject.data["saveshp" + this.i] = this.saveshp;
    this.sharedObject.data["saveep" + this.i] = this.saveep;
    this.sharedObject.data["autosave" + this.i] = this.autosave;
    this.sharedObject.data["misslefirec" + this.i] = this.misslefirec;
    this.sharedObject.data["bcollect" + this.i] = this.bcollect;
    this.sharedObject.data["ekill" + this.i] = this.ekill;
    this.sharedObject.data["bkill" + this.i] = this.bkill;
    this.sharedObject.data["bonustimer" + this.i] = this.bonustimer;
    this.sharedObject.data["weaponmode" + this.i] = this.weaponmode;
    this.sharedObject.data["cheater" + this.i] = this.cheater;
    this.sharedObject.data["qualityx" + this.i] = this.qualityx;
    this.sharedObject.data["diff" + this.i] = this.diff;
    this.sharedObject.data["achpointstotal" + this.i] = this.achpointstotal;
    this.sharedObject.data["notyours" + this.i] = this.notyours;
    this.j = 12 + 1;
    do
    {

        this.sharedObject.data["customkeys" + this.j + "a" + this.i] = this.customkeys[this.j];
        var _loc_1:String = this;
        _loc_1.j = this.j - 1;
    }while (--this.j > 0)
    this.sharedObject.flush();
}
if (this.savescreen.currentFrame == 1)
{
    this.savescreen.sflash.play();
    this.saveupdate(this.savescreen);
}
return;
}// end function

public function valuegain(param1:int, param2:int, param3:int) : Number
{
    if (param1 + param3 <= param2)
    {
        return param3;
    }
    return param2 - param1;
}// end function

public function mfirex(event:MouseEvent)
{
    if (this.lockpause)
    {
        this.shoot = true;
        this.shoot2 = true;
        if (this.mousecontrol == false)
        {
            if (this.lockon == false)
            {
                this.lockon = true;
                this.mousepointer.visible = true;
                Mouse.hide();
                if (this.leveltimer < this.levellength - 20)
                {
                    this.bonusdisplay("Targeting ON", 3);
                }
            }
        }
    }
    return;
}// end function

public function missionexit(event:MouseEvent) : void
{
this.missionnow = 1;
this.k = 10 + 1;
do
{

    if (this.skills["a" + this.k].ax5.currentFrame !== 1)
    {
        this.skills["a" + this.k].ax5.play();
    }
    var _loc_2:String = this;
    _loc_2.k = this.k - 1;
}while (--this.k > 0)
this.pausegame = true;
this.lockpause = true;
if (this.lockon)
{
    Mouse.hide();
}
this.missionremove();
this.mission.gotoAndStop(1);
this.tutshow(2, "Mission Commander", "Good luck to you on your missions.");
return;
}// end function

public function a1ft(event:MouseEvent) : void
{
this.okaypress = true;
return;
}// end function

function frame3()
{
    this.a1.addEventListener(MouseEvent.MOUSE_UP, this.qlow2);
    this.passw.addEventListener(MouseEvent.MOUSE_DOWN, this.clearp);
    stop();
    if (this.localMode == true || this.sitehack == false)
    {
        this.newgame = true;
        this.gameonce = true;
        gotoAndStop(1, "Scene 2");
    }
    return;
}// end function

public function openasker(event:MouseEvent) : void
{
if (this.havesaved)
{
    if (this.equipnum <= this.equipmax)
    {
        if (this.itemx[45] == 3)
        {
            this.shopscreen.asker.bw.visible = true;
        }
        else
        {
            this.shopscreen.asker.bw.visible = false;
        }
        this.shopscreen.asker.visible = true;
        this.blurx(this.shopscreen.asker);
    }
    else
    {
        this.tutshow(2, "Shopbot", "You have more items equipped than your equip slots allow.");
    }
}
else
{
    this.tutshow(2, "Shopbot", "Do you want to save your game before leaving?");
}
return;
}// end function

public function saveloadb() : String
{
    this.textuse = "5672578293213?";
    this.numuse = 0;
    this.j = 0;
    do
    {

        this.textadd(0);
        var _loc_1:String = this;
        _loc_1.j = this.j + 1;
    }while (++this.j < (45 + 1))
    this.j = 0;
    do
    {

        this.textadd(100);
        var _loc_1:String = this;
        _loc_1.j = this.j + 1;
    }while (++this.j < (18 + 1))
    this.j = 0;
    do
    {

        this.textadd(200);
        var _loc_1:String = this;
        _loc_1.j = this.j + 1;
    }while (++this.j < (9 + 1))
    this.j = 0;
    do
    {

        this.textadd(300);
        var _loc_1:String = this;
        _loc_1.j = this.j + 1;
    }while (++this.j < (30 + 1))
    this.j = 0;
    do
    {

        this.textuse = this.textuse + (this.shipown[this.j] + "?");
        this.numuse = this.numuse + this.shipown[this.j];
        var _loc_1:String = this;
        _loc_1.j = this.j + 1;
    }while (++this.j < (12 + 1))
    this.j = 0;
    do
    {

        this.textuse = this.textuse + (this.skillsArray[this.j] + "?");
        this.numuse = this.numuse + this.skillsArray[this.j];
        var _loc_1:String = this;
        _loc_1.j = this.j + 1;
    }while (++this.j < (9 + 1))
    this.j = 0;
    do
    {

        this.textuse = this.textuse + (this.missleAmmo[this.j + 19] + "?");
        this.numuse = this.numuse + this.missleAmmo[this.j + 19];
        var _loc_1:String = this;
        _loc_1.j = this.j + 1;
    }while (++this.j < (10 + 1))
    this.numuse = this.numuse + (this.gold + this.score + this.levelx + this.equipmax + this.equipnum + this.achpoints + this.misslefirec + this.bcollect + this.shipbuynum);
    this.intuse = this.ceil(Math.random() * 100);
    this.textuse = this.textuse + ("4593980293?" + this.shipselect + "?" + this.equipnum + "?" + this.equipmax + "?" + this.nnum[0] + "?" + this.nnum[15] + "?" + this.nnum[30] + "?" + this.round(this.savehp * 100) + "?" + this.round(this.saveshp * 100) + "?" + this.round(this.saveep * 100) + "?" + this.gold / 4 + "?" + this.levelx / 2 + "?" + this.misslefirec + "?" + this.bcollect + "?" + this.shipbuynum + "?" + this.ekill + "?73472989134?" + this.score / 4 + "?" + this.achpoints * 7 + "?" + this.achpointstotal + "?" + this.intuse + "?" + "B" + "?" + this.bkill + "?");
    this.numuse = this.numuse + this.intuse;
    this.j = 0;
    do
    {

        this.textadd(330);
        var _loc_1:String = this;
        _loc_1.j = this.j + 1;
    }while (++this.j < (15 + 1))
    this.j = 0;
    do
    {

        this.textadd(400);
        var _loc_1:String = this;
        _loc_1.j = this.j + 1;
    }while (++this.j < (15 + 1))
    this.numuse = this.numuse + (this.bonustimer + this.weaponmode);
    this.textuse = this.textuse + (this.bonustimer + "?" + this.weaponmode + "?");
    this.textuse = this.textuse + ("X" + "?" + this.qualityx + "?" + this.diff + "?" + this.skillsArray[10] + "?" + this.cheater + "?");
    this.j = 0;
    do
    {

        this.textuse = this.textuse + (this.missleAmmo[this.j + 29] + "?");
        this.numuse = this.numuse + this.missleAmmo[this.j + 29];
        var _loc_1:String = this;
        _loc_1.j = this.j + 1;
    }while (++this.j < (10 + 1))
    this.textuse = this.textuse + (this.numuse / 4 + "?");
    if (loaderInfo.url.indexOf("kongregate") == -1)
    {
        this.textuse = this.textuse + "B?";
    }
    else
    {
        this.textuse = this.textuse + (this.kongregate.user.getName() + "?");
    }
    return this.textuse;
}// end function

public function scrolldown(event:MouseEvent) : void
{
this.scrolln = 2;
return;
}// end function

public function onLoadGame(param1:Object)
{
    if (this.newgame == false)
    {
        this.kongloadscreen.gotoAndStop(1);
        this.kongloadscreen.ax.visible = false;
        this.kongloadscreen.ax2.visible = false;
    }
    else
    {
        this.kongloadscreen.gotoAndStop(1);
        this.kongloadscreen.ax.visible = true;
        this.kongloadscreen.ax2.visible = true;
        this.kongloadscreen.ax.addEventListener(MouseEvent.CLICK, this.opengame);
        this.kongloadscreen.ax2.addEventListener(MouseEvent.CLICK, this.closegame);
    }
    this.kongid = param1.id;
    this.kongname = param1.name;
    this.username = this.kongregate.services.getUsername();
    this.kongpermalink = param1.permalink;
    this.textuseK = param1.content;
    this.konglabel = param1.label;
    this.splitvar2 = this.textuseK.split("?");
    if (this.splitvar2[205] !== this.username)
    {
        this.kongloadscreen.ax3.text = this.splitvar2[205] + "\'s";
    }
    else
    {
        this.kongloadscreen.ax3.text = "Your";
    }
    return;
}// end function

public function blurx(param1:MovieClip) : void
    {
        param1.visible = false;
this.bd = new BitmapData(stage.stageWidth, stage.stageHeight);
this.bd.draw(stage);
this.screenshot = new Bitmap(this.bd);
this.screenshot.name = "deletethis";
param1.bgb.addChild(this.screenshot);
param1.visible = true;
return;
}// end function

function frame5()
{
    stop();
    Mouse.hide();
    if (this.gameonce)
    {
        this.sharedObject = SharedObject.getLocal("grevenge");
        this.alltint = new Color();
        this.shiptint = new Color();
        this.gameonce = false;
        if (this.qualityx == 1)
        {
            stage.quality = "medium";
        }
        else if (this.qualityx == 2)
        {
            stage.quality = "low";
        }
        else if (this.qualityx == 3)
        {
            stage.frameRate = 22;
            stage.quality = "low";
        }
        this.msound = new menuchange();
        this.orbtotal = 0;
        this.autofire = false;
        this.moveLeft = false;
        this.moveRight = false;
        this.moveDown = false;
        this.moveUp = false;
        this.shoot = false;
        this.mfire = false;
        this.timehalf = true;
        this.avatarshow = -1;
        this.lockpause = true;
        this.bonuslock = false;
        this.stringuse = "";
        this.shoplockpause = true;
        this.slowdown = 0;
        this.toDegrees = 180 / Math.PI;
        this.oppositedirection = 1;
        this.decay = 1.7;
        this.boundall = 50;
        this.rebound = 1;
        this.trudist = 1;
        this.speedx = 0;
        this.shoponcex2 = 1;
        this.shopgraf = 1;
        this.overrideboss = false;
        this.newgamexs = false;
        this.speedy = 0;
        this.epmulti = 0;
        this.defence = 1;
        this.speed = 11;
        this.offsetx = 0;
        this.maxlevel = 0;
        this.setlevel = 0;
        this.negthis = 0;
        this.offsetx2 = 0;
        this.overx = 0;
        this.overy = 0;
        this.timeten = 0;
        this.ochangex = 0;
        this.cheater = 1;
        this.cheacounter = 1;
        this.mainrot = 1;
        this.mainrot2 = 1;
        this.lockon = true;
        this.keydown = true;
        this.oriweapondelay = 1;
        this.orifirechoice = 1;
        this.weapondelay = 1;
        this.negcool = 0;
        this.weaponmode = 1;
        this.weapontimer = 0;
        this.weaponspeed = 10;
        this.orishipselect = 0;
        this.weapontype = 10;
        this.oriweapontype = 10;
        this.oriweaponspeed = 10;
        this.oriweapondamage = 1;
        this.achpointstotal = 0;
        this.weapondamage = 1;
        this.firechoice = 1;
        this.shipselect = 0;
        this.killtimer = 0;
        this.i = 1;
        this.j = 1;
        this.k = 1;
        this.l = 1;
        this.numuse = 0;
        this.numuse1 = 0;
        this.numuse2 = 0;
        this.numuse3 = 0;
        this.numuse4 = 0;
        this.xnumuse = 0;
        this.xnumuse2 = 0;
        this.xnumusea = 0;
        this.xnumuse2a = 0;
        this.xnumuse3 = 0;
        this.xnumuse4 = 0;
        this.xnumuse3a = 0;
        this.xnumuse4a = 0;
        this.xnumuse3b = 0;
        this.xnumuse4b = 0;
        this.returnnum = 0;
        this.cos = Math.cos;
        this.atan = Math.atan;
        this.sin = Math.sin;
        this.enemyrate = 400;
        this.savedloc = 350;
        this.enemytype = 1;
        this.wspeed = 0;
        this.hp = 5;
        this.thp = 5;
        this.shp = 5;
        this.tshp = 5;
        this.ep = 5;
        this.tep = 5;
        this.shieldtimer = 0;
        this.shieldcharge = 0;
        this.enemybstun = 0;
        this.shieldc = 0;
        this.chargedelay = 10;
        this.bonuslength = 100;
        this.bonustimer = 0;
        this.shieldwc = 0;
        this.negmode = 1;
        this.negtimer = 0;
        this.negbonuslength = 0;
        this.destroyshields = 0;
        this.missleson = false;
        this.missletype = 0;
        this.missledamage = 0;
        this.missletracker = 0;
        this.missletimer = 0;
        this.missledelay = 0;
        this.nonear = false;
        this.targetwep = false;
        this.missleAmmo = new Vector.<int>(49);
        this.wval = 10;
        this.savehp = 1;
        this.saveshp = 1;
        this.saveep = 1;
        this.shipbuynum = 0;
        this.amazingcounter = 0;
        this.perfectcounter = 0;
        this.skatimer = 0;
        this.axnumuse = 0;
        this.missleAmmo[20] = 200;
        this.missleAmmo[21] = 0;
        this.missleAmmo[22] = 0;
        this.missleAmmo[23] = 0;
        this.missleAmmo[24] = 0;
        this.missleAmmo[25] = 0;
        this.missleAmmo[26] = 0;
        this.missleAmmo[27] = 0;
        this.missleAmmo[28] = 0;
        this.missleAmmo[29] = 0;
        this.enemyammountx = 0;
        this.warpspeed = 0;
        this.stealthmode = 0;
        this.healing = 0;
        this.bonusmag = 0;
        this.healingsave = 0;
        this.megablast = 0;
        this.skillatimer = 0;
        this.enemystop = 0;
        this.bonusdtimer = 0;
        this.savemetimer = 0;
        this.firechoicem = 0;
        this.leveltimer = 0;
        this.levelx = 1;
        this.BOSSFIND = 0;
        this.gold = 0;
        this.score = 0;
        this.helpers = 0;
        this.helpernum = 0;
        this.helpernum2 = 0;
        this.helperdelay = 0;
        this.bossscreentimer = 0;
        this.ekill = 0;
        this.bkill = 0;
        this.bcollect = 0;
        this.bossname = "";
        this.testhitv = 0;
        this.tutlevel = -1;
        this.stopenemies = false;
        this.once = false;
        this.bonusnow = false;
        this.bpress = 0;
        this.btimer = 0;
        this.misslefirec = 0;
        this.delaytimer = 0;
        this.chatlevel = 0;
        this.axtext1 = 0;
        this.axtext2 = 0;
        this.axtext3 = 0;
        this.sdestroyer = 0;
        this.skilltest = 0;
        this.goldthis = 0;
        this.ekillthis = 0;
        this.ecthis = 0;
        this.bonusthis = 0;
        this.leveltimec = 0;
        this.axtext4 = 0;
        this.shoponce = true;
        this.oriheight = 0;
        this.infinitimer = 0;
        this.shopmove = 0;
        this.shopmove2 = 0;
        this.currentshop = 0;
        this.currentshop2 = 0;
        this.shopArray = new Array();
        this.shopnum = 1;
        this.scrolln = 0;
        this.sdiff = 0;
        this.idiff = 0;
        this.goldValue = new Vector.<int>(512);
        this.colorValue = new Array();
        this.a1Text = new Array();
        this.a2Text = new Array();
        this.a4Text = new Array();
        this.a5Text = new Array();
        this.killVal = new Array();
        this.killTotal = new Array();
        this.missionselect = 0;
        this.shopmax = new Array();
        this.equipnum = 0;
        this.equipmax = 6;
        this.tutfirst = 1;
        this.tutfirst2 = 1;
        this.delayx = 0;
        this.newint = 0;
        this.skillfol = 0;
        this.armorcharge = 0;
        this.armordefence = 1;
        this.bonuschance = 0.4;
        this.splitvar = new Array();
        this.splitvar2 = new Array();
        this.nnum = new Array();
        this.shipname = "";
        this.yneg = 0;
        this.allowexp = true;
        this.misslename = "";
        this.missilespeed = 1.2;
        this.missilechance = 0;
        this.missileinfect = 0;
        this.orishipv = 0;
        this.ori2 = new Array();
        this.cont1x = 0;
        this.lvx = 1;
        this.enemynumxx = 5;
        this.assnum = 0;
        this.excelcounter = 0;
        this.ekillt = 0;
        this.bosshp = 0;
        this.bossthp = 1;
        this.lasertimer = 0;
        this.nburst = 0;
        this.autosave = 0;
        this.savemode = 1;
        this.removestarttimer = -3;
        this.autosavenow = 1;
        this.deathmode = false;
        this.turretstat = 0;
        this.turretx = 0;
        this.turrety = 0;
        this.levellength = 2500;
        this.gameloaded = false;
        this.psionwave = 0;
        this.itemtotal = 45;
        this.itemx = new Vector.<int>(512);
        this.skillsArray = new Array();
        this.missleTracker = new Vector.<int>(39);
        this.shipown = new Vector.<int>(15);
        this.shipown[13] = 3;
        this.shipown[14] = 3;
        this.shipown[15] = 3;
        this.shipCost = new Array();
        this.replayx = 1;
        this.doomrot = 1;
        this.doomrot2 = 1;
        this.doomrot3 = 60;
        this.achpoints = 0;
        this.eliteonce = 1;
        this.avatarnow = 0;
        this.bmonce = 1;
        this.missionshow = 1;
        this.missionnow = 1;
        this.acctotal = 1;
        this.acchit = 1;
        this.healingthis = 0;
        this.savexonce = false;
        this.negtimercanx = 0;
        this.delaytimerc = 5;
        if (loaderInfo.url.indexOf("file") !== 0)
        {
            this.delaytimerc = 1;
        }
        this.stoptime = 0;
        this.whiteon = false;
        this.i = 250 + 1;
        do
        {

            this.splitvar2[this.i] = this.doomrot;
            var _loc_1:String = this;
            _loc_1.i = this.i - 1;
        }while (--this.i > 0)
        this.i = 45 + 1;
        do
        {

            this.itemx[this.i] = 1;
            var _loc_1:String = this;
            _loc_1.i = this.i - 1;
        }while (--this.i > 0)
        this.i = 21 + 1;
        do
        {

            this.itemx[this.i + 100] = 1;
            var _loc_1:String = this;
            _loc_1.i = this.i - 1;
        }while (--this.i > 0)
        this.i = 21 + 1;
        do
        {

            this.itemx[this.i + 200] = 1;
            var _loc_1:String = this;
            _loc_1.i = this.i - 1;
        }while (--this.i > 0)
        this.i = 45 + 1;
        do
        {

            this.itemx[this.i + 300] = 1;
            var _loc_1:String = this;
            _loc_1.i = this.i - 1;
        }while (--this.i > 0)
        this.i = 15 + 1;
        do
        {

            this.itemx[this.i + 400] = 1;
            var _loc_1:String = this;
            _loc_1.i = this.i - 1;
        }while (--this.i > 0)
        this.i = 12 + 1;
        do
        {

            this.itemx[this.i + 500] = 1;
            var _loc_1:String = this;
            _loc_1.i = this.i - 1;
        }while (--this.i > 0)
        this.i = 9 + 1;
        do
        {

            this.missleTracker[this.i + 19] = 0;
            var _loc_1:String = this;
            _loc_1.i = this.i - 1;
        }while (--this.i > 0)
        this.i = 12 + 1;
        do
        {

            this.shipown[this.i] = 1;
            var _loc_1:String = this;
            _loc_1.i = this.i - 1;
        }while (--this.i > 0)
        this.skillsArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.moveshipsright = false;
        this.moveshipsleft = false;
        this.offvar = 1;
        this.dispship = 1;
        this.starnum = 300;
        this.starArray = new Vector.<MovieClip>(this.starnum);
        this.starArrayXc = new Vector.<Number>(this.starnum);
        this.i = 1;
        while (this.i <= this.starnum)
        {

            this.starv = new starobj();
            this.starv.y = Math.ceil(Math.random() * 500);
            this.starArrayXc[this.i] = Math.random() * 750 - 25;
            this.starv.x = this.starArrayXc[this.i];
            this.starv.alpha = Math.random() * 0.7 + 0.3;
            this.starname = ["str" + this.i];
            this.starv.name = this.starname;
            addChild(this.starv);
            this.starArray[this.i] = this.getChildByName("str" + this.i) as MovieClip;
            this.starArray[this.i].cacheAsBitmap = true;
            var _loc_1:String = this;
            var _loc_2:* = this.i + 1;
            _loc_1.i = _loc_2;
        }
        this.st = 1;
        this.contcrea3 = new contobj();
        this.contcrea3.name = "cont3c";
        addChild(this.contcrea3);
        this.cont3 = this.getChildByName("cont3c");
        this.cont3.cacheAsBitmap = true;
        this.smshipnum = 5;
        this.smshipArray = new Vector.<MovieClip>(this.smshipnum);
        this.i = 1;
        while (this.i <= this.smshipnum)
        {

            this.smshipv = new smshipobj();
            this.smshipv.y = -500;
            this.smshipname = ["smshipr" + this.i];
            this.smshipv.name = this.smshipname;
            addChild(this.smshipv);
            this.smshipArray[this.i] = this.getChildByName("smshipr" + this.i) as MovieClip;
            var _loc_1:String = this;
            var _loc_2:* = this.i + 1;
            _loc_1.i = _loc_2;
        }
        this.smship2num = 4;
        this.smship2Array = new Vector.<MovieClip>(this.smship2num);
        this.i = 1;
        while (this.i <= this.smship2num)
        {

            this.smship2v = new smship2obj();
            this.smship2v.y = -500;
            this.smship2name = ["smship2r" + this.i];
            this.smship2v.name = this.smship2name;
            this.cont3.addChild(this.smship2v);
            this.smship2Array[this.i] = this.cont3.getChildByName("smship2r" + this.i) as MovieClip;
            var _loc_1:String = this;
            var _loc_2:* = this.i + 1;
            _loc_1.i = _loc_2;
        }
        this.contcrea = new contobj();
        this.contcrea.name = "cont1c";
        addChild(this.contcrea);
        this.cont1 = this.getChildByName("cont1c");
        this.contcrea2 = new contobj();
        this.contcrea2.name = "cont2c";
        addChild(this.contcrea2);
        this.cont2 = this.getChildByName("cont2c");
        this.alltint.setTint(855309, 0.3);
        this.cont1.transform.colorTransform = this.alltint;
        this.cont2.transform.colorTransform = this.alltint;
        this.cont1.cacheAsBitmap = true;
        this.cont2.cacheAsBitmap = true;
        this.linenum = 40;
        this.lineArray = new Vector.<MovieClip>(this.linenum);
        this.i = 1;
        while (this.i <= this.linenum)
        {

            this.linev = new lineobj();
            this.linev.y = -500;
            this.linename = ["liner" + this.i];
            this.linev.name = this.linename;
            if (this.i <= 20)
            {
                this.cont1.addChild(this.linev);
                this.lineArray[this.i] = this.cont1.getChildByName("liner" + this.i) as MovieClip;
            }
            else
            {
                this.cont2.addChild(this.linev);
                this.lineArray[this.i] = this.cont2.getChildByName("liner" + this.i) as MovieClip;
            }
            var _loc_1:String = this;
            var _loc_2:* = this.i + 1;
            _loc_1.i = _loc_2;
        }
        this.li = 1;
        this.li2 = 1;
        this.sqnum = 40;
        this.sqArray = new Vector.<MovieClip>(this.sqnum);
        this.i = 1;
        while (this.i <= this.sqnum)
        {

            this.sqv = new sqobj();
            this.sqv.y = -500;
            this.sqname = ["sqr" + this.i];
            this.sqv.name = this.sqname;
            if (this.i <= 20)
            {
                this.cont1.addChild(this.sqv);
                this.sqArray[this.i] = this.cont1.getChildByName("sqr" + this.i) as MovieClip;
            }
            else
            {
                this.cont2.addChild(this.sqv);
                this.sqArray[this.i] = this.cont2.getChildByName("sqr" + this.i) as MovieClip;
            }
            var _loc_1:String = this;
            var _loc_2:* = this.i + 1;
            _loc_1.i = _loc_2;
        }
        this.sq = 1;
        this.enemyArray = new Vector.<MovieClip>(21);
        this.i = 16;
        while (this.i <= 21)
        {

            this.enemyv2 = new enemyobj();
            this.enemyv2.y = -600;
            this.enemyname2 = ["enem2" + this.i];
            this.enemyv2.name = this.enemyname2;
            addChild(this.enemyv2);
            this.enemyArray[this.i] = this.getChildByName("enem2" + this.i) as MovieClip;
            this.enemyArray[this.i].cspeed = 30;
            var _loc_1:String = this;
            var _loc_2:* = this.i + 1;
            _loc_1.i = _loc_2;
        }
        this.bonusnum = 20;
        this.bonusArray = new Vector.<MovieClip>(this.bonusnum);
        this.i = 1;
        while (this.i <= this.bonusnum)
        {

            this.bonusv = new bonusobj();
            this.bonusv.y = -500;
            this.bonusname = ["bnsr" + this.i];
            this.bonusv.name = this.bonusname;
            addChild(this.bonusv);
            this.bonusArray[this.i] = this.getChildByName("bnsr" + this.i) as MovieClip;
            var _loc_1:String = this;
            var _loc_2:* = this.i + 1;
            _loc_1.i = _loc_2;
        }
        this.bo = 1;
        this.enemynum = 15;
        this.i = 1;
        while (this.i <= this.enemynum)
        {

            this.enemyv = new enemyobj();
            this.enemyv.y = -500;
            this.enemyname = ["enem" + this.i];
            this.enemyv.name = this.enemyname;
            addChild(this.enemyv);
            this.enemyArray[this.i] = this.getChildByName("enem" + this.i) as MovieClip;
            this.enemyArray[this.i].cspeed = this.i;
            var _loc_1:String = this;
            var _loc_2:* = this.i + 1;
            _loc_1.i = _loc_2;
        }
        this.mshipArray5 = new Vector.<MovieClip>(1);
        this.i = 1;
        while (this.i <= 2)
        {

            this.shipcrea6 = new shipobj();
            this.shipcrea6.name = "m5shipcreation" + this.i;
            this.shipcrea6.x = -350;
            this.shipcrea6.y = 350;
            addChild(this.shipcrea6);
            this.mshipArray5[this.i] = this.getChildByName("m5shipcreation" + this.i) as MovieClip;
            var _loc_1:String = this;
            var _loc_2:* = this.i + 1;
            _loc_1.i = _loc_2;
        }
        this.mshipArray2 = new Vector.<MovieClip>(3);
        this.i = 1;
        while (this.i <= 3)
        {

            this.shipcrea3 = new shipobj();
            this.shipcrea3.name = "m2shipcreation" + this.i;
            this.shipcrea3.x = -350;
            this.shipcrea3.y = 350;
            addChild(this.shipcrea3);
            this.mshipArray2[this.i] = this.getChildByName("m2shipcreation" + this.i) as MovieClip;
            var _loc_1:String = this;
            var _loc_2:* = this.i + 1;
            _loc_1.i = _loc_2;
        }
        this.mshipArray4 = new Vector.<MovieClip>(1);
        this.i = 1;
        while (this.i <= 1)
        {

            this.shipcrea5 = new shipobj();
            this.shipcrea5.name = "m4shipcreation" + this.i;
            this.shipcrea5.x = -350;
            this.shipcrea5.y = 350;
            addChild(this.shipcrea5);
            this.mshipArray4[this.i] = this.getChildByName("m4shipcreation" + this.i) as MovieClip;
            var _loc_1:String = this;
            var _loc_2:* = this.i + 1;
            _loc_1.i = _loc_2;
        }
        this.mshipArray3 = new Vector.<MovieClip>(1);
        this.i = 1;
        while (this.i <= 1)
        {

            this.shipcrea4 = new shipobj();
            this.shipcrea4.name = "m3shipcreation" + this.i;
            this.shipcrea4.x = -350;
            this.shipcrea4.y = 350;
            addChild(this.shipcrea4);
            this.mshipArray3[this.i] = this.getChildByName("m3shipcreation" + this.i) as MovieClip;
            var _loc_1:String = this;
            var _loc_2:* = this.i + 1;
            _loc_1.i = _loc_2;
        }
        this.mshipArray = new Vector.<MovieClip>(2);
        this.i = 1;
        while (this.i <= 2)
        {

            this.shipcrea2 = new shipobj();
            this.shipcrea2.name = "mshipcreation" + this.i;
            this.shipcrea2.x = -350;
            this.shipcrea2.y = 350;
            addChild(this.shipcrea2);
            this.mshipArray[this.i] = this.getChildByName("mshipcreation" + this.i) as MovieClip;
            var _loc_1:String = this;
            var _loc_2:* = this.i + 1;
            _loc_1.i = _loc_2;
        }
        this.shipcrea = new shipobj();
        this.shipcrea.name = "shipcreation";
        this.shipcrea.x = -350;
        this.shipcrea.y = 350;
        addChild(this.shipcrea);
        this.ship = this.getChildByName("shipcreation");
        this.wepnum = 100;
        this.weaponArray = new Vector.<MovieClip>(this.wepnum);
        this.i = 1;
        while (this.i <= this.wepnum)
        {

            this.weapon = new weaponobj();
            this.weapon.y = -5000;
            this.weaponname = ["wep" + this.i];
            this.weapon.name = this.weaponname;
            addChild(this.weapon);
            this.weaponArray[this.i] = this.getChildByName("wep" + this.i) as MovieClip;
            this.weaponArray[this.i].blendMode = BlendMode.ADD;
            var _loc_1:String = this;
            var _loc_2:* = this.i + 1;
            _loc_1.i = _loc_2;
        }
        this.we = 1;
        this.beamArray = new Vector.<MovieClip>(4);
        this.i = 1;
        while (this.i <= 4)
        {

            this.beamx = new beamobj();
            this.beamx.y = -5000;
            this.beamname = ["beamx" + this.i];
            this.beamx.name = this.beamname;
            addChild(this.beamx);
            this.beamArray[this.i] = this.getChildByName("beamx" + this.i) as MovieClip;
            var _loc_1:String = this;
            var _loc_2:* = this.i + 1;
            _loc_1.i = _loc_2;
        }
        this.be = 1;
        this.expnum = 32;
        this.expArray = new Vector.<MovieClip>(this.expnum);
        this.i = 1;
        while (this.i <= this.expnum)
        {

            this.expv = new expobj();
            this.expv.y = -5000;
            this.numuse = (Math.random() - 0.5) / 2 + 0.8;
            this.expv.width = this.expv.width * this.numuse;
            this.expv.height = this.expv.height * this.numuse;
            this.expname = ["eep" + this.i];
            this.expv.name = this.expname;
            addChild(this.expv);
            this.expArray[this.i] = this.getChildByName("eep" + this.i) as MovieClip;
            var _loc_1:String = this;
            var _loc_2:* = this.i + 1;
            _loc_1.i = _loc_2;
        }
        this.ee = 1;
        this.sparknum = 40;
        this.sparkArray = new Vector.<MovieClip>(this.sparknum);
        this.i = 1;
        while (this.i <= this.sparknum)
        {

            this.sparkv = new starobj();
            this.sparkv.y = -100;
            this.sparkname = ["spk" + this.i];
            this.sparkv.name = this.sparkname;
            addChild(this.sparkv);
            this.sparkArray[this.i] = this.getChildByName("spk" + this.i) as MovieClip;
            var _loc_1:String = this;
            var _loc_2:* = this.i + 1;
            _loc_1.i = _loc_2;
        }
        this.sp = 1;
        this.dispnum = 10;
        this.dispArray = new Vector.<MovieClip>(this.dispnum);
        this.i = 1;
        while (this.i <= this.dispnum)
        {

            this.dispv = new dispobj();
            this.dispv.y = -100;
            this.dispname = ["dispk" + this.i];
            this.dispv.name = this.dispname;
            addChild(this.dispv);
            this.dispArray[this.i] = this.getChildByName("dispk" + this.i) as MovieClip;
            var _loc_1:String = this;
            var _loc_2:* = this.i + 1;
            _loc_1.i = _loc_2;
        }
        this.dp = 1;
        this.skillscrea = new skillsobj();
        this.skillscrea.name = "skillscreation";
        this.skillscrea.x = 7;
        this.skillscrea.y = 459;
        addChild(this.skillscrea);
        this.skills = this.getChildByName("skillscreation");
        this.barscrea = new barsobj();
        this.barscrea.name = "barscreation";
        this.barscrea.x = 498;
        this.barscrea.y = 445;
        addChild(this.barscrea);
        this.bars = this.getChildByName("barscreation");
        this.mousecrea = new mouseobj();
        this.mousecrea.name = "mousecreation";
        this.mousecrea.x = -350;
        this.mousecrea.y = 350;
        this.mousecrea.mouseEnabled = false;
        this.mousecrea.mouseChildren = false;
        addChild(this.mousecrea);
        this.mousepointer = this.getChildByName("mousecreation");
        this.bosscrea = new bossobj();
        this.bosscrea.name = "bosscreation";
        this.bosscrea.x = 350;
        this.bosscrea.y = 250;
        this.bosscrea.visible = false;
        addChild(this.bosscrea);
        this.bossscreen = this.getChildByName("bosscreation");
        this.shopcrea = new shopobj();
        this.shopcrea.name = "shopcreation";
        this.shopcrea.x = 350;
        this.shopcrea.y = 250;
        this.shopcrea.visible = false;
        addChild(this.shopcrea);
        this.shopscreen = this.getChildByName("shopcreation");
        this.missioncrea = new missionobj();
        this.missioncrea.name = "missioncreation";
        this.missioncrea.x = 0;
        this.missioncrea.y = 0;
        addChild(this.missioncrea);
        this.mission = this.getChildByName("missioncreation");
        this.avatarcrea = new avatarobj();
        this.avatarcrea.name = "avatarcreation";
        this.avatarcrea.x = 0;
        this.avatarcrea.y = 0;
        addChild(this.avatarcrea);
        this.avatar = this.getChildByName("avatarcreation");
        this.choosecrea = new chooseobj();
        this.choosecrea.name = "choosecreation";
        this.choosecrea.x = 350;
        this.choosecrea.y = 250;
        addChild(this.choosecrea);
        this.chooseship = this.getChildByName("choosecreation");
        this.chooseship.a1.addEventListener(MouseEvent.MOUSE_UP, this.choosef);
        this.chooseship.a2.addEventListener(MouseEvent.MOUSE_UP, this.choosef);
        this.chooseship.a3.addEventListener(MouseEvent.MOUSE_UP, this.choosef);
        Mouse.show();
        this.startcrea = new startobj();
        this.startcrea.name = "startcreation";
        this.startcrea.x = 0;
        this.startcrea.y = 0;
        addChild(this.startcrea);
        this.startscreen = this.getChildByName("startcreation");
        this.deathcrea = new deathobj();
        this.deathcrea.name = "deathcreation";
        this.deathcrea.x = 0;
        this.deathcrea.y = 0;
        this.deathcrea.visible = false;
        addChild(this.deathcrea);
        this.deathscreen = this.getChildByName("deathcreation");
        this.savecrea = new saveobj();
        this.savecrea.name = "savecreation";
        this.savecrea.x = 350;
        this.savecrea.y = 0;
        addChild(this.savecrea);
        this.savescreen = this.getChildByName("savecreation");
        this.optionscrea = new optionsobj();
        this.optionscrea.name = "optionscreation";
        this.optionscrea.x = 0;
        this.optionscrea.y = 0;
        addChild(this.optionscrea);
        this.optionscreen = this.getChildByName("optionscreation");
        this.aboutcrea = new aboutobj();
        this.aboutcrea.name = "aboutscreation";
        this.aboutcrea.x = 0;
        this.aboutcrea.y = 0;
        addChild(this.aboutcrea);
        this.aboutscreen = this.getChildByName("aboutscreation");
        this.kongloadcrea = new kongloadobj();
        this.kongloadcrea.name = "kongloadcreation";
        this.kongloadcrea.x = 0;
        this.kongloadcrea.y = 0;
        addChild(this.kongloadcrea);
        this.kongloadscreen = this.getChildByName("kongloadcreation");
        this.pausecrea = new pauseobj();
        this.pausecrea.name = "pausecreation";
        this.pausecrea.x = 350;
        this.pausecrea.y = 250;
        this.pausecrea.visible = false;
        addChild(this.pausecrea);
        this.pausescreen = this.getChildByName("pausecreation");
        this.stopcrea = new stopobj();
        this.stopcrea.name = "stopcreation";
        this.stopcrea.x = 0;
        this.stopcrea.y = 0;
        this.stopcrea.mouseEnabled = false;
        this.stopcrea.mouseChildren = false;
        addChild(this.stopcrea);
        this.stopscreen = this.getChildByName("stopcreation");
        this.stopscreen.blendMode = BlendMode.ADD;
        this.stopscreen.cacheAsBitmap = true;
        this.loadcrea = new loadobj();
        this.loadcrea.name = "loadcreation";
        this.loadcrea.x = 0;
        this.loadcrea.y = 0;
        this.loadcrea.mouseEnabled = false;
        this.loadcrea.mouseChildren = false;
        addChild(this.loadcrea);
        this.loadscreen = this.getChildByName("loadcreation");
        this.flashcrea = new flashobj();
        this.flashcrea.name = "flashcreation";
        this.flashcrea.x = 0;
        this.flashcrea.y = 0;
        this.flashcrea.mouseEnabled = false;
        this.flashcrea.mouseChildren = false;
        addChild(this.flashcrea);
        this.flashscreen = this.getChildByName("flashcreation");
        this.whitecrea = new whiteobj();
        this.whitecrea.name = "whitecreation";
        this.whitecrea.x = 0;
        this.whitecrea.y = 0;
        this.whitecrea.visible = false;
        this.whitecrea.mouseEnabled = false;
        this.whitecrea.mouseChildren = false;
        addChild(this.whitecrea);
        this.whitescreen = this.getChildByName("whitecreation");
        this.whitescreen.blendMode = BlendMode.ADD;
        this.whitescreen.cacheAsBitmap = true;
    }
    if (this.newgame)
    {
        this.lockpause = false;
        this.pausegame = false;
        this.chooseship.visible = true;
        this.ship.x = -350;
        this.tutlevel = -1;
        this.enemynumxx = 5;
        this.assnum = 0;
        this.nnum[0] = 0;
        this.nnum[15] = 0;
        this.nnum[30] = 0;
        this.bars.a1.ax2.text = "0 Shield";
        this.bars.a2.ax2.text = "0 Armor";
        this.bars.a3.ax2.text = "0 Energy";
        this.bars.a4.ax.text = "0 Gold";
        this.bars.a4.ax2.text = "Level 1";
    }
    this.versionnum = 1.01;
    this.fademusic = 0;
    this.bsound = new buyitem();
    this.shopsound = new shipbuy();
    this.shipsound = new shipbuynew();
    this.jsound = new jingle();
    this.csound = new crash();
    this.hsound = new hit();
    this.boomsound = new boom();
    this.boomsound2 = new boom2();
    this.bosssound = new bossboom();
    this.l1sound = new laser1();
    this.l2sound = new laser2();
    this.l3sound = new laser3();
    this.l4sound = new laser4();
    this.gbsound = new goodbon();
    this.bbsound = new badbon();
    this.snapsound = new snap();
    this.nbsound = new nekobeep();
    this.osound = new otherbeep();
    this.sksound = new skillbeep();
    this.ersound = new errorx();
    this.asound = new achievesound();
    this.gosound = new goldsound();
    this.electrosound = new electro();
    this.rsound = new repair();
    this.uqsound = new unequipsound();
    this.itemsound = new itemusesound();
    this.music1 = new msong();
    this.smusic1 = new shopmusic();
    this.emusic = new endmusic();
    this.bmusic = new bosssong();
    this.dmusic = new deathsong();
    this.soundPosition = 0;
    this.fvol = 1;
    this.currentMusic = this.music1;
    this.currentMusic = this.dmusic;
    this.playMusic();
    this.stopscreen.gotoAndStop(2);
    this.loadscreen.gotoAndStop(2);
    this.cont2y = 500;
    this.cont1y = 0;
    this.createobjects(this.cont1, 0);
    this.createobjects(this.cont2, 20);
    this.shipchange();
    this.leveltimer = this.levellength;
    this.bg1.gotoAndStop(1);
    this.bg1.yx = 0;
    this.bg1.scrollRect = new Rectangle(20 - this.ceil(this.offsetx / 1.5), this.bg1.yx, 700, 500);
    this.cont1.scrollRect = new Rectangle(-this.round(this.cont1x), this.round(this.cont1y), 700, 500);
    this.cont2.scrollRect = new Rectangle(-this.round(this.cont1x), this.round(this.cont2y), 700, 500);
    this.nearestenemy = this.enemyArray[1];
    this.shipx = 350;
    this.shipy = 350;
    this.totaldamage = 0;
    this.itemuset = 0;
    this.gentimer = 0;
    this.shieldda = 0;
    this.sinflash = 0;
    this.mgentimer = 0;
    this.reftimer = 0;
    this.cont3y = -800;
    this.orbcounter = 0;
    this.achonce = true;
    this.handicounter = 0;
    this.handival = 1;
    this.oblivion = 0;
    this.oblivonrot = 0;
    this.explitemtimer = 0;
    this.eitemx = 0;
    this.eitemy = 0;
    this.mcomplete = 0;
    this.eptimer = 0;
    this.relentless = 0;
    this.noteshow = 0;
    this.achtext = "";
    this.shoot2 = false;
    this.genukill = false;
    this.entitykill = false;
    this.virusspread = 0;
    this.savescreen.gotoAndStop(2);
    this.optionscreen.gotoAndStop(1);
    this.aboutscreen.gotoAndStop(1);
    this.startscreen.ng.addEventListener(MouseEvent.MOUSE_UP, this.newgamef);
    this.startscreen.lg.addEventListener(MouseEvent.MOUSE_UP, this.loadgamef);
    this.startscreen.kg.addEventListener(MouseEvent.MOUSE_UP, this.gotoKong);
    this.startscreen.op.addEventListener(MouseEvent.MOUSE_UP, this.optionshow);
    this.startscreen.ab.addEventListener(MouseEvent.MOUSE_UP, this.aboutshow);
    this.startscreen.ekbut.addEventListener(MouseEvent.MOUSE_UP, this.gotoKongVer);
    this.bars.kbut.addEventListener(MouseEvent.CLICK, this.gotoKong);
    if (loaderInfo.url.indexOf("kongregate") == -1)
    {
    }
    else
    {
        this.versionnum = this.versionnum + 0.01;
    }
    this.startscreen.vertext.text = "Ver " + this.versionnum;
    if (this.localMode == false)
    {
    }
    this.targetURL = new URLRequest("http://armorgames.com/play/4399/enigmata");
    this.chooseship.gotoAndStop(1);
    stage.addEventListener(Event.DEACTIVATE, this.windowNotActive);
    stage.addEventListener(MouseEvent.MOUSE_DOWN, this.mfirex);
    stage.addEventListener(MouseEvent.MOUSE_UP, this.mfirex2);
    stage.addEventListener(KeyboardEvent.KEY_UP, this.reportKeyUp);
    stage.addEventListener(KeyboardEvent.KEY_DOWN, this.reportKeyDown);
    this.pausescreen.visible = false;
    this.pausescreen.gotoAndStop(5);
    this.bd = new BitmapData(stage.stageWidth, stage.stageHeight);
    this.bd.draw(stage);
    this.screenshot = new Bitmap(this.bd);
    this.freshgame = 2;
    this.dietem = 0;
    this.zentimer = 0;
    this.zentimer1 = 0;
    this.zentimer2 = 0;
    this.zentimer3 = 0;
    this.oriscrollz = 0;
    this.orimousez = 0;
    this.scrollmount = 0;
    this.sctimer = 0;
    this.shopmax[1] = 15;
    this.shopmax[2] = 15;
    this.shopmax[3] = 15;
    this.shopmax[4] = 7;
    this.shopmax[5] = 7;
    this.shopmax[6] = 7;
    this.shopmax[7] = 3;
    this.shopmax[8] = 3;
    this.shopmax[9] = 3;
    this.shopmax[10] = 15;
    this.shopmax[11] = 15;
    this.shopmax[12] = 15;
    this.shopmax[13] = 4;
    this.shopmax[14] = 4;
    this.shopmax[15] = 4;
    this.tutoncex = true;
    this.tutoncex2 = true;
    this.bbx = this.shopscreen.bb1.x;
    this.oriy = this.shopscreen.shop1.a1.y;
    this.i = 45 + 1;
    do
    {

        this.a5Text[this.i] = 0;
        this.a2Text[this.i] = "";
        this.a4Text[this.i] = "";
        var _loc_1:String = this;
        _loc_1.i = this.i - 1;
    }while (--this.i > 0)
    this.i = 1;
    this.a1Text[this.i] = "FT5 Armor Enhancer";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16596542, 1);
    this.goldValue[this.i] = 5000;
    this.a5Text[this.i] = 40000;
    this.i = 2;
    this.a1Text[this.i] = "Nithillum Shield Cores";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(3967743, 1);
    this.goldValue[this.i] = 7000;
    this.a4Text[this.i] = "Increases your maximum shield by 8 shield.";
    this.a5Text[this.i] = 38000;
    this.i = 3;
    this.a1Text[this.i] = "Guardian\'s Essence";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 16000;
    this.a5Text[this.i] = 25000;
    this.i = 4;
    this.a1Text[this.i] = "Neko\'s Amazatron";
    this.a2Text[this.i] = "( Weapon )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(59135, 1);
    this.goldValue[this.i] = 20000;
    this.a4Text[this.i] = "Makes your weapon the Amazatron. Not powerful as new ship weapons.";
    this.i = 5;
    this.a1Text[this.i] = "E-Magnet Missile Launcher";
    this.a2Text[this.i] = "( Lowers Missile Delay )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16767821, 1);
    this.goldValue[this.i] = 16000;
    this.a4Text[this.i] = "Using new technology your missiles will launch faster one after another.";
    this.i = 6;
    this.a1Text[this.i] = "RS Laser Amplifier";
    this.a5Text[this.i] = 45000;
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(3967743, 1);
    this.goldValue[this.i] = 40000;
    this.i = 7;
    this.a1Text[this.i] = "Tricraft Ion Boosters";
    this.a2Text[this.i] = "( +5 Speed )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(3407616, 1);
    this.goldValue[this.i] = 10000;
    this.a5Text[this.i] = 45000;
    this.a4Text[this.i] = "Boosts your ship\'s maximum speed by 5 Mps.";
    this.i = 8;
    this.a1Text[this.i] = "Megacorp V5 System";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(8400381, 1);
    this.goldValue[this.i] = 35000;
    this.a5Text[this.i] = 75000;
    this.i = 9;
    this.a1Text[this.i] = "Micro Repair Bots";
    this.a2Text[this.i] = "( Automatic Armor Repair )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16711680, 1);
    this.goldValue[this.i] = 25000;
    this.a4Text[this.i] = "These nanobots will gradually repair your armor when its damaged.";
    this.i = 10;
    this.a1Text[this.i] = "Nithillum Shield Multiplier";
    this.a2Text[this.i] = "( +20% Shield )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(3381759, 1);
    this.goldValue[this.i] = 45000;
    this.a4Text[this.i] = "Your maximum shield is increased by 20%, upgrades included.";
    this.i = 11;
    this.a1Text[this.i] = "SOLID Armor Defense";
    this.a2Text[this.i] = "( +10% Armor Defense )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16735027, 1);
    this.goldValue[this.i] = 29000;
    this.a4Text[this.i] = "Your armor, not including shield, is protected from damage by 10%.";
    this.i = 12;
    this.a1Text[this.i] = "Neko\'s Bonus Charm";
    this.a2Text[this.i] = "( Increases Bonus Drop Rate )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(11468595, 1);
    this.goldValue[this.i] = 18000;
    this.a4Text[this.i] = "This charm increases your chance of enemies dropping bonuses.";
    this.i = 13;
    this.a1Text[this.i] = "Adriana\'s Rosette";
    this.a2Text[this.i] = "( x2 Bonus Duration )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(52326, 1);
    this.goldValue[this.i] = 75000;
    this.a4Text[this.i] = "Doubles the length of time that your bonus weapons will last.";
    this.i = 14;
    this.a1Text[this.i] = "Zennon Laser Bolt";
    this.a2Text[this.i] = "( Weapon Attachment )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16772693, 1);
    this.goldValue[this.i] = 15000;
    this.a4Text[this.i] = "Adds laser bolt fire to your ship, averages 30 damage per hit.";
    this.i = 15;
    this.a1Text[this.i] = "Cargo Expansion";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(35558, 1);
    this.goldValue[this.i] = 250000;
    this.a5Text[this.i] = 350000;
    this.i = 16;
    this.a1Text[this.i] = "Tricraft MINI Ships";
    this.a2Text[this.i] = "( Get 2 MINI Ships )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(3387135, 1);
    this.goldValue[this.i] = 95000;
    this.a4Text[this.i] = "These top of the line MINI ships will help you destroy enemies.";
    this.i = 17;
    this.a1Text[this.i] = "Eloden Negator";
    this.a2Text[this.i] = "( -50% Neg. Effect Time )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16711782, 1);
    this.goldValue[this.i] = 130000;
    this.a4Text[this.i] = "This intelligent Negator cuts down Negative Effect durations in half.";
    this.i = 18;
    this.a1Text[this.i] = "Megacorp V4 Nuclear AUX";
    this.a2Text[this.i] = "( Auto Energy Charge )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(12860671, 1);
    this.goldValue[this.i] = 135000;
    this.a4Text[this.i] = "This device will gradually give your ship Energy while in flight.";
    this.i = 19;
    this.a1Text[this.i] = "RS Doom Orbs";
    this.a2Text[this.i] = "( Get 3 Doom Orbs )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16596542, 1);
    this.goldValue[this.i] = 230000;
    this.a4Text[this.i] = "These powerful Doom Orbs orbit your ship firing at nearby enemies.";
    this.i = 20;
    this.a1Text[this.i] = "Zennon Maximum Blaster";
    this.a2Text[this.i] = "( Get 1 Blaster )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16777062, 1);
    this.goldValue[this.i] = 95000;
    this.a4Text[this.i] = "The flagship weapon of Zennon Corp, it fires a mighty laser blast.";
    this.i = 21;
    this.a1Text[this.i] = "The 1 Multiplier";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(6750054, 1);
    this.goldValue[this.i] = 150000;
    this.a5Text[this.i] = 300000;
    this.i = 22;
    this.a1Text[this.i] = "M. Specialist";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 125000;
    this.a5Text[this.i] = 60000;
    this.i = 23;
    this.a1Text[this.i] = "Auto Healing Technique";
    this.a2Text[this.i] = "( Self Activation )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(6749952, 1);
    this.goldValue[this.i] = 75000;
    this.a4Text[this.i] = "Automatically starts Healing skill when Armor and Shield are low.";
    this.i = 24;
    this.a1Text[this.i] = "Gold Generator";
    this.a2Text[this.i] = "( Creates Gold )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16750848, 1);
    this.goldValue[this.i] = 400000;
    this.a4Text[this.i] = "Using the free photons in space, this device gradually creates gold.";
    this.i = 25;
    this.a1Text[this.i] = "Green Betastasize";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(11600305, 1);
    this.goldValue[this.i] = 345000;
    this.a5Text[this.i] = 185000;
    this.i = 26;
    this.a1Text[this.i] = "X Reducer";
    this.a2Text[this.i] = "( Lowers Negative Item Droprate )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(13959168, 1);
    this.goldValue[this.i] = 250000;
    this.a4Text[this.i] = "This device lowers the chance of enemies dropping negative bonuses.";
    this.i = 27;
    this.a1Text[this.i] = "Xenon Battery";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(3381759, 1);
    this.goldValue[this.i] = 735000;
    this.a5Text[this.i] = 90000;
    this.i = 28;
    this.a1Text[this.i] = "M. Creator";
    var _loc_1:* = new Color();
    this.colorValue[this.i] = new Color();
    this.a2Text[this.i] = _loc_1;
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 750000;
    this.a4Text[this.i] = "Creates missiles for every missile type currently on your skills bar.";
    this.a5Text[this.i] = 120000;
    this.i = 29;
    this.a1Text[this.i] = "Cytoreactor";
    this.a2Text[this.i] = "( Get 1 Cytoreactor )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(3394560, 1);
    this.goldValue[this.i] = 1200000;
    this.a4Text[this.i] = "The Cytoreactor releases a powerful explosive burst every 10 seconds.";
    this.i = 30;
    this.a1Text[this.i] = "Semi-Barrier";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(3394815, 1);
    this.goldValue[this.i] = 600000;
    this.a5Text[this.i] = 100000;
    this.i = 31;
    this.a1Text[this.i] = "Second Chance";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(3407616, 1);
    this.goldValue[this.i] = 2250000;
    this.a5Text[this.i] = 150000;
    this.i = 32;
    this.a1Text[this.i] = "Auto Neg. Effect Canceller";
    this.a2Text[this.i] = "( Self Activation )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(13369599, 1);
    this.goldValue[this.i] = 1535000;
    this.a4Text[this.i] = "Activates your Neg. Effect Canceller skill when you get a Neg. Effect.";
    this.i = 33;
    this.a1Text[this.i] = "INFINITE Bonus";
    this.a2Text[this.i] = "( Bonuses Last Forever )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16776960, 1);
    this.goldValue[this.i] = 10500000;
    this.a4Text[this.i] = "All bonus weapons will last forever.";
    this.i = 34;
    this.a1Text[this.i] = "The Z900";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16720418, 1);
    this.goldValue[this.i] = 1100000;
    this.a5Text[this.i] = 500000;
    this.i = 35;
    this.a1Text[this.i] = "Neginergy";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(11549951, 1);
    this.goldValue[this.i] = 1650000;
    this.a5Text[this.i] = 120000;
    this.i = 36;
    this.a1Text[this.i] = "Fiery Amulet";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 1300000;
    this.a5Text[this.i] = 200000;
    this.i = 37;
    this.a1Text[this.i] = "Bonus Amplifier";
    this.a2Text[this.i] = "( Doubles Bonus Values )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(65280, 1);
    this.goldValue[this.i] = 700000;
    this.a4Text[this.i] = "Doubles the value of Armor, Shield, Energy, and Missile bonuses.";
    this.i = 38;
    this.a1Text[this.i] = "Fion Assimilator";
    this.a2Text[this.i] = "( Unlimited Missiles )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16711782, 1);
    this.goldValue[this.i] = 11000000;
    this.a4Text[this.i] = "Unlimited ammo for every missile.";
    this.i = 39;
    this.a1Text[this.i] = "Particle Compressor";
    this.a2Text[this.i] = "( Shrinks Ship by 30% )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(26367, 1);
    this.goldValue[this.i] = 850000;
    this.a4Text[this.i] = "This device makes your ship 30% smaller. ( -10% Shield / Armor )";
    this.i = 40;
    this.a1Text[this.i] = "Death Blast";
    this.a2Text[this.i] = "( Fires Death Bolts )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(10879724, 1);
    this.goldValue[this.i] = 2877100;
    this.a4Text[this.i] = "Destroy enemies with death bolts that fire every 7 seconds.";
    this.i = 41;
    this.a1Text[this.i] = "Empron Crystal";
    this.a2Text[this.i] = "( Doubles Healing )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(10092288, 1);
    this.goldValue[this.i] = 4500000;
    this.a4Text[this.i] = "This crystal doubles the effect of healing technique.";
    this.i = 42;
    this.a1Text[this.i] = "Conquerer\'s Seal";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(65280, 1);
    this.goldValue[this.i] = 7500000;
    this.a5Text[this.i] = 200000;
    this.i = 43;
    this.a1Text[this.i] = "Time Nullifier";
    this.a2Text[this.i] = "( Cheater )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(39423, 1);
    this.goldValue[this.i] = 1400000;
    this.a4Text[this.i] = "Removes 45 seconds from your final level time counter.";
    this.i = 44;
    this.a1Text[this.i] = "The Fifth Collection";
    this.a2Text[this.i] = "( Unlocks New Ships )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(5399008, 1);
    this.goldValue[this.i] = 25000000;
    this.a4Text[this.i] = "Gain access to the ELITE Tier of ships.";
    this.i = 45;
    this.a1Text[this.i] = "Boss World";
    this.a2Text[this.i] = "( Unlocks Passage )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(15513406, 1);
    this.goldValue[this.i] = 15000000;
    this.a4Text[this.i] = "Unlock the secret passage to Boss World.";
    this.i = 101;
    this.a1Text[this.i] = "Warp Speed";
    this.a2Text[this.i] = "( Zero Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(6749952, 1);
    this.goldValue[this.i] = 5000;
    this.a5Text[this.i] = 0;
    this.a4Text[this.i] = "Fly through space at extreme speeds, but try not to crash.";
    this.i = 102;
    this.a1Text[this.i] = "Stealth Mode";
    this.a2Text[this.i] = "( Low Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16763904, 1);
    this.goldValue[this.i] = 5000;
    this.a4Text[this.i] = "Become invulnerable to enemies and their weapons while in this mode.";
    this.a5Text[this.i] = 0;
    this.i = 103;
    this.a1Text[this.i] = "Stun Enemies";
    this.a2Text[this.i] = "( Low Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16763904, 1);
    this.goldValue[this.i] = 7000;
    this.a4Text[this.i] = "Stuns all enemies in sight, making them unable to move.";
    this.a5Text[this.i] = 0;
    this.i = 104;
    this.a1Text[this.i] = "Healing Technique";
    this.a2Text[this.i] = "( Low Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16763904, 1);
    this.goldValue[this.i] = 7000;
    this.a4Text[this.i] = "Gradually repairs your ships armor and shield.";
    this.a5Text[this.i] = 40000;
    this.i = 105;
    this.a1Text[this.i] = "Mega Blast";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 10000;
    this.a4Text[this.i] = "Unleashes a powerful fiery blast in all directions.";
    this.a5Text[this.i] = 20000;
    this.i = 106;
    this.a1Text[this.i] = "Bonus Magnet";
    this.a2Text[this.i] = "( Low Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16763904, 1);
    this.goldValue[this.i] = 5000;
    this.a4Text[this.i] = "Activates a magnet that pulls all good bonuses towards your ship.";
    this.a5Text[this.i] = 0;
    this.i = 107;
    this.a1Text[this.i] = "Destroy Shields";
    this.a2Text[this.i] = "( Low Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16763904, 1);
    this.goldValue[this.i] = 15000;
    this.a4Text[this.i] = "Destroys all the enemys\' shields that are in view.";
    this.a5Text[this.i] = 0;
    this.i = 108;
    this.a1Text[this.i] = "Psion Wave";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 30000;
    this.a4Text[this.i] = "Fires a powerful Psion Wave at all enemies ahead of you.";
    this.a5Text[this.i] = 30000;
    this.i = 109;
    this.a1Text[this.i] = "Stop Time";
    this.a2Text[this.i] = "( High Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16724736, 1);
    this.goldValue[this.i] = 400000;
    this.a4Text[this.i] = "Gives you the power to stop time. Upgrade for lower Energy use.";
    this.a5Text[this.i] = 95000;
    this.i = 110;
    this.a1Text[this.i] = "Reflection Barrier";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 70000;
    this.a4Text[this.i] = "Reflects enemy fire back to them, except certain weapons.";
    this.a5Text[this.i] = 45000;
    this.i = 111;
    this.a1Text[this.i] = "Nithilium Burst";
    this.a2Text[this.i] = "( Low Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16763904, 1);
    this.goldValue[this.i] = 150000;
    this.a4Text[this.i] = "Unleash a bright blast that pushes enemies back with it\'s mighty force.";
    this.a5Text[this.i] = 25000;
    this.i = 112;
    this.a1Text[this.i] = "Electro Magnetic Pulse";
    this.a2Text[this.i] = "( High Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16724736, 1);
    this.goldValue[this.i] = 80000;
    this.a4Text[this.i] = "Stops all enemies from firing their weapons, not as effective on bosses.";
    this.a5Text[this.i] = 0;
    this.i = 113;
    this.a1Text[this.i] = "Negative Effect Canceller";
    this.a2Text[this.i] = "( Low Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16763904, 1);
    this.goldValue[this.i] = 40000;
    this.a4Text[this.i] = "Cancels all negative effects on your ship. Upgrade for lower Energy use.";
    this.a5Text[this.i] = 60000;
    this.i = 114;
    this.a1Text[this.i] = "Phase Warp";
    this.a2Text[this.i] = "( Very Low Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(13434624, 1);
    this.goldValue[this.i] = 800000;
    this.a4Text[this.i] = "When activated, you instantly warp to the location of your mouse.";
    this.a5Text[this.i] = 0;
    this.i = 115;
    this.a1Text[this.i] = "Bonus Lock";
    this.a2Text[this.i] = "( Zero Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(6749952, 1);
    this.goldValue[this.i] = 1000000;
    this.a4Text[this.i] = "Locks your current weapon so that other bonuses won\'t change it.";
    this.a5Text[this.i] = 0;
    this.i = 116;
    this.a1Text[this.i] = "Dos Oblivion";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 1600000;
    this.a4Text[this.i] = "Call forth the Dos Oblivion mega-weapon for a short time.";
    this.a5Text[this.i] = 0;
    this.i = 117;
    this.a1Text[this.i] = "Guardian of Mana";
    this.a2Text[this.i] = "( Very High Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16711833, 1);
    this.goldValue[this.i] = 4000000;
    this.a4Text[this.i] = "Temporarily transform into the Guardian of Mana.";
    this.a5Text[this.i] = 150000;
    this.i = 118;
    this.a1Text[this.i] = "Damage Absorb";
    this.a2Text[this.i] = "( High Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16724736, 1);
    this.goldValue[this.i] = 1700000;
    this.a4Text[this.i] = "Absorbs damage you take and turns it into shield and armor.";
    this.a5Text[this.i] = 100000;
    this.i = 119;
    this.a1Text[this.i] = "Relentless Strike";
    this.a2Text[this.i] = "( High Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16724736, 1);
    this.goldValue[this.i] = 1500000;
    this.a4Text[this.i] = "Fire a flurry of missiles in every direction.";
    this.a5Text[this.i] = 0;
    this.i = 120;
    this.a1Text[this.i] = "Virus Spread";
    this.a2Text[this.i] = "( High Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16724736, 1);
    this.goldValue[this.i] = 5000000;
    this.a4Text[this.i] = "Launches deadly virus capsules that severely damage enemies.";
    this.a5Text[this.i] = 0;
    this.i = 121;
    this.a1Text[this.i] = "Darkness Energy Charge";
    this.a2Text[this.i] = "( Zero Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(6749952, 1);
    this.goldValue[this.i] = 17500000;
    this.a4Text[this.i] = "Converts the aura of Darkness into energy.";
    this.a5Text[this.i] = 150000;
    this.i = 201;
    this.a1Text[this.i] = "Regular Missiles";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16750899, 1);
    this.goldValue[this.i] = 4500;
    this.a4Text[this.i] = "Standard missiles, average about 45 damage per hit.";
    this.i = 202;
    this.a1Text[this.i] = "Stun Missiles";
    this.a2Text[this.i] = "( Low Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16763904, 1);
    this.goldValue[this.i] = 5000;
    this.a4Text[this.i] = "These missiles have a chance of stunning the enemy, (45 Damage)";
    this.i = 203;
    this.a1Text[this.i] = "Heavy Missiles";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 5500;
    this.a4Text[this.i] = "Slower than regular missiles, but do about 50 Damage per hit.";
    this.i = 204;
    this.a1Text[this.i] = "Power Missiles";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16716049, 1);
    this.goldValue[this.i] = 15000;
    this.a4Text[this.i] = "Power missiles use new Energy technology, (100 Damage)";
    this.i = 205;
    this.a1Text[this.i] = "E.M.P. Missiles";
    this.a2Text[this.i] = "( Low Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(5461190, 1);
    this.goldValue[this.i] = 17000;
    this.a4Text[this.i] = "They can stop enemy weapon fire when activated, (95 Damage)";
    this.i = 206;
    this.a1Text[this.i] = "Drain Missiles";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(41569, 1);
    this.goldValue[this.i] = 20000;
    this.a4Text[this.i] = "Sometimes transfers enemies health to your ship, (80 Damage)";
    this.i = 207;
    this.a1Text[this.i] = "Bosskillers";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(1598128, 1);
    this.goldValue[this.i] = 120000;
    this.a4Text[this.i] = "The ultimate missiles created by Megacorp, (225 Damage)";
    this.i = 208;
    this.a1Text[this.i] = "Death Missiles";
    this.a2Text[this.i] = "( Low Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(11872460, 1);
    this.goldValue[this.i] = 120000;
    this.a4Text[this.i] = "Sometimes kills enemies with 1 hit, except bosses, (175 Damage)";
    this.i = 209;
    this.a1Text[this.i] = "Nuclear Strike";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16750848, 1);
    this.goldValue[this.i] = 1000000;
    this.a4Text[this.i] = "Fires a highly explosive nuclear missile, (2000 Damage)";
    this.i = 211;
    this.a1Text[this.i] = "Micro Armor Pack";
    this.a2Text[this.i] = "( +50 Armor )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16711680, 1);
    this.goldValue[this.i] = 4;
    this.a4Text[this.i] = "This armor pack repairs your ship by 50 Armor.";
    this.i = 212;
    this.a1Text[this.i] = "Strong Armor Pack";
    this.a2Text[this.i] = "( +50 Armor )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 3;
    this.a4Text[this.i] = "This armor pack repairs your ship by 150 Armor.";
    this.i = 213;
    this.a1Text[this.i] = "MEGACORP Armor Pack";
    this.a2Text[this.i] = "( +50 Armor )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16750848, 1);
    this.goldValue[this.i] = 2;
    this.a4Text[this.i] = "This armor pack repairs your ship by 500 Armor.";
    this.i = 214;
    this.a1Text[this.i] = "Mini Shield Cell";
    this.a2Text[this.i] = "( +50 Armor )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(3368703, 1);
    this.goldValue[this.i] = 4;
    this.a4Text[this.i] = "This Cell charges your ship with 50 shield.";
    this.i = 215;
    this.a1Text[this.i] = "Heavy Shield Cell";
    this.a2Text[this.i] = "( +50 Armor )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(3381759, 1);
    this.goldValue[this.i] = 3;
    this.a4Text[this.i] = "This Cell charges your ship with 150 shield.";
    this.i = 216;
    this.a1Text[this.i] = "Tricraft Shield Cell";
    this.a2Text[this.i] = "( +50 Armor )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(3394815, 1);
    this.goldValue[this.i] = 2;
    this.a4Text[this.i] = "This Cell charges your ship with 500 shield.";
    this.i = 217;
    this.a1Text[this.i] = "Micro Energy Boost";
    this.a2Text[this.i] = "( +50 Armor )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(8664063, 1);
    this.goldValue[this.i] = 3;
    this.a4Text[this.i] = "This item provides your ship with an instant 50 Energy.";
    this.i = 218;
    this.a1Text[this.i] = "Nekon Orb Essence";
    this.a2Text[this.i] = "( +50 Armor )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(3407728, 1);
    this.goldValue[this.i] = 2;
    this.a4Text[this.i] = "This item provides 150 Armor, Shield and Energy";
    this.i = 219;
    this.a1Text[this.i] = "Ultimate Renew";
    this.a2Text[this.i] = "( +50 Armor )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16724951, 1);
    this.goldValue[this.i] = 1;
    this.a4Text[this.i] = "Completely recovers your Armor, Shield and Energy.";
    this.i = 301;
    this.a1Text[this.i] = "Starter";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 20000;
    this.a4Text[this.i] = "Kill 100 Enemies";
    this.i = 302;
    this.a1Text[this.i] = "Racer";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 40000;
    this.a4Text[this.i] = "Beat a non-replay level in 120 Seconds";
    this.i = 303;
    this.a1Text[this.i] = "Money Money Money";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 20000;
    this.a4Text[this.i] = "Obtain 200000 Gold";
    this.i = 304;
    this.a1Text[this.i] = "Insanity";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 10000;
    this.a4Text[this.i] = "Crash into a boss";
    this.i = 305;
    this.a1Text[this.i] = "Assassin";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 10000;
    this.a4Text[this.i] = "Kill 25 enemies from behind";
    this.i = 306;
    this.a1Text[this.i] = "Triple Kill";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 35000;
    this.a4Text[this.i] = "Kill three enemies at once";
    this.i = 307;
    this.a1Text[this.i] = "Excellent";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 45000;
    this.a4Text[this.i] = "End level with 4 Excellents or better.";
    this.i = 308;
    this.a1Text[this.i] = "Bonus Lover";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 30000;
    this.a4Text[this.i] = "Collect 300 Bonuses";
    this.i = 309;
    this.a1Text[this.i] = "Ship Collector";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 75000;
    this.a4Text[this.i] = "Buy 5 ships";
    this.i = 310;
    this.a1Text[this.i] = "Missile Enthusiast";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 80000;
    this.a4Text[this.i] = "Use 1000 Missiles.";
    this.i = 311;
    this.a1Text[this.i] = "Vindicator";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 75000;
    this.a4Text[this.i] = "Defeat 500 Enemies";
    this.i = 312;
    this.a1Text[this.i] = "Bosskiller";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 90000;
    this.a4Text[this.i] = "Defeat 4 Bosses";
    this.i = 313;
    this.a1Text[this.i] = "Wielder of the Laser";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 100000;
    this.a4Text[this.i] = "Collect the Vecton Laser power-up.";
    this.i = 314;
    this.a1Text[this.i] = "Amazing";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 120000;
    this.a4Text[this.i] = "End level with 4 Amazings or better.";
    this.i = 315;
    this.a1Text[this.i] = "Millionaire";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 140000;
    this.a4Text[this.i] = "Obtain 1 million gold.";
    this.i = 316;
    this.a1Text[this.i] = "Shield Destroyer";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 75000;
    this.a4Text[this.i] = "Destroy 10 enemy shields.";
    this.i = 317;
    this.a1Text[this.i] = "Skill Wizard";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 100000;
    this.a4Text[this.i] = "Have 5 skills active simultaneously.";
    this.i = 318;
    this.a1Text[this.i] = "Point Shooter";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 75000;
    this.a4Text[this.i] = "Finish a level with over 75% accuracy.";
    this.i = 319;
    this.a1Text[this.i] = "Force of Destruction";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 60000;
    this.a4Text[this.i] = "Defeat over 90% of all enemies in a level.";
    this.i = 320;
    this.a1Text[this.i] = "Questionable Decision";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 125000;
    this.a4Text[this.i] = "Go through a whole level without collecting any bonuses.";
    this.i = 321;
    this.a1Text[this.i] = "Item Master";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 80000;
    this.a4Text[this.i] = "Have 10 or more equipment equipped.";
    this.i = 322;
    this.a1Text[this.i] = "Multitasker";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 120000;
    this.a4Text[this.i] = "Completely fill up your skills bar.";
    this.i = 323;
    this.a1Text[this.i] = "Quintuple Kill";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 140000;
    this.a4Text[this.i] = "Kill 5 enemies at the same time.";
    this.i = 324;
    this.a1Text[this.i] = "Risktaker";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 100000;
    this.a4Text[this.i] = "Almost die five times in one level.";
    this.i = 325;
    this.a1Text[this.i] = "Champion of the Enigmata";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 220000;
    this.a4Text[this.i] = "Defeat 10 bosses.";
    this.i = 326;
    this.a1Text[this.i] = "Badge of Honor";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 160000;
    this.a4Text[this.i] = "Complete 5 missions.";
    this.i = 327;
    this.a1Text[this.i] = "Perfectionist";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 240000;
    this.a4Text[this.i] = "Finish a level with 4 Perfects.";
    this.i = 328;
    this.a1Text[this.i] = "Bonus Addict";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 280000;
    this.a4Text[this.i] = "Collect 2000 bonuses.";
    this.i = 329;
    this.a1Text[this.i] = "Impossible";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 550000;
    this.a4Text[this.i] = "Finish a level with a time of 0.";
    this.i = 330;
    this.a1Text[this.i] = "Wielder of the Blue Laser";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 350000;
    this.a4Text[this.i] = "Collect the Blue Laser power-up.";
    this.i = 331;
    this.a1Text[this.i] = "Warlord";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 200000;
    this.a4Text[this.i] = "Heartlessly defeat 2000 enemies.";
    this.i = 332;
    this.a1Text[this.i] = "Mega-Insanity";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 100000;
    this.a4Text[this.i] = "Crash into a boss 15 times.";
    this.i = 333;
    this.a1Text[this.i] = "The Box of Doom";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 140000;
    this.a4Text[this.i] = "Collect an exploding box.";
    this.i = 334;
    this.a1Text[this.i] = "Filthy Rich";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 300000;
    this.a4Text[this.i] = "Obtain 5 million gold.";
    this.i = 335;
    this.a1Text[this.i] = "Strange Irony";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 430000;
    this.a4Text[this.i] = "Destroy Neko\'s shop.";
    this.i = 336;
    this.a1Text[this.i] = "Obliviator";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 400000;
    this.a4Text[this.i] = "Defeat over 95% of enemies in a level past level 10.";
    this.i = 337;
    this.a1Text[this.i] = "Non-Random Achievement";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 800000;
    this.a4Text[this.i] = "Just kidding, it was random.";
    this.i = 338;
    this.a1Text[this.i] = "Just Made It";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 1200000;
    this.a4Text[this.i] = "End level with 5% armor and shield remaining.";
    this.i = 339;
    this.a1Text[this.i] = "Titan";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 1500000;
    this.a4Text[this.i] = "Create a ship with 5000 armor.";
    this.i = 340;
    this.a1Text[this.i] = "Sniper";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 1000000;
    this.a4Text[this.i] = "Finish a level with over 95% accuracy.";
    this.i = 341;
    this.a1Text[this.i] = "Badge of Conquest";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 1000000;
    this.a4Text[this.i] = "Complete 15 missions.";
    this.i = 342;
    this.a1Text[this.i] = "Full Capacity";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 2000000;
    this.a4Text[this.i] = "Acquire all skills.";
    this.i = 343;
    this.a1Text[this.i] = "O.C.D.";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 2500000;
    this.a4Text[this.i] = "Own everything in the three shops.";
    this.i = 344;
    this.a1Text[this.i] = "Perfectionist Elite";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 3000000;
    this.a4Text[this.i] = "Finish a level with 4 Perfects beyond level 16.";
    this.i = 345;
    this.a1Text[this.i] = "Ultimate Defender of the Enigmata";
    this.a2Text[this.i] = "( Medium Energy )";
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 1000000;
    this.a4Text[this.i] = "Defeat 10000 enemies.";
    this.i = 501;
    this.a1Text[this.i] = "Level 5";
    this.a2Text[this.i] = 80;
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 20000;
    this.a4Text[this.i] = "Collect 80 Nekon Orbs in 40 Seconds";
    this.i = 502;
    this.a1Text[this.i] = "Level 10";
    this.a2Text[this.i] = 100;
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 25000;
    this.a4Text[this.i] = "Collect 100 Red Nekon Orbs in 40 Seconds";
    this.i = 503;
    this.a1Text[this.i] = "Level 15";
    this.a2Text[this.i] = 120;
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 65000;
    this.a4Text[this.i] = "Collect 120 Green Nekon Orbs in 40 Seconds";
    this.i = 504;
    this.a1Text[this.i] = "Level 20";
    this.a2Text[this.i] = 140;
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 150000;
    this.a4Text[this.i] = "Collect 140 Black Nekon Orbs in 40 Seconds";
    this.i = 505;
    this.a1Text[this.i] = "Level 5";
    this.a2Text[this.i] = 250;
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 40000;
    this.a4Text[this.i] = "Collect 250 Nekon Orbs in 50 Seconds";
    this.i = 506;
    this.a1Text[this.i] = "Level 10";
    this.a2Text[this.i] = 270;
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 55000;
    this.a4Text[this.i] = "Collect 270 Red Nekon Orbs in 50 Seconds";
    this.i = 507;
    this.a1Text[this.i] = "Level 15";
    this.a2Text[this.i] = 290;
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 100000;
    this.a4Text[this.i] = "Collect 290 Green Nekon Orbs in 50 Seconds";
    this.i = 508;
    this.a1Text[this.i] = "Level 20";
    this.a2Text[this.i] = 310;
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 290000;
    this.a4Text[this.i] = "Collect 310 Black Nekon Orbs in 50 Seconds";
    this.i = 509;
    this.a1Text[this.i] = "Level 5";
    this.a2Text[this.i] = 500;
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 300000;
    this.a4Text[this.i] = "Collect 500 Nekon Orbs in 60 Seconds";
    this.i = 510;
    this.a1Text[this.i] = "Level 10";
    this.a2Text[this.i] = 540;
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 720000;
    this.a4Text[this.i] = "Collect 540 Red Nekon Orbs in 60 Seconds";
    this.i = 511;
    this.a1Text[this.i] = "Level 15";
    this.a2Text[this.i] = 580;
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 1200000;
    this.a4Text[this.i] = "Collect 580 Green Nekon Orbs in 60 Seconds";
    this.i = 512;
    this.a1Text[this.i] = "Level 20";
    this.a2Text[this.i] = 620;
    this.colorValue[this.i] = new Color();
    this.colorValue[this.i].setTint(16737792, 1);
    this.goldValue[this.i] = 2500000;
    this.a4Text[this.i] = "Collect 620 Black Nekon Orbs in 60 Seconds";
    this.colorValue[500] = new Color();
    this.colorValue[500].setTint(6796286, 1);
    this.colorValue[400] = new Color();
    this.colorValue[400].setTint(5329233, 1);
    this.okaypress = false;
    this.smallship = false;
    this.timemax = 0;
    this.timethird = 1;
    this.medalname = "";
    this.noteArray = new Vector.<String>(20);
    this.noteArray[1] = "...The council can never save the Enigmata from the corruption within...";
    this.noteArray[2] = "...The remnants of this unstoppable army lie within my fingertips...";
    this.noteArray[3] = "...Something needs to be done to ensure the galaxy doesn\'t fall into chaos...";
    this.noteArray[4] = "...Only his name would be strong enough to send a message...";
    this.noteArray[5] = "...The remaining followers gathered in large numbers, this will be easy...";
    this.noteArray[6] = "...Nothing can stop the revolution now, the Enigmata will be saved...";
    this.noteArray[7] = "...The mega-ship is near completion, it shall be the ultimate guardian...";
    this.noteArray[8] = "...It is only a matter of time until the entire galaxy is controlled...";
    this.noteArray[9] = "...Why do they oppose us? Our methods may be different... but there is...";
    this.noteArray[10] = "...Now that we have secured the central energy system, the council has no choice...";
    this.noteArray[11] = "...This cannot be possible, the Enigmata isn\'t a cognitive entity... It...";
    this.noteArray[12] = "...It is undeniable that Clade and Demenus were invaluable to the revolution...";
    this.noteArray[13] = "...The original was such a pity, we have surpassed his power ten fold...";
    this.noteArray[14] = "...They can never know it was me, it would only weaken our cause...";
    this.noteArray[15] = "...Our trail is completely untraceable, they will never learn of the truth...";
    this.noteArray[16] = "...They have wondered beyond the border of uncertainty, they must be stopped...";
    this.noteArray[17] = "...The Ultimate Weapon is all we need, time is the only thing holding us back...";
    this.noteArray[18] = "...It is complete, the Entity will complete my tasks regardless of what happens...";
    this.noteArray[19] = "...The greatest of all Mega-Crafts will be mine, there shall be no doubt...";
    this.noteArray[20] = "...There is only one thing that remains to be accomplished...";
    this.avatar.gotoAndStop(1);
    this.missiontimer = 0;
    this.missiontimer2 = 0;
    this.missiontimer3 = 0;
    this.mission.gotoAndStop(1);
    this.missiontext = new Array();
    this.i = 401;
    this.a5Text[this.i] = "These Desions have been rampaging the nearby colonies, the Council will reward you if you destroy them.";
    this.a1Text[this.i] = "Desion Attack";
    this.a2Text[this.i] = "Destroy 15 Desions";
    this.goldValue[this.i] = 40000;
    this.a4Text[this.i] = 1;
    this.killVal[this.i] = 4;
    this.killTotal[this.i] = 15;
    this.i = 402;
    this.a5Text[this.i] = "Elkon Transport ships have been sighted in nearby sectors, they\'re said to be smuggling in weapons for Genu.";
    this.a1Text[this.i] = "Deadly Smugglers";
    this.a2Text[this.i] = "Destroy 7 Elkon Transports";
    this.goldValue[this.i] = 65000;
    this.a4Text[this.i] = 1;
    this.killVal[this.i] = 6;
    this.killTotal[this.i] = 7;
    this.i = 403;
    this.a5Text[this.i] = "Several Cyanobombers have bombed the nearby colonies, you need to kill them before they get near civilians.";
    this.a1Text[this.i] = "Explosive Task";
    this.a2Text[this.i] = "Destroy 25 Cyanobombers";
    this.goldValue[this.i] = 120000;
    this.a4Text[this.i] = 2;
    this.killVal[this.i] = 8;
    this.killTotal[this.i] = 25;
    this.i = 404;
    this.a1Text[this.i] = "Teramid Reprise";
    this.a5Text[this.i] = "After the destruction of the massive Teramid Station, sections of it broke off and survived, thirsting for revenge.";
    this.a2Text[this.i] = "Destroy 5 Teramid Fragments";
    this.goldValue[this.i] = 200000;
    this.a4Text[this.i] = 2;
    this.killVal[this.i] = 88;
    this.killTotal[this.i] = 5;
    this.i = 405;
    this.a5Text[this.i] = "Crafts from the Denton sector have developed shield technologies, use your shield destroyer skill against them.";
    this.a1Text[this.i] = "Denton Shielders";
    this.a2Text[this.i] = "Destroy 25 Denton Shielders";
    this.goldValue[this.i] = 240000;
    this.a4Text[this.i] = 1;
    this.killVal[this.i] = 11;
    this.killTotal[this.i] = 25;
    this.i = 406;
    this.a1Text[this.i] = "Nerozon Force";
    this.a5Text[this.i] = "The ruthless Nerozon invaders have teamed up with Genu, if you see one you must destroy it.";
    this.a2Text[this.i] = "Destroy a Nerozon";
    this.goldValue[this.i] = 350000;
    this.a4Text[this.i] = 2;
    this.killVal[this.i] = 85;
    this.killTotal[this.i] = 1;
    this.i = 407;
    this.a1Text[this.i] = "Elzon Beams";
    this.a5Text[this.i] = "The beams of the Elzon ships have been modified to slow your ship in time, be cautious when fighting them. ";
    this.a2Text[this.i] = "Destroy 100 Elzon Ships";
    this.goldValue[this.i] = 500000;
    this.a4Text[this.i] = 3;
    this.killVal[this.i] = 14;
    this.killTotal[this.i] = 100;
    this.i = 408;
    this.a1Text[this.i] = "Zenaka Threat";
    this.a5Text[this.i] = "These powerful Zenaka ships use deadly electron rays, be careful when dealing with these ships.";
    this.a2Text[this.i] = "Destroy 35 Zenekas";
    this.goldValue[this.i] = 350000;
    this.a4Text[this.i] = 1;
    this.killVal[this.i] = 15;
    this.killTotal[this.i] = 35;
    this.i = 409;
    this.a1Text[this.i] = "Aion Defense";
    this.a5Text[this.i] = "After decades of research, Aions have developed rapid missile firing technology, they need to be stopped!";
    this.a2Text[this.i] = "Destroy 15 Aions";
    this.goldValue[this.i] = 650000;
    this.a4Text[this.i] = 2;
    this.killVal[this.i] = 72;
    this.killTotal[this.i] = 15;
    this.i = 410;
    this.a1Text[this.i] = "Megazon Invasion";
    this.a5Text[this.i] = "You have been asked to destroy the treacherous Megazons that have appeared under Genu\'s taskforce.";
    this.a2Text[this.i] = "Destroy 6 Megazons";
    this.goldValue[this.i] = 1500000;
    this.a4Text[this.i] = 3;
    this.killVal[this.i] = 70;
    this.killTotal[this.i] = 6;
    this.i = 411;
    this.a1Text[this.i] = "Pylon Embargo";
    this.a5Text[this.i] = "Genu has hired even more powerful transport ships for his strongest weapons, you must stop them!";
    this.a2Text[this.i] = "Destroy 45 Pylon Transports";
    this.goldValue[this.i] = 1000000;
    this.a4Text[this.i] = 2;
    this.killVal[this.i] = 19;
    this.killTotal[this.i] = 45;
    this.i = 412;
    this.a1Text[this.i] = "Genu Drones";
    this.a5Text[this.i] = "These small ships are extremely effective at bringing down the council\'s defensive crafts, take care of them.";
    this.a2Text[this.i] = "Destroy 150 Genu Drones";
    this.goldValue[this.i] = 3000000;
    this.a4Text[this.i] = 2;
    this.killVal[this.i] = 24;
    this.killTotal[this.i] = 150;
    this.i = 413;
    this.a1Text[this.i] = "Energy Crystals";
    this.a5Text[this.i] = "Recently Genu has lost a supply of Energy Crystals, which power his weapons, you need to get them first.";
    this.a2Text[this.i] = "Collect 25 Energy Crystals";
    this.goldValue[this.i] = 2500000;
    this.a4Text[this.i] = 3;
    this.killVal[this.i] = 53;
    this.killTotal[this.i] = 25;
    this.i = 414;
    this.a1Text[this.i] = "Arton Demi-crafts";
    this.a5Text[this.i] = "The frontline soldier for Genu\'s army are these Arton Demi-crafts, take down as many as you can!";
    this.a2Text[this.i] = "Destroy 75 Arton Demi-crafts";
    this.goldValue[this.i] = 4000000;
    this.a4Text[this.i] = 3;
    this.killVal[this.i] = 28;
    this.killTotal[this.i] = 75;
    this.i = 415;
    this.a1Text[this.i] = "Final Guard";
    this.a5Text[this.i] = "This heavily armored ship guards Genu\'s bases, its is vital that you locate and destroy this semi-craft!";
    this.a2Text[this.i] = "Destroy a Final Guard";
    this.goldValue[this.i] = 5000000;
    this.a4Text[this.i] = 3;
    this.killVal[this.i] = 52;
    this.killTotal[this.i] = 1;
    this.skillsori = 0;
    this.backwardsString = "";
    this.numbersArray = new Array();
    this.cutnum = 0;
    this.tempSting = "";
    this.intuse = 0;
    this.intuse2 = 0;
    this.intuse3 = 0;
    this.currentshop = 1;
    this.shopnum = 1;
    this.havesaved = false;
    this.namenow = "";
    this.testnum = 0;
    stage.addEventListener(KeyboardEvent.KEY_DOWN, this.reportKeyDown2);
    this.keyint = 0;
    this.keycount = 0;
    this.keyuse = 0;
    this.KeyName = ["Alternate", "Backquote", "Backslash", "Backspace", "Caps Lock", "Comma", "Command", "Control", "Delete", "Down", "End", "Enter", "Equal", "Escape", "F1", "F10", "F11", "F12", "F13", "F14", "F15", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "Home", "Insert", "Left", "Left Bracket", "Minus", "Add", "Decimal", "Divide", "Enter", "Multiply", "Subtract", "Page Down", "Page Up", "Period", "Quote", "Right", "Right Bracket", "Semicolon", "Shift", "Slash", "Space", "Tab", "Up"];
    this.KeyCheck = [18, 192, 220, 8, 20, 188, 15, 17, 46, 40, 35, 13, 187, 27, 112, 121, 122, 123, 124, 125, 126, 113, 114, 115, 116, 117, 118, 119, 120, 36, 45, 37, 219, 189, 107, 110, 111, 108, 106, 109, 34, 33, 190, 222, 39, 221, 186, 16, 191, 32, 9, 38];
    this.customkeys = new Vector.<int>(12);
    this.i = 12 + 1;
    do
    {

        this.customkeys[this.i] = 0;
        var _loc_1:String = this;
        _loc_1.i = this.i - 1;
    }while (--this.i > 0)
    this.whitescreen.gotoAndStop(2);
    this.flashscreen.gotoAndStop(2);
    this.diff = 1;
    this.mousecontrol = false;
    this.image1 = new Bitmap(new BitmapData(250, 200), PixelSnapping.ALWAYS, true);
    this.image2 = new Bitmap(new BitmapData(250, 200), PixelSnapping.ALWAYS, true);
    this.image3 = new Bitmap(new BitmapData(250, 200), PixelSnapping.ALWAYS, true);
    this.image1.width = this.image1.width / 2;
    this.image1.height = this.image1.height / 2;
    this.image2.width = this.image2.width / 2;
    this.image2.height = this.image2.height / 2;
    this.image3.width = this.image3.width / 2;
    this.image3.height = this.image3.height / 2;
    this.cropArea = new Rectangle(0, 0, 250, 200);
    this.imagelevel = 0;
    this.imagesel = 1;
    this.kongloadscreen.gotoAndStop(2);
    if (this.textuseK !== "")
    {
        this.kongloadscreen.gotoAndStop(1);
        this.kongloadscreen.ax.addEventListener(MouseEvent.CLICK, this.opengame);
        this.kongloadscreen.ax2.addEventListener(MouseEvent.CLICK, this.closegame);
        this.splitvar2 = this.textuseK.split("?");
        if (this.splitvar2[205] !== this.username)
        {
            this.kongloadscreen.ax3.text = this.splitvar2[205] + "\'s";
        }
        else
        {
            this.kongloadscreen.ax3.text = "Your";
        }
    }
    this.savetype = 1;
    this.username2 = "";
    this.notyours = false;
    this.shoptimer = 0;
    this.shipCost[1] = 25000;
    this.shipCost[2] = 25000;
    this.shipCost[3] = 26000;
    this.shipCost[4] = 350000;
    this.shipCost[5] = 340000;
    this.shipCost[6] = 340000;
    this.shipCost[7] = 1550000;
    this.shipCost[8] = 1550000;
    this.shipCost[9] = 1650000;
    this.shipCost[10] = 5500000;
    this.shipCost[11] = 5500000;
    this.shipCost[12] = 5500000;
    this.shopscreen.gotoAndStop(2);
    this.bars.bhp.visible = false;
    this.bars.na.visible = false;
    this.bars.ny.visible = false;
    this.myTimer = new Timer(20833, 1);
    this.qtimer = 0;
    this.myTimer.start();
    this.myTimer.addEventListener(TimerEvent.TIMER_COMPLETE, this.timedFunction);
    this.soundtimer = 0;
    this.dontcallstart = true;
    stage.addEventListener(Event.ENTER_FRAME, this.EnterFrame);
    this.resettint = 1;
    this.ecrashcounter = 0;
    this.risktaker = 0;
    this.sbox = false;
    this.newones = 1;
    this.helpernow = 0;
    this.redmadness = 0;
    this.missilespeedx = 0;
    this.gunadd = false;
    this.rots = 0;
    this.rotc = 0;
    this.rotg = 0;
    this.firemulti = 0;
    this.rotrand = 0;
    this.rotrand2 = 0;
    this.speedrand = 0;
    this.rotset = 0;
    this.speedset = 0;
    this.hitchance = 0;
    this.roto = 0;
    this.gotox2 = 0;
    this.useonce2 = false;
    this.weapontype2 = 0;
    this.weapondamage2 = 0;
    this.srot = 0;
    this.spush = 0;
    this.firenum = 0;
    this.placerand = 0;
    this.soundonce = true;
    this.rotlock = false;
    this.missilerand = 0;
    this.itemmulti = 0;
    this.bonussoundonce = true;
    this.toRads = Math.PI / 180;
    this.PI = Math.PI;
    this.okchange = false;
    this.testvari = true;
    this.skilllength = 125;
    return;
}// end function

public function newgamef(event:MouseEvent = null) : void
{
this.stopMusic();
this.currentMusic = this.music1;
this.soundPosition = 0;
this.playMusic();
this.removestarttimer = 25;
this.freshgame = 1;
this.startscreen.ng.removeEventListener(MouseEvent.MOUSE_UP, this.newgamef);
this.startscreen.lg.removeEventListener(MouseEvent.MOUSE_UP, this.loadgamef);
this.startscreen.op.removeEventListener(MouseEvent.MOUSE_UP, this.optionshow);
this.startscreen.ab.removeEventListener(MouseEvent.MOUSE_UP, this.aboutshow);
this.startscreen.kg.removeEventListener(MouseEvent.MOUSE_UP, this.gotoKong);
this.startscreen.ekbut.removeEventListener(MouseEvent.MOUSE_UP, this.gotoKongVer);
this.startscreen.play();
return;
}// end function

public function choosef(event:MouseEvent) : void
{
this.i = 12 + 1;
do
{

    this.shipown[this.i] = 1;
    var _loc_2:String = this;
    _loc_2.i = this.i - 1;
}while (--this.i > 0)
this.i = 6 + 1;
do
{

    this.shipown[this.i] = 2;
    var _loc_2:String = this;
    _loc_2.i = this.i - 1;
}while (--this.i > 0)
this.i = 21 + 1;
do
{

    this.itemx[this.i + 100] = 1;
    var _loc_2:String = this;
    _loc_2.i = this.i - 1;
}while (--this.i > 0)
if (event.target.name == "a1")
{
    this.shipselect = 1;
    this.skillsArray = [0, 5, 3, 30, 40, 0, 0, 0, 0, 0, 0];
    this.itemx[104] = 3;
    this.itemx[102] = 3;
    this.shipown[1] = 3;
}
else if (event.target.name == "a2")
{
    this.shipselect = 2;
    this.skillsArray = [0, 2, 5, 30, 40, 0, 0, 0, 0, 0, 0];
    this.itemx[101] = 3;
    this.itemx[104] = 3;
    this.shipown[2] = 3;
}
else if (event.target.name == "a3")
{
    this.shipselect = 3;
    this.skillsArray = [0, 4, 6, 30, 40, 0, 0, 0, 0, 0, 0];
    this.itemx[103] = 3;
    this.itemx[105] = 3;
    this.shipown[3] = 3;
}
this.slowdown = 0;
this.achpoints = 0;
this.shipbuynum = 0;
this.tutlevel = 0;
this.shipx = 350;
this.shipy = 350;
this.ship.x = 350;
this.ship.y = 350;
this.chooseship.a1.removeEventListener(MouseEvent.MOUSE_UP, this.choosef);
this.chooseship.a2.removeEventListener(MouseEvent.MOUSE_UP, this.choosef);
this.chooseship.a3.removeEventListener(MouseEvent.MOUSE_UP, this.choosef);
this.chooseship.gotoAndStop(2);
this.pausegame = false;
Mouse.hide();
this.lockpause = false;
this.once = true;
this.stopenemies = false;
this.shoponce = true;
this.notyours = false;
this.sdestroyer = 0;
this.misslefirec = 0;
this.bcollect = 0;
this.ekill = 0;
this.bkill = 0;
this.acctotal = 1;
this.BOSSFIND = 0;
this.cheater = 1;
this.maxlevel = 1;
this.acchit = 1;
this.bonustimer = 0;
this.weaponmode = 1;
this.missionshow = -1;
this.noteshow = -1;
this.avatarshow = -1;
this.missionnow = 1;
this.avatarnow = 1;
this.negtimer = 0;
this.excelcounter = 0;
this.amazingcounter = 0;
this.achpointstotal = 0;
this.perfectcounter = 0;
this.totaldamage = 0;
this.leveltimec = 0;
this.equipnum = 0;
this.shopgraf = 1;
this.levelx = 1;
this.gold = 0;
this.score = 77;
this.savehp = 1;
this.saveshp = 1;
this.saveep = 1;
this.leveltimer = this.levellength;
this.i = 45 + 1;
do
{

    this.itemx[this.i] = 1;
    var _loc_2:String = this;
    _loc_2.i = this.i - 1;
}while (--this.i > 0)
this.i = 21 + 1;
do
{

    this.itemx[this.i + 200] = 1;
    var _loc_2:String = this;
    _loc_2.i = this.i - 1;
}while (--this.i > 0)
this.i = 45 + 1;
do
{

    this.itemx[this.i + 300] = 1;
    var _loc_2:String = this;
    _loc_2.i = this.i - 1;
}while (--this.i > 0)
this.i = 15 + 1;
do
{

    this.itemx[this.i + 400] = 1;
    var _loc_2:String = this;
    _loc_2.i = this.i - 1;
}while (--this.i > 0)
this.i = 12 + 1;
do
{

    this.itemx[this.i + 500] = 1;
    var _loc_2:String = this;
    _loc_2.i = this.i - 1;
}while (--this.i > 0)
this.i = 20 + 1;
do
{

    this.missleTracker[this.i + 19] = 0;
    var _loc_2:String = this;
    _loc_2.i = this.i - 1;
}while (--this.i > 0)
this.itemx[16] = -1;
this.itemx[31] = -1;
this.itemx[44] = -1;
this.itemx[108] = -1;
this.itemx[115] = -1;
this.itemx[204] = -1;
this.itemx[207] = -1;
this.missleAmmo[20] = 200;
this.missleAmmo[21] = 0;
this.missleAmmo[22] = 0;
this.missleAmmo[23] = 0;
this.missleAmmo[24] = 0;
this.missleAmmo[25] = 0;
this.missleAmmo[26] = 0;
this.missleAmmo[27] = 0;
this.missleAmmo[28] = 0;
this.missleAmmo[29] = 0;
this.missleAmmo[30] = 5;
this.missleAmmo[31] = 0;
this.missleAmmo[32] = 0;
this.missleAmmo[33] = 5;
this.missleAmmo[34] = 0;
this.missleAmmo[35] = 0;
this.missleAmmo[36] = 0;
this.missleAmmo[37] = 0;
this.missleAmmo[38] = 0;
this.missleAmmo[39] = 0;
this.missleson = false;
this.missletracker = 0;
this.dispship = this.shipselect;
this.nnum[0] = 0;
this.nnum[15] = 0;
this.nnum[30] = 0;
this.imagelevel = 0;
this.i = 10;
do
{

    this.skills["a" + this.i].transform.colorTransform = new ColorTransform();
    var _loc_2:String = this;
    _loc_2.i = this.i - 1;
}while (--this.i > 0)
this.shipchange();
this.skillkill();
return;
}// end function

public function kongsave(event:MouseEvent) : void
{
if (this.maxlevel <= 3)
{
    this.tutshow(2, "Shopbot", "You must get past level 3 in order to save to Kongregate.");
}
else if (this.notyours)
{
    if (this.username2 == "Text Save")
    {
        this.tutshow(2, "Shopbot", "You cannot save a Text Save to Kongregate. Beep.");
    }
    else
    {
        this.tutshow(2, "Shopbot", "This is not your game, you cannot save this. Beep.");
    }
}
else
{
    this.havesaved = true;
    this.savescreen[("a" + 1)].ax.ax.gotoAndStop(this.shipselect);
    this.stringuse = this.saveloadb();
    if (this.imagesel !== 0)
    {
        this.kongregate.sharedContent.save("SaveGame", this.stringuse, this.onSaved, this.savescreen.kongsave["a" + this.imagesel].ax);
    }
    else
    {
        this.kongregate.sharedContent.save("SaveGame", this.stringuse, this.onSaved, this.savescreen[("a" + 1)].ax.ax);
    }
}
return;
}// end function

public function highgold() : int
{
    return this.round((4500 + 300 * this.levelx * Math.sqrt(this.levelx)) / 100) * 100 * this.replayx;
}// end function

public function opengame(event:MouseEvent) : void
{
this.savescreen.gotoAndStop(1);
this.savelisten();
this.BOSSFIND = 6;
this.textnow = 0;
this.textload();
this.textuseK = "";
this.kongloadscreen.ax.removeEventListener(MouseEvent.CLICK, this.opengame);
this.kongloadscreen.ax2.removeEventListener(MouseEvent.CLICK, this.closegame);
this.kongloadscreen.gotoAndStop(2);
return;
}// end function

public function skillkill() : void
{
this.warpspeed = 0;
this.stealthmode = 0;
this.enemystop = 0;
this.healing = 0;
this.megablast = 0;
this.bonusmag = 0;
this.psionwave = 0;
this.stoptime = 0;
this.shieldc = 0;
this.oblivion = 0;
this.nburst = 0;
this.enemybstun = 0;
this.destroyshields = 0;
this.k = 10 + 1;
do
{

    if (this.skills["a" + this.k].ax5.currentFrame !== 1)
    {
        this.skills["a" + this.k].ax5.gotoAndStop(1);
    }
    var _loc_1:String = this;
    _loc_1.k = this.k - 1;
}while (--this.k > 0)
return;
}// end function

public function optionremove() : void
{
this.optionscreen.ck.exitb.removeEventListener(MouseEvent.MOUSE_UP, this.exitsave);
this.optionscreen.sts.exitb.removeEventListener(MouseEvent.MOUSE_UP, this.exitsave);
this.i = 12 + 1;
do
{

    this.optionscreen.ck["a" + this.i].ax2.removeEventListener(MouseEvent.MOUSE_UP, this.keychoose);
    var _loc_1:String = this;
    _loc_1.i = this.i - 1;
}while (--this.i > 0)
stage.removeEventListener(MouseEvent.MOUSE_UP, this.killKey);
this.optionscreen.cont.ax.removeEventListener(MouseEvent.MOUSE_UP, this.opencont);
this.optionscreen.stats.ax.removeEventListener(MouseEvent.MOUSE_UP, this.openstats);
this.optionscreen.exitb.removeEventListener(MouseEvent.MOUSE_UP, this.exitsave);
this.optionscreen.g1.ax.removeEventListener(MouseEvent.MOUSE_UP, this.g1f);
this.optionscreen.g2.ax.removeEventListener(MouseEvent.MOUSE_UP, this.g2f);
this.optionscreen.g3.ax.removeEventListener(MouseEvent.MOUSE_UP, this.g3f);
this.optionscreen.b1.ax.removeEventListener(MouseEvent.MOUSE_UP, this.b1f);
this.optionscreen.b2.ax.removeEventListener(MouseEvent.MOUSE_UP, this.b2f);
this.optionscreen.c1.ax.removeEventListener(MouseEvent.MOUSE_UP, this.c1f);
this.optionscreen.c2.ax.removeEventListener(MouseEvent.MOUSE_UP, this.c2f);
this.optionscreen.d1.ax.removeEventListener(MouseEvent.MOUSE_UP, this.d1f);
this.optionscreen.d2.ax.removeEventListener(MouseEvent.MOUSE_UP, this.d2f);
this.optionscreen.e1.ax.removeEventListener(MouseEvent.MOUSE_UP, this.e1f);
this.optionscreen.e2.ax.removeEventListener(MouseEvent.MOUSE_UP, this.e2f);
this.optionscreen.m1.ax.removeEventListener(MouseEvent.MOUSE_UP, this.m1f);
this.optionscreen.m2.ax.removeEventListener(MouseEvent.MOUSE_UP, this.m2f);
return;
}// end function

public function skillfollow(event:MouseEvent) : void
{
this.soundf(this.snapsound);
this.splitvar = event.target.parent.name.split("a");
this.newint = this.splitvar[1];
if (this.idiff >= 100 && this.idiff < 200)
{
    this.skillfol = this.newint + this.idiff - 99;
}
else if (this.idiff >= 200 && this.idiff < 300)
{
    this.skillfol = this.newint + this.idiff - 201 + 30;
}
this.shopscreen.skillmask.visible = true;
return;
}// end function

public function gotoKongVer(event:MouseEvent) : void
{
this.targetURL = new URLRequest("http://www.kongregate.com/games/kidgamez/enigmata-2-genus-revenge/?gamereferral=enigmata2");
CustomMetrics.Log("KongClick");
navigateToURL(this.targetURL);
return;
}// end function

public function savefff() : void
{
if (this.savemode == 1)
{
    this.savesave();
}
else
{
    if (this.autosavenow !== 3)
    {
        this.shipselect = this.sharedObject.data["shipselect" + this.i];
        this.equipnum = this.sharedObject.data["equipnum" + this.i];
        this.equipmax = this.sharedObject.data["equipmax" + this.i];
        this.nnum[0] = this.sharedObject.data["num0" + this.i];
        this.nnum[15] = this.sharedObject.data["num15" + this.i];
        this.nnum[30] = this.sharedObject.data["num30" + this.i];
        this.savehp = this.sharedObject.data["savehp" + this.i];
        this.saveshp = this.sharedObject.data["saveshp" + this.i];
        this.saveep = this.sharedObject.data["saveep" + this.i];
        this.gold = this.sharedObject.data["gold" + this.i];
        this.levelx = this.sharedObject.data["level" + this.i];
        this.j = 45 + 1;
        do
        {

            this.itemx[this.j] = this.sharedObject.data["itemx" + this.j + "a" + this.i];
            var _loc_1:String = this;
            _loc_1.j = this.j - 1;
        }while (--this.j > 0)
        this.j = 18 + 1;
        do
        {

            this.itemx[this.j + 100] = this.sharedObject.data["itemx" + (this.j + 100) + "a" + this.i];
            var _loc_1:String = this;
            _loc_1.j = this.j - 1;
        }while (--this.j > 0)
        this.stringuse = this.sharedObject.data["itemx" + 118 + "a" + this.i].toString();
        this.splitvar2 = this.stringuse.split("?");
        this.j = 4 + 1;
        do
        {

            if (this.splitvar2[4 - this.j] == undefined)
            {
                this.itemx[117 + this.j] = 1;
            }
            else
            {
                this.itemx[117 + this.j] = this.splitvar2[4 - this.j];
            }
            var _loc_1:String = this;
            _loc_1.j = this.j - 1;
        }while (--this.j > 0)
        this.j = 9 + 1;
        do
        {

            this.itemx[this.j + 200] = this.sharedObject.data["itemx" + (this.j + 200) + "a" + this.i];
            var _loc_1:String = this;
            _loc_1.j = this.j - 1;
        }while (--this.j > 0)
        this.j = 45 + 1;
        do
        {

            this.itemx[this.j + 300] = this.sharedObject.data["itemx" + (this.j + 300) + "a" + this.i];
            var _loc_1:String = this;
            _loc_1.j = this.j - 1;
        }while (--this.j > 0)
        this.j = 15 + 1;
        do
        {

            this.itemx[this.j + 400] = this.sharedObject.data["itemx" + (this.j + 400) + "a" + this.i];
            var _loc_1:String = this;
            _loc_1.j = this.j - 1;
        }while (--this.j > 0)
        this.j = 12 + 1;
        do
        {

            this.itemx[this.j + 500] = this.sharedObject.data["itemx" + (this.j + 500) + "a" + this.i];
            var _loc_1:String = this;
            _loc_1.j = this.j - 1;
        }while (--this.j > 0)
        this.j = 12 + 1;
        do
        {

            this.shipown[this.j] = this.sharedObject.data["shipown" + this.j + "a" + this.i];
            var _loc_1:String = this;
            _loc_1.j = this.j - 1;
        }while (--this.j > 0)
        this.j = 10 + 1;
        do
        {

            this.skillsArray[this.j] = this.sharedObject.data["skillsArray" + this.j + "a" + this.i];
            var _loc_1:String = this;
            _loc_1.j = this.j - 1;
        }while (--this.j > 0)
        this.j = 20 + 1;
        do
        {

            this.missleAmmo[this.j + 19] = this.sharedObject.data["missleAmmo" + (this.j + 19) + "a" + this.i];
            var _loc_1:String = this;
            _loc_1.j = this.j - 1;
        }while (--this.j > 0)
        this.autosave = this.sharedObject.data["autosave" + this.i];
        this.misslefirec = this.sharedObject.data["misslefirec" + this.i];
        this.bcollect = this.sharedObject.data["bcollect" + this.i];
        this.shipbuynum = this.sharedObject.data["shipbuynum" + this.i];
        this.ekill = this.sharedObject.data["ekill" + this.i];
        this.score = this.sharedObject.data["score" + this.i];
        this.achpoints = this.sharedObject.data["achpoints" + this.i];
        this.bkill = this.sharedObject.data["bkill" + this.i];
        this.bonustimer = this.sharedObject.data["bonustimer" + this.i];
        this.weaponmode = this.sharedObject.data["weaponmode" + this.i];
        this.qualityx = this.sharedObject.data["qualityx" + this.i];
        this.cheater = this.sharedObject.data["cheater" + this.i];
        this.diff = this.sharedObject.data["diff" + this.i];
        this.notyours = this.sharedObject.data["notyours" + this.i];
        if (this.notyours)
        {
            this.username2 = "Text Save";
        }
        this.j = 12 + 1;
        do
        {

            this.customkeys[this.j] = this.sharedObject.data["customkeys" + this.j + "a" + this.i];
            var _loc_1:String = this;
            _loc_1.j = this.j - 1;
        }while (--this.j > 0)
    }
    else
    {
        this.j = 45 + 1;
        do
        {

            this.itemx[this.j] = this.textdec(0);
            var _loc_1:String = this;
            _loc_1.j = this.j - 1;
        }while (--this.j > 0)
        this.j = 18 + 1;
        do
        {

            this.itemx[this.j + 100] = this.textdec(45);
            var _loc_1:String = this;
            _loc_1.j = this.j - 1;
        }while (--this.j > 0)
        this.j = 9 + 1;
        do
        {

            this.itemx[this.j + 200] = this.textdec(63);
            var _loc_1:String = this;
            _loc_1.j = this.j - 1;
        }while (--this.j > 0)
        this.j = 30 + 1;
        do
        {

            this.itemx[this.j + 300] = this.textdec(72);
            var _loc_1:String = this;
            _loc_1.j = this.j - 1;
        }while (--this.j > 0)
        this.j = 12 + 1;
        do
        {

            this.shipown[this.j] = int(this.splitvar2[this.j + 102]);
            var _loc_1:String = this;
            _loc_1.j = this.j - 1;
        }while (--this.j > 0)
        this.j = 9 + 1;
        do
        {

            this.skillsArray[this.j] = int(this.splitvar2[this.j + 114]);
            var _loc_1:String = this;
            _loc_1.j = this.j - 1;
        }while (--this.j > 0)
        this.j = 10 + 1;
        do
        {

            this.missleAmmo[this.j + 19] = int(this.splitvar2[this.j + 123]);
            var _loc_1:String = this;
            _loc_1.j = this.j - 1;
        }while (--this.j > 0)
        this.shipselect = int(this.splitvar2[135]);
        this.equipnum = int(this.splitvar2[136]);
        this.equipmax = int(this.splitvar2[137]);
        this.nnum[0] = int(this.splitvar2[138]);
        this.nnum[15] = int(this.splitvar2[139]);
        this.nnum[30] = int(this.splitvar2[140]);
        this.savehp = Number(this.splitvar2[141]) / 100;
        this.saveshp = Number(this.splitvar2[142]) / 100;
        this.saveep = Number(this.splitvar2[143]) / 100;
        this.gold = int(this.splitvar2[144] * 4);
        this.levelx = int(this.splitvar2[145] * 2);
        this.misslefirec = int(this.splitvar2[146]);
        this.bcollect = int(this.splitvar2[147]);
        this.shipbuynum = int(this.splitvar2[148]);
        this.ekill = int(this.splitvar2[149]);
        this.score = int(this.splitvar2[151] * 4);
        this.achpoints = int(this.splitvar2[152]) / 7;
        this.achpointstotal = int(this.splitvar2[153]);
        this.bkill = int(this.splitvar2[156]);
        this.j = 15 + 1;
        do
        {

            this.itemx[this.j + 330] = this.textdec(156);
            var _loc_1:String = this;
            _loc_1.j = this.j - 1;
        }while (--this.j > 0)
        this.j = 15 + 1;
        do
        {

            this.itemx[this.j + 400] = this.textdec(171);
            var _loc_1:String = this;
            _loc_1.j = this.j - 1;
        }while (--this.j > 0)
        this.bonustimer = int(this.splitvar2[187]);
        this.weaponmode = int(this.splitvar2[188]);
        this.diff = int(this.splitvar2[191]);
        if (this.diff !== 1 || this.diff !== 2)
        {
            this.diff = 1;
        }
        this.autosave = 0;
        this.skillsArray[10] = int(this.splitvar2[192]);
        this.cheater = int(this.splitvar2[193]);
        this.j = 10 + 1;
        do
        {

            this.missleAmmo[this.j + 29] = int(this.splitvar2[this.j + 193]);
            var _loc_1:String = this;
            _loc_1.j = this.j - 1;
        }while (--this.j > 0)
        if (this.textnow == 1)
        {
            this.textnow = 0;
            this.notyours = true;
            this.username2 = "Text Save";
            this.tutshow(2, "Shopbot", "Text Save was loaded sucessfully.");
        }
        else if (this.splitvar2[205] !== this.username)
        {
            this.notyours = true;
            this.username2 = this.splitvar2[205];
            this.tutshow(2, "Shopbot", this.splitvar2[205] + "\'s save file was loaded sucessfully.");
        }
        else
        {
            this.notyours = false;
            this.tutshow(2, "Shopbot", "Your safe file was loaded sucessfully.");
        }
    }
    this.maxlevel = this.levelx;
    if (this.qualityx == 1)
    {
        stage.quality = "medium";
        stage.frameRate = 24;
    }
    else if (this.qualityx == 2)
    {
        stage.quality = "low";
        stage.frameRate = 24;
    }
    else
    {
        stage.quality = "low";
        stage.frameRate = 22;
    }
    this.tutoncex = false;
    this.tutoncex2 = false;
    this.shopscreen.gotoAndStop(1);
    this.autosavenow = 1;
    this.shopscreen.shopflash.play();
    this.savescreen.tl.visible = false;
    this.BOSSFIND = 6;
    this.shoponce = true;
    this.newgamexs = true;
    this.tutfirst = 2;
    this.tutfirst2 = 2;
    this.newgamenow();
    this.shipchange();
    this.lockpause = true;
    this.gameloaded = true;
    this.savetype = 1;
    this.imagelevel = 0;
    this.tutfirst2 = 2;
    if (this.freshgame == 2)
    {
        this.shipx = 350;
        this.chooseship.gotoAndStop(2);
        this.newgamef();
    }
    this.saveremove();
    this.savescreen.gotoAndStop(2);
}
return;
}// end function

public function goodbonus(param1:int) : Boolean
{
    if (param1 >= 9 && param1 <= 13 || param1 == 15 || param1 == 16 || param1 == 26 || param1 == 27 || param1 == 29)
    {
        return false;
    }
    return true;
}// end function

public function savelisten() : void
{
this.savescreen.exitb.addEventListener(MouseEvent.MOUSE_UP, this.exitsave);
this.savescreen.a1.saveb.addEventListener(MouseEvent.MOUSE_UP, this.saveff);
this.savescreen.a2.saveb.addEventListener(MouseEvent.MOUSE_UP, this.saveff);
this.savescreen.a3.saveb.addEventListener(MouseEvent.MOUSE_UP, this.saveff);
this.savescreen.a1.loadb.addEventListener(MouseEvent.MOUSE_UP, this.saveff);
this.savescreen.a2.loadb.addEventListener(MouseEvent.MOUSE_UP, this.saveff);
this.savescreen.a3.loadb.addEventListener(MouseEvent.MOUSE_UP, this.saveff);
this.savescreen.a1.asx.ax.addEventListener(MouseEvent.MOUSE_UP, this.autonum);
this.savescreen.a2.asx.ax.addEventListener(MouseEvent.MOUSE_UP, this.autonum);
this.savescreen.a3.asx.ax.addEventListener(MouseEvent.MOUSE_UP, this.autonum);
this.savescreen.sb1.addEventListener(MouseEvent.MOUSE_UP, this.saveshow);
this.savescreen.sb2.addEventListener(MouseEvent.MOUSE_UP, this.saveshow2);
this.savescreen.sloc1.ax2.addEventListener(MouseEvent.MOUSE_UP, this.compsave1);
this.savescreen.sloc2.ax2.addEventListener(MouseEvent.MOUSE_UP, this.compsave2);
this.savescreen.kongsave.ax.addEventListener(MouseEvent.MOUSE_UP, this.kongsave);
this.savescreen.kongload.ax.addEventListener(MouseEvent.MOUSE_UP, this.kongload);
this.savescreen.kongload.ax2.addEventListener(MouseEvent.MOUSE_UP, this.kongload2);
this.savescreen.opents.addEventListener(MouseEvent.MOUSE_UP, this.opents);
this.savescreen.opentl.addEventListener(MouseEvent.MOUSE_UP, this.textloadb);
this.savescreen.tl.ax2.addEventListener(MouseEvent.MOUSE_UP, this.textloadff);
this.savescreen.tl.exitb.addEventListener(MouseEvent.MOUSE_UP, this.exitsave);
this.savescreen.ts.exitb.addEventListener(MouseEvent.MOUSE_UP, this.exitsave);
this.savescreen.kongsave.a1.ax2.addEventListener(MouseEvent.MOUSE_UP, this.chooseimg);
this.savescreen.kongsave.a2.ax2.addEventListener(MouseEvent.MOUSE_UP, this.chooseimg);
this.savescreen.kongsave.a3.ax2.addEventListener(MouseEvent.MOUSE_UP, this.chooseimg);
return;
}// end function

public function optionupdate(param1:MovieClip) : void
{
this.alltint.setTint(9038078, 1);
param1.cont.ax2.visible = false;
param1.stats.ax2.visible = false;
param1.g1.ax2.visible = false;
param1.g2.ax2.visible = false;
param1.g3.ax2.visible = false;
param1.b1.ax2.visible = false;
param1.b2.ax2.visible = false;
param1.c1.ax2.visible = false;
param1.c2.ax2.visible = false;
param1.d1.ax2.visible = false;
param1.d2.ax2.visible = false;
param1.e1.ax2.visible = false;
param1.e2.ax2.visible = false;
param1.m1.ax2.visible = false;
param1.m2.ax2.visible = false;
param1.mc1.ax2.visible = false;
param1.mc2.ax2.visible = false;
if (this.qualityx == 1)
{
    param1.g1.ax2.visible = true;
}
else if (this.qualityx == 2)
{
    param1.g2.ax2.visible = true;
}
else if (this.qualityx == 3)
{
    param1.g3.ax2.visible = true;
}
if (this.whiteon)
{
    param1.b2.ax2.visible = true;
}
else
{
    param1.b1.ax2.visible = true;
}
if (this.delaytimerc == 1)
{
    param1.c1.ax2.visible = true;
}
else
{
    param1.c2.ax2.visible = true;
}
if (this.diff == 1)
{
    param1.d1.ax2.visible = true;
}
else
{
    param1.d2.ax2.visible = true;
}
if (this.soundon)
{
    param1.e1.ax2.visible = true;
}
else
{
    param1.e2.ax2.visible = true;
}
if (this.musicon)
{
    param1.m1.ax2.visible = true;
}
else
{
    param1.m2.ax2.visible = true;
}
if (this.mousecontrol)
{
    param1.mc1.ax2.visible = true;
}
else
{
    param1.mc2.ax2.visible = true;
}
return;
}// end function

public function onAvatarComplete(param1:Boolean)
{
    if (param1)
    {
        this.tutshow(2, "Shopbot", "Avatar transfer successful.");
    }
    else
    {
        this.tutshow(2, "Shopbot", "You did not accept the avatar. Beep.");
    }
    return;
}// end function

public function loadgamef(event:MouseEvent) : void
{
this.savescreen.gotoAndStop(1);
this.savescreen.opents.visible = false;
this.blurx(this.savescreen);
this.savelisten();
this.savescreen.s1.visible = false;
this.savescreen.s2.visible = true;
this.savemode = 2;
this.saveupdate(this.savescreen);
this.savescreen.sflash.play();
this.savescreen.sb1.visible = false;
if (this.removestarttimer == -3)
{
    this.removestarttimer = -2;
}
if (loaderInfo.url.indexOf("armorgames") !== -1)
{
    this.savescreen.konglogo.visible = false;
    this.savescreen.sloc2.visible = false;
}
Mouse.show();
return;
}// end function

public function missionaccept(event:MouseEvent) : void
{
this.soundf(this.msound);
this.itemx[this.missionselect] = 5;
this.refreshmission2();
this.acceptmission();
return;
}// end function

public function questin() : void
{
this.pausescreen.ax.ax.yesb.visible = true;
this.pausescreen.ax.ax.nob.visible = true;
return;
}// end function

public function EnterFrame(event:Event) : void
{
if (this.qtimer < 1000)
{
    (this.qtimer + 1);
}
if (this.soundtimer !== 0)
{
    this.soundtimer = 0;
}
if (this.bonussoundonce == false)
{
    this.bonussoundonce = true;
}
if (this.pausegame)
{
    if (this.musicon)
    {
        if (this.fademusic == 1)
        {
            this.fvol = 1;
            this.fademusic = 2;
        }
        if (this.fademusic == 2)
        {
            this.fvol = this.fvol - 0.03;
            if (this.fvol <= 0)
            {
                this.fvol = 0.01;
                this.fademusic = 3;
            }
            this.musicChannel.soundTransform = new SoundTransform(this.fvol);
        }
        if (this.fademusic == 3)
        {
            this.fvol = 0.01;
            this.stopMusic();
            this.soundPosition = 0;
            this.playMusic();
            this.musicChannel.soundTransform = new SoundTransform(this.fvol);
            this.fademusic = 4;
        }
        if (this.fademusic == 4)
        {
            this.fvol = this.fvol + 0.03;
            if (this.fvol >= 1)
            {
                this.fvol = 1;
                this.fademusic = 0;
            }
            this.musicChannel.soundTransform = new SoundTransform(this.fvol);
        }
    }
    else if (this.fademusic !== 0)
    {
        this.fademusic = 0;
    }
}
if (this.removestarttimer > 0)
{
    (this.removestarttimer - 1);
}
if (this.removestarttimer == 0)
{
    if (this.dontcallstart)
    {
        if (this.startscreen !== null)
        {
            this.removestart();
        }
        this.removestarttimer = -1;
    }
}
if (this.delaytimer >= 0)
{
    this.delaytimer = this.delaytimer - this.delaytimerc;
}
if (this.tutlevel == 0)
{
    this.tutlevel = 1;
    this.lockpause = false;
    this.tutshow(3, "Neko III", "Hey man, if you don\'t know what you\'re doing let me help you!");
    this.alltint.setTint(4240434, 1);
    this.pausescreen.ax2.ax.ax2.transform.colorTransform = this.alltint;
}
else if (this.tutlevel == 600)
{
    this.tutshow(2, "Neko III", "Oh okay, suit yourself. You better hurry up and retrieve those ion cores!");
    this.tutlevel = -3;
}
else if (this.tutlevel == -3)
{
    if (this.pausegame)
    {
        this.tutlevel = -2;
    }
}
else if (this.tutlevel == 2)
{
    this.leveltimer = 5000000;
    (this.tutlevel + 1);
    this.delaytimerc = 1;
    this.bars.tut.gotoAndStop(2);
}
else if (this.tutlevel == 3)
{
    if (this.pausegame)
    {
        (this.tutlevel + 1);
    }
}
else if (this.tutlevel == 4)
{
    this.tutshow(2, "Neko III", "Aim your weapon using the mouse, try hitting these targets, click to fire!");
    this.helpers = 98;
    this.helpernum = 100;
    this.helperdelay = 100;
    (this.tutlevel + 1);
    this.bars.tut.ax.text = "Use the mouse to aim your ship at these targets then click to fire.";
}
else if (this.tutlevel == 5)
{
    this.negmode = 2;
    this.negtimer = 2;
    if (this.ekill > 5)
    {
        (this.tutlevel + 1);
    }
}
else if (this.tutlevel == 6)
{
    this.tutshow(2, "Neko III", "Good job! You also can fly around using the W, S, A, and D keys.");
    (this.tutlevel + 1);
    this.helpers = 0;
    this.btimer = 0;
    this.stopenemies = true;
    this.bars.tut.ax.text = "Fly around using the W, S, A, D keys or even the arrow keys.";
}
else if (this.tutlevel == 7)
{
    if (this.pausegame)
    {
        (this.btimer + 1);
    }
    if (this.btimer > 225)
    {
        (this.tutlevel + 1);
    }
}
else if (this.tutlevel == 8)
{
    this.btimer = 0;
    this.tutshow(2, "Neko III", "Try collecting some bonuses, but watch out for X\'s, they cause negative effects.");
    this.helpers = 0;
    (this.tutlevel + 1);
    this.bars.tut.ax.text = "Collect some bonus items, but the \'X\'s cause negative effects.";
}
else if (this.tutlevel == 9)
{
    if (this.pausegame)
    {
        (this.btimer - 1);
        if (this.btimer < 0)
        {
            this.btimer = 35;
            this.bonuscreate(Math.random() * 600 + 50, 50, 1, 7);
        }
    }
    if (this.bcollect > 7)
    {
        (this.tutlevel + 1);
    }
}
else if (this.tutlevel == 10)
{
    this.btimer = 0;
    this.tutshow(2, "Neko III", "Looks like you\'re ready to use your ship\'s special skills!");
    (this.tutlevel + 1);
    this.bars.tut.ax.text = "";
}
else if (this.tutlevel == 11)
{
    if (this.pausegame)
    {
        (this.tutlevel + 1);
    }
}
else if (this.tutlevel == 12)
{
    if (this.skillsArray[1] == 2)
    {
        this.tutshow(2, "Neko III", "Press 1 to use Warpspeed, you can fly through space at extreme speeds!");
        (this.tutlevel + 1);
    }
    else if (this.skillsArray[1] == 5)
    {
        this.tutshow(2, "Neko III", "Press 1 to use Healing Technique, your ship will gradually repair itself.");
        (this.tutlevel + 1);
    }
    else if (this.skillsArray[1] == 4)
    {
        this.tutshow(2, "Neko III", "Press 1 to use Stun Enemies, all enemies you see will be unable to move.");
        (this.tutlevel + 1);
    }
}
else if (this.tutlevel == 13)
{
    if (this.pausegame)
    {
        (this.tutlevel + 1);
    }
}
else if (this.tutlevel == 14)
{
    if (this.skillsArray[2] == 3)
    {
        this.tutshow(2, "Neko III", "Press 2 to use Stealth Mode, become invulnerable to enemies and their weapons!");
        (this.tutlevel + 1);
    }
    else if (this.skillsArray[2] == 5)
    {
        this.tutshow(2, "Neko III", "Press 2 to use Healing Technique, your ship will gradually repair itself.");
        (this.tutlevel + 1);
    }
    else if (this.skillsArray[2] == 6)
    {
        this.tutshow(2, "Neko III", "Press 2 to use Mega Bomb, fire a powerful blast in all directions.");
        (this.tutlevel + 1);
    }
    this.bars.tut.ax.text = "Press the keys 1 and 2 to activate your ships special skills.";
}
else if (this.tutlevel == 15)
{
    if (this.pausegame)
    {
        (this.btimer + 1);
    }
    if (this.bpress > 1)
    {
        this.btimer = this.btimer + 2;
    }
    if (this.btimer > 250)
    {
        (this.tutlevel + 1);
    }
}
else if (this.tutlevel == 16)
{
    this.tutshow(2, "Neko III", "Ok, now try using your missiles, press 3 to activate them, then fire normally.");
    (this.tutlevel + 1);
    this.btimer = 0;
    this.bars.tut.ax.text = "Press the number 3 to activate your missiles, then click to fire.";
}
else if (this.tutlevel == 17)
{
    if (this.pausegame)
    {
        (this.btimer + 1);
    }
    if (this.misslefirec > 10 || this.btimer > 200)
    {
        this.tutlevel = 24;
    }
}
else if (this.tutlevel == 24)
{
    this.tutshow(2, "Neko III", "Lets try out an item now, press 4 to use your Micro Armor Pack, it will repair your armor.");
    (this.tutlevel + 1);
    this.btimer = 0;
    this.hp = 50;
    this.bars.tut.ax.text = "Press the number 4 to use a Micro Armor Pack.";
}
else if (this.tutlevel == 25)
{
    if (this.pausegame)
    {
        (this.btimer + 1);
    }
    if (this.hp > 70)
    {
        this.btimer = this.btimer + 2;
    }
    if (this.btimer > 200)
    {
        this.tutlevel = 26;
    }
}
else if (this.tutlevel == 26)
{
    this.tutshow(2, "Neko III", "You can\'t buy healing items in the shop, you need to collect them in space.");
    this.tutlevel = 18;
}
else if (this.tutlevel == 18)
{
    this.tutshow(2, "Neko III", "You can also control with the arrow keys and spacebar, but you\'ll only fire straight.");
    (this.tutlevel + 1);
    this.bars.tut.ax.text = "Classic controls: Arrow keys to move and fire with space bar.";
    this.btimer = 0;
}
else if (this.tutlevel == 19)
{
    if (this.pausegame)
    {
        if (this.lockon == false)
        {
            (this.btimer + 1);
        }
        (this.btimer + 1);
    }
    if (this.btimer > 500)
    {
        (this.tutlevel + 1);
    }
}
else if (this.tutlevel == 20)
{
    this.tutshow(2, "Neko III", "To switch back to normal controls fire with the mouse. Anyway, that\'s all for now.");
    (this.tutlevel + 1);
    this.bars.tut.gotoAndStop(1);
}
else if (this.tutlevel == 21)
{
    if (this.pausegame)
    {
        (this.tutlevel + 1);
    }
}
else if (this.tutlevel == 22)
{
    this.bars.tut.gotoAndStop(1);
    this.tutshow(2, "Neko III", "I need you to receive some ion cores from the Alaana Seven sector, good luck.");
    this.tutlevel = -3;
    this.helpers = 0;
    this.stopenemies = false;
    this.leveltimer = this.levellength;
}
if (this.tutlevel == -2)
{
    this.tutlevel = -1;
    this.tutshow(6, null, null);
}
if (this.BOSSFIND !== 6 && this.leveltimer > this.levellength - 20 && this.BOSSFIND !== 4)
{
    if (this.replayx == 2)
    {
        if (this.chatlevel == 10)
        {
            this.chatlevel = 15;
            if (this.levelx == 36)
            {
                this.tutshow(2, "Neko III", "This place is off the charts, there are mega-ships everywhere!");
            }
            else
            {
                this.numuse = Math.random();
                if (this.numuse < 0.2)
                {
                    this.tutshow(2, "Neko III", "Destroy as many enemies as you can, Genu\'s army must be destroyed.");
                }
                else if (this.numuse < 0.6)
                {
                    this.tutshow(2, "Shopbot", "You can press \'END\' to self destruct and load game back to the shop.");
                }
                else if (this.numuse < 0.8)
                {
                    this.tutshow(2, "Shopbot", "Set Chat Skip to Fast in options menu if you\'re tired of reading dialog.");
                }
                else
                {
                    this.tutshow(2, "Neko III", "Genu\'s army must be stopped, take down as many as you can!");
                }
            }
        }
    }
    else if (this.replayx == 1)
    {
        if (this.levelx == 2)
        {
            if (this.chatlevel == 10)
            {
                this.chatlevel = 9;
                this.tutshow(2, "Neko III", "Go to the edge of the Eledon sector and talk to General Chaos.");
            }
            else if (this.chatlevel == 9)
            {
                if (this.pausegame)
                {
                    this.chatlevel = 8;
                }
            }
            else if (this.chatlevel == 8)
            {
                this.chatlevel = 0;
                this.tutshow(2, "Neko III", "He has a large green ship, you can\'t miss him, he should know what\'s going on.");
            }
        }
        else if (this.levelx == 3)
        {
            if (this.chatlevel == 10)
            {
                this.chatlevel = 9;
                this.tutshow(2, "Neko III", "Adriana worked under the task force dismantling Genu\'s original arsenal.");
            }
            else if (this.chatlevel == 9)
            {
                if (this.pausegame)
                {
                    this.chatlevel = 8;
                }
            }
            else if (this.chatlevel == 8)
            {
                this.chatlevel = 0;
                this.tutshow(2, "Neko III", "She was recently kidnapped, the last place she was seen was in this sector.");
            }
        }
        else if (this.levelx == 4)
        {
            if (this.chatlevel == 10)
            {
                this.chatlevel = 9;
                this.tutshow(2, "Neko III", "This is where Adriana said she last saw Skymar, hopefully he\'s still around here.");
            }
            else if (this.chatlevel == 9)
            {
                if (this.pausegame)
                {
                    this.chatlevel = 8;
                }
            }
            else if (this.chatlevel == 8)
            {
                this.chatlevel = 0;
                this.tutshow(2, "Adriana", "He was working on a War Drone when it suddenly activated, he disappeared after that.");
            }
        }
        else if (this.levelx == 5)
        {
            if (this.chatlevel == 10)
            {
                this.chatlevel = 9;
                this.tutshow(2, "Neko III", "If we can find Genu, we\'ll have our answers.");
            }
            else if (this.chatlevel == 9)
            {
                if (this.pausegame)
                {
                    this.chatlevel = 8;
                }
            }
            else if (this.chatlevel == 8)
            {
                this.chatlevel = 0;
                this.tutshow(2, "Adriana", "Reports came in that Genu is gathering an Army in this sector.");
            }
        }
        else if (this.levelx == 6)
        {
            if (this.chatlevel == 10)
            {
                this.chatlevel = 9;
                this.tutshow(2, "Neko III", "We need to get to Genu\'s main forces, the entrance to the sector is here.");
            }
            else if (this.chatlevel == 9)
            {
                if (this.pausegame)
                {
                    this.chatlevel = 8;
                }
            }
            else if (this.chatlevel == 8)
            {
                this.chatlevel = 0;
                this.tutshow(2, "Neko III", "If history repeats itself, he will be keeping his most powerful allies nearby.");
            }
        }
        else if (this.levelx == 7)
        {
            if (this.chatlevel == 10)
            {
                this.chatlevel = 9;
                this.tutshow(2, "Adriana", "This place looks familiar, I think Skymar took me here a long time ago.");
            }
            else if (this.chatlevel == 9)
            {
                if (this.pausegame)
                {
                    this.chatlevel = 8;
                }
            }
            else if (this.chatlevel == 8)
            {
                this.chatlevel = 7;
                this.tutshow(2, "Neko III", "This sector was destroyed by Genu, there\'s nothing but mercenaries left.");
            }
            else if (this.chatlevel == 7)
            {
                if (this.pausegame)
                {
                    this.chatlevel = 6;
                }
            }
            else if (this.chatlevel == 6)
            {
                this.chatlevel = 0;
                this.tutshow(2, "Neko III", "The flames of destruction are still ablaze, the source should be nearby.");
            }
        }
        else if (this.levelx == 8)
        {
            if (this.chatlevel == 10)
            {
                this.chatlevel = 9;
                this.tutshow(2, "Adriana", "It\'s been reported Genu\'s old ship was stolen from the containment center.");
            }
            else if (this.chatlevel == 9)
            {
                if (this.pausegame)
                {
                    this.chatlevel = 8;
                }
            }
            else if (this.chatlevel == 8)
            {
                this.chatlevel = 0;
                this.tutshow(2, "Neko III", "I wonder why anyone would want that piece of junk.");
            }
        }
        else if (this.levelx == 9)
        {
            if (this.chatlevel == 10)
            {
                this.chatlevel = 9;
                this.tutshow(2, "Adriana", "So who is that Mission Commander guy?");
            }
            else if (this.chatlevel == 9)
            {
                if (this.pausegame)
                {
                    this.chatlevel = 8;
                }
            }
            else if (this.chatlevel == 8)
            {
                this.chatlevel = 0;
                this.tutshow(2, "Neko III", "People come to him with missions, he\'s basically a middleman.");
            }
        }
        else if (this.levelx == 10)
        {
            if (this.chatlevel == 10)
            {
                this.chatlevel = 9;
                this.tutshow(2, "Adriana", "There are a lot of construction droids in this area...");
            }
            else if (this.chatlevel == 9)
            {
                if (this.pausegame)
                {
                    this.chatlevel = 8;
                }
            }
            else if (this.chatlevel == 8)
            {
                this.chatlevel = 0;
                this.tutshow(2, "Neko III", "They\'re leaving -- Whatever they were building, its done.");
            }
        }
        else if (this.levelx == 11)
        {
            if (this.chatlevel == 10)
            {
                this.chatlevel = 9;
                this.tutshow(2, "Adriana", "If this is the same Genu, wouldn\'t he be like 100 years old by now?");
            }
            else if (this.chatlevel == 9)
            {
                if (this.pausegame)
                {
                    this.chatlevel = 8;
                }
            }
            else if (this.chatlevel == 8)
            {
                this.chatlevel = 0;
                this.tutshow(2, "Neko III", "Hmm, he might be using some kind of proxy this time.");
            }
        }
        else if (this.levelx == 12)
        {
            if (this.chatlevel == 10)
            {
                this.chatlevel = 9;
                this.tutshow(2, "Adriana", "The atmosphere here is so much different than back in the colonies.");
            }
            else if (this.chatlevel == 9)
            {
                if (this.pausegame)
                {
                    this.chatlevel = 8;
                }
            }
            else if (this.chatlevel == 8)
            {
                this.chatlevel = 0;
                this.tutshow(2, "Neko III", "Yeah, you can definitely tell Genu and his army have been through here.");
            }
        }
        else if (this.levelx == 13)
        {
            if (this.chatlevel == 10)
            {
                this.chatlevel = 9;
                this.tutshow(2, "Adriana", "Demenus and Clade are always sending their minions after us...");
            }
            else if (this.chatlevel == 9)
            {
                if (this.pausegame)
                {
                    this.chatlevel = 8;
                }
            }
            else if (this.chatlevel == 8)
            {
                this.chatlevel = 0;
                this.tutshow(2, "Adriana", "Why don\'t they just fight us themselves?... Cowards.");
            }
        }
        else if (this.levelx == 14)
        {
            if (this.chatlevel == 10)
            {
                this.chatlevel = 9;
                this.tutshow(2, "Adriana", "Looks like security is getting tighter around here.");
            }
            else if (this.chatlevel == 9)
            {
                if (this.pausegame)
                {
                    this.chatlevel = 8;
                }
            }
            else if (this.chatlevel == 8)
            {
                this.chatlevel = 0;
                this.tutshow(2, "Neko III", "Yeah, we\'re getting real close to Genu\'s main base...");
            }
        }
        else if (this.levelx == 15)
        {
            if (this.chatlevel == 10)
            {
                this.chatlevel = 9;
                this.tutshow(2, "Adriana", "Hey! I see Skymar\'s ship, he\'s being escorted by that orange ship.");
            }
            else if (this.chatlevel == 9)
            {
                if (this.pausegame)
                {
                    this.chatlevel = 8;
                }
            }
            else if (this.chatlevel == 8)
            {
                this.chatlevel = 0;
                this.tutshow(2, "Neko III", "Yeah I see it too, we need to catch up to him!");
            }
        }
        else if (this.levelx == 16)
        {
            if (this.chatlevel == 10)
            {
                this.chatlevel = 9;
                this.tutshow(2, "Adriana", "I think I\'m picking up Skymar\'s Signal again...");
            }
            else if (this.chatlevel == 9)
            {
                if (this.pausegame)
                {
                    this.chatlevel = 8;
                }
            }
            else if (this.chatlevel == 8)
            {
                this.chatlevel = 0;
                this.tutshow(2, "Neko III", "We\'re in the heart of Genu\'s base, only his most powerful minions remain.");
            }
        }
        else if (this.levelx == 17)
        {
            if (this.chatlevel == 10)
            {
                this.chatlevel = 9;
                this.tutshow(2, "Adriana", "I\'ve never seen ships like these before, Genu must have some good engineers.");
            }
            else if (this.chatlevel == 9)
            {
                if (this.pausegame)
                {
                    this.chatlevel = 8;
                }
            }
            else if (this.chatlevel == 8)
            {
                this.chatlevel = 7;
                this.tutshow(2, "Neko III", "Most of these ships were designed by the council in threat of an invasion.");
            }
            else if (this.chatlevel == 7)
            {
                if (this.pausegame)
                {
                    this.chatlevel = 6;
                }
            }
            else if (this.chatlevel == 6)
            {
                this.chatlevel = 0;
                this.tutshow(2, "Neko III", "I guess Genu got ahold of the plans before the council got a chance.");
            }
        }
        else if (this.levelx == 18)
        {
            if (this.chatlevel == 10)
            {
                this.chatlevel = 9;
                this.tutshow(2, "Adriana", "They should be running out of minions soon, I mean how many Mega-Ships they got?");
            }
            else if (this.chatlevel == 9)
            {
                if (this.pausegame)
                {
                    this.chatlevel = 8;
                }
            }
            else if (this.chatlevel == 8)
            {
                this.chatlevel = 7;
                this.tutshow(2, "Neko III", "That\'s true, I get the feeling they\'re getting impatient, we\'re getting closer.");
            }
            else if (this.chatlevel == 7)
            {
                if (this.pausegame)
                {
                    this.chatlevel = 6;
                }
            }
            else if (this.chatlevel == 6)
            {
                this.chatlevel = 0;
                this.tutshow(2, "Neko III", "They\'re probably going to be fighting us directly this time.");
            }
        }
        else if (this.levelx == 19)
        {
            if (this.chatlevel == 10)
            {
                this.chatlevel = 9;
                this.tutshow(2, "Neko III", "With Clade gone, they\'re army is falling apart.");
            }
            else if (this.chatlevel == 9)
            {
                if (this.pausegame)
                {
                    this.chatlevel = 8;
                }
            }
            else if (this.chatlevel == 8)
            {
                this.chatlevel = 7;
                this.tutshow(2, "Neko III", "The only thing left now is to finish off their leader...");
            }
            else if (this.chatlevel == 7)
            {
                if (this.pausegame)
                {
                    this.chatlevel = 6;
                }
            }
            else if (this.chatlevel == 6)
            {
                this.chatlevel = 0;
                this.tutshow(2, "Adriana", "Don\'t forget, we still have to find Skymar!");
            }
        }
        else if (this.levelx == 20)
        {
            if (this.chatlevel == 10)
            {
                this.chatlevel = 9;
                this.tutshow(2, "Neko III", "We\'re going after Genu this time, I hope you\'re ready for him.");
            }
            else if (this.chatlevel == 9)
            {
                if (this.pausegame)
                {
                    this.chatlevel = 8;
                }
            }
            else if (this.chatlevel == 8)
            {
                this.chatlevel = 7;
                this.tutshow(2, "Neko III", "The galaxy has been damaged enough from his reign, we need to act fast.");
            }
            else if (this.chatlevel == 7)
            {
                if (this.pausegame)
                {
                    this.chatlevel = 6;
                }
            }
            else if (this.chatlevel == 6)
            {
                this.chatlevel = 0;
                this.tutshow(2, "Adriana", "We can only begin to repair the damage once he has been defeated...");
            }
        }
    }
}
if (this.leveltimer < -100 && this.BOSSFIND !== 4 && this.BOSSFIND !== 6 && this.BOSSFIND !== 5 && this.hp > 0)
{
    if (this.replayx == 2)
    {
        if (this.chatlevel == 0)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Neko III", "Something\'s wrong, my shop\'s self-defense system is malfunctioning!");
        }
        else if (this.chatlevel == 1)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 2)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Neko III", "You\'re going to have to take it down...");
        }
    }
    else if (this.levelx == 1)
    {
        if (this.chatlevel == 0)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Neko III", "Something\'s wrong, the supply base is gone... There\'s something up ahead.");
        }
        else if (this.chatlevel == 1)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 2)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Neko III", "Its some kind of large battle ship, you\'re going to have to take it down!");
        }
    }
    else if (this.levelx == 2)
    {
        if (this.chatlevel == 0)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "General Chaos", "Genu is back and even more powerful, follow his lead and you will be safe.");
        }
        else if (this.chatlevel == 1)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 2)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Neko III", "Genu is back?! Looks like the general has been corrupted, take him down!");
        }
        else if (this.chatlevel == 3)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 4)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "General Chaos", "If you will not join the Supreme Lord, you will be destroyed!");
        }
    }
    else if (this.levelx == 3)
    {
        if (this.chatlevel == 0)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Adriana", "Help... me...");
        }
        else if (this.chatlevel == 1)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 2)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Neko III", "Adriana! The signal is weak, Orias is scrambling her location coordinates.");
        }
    }
    else if (this.levelx == 4)
    {
        if (this.chatlevel == 0)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Adriana", "There\'s the war drone that captured Skymar! He must be around here somewhere.");
        }
        else if (this.chatlevel == 1)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 2)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Neko III", "You need to defeat that war drone so we can look around for him.");
        }
    }
    else if (this.levelx == 5)
    {
        if (this.chatlevel == 0)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Neko III", "There\'s a powerful ship up ahead blocking our way.");
        }
        else if (this.chatlevel == 1)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 2)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Neko III", "You\'re going to need to take it down so we can get through.");
        }
    }
    else if (this.levelx == 6)
    {
        if (this.chatlevel == 0)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Demenus", "Who the hell are you?");
        }
        else if (this.chatlevel == 1)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 2)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Neko III", "Who are we? Its none of your business, we\'ll be on our way.");
        }
        else if (this.chatlevel == 3)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 4)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Demenus", "You fools! No one passes this point. You\'ll never make it past the barrier anyway.");
        }
        else if (this.chatlevel == 5)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 6)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Neko III", "Forget that wierdo, you need to destroy that barrier, it must have a weak point.");
        }
    }
    else if (this.levelx == 7)
    {
        if (this.chatlevel == 0)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Adriana", "There\'s something up ahead, its so bright...");
        }
        else if (this.chatlevel == 1)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 2)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Neko III", "Its a battleship, I\'ve never seen anything like it.");
        }
        else if (this.chatlevel == 3)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 4)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Demenus", "Hahaha, that is our master\'s latest creation, the Pyre Guard is unbeatable!");
        }
        else if (this.chatlevel == 5)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 6)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Neko III", "Heh, that\'s what you said about the barrier, and get out of our communication line!");
        }
    }
    else if (this.levelx == 8)
    {
        if (this.chatlevel == 0)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Clade", "Demenus, why are you following these inferiors around?");
        }
        else if (this.chatlevel == 1)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 2)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Demenus", "Get out of my airway, Clade. I want to see them destroyed by the Nekron.");
        }
        else if (this.chatlevel == 3)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 4)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Neko III", "We can hear you guys...");
        }
        else if (this.chatlevel == 5)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 6)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Neko III", "Just ignore those freaks, you can handle whatever they throw at you!");
        }
        else if (this.chatlevel == 7)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 8)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Adriana", "...Who was that guy?");
        }
    }
    else if (this.levelx == 9)
    {
        if (this.chatlevel == 0)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Clade", "This is how it\'s done, Demenus. I\'ve built an invulnerable demon craft!");
        }
        else if (this.chatlevel == 1)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 2)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Demenus", "Well that\'s why Supreme Lord Genu chose you as his chief engineer.");
        }
        else if (this.chatlevel == 3)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 4)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Clade", "Mwhahaha-- Here they come, go forth Undying Essence!");
        }
        else if (this.chatlevel == 5)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 6)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Neko III", "Watch out, that demon craft has Drain Shields!");
        }
        else if (this.chatlevel == 7)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 8)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Neko III", "Those green shields will absorb your damage and heal itself, avoid hitting them!");
        }
    }
    else if (this.levelx == 10)
    {
        if (this.chatlevel == 0)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Clade", "Looks like this is the end of the line for you scum.");
        }
        else if (this.chatlevel == 1)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 2)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Demenus", "The Mega-Goliath is finally complete huh?");
        }
        else if (this.chatlevel == 3)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 4)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Neko III", "...so that\'s what they were building...");
        }
        else if (this.chatlevel == 5)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 6)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Neko III", "It may be big, but it doesn\'t stand a chance against us.");
        }
        else if (this.chatlevel == 7)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 8)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Adriana", "Those turrets look weaker than the rest of the ship. Good luck!");
        }
    }
    else if (this.levelx == 11)
    {
        if (this.chatlevel == 0)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Clade", "Considious is a 1st rank officer, he\'ll care of them for good.");
        }
        else if (this.chatlevel == 1)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 2)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Clade", "Its a pity, I thought I was going to be able to try out my new ship on them...");
        }
        else if (this.chatlevel == 3)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 4)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Demenus", "Heh, there\'s no need wasting your effort on those guys...");
        }
        else if (this.chatlevel == 5)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 6)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Neko III", "Don\'t they realize we can hear them?... Anyway...");
        }
        else if (this.chatlevel == 7)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 8)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Neko III", "Considious may have been a 1st rank officer 50 years ago, his ships pretty old.");
        }
        else if (this.chatlevel == 9)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 10)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Neko III", "He shouldn\'t be a challenge now. You can take him!");
        }
    }
    else if (this.levelx == 12)
    {
        if (this.chatlevel == 0)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Neko III", "What in the world is that? I have never seen a ship like it before.");
        }
        else if (this.chatlevel == 1)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 2)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Adriana", "Doesn\'t look like something from Genu\'s army--");
        }
        else if (this.chatlevel == 3)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 4)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Demenus", "Heheh, that\'s a little experiment we were working on. We needed someone to test it.");
        }
        else if (this.chatlevel == 5)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 6)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Demenus", "The Encron Spawn is a ship fused with bio-matter... Its fairly unpredictable.");
        }
        else if (this.chatlevel == 7)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
    }
    else if (this.levelx == 13)
    {
        if (this.chatlevel == 0)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Neko III", "Watch out, the ship up ahead seems to be controlling a mine field.");
        }
        else if (this.chatlevel == 1)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 2)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Neko III", "Don\'t hit those mines! You might be able to blast \'em before they hit you.");
        }
        else if (this.chatlevel == 3)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 4)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Clade", "Oh, you got Detrementor mad -- That\'s not going to be good for you guys.");
        }
        else if (this.chatlevel == 5)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 6)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Demenus", "Ugh, I thought that guy was fired for blowing up too many of our ships.");
        }
        else if (this.chatlevel == 7)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
    }
    else if (this.levelx == 14)
    {
        if (this.chatlevel == 0)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Demenus", "What\'s with the three colored ships?");
        }
        else if (this.chatlevel == 1)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 2)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Clade", "You fool, that\'s the Elemental Trio, they\'re not to be taken lightly.");
        }
        else if (this.chatlevel == 3)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 4)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Clade", "I called them out to take care of the intruders.");
        }
        else if (this.chatlevel == 5)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 6)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Neko III", "Uhh.. I guess they\'re talking about us.");
        }
        else if (this.chatlevel == 7)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
    }
    else if (this.levelx == 15)
    {
        if (this.chatlevel == 0)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Adriana", "We\'re close, I think I\'m getting a signal from Skymar!... There we go.");
        }
        else if (this.chatlevel == 1)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 2)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Skymar", "Adriana! Neko! You made it all the way here? I can\'t talk for long...");
        }
        else if (this.chatlevel == 3)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 4)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Skymar", "You guys need to turn back, they have powerful ships keeping me hostage.");
        }
        else if (this.chatlevel == 5)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 6)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Neko III", "Not a problem man, we can take care of them. We\'ll free you from those bastards!");
        }
        else if (this.chatlevel == 7)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 8)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Adriana", "We lost the signal... Oh no! The ship guarding Skymar detected us!");
        }
        else if (this.chatlevel == 9)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 10)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Neko III", "That must be the \'powerful\' ship he was talking about. Doesn\'t look too tough...");
        }
    }
    else if (this.levelx == 16)
    {
        if (this.chatlevel == 0)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Adriana", "There he is, I\'ve locked onto his signal again!");
        }
        else if (this.chatlevel == 1)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 2)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Skymar", "---Turn back, you cannot handle their Mega-Crafts, don\'t worry about me!");
        }
        else if (this.chatlevel == 3)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 4)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Neko III", "There so called \'Mega-Crafts\' have no chance against us, we\'ll get you back.");
        }
        else if (this.chatlevel == 5)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 6)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Adriana", "I lost his signal...");
        }
        else if (this.chatlevel == 7)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 8)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Clade", "Oh please, No chance against you weaklings? You\'ve obviously never met Rex Clear.");
        }
        else if (this.chatlevel == 9)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 10)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Demenus", "Heheheh.. They are dead. Too bad I won\'t be able to have fun with them.");
        }
    }
    else if (this.levelx == 17)
    {
        if (this.chatlevel == 0)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Genu", "What is your intention in coming this deep into my territory?");
        }
        else if (this.chatlevel == 1)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 2)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Neko", "Genu! There is no way in hell we\'re letting you get away with this destruction!");
        }
        else if (this.chatlevel == 3)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 4)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Genu", "What a pity... It\'s too bad theres nothing you can do to stop me-- Clade! Demenus!");
        }
        else if (this.chatlevel == 5)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 6)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Clade", "You heard him, looks like we\'re sending out the big guns, Tetragon awaits!");
        }
        else if (this.chatlevel == 7)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 8)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Neko", "Hah, sending out your lackeys again? No sweat, we can take em.");
        }
        else if (this.chatlevel == 9)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 10)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Adriana", "We\'ll beat this guy like we did the last sixteen minions, you can do it!");
        }
    }
    else if (this.levelx == 18)
    {
        if (this.chatlevel == 0)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Clade", "You guys are back again?! Haven\'t you learned your lesson yet?");
        }
        else if (this.chatlevel == 1)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 2)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Clade", "That\'s it, Supreme Lord Genu doesn\'t have time to be dealing with you pests!");
        }
        else if (this.chatlevel == 3)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 4)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Clade", "Prepare to face the deadliest Mega-Craft in this universe\'s history!");
        }
        else if (this.chatlevel == 5)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 6)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Neko", "Finally you decide to come out and fight, it\'s about time.");
        }
        else if (this.chatlevel == 7)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 8)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Neko", "Don\'t worry, we\'ll make this quick, you won\'t know what hit you!");
        }
        else if (this.chatlevel == 9)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 10)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Adriana", "Go for it!");
        }
    }
    else if (this.levelx == 19)
    {
        if (this.chatlevel == 0)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Genu", "Hahaha, you guys think you\'re so strong just because you finished off Clade?");
        }
        else if (this.chatlevel == 1)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 2)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Genu", "Clade was a weakling, Demenus will finish you now.");
        }
        else if (this.chatlevel == 3)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 4)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Adriana", "Wait! What have you done with Skymar?!");
        }
        else if (this.chatlevel == 5)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 6)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Genu", "Hahaha, Skymar? That fool is long gone.. You won\'t have to worry about him anymore.");
        }
        else if (this.chatlevel == 7)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 8)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Adriana", "No! You monster! You will pay for this!");
        }
        else if (this.chatlevel == 9)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 10)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Demenus", "Oh I highly doubt that! Enough chit-chat, you die today!");
        }
    }
    else if (this.levelx == 20)
    {
        if (this.chatlevel == 0)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Genu", "So you think you can actualy defeat me? This will be entertaining.");
        }
        else if (this.chatlevel == 1)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 2)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Genu", "I am the most powerful being in the univerise, what chance do you think you have?");
        }
        else if (this.chatlevel == 3)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 4)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Neko III", "You will pay for all the lives you have taken from your greedy ambitions!");
        }
        else if (this.chatlevel == 5)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 6)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Neko III", "We destroyed all your allies, after you are gone the galaxy will return to peace.");
        }
        else if (this.chatlevel == 7)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 8)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Genu", "I can rebuild my army once I destroy you pests! My reign will never end.");
        }
        else if (this.chatlevel == 9)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 10)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Neko III", "We will see about that!");
        }
    }
    else if (this.levelx == 21)
    {
        if (this.chatlevel == 0)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Neko III", "I see a Command Core up ahead, we should take it down.");
        }
    }
    else if (this.levelx == 25)
    {
        if (this.chatlevel == 0)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Adriana", "This is odd, I\'m getting a massive energy source reading from up ahead.");
        }
        else if (this.chatlevel == 1)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 2)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Neko III", "I see it too, not even Genu\'s Mega-craft had that much power, what could it be?");
        }
        else if (this.chatlevel == 3)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 4)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Skymar", "Hahaha-- You really had no idea it was me huh?");
        }
        else if (this.chatlevel == 5)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 6)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Adriana", "Skymar, what are you talking about? Where did you find that Mega-craft?");
        }
        else if (this.chatlevel == 7)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 8)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Skymar", "This is no ordinary Mega-craft, this ship 10 times more powerful than my old one.");
        }
        else if (this.chatlevel == 9)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 10)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Adriana", "Your old ship? What are you talking about?");
        }
        else if (this.chatlevel == 11)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 12)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Skymar", "You really have no clue? You actually believe Genu magically came back from the dead?");
        }
        else if (this.chatlevel == 13)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 14)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Skymar", "I was Genu, it was me all along! But none of that matters because I have to kill you.");
        }
        else if (this.chatlevel == 15)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 16)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Adriana", "Skymar! What has gotten into you??");
        }
        else if (this.chatlevel == 17)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 18)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Neko III", "He\'s been fooling you, Adriana. With that ship he could bring chaos to the Enigmata again.");
        }
        else if (this.chatlevel == 19)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 20)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Neko III", "He has to be stopped!");
        }
        else if (this.chatlevel == 21)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 22)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Skymar", "My weapons can destroy your puny ship in one hit! You stand no chance! Prepare to die!");
        }
        else if (this.chatlevel == 23)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
    }
}
if (this.BOSSFIND == 4 && this.leveltimer < -200)
{
    if (this.replayx == 1)
    {
        if (this.levelx == 1)
        {
            if (this.chatlevel == 0)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Neko III", "Wow, I thought you were a goner! Hey don\'t worry about getting those ion cores...");
            }
            else if (this.chatlevel == 1)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 2)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Neko III", "Just get back to the base, I got a new mission for you.");
            }
            else if (this.chatlevel == 3)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 4)
            {
                this.sendscore();
                (this.chatlevel + 1);
            }
        }
        else if (this.levelx == 2)
        {
            if (this.chatlevel == 0)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Neko III", "Looks like the General has been corrupted by Genu, I can\'t believe it.");
            }
            else if (this.chatlevel == 1)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 2)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Neko III", "You got to get to Nebula 45, I heard Adriana has gone missing.");
            }
            else if (this.chatlevel == 3)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 4)
            {
                this.sendscore();
                (this.chatlevel + 1);
            }
        }
        else if (this.levelx == 3)
        {
            if (this.chatlevel == 0)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Adriana", "Thanks, I\'m finally free of his control. I\'ll explain what happened.");
            }
            else if (this.chatlevel == 1)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 2)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Neko III", "Lets get back to base first.");
            }
            else if (this.chatlevel == 3)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 4)
            {
                this.sendscore();
                (this.chatlevel + 1);
            }
        }
        else if (this.levelx == 4)
        {
            if (this.chatlevel == 0)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Adriana", "Skymar must have escaped, I don\'t see his ship anywhere, only he could pilot it.");
            }
            else if (this.chatlevel == 1)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 2)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Neko III", "I see, well it seems our priority now is to stop Genu\'s new army.");
            }
            else if (this.chatlevel == 3)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 4)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Adriana", "Genu can\'t be back, its impossible. Something else is has to be going on.");
            }
            else if (this.chatlevel == 5)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 6)
            {
                this.sendscore();
                (this.chatlevel + 1);
            }
        }
        else if (this.levelx == 5)
        {
            if (this.chatlevel == 0)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Adriana", "That ship looks a lot like one of the crafts Skymar was dismantling.");
            }
            else if (this.chatlevel == 1)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 2)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Neko III", "Then why was it still active?... Lets get back to base.");
            }
            else if (this.chatlevel == 3)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 4)
            {
                this.sendscore();
                (this.chatlevel + 1);
            }
        }
        else if (this.levelx == 6)
        {
            if (this.chatlevel == 0)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Demenus", "Impossible! Genu won\'t be happy about this --- [Signal Cut]");
            }
            else if (this.chatlevel == 1)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 2)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Neko III", "Looks like one of Genu\'s minions know\'s we\'re coming.");
            }
            else if (this.chatlevel == 3)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 4)
            {
                this.sendscore();
                (this.chatlevel + 1);
            }
        }
        else if (this.levelx == 7)
        {
            if (this.chatlevel == 0)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Neko III", "Nice work! It looks like Genu\'s army is nothing like before.");
            }
            else if (this.chatlevel == 1)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 2)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Adriana", "That ship looked oddly familiar, I can\'t remember where I\'ve seen it though.");
            }
            else if (this.chatlevel == 3)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 4)
            {
                this.sendscore();
                (this.chatlevel + 1);
            }
        }
        else if (this.levelx == 8)
        {
            if (this.chatlevel == 0)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Neko III", "That was quite a battleship, looks like Genu captured the best engineers.");
            }
            else if (this.chatlevel == 1)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 2)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Adriana", "We\'re going to need some powerful equipment to deal with more ships like those.");
            }
            else if (this.chatlevel == 3)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 4)
            {
                this.sendscore();
                (this.chatlevel + 1);
            }
        }
        else if (this.levelx == 9)
        {
            if (this.chatlevel == 0)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Clade", "Mwhahaha, I knew they couldn\'t destroy my creation.");
            }
            else if (this.chatlevel == 1)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 2)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Demenus", "Ughh you might want to look again.");
            }
            else if (this.chatlevel == 3)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 4)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Clade", "WHAT?! This cannot be! I will be back with a much stronger demon craft.");
            }
            else if (this.chatlevel == 5)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 6)
            {
                this.sendscore();
                (this.chatlevel + 1);
            }
        }
        else if (this.levelx == 10)
        {
            if (this.chatlevel == 0)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Neko III", "I knew you could take him! Nothing should be able to stop us now.");
            }
            else if (this.chatlevel == 1)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 2)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Adriana", "I hope so, these guys are full of surprises.");
            }
            else if (this.chatlevel == 3)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 4)
            {
                this.sendscore();
                (this.chatlevel + 1);
            }
        }
        else if (this.levelx == 11)
        {
            if (this.chatlevel == 0)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Neko III", "Nice, told you he\'d be a piece of cake!");
            }
            else if (this.chatlevel == 1)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 2)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Adriana", "We\'re getting pretty close to Genu\'s base now, I wonder what else they got.");
            }
            else if (this.chatlevel == 3)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 4)
            {
                this.sendscore();
                (this.chatlevel + 1);
            }
        }
        else if (this.levelx == 12)
        {
            if (this.chatlevel == 0)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Neko III", "Well that was a predictable defeat, yet again!");
            }
            else if (this.chatlevel == 1)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 2)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Adriana", "Nice! We should be able to rescue Skymar with no sweat at this rate!");
            }
            else if (this.chatlevel == 3)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 4)
            {
                this.sendscore();
                (this.chatlevel + 1);
            }
        }
        else if (this.levelx == 13)
        {
            if (this.chatlevel == 0)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Adriana", "Wow, that guy has some serious issues..");
            }
            else if (this.chatlevel == 1)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 2)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Neko III", "The galaxy will be a lot better off without that guy around.");
            }
            else if (this.chatlevel == 3)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 4)
            {
                this.sendscore();
                (this.chatlevel + 1);
            }
        }
        else if (this.levelx == 14)
        {
            if (this.chatlevel == 0)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Neko III", "Good job! I knew those guys wouldn\'t be a problem for you.");
            }
            else if (this.chatlevel == 1)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 2)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Neko III", "We\'re at Genu\'s base now, things are going to get a lot tougher now.");
            }
            else if (this.chatlevel == 3)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 4)
            {
                this.sendscore();
                (this.chatlevel + 1);
            }
        }
        else if (this.levelx == 15)
        {
            if (this.chatlevel == 0)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Adriana", "Sweet... But Skymar\'s ship is out of range again, they must have taken him.");
            }
            else if (this.chatlevel == 1)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 2)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Neko III", "We got this far, there\'s no point turning back now.");
            }
            else if (this.chatlevel == 3)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 4)
            {
                this.sendscore();
                (this.chatlevel + 1);
            }
        }
        else if (this.levelx == 16)
        {
            if (this.chatlevel == 0)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Neko III", "Nice work, but following Skymar is a pain -- Does he want to be rescued?");
            }
            else if (this.chatlevel == 1)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 2)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Neko III", "Well either way, we need to stop Genu, Skymar or no Skymar.");
            }
            else if (this.chatlevel == 3)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 4)
            {
                this.sendscore();
                (this.chatlevel + 1);
            }
        }
        else if (this.levelx == 17)
        {
            if (this.chatlevel == 0)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Neko III", "Wow, that was some mega-craft. They\'re saving the good ones for last.");
            }
            else if (this.chatlevel == 1)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 2)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Adriana", "No big deal, the bigger they are, the harder they fall.");
            }
            else if (this.chatlevel == 3)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 4)
            {
                this.sendscore();
                (this.chatlevel + 1);
            }
        }
        else if (this.levelx == 18)
        {
            if (this.chatlevel == 0)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Clade", "AHHHHH-- NOOOOOOO!!!---- (Signal Cut)");
            }
            else if (this.chatlevel == 1)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 2)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Demenus", "Clade! No!....... You will pay dearly for this.");
            }
            else if (this.chatlevel == 3)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 4)
            {
                this.sendscore();
                (this.chatlevel + 1);
            }
        }
        else if (this.levelx == 19)
        {
            if (this.chatlevel == 0)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Genu", "Those fools... They were eaisly replaceable, you have seen nothing yet!");
            }
            else if (this.chatlevel == 1)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 2)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Neko III", "Yeah right, its time to end this once and for all!");
            }
            else if (this.chatlevel == 3)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 4)
            {
                this.sendscore();
                (this.chatlevel + 1);
            }
        }
        else if (this.levelx == 20)
        {
            if (this.chatlevel == 0)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Neko III", "Yes! You have saved the galaxy!");
            }
            else if (this.chatlevel == 1)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 2)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Neko III", "Genu is finally defeated! It\'s time to celebrate!");
            }
            else if (this.chatlevel == 3)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 4)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Mission Commander", "There is still work to be done, we need to continue battling Genu\'s forces.");
            }
            else if (this.chatlevel == 5)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 6)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Neko III", "You\'re right, Genu still has drones flying here and there.");
            }
            else if (this.chatlevel == 7)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 8)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Adriana", "Hey, do you see that small ship in the distance? Who could that be?");
            }
            else if (this.chatlevel == 9)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 10)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Skymar", "...I\'m free...");
            }
            else if (this.chatlevel == 11)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 12)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Adriana", "Skymar! You\'re alive, I thought you were dead! Thank goodness!");
            }
            else if (this.chatlevel == 13)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 14)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Neko III", "Thats great, we better get back to the base, theres still work to be done.");
            }
            else if (this.chatlevel == 15)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 16)
            {
                this.sendscore();
                (this.chatlevel + 1);
            }
        }
        else if (this.levelx == 25)
        {
            if (this.chatlevel == 0)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Neko III", "Its finally over.");
            }
            else if (this.chatlevel == 1)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 2)
            {
                (this.chatlevel + 1);
                this.tutshow(2, "Adriana", "Now its time to rebuild...");
            }
            else if (this.chatlevel == 3)
            {
                if (this.pausegame)
                {
                    (this.chatlevel + 1);
                }
            }
            else if (this.chatlevel == 4)
            {
                this.sendscore();
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 0)
        {
            this.sendscore();
            (this.chatlevel + 1);
        }
    }
    else if (this.replayx == 2 && this.overrideboss == false)
    {
        if (this.chatlevel == 0)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Neko III", "Sorry about that little bug, it shouldn\'t happen again...");
        }
        else if (this.chatlevel == 1)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 2)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Neko III", "Well, I had a new shop I was planning to release anyway, there you go.");
        }
        else if (this.chatlevel == 3)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 4)
        {
            this.sendscore();
            (this.chatlevel + 1);
        }
        else
        {
            this.sendscore();
            this.replayx = 3;
        }
    }
    else if (this.replayx == 2)
    {
        if (this.chatlevel == 0)
        {
            (this.chatlevel + 1);
            this.sendscore();
            this.replayx = 3;
        }
    }
    else if (this.replayx == 4)
    {
        if (this.chatlevel == 0)
        {
            (this.chatlevel + 1);
            this.tutshow(2, "Neko III", "You collected " + this.orbcounter + " Nekon Orbs in " + (this.leveltimec / 24).toFixed(1) + " Seconds...");
        }
        else if (this.chatlevel == 1)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 2)
        {
            (this.chatlevel + 1);
            if (this.orbcounter >= this.orbtotal && this.leveltimec <= this.timemax)
            {
                this.tutshow(2, "Neko III", "Good job, you earned a " + this.medalname + " Medal! Claim your prize in the shop.");
                (this.achpoints + 1);
                (this.achpointstotal + 1);
                this.itemx[this.dietem] = 2;
            }
            else
            {
                this.tutshow(2, "Neko III", "Nice try, but you did not earn a medal this time...");
            }
        }
        else if (this.chatlevel == 3)
        {
            if (this.pausegame)
            {
                (this.chatlevel + 1);
            }
        }
        else if (this.chatlevel == 4)
        {
            this.BOSSFIND = 6;
            (this.chatlevel + 1);
        }
    }
}
if (this.replayx !== 4)
{
    if (this.BOSSFIND == 5)
    {
        if (this.pausegame)
        {
            this.BOSSFIND = 6;
        }
    }
    if (this.BOSSFIND == 5)
    {
        if (this.itemx[302] == 1 && this.replayx == 1)
        {
            if (this.leveltimec / 24 <= 120)
            {
                this.achievef(302);
            }
        }
        if (this.itemx[329] == 1)
        {
            if (this.leveltimec / 24 < 0)
            {
                this.achievef(329);
            }
        }
        if (this.itemx[307] == 1)
        {
            if (this.excelcounter + this.amazingcounter + this.perfectcounter >= 4)
            {
                this.achievef(307);
            }
        }
        if (this.itemx[314] == 1)
        {
            if (this.amazingcounter + this.perfectcounter >= 4)
            {
                this.achievef(314);
            }
        }
        if (this.itemx[318] == 1)
        {
            if (this.round(this.acchit / this.acctotal * 100) >= 75)
            {
                this.achievef(318);
            }
        }
        if (this.itemx[340] == 1)
        {
            if (this.round(this.acchit / this.acctotal * 100) >= 95)
            {
                this.achievef(340);
            }
        }
        if (this.itemx[319] == 1)
        {
            if ((this.ekillthis + 1) / (this.ecthis + 1) >= 0.9)
            {
                this.achievef(319);
            }
        }
        if (this.itemx[327] == 1)
        {
            if (this.perfectcounter >= 4)
            {
                this.achievef(327);
            }
        }
        if (this.itemx[344] == 1)
        {
            if (this.levelx >= 17)
            {
                if (this.perfectcounter >= 4)
                {
                    this.achievef(344);
                }
            }
        }
        if (this.itemx[338] == 1)
        {
            if ((this.thp + this.tshp) * 0.05 >= this.hp + this.shp)
            {
                this.achievef(338);
            }
        }
        if (this.levelx > 10)
        {
            if (this.itemx[336] == 1)
            {
                if ((this.ekillthis + 1) / (this.ecthis + 1) >= 0.95)
                {
                    this.achievef(336);
                }
            }
        }
        if (this.itemx[320] == 1)
        {
            if (this.bonusthis == 0)
            {
                this.achievef(320);
            }
        }
        if (this.sharedObject.data["totaldamageHS"] == null)
        {
            this.sharedObject.data["totaldamageHS"] = this.totaldamage;
        }
        else if (int(this.sharedObject.data["totaldamageHS"]) < this.totaldamage)
        {
            this.sharedObject.data["totaldamageHS"] = this.totaldamage;
        }
        if (this.sharedObject.data["ekillthisHS"] == null)
        {
            this.sharedObject.data["ekillthisHS"] = this.ekillthis;
        }
        else if (int(this.sharedObject.data["ekillthisHS"]) < this.ekillthis)
        {
            this.sharedObject.data["ekillthisHS"] = this.ekillthis;
        }
        if (this.sharedObject.data["accHS"] == null)
        {
            this.sharedObject.data["accHS"] = this.round(this.acchit / this.acctotal * 100);
        }
        else if (int(this.sharedObject.data["accHS"]) < this.round(this.acchit / this.acctotal * 100))
        {
            this.sharedObject.data["accHS"] = this.round(this.acchit / this.acctotal * 100);
        }
        if (this.sharedObject.data["goldthisHS"] == null)
        {
            this.sharedObject.data["goldthisHS"] = this.goldthis;
        }
        else if (int(this.sharedObject.data["goldthisHS"]) < this.goldthis)
        {
            this.sharedObject.data["goldthisHS"] = this.goldthis;
        }
        if (this.sharedObject.data["bonusthisHS"] == null)
        {
            this.sharedObject.data["bonusthisHS"] = this.bonusthis;
        }
        else if (int(this.sharedObject.data["goldthisHS"]) < this.bonusthis)
        {
            this.sharedObject.data["bonusthisHS"] = this.bonusthis;
        }
        if (this.sharedObject.data["leveltimeHS"] == null)
        {
            this.sharedObject.data["leveltimeHS"] = this.round(this.leveltimec / 24);
        }
        else if (int(this.sharedObject.data["leveltimeHS"]) > this.round(this.leveltimec / 24))
        {
            this.sharedObject.data["leveltimeHS"] = this.round(this.leveltimec / 24);
        }
        this.axtext1 = this.axtext1 + (this.goldthis - this.axtext1) / 10;
        this.pausescreen.a1.a1.text = "Gold Collected: " + this.round(this.axtext1);
        (this.zentimer + 1);
        if (this.zentimer > 25)
        {
            if (this.pausescreen.a2.visible == false)
            {
                if (this.goldthis > 250000 + 40 * this.highgold() / this.replayx)
                {
                    this.alltint.setTint(16711254, 1);
                    this.pausescreen.a1.a2.transform.colorTransform = this.alltint;
                    this.pausescreen.a1.a2.text = "Perfect  (+" + this.commaf(this.perfect()) + " Gold)";
                    this.goldf(this.perfect());
                    (this.perfectcounter + 1);
                }
                else if (this.goldthis > 85000 + 15000 * this.levelx)
                {
                    this.alltint.setTint(16692293, 1);
                    this.pausescreen.a1.a2.transform.colorTransform = this.alltint;
                    this.pausescreen.a1.a2.text = "Amazing  (+" + this.commaf(this.levelx * 5000) + " Gold)";
                    this.goldf(this.levelx * 5000);
                    (this.amazingcounter + 1);
                }
                else if (this.goldthis > 40000 + 3000 * this.levelx)
                {
                    this.alltint.setTint(3381759, 1);
                    this.pausescreen.a1.a2.transform.colorTransform = this.alltint;
                    this.pausescreen.a1.a2.text = "Excellent";
                    (this.excelcounter + 1);
                }
                else if (this.goldthis > 20000 + 1000 * this.levelx)
                {
                    this.alltint.setTint(9876704, 1);
                    this.pausescreen.a1.a2.transform.colorTransform = this.alltint;
                    this.pausescreen.a1.a2.text = "Good Job";
                }
                else if (this.goldthis > 5000)
                {
                    this.alltint.setTint(13158600, 1);
                    this.pausescreen.a1.a2.transform.colorTransform = this.alltint;
                    this.pausescreen.a1.a2.text = "Nice Try";
                }
                else
                {
                    this.alltint.setTint(16711680, 1);
                    this.pausescreen.a1.a2.transform.colorTransform = this.alltint;
                    this.pausescreen.a1.a2.text = "Failed (-10,000 Gold)";
                    this.goldf(-10000);
                }
                this.pausescreen.a2.ax.gotoAndPlay(1);
                this.pausescreen.a2.a2.text = "Waiting...";
            }
            this.pausescreen.a2.visible = true;
            this.axtext2 = this.axtext2 + ((this.ekillthis + 1) / (this.ecthis + 1) * 100 - this.axtext2) / 10;
            if (this.axtext2 > 100)
            {
                this.axtext2 = 100;
            }
            this.pausescreen.a2.a1.text = "Enemies Defeated: " + this.round(this.axtext2) + "%";
            (this.zentimer1 + 1);
            if (this.zentimer1 > 25)
            {
                if (this.pausescreen.a3.visible == false)
                {
                    if ((this.ekillthis + 1) / (this.ecthis + 1) > 0.96)
                    {
                        this.alltint.setTint(16711254, 1);
                        this.pausescreen.a2.a2.transform.colorTransform = this.alltint;
                        this.pausescreen.a2.a2.text = "Perfect  (+" + this.commaf(this.perfect()) + " Gold)";
                        this.goldf(this.perfect());
                        (this.perfectcounter + 1);
                    }
                    else if ((this.ekillthis + 1) / (this.ecthis + 1) > 0.85)
                    {
                        this.alltint.setTint(16692293, 1);
                        this.pausescreen.a2.a2.transform.colorTransform = this.alltint;
                        this.pausescreen.a2.a2.text = "Amazing  (+" + this.commaf(this.levelx * 5000) + " Gold)";
                        this.goldf(this.levelx * 5000);
                        (this.amazingcounter + 1);
                    }
                    else if ((this.ekillthis + 1) / (this.ecthis + 1) > 0.65)
                    {
                        this.alltint.setTint(3381759, 1);
                        this.pausescreen.a2.a2.transform.colorTransform = this.alltint;
                        this.pausescreen.a2.a2.text = "Excellent";
                        (this.excelcounter + 1);
                    }
                    else if ((this.ekillthis + 1) / (this.ecthis + 1) > 0.4)
                    {
                        this.alltint.setTint(9876704, 1);
                        this.pausescreen.a2.a2.transform.colorTransform = this.alltint;
                        this.pausescreen.a2.a2.text = "Good Job";
                    }
                    else if ((this.ekillthis + 1) / (this.ecthis + 1) > 0.1)
                    {
                        this.alltint.setTint(13158600, 1);
                        this.pausescreen.a2.a2.transform.colorTransform = this.alltint;
                        this.pausescreen.a2.a2.text = "Nice Try";
                    }
                    else
                    {
                        this.alltint.setTint(16711680, 1);
                        this.pausescreen.a2.a2.transform.colorTransform = this.alltint;
                        this.pausescreen.a2.a2.text = "Failed (-10,000 Gold)";
                        this.goldf(-10000);
                    }
                    this.pausescreen.a2.a3.x = this.pausescreen.a2.a2.x + this.pausescreen.a2.a2.textWidth + 5;
                    this.pausescreen.a2.a3.text = this.round(this.acchit / this.acctotal * 100) + "% Accuracy";
                    this.pausescreen.a2.a3.visible = true;
                    this.pausescreen.a3.ax.gotoAndPlay(1);
                    this.pausescreen.a3.a2.text = "Waiting...";
                }
                this.pausescreen.a3.visible = true;
                this.axtext3 = this.axtext3 + (this.bonusthis - this.axtext3) / 10;
                this.pausescreen.a3.a1.text = "Bonuses Collected: " + this.round(this.axtext3);
                (this.zentimer2 + 1);
                if (this.zentimer2 > 25)
                {
                    if (this.pausescreen.a4.visible == false)
                    {
                        if (this.bonusthis > 75)
                        {
                            this.alltint.setTint(16711254, 1);
                            this.pausescreen.a3.a2.transform.colorTransform = this.alltint;
                            this.pausescreen.a3.a2.text = "Perfect  (+" + this.commaf(this.perfect()) + " Gold)";
                            this.goldf(this.perfect());
                            (this.perfectcounter + 1);
                        }
                        else if (this.bonusthis > 45)
                        {
                            this.alltint.setTint(16692293, 1);
                            this.pausescreen.a3.a2.transform.colorTransform = this.alltint;
                            this.pausescreen.a3.a2.text = "Amazing  (+" + this.commaf(this.levelx * 5000) + " Gold)";
                            this.goldf(this.levelx * 5000);
                            (this.amazingcounter + 1);
                        }
                        else if (this.bonusthis > 25)
                        {
                            this.alltint.setTint(3381759, 1);
                            this.pausescreen.a3.a2.transform.colorTransform = this.alltint;
                            this.pausescreen.a3.a2.text = "Excellent";
                            (this.excelcounter + 1);
                        }
                        else if (this.bonusthis > 15)
                        {
                            this.alltint.setTint(9876704, 1);
                            this.pausescreen.a3.a2.transform.colorTransform = this.alltint;
                            this.pausescreen.a3.a2.text = "Good Job";
                        }
                        else if (this.bonusthis > 5)
                        {
                            this.alltint.setTint(13158600, 1);
                            this.pausescreen.a3.a2.transform.colorTransform = this.alltint;
                            this.pausescreen.a3.a2.text = "Nice Try";
                        }
                        else
                        {
                            this.alltint.setTint(16711680, 1);
                            this.pausescreen.a3.a2.transform.colorTransform = this.alltint;
                            this.pausescreen.a3.a2.text = "Failed (-10,000 Gold)";
                            this.goldf(-10000);
                        }
                        this.pausescreen.a4.ax.gotoAndPlay(1);
                        this.pausescreen.a4.a2.text = "Waiting...";
                    }
                    this.pausescreen.a4.visible = true;
                    this.axtext4 = this.axtext4 + (this.leveltimec / 24 - this.axtext4) / 10;
                    this.pausescreen.a4.a1.text = "Level Time: " + this.round(this.axtext4) + " Sec";
                    (this.zentimer3 + 1);
                    if (this.zentimer3 > 25)
                    {
                        if (this.pausescreen.a4.a2.text == "Waiting...")
                        {
                            if (this.leveltimec / 24 < 90)
                            {
                                this.alltint.setTint(16711254, 1);
                                this.pausescreen.a4.a2.transform.colorTransform = this.alltint;
                                this.pausescreen.a4.a2.text = "Perfect";
                                (this.perfectcounter + 1);
                            }
                            else if (this.leveltimec / 24 < 125)
                            {
                                this.alltint.setTint(16692293, 1);
                                this.pausescreen.a4.a2.transform.colorTransform = this.alltint;
                                this.pausescreen.a4.a2.text = "Amazing";
                                (this.amazingcounter + 1);
                            }
                            else if (this.leveltimec / 24 < 175)
                            {
                                this.alltint.setTint(3381759, 1);
                                this.pausescreen.a4.a2.transform.colorTransform = this.alltint;
                                this.pausescreen.a4.a2.text = "Excellent";
                                (this.excelcounter + 1);
                            }
                            else if (this.leveltimec / 24 < 200)
                            {
                                this.alltint.setTint(9876704, 1);
                                this.pausescreen.a4.a2.transform.colorTransform = this.alltint;
                                this.pausescreen.a4.a2.text = "Good Job";
                            }
                            else
                            {
                                this.alltint.setTint(13158600, 1);
                                this.pausescreen.a4.a2.transform.colorTransform = this.alltint;
                                this.pausescreen.a4.a2.text = "Nice Try";
                            }
                        }
                    }
                }
            }
        }
    }
}
if (this.gameloaded == false)
{
    if (this.BOSSFIND == 6 && this.shoptimer > 15)
    {
        if (this.replayx == 1)
        {
            if (this.levelx == 1)
            {
                if (this.chatlevel == 0)
                {
                    (this.chatlevel + 1);
                    this.tutshow(2, "Neko III", "Welcome to the base, go ahead and buy some new equipment and repair.");
                }
                else if (this.chatlevel == 1)
                {
                    if (this.pausescreen.currentFrame == 5)
                    {
                        (this.chatlevel + 1);
                    }
                }
                else if (this.chatlevel == 2)
                {
                    this.chatlevel = 10;
                    this.tutshow(2, "Neko III", "Click Leave Shop to start your next assignment, we gotta find out what happened.");
                }
            }
            else if (this.levelx == 2)
            {
                if (this.chatlevel == 0)
                {
                    (this.chatlevel + 1);
                    this.tutshow(2, "Shopbot", "Having trouble seeing? Do you want me to increase the brightness for you?");
                }
                else if (this.chatlevel == 1)
                {
                    if (this.pausescreen.currentFrame == 5)
                    {
                        (this.chatlevel + 1);
                    }
                }
            }
            else if (this.levelx == 3)
            {
                if (this.chatlevel == 0)
                {
                    (this.chatlevel + 1);
                    this.tutshow(2, "Neko III", "What happened to you Adriana?");
                }
                else if (this.chatlevel == 1)
                {
                    if (this.pausescreen.currentFrame == 5)
                    {
                        (this.chatlevel + 1);
                    }
                }
                else if (this.chatlevel == 2)
                {
                    (this.chatlevel + 1);
                    this.tutshow(2, "Adriana", "Skymar and I were dismantling Genu\'s remaining weapons bases, and then...");
                }
                else if (this.chatlevel == 3)
                {
                    if (this.pausescreen.currentFrame == 5)
                    {
                        (this.chatlevel + 1);
                    }
                }
                else if (this.chatlevel == 4)
                {
                    (this.chatlevel + 1);
                    this.tutshow(2, "Adriana", "Skymar went missing a month ago, then these minions working for Genu attacked.");
                }
                else if (this.chatlevel == 5)
                {
                    if (this.pausescreen.currentFrame == 5)
                    {
                        (this.chatlevel + 1);
                    }
                }
                else if (this.chatlevel == 6)
                {
                    this.chatlevel = 10;
                    this.tutshow(2, "Neko III", "Wow, that\'s quite an ordeal. We better go back to find your partner, Skymar.");
                }
            }
            else if (this.levelx == 5)
            {
                if (this.chatlevel == 0)
                {
                    (this.chatlevel + 1);
                    this.tutshow(2, "Neko III", "You are now ready to face the Nekon invasion!");
                }
                else if (this.chatlevel == 1)
                {
                    if (this.pausescreen.currentFrame == 5)
                    {
                        (this.chatlevel + 1);
                    }
                }
                else if (this.chatlevel == 2)
                {
                    (this.chatlevel + 1);
                    this.tutshow(2, "Neko III", "The Nekons are self-generated droids which wreak havoc everywhere.");
                }
                else if (this.chatlevel == 3)
                {
                    if (this.pausescreen.currentFrame == 5)
                    {
                        (this.chatlevel + 1);
                    }
                }
                else if (this.chatlevel == 4)
                {
                    (this.chatlevel + 1);
                    this.tutshow(2, "Neko III", "The Nekon Orbs are their power source, most of them are carrying it.");
                }
                else if (this.chatlevel == 5)
                {
                    if (this.pausescreen.currentFrame == 5)
                    {
                        (this.chatlevel + 1);
                    }
                }
                else if (this.chatlevel == 6)
                {
                    this.chatlevel = 10;
                    this.tutshow(2, "Neko III", "If we collect enough Nekon Orbs we might be able to finally destroy them.");
                }
            }
            else if (this.levelx == 10)
            {
                if (this.chatlevel == 0)
                {
                    (this.chatlevel + 1);
                    this.tutshow(2, "Shopbot", "I\'ve detected a time warp passage, it leads 50 years into the past!");
                }
                else if (this.chatlevel == 1)
                {
                    if (this.pausescreen.currentFrame == 5)
                    {
                        (this.chatlevel + 1);
                    }
                }
                else if (this.chatlevel == 2)
                {
                    (this.chatlevel + 1);
                    this.tutshow(2, "Shopbot", "Do you want to travel to the past and face Genu in the original Enigmata?");
                }
                else if (this.chatlevel == 3)
                {
                    if (this.pausescreen.currentFrame == 5)
                    {
                        (this.chatlevel + 1);
                    }
                }
            }
            else if (this.levelx == 20)
            {
                if (this.chatlevel == 0)
                {
                    (this.chatlevel + 1);
                    this.tutshow(2, "Skymar", "Thanks for rescuing me, I can\'t thank you enough.");
                }
                else if (this.chatlevel == 1)
                {
                    if (this.pausescreen.currentFrame == 5)
                    {
                        (this.chatlevel + 1);
                    }
                }
                else if (this.chatlevel == 2)
                {
                    (this.chatlevel + 1);
                    this.tutshow(2, "Neko III", "No problem, Skymar. There are still enemies out there though, you should stick with us.");
                }
                else if (this.chatlevel == 3)
                {
                    if (this.pausescreen.currentFrame == 5)
                    {
                        (this.chatlevel + 1);
                    }
                }
                else if (this.chatlevel == 4)
                {
                    (this.chatlevel + 1);
                    this.tutshow(2, "Skymar", "I can\'t... I still have a lot of work to get done, and I\'m definetely behind now.");
                }
                else if (this.chatlevel == 5)
                {
                    if (this.pausescreen.currentFrame == 5)
                    {
                        (this.chatlevel + 1);
                    }
                }
                else if (this.chatlevel == 6)
                {
                    this.chatlevel = 10;
                    this.tutshow(2, "Neko III", "Are you serious? You\'re going straight back to work right after that? Well it\'s your call.");
                }
                else if (this.chatlevel == 7)
                {
                    if (this.pausescreen.currentFrame == 5)
                    {
                        (this.chatlevel + 1);
                    }
                }
                else if (this.chatlevel == 8)
                {
                    (this.chatlevel + 1);
                    this.tutshow(2, "Mission Commander", "Anyway, its up to you guys to take care of Genu\'s remaining forces.");
                }
                else if (this.chatlevel == 3)
                {
                    if (this.pausescreen.currentFrame == 5)
                    {
                        (this.chatlevel + 1);
                    }
                }
                else if (this.chatlevel == 9)
                {
                    (this.chatlevel + 1);
                    this.tutshow(2, "Mission Commander", "Some of his Command Cores are coming up ahead, they shouldn\'t be hard to take down.");
                }
                else if (this.chatlevel == 5)
                {
                    if (this.pausescreen.currentFrame == 5)
                    {
                        (this.chatlevel + 1);
                    }
                }
                else if (this.chatlevel == 10)
                {
                    this.chatlevel = 10;
                    this.tutshow(2, "Neko III", "Sound like a plan, lets finish this once and for all.");
                }
            }
            else if (this.levelx == 21)
            {
                if (this.chatlevel == 0)
                {
                    (this.chatlevel + 1);
                    this.tutshow(2, "Shopbot", "I\'ve detected another time warp passage that leads 50 years into the past!");
                }
                else if (this.chatlevel == 1)
                {
                    if (this.pausescreen.currentFrame == 5)
                    {
                        (this.chatlevel + 1);
                    }
                }
                else if (this.chatlevel == 2)
                {
                    (this.chatlevel + 1);
                    this.tutshow(2, "Shopbot", "Do you want to travel to the past and face Genu in the original Enigmata?");
                }
                else if (this.chatlevel == 3)
                {
                    if (this.pausescreen.currentFrame == 5)
                    {
                        (this.chatlevel + 1);
                    }
                }
            }
            if (this.chatlevel == 0)
            {
                this.chatlevel = 10;
            }
            if (this.chatlevel >= 10)
            {
                if (this.chatlevel == 10)
                {
                    if (this.eliteonce == 1 && this.achpoints >= 5 && this.itemx[16] == -1)
                    {
                        this.eliteonce = 2;
                        this.tutshow(2, "Shopbot", "You now have 5 Achievement points, you can unlock the Elite Gear shop.");
                        this.chatlevel = 11;
                    }
                    if (this.bmonce == 1 && this.achpoints >= 10 && this.itemx[31] == -1 && this.itemx[16] !== -1)
                    {
                        this.bmonce = 2;
                        this.tutshow(2, "Shopbot", "You now have 10 Achievement points, you can unlock the Black Market.");
                        this.chatlevel = 11;
                    }
                    this.chatlevel = 11;
                }
                if (this.levelx % 3 == 0 && this.levelx !== 1 && this.chatlevel == 11 && this.levelx <= 18)
                {
                    this.bmonce = 2;
                    this.tutshow(2, "Shopbot", "Level " + this.levelx + ": New equipment upgrades unlocked!");
                    this.chatlevel = 12;
                }
            }
        }
    }
}
if (this.BOSSFIND == 6)
{
    if (this.shoponce)
    {
        this.stopMusic();
        this.currentMusic = this.smusic1;
        this.soundPosition = 0;
        this.playMusic();
        this.shoptimer = 0;
        this.clearscreen();
        this.dietem = 0;
        if (this.replayx !== 1)
        {
            this.levelx = this.maxlevel;
        }
        else
        {
            this.maxlevel = this.levelx;
        }
        if (this.levelx > 25)
        {
            this.levelx = 25;
            this.maxlevel = 25;
        }
        if (this.infinitimer > 0)
        {
            this.infinitimer = 0;
            this.shipselect = this.orishipselect;
        }
        if (this.autosave !== 0)
        {
            this.savemode = 1;
            this.autosavenow = 2;
            this.savesave();
            this.havesaved = true;
        }
        else
        {
            this.havesaved = false;
        }
        if (this.stopscreen.currentFrame == 1)
        {
            this.stopscreen.gotoAndStop(2);
        }
        this.setlevel = this.levelx;
        this.helpers = 0;
        this.shopscreen.gotoAndStop(1);
        this.slisten();
        this.i = 3 + 1;
        do
        {

            this.shopArray[this.i].x = this.shopscreen.glows.x;
            if (this.currentshop == 1 || this.currentshop == 2 || this.currentshop == 4 || this.currentshop == 5 || this.currentshop == 6 || this.currentshop == 9)
            {
                this.shopArray[1].y = this.shopscreen.glows.y;
            }
            else if (this.currentshop == this.i)
            {
                this.shopArray[this.i].y = this.shopscreen.glows.y;
                this.shopArray[1].y = 501;
            }
            var _loc_2:String = this;
            _loc_2.i = this.i - 1;
        }while (--this.i > 0)
        this.shopArray[3].s1.cacheAsBitmap = true;
        this.shopArray[3].s2.cacheAsBitmap = true;
        this.shopArray[3].s3.cacheAsBitmap = true;
        this.shopArray[10].x = this.shopscreen.glows.x;
        this.shopArray[10].y = 501;
        if (this.currentshop == 1 || this.currentshop == 2 || this.currentshop == 4 || this.currentshop == 5 || this.currentshop == 6 || this.currentshop == 9)
        {
            this.orishop(this.shopscreen.shop1, this.idiff);
        }
        this.shopscreen.asker.visible = false;
        this.shopscreen.asker2.visible = false;
        this.shopscreen.helper.visible = false;
        this.leveltimer = this.levellength;
        this.negtimer = 0;
        this.shopscreen.skillmask.visible = false;
        if (this.currentshop == 3)
        {
            this.oriship(this.shopscreen.ships1);
        }
        this.itemsupdate();
        this.missleson = false;
        this.MindJoltAPI.service.submitScore(this.scorer(this.score));
        if (loaderInfo.url.indexOf("kongregate") !== -1)
        {
            if (this.cheater == 1 && this.notyours == false)
            {
                this.kongregate.stats.submit("Score", this.scorer(this.score));
                this.kongregate.stats.submit("Kills", this.ekill);
                if (this.maxlevel >= 3)
                {
                    this.kongregate.stats.submit("Level", this.maxlevel);
                }
                this.kongregate.stats.submit("Gold", this.gold);
                this.kongregate.stats.submit("Leveldamage", this.totaldamage);
                this.intuse = 0;
                this.i = 15 + 1;
                do
                {

                    if (this.itemx[400 + this.i] - 5 >= this.killTotal[400 + this.i])
                    {
                        (this.intuse + 1);
                    }
                    if (this.itemx[400 + this.i] == 3)
                    {
                        (this.intuse + 1);
                    }
                    var _loc_2:String = this;
                    _loc_2.i = this.i - 1;
                }while (--this.i > 0)
                this.kongregate.stats.submit("Missions", this.intuse);
                if (this.genukill)
                {
                    this.kongregate.stats.submit("Genukilled", 1);
                }
                if (this.entitykill)
                {
                    this.kongregate.stats.submit("Entitykilled", 1);
                }
            }
        }
        this.shopscreen.l1.text = "Level " + this.levelx;
        this.shopscreen.l2.text = "Level " + this.levelx;
        this.savehp = this.hp / this.thp;
        this.saveshp = this.shp / this.tshp;
        this.saveep = this.ep / this.tep;
        this.shopscreen.visible = true;
        this.shopscreen.r1.visible = false;
        this.shopscreen.r2.visible = false;
        this.shopscreen.r3.visible = false;
        this.shopmove = 0;
        this.shopscreen.glows.alpha = 0;
        this.skillschange();
        this.skills.alpha = 1;
        this.shopscreen.shopflash.play();
        this.lockpause = false;
        this.pausegame = false;
        this.shoponce = false;
        this.dispship = this.shipselect;
        if (this.dispship == 15 && this.itemx[44] == 3)
        {
            this.offvar = this.dispship - 2;
        }
        else if (this.dispship == 12 && this.itemx[44] !== 3)
        {
            this.offvar = this.dispship - 2;
        }
        else if (this.dispship !== 1)
        {
            this.offvar = this.dispship - 1;
        }
        else
        {
            this.offvar = 1;
        }
        this.oriship(this.shopscreen.ships1);
        if (this.hp < this.thp)
        {
            this.shopscreen.r1.visible = true;
        }
        if (this.shp < this.tshp)
        {
            this.shopscreen.r2.visible = true;
        }
        if (this.ep < this.tep)
        {
            this.shopscreen.r3.visible = true;
        }
        this.chatlevel = 0;
        this.updatestuff();
        if (this.newgamexs == true)
        {
            this.newgamexs = false;
            this.orishop(this.shopscreen.shop2, this.idiff);
            this.shopmove = 1;
            this.idiff = 0;
            this.shopnum = 1;
            this.sdiff = 0;
            this.orishop(this.shopscreen.shop1, this.idiff);
            this.switchx();
        }
    }
    (this.shoptimer + 1);
    Mouse.show();
    if (this.currentshop == 3)
    {
        if (this.moveshipsright)
        {
            this.shopscreen.ships1.s1.x = this.shopscreen.ships1.s1.x + (104 + 155 * -1 - this.shopscreen.ships1.s1.x) / 2;
            this.shopscreen.ships1.s2.x = this.shopscreen.ships1.s2.x + (104 + 155 * 0 - this.shopscreen.ships1.s2.x) / 2;
            this.shopscreen.ships1.s3.x = this.shopscreen.ships1.s3.x + (104 + 155 * 1 - this.shopscreen.ships1.s3.x) / 2;
            this.shopscreen.ships1.s4.x = this.shopscreen.ships1.s4.x + (104 + 155 * 2 - this.shopscreen.ships1.s4.x) / 2;
            if (104 - 155 > (this.shopscreen.ships1.s1.x - 1))
            {
                this.moveshipsright = false;
                (this.offvar + 1);
                this.oriship(this.shopscreen.ships1);
            }
        }
        if (this.moveshipsleft)
        {
            this.shopscreen.ships1.s4.x = this.shopscreen.ships1.s4.x + (104 + 155 * 0 - this.shopscreen.ships1.s4.x) / 2;
            this.shopscreen.ships1.s1.x = this.shopscreen.ships1.s1.x + (104 + 155 * 1 - this.shopscreen.ships1.s1.x) / 2;
            this.shopscreen.ships1.s2.x = this.shopscreen.ships1.s2.x + (104 + 155 * 2 - this.shopscreen.ships1.s2.x) / 2;
            this.shopscreen.ships1.s3.x = this.shopscreen.ships1.s3.x + (104 + 155 * 3 - this.shopscreen.ships1.s3.x) / 2;
            if (104 + 155 * 3 < (this.shopscreen.ships1.s3.x + 1))
            {
                this.moveshipsleft = false;
                (this.offvar - 1);
                this.oriship(this.shopscreen.ships1);
            }
        }
        if (this.dispship - this.offvar + 1 >= 1 && this.dispship - this.offvar + 1 <= 3)
        {
            this.shopscreen.ships1.g1.x = this.shopscreen.ships1["s" + (this.dispship - this.offvar + 1)].x;
        }
        else
        {
            this.shopscreen.ships1.g1.x = 600;
        }
        this.shopscreen.ships1.s5.y = this.shopscreen.ships1.s5.y + (235 - this.shopscreen.ships1.s5.y) / 15;
        this.shopscreen.ships1.s4.x = this.round(this.shopscreen.ships1.s4.x);
        this.shopscreen.ships1.s1.x = this.round(this.shopscreen.ships1.s1.x);
        this.shopscreen.ships1.s2.x = this.round(this.shopscreen.ships1.s2.x);
        this.shopscreen.ships1.s3.x = this.round(this.shopscreen.ships1.s3.x);
    }
    if (this.skillfol !== 0)
    {
        this.i = 10 + 1;
        do
        {

            this.shopscreen["sk" + this.i].alpha = 0.5;
            var _loc_2:String = this;
            _loc_2.i = this.i - 1;
        }while (--this.i > 0)
        this.shopscreen.skillfollow.x = mouseX - 350.5;
        this.shopscreen.skillfollow.y = mouseY - 250.5;
        this.shopscreen.skillfollow.ax.gotoAndStop(this.skillfol);
    }
    else
    {
        this.i = 10 + 1;
        do
        {

            this.shopscreen["sk" + this.i].alpha = 1;
            var _loc_2:String = this;
            _loc_2.i = this.i - 1;
        }while (--this.i > 0)
        this.shopscreen.skillfollow.y = 500;
    }
    if (this.scrolln == 2)
    {
        if (this.shopscreen.shop1.a1.y > this.oriy - (this.shopmax[this.shopnum] - 6) * 50 - 15)
        {
            this.shopscreen.shop1[("a" + 1)].y = this.shopscreen.shop1[("a" + 1)].y - 14;
        }
        else if (this.shopmax[this.shopnum] > 6)
        {
            this.shopscreen.shop1[("a" + 1)].y = -1 * ((this.shopmax[this.shopnum] - 6) * 50 - 15 + 42) + 44;
        }
        this.shopscreen.shop1.scrollz.y = 127 * (-1 * (this.shopscreen.shop1.a1.y - 42) / ((this.shopmax[this.shopnum] - 6) * 50 - 15 + 42)) + 76;
    }
    else if (this.scrolln == 1)
    {
        if (this.shopscreen.shop1.a1.y + 14 < this.oriy)
        {
            this.shopscreen.shop1[("a" + 1)].y = this.shopscreen.shop1[("a" + 1)].y + 14;
        }
        else
        {
            this.shopscreen.shop1[("a" + 1)].y = 42;
        }
        this.shopscreen.shop1.scrollz.y = 127 * (-1 * (this.shopscreen.shop1.a1.y - 42) / ((this.shopmax[this.shopnum] - 6) * 50 - 15 + 42)) + 76;
    }
    else if (this.scrolln == 3)
    {
        this.shopscreen.shop1.scrollz.y = this.oriscrollz + (mouseY - this.orimousez);
        if (this.shopscreen.shop1.scrollz.y < 76)
        {
            this.shopscreen.shop1.scrollz.y = 76;
        }
        if (this.shopscreen.shop1.scrollz.y > 202)
        {
            this.shopscreen.shop1.scrollz.y = 202;
        }
        this.shopscreen.shop1[("a" + 1)].y = this.round(-1 * ((this.shopscreen.shop1.scrollz.y - 76) / 127) * ((this.shopmax[this.shopnum] - 6) * 50 - 15 + 42) + 42);
    }
    else if (this.scrolln == 4)
    {
        if (this.scrollmount > 0)
        {
            if (this.shopscreen.shop1.a1.y + this.scrollmount * 6 < this.oriy)
            {
                this.shopscreen.shop1[("a" + 1)].y = this.shopscreen.shop1[("a" + 1)].y + this.scrollmount * 6;
            }
            else
            {
                this.shopscreen.shop1[("a" + 1)].y = 42;
            }
        }
        else if (this.shopscreen.shop1.a1.y + this.scrollmount * 6 > this.oriy - (this.shopmax[this.shopnum] - 6) * 50 - 15)
        {
            this.shopscreen.shop1[("a" + 1)].y = this.shopscreen.shop1[("a" + 1)].y + this.scrollmount * 6;
        }
        else if (this.shopmax[this.shopnum] > 6)
        {
            this.shopscreen.shop1[("a" + 1)].y = -1 * ((this.shopmax[this.shopnum] - 6) * 50 - 15 + 42) + 44;
        }
        this.shopscreen.shop1.scrollz.y = 127 * (-1 * (this.shopscreen.shop1.a1.y - 42) / ((this.shopmax[this.shopnum] - 6) * 50 - 15 + 42)) + 76;
    }
    if (this.scrolln > 0)
    {
        this.i = this.shopmax[this.shopnum] + 1;
        do
        {

            this.shopscreen.shop1["a" + this.i].y = this.shopscreen.shop1[("a" + 1)].y + (this.i - 1) * 50;
            this.shopscreen.shop1["a" + this.i].cacheAsBitmap = true;
            var _loc_2:String = this;
            _loc_2.i = this.i - 1;
        }while (--this.i > 0)
    }
    else if (this.scrolln == 0)
    {
        this.scrolln = -1;
        if (this.shopscreen.shop1[("a" + 1)].cacheAsBitmap == true)
        {
            this.i = this.shopmax[this.shopnum] + 1;
            do
            {

                this.shopscreen.shop1["a" + this.i].cacheAsBitmap = false;
                var _loc_2:String = this;
                _loc_2.i = this.i - 1;
            }while (--this.i > 0)
        }
    }
    if (this.sctimer < 0)
    {
        this.scrolln = 0;
        this.sctimer = 4;
    }
    else if (this.sctimer !== 4)
    {
        this.sctimer = this.sctimer - 2;
    }
    if (this.shopscreen.glows.alpha > 0)
    {
        this.shopscreen.glows.alpha = this.shopscreen.glows.alpha - 0.25;
    }
    else
    {
        this.shopscreen.glows.visible = false;
    }
    this.currentshop2 = this.currentshop;
    this.shopmove2 = this.shopmove;
    if (this.shopmove == 1 || this.shopmove == 2 || this.shopmove == 4 || this.shopmove == 5 || this.shopmove == 6 || this.shopmove == 9)
    {
        this.shopmove2 = 1;
        if (this.currentshop == 1 || this.currentshop == 2 || this.currentshop == 4 || this.currentshop == 5 || this.currentshop == 6 || this.currentshop == 9)
        {
            this.currentshop2 = 10;
        }
    }
    else if (this.currentshop == 1 || this.currentshop == 2 || this.currentshop == 4 || this.currentshop == 5 || this.currentshop == 6 || this.currentshop == 9)
    {
        this.currentshop2 = 1;
    }
    if (this.shopmove !== 0)
    {
        this.shopArray[this.shopmove2].y = this.shopArray[this.shopmove2].y + (this.shopscreen.glows.y - this.shopArray[this.shopmove2].y) / 3;
        this.shopArray[this.shopmove2].y = this.floor(this.shopArray[this.shopmove2].y);
        if (this.shopmove !== this.currentshop)
        {
            this.shopscreen["b" + this.shopmove].visible = false;
            this.shopscreen["bb" + this.shopmove].x = this.bbx + 7;
            this.shopscreen["b" + this.currentshop].visible = true;
        }
        this.shopscreen.glows.alpha = 1;
        this.shopscreen.glows.visible = true;
        this.shopArray[this.currentshop2].y = this.shopArray[this.currentshop2].y + (-500 - this.shopArray[this.currentshop2].y) / 3;
        this.shopArray[this.currentshop2].y = this.floor(this.shopArray[this.currentshop2].y);
        if (this.shopArray[this.currentshop2].y < -498)
        {
            if (this.shopmove !== this.currentshop)
            {
                this.shopscreen["bb" + this.currentshop].x = this.bbx;
            }
            if (this.tutoncex == true && this.shopmove == 4)
            {
                this.tutoncex = false;
                this.tutshow(2, "Neko III", "To use different missiles you need to drag the missile icon to the skill bar.");
            }
            if (this.tutoncex2 == true && this.shopmove == 9)
            {
                this.tutoncex2 = false;
                this.tutshow(2, "Neko III", "Drag the item to the skill bar to use it in flight. You can\'t buy items, only collect them.");
            }
            this.shopArray[this.currentshop2].y = 501;
            this.shopArray[this.shopmove2].y = this.shopscreen.glows.y;
            this.orishop(this.shopscreen.shop1, this.idiff);
            this.currentshop = this.shopmove;
            this.shopmove = 0;
        }
    }
}
if (this.missionnow == 2)
{
    if (this.mission.ax.y < 371)
    {
        this.mission.ax.y = this.mission.ax.y + (371 - this.mission.ax.y) / 5;
        this.mission.ax.y = this.round(this.mission.ax.y);
    }
    if (this.missiontimer > 0)
    {
        (this.missiontimer - 1);
        if (this.missiontimer == 30)
        {
            this.mission.m1.visible = true;
        }
        else if (this.missiontimer == 25)
        {
            this.mission.o1.visible = true;
        }
        else if (this.missiontimer == 15)
        {
            this.mission.r1.visible = true;
        }
        else if (this.missiontimer == 10)
        {
            this.mission.r2.visible = true;
        }
    }
    if (this.missiontimer2 > 0)
    {
        this.mission.d1.text = this.mission.d1.text + this.missiontext[this.missiontimer3 - this.missiontimer2];
        (this.missiontimer2 - 1);
    }
}
else if (this.missionnow == 3)
{
    this.missionlisten();
    this.missionshowf();
}
if (this.avatarnow == 3)
{
    this.avatarshowf();
    this.avatarlisten();
}
if (this.hp <= 0)
{
    if (this.pausescreen.currentFrame !== 5)
    {
        this.pausescreen.gotoAndStop(5);
        this.pausescreen.visible = false;
    }
}
if (this.BOSSFIND == 6 && this.qualityx == 1 || this.pausegame == true)
{
    if (this.warpspeed > 0)
    {
        (this.warpspeed - 1);
    }
    else if (this.abs(this.wspeed) < 2)
    {
        this.wspeed = 0;
    }
    else
    {
        if (this.wspeed > 0)
        {
            (this.wspeed - 1);
        }
        if (this.wspeed < 0)
        {
            (this.wspeed + 1);
        }
    }
    if (this.stoptime == 0)
    {
        this.bg1.yx = this.bg1.yx - (1 + this.wspeed / 3);
        if (this.bg1.yx < 0)
        {
            this.bg1.yx = 1000;
        }
        if (this.bg1.yx > 1000)
        {
            this.bg1.yx = 0;
        }
    }
    this.bg1.scrollRect = new Rectangle(20 - this.ceil(this.offsetx / 1.5), this.ceil(this.bg1.yx), 700, 500);
    this.i = this.smshipnum + 1;
    do
    {

        if (this.qualityx !== 3)
        {
            if (this.stoptime == 0)
            {
                this.smshipArray[this.i].yc = this.smshipArray[this.i].yc + (this.smshipArray[this.i].speedx * 2 + 2 + this.wspeed / 2);
                if (this.smshipArray[this.i].y > 600)
                {
                    this.smshipArray[this.i].xc = Math.random() * 700;
                    this.smshipArray[this.i].ax.gotoAndStop(this.levelx + this.floor(Math.random() * 5));
                    this.smshipArray[this.i].ax.cacheAsBitmap = true;
                    this.smshipArray[this.i].yc = -100 - Math.random() * 500;
                }
            }
            this.smshipArray[this.i].x = this.ceil(this.smshipArray[this.i].xc) + this.ceil(this.offsetx * 1.75);
            this.smshipArray[this.i].y = this.ceil(this.smshipArray[this.i].yc);
        }
        else
        {
            this.smshipArray[this.i].y = -400;
        }
        var _loc_2:String = this;
        _loc_2.i = this.i - 1;
    }while (--this.i > 0)
    if (this.qualityx !== 3)
    {
        if (this.stoptime == 0)
        {
            this.cont3y = this.cont3y - (1.3 + this.wspeed / 2.5);
        }
        if (this.cont3y < -500 - 250)
        {
            this.cont3y = 1000 + 250;
            this.i = this.smship2num + 1;
            do
            {

                this.smship2Array[this.i].x = this.ceil(Math.random() * 700);
                this.smship2Array[this.i].y = this.ceil(Math.random() * 1000);
                this.smship2Array[this.i].ax.gotoAndStop(this.ceil(Math.random() * 4));
                var _loc_2:String = this;
                _loc_2.i = this.i - 1;
            }while (--this.i > 0)
        }
        this.cont3.scrollRect = new Rectangle(-this.ceil(this.offsetx * 1.75), this.ceil(this.cont3y), 700, 500);
    }
    else
    {
        this.cont3.scrollRect = new Rectangle(0, 3000, 1, 1);
    }
    this.i = this.starnum + 1;
    do
    {

        if (this.stoptime == 0)
        {
            this.starArray[this.i].y = this.starArray[this.i].y + this.ceil(this.starArray[this.i].alpha * 4 + this.wspeed / 2);
            if (this.starArray[this.i].y > 500)
            {
                this.starArray[this.i].y = -this.ceil(Math.random() * 10) - 10;
                this.starArrayXc[this.i] = Math.random() * 750 - 25;
            }
        }
        this.starArrayXc[this.i] = this.starArrayXc[this.i] + this.ochangex * (this.starArray[this.i].alpha + 0.3);
        this.starArray[this.i].x = this.ceil(this.starArrayXc[this.i]);
        var _loc_2:String = this;
        _loc_2.i = this.i - 1;
    }while (--this.i > 0)
    this.cont1x = -this.ceil(this.offsetx * 2.5);
    if (this.stoptime == 0)
    {
        this.cont1y = this.cont1y - (2 + this.wspeed / 1.6);
        this.cont2y = this.cont2y - (2 + this.wspeed / 1.6);
        if (this.cont1y <= -500)
        {
            this.cont1y = 500;
            this.cont2y = 0;
            this.createobjects(this.cont1, 0);
        }
        if (this.cont2y <= -500)
        {
            this.cont2y = 500;
            this.cont1y = 0;
            this.createobjects(this.cont2, 20);
        }
    }
    this.cont1.scrollRect = new Rectangle(this.cont1x, this.ceil(this.cont1y), 700, 500);
    this.cont2.scrollRect = new Rectangle(this.cont1x, this.ceil(this.cont2y), 700, 500);
}
if (this.pausegame)
{
    if (this.stoptime == 0)
    {
        (this.leveltimec + 1);
    }
    if (this.timehalf)
    {
        this.timehalf = false;
    }
    else
    {
        this.timehalf = true;
    }
    if (this.timethird < 3)
    {
        (this.timethird + 1);
    }
    else
    {
        this.timethird = 1;
    }
    if (this.negmode == 3 || this.stealthmode !== 0 || this.deathmode == true)
    {
        this.shoot = false;
    }
    if (this.negmode == 8)
    {
        this.numuse = Math.random();
        if (this.numuse < 0.2)
        {
            this.speedx = this.numuse * 450 - 45;
        }
        this.numuse = Math.random();
        if (this.numuse < 0.2)
        {
            this.speedy = this.numuse * 450 - 45;
        }
    }
    if (this.abs(this.speedx) < 1)
    {
        this.speedx = 0;
    }
    else
    {
        this.speedx = this.speedx / (this.decay + this.slowdown);
    }
    if (this.abs(this.speedy) < 1)
    {
        this.speedy = 0;
    }
    else
    {
        this.speedy = this.speedy / (this.decay + this.slowdown);
    }
    if (this.mousecontrol == false)
    {
        if (this.yneg > 0.1)
        {
            this.yneg = this.yneg / 1.25;
            this.ship.y = this.ship.y + this.yneg;
        }
        else
        {
            this.yneg = 0;
        }
        if (this.negmode !== 2 && this.deathmode == false)
        {
            this.shipx = this.shipx + this.speedx;
            if (this.speedy > 0)
            {
                this.shipy = this.shipy + this.speedy;
            }
            else
            {
                this.shipy = this.shipy + this.speedy / (1 + this.yneg);
            }
        }
        this.rebound = this.speed / 1.5;
        if (this.ship.x < this.boundall)
        {
            this.speedx = this.speedx / 2;
            this.speedx = this.speedx + this.rebound;
        }
        if (this.hp > 0)
        {
            if (this.ship.x > 700 - this.boundall)
            {
                this.speedx = this.speedx / 2;
                this.speedx = this.speedx - this.rebound;
            }
        }
        if (this.ship.y < this.boundall)
        {
            this.speedy = this.speedy / 2;
            this.speedy = this.speedy + this.rebound;
        }
        if (this.ship.y > 490 - this.boundall)
        {
            this.speedy = this.speedy / 2;
            this.speedy = this.speedy - this.rebound;
        }
        if (this.moveLeft)
        {
            if (this.ship.x > (this.boundall + 1) && this.ship.x < 701 - this.boundall)
            {
                this.speedx = this.speedx - this.speed * this.oppositedirection;
            }
        }
        if (this.moveRight)
        {
            if (this.ship.x < 701 - this.boundall && this.ship.x > (this.boundall + 1))
            {
                this.speedx = this.speedx + this.speed * this.oppositedirection;
            }
        }
        if (this.moveUp)
        {
            if (this.ship.y > (this.boundall + 1) && this.ship.y < 491 - this.boundall)
            {
                this.speedy = this.speedy - this.speed * this.oppositedirection;
            }
        }
        if (this.moveDown)
        {
            if (this.ship.y < 501 - this.boundall && this.ship.y > (this.boundall + 1))
            {
                this.speedy = this.speedy + this.speed * this.oppositedirection;
            }
        }
    }
    if (this.mousecontrol)
    {
        this.mousepointer.visible = false;
        Mouse.hide();
        this.lockon = false;
        if (this.negmode == 8)
        {
            this.numuse = Math.random();
            if (this.numuse < 0.2)
            {
                this.shipx = this.shipx + (this.numuse * 450 - 45);
            }
            this.numuse = Math.random();
            if (this.numuse < 0.2)
            {
                this.shipy = this.shipy + (this.numuse * 450 - 45);
            }
        }
        if (this.negmode == 7 || this.negmode == 8)
        {
            this.shipy = this.shipy + (mouseY - this.shipy) / 10;
            this.shipx = this.shipx + (mouseX - this.shipx) / 10;
        }
        else if (this.negmode !== 2)
        {
            this.shipy = this.shipy + (mouseY - this.shipy) / 1.5;
            this.shipx = this.shipx + (mouseX - this.shipx) / 1.5;
        }
        else
        {
            Mouse.show();
        }
        this.shipy = this.shipy + this.speedy;
        this.shipx = this.shipx + this.speedx;
        if (this.shipy > 480)
        {
            this.shipy = 480;
        }
        if (this.shipy < 20)
        {
            this.shipy = 20;
        }
        if (this.shipx > 780)
        {
            this.shipx = 780;
        }
        if (this.shipx < 20)
        {
            this.shipx = 20;
        }
    }
    if (this.shipy < 75)
    {
        (this.shipy + 1);
    }
    this.ship.x = this.ceil(this.shipx);
    this.ship.y = this.ceil(this.shipy);
    if (this.mousecontrol)
    {
        this.offsetx2 = (-(this.ship.x - 350)) / 40;
        this.offsetx = this.offsetx + (this.offsetx2 - this.offsetx) / 2;
        this.ochangex = this.offsetx2 - this.offsetx;
    }
    else
    {
        this.offsetx2 = (-(this.ship.x - 350)) / 10;
        this.offsetx = this.offsetx + (this.offsetx2 - this.offsetx) / 2;
        this.ochangex = this.offsetx2 - this.offsetx;
    }
    if (this.hp <= 0)
    {
        if (this.itemx[31] >= 3 && this.itemx[31] < 10 && this.savexonce == false)
        {
            this.savexonce = true;
            if (this.thp >= this.item31f())
            {
                this.hp = this.item31f();
            }
            else
            {
                this.hp = this.thp;
            }
            if (this.tshp >= this.item31f())
            {
                this.shp = this.item31f();
            }
            else
            {
                this.shp = this.tshp;
            }
            this.bonusdisplay("Second Chance!", 3);
            this.expl(this.ship.x, this.ship.y, 118);
        }
        else
        {
            if (this.thp !== 555555)
            {
                this.currentMusic = this.dmusic;
                this.fademusic = 1;
                this.risktaker = 0;
                this.BOSSFIND = 0;
                this.thp = 555555;
                this.shp = -10;
                this.deathmode = true;
                this.ship.visible = false;
                this.deathscreen.visible = true;
                this.deathscreen.gotoAndPlay(2);
                this.expl(this.ship.x, this.ship.y, 105);
                this.soundf(this.bosssound);
                this.lockpause = false;
            }
            if (this.deathscreen.currentFrame == 2)
            {
                this.deathscreen.ax2.kg.addEventListener(MouseEvent.MOUSE_UP, this.gotoKong);
                this.deathscreen.ax2.a1.addEventListener(MouseEvent.MOUSE_UP, this.loadgamef);
                this.deathscreen.ax2.a2.addEventListener(MouseEvent.MOUSE_UP, this.newgamefun);
                this.deathscreen.ax.x = this.ship.x;
                this.deathscreen.ax.y = this.ship.y;
                this.deathscreen.ax.gotoAndPlay(1);
                this.deathscreen.ax2.a3.text = "You Scored: " + this.commaf(this.scorer(this.score));
                this.deathscreen.ax2.a4.text = "Rank: " + this.scoretell(this.score);
                this.deathscreen.ax2.visible = false;
            }
            this.hp = -1;
            Mouse.show();
            this.stealthmode = 10;
            this.shp = -10;
            if (this.timehalf)
            {
                this.expl(this.ship.x - 25 + Math.random() * 50, this.ship.y - 25 + Math.random() * 50, 109);
            }
        }
    }
    if (this.skatimer <= 0)
    {
        if (this.hp + this.shp < 20)
        {
            (this.risktaker + 1);
            this.expl(this.ship.x, this.ship.y, 112);
            this.skatimer = 100;
        }
    }
    else
    {
        (this.skatimer - 1);
    }
    if (this.replayx == 4)
    {
        this.bars.na.timex.text = "Nekon Attack ( " + (this.leveltimec / 24).toFixed(1) + " Seconds )";
        this.bars.na.orb.text = this.orbcounter + " Nekon Orbs";
    }
    if (this.BOSSFIND == 2)
    {
        this.bars.bosshp.alpha = 0.5;
        this.bars.bosshp.visible = true;
        this.bars.bhp.visible = true;
        this.bars.bosshp.ax.height = this.round(245 * (this.bosshp / this.bossthp) / 5) * 5;
        if (this.bars.bosshp.ax.height <= 35)
        {
            this.bars.bhp.y = -377;
        }
        else
        {
            this.bars.bhp.y = this.round(-439 + this.bars.bosshp.ax.height * 1.78);
        }
    }
    else
    {
        this.bars.bhp.visible = false;
        this.bars.bosshp.visible = false;
    }
    this.bars.a1.ax.width = this.bars.a1.ax.width + (200 * (this.shp / this.tshp) - this.bars.a1.ax.width) / 3;
    this.bars.a2.ax.width = this.bars.a2.ax.width + (200 * (this.hp / this.thp) - this.bars.a2.ax.width) / 3;
    this.bars.a3.ax.width = this.bars.a3.ax.width + (200 * (this.ep / this.tep) - this.bars.a3.ax.width) / 3;
    if (this.shp <= 0)
    {
        this.bars.a1.visible = false;
    }
    else
    {
        this.bars.a1.visible = true;
    }
    if (this.thp == 555555)
    {
        this.bars.a2.visible = false;
    }
    else
    {
        this.bars.a2.visible = true;
    }
    this.bars.a1.ax3.alpha = this.bars.a1.ax.width / 200;
    this.bars.a2.ax3.alpha = this.bars.a2.ax.width / 200;
    this.bars.a3.ax3.alpha = this.bars.a3.ax.width / 200;
    this.bars.a1.ax2.text = this.round(this.shp) + " Shield";
    this.bars.a2.ax2.text = this.round(this.hp) + " Armor";
    this.bars.a3.ax2.text = this.round(this.ep) + " Energy";
    this.bars.a1.x = this.bars.a1.x + (-20 - this.bars.a1.x) / 5;
    this.bars.a2.x = this.bars.a2.x + (-10 - this.bars.a2.x) / 5;
    (this.timeten - 1);
    if (this.timeten < 0)
    {
        this.timeten = 20;
        this.bars.a4.ax.text = this.commaf(this.round(this.gold)) + " Gold";
        if (this.shp > this.tshp + 500)
        {
            this.cheater = 4;
        }
        if (this.hp > this.thp + 500)
        {
            this.cheater = 4;
        }
        if (this.ep > this.tep + 500)
        {
            this.cheater = 4;
        }
    }
    if (this.levelx == 36)
    {
        this.bars.a4.ax2.text = "Boss World";
    }
    else
    {
        this.bars.a4.ax2.text = "Level " + this.levelx;
    }
    if (this.cheater == 2)
    {
        this.bars.a4.ax2.text = this.bars.a4.ax2.text + " (Cheats)";
    }
    else if (this.cheater == 4)
    {
        this.bars.a4.ax2.text = this.bars.a4.ax2.text + " (C 341)";
    }
    else if (this.cheater == 5)
    {
        this.bars.a4.ax2.text = this.bars.a4.ax2.text + " (C 203)";
    }
    if (this.tutlevel >= 2)
    {
        this.bars.a4.ax3.text = "Tutorial";
    }
    else if (this.replayx == 4)
    {
        this.bars.a4.ax3.text = "Nekon Attack";
    }
    else if (this.leveltimer > 0)
    {
        this.bars.a4.ax3.text = this.ceil(this.leveltimer / 24);
    }
    else if (this.replayx == 1 || this.overrideboss == true)
    {
        this.bars.a4.ax3.text = "BOSS";
    }
    else
    {
        this.bars.a4.ax3.text = "0";
    }
    this.bars.a4.ax2.x = this.bars.a4.ax.x - this.bars.a4.ax.textWidth - 5;
    this.bars.a4.ax.x = this.bars.a4.ax3.x - this.bars.a4.ax3.textWidth - 5;
    if (this.bars.a1.x < -16)
    {
        this.bars.a1.transform.colorTransform = new ColorTransform();
    }
    if (this.bars.a2.x < -6)
    {
        this.bars.a2.transform.colorTransform = new ColorTransform();
    }
    if (this.shp <= 0)
    {
        if (this.shieldtimer <= 0)
        {
            this.shieldtimer = 100;
        }
        this.bars.a4.y = 5;
    }
    else
    {
        this.bars.a4.y = -10;
    }
    if (this.shieldtimer > 0)
    {
        if (this.shp > 0)
        {
            this.shieldtimer = 0;
        }
        (this.shieldtimer - 1);
        if (this.shieldtimer == 1)
        {
            if (this.tshp >= 10)
            {
                this.shp = 10;
            }
            else
            {
                this.shp = this.tshp;
            }
        }
    }
    else if (this.shieldcharge < 0)
    {
        this.shieldcharge = this.chargedelay;
        if (this.shp < this.tshp)
        {
            (this.shp + 1);
            if (this.itemx[27] >= 3 && this.itemx[27] < 10)
            {
                this.shp = this.shp + this.item27f() / 2;
            }
        }
    }
    else
    {
        (this.shieldcharge - 1);
    }
    if (this.itemx[9] == 3)
    {
        if (this.armorcharge < 0)
        {
            this.armorcharge = 30;
            if (this.hp < this.thp)
            {
                (this.hp + 1);
            }
        }
        else
        {
            (this.armorcharge - 1);
        }
    }
    if (this.itemx[8] >= 3 && this.itemx[8] < 10)
    {
        if (this.ep <= 0 && this.allowexp)
        {
            this.allowexp = false;
            this.expl(this.ship.x, this.ship.y, 104);
            this.shipdamage(10 + this.levelx * 5);
            this.bonusdisplay("Nuclear System Explosion", 3);
        }
        if (this.ep > 20)
        {
            this.allowexp = true;
        }
    }
    if (this.itemx[13] == 3)
    {
        if (this.bonustimer > 0)
        {
            this.bonustimer = this.bonustimer + 0.5;
        }
    }
    if (this.itemx[14] == 3)
    {
        if (this.lasertimer > 0)
        {
            (this.lasertimer - 1);
        }
        if (this.lasertimer <= 0 && this.shoot == true)
        {
            this.lasertimer = 30;
            this.weaponfire(this.ship, 0, 21, 0, 0);
        }
    }
    if (this.itemx[17] == 3)
    {
        if (this.negmode !== 9)
        {
            if (this.negtimer > 0)
            {
                (this.negtimer - 1);
            }
        }
    }
    if (this.itemx[23] == 3)
    {
        if (this.hp + this.shp < (this.thp + this.tshp) / 7 && this.ep > 1)
        {
            if (this.healing <= 0 && this.ep >= 0)
            {
                if (this.healingthis !== 0)
                {
                    this.skillsf(this.skillsArray[this.healingthis], this.healingthis);
                }
            }
        }
    }
    if (this.itemx[24] == 3)
    {
        if (this.BOSSFIND == 0)
        {
            this.goldf(25 + this.levelx * 3);
        }
    }
    if (this.itemx[28] >= 3 && this.itemx[28] < 10)
    {
        if (this.mgentimer <= 0)
        {
            this.mgentimer = 120;
            this.i = 10 + 1;
            do
            {

                if (this.missleTracker[this.i + 19] !== 0)
                {
                    this.missleAmmo[this.i + 19] = this.missleAmmo[this.i + 19] + this.item28f();
                }
                var _loc_2:String = this;
                _loc_2.i = this.i - 1;
            }while (--this.i > 0)
        }
        else
        {
            (this.mgentimer - 1);
        }
    }
    if (this.itemx[30] >= 3 && this.itemx[30] < 10)
    {
        if (Math.random() < this.item30f() / 1000)
        {
            this.reftimer = 20;
        }
    }
    if (this.negtimercanx <= 0)
    {
        if (this.negthis !== 0)
        {
            if (this.negmode !== 5)
            {
                if (this.itemx[32] == 3)
                {
                    if (this.negtimer > 0)
                    {
                        if (this.ep >= (10 - (this.itemx[113] - 3)) * this.epmulti)
                        {
                            this.bonusdtimer = 7;
                            this.skillsf(this.skillsArray[this.negthis], this.negthis);
                            this.bonusdtimer = -1;
                            this.bonusdisplay("Auto Neg. Effect Canceller", 3);
                        }
                    }
                }
            }
        }
    }
    else
    {
        (this.negtimercanx - 1);
    }
    if (this.itemx[33] == 3)
    {
        if (this.bonustimer > 0)
        {
            this.bonustimer = 10;
        }
    }
    if (this.itemx[301] == 1)
    {
        if (this.ekill > 100)
        {
            this.achievef(301);
        }
    }
    if (this.itemx[345] == 1)
    {
        if (this.ekill > 10000)
        {
            this.achievef(345);
        }
    }
    if (this.itemx[303] == 1)
    {
        if (this.gold > 200000)
        {
            this.achievef(303);
        }
    }
    if (this.itemx[305] == 1)
    {
        if (this.assnum >= 25)
        {
            this.achievef(305);
        }
    }
    if (this.ekillt > 0)
    {
        (this.ekillt - 1);
    }
    if (this.itemx[306] == 1)
    {
        if (this.ekillt >= 11)
        {
            this.achievef(306);
        }
    }
    if (this.itemx[323] == 1)
    {
        if (this.ekillt > 20)
        {
            this.achievef(323);
        }
    }
    if (this.itemx[308] == 1)
    {
        if (this.bcollect >= 300)
        {
            this.achievef(308);
        }
    }
    if (this.itemx[328] == 1)
    {
        if (this.bcollect >= 2000)
        {
            this.achievef(328);
        }
    }
    if (this.itemx[310] == 1)
    {
        if (this.misslefirec >= 1000)
        {
            this.achievef(310);
        }
    }
    if (this.itemx[311] == 1)
    {
        if (this.ekill > 500)
        {
            this.achievef(311);
        }
    }
    if (this.itemx[312] == 1)
    {
        if (this.bkill > 3)
        {
            this.achievef(312);
        }
    }
    if (this.itemx[315] == 1)
    {
        if (this.gold > 1000000)
        {
            this.achievef(315);
        }
    }
    if (this.itemx[334] == 1)
    {
        if (this.gold > 5000000)
        {
            this.achievef(334);
        }
    }
    if (this.itemx[316] == 1)
    {
        if (this.sdestroyer > 9)
        {
            this.achievef(316);
        }
    }
    if (this.itemx[331] == 1)
    {
        if (this.ekill > 2000)
        {
            this.achievef(331);
        }
    }
    if (this.itemx[324] == 1)
    {
        if (this.risktaker > 4)
        {
            this.achievef(324);
        }
    }
    if (this.itemx[325] == 1)
    {
        if (this.bkill > 9)
        {
            this.achievef(325);
        }
    }
    if (this.achonce)
    {
        this.achonce = false;
        if (this.itemx[309] == 1)
        {
            if (this.shipbuynum >= 5)
            {
                this.achievef(309);
            }
        }
        if (this.itemx[321] == 1)
        {
            if (this.equipnum >= 10)
            {
                this.achievef(321);
            }
        }
        if (this.itemx[322] == 1)
        {
            if (this.testvari == false)
            {
                this.achievef(322);
            }
        }
    }
    (this.handicounter + 1);
    if (this.handicounter > 500)
    {
        this.handicounter = 0;
        this.handival = 1;
        if (this.ecthis > 15)
        {
            this.numuse = (this.ekillthis + 1) / (this.ecthis + 1);
            if (this.numuse < 0.2)
            {
                this.handival = 0.6;
            }
            else if (this.numuse < 0.4)
            {
                this.handival = 0.8;
            }
            else if (this.numuse < 0.6)
            {
                this.handival = 0.9;
            }
            else if (this.numuse > 0.9)
            {
                this.handival = 1.1;
            }
            else if (this.numuse > 0.97)
            {
                this.handival = 1.2;
            }
        }
    }
    if (this.imagelevel < 3)
    {
        if (this.leveltimec > 100 + this.imagelevel * 100)
        {
            (this.imagelevel + 1);
            this.imagecapture(this.imagelevel);
        }
    }
    if (this.replayx == 4)
    {
        this.leveltimer = 200;
        if (this.orbcounter >= this.orbtotal)
        {
            this.leveltimer = -201;
        }
        if (this.leveltimec > this.timemax)
        {
            this.leveltimer = -201;
        }
    }
    if (this.leveltimer < 0)
    {
        if (this.replayx == 1 || this.overrideboss == true)
        {
            if (this.BOSSFIND == 0)
            {
                this.BOSSFIND = 1;
            }
        }
        else if (this.replayx == 4)
        {
            if (this.BOSSFIND == 0)
            {
                this.BOSSFIND = 4;
                this.leveltimer = -201;
                this.chatlevel = 0;
            }
        }
        else if (this.replayx !== 1)
        {
            if (Math.random() < 0.93)
            {
                if (this.BOSSFIND == 0)
                {
                    this.BOSSFIND = 4;
                    this.chatlevel = 10;
                }
            }
            else if (this.BOSSFIND == 0)
            {
                this.chatlevel = 0;
                this.BOSSFIND = 1;
            }
        }
    }
    if (this.missionshow !== -1)
    {
        if (this.missionshow <= 0)
        {
            this.bonuscreate(Math.random() * 600 + 50, 0, 3, 7);
            this.missionshow = -1;
        }
    }
    if (this.avatarshow !== -1)
    {
        if (this.avatarshow <= 0)
        {
            this.bonuscreate(Math.random() * 600 + 50, 0, 4, 7);
            this.avatarshow = -1;
        }
    }
    if (this.noteshow !== -1)
    {
        if (this.noteshow <= 0)
        {
            this.bonuscreate(Math.random() * 600 + 50, 0, 6, 7);
            this.noteshow = -1;
        }
    }
    if (this.stoptime == 0)
    {
        if (this.hp > 0)
        {
            if (this.wspeed >= 0)
            {
                this.leveltimer = this.leveltimer - this.floor(1 + this.wspeed / 5);
                if (this.missionshow !== -1)
                {
                    this.missionshow = this.missionshow - this.floor(1 + this.wspeed / 5);
                }
                if (this.avatarshow !== -1)
                {
                    this.avatarshow = this.avatarshow - this.floor(1 + this.wspeed / 5);
                }
                if (this.noteshow !== -1)
                {
                    this.noteshow = this.noteshow - this.floor(1 + this.wspeed / 5);
                }
            }
            else
            {
                (this.leveltimer - 1);
                if (this.missionshow !== -1)
                {
                    (this.missionshow - 1);
                }
                if (this.avatarshow !== -1)
                {
                    (this.avatarshow - 1);
                }
                if (this.noteshow !== -1)
                {
                    (this.noteshow - 1);
                }
            }
        }
    }
    if (this.bossscreentimer > 0)
    {
        (this.bossscreentimer - 1);
        this.bossscreen.visible = true;
        this.bossscreen.alpha = this.bossscreen.alpha + 0.05;
    }
    else if (this.bossscreen.alpha > 0)
    {
        this.bossscreen.alpha = this.bossscreen.alpha - 0.05;
    }
    if (this.bonusdtimer >= 0)
    {
        if (this.keydown == false)
        {
            this.bonusdtimer = this.bonusdtimer - 10;
        }
        else
        {
            (this.bonusdtimer - 1);
        }
    }
    this.i = this.dispnum + 1;
    do
    {

        if (this.dispArray[this.i].useok == false)
        {
            if (this.dispArray[this.i].fmode == false)
            {
                if (this.dispArray[this.i].alpha < 1)
                {
                    this.dispArray[this.i].alpha = this.dispArray[this.i].alpha + 0.1;
                }
                else
                {
                    this.dispArray[this.i].fmode = true;
                }
            }
            else if (this.dispArray[this.i].alpha > 0)
            {
                this.dispArray[this.i].alpha = this.dispArray[this.i].alpha - 0.025;
            }
            else
            {
                this.dispArray[this.i].y = -50;
                this.dispArray[this.i].useok = true;
            }
            this.dispArray[this.i].x = this.dispArray[this.i].x + this.ochangex * 2;
            (this.dispArray[this.i].y + 1);
            if (this.dispArray[this.i].y > 520)
            {
                this.dispArray[this.i].y = -50;
                this.dispArray[this.i].useok = true;
            }
        }
        var _loc_2:String = this;
        _loc_2.i = this.i - 1;
    }while (--this.i > 0)
    this.mousepointer.x = this.ceil(mouseX);
    this.mousepointer.y = this.ceil(mouseY);
    this.mousepointer.pointx.rotation = this.ceil(this.mainrot);
    this.ship.ax.t1.height = (-this.speedy) / 2 + this.oriheight;
    this.ship.ax.rotation = this.ceil(this.mainrot);
    this.ship.rotationx = this.ship.ax.rotation;
    if (this.lockon)
    {
        if (this.ship.x - this.mousepointer.x < 0)
        {
            this.mainrot = this.atan((this.ship.y - this.mousepointer.y) / (this.ship.x - this.mousepointer.x)) * this.toDegrees + 90;
        }
        else
        {
            this.mainrot = this.atan((this.ship.y - this.mousepointer.y) / (this.ship.x - this.mousepointer.x)) * this.toDegrees - 90;
        }
        if (this.ship.ax.ax.cacheAsBitmap == true)
        {
            this.ship.ax.ax.cacheAsBitmap = false;
        }
    }
    else
    {
        if (this.ship.ax.ax.cacheAsBitmap == false)
        {
            this.ship.ax.ax.cacheAsBitmap = true;
        }
        this.mainrot = 0;
    }
    if (this.negcool > 0)
    {
        (this.negcool - 1);
    }
    if (this.negtimer <= 0)
    {
        if (this.negmode !== 1)
        {
            this.negmode = 1;
            this.negchange();
        }
        if (this.resettint > 0)
        {
            this.resettint = -1;
            this.shiptint.setTint(16777215, 0.04);
            this.ship.ax.transform.colorTransform = this.shiptint;
            this.mshipArray[1].transform.colorTransform = new ColorTransform();
            this.mshipArray[2].transform.colorTransform = new ColorTransform();
            this.mshipArray2[1].transform.colorTransform = new ColorTransform();
            this.mshipArray2[2].transform.colorTransform = new ColorTransform();
            this.mshipArray2[3].transform.colorTransform = new ColorTransform();
            this.mshipArray3[1].transform.colorTransform = new ColorTransform();
            this.mshipArray4[1].transform.colorTransform = new ColorTransform();
        }
    }
    else
    {
        if (this.resettint > 0)
        {
            this.resettint = -1;
            this.ship.ax.transform.colorTransform = this.shiptint;
            this.mshipArray[1].transform.colorTransform = this.shiptint;
            this.mshipArray[2].transform.colorTransform = this.shiptint;
            this.mshipArray2[1].transform.colorTransform = this.shiptint;
            this.mshipArray2[2].transform.colorTransform = this.shiptint;
            this.mshipArray2[3].transform.colorTransform = this.shiptint;
            this.mshipArray3[1].transform.colorTransform = this.shiptint;
            this.mshipArray4[1].transform.colorTransform = this.shiptint;
        }
        (this.negtimer - 1);
        if (this.negmode == 9)
        {
            if (this.negtimer % 24 == 0)
            {
                this.bonusdisplay("Death in " + this.round(this.negtimer / 24), 6);
                this.expl(this.ship.x, this.ship.y, 126);
                if (this.round(this.negtimer / 24) == 0)
                {
                    this.shp = -1;
                    this.hp = -1;
                }
            }
        }
    }
    if (this.ship.x < 60)
    {
        (this.shipx + 1);
    }
    if (this.ship.x > 640)
    {
        (this.shipx - 1);
    }
    if (this.ship.y > 435 && this.ship.x < 400)
    {
        (this.skillatimer + 1);
        if (this.skillatimer > 6)
        {
            this.skills.alpha = 0.2;
        }
        (this.ship.y - 1);
    }
    else
    {
        this.skillatimer = 0;
        this.skills.alpha = 1;
    }
    this.skilltest = 0;
    if (this.warpspeed > 0)
    {
        if (this.wspeed < 12)
        {
            (this.wspeed + 1);
        }
        (this.skilltest + 1);
    }
    if (this.stealthmode > 0 && this.ep > 0)
    {
        (this.stealthmode - 1);
        this.epf(0.15);
        this.ship.blendMode = BlendMode.OVERLAY;
        (this.skilltest + 1);
    }
    else
    {
        this.ship.blendMode = BlendMode.NORMAL;
        this.stealthmode = 0;
    }
    if (this.enemystop > 0 && this.ep > 0)
    {
        (this.enemystop - 1);
        this.epf(0.22);
        (this.skilltest + 1);
    }
    else
    {
        this.enemystop = 0;
    }
    if (this.enemybstun > 0)
    {
        (this.enemybstun - 1);
    }
    else
    {
        this.enemybstun = 0;
    }
    if (this.nburst > 0)
    {
        (this.nburst - 1);
    }
    else
    {
        this.nburst = 0;
    }
    if (this.healing > 0 && this.ep > 0)
    {
        (this.healing - 1);
        (this.skilltest + 1);
        if (this.healing % 6 == 0)
        {
            if (this.itemx[41] == 3)
            {
                this.intuse = 2;
            }
            else
            {
                this.intuse = 1;
            }
            if (this.hp < this.thp)
            {
                this.hp = this.hp + this.valuegain(this.hp, this.thp, (4 + (this.itemx[104] - 3) * 2) * this.intuse);
                this.epf(2 + (this.itemx[104] - 3) / 1.5);
                this.expl(this.ship.x, this.ship.y, 106);
            }
            else if (this.shp < this.tshp)
            {
                this.shp = this.shp + this.valuegain(this.shp, this.tshp, (4 + (this.itemx[104] - 3) * 2) * this.intuse);
                this.epf(2 + (this.itemx[104] - 3) / 1.5);
                this.expl(this.ship.x, this.ship.y, 106);
            }
            else
            {
                this.shp = this.tshp;
                this.hp = this.thp;
                this.healing = 0;
                this.skills["a" + this.healingsave].ax5.gotoAndStop(1);
            }
        }
    }
    else
    {
        this.healing = 0;
    }
    if (this.megablast > 0)
    {
        (this.megablast - 1);
        (this.skilltest + 1);
    }
    else
    {
        this.megablast = 0;
    }
    if (this.itemuset > 0)
    {
        (this.itemuset - 1);
    }
    else
    {
        this.itemuset = 0;
    }
    if (this.virusspread > 0)
    {
        (this.virusspread - 1);
        (this.skilltest + 1);
    }
    else
    {
        this.virusspread = 0;
    }
    if (this.bonusmag > 0 && this.ep > 0)
    {
        (this.bonusmag - 1);
        (this.skilltest + 1);
        this.epf(0.15);
    }
    else
    {
        this.bonusmag = 0;
    }
    if (this.oblivion > 0 && this.ep > 0)
    {
        (this.oblivion - 1);
        (this.skilltest + 1);
        this.epf(0.3);
    }
    else
    {
        this.oblivion = 0;
    }
    if (this.relentless > 0 && this.ep > 0)
    {
        (this.relentless - 1);
        this.weaponfire(this.ship, 0, 64, 0, 0);
        (this.skilltest + 1);
        this.epf(0.3);
    }
    else
    {
        this.relentless = 0;
    }
    if (this.shieldc > 0 && this.ep > 0 && this.reftimer == 0)
    {
        (this.shieldc - 1);
        this.epf(0.5 - (this.itemx[110] - 3) * 0.025);
        this.ship.sh.gotoAndStop(2);
        if (this.smallship)
        {
            this.shieldwc = 115;
        }
        else
        {
            this.shieldwc = 160;
        }
        (this.skilltest + 1);
    }
    if (this.reftimer > 0)
    {
        (this.reftimer - 1);
        if (this.shieldc <= 0)
        {
            this.shieldc = 2;
            if (this.smallship)
            {
                this.shieldwc = 115;
            }
            else
            {
                this.shieldwc = 160;
            }
            this.ship.sh.gotoAndStop(2);
        }
    }
    if (this.shieldda > 0 && this.ep > 0)
    {
        this.shieldc = 0;
        (this.shieldda - 1);
        this.epf(0.6 - (this.itemx[118] - 3) * 0.025);
        this.ship.sh.gotoAndStop(8);
        if (this.smallship)
        {
            this.shieldwc = 115;
        }
        else
        {
            this.shieldwc = 160;
        }
        (this.skilltest + 1);
    }
    else if (this.shieldc == 0 || this.ep <= 0)
    {
        this.shieldwc = 0;
        this.shieldc = 0;
        this.ship.sh.gotoAndStop(1);
    }
    if (this.destroyshields > 0)
    {
        (this.destroyshields - 1);
        (this.skilltest + 1);
    }
    else
    {
        this.destroyshields = 0;
    }
    if (this.psionwave > 0)
    {
        (this.psionwave - 1);
        (this.skilltest + 1);
    }
    else
    {
        this.psionwave = 0;
    }
    if (this.infinitimer > 0)
    {
        (this.infinitimer - 1);
        (this.skilltest + 1);
        if (this.infinitimer == 1)
        {
            this.infinitimer = 0;
            this.expl(this.ship.x, this.ship.y, 113);
            this.shipselect = this.orishipselect;
            this.shipchange();
        }
    }
    else
    {
        this.infinitimer = 0;
    }
    if (this.stoptime > 0 && this.ep > 0)
    {
        (this.stoptime - 1);
        if (this.BOSSFIND == 0)
        {
            this.epf(0.4 - (this.itemx[109] - 3) / 60);
        }
        else
        {
            this.epf(0.6 - (this.itemx[109] - 3) / 60);
        }
        (this.skilltest + 1);
        this.stopscreen.gotoAndStop(1);
    }
    else
    {
        if (this.stopscreen.currentFrame == 1)
        {
            this.stopscreen.gotoAndStop(2);
        }
        this.stoptime = 0;
    }
    if (this.itemx[18] == 3)
    {
        if (this.eptimer <= 0)
        {
            if (this.ep < this.tep)
            {
                this.ep = this.ep + 0.02;
            }
            if (this.ep < 1)
            {
                this.ep = 0;
                this.eptimer = 20;
            }
        }
        else
        {
            (this.eptimer - 1);
            if (this.eptimer == 1)
            {
                this.ep = 2;
            }
        }
    }
    if (this.itemx[317] == 1)
    {
        if (this.skilltest > 4)
        {
            this.achievef(317);
        }
    }
    if (this.bonustimer > 0)
    {
        if (this.shoot)
        {
            (this.bonustimer - 1);
        }
    }
    else if (this.weaponmode !== 1)
    {
        this.weaponmode = 1;
        this.weaponchange();
    }
    if (this.weapontimer >= 0)
    {
        (this.weapontimer - 1);
    }
    if (this.missletimer >= 0)
    {
        (this.missletimer - 1);
    }
    if (this.leveltimec % 20 == 0)
    {
        this.i = 20 + 1;
        do
        {

            if (this.missleTracker[this.i + 19] !== 0)
            {
                this.skills["a" + this.missleTracker[this.i + 19]].ax3.text = this.missleAmmo[this.i + 19];
            }
            var _loc_2:String = this;
            _loc_2.i = this.i - 1;
        }while (--this.i > 0)
    }
    if (this.shoot)
    {
        if (this.missletimer < 0 && this.missleson)
        {
            this.missletimer = this.missledelay;
            if (this.itemx[5] == 3)
            {
                this.missletimer = this.missletimer - 3;
            }
            (this.misslefirec + 1);
            if (this.itemx[38] == 3)
            {
                this.weaponfire(this.ship, 0, 7, 0, 0);
            }
            else if (this.missleAmmo[this.missletype + 19] > 0)
            {
                this.weaponfire(this.ship, 0, 7, 0, 0);
                (this.missleAmmo[this.missletype + 19] - 1);
            }
            else
            {
                this.skills["a" + this.missleTracker[this.missletype + 19]].transform.colorTransform = new ColorTransform();
                this.missletracker = 0;
                this.bonusdisplay("Missile Ammo Depleted", 3);
                this.missleson = false;
            }
        }
        if (this.weapontimer < 0)
        {
            this.weapontimer = this.weapondelay;
            this.weaponfire(this.ship, 0, 0, 0, 0);
        }
        if (this.shipselect == 15)
        {
            if (this.timehalf == true && this.timethird == 1)
            {
                this.weaponfire(this.ship, 0, 69, 0, 0);
            }
        }
        else if (this.shipselect == 13)
        {
            if (this.timehalf == true && this.timethird == 1)
            {
                this.weaponfire(this.ship, 0, 81, 0, 0);
            }
            else if (this.timehalf == true && this.timethird == 2)
            {
                this.weaponfire(this.ship, 0, 82, 0, 0);
            }
        }
        if (this.itemx[40] == 3)
        {
            if (this.gentimer <= 0)
            {
                this.gentimer = 180;
                this.weaponfire(this.ship, 0, 83, 0, 0);
            }
            else
            {
                (this.gentimer - 1);
            }
        }
    }
    if (this.doomrot3 == 1)
    {
        (this.doomrot2 - 1);
    }
    else
    {
        (this.doomrot2 + 1);
    }
    if (this.doomrot2 > 60)
    {
        this.doomrot3 = 1;
    }
    if (this.doomrot2 < 30)
    {
        this.doomrot3 = 2;
    }
    this.doomrot = this.doomrot + 5;
    if (this.doomrot > 360)
    {
        this.doomrot = 1;
    }
    this.i = 3 + 1;
    do
    {

        if (this.itemx[19] == 3 && this.hp > 0)
        {
            if (this.mshipArray2[this.i].ax.currentFrame !== 20)
            {
                this.mshipArray2[this.i].ax.gotoAndStop(20);
                this.mshipArray2[this.i].firetimer = 14;
                this.mshipArray2[this.i].ax.ax.cacheAsBitmap = true;
            }
            this.mshipArray2[this.i].x = this.round(this.findx(this.ship.x, this.doomrot2, -40, this.doomrot + (this.i - 1) * 120));
            this.mshipArray2[this.i].y = this.round(this.findy(this.ship.y, this.doomrot2, -40, this.doomrot + (this.i - 1) * 120));
            if (this.mshipArray2[this.i].firetimer < 0)
            {
                if (this.shoot)
                {
                    this.mshipArray2[this.i].firetimer = 12 + this.ceil(Math.random() * 6);
                    this.weaponfire(this.mshipArray2[this.i], 0, 28, 0, 0);
                }
            }
            else
            {
                (this.mshipArray2[this.i].firetimer - 1);
            }
        }
        else
        {
            this.mshipArray2[this.i].x = -300;
            this.mshipArray2[this.i].y = 300;
        }
        var _loc_2:String = this;
        _loc_2.i = this.i - 1;
    }while (--this.i > 0)
    this.i = 1;
    if (this.itemx[20] == 3 && this.hp > 0)
    {
        if (this.mshipArray3[this.i].ax.currentFrame !== 16)
        {
            this.mshipArray3[this.i].ax.gotoAndStop(16);
        }
        if (this.lockon)
        {
            this.mshipArray3[this.i].ax.ax.cacheAsBitmap = true;
        }
        else
        {
            this.mshipArray3[this.i].ax.ax.cacheAsBitmap = false;
        }
        if (this.timehalf)
        {
            this.mshipArray3[this.i].xc = this.mshipArray3[this.i].xc + (this.findx(this.ship.x, (this.doomrot2 - 45) * 3, -50, this.ship.rotationx) - this.mshipArray3[this.i].xc) / (1 + this.i);
            this.mshipArray3[this.i].yc = this.mshipArray3[this.i].yc + (this.findy(this.ship.y, (this.doomrot2 - 45) * 3, -50, this.ship.rotationx) - this.mshipArray3[this.i].yc) / (1 + this.i);
        }
        this.mshipArray3[this.i].x = this.mshipArray3[this.i].x + (this.mshipArray3[this.i].xc - this.mshipArray3[this.i].x) / 3;
        this.mshipArray3[this.i].y = this.mshipArray3[this.i].y + (this.mshipArray3[this.i].yc - this.mshipArray3[this.i].y) / 3;
        this.mshipArray3[this.i].y = this.round(this.mshipArray3[this.i].y);
        this.mshipArray3[this.i].x = this.round(this.mshipArray3[this.i].x);
        this.mshipArray3[this.i].rotation = this.ship.rotationx;
        this.mshipArray3[this.i].rotationx = this.ship.rotationx;
        if (this.mshipArray3[this.i].firetimer < 0)
        {
            if (this.shoot)
            {
                this.mshipArray3[this.i].firetimer = 20;
                this.weaponfire(this.mshipArray3[this.i], 0, 33, 0, 0);
            }
        }
        else
        {
            (this.mshipArray3[this.i].firetimer - 1);
        }
    }
    else if (this.mshipArray3[this.i].x !== -340)
    {
        this.mshipArray3[this.i].x = -340;
        this.mshipArray3[this.i].y = 250;
        this.mshipArray3[this.i].xc = -350;
        this.mshipArray3[this.i].yc = 250;
    }
    this.i = 1;
    if (this.itemx[29] == 3 && this.hp > 0)
    {
        if (this.mshipArray4[this.i].ax.currentFrame !== 17)
        {
            this.mshipArray4[this.i].ax.gotoAndStop(17);
            this.mshipArray4[this.i].xc = Math.random() * 100 - 50;
            this.mshipArray4[this.i].yc = Math.random() * 100 - 50;
            this.mshipArray4[this.i].freecounter = 7;
        }
        if (this.mshipArray4[this.i].ax.ax.cacheAsBitmap == false)
        {
            this.mshipArray4[this.i].ax.ax.cacheAsBitmap = true;
        }
        if (Math.random() < 0.03)
        {
            this.mshipArray4[this.i].xc = Math.random() * 100 - 50;
            this.mshipArray4[this.i].yc = Math.random() * 100 - 50;
            this.mshipArray4[this.i].freecounter = 20;
        }
        this.mshipArray4[this.i].x = this.mshipArray4[this.i].x + (this.mshipArray4[this.i].xc + this.ship.x - this.mshipArray4[this.i].x) / this.mshipArray4[this.i].freecounter;
        this.mshipArray4[this.i].y = this.mshipArray4[this.i].y + (this.mshipArray4[this.i].yc + this.ship.y - this.mshipArray4[this.i].y) / this.mshipArray4[this.i].freecounter;
        this.mshipArray4[this.i].y = this.round(this.mshipArray4[this.i].y);
        this.mshipArray4[this.i].x = this.round(this.mshipArray4[this.i].x);
        if (this.mshipArray4[this.i].freecounter > 7)
        {
            (this.mshipArray4[this.i].freecounter - 1);
        }
        if (this.shoot)
        {
            if (this.mshipArray4[this.i].firetimer < 0)
            {
                if (this.mshipArray4[this.i].firetimer < -40)
                {
                    this.mshipArray4[this.i].firetimer = 240;
                }
                this.weaponfire(this.mshipArray4[this.i], 0, 53, 0, 0);
            }
            (this.mshipArray4[this.i].firetimer - 1);
        }
    }
    else if (this.mshipArray4[this.i].x !== -340)
    {
        this.mshipArray4[this.i].x = -340;
        this.mshipArray4[this.i].y = 250;
        this.mshipArray4[this.i].xc = -350;
        this.mshipArray4[this.i].yc = 250;
    }
    if (this.oblivion > 0)
    {
        if (this.timehalf)
        {
            if (this.nearestenemy !== null)
            {
                this.oblivonrot = this.findrotation(this.ship, this.nearestenemy);
            }
        }
    }
    this.i = 2 + 1;
    do
    {

        if (this.oblivion > 0 && this.hp > 0)
        {
            if (this.mshipArray5[this.i].ax.currentFrame !== 18)
            {
                this.mshipArray5[this.i].ax.gotoAndStop(18);
            }
            if (this.timehalf)
            {
                this.mshipArray5[this.i].xc = this.findx(this.ship.x, 50 - 100 * (this.i - 1), 1, this.oblivonrot);
                this.mshipArray5[this.i].yc = this.findy(this.ship.y, 50 - 100 * (this.i - 1), 1, this.oblivonrot);
            }
            this.mshipArray5[this.i].x = this.mshipArray5[this.i].x + (this.mshipArray5[this.i].xc - this.mshipArray5[this.i].x) / (4 + this.i * 2);
            this.mshipArray5[this.i].y = this.mshipArray5[this.i].y + (this.mshipArray5[this.i].yc - this.mshipArray5[this.i].y) / (4 + this.i * 2);
            this.mshipArray5[this.i].y = this.round(this.mshipArray5[this.i].y);
            this.mshipArray5[this.i].x = this.round(this.mshipArray5[this.i].x);
            this.mshipArray5[this.i].rotation = this.mshipArray5[this.i].rotation + (this.oblivonrot - this.mshipArray5[this.i].rotation) / 4;
            this.mshipArray5[this.i].rotationx = this.mshipArray5[this.i].rotation;
            if (this.mshipArray5[this.i].firetimer < 0)
            {
                this.mshipArray5[this.i].firetimer = this.ceil(Math.random() * 3);
                this.weaponfire(this.mshipArray5[this.i], 0, 54, 0, 0);
            }
            else
            {
                (this.mshipArray5[this.i].firetimer - 1);
            }
        }
        else if (this.mshipArray5[this.i].x > -330)
        {
            this.mshipArray5[this.i].xc = -350;
            this.mshipArray5[this.i].yc = 250;
            this.mshipArray5[this.i].x = this.mshipArray5[this.i].x + (this.mshipArray5[this.i].xc - this.mshipArray5[this.i].x) / 10;
            this.mshipArray5[this.i].y = this.mshipArray5[this.i].y + (this.mshipArray5[this.i].yc - this.mshipArray5[this.i].y) / 10;
            this.mshipArray5[this.i].y = this.round(this.mshipArray5[this.i].y);
            this.mshipArray5[this.i].x = this.round(this.mshipArray5[this.i].x);
        }
        var _loc_2:String = this;
        _loc_2.i = this.i - 1;
    }while (--this.i > 0)
    this.i = 2 + 1;
    do
    {

        if (this.itemx[16] == 3 && this.hp > 0)
        {
            if (this.mshipArray[this.i].ax.currentFrame !== 19)
            {
                this.mshipArray[this.i].ax.gotoAndStop(19);
            }
            if (this.lockon)
            {
                this.mshipArray[this.i].ax.ax.cacheAsBitmap = true;
            }
            else
            {
                this.mshipArray[this.i].ax.ax.cacheAsBitmap = false;
            }
            if (this.timehalf)
            {
                this.mshipArray[this.i].xc = this.mshipArray[this.i].xc + (this.findx(this.ship.x, 65 - 130 * (this.i - 1), -40, this.ship.rotationx) - this.mshipArray[this.i].xc) / (1 + this.i);
                this.mshipArray[this.i].yc = this.mshipArray[this.i].yc + (this.findy(this.ship.y, 65 - 130 * (this.i - 1), -40, this.ship.rotationx) - this.mshipArray[this.i].yc) / (1 + this.i);
            }
            this.mshipArray[this.i].x = this.mshipArray[this.i].x + (this.mshipArray[this.i].xc - this.mshipArray[this.i].x) / 3;
            this.mshipArray[this.i].y = this.mshipArray[this.i].y + (this.mshipArray[this.i].yc - this.mshipArray[this.i].y) / 3;
            this.mshipArray[this.i].y = this.round(this.mshipArray[this.i].y);
            this.mshipArray[this.i].x = this.round(this.mshipArray[this.i].x);
            this.mshipArray[this.i].rotation = this.ship.rotationx;
            this.mshipArray[this.i].rotationx = this.ship.rotationx;
            if (this.mshipArray[this.i].firetimer < 0)
            {
                if (this.shoot)
                {
                    this.mshipArray[this.i].firetimer = 6 + this.ceil(Math.random() * 3);
                    this.weaponfire(this.mshipArray[this.i], 0, 27, 0, 0);
                }
            }
            else
            {
                (this.mshipArray[this.i].firetimer - 1);
            }
        }
        else if (this.mshipArray[this.i].x !== -340)
        {
            this.mshipArray[this.i].x = -340;
            this.mshipArray[this.i].y = 250;
            this.mshipArray[this.i].xc = -350;
            this.mshipArray[this.i].yc = 250;
        }
        var _loc_2:String = this;
        _loc_2.i = this.i - 1;
    }while (--this.i > 0)
    if (this.weaponmode == 7 || this.weaponmode == 8 || this.weaponmode == 13 || this.weaponmode == 14 || this.weaponmode == 15)
    {
        if (this.itemx[39] == 3)
        {
            this.numuse = 0.7;
        }
        else
        {
            this.numuse = 1;
        }
        this.xnumuse = this.findy(this.ship.y, (-this.ship.ax["a" + 2].x) * this.numuse, (-this.ship.ax["a" + 2].y) * this.numuse, this.ship.rotationx);
        this.xnumuse2 = this.findx(this.ship.x, (-this.ship.ax["a" + 2].x) * this.numuse, (-this.ship.ax["a" + 2].y) * this.numuse, this.ship.rotationx);
        this.xnumusea = this.findy(this.ship.y, (-this.ship.ax[("a" + 1)].x) * this.numuse, (-this.ship.ax[("a" + 1)].y) * this.numuse, this.ship.rotationx);
        this.xnumuse2a = this.findx(this.ship.x, (-this.ship.ax[("a" + 1)].x) * this.numuse, (-this.ship.ax[("a" + 1)].y) * this.numuse, this.ship.rotationx);
        this.xnumuse3 = this.findxspeed(50, this.ship.rotationx);
        this.xnumuse4 = this.findyspeed(50, this.ship.rotationx);
    }
    if (this.weaponmode == 8 || this.weaponmode == 14)
    {
        this.xnumuse3a = this.findxspeed(50, this.ship.rotationx - 15);
        this.xnumuse4a = this.findyspeed(50, this.ship.rotationx - 15);
        this.xnumuse3b = this.findxspeed(50, this.ship.rotationx + 15);
        this.xnumuse4b = this.findyspeed(50, this.ship.rotationx + 15);
    }
    this.numuse = 360000;
    this.nonear = false;
    this.i = this.enemynum + 5 + 1;
    do
    {

        if (this.enemyArray[this.i].useok == false && this.enemyArray[this.i].y < 500)
        {
            this.numuse2 = (this.enemyArray[this.i].x - this.ship.x) * (this.enemyArray[this.i].x - this.ship.x) + (this.enemyArray[this.i].y - this.ship.y) * (this.enemyArray[this.i].y - this.ship.y);
        }
        else
        {
            this.numuse2 = 360000;
        }
        if (this.numuse2 < this.numuse)
        {
            this.numuse = this.numuse2;
            this.nearestenemy = this.enemyArray[this.i];
        }
        var _loc_2:String = this;
        _loc_2.i = this.i - 1;
    }while (--this.i > 0)
    if (this.numuse == 360000)
    {
        this.nonear = true;
    }
    this.i = this.wepnum + 1;
    do
    {

        if (this.weaponArray[this.i].useok == false)
        {
            this.weaponfun(this.weaponArray[this.i]);
        }
        var _loc_2:String = this;
        _loc_2.i = this.i - 1;
    }while (--this.i > 0)
    this.i = this.sparknum + 1;
    do
    {

        if (this.sparkArray[this.i].useok == false)
        {
            this.sparkArray[this.i].yc = this.sparkArray[this.i].yc + (this.sparkArray[this.i].ydir + this.wspeed / 2);
            this.sparkArray[this.i].xc = this.sparkArray[this.i].xc + (this.sparkArray[this.i].xdir + this.ochangex * 4);
            this.sparkArray[this.i].x = this.ceil(this.sparkArray[this.i].xc);
            this.sparkArray[this.i].y = this.ceil(this.sparkArray[this.i].yc);
            this.sparkArray[this.i].alpha = this.sparkArray[this.i].alpha - this.sparkArray[this.i].dval;
            if (this.sparkArray[this.i].alpha <= 0.2)
            {
                this.sparkArray[this.i].y = -1;
                this.sparkArray[this.i].useok = true;
            }
        }
        var _loc_2:String = this;
        _loc_2.i = this.i - 1;
    }while (--this.i > 0)
    this.i = this.bonusnum + 1;
    do
    {

        if (this.bonusArray[this.i].useok == false)
        {
            this.bonusArray[this.i].xc = this.bonusArray[this.i].xc + this.ochangex * ((this.bonusArray[this.i].cval + 45) / 15);
            if (this.bonusArray[this.i].alpha < 1)
            {
                this.bonusArray[this.i].alpha = this.bonusArray[this.i].alpha + 0.1;
            }
            if (this.stoptime == 0)
            {
                if (this.bonusArray[this.i].smode == "1")
                {
                    (this.bonusArray[this.i].stimer - 1);
                }
                else
                {
                    (this.bonusArray[this.i].stimer + 1);
                }
                if (this.bonusArray[this.i].stimer < -15)
                {
                    this.bonusArray[this.i].smode = "2";
                }
                else if (this.bonusArray[this.i].stimer > 15)
                {
                    this.bonusArray[this.i].smode = "1";
                }
                if (this.bonusArray[this.i].goodbonus)
                {
                    if (this.bonusmag > 0)
                    {
                        this.bonusArray[this.i].xc = this.bonusArray[this.i].xc + (this.ship.x - this.bonusArray[this.i].x) / 10;
                        this.bonusArray[this.i].yc = this.bonusArray[this.i].yc + (this.ship.y - 20 - this.bonusArray[this.i].y) / 10;
                    }
                }
                this.bonusArray[this.i].xc = this.bonusArray[this.i].xc + this.bonusArray[this.i].stimer / 15;
                this.bonusArray[this.i].yc = this.bonusArray[this.i].yc + (this.bonusArray[this.i].yspeed + this.wspeed / 2);
                if (this.bonusArray[this.i].y > 550)
                {
                    this.bonusArray[this.i].play();
                }
                if (this.bonusArray[this.i].ttimer < 0)
                {
                    this.bonusArray[this.i].ttimer = 25;
                }
                else
                {
                    (this.bonusArray[this.i].ttimer - 1);
                    if (this.bonusArray[this.i].ttimer == 3)
                    {
                        this.alltint.setTint(16777215, 1);
                        this.bonusArray[this.i].transform.colorTransform = this.alltint;
                    }
                    if (this.bonusArray[this.i].ttimer == 1)
                    {
                        this.bonusArray[this.i].transform.colorTransform = new ColorTransform();
                    }
                }
            }
            this.bonusArray[this.i].x = this.ceil(this.bonusArray[this.i].xc);
            this.bonusArray[this.i].y = this.ceil(this.bonusArray[this.i].yc);
            if (this.bonusArray[this.i].useok2)
            {
                if (this.bonusArray[this.i].currentFrame == 1)
                {
                    if (this.testhit(this.ship, this.bonusArray[this.i]))
                    {
                        this.bonusArray[this.i].play();
                        this.bonusget(this.bonusArray[this.i]);
                        this.bonusArray[this.i].useok2 = false;
                    }
                }
            }
        }
        var _loc_2:String = this;
        _loc_2.i = this.i - 1;
    }while (--this.i > 0)
    if (this.savemetimer > 0)
    {
        (this.savemetimer - 1);
    }
    if (this.wval < 10)
    {
        this.wval = this.wval + 0.4;
    }
    this.i = this.enemynum + 5 + 1;
    do
    {

        this.enemyfun(this.enemyArray[this.i]);
        var _loc_2:String = this;
        _loc_2.i = this.i - 1;
    }while (--this.i > 0)
    if (this.levelx == 18 && this.BOSSFIND == 2)
    {
        if (this.leveltimec % 300 == 0)
        {
            this.flashf(1);
            this.sinflash = 20;
        }
    }
    if (this.sinflash > 0)
    {
        (this.sinflash - 1);
        if (this.sinflash % 5 == 0)
        {
            this.intuse = this.ceil(Math.random() * 10);
            this.skillsf(this.skillsArray[this.intuse], this.intuse);
        }
        if (this.timehalf)
        {
            this.alltint.setTint(3368703, 1);
            this.skills.transform.colorTransform = this.alltint;
            this.bars.transform.colorTransform = this.alltint;
        }
        else
        {
            this.bars.transform.colorTransform = new ColorTransform();
            this.skills.transform.colorTransform = new ColorTransform();
        }
        if (this.sinflash == 0)
        {
            this.bars.transform.colorTransform = new ColorTransform();
            this.skills.transform.colorTransform = new ColorTransform();
        }
    }
    if (this.explitemtimer > 0)
    {
        (this.explitemtimer - 1);
        this.eitemx = this.eitemx + this.ochangex;
        this.weaponfire(this.enemyArray[21], 0, 60, this.eitemx, this.eitemy);
        if (this.explitemtimer % 15 == 0)
        {
            this.soundf(this.boomsound);
            this.expl(this.eitemx, this.eitemy, 104);
        }
    }
    this.i = 4 + 1;
    do
    {

        if (this.beamArray[this.i].useok == false)
        {
            (this.beamArray[this.i].timerx + 1);
            this.beamArray[this.i].x = this.findx(this.beamArray[this.i].loc2.x, -this.beamArray[this.i].loc.x, -this.beamArray[this.i].loc.y, this.beamArray[this.i].loc2.rotation);
            this.beamArray[this.i].y = this.findy(this.beamArray[this.i].loc2.y, -this.beamArray[this.i].loc.x, -this.beamArray[this.i].loc.y, this.beamArray[this.i].loc2.rotation);
            this.beamArray[this.i].rotation = this.findrotation2(this.beamArray[this.i], this.beamArray[this.i].finx, this.beamArray[this.i].finy) + 180;
            this.beamArray[this.i].tdist = this.distancef2(this.beamArray[this.i], this.beamArray[this.i].finx, this.beamArray[this.i].finy);
            if (this.beamArray[this.i].loc2.hp <= 0)
            {
                this.beamArray[this.i].timerx = 13;
            }
            if (this.beamArray[this.i].timerx < 10)
            {
                this.beamArray[this.i].ax.height = this.beamArray[this.i].tdist / 10 * this.beamArray[this.i].timerx;
            }
            else
            {
                if (this.beamArray[this.i].timerx == 10)
                {
                    this.expl(this.beamArray[this.i].finx, this.beamArray[this.i].finy, 117);
                    this.weaponfire(this.enemyArray[21], 0, 37, this.beamArray[this.i].finx, this.beamArray[this.i].finy);
                }
                this.beamArray[this.i].ax.height = this.beamArray[this.i].tdist;
                if (this.beamArray[this.i].timerx > 12)
                {
                    this.beamArray[this.i].useok = true;
                    this.beamArray[this.i].gotoAndStop(2);
                }
            }
        }
        var _loc_2:String = this;
        _loc_2.i = this.i - 1;
    }while (--this.i > 0)
    (this.killtimer + 1);
}
return;
}// end function

public function windowNotActive(event:Event) : void
{
if (this.BOSSFIND !== 6)
{
    if (this.delaytimer < 0)
    {
        if (this.lockpause)
        {
            if (this.pausegame)
            {
                this.stopMusic();
                this.pausescreen.gotoAndStop(1);
                this.pauseg();
            }
        }
    }
}
return;
}// end function

public function funa1() : String
{
    if (this.itemx[this.i] >= 4)
    {
        var _loc_1:String = this;
        return "Adds " + _loc_1.this["item" + this.i + "f"]() + " armor to your maximum armor.";
    }
    return "Adds 10 armor to your maximum armor.";
}// end function

public function funa2() : String
{
    if (this.itemx[this.i] >= 4)
    {
        var _loc_1:String = this;
        return "Increases your maximum shield by " + _loc_1.this["item" + this.i + "f"]() + " shield.";
    }
    return "Increases your maximum shield by 8 shield.";
}// end function

public function funa3() : String
{
    if (this.itemx[this.i] >= 4)
    {
        var _loc_1:String = this;
        return "Protects your ship from damage by an additional " + _loc_1.this["item" + this.i + "f"]() + "%.";
    }
    return "Protects your ship from damage by an additional 5%.";
}// end function

public function funa6() : String
{
    if (this.itemx[this.i] >= 4)
    {
        var _loc_1:String = this;
        return "Increases the power of your standard weapon by " + _loc_1.this["item" + this.i + "f"]() + " damage.";
    }
    return "Increases the power of your standard weapon by 2 damage.";
}// end function

public function funa7() : String
{
    if (this.itemx[this.i + this.idiff] >= 4)
    {
        var _loc_1:String = this;
        return "Boosts your ship\'s maximum speed by " + _loc_1.this["item" + (this.i + this.idiff) + "f"]() * 5 + " Mps.";
    }
    return "Boosts your ship\'s maximum speed by 5 Mps.";
}// end function

public function d1f(event:MouseEvent) : void
{
this.diff = 1;
this.optionupdate(this.optionscreen);
return;
}// end function

public function funa8() : String
{
    if (this.itemx[this.i + this.idiff] >= 4)
    {
        var _loc_1:String = this;
        return "Adds " + _loc_1.this["item" + (this.i + this.idiff) + "f"]() + " maximum energy points. May explode if your energy runs out!";
    }
    return "Adds 10 maximum energy points. May explode if your energy runs out!";
}// end function

public function testhit(param1:MovieClip, param2:MovieClip) : Boolean
{
    if (param1.rotationx > 70 && param1.rotationx < 110 || param1.rotationx < -70 && param1.rotationx > -110)
    {
        this.numuse1 = param1.hig;
        this.numuse2 = param1.wid;
    }
    else
    {
        this.numuse1 = param1.wid;
        this.numuse2 = param1.hig;
    }
    if (param1.x < param2.x + param2.wid + this.numuse1 && param1.x > param2.x - param2.wid - this.numuse1 && param1.y < param2.y + param2.hig + this.numuse2 && param1.y > param2.y - param2.hig - this.numuse2)
    {
        return true;
    }
    return false;
}// end function

public function buyship(event:MouseEvent) : void
{
if (this.gold - this.shipCost[this.dispship] >= 0)
{
    this.soundf(this.shipsound);
    this.gold = this.gold - this.shipCost[this.dispship];
    this.shipown[this.dispship] = 3;
    (this.shipbuynum + 1);
    if (this.dispship == 1)
    {
        if (this.itemx[102] < 3)
        {
            this.itemx[102] = 3;
        }
        if (this.itemx[104] < 3)
        {
            this.itemx[104] = 3;
        }
    }
    else if (this.dispship == 2)
    {
        if (this.itemx[101] < 3)
        {
            this.itemx[101] = 3;
        }
        if (this.itemx[104] < 3)
        {
            this.itemx[104] = 3;
        }
    }
    else if (this.dispship == 3)
    {
        if (this.itemx[103] < 3)
        {
            this.itemx[103] = 3;
        }
        if (this.itemx[105] < 3)
        {
            this.itemx[105] = 3;
        }
    }
    if (this.dispship >= 7)
    {
        if (this.shipown[10] == 1)
        {
            this.shipown[10] = 2;
            this.shipown[11] = 2;
            this.shipown[12] = 2;
        }
    }
    else if (this.dispship >= 4)
    {
        if (this.shipown[7] == 1)
        {
            this.shipown[7] = 2;
            this.shipown[8] = 2;
            this.shipown[9] = 2;
        }
    }
    this.orishipv = this.dispship;
    this.shipselect = this.dispship;
    this.oriship(this.shopscreen.ships1);
    this.shopscreen.ships1.sflash.play();
    this.updatestuff();
}
else
{
    this.tutshow(2, "Shopbot", "Hey you need more gold to buy that. My apologies.");
}
return;
}// end function

public function funb1() : String
{
    if (this.itemx[this.i] >= 4)
    {
        var _loc_1:String = this;
        return "( +" + _loc_1.this["item" + this.i + "f"]() + " Armor )";
    }
    return "( +10 Armor )";
}// end function

public function funb2() : String
{
    if (this.itemx[this.i] >= 4)
    {
        var _loc_1:String = this;
        return "( +" + _loc_1.this["item" + this.i + "f"]() + " Shield )";
    }
    return "( +8 Shield )";
}// end function

public function funb6() : String
{
    if (this.itemx[this.i] >= 4)
    {
        var _loc_1:String = this;
        return "( +" + _loc_1.this["item" + this.i + "f"]() + " Damage )";
    }
    return "( +2 Damage )";
}// end function

public function funb8() : String
{
    if (this.itemx[this.i + this.idiff] >= 4)
    {
        var _loc_1:String = this;
        return "( +" + _loc_1.this["item" + (this.i + this.idiff) + "f"]() + " Energy )";
    }
    return "( +10 Energy )";
}// end function

public function funb7() : String
{
    if (this.itemx[this.i + this.idiff] >= 4)
    {
        var _loc_1:String = this;
        return "( +" + _loc_1.this["item" + (this.i + this.idiff) + "f"]() * 5 + " Speed )";
    }
    return "( +5 Speed )";
}// end function

public function loopMusic(event:Event) : void
{
this.stopMusic();
this.soundPosition = 0;
this.playMusic();
return;
}// end function

public function item30f() : Number
{
    return 3 + (this.itemx[30] % 10 - 3) * 2;
}// end function

public function item31f() : int
{
    return 200 + (this.itemx[31] % 10 - 3) * 50;
}// end function

public function d2f(event:MouseEvent) : void
{
this.diff = 2;
this.optionupdate(this.optionscreen);
return;
}// end function

public function closegame(event:MouseEvent) : void
{
this.textuseK = "";
this.kongloadscreen.ax.removeEventListener(MouseEvent.CLICK, this.opengame);
this.kongloadscreen.ax2.removeEventListener(MouseEvent.CLICK, this.closegame);
this.kongloadscreen.gotoAndStop(2);
return;
}// end function

public function rldown(event:MouseEvent) : void
{
if (this.setlevel > 1)
{
    (this.setlevel - 1);
}
this.shopscreen.asker2.axt.text = String(this.setlevel);
return;
}// end function

public function bonuscreate(param1:Number, param2:Number, param3:int, param4:int) : void
{
if (this.bo < this.bonusnum)
{
    (this.bo + 1);
}
else
{
    this.bo = 1;
}
if (this.bonusArray[this.bo].useok)
{
    if (this.itemx[36] >= 3 && this.itemx[36] < 10)
    {
        this.itemmulti = 1 + (this.itemx[36] % 10 - 2) / 2;
    }
    else
    {
        this.itemmulti = 1;
    }
    this.bonusArray[this.bo].useok = false;
    this.bonusArray[this.bo].transform.colorTransform = new ColorTransform();
    this.bonusArray[this.bo].useok2 = true;
    this.bonusArray[this.bo].alpha = 0;
    this.bonusArray[this.bo].yc = this.ceil(param2);
    this.bonusArray[this.bo].xc = param1;
    this.bonusArray[this.bo].y = this.ceil(param2);
    this.bonusArray[this.bo].x = this.ceil(param1);
    this.bonusArray[this.bo].wid = 15;
    this.bonusArray[this.bo].hig = 15;
    this.bonusArray[this.bo].yspeed = this.ceil(Math.random() * 2 + 2);
    this.bonusArray[this.bo].cval = param4;
    if (param3 == 1)
    {
        this.numuse = this.ceil(Math.random() * 15);
        if (this.numuse >= 9 && this.numuse <= 13 || this.numuse == 15)
        {
            this.numuse = this.ceil(Math.random() * 14);
        }
        if (this.levelx < 6 || this.itemx[26] == 3)
        {
            if (this.numuse >= 9 && this.numuse <= 13 || this.numuse == 15)
            {
                this.numuse = this.ceil(Math.random() * 14);
            }
        }
        if (Math.random() < 1 / 350 * this.itemmulti)
        {
            this.numuse = 17;
        }
        else if (Math.random() < 1 / 400 * this.itemmulti)
        {
            this.numuse = 18;
        }
        else if (Math.random() < 1 / 350 * this.itemmulti)
        {
            this.numuse = 19;
        }
        else if (Math.random() < 0.001 * this.itemmulti)
        {
            this.numuse = 20;
        }
        else if (Math.random() < 0.004)
        {
            this.numuse = 35 + 3 * this.floor(Math.random() * 2);
        }
        else if (Math.random() < 0.0025)
        {
            this.numuse = 36 + 3 * this.floor(Math.random() * 2);
        }
        else if (Math.random() < 0.0015)
        {
            this.numuse = 37 + 3 * this.floor(Math.random() * 2);
        }
        else if (Math.random() < 0.002)
        {
            this.numuse = 41;
        }
        else if (Math.random() < 0.0015)
        {
            this.numuse = 42;
        }
        else if (Math.random() < 0.0007)
        {
            this.numuse = 43;
        }
        else if (this.levelx > 9)
        {
            if (this.bonustimer > 0)
            {
                if (Math.random() < 0.01 * this.itemmulti)
                {
                    this.numuse = 26;
                }
            }
            if (Math.random() < 0.01 * this.itemmulti)
            {
                this.numuse = 27;
            }
            else if (Math.random() < 0.001 * this.itemmulti)
            {
                this.numuse = 28;
            }
            else if (Math.random() < 0.001 * this.itemmulti)
            {
                this.numuse = 33;
            }
            else if (Math.random() < 0.001 * this.itemmulti)
            {
                this.numuse = 34;
            }
            else if (Math.random() < 0.001)
            {
                this.numuse = 29;
            }
            else if (Math.random() < 0.001 * this.itemmulti)
            {
                this.numuse = 30;
            }
            if (this.itemx[337] == 1)
            {
                if (Math.random() < 0.001)
                {
                    this.achievef(337);
                }
            }
        }
        if (this.maxlevel > 15 && this.itemx[31] !== -1 && this.itemx[44] == -1 && Math.random() < 0.001)
        {
            this.numuse = 32;
        }
        if (this.itemx[413] >= 5)
        {
            if (Math.random() < 0.002)
            {
                this.numuse = 44;
            }
        }
    }
    else if (param3 == 2)
    {
        this.numuse = this.ceil(Math.random() * 2);
    }
    else if (param3 == 3)
    {
        this.numuse = 16;
        this.bonusArray[this.bo].wid = 45;
        this.bonusArray[this.bo].hig = 45;
    }
    else if (param3 == 4)
    {
        this.numuse = 21;
        this.bonusArray[this.bo].wid = 45;
        this.bonusArray[this.bo].hig = 45;
    }
    else if (param3 == 5)
    {
        if (this.levelx == 5)
        {
            this.numuse = 22;
        }
        else if (this.levelx == 10)
        {
            this.numuse = 23;
        }
        else if (this.levelx == 15)
        {
            this.numuse = 24;
        }
        else if (this.levelx == 20)
        {
            this.numuse = 25;
        }
    }
    else if (param3 == 6)
    {
        this.numuse = 31;
    }
    this.bonusArray[this.bo].goodbonus = this.goodbonus(this.numuse);
    this.bonusArray[this.bo].ax.gotoAndStop(this.numuse);
}
return;
}// end function

public function missilesf(param1:int, param2:int)
{
    if (this.itemx[22] >= 3 && this.itemx[22] < 10)
    {
        this.missledamage = this.missledamage * (1 + this.item22f() / 100);
    }
    if (this.missleson)
    {
        if (this.missletracker == param2)
        {
            this.missleson = false;
            this.skills["a" + this.missleTracker[param1]].transform.colorTransform = new ColorTransform();
            this.missletracker = 0;
            this.bonusdisplay(this.misslename + " OFF", 3);
        }
        else
        {
            this.bonusdisplay(this.misslename + " Active", 3);
            this.k = 10 + 1;
            do
            {

                if (this.missleTracker[this.k + 19] !== 0)
                {
                    this.skills["a" + this.missleTracker[this.k + 19]].transform.colorTransform = new ColorTransform();
                }
                var _loc_3:String = this;
                _loc_3.k = this.k - 1;
            }while (--this.k > 0)
            this.missletracker = param2;
            this.alltint.setTint(52479, 0.5);
            this.skills["a" + this.missleTracker[param1]].transform.colorTransform = this.alltint;
        }
    }
    else
    {
        this.bonusdisplay(this.misslename + " Active", 3);
        this.missleson = true;
        this.missletracker = param2;
        this.alltint.setTint(52479, 0.5);
        this.skills["a" + this.missleTracker[param1]].transform.colorTransform = this.alltint;
    }
    return;
}// end function

public function saveshow(event:MouseEvent = null) : void
{
this.savescreen.s1.visible = true;
this.savescreen.s2.visible = false;
this.savemode = 1;
this.saveupdate(this.savescreen);
this.savescreen.sflash.play();
return;
}// end function

public function weaponfun(param1:MovieClip) : void
{
if (this.stoptime == 0 || param1.typex == true)
{
    if (param1.attri == 1 || param1.attri == 16)
    {
        if (param1.missletimer >= 0)
        {
            if (this.nonear == false)
            {
                param1.gotox = this.nearestenemy;
                param1.nonear = false;
            }
            else
            {
                param1.nonear = true;
            }
            param1.speedx = param1.speedx / 1.2;
            param1.speedy = param1.speedy / 1.2;
            (param1.missletimer - 1);
        }
        else
        {
            param1.missletimer = param1.missletimer - param1.missilespeed;
        }
        param1.xc = param1.xc + this.ochangex * 4;
    }
    else if (param1.attri == 2)
    {
        param1.alpha = param1.alpha - 0.1;
        if (param1.alpha < 0.1)
        {
            param1.yc = 5000;
        }
    }
    else if (param1.attri == 5)
    {
        if (param1.alpha < 1)
        {
            param1.alpha = param1.alpha + 0.2;
        }
    }
    else if (param1.attri == 8)
    {
        param1.speedy = param1.speedy * 1.05;
        param1.speedx = param1.speedx * 1.05;
    }
    else if (param1.attri == 9)
    {
        param1.xc = param1.xc + (this.ship.x - param1.xc) / param1.oncerand;
    }
    else if (param1.attri == 10)
    {
        this.weaponfire(this.ship, 0, 35, param1.xc + param1.speedx, param1.yc + param1.speedy);
    }
    else if (param1.attri == 11)
    {
        if (this.abs(param1.speedy) + this.abs(param1.speedx) > 8)
        {
            param1.yc = 5000;
        }
        if (this.abs(param1.speedy) + this.abs(param1.speedx) > 5)
        {
            if (param1.visible == true)
            {
                param1.visible = false;
            }
            else
            {
                param1.visible = true;
            }
        }
        param1.speedy = param1.speedy * 1.1;
        param1.speedx = param1.speedx * 1.1;
    }
    else if (param1.attri == 14)
    {
        param1.alpha = param1.alpha - 0.1;
        if (param1.alpha < 0.1)
        {
            param1.yc = 5000;
        }
    }
    else if (param1.attri == 15)
    {
        param1.rotationx = this.ship.rotationx + param1.orirot;
        if (param1.orirot == 0)
        {
            this.numuse3 = this.xnumuse3;
            this.numuse4 = this.xnumuse4;
        }
        else if (param1.orirot == -15)
        {
            this.numuse3 = this.xnumuse3a;
            this.numuse4 = this.xnumuse4a;
        }
        else
        {
            this.numuse3 = this.xnumuse3b;
            this.numuse4 = this.xnumuse4b;
        }
        if (param1.origun == 1)
        {
            param1.xc = this.xnumuse2a + this.numuse4 * param1.jspeed;
            param1.yc = this.xnumusea + this.numuse3 * param1.jspeed;
        }
        else
        {
            param1.xc = this.xnumuse2 + this.numuse4 * param1.jspeed;
            param1.yc = this.xnumuse + this.numuse3 * param1.jspeed;
        }
        param1.speedy = 0;
        param1.speedx = 0;
        if (this.shoot == false || this.weaponmode !== 7 && this.weaponmode !== 8 && this.weaponmode !== 13 && this.weaponmode !== 14 && this.weaponmode !== 15)
        {
            param1.attri = 0;
            param1.speedy = this.numuse3;
            param1.speedx = this.numuse4;
        }
    }
    else if (param1.attri == 20)
    {
        if (param1.jspeed > 5)
        {
            this.numuse = this.findrotation(this.ship, param1) - param1.rotationx;
            if (this.numuse > 50)
            {
                this.numuse = 50;
            }
            if (this.numuse < -50)
            {
                this.numuse = -50;
            }
            param1.rotationx = param1.rotationx + this.numuse / 8;
            this.numuse = param1.jspeed;
            if (this.numuse > 20 * param1.missilespeed)
            {
                this.numuse = 20 * param1.missilespeed;
            }
            param1.speedx = this.findyspeed(-this.numuse, param1.rotationx);
            param1.speedy = this.findxspeed(-this.numuse, param1.rotationx);
        }
    }
    else if (param1.attri == 25)
    {
        if (param1.jspeed > 5)
        {
            this.numuse = this.findrotation(this.ship, param1) - param1.rotationx;
            if (this.numuse > 50)
            {
                this.numuse = 50;
            }
            if (this.numuse < -50)
            {
                this.numuse = -50;
            }
            param1.rotationx = param1.rotationx + this.numuse / 8;
            this.numuse = param1.jspeed;
            if (this.numuse > 20 * param1.missilespeed)
            {
                this.numuse = 20 * param1.missilespeed;
            }
            param1.speedx = this.findyspeed(-this.numuse, param1.rotationx);
            param1.speedy = this.findxspeed(-this.numuse, param1.rotationx);
            if (param1.jspeed > 20)
            {
                param1.attri = 0;
            }
        }
    }
    else if (param1.attri == 27)
    {
        if (param1.orispeed < -15)
        {
            param1.orispeed = param1.orispeed * 0.8;
        }
        param1.speedx = this.findyspeed(param1.orispeed, param1.rotationx);
        param1.speedy = this.findxspeed(param1.orispeed, param1.rotationx);
    }
    else if (param1.attri == 24)
    {
        if (this.abs(param1.speedy) + this.abs(param1.speedx) < 6)
        {
            param1.yc = 5000;
        }
        if (this.abs(param1.speedy) + this.abs(param1.speedx) < 10)
        {
            if (param1.visible == true)
            {
                param1.visible = false;
            }
            else
            {
                param1.visible = true;
            }
            if (param1.cacheAsBitmap)
            {
                param1.cacheAsBitmap = false;
            }
        }
        param1.speedy = param1.speedy / 1.2;
        param1.speedx = param1.speedx / 1.2;
    }
    (param1.gotox3 - 1);
    if (param1.gotox3 > 0)
    {
        if (param1.gotox2 == 0)
        {
            param1.gotox2 = Math.random() * 700;
        }
    }
    if (param1.gotox2 !== 0)
    {
        if (param1.gotox3 > 0)
        {
            param1.gotox2 = param1.gotox2 + this.ochangex * 4;
            if (param1.attri !== 23)
            {
                param1.speedy = param1.speedy / 1.3;
            }
            param1.speedx = param1.speedx / 2;
            param1.xc = param1.xc + (param1.gotox2 - param1.xc) / 30;
        }
        else
        {
            param1.speedy = param1.speedy - param1.orispeed / 14;
            param1.gotox3 = -1;
        }
    }
    if (param1.missletimer < -20 * param1.missilespeed)
    {
        param1.missletimer = -20 * param1.missilespeed;
    }
    if (param1.missletimer < 0)
    {
        if (param1.nonear == false)
        {
            this.numuse = this.findrotation(param1, param1.gotox) - param1.rotationx;
        }
        else
        {
            this.numuse = this.ship.rotationx - param1.rotationx;
        }
        if (this.numuse > 40)
        {
            this.numuse = 40;
        }
        if (this.numuse < -40)
        {
            this.numuse = -40;
        }
        if (this.missletype == 9)
        {
            this.numuse = this.numuse + (param1.oncerand - 125);
        }
        param1.rotationx = param1.rotationx + this.numuse / 5;
        param1.speedx = this.findyspeed(0.1 - param1.missletimer, param1.rotationx);
        param1.speedy = this.findxspeed(0.1 - param1.missletimer, param1.rotationx);
    }
    if (param1.rotlock == false)
    {
        if (param1.ax.rotation !== this.round(param1.rotationx))
        {
            param1.ax.rotation = this.round(param1.rotationx);
        }
    }
    param1.xc = param1.xc + this.round(param1.speedx);
    param1.yc = param1.yc + this.round(param1.speedy);
    if (param1.typex == false && param1.attri !== 14)
    {
        param1.yc = param1.yc + this.wspeed / 2;
    }
    if (param1.xc > 720 || param1.xc < -20 || param1.yc > 520 || param1.yc < -20)
    {
        param1.useok = true;
        param1.yc = 5000;
        param1.ax.gotoAndStop(49);
    }
    if (param1.hitimer !== 6)
    {
        if (param1.hitimer > 0)
        {
            (param1.hitimer - 1);
        }
    }
    (param1.jspeed + 1);
    param1.y = this.ceil(param1.yc);
}
if (param1.typex == false && param1.attri !== 14)
{
    param1.xc = param1.xc + this.ochangex * ((param1.cspeed + 45) / 15);
}
param1.x = this.ceil(param1.xc);
if (this.qualityx == 3)
{
    this.intuse = 102;
}
else
{
    this.intuse = 120;
}
if (param1.typex)
{
    this.j = this.enemynum + 5 + 1;
    do
    {

        if (this.enemyArray[this.j].useok == false)
        {
            if (this.enemyArray[this.j].y + this.enemyArray[this.j].hig > 0 && this.enemyArray[this.j].y - this.enemyArray[this.j].hig < 550)
            {
                this.testhitv = 1;
                if (this.enemyArray[this.j].rshield !== 0)
                {
                    if (param1.attri !== 1 && param1.ax.currentFrame !== 10 && param1.attri !== 12 && param1.hitimer <= 0 && param1.useonce == false && this.enemyArray[this.j].y > 10)
                    {
                        if (this.distancef(param1, this.enemyArray[this.j]) <= this.enemyArray[this.j].rshield / 2 + param1.orispeed / 2)
                        {
                            if (this.enemyArray[this.j].rshieldgenori > 50 || this.enemyArray[this.j].rshieldgenori == 0)
                            {
                                this.testhitv = 3;
                            }
                            else
                            {
                                this.testhitv = 4;
                            }
                        }
                    }
                }
                if (this.testhitv == 1)
                {
                    if (param1.attri == 12)
                    {
                        if (this.testhitgwave(this.enemyArray[this.j], param1))
                        {
                            this.testhitv = 2;
                        }
                    }
                    else if (this.enemyArray[this.j].boss || this.enemyArray[this.j].wid > 140)
                    {
                        if (this.testhitlarge(param1, this.enemyArray[this.j]))
                        {
                            this.testhitv = 2;
                        }
                    }
                    else if (this.testhit(param1, this.enemyArray[this.j]))
                    {
                        this.testhitv = 2;
                    }
                }
                if (this.testhitv == 3)
                {
                    if (param1.attri == 15)
                    {
                        param1.attri = 0;
                        param1.speedy = this.numuse3;
                        param1.speedx = this.numuse4;
                    }
                    if (param1.attri == 16)
                    {
                        param1.attri = 0;
                    }
                    this.axnumuse = this.findrotation(param1, this.enemyArray[this.j]);
                    param1.rotationx = this.axnumuse;
                    param1.ax.rotation = this.round(param1.rotationx);
                    param1.speedy = (param1.y - this.enemyArray[this.j].y) / this.enemyArray[this.j].rshield * 140 / 3;
                    param1.speedx = (param1.x - this.enemyArray[this.j].x) / this.enemyArray[this.j].rshield * 140 / 3;
                    param1.hitimer = 5;
                    param1.damage = param1.damage / 20;
                    param1.typex = false;
                    this.expl(param1.x, param1.y, 110);
                    param1.missletimer = 0;
                }
                else if (this.testhitv == 2 || this.testhitv == 4)
                {
                    if (this.levelx == 14 && this.enemyArray[this.enemynum].boss == true)
                    {
                        this.enemyArray[this.enemynum].hp = this.enemyArray[this.enemynum].hp - param1.damage;
                        this.totaldamage = this.totaldamage + param1.damage;
                    }
                    else if (this.levelx == 16 && this.enemyArray[this.j].helper == true)
                    {
                        this.enemyArray[this.j].hittol = this.enemyArray[this.j].hittol + param1.damage / 3;
                        if (this.enemyArray[this.j].hittol > 400)
                        {
                            this.enemyArray[this.j].negmode = 11;
                            this.enemyArray[this.j].negtimer = 400;
                        }
                    }
                    else
                    {
                        this.enemyArray[this.j].hp = this.enemyArray[this.j].hp - param1.damage;
                        this.totaldamage = this.totaldamage + param1.damage;
                    }
                    if (this.enemyArray[this.j].crashval < 10 && this.enemyArray[this.j].crashtol < 50)
                    {
                        this.enemyArray[this.j].yc = this.enemyArray[this.j].yc + param1.speedy / (this.enemyArray[this.j].crashval + this.enemyArray[this.j].crashtol / 7 + 2);
                        this.enemyArray[this.j].xc = this.enemyArray[this.j].xc + param1.speedx / (this.enemyArray[this.j].crashval + this.enemyArray[this.j].crashtol / 7 + 2);
                        this.enemyArray[this.j].crashtol = this.enemyArray[this.j].crashtol + 7;
                    }
                    if (param1.useonce == false)
                    {
                        if (param1.hitimer !== 6)
                        {
                            if (this.testhitv == 4)
                            {
                                this.expl(param1.x, param1.y, 119);
                                this.expl(this.enemyArray[this.j].x, this.enemyArray[this.j].y, 119);
                                this.enemyArray[this.j].hp = this.enemyArray[this.j].hp + param1.damage * 2;
                                if (this.enemyArray[this.j].hp > this.enemyArray[this.j].thp)
                                {
                                    this.enemyArray[this.j].hp = this.enemyArray[this.j].thp;
                                }
                            }
                            else
                            {
                                this.expl(param1.x, param1.y, (param1.ax.currentFrame + 1));
                            }
                            if (param1.hittrue == false)
                            {
                                (this.acchit + 1);
                                param1.hittrue = true;
                            }
                        }
                        else
                        {
                            this.expl(param1.x, param1.y, this.intuse);
                        }
                        param1.y = -1000;
                        param1.ax.gotoAndStop(49);
                        param1.useok = true;
                    }
                    else
                    {
                        if (param1.attri == 12 && this.enemyArray[this.j].yc > 40)
                        {
                            this.enemyArray[this.j].yc = this.enemyArray[this.j].yc + param1.speedy * 2;
                        }
                        if (this.timehalf)
                        {
                            if (param1.hitimer !== 6)
                            {
                                if (param1.attri == 12)
                                {
                                    this.expl(this.enemyArray[this.j].x, param1.y, (param1.ax.currentFrame + 1));
                                }
                                else
                                {
                                    this.expl(param1.x, param1.y, (param1.ax.currentFrame + 1));
                                }
                                if (param1.hittrue == false)
                                {
                                    (this.acchit + 1);
                                    param1.hittrue = true;
                                }
                            }
                            else
                            {
                                this.expl(param1.x, param1.y, this.intuse);
                            }
                        }
                    }
                    if (this.BOSSFIND == 0)
                    {
                        this.numuse = 2;
                    }
                    else
                    {
                        this.numuse = 0.25;
                    }
                    if (Math.random() < param1.hitchance * this.numuse)
                    {
                        if (param1.infect !== 0)
                        {
                            if (param1.infect == 13)
                            {
                                if (this.enemyArray[this.j].hp < 10000)
                                {
                                    this.expl(this.enemyArray[this.j].x, this.enemyArray[this.j].y, 126);
                                    this.bonusdisplay("Death...", 3);
                                    this.enemyArray[this.j].hp = -1;
                                }
                            }
                            else
                            {
                                this.enemyArray[this.j].negmode = param1.infect;
                                this.enemyArray[this.j].negtimer = 60;
                            }
                            if (param1.infect == 10)
                            {
                                this.expl(this.ship.x, this.ship.y, 106);
                                this.enemyArray[this.j].hp = this.enemyArray[this.j].hp - (10 + this.levelx / 2);
                                if (this.shp <= 0 || this.shp == this.tshp)
                                {
                                    this.bonusdisplay("Drain ( +" + this.valuegain(this.hp, this.thp, 10 + this.levelx / 2) + " Armor )", 3);
                                    this.hp = this.hp + this.valuegain(this.hp, this.thp, 10 + this.levelx / 2);
                                }
                                else
                                {
                                    this.bonusdisplay("Drain ( +" + this.valuegain(this.shp, this.tshp, 10 + this.levelx / 2) + " Shield )", 3);
                                    this.shp = this.shp + this.valuegain(this.shp, this.tshp, 10 + this.levelx / 2);
                                }
                            }
                        }
                    }
                }
            }
        }
        var _loc_2:String = this;
        _loc_2.j = this.j - 1;
    }while (--this.j > 0)
}
else if (this.shieldwc !== 0 && param1.attri !== 2 && param1.attri !== 12 && param1.gotox2 == 0 && param1.hitimer <= 0 && param1.useonce == false)
{
    if (this.distancef(param1, this.ship) <= this.shieldwc / 2 + param1.orispeed / 2)
    {
        if (this.shieldda > 0)
        {
            this.expl(param1.x, param1.y, 119);
            this.expl(this.ship.x, this.ship.y, 119);
            if (this.hp < this.thp)
            {
                this.hp = this.hp + this.valuegain(this.hp, this.thp, param1.damage);
            }
            else
            {
                this.shp = this.shp + this.valuegain(this.shp, this.tshp, param1.damage);
            }
            param1.useok = true;
            param1.y = -1000;
            param1.ax.gotoAndStop(49);
        }
        else
        {
            this.axnumuse = this.findrotation(param1, this.ship);
            param1.rotationx = this.axnumuse;
            param1.ax.rotation = this.round(param1.rotationx);
            param1.speedy = (param1.y - this.ship.y) / 3;
            param1.speedx = (param1.x - this.ship.x) / 3;
            param1.hitimer = 6;
            param1.damage = param1.damage * 5;
            param1.typex = true;
            this.expl(param1.x, param1.y, 110);
        }
    }
}
else if (this.stealthmode == 0)
{
    this.testhitv = 1;
    if (param1.attri == 2)
    {
        if (this.testhitbeam(this.ship, param1))
        {
            this.testhitv = 2;
        }
    }
    else if (param1.attri == 12)
    {
        if (this.testhitgwave(this.ship, param1))
        {
            this.testhitv = 2;
        }
    }
    else if (this.testhit(param1, this.ship))
    {
        this.testhitv = 2;
    }
    if (this.testhitv == 2)
    {
        this.soundf(this.hsound);
        if (param1.infect !== 0)
        {
            if (this.negmode == 1)
            {
                this.negmode = param1.infect;
                this.negtimer = 60;
                this.negchange();
            }
        }
        if (param1.attri == 12)
        {
            this.shipy = this.shipy + param1.speedy * 3.5;
        }
        this.shipdamage(param1.damage);
        if (param1.useonce)
        {
            if (this.timehalf)
            {
                if (param1.attri == 12)
                {
                    this.expl(this.ship.x, this.ship.y - 10, this.intuse);
                }
                else
                {
                    this.expl((this.ship.x + param1.x) / 2, this.ship.y, this.intuse);
                }
            }
        }
        else
        {
            this.expl(param1.x, param1.y, this.intuse);
            param1.useok = true;
            param1.y = -1000;
            param1.ax.gotoAndStop(49);
        }
    }
}
return;
}// end function

public function funb3() : String
{
    if (this.itemx[this.i] >= 4)
    {
        var _loc_1:String = this;
        return "( +" + _loc_1.this["item" + this.i + "f"]() + "% Defense )";
    }
    return "( +5% Defense )";
}// end function

public function handleMouseWheel(event:MouseEvent)
{
    this.scrollmount = event.delta;
    this.scrolln = 4;
    this.sctimer = 3;
    return;
}// end function

public function calcdia() : int
{
    this.testnum = (this.dietem - 500) % 4 * 5;
    if (this.testnum == 0)
    {
        this.testnum = 20;
    }
    return this.testnum;
}// end function

public function avatarexit(event:MouseEvent) : void
{
this.avatarnow = 1;
this.k = 10 + 1;
do
{

    if (this.skills["a" + this.k].ax5.currentFrame !== 1)
    {
        this.skills["a" + this.k].ax5.play();
    }
    var _loc_2:String = this;
    _loc_2.k = this.k - 1;
}while (--this.k > 0)
this.pausegame = true;
this.lockpause = true;
if (this.lockon)
{
    Mouse.hide();
}
this.avatarremove();
this.avatar.gotoAndStop(1);
this.tutshow(2, "Shopbot", "Enjoy the avatars.");
return;
}// end function

public function gotoKong(event:MouseEvent) : void
{
this.targetURL = new URLRequest("http://armorgames.com/");
navigateToURL(this.targetURL);
return;
}// end function

public function oriship(param1:MovieClip) : void
{
this.shipselect = this.dispship;
this.shipchange();
param1.gx1.visible = false;
param1.g2.visible = false;
param1.g3.visible = false;
param1.g4.visible = false;
param1.g7.visible = false;
param1.g9.visible = false;
if (this.ori2[1] > 600)
{
    param1.gx1.visible = true;
}
if (this.ori2[2] > 400)
{
    param1.g2.visible = true;
}
if (this.ori2[3] > 190)
{
    param1.g3.visible = true;
}
if (this.ori2[4] > 8)
{
    param1.g4.visible = true;
}
if (this.orifirechoice == 14)
{
    this.orifirechoice = 1;
}
param1.a2.text = this.ori2[1].toString();
param1.a3.text = this.ori2[2].toString();
param1.a4.text = this.ori2[3].toString();
param1.a5.text = this.ori2[4].toString();
param1.a6.text = 40 + (this.ori2[5] - 10) * 5 - 3 * 5;
param1.a7.text = this.ori2[8] * 10;
if (this.ori2[8] <= 0)
{
    this.ori2[8] = 0.5;
}
param1.a8.text = this.round(this.ori2[7] * this.ori2[6] / this.ori2[8]);
if (this.ori2[8] == 0.5)
{
    this.ori2[8] = 0;
}
param1.a9.text = this.oriweaponspeed * 2 - 10;
param1.c2.text = "";
param1.c3.text = "";
param1.c4.text = "";
param1.c5.text = "";
param1.c6.text = "";
param1.c7.text = "";
param1.c8.text = "";
this.numuse = this.thp - this.ori2[1];
this.numfun(param1, 2);
this.numuse = this.tshp - this.ori2[2];
this.numfun(param1, 3);
this.numuse = this.tep - this.ori2[3];
this.numfun(param1, 4);
this.numuse = this.equipmax - this.ori2[4];
this.numfun(param1, 5);
this.numuse = this.speed - this.ori2[5];
if (this.numuse !== 0)
{
    param1.c6.text = "+" + this.round(this.numuse * 5);
    param1.c6.x = param1.a6.x + param1.a6.textWidth + 4;
}
this.numuse = this.oriweapondelay - this.ori2[8];
if (this.numuse !== 0)
{
    if (this.numuse > 0)
    {
        param1.c7.text = "+" + this.numuse * 10;
        param1.c7.x = param1.a7.x + param1.a7.textWidth + 4;
        param1.c7.transform.colorTransform = new ColorTransform();
    }
    else
    {
        param1.c7.text = this.numuse * 10;
        param1.c7.x = param1.a7.x + param1.a7.textWidth + 4;
        this.alltint.setTint(16711680, 1);
        param1.c7.transform.colorTransform = this.alltint;
    }
}
this.numuse = this.round(this.orifirechoice * this.oriweapondamage / this.oriweapondelay) - this.round(this.ori2[7] * this.ori2[6] / this.ori2[8]);
this.numfun(param1, 8);
param1.a11.text = "Bonus Skills:";
if (this.shipselect == 1)
{
    param1.a10.text = "Healing Technique and Stealth Mode";
}
else if (this.shipselect == 2)
{
    param1.a10.text = "Warp Speed and Healing Technique";
}
else if (this.shipselect == 3)
{
    param1.a10.text = "Stun Enemies and Mega Bomb";
}
else if (this.shipselect == 10)
{
    param1.a10.text = "Shield Piercing Bullets";
    param1.g9.visible = true;
    param1.a8.text = "85";
    param1.g7.visible = true;
}
else if (this.shipselect >= 13)
{
    param1.a10.text = "None";
    param1.a8.text = this.round(this.orifirechoice * this.oriweapondamage / this.oriweapondelay) + 10;
    this.numuse = this.round(this.orifirechoice * this.oriweapondamage / this.oriweapondelay) - this.round(this.ori2[7] * this.ori2[6] / this.ori2[8]);
    this.numfun(param1, 8);
    param1.g7.visible = true;
}
else
{
    param1.a10.text = "None";
}
if (this.offvar == 1)
{
    param1.leftx.visible = false;
}
else
{
    param1.leftx.visible = true;
}
if (this.itemx[44] == 3)
{
    this.intuse = 13;
}
else
{
    this.intuse = 10;
}
if (this.offvar == this.intuse)
{
    param1.rightx.visible = false;
}
else
{
    param1.rightx.visible = true;
}
param1.b1.visible = true;
param1.b2.visible = true;
param1.b3.visible = true;
param1.s1.x = 104;
param1.s2.x = 104 + 155;
param1.s3.x = 104 + 155 * 2;
param1.s4.x = 600;
param1.s1.ax.gotoAndStop(this.offvar);
param1.s2.ax.gotoAndStop(1 + this.offvar);
param1.s3.ax.gotoAndStop(2 + this.offvar);
param1.s4.ax.gotoAndStop(1);
param1.s1.ax.sbox.visible = false;
param1.s2.ax.sbox.visible = false;
param1.s3.ax.sbox.visible = false;
param1.s4.ax.sbox.visible = false;
param1.s5.ax.sbox.visible = false;
this.alltint.setTint(0, 1);
if (this.shipown[this.offvar] == 1)
{
    param1.s1.transform.colorTransform = this.alltint;
}
else
{
    param1.s1.transform.colorTransform = new ColorTransform();
}
if (this.shipown[(this.offvar + 1)] == 1)
{
    param1.s2.transform.colorTransform = this.alltint;
}
else
{
    param1.s2.transform.colorTransform = new ColorTransform();
}
if (this.shipown[this.offvar + 2] == 1)
{
    param1.s3.transform.colorTransform = this.alltint;
}
else
{
    param1.s3.transform.colorTransform = new ColorTransform();
}
if (this.shipown[this.offvar] == 3)
{
    param1.s1.transform.colorTransform = new ColorTransform();
    param1.s1.sh.gotoAndStop(3);
}
else
{
    param1.s1.sh.gotoAndStop(1);
}
if (this.shipown[(this.offvar + 1)] == 3)
{
    param1.s2.transform.colorTransform = new ColorTransform();
    param1.s2.sh.gotoAndStop(3);
}
else
{
    param1.s2.sh.gotoAndStop(1);
}
if (this.shipown[this.offvar + 2] == 3)
{
    param1.s3.transform.colorTransform = new ColorTransform();
    param1.s3.sh.gotoAndStop(3);
}
else
{
    param1.s3.sh.gotoAndStop(1);
}
if (this.orishipv - this.offvar + 1 >= 1 && this.orishipv - this.offvar + 1 <= 3)
{
    param1["s" + (this.orishipv - this.offvar + 1)].sh.gotoAndStop(5);
}
if (this.dispship - this.offvar + 1 >= 1 && this.dispship - this.offvar + 1 <= 3)
{
    if (this.shipown[this.dispship] == 3)
    {
        param1["s" + (this.dispship - this.offvar + 1)].sh.gotoAndStop(4);
    }
    else if (this.shipown[this.dispship] == 2)
    {
        param1["s" + (this.dispship - this.offvar + 1)].sh.gotoAndStop(6);
    }
    else
    {
        param1["s" + (this.dispship - this.offvar + 1)].sh.gotoAndStop(7);
    }
}
param1.s5.ax.gotoAndStop(this.dispship);
if (this.shipown[this.dispship] == 3)
{
    param1.g1.gotoAndStop(1);
    param1.a1.text = this.shipname + " (Current Ship)";
    param1.statx.gotoAndStop(1);
    param1.s5.transform.colorTransform = new ColorTransform();
    param1.buy.visible = false;
}
else if (this.shipown[this.dispship] == 2)
{
    param1.a1.text = this.shipname + " ( " + this.commaf(this.shipCost[this.dispship]) + " Gold )";
    param1.buy.visible = true;
    param1.statx.gotoAndStop(2);
    param1.g1.gotoAndStop(2);
    param1.s5.transform.colorTransform = new ColorTransform();
}
else
{
    param1.buy.visible = false;
    param1.statx.gotoAndStop(3);
    param1.a1.text = "Locked (Buy a ship from lower tier)";
    this.l = 8 + 1;
    do
    {

        param1["a" + (this.l + 1)].text = "N/A";
        param1["c" + (this.l + 1)].text = "";
        var _loc_2:String = this;
        _loc_2.l = this.l - 1;
    }while (--this.l > 0)
    param1.a11.text = "Extra:";
    param1.a10.text = "N/A";
    param1.g1.gotoAndStop(3);
    this.alltint.setTint(0, 1);
    param1.s5.transform.colorTransform = this.alltint;
}
param1.a1x.text = param1.a1.text;
if (this.shipown[this.dispship] !== 3)
{
    this.shipselect = this.orishipv;
}
this.shipchange();
this.updatestuff();
param1.s1.ax.t1.stop();
param1.s2.ax.t1.stop();
param1.s3.ax.t1.stop();
return;
}// end function

public function testhitlarge(param1:MovieClip, param2:MovieClip) : Boolean
{
    this.numuse = Math.tan(param2.ax.rotation * this.toRads) * (param1.x - param2.x);
    this.numuse2 = (param2.wid - param2.hig) * (this.abs(param2.ax.rotation) / 90);
    if (param1.x < param2.x + (param2.wid - this.numuse2) && param1.x > param2.x - (param2.wid - this.numuse2) && param1.y - this.numuse < param2.y + param2.hig && param1.y - this.numuse > param2.y - param2.hig)
    {
        return true;
    }
    return false;
}// end function

public function acceptreward(event:MouseEvent) : void
{
this.itemx[this.missionselect] = 3;
this.refreshmission2();
this.refreshmission();
this.goldf(this.goldValue[this.missionselect]);
this.achpoints = this.achpoints + this.a4Text[this.missionselect];
this.achpointstotal = this.achpointstotal + this.a4Text[this.missionselect];
return;
}// end function

public function killKey(event:MouseEvent) : void
{
if (this.keycount == 0)
{
    this.i = 12 + 1;
    do
    {

        this.optionscreen.ck["a" + this.i].ax2.gotoAndStop(1);
        if (this.optionscreen.ck["a" + this.i].ax.text == "Press Key")
        {
            this.customkeys[this.i] = 0;
            this.optionscreen.ck["a" + this.i].ax.text = "Set Key";
        }
        var _loc_2:String = this;
        _loc_2.i = this.i - 1;
    }while (--this.i > 0)
    this.keyint = 0;
}
else
{
    this.keycount = 0;
}
return;
}// end function

public function b1f(event:MouseEvent) : void
{
this.whiteon = false;
this.whitescreen.gotoAndStop(2);
this.whitescreen.visible = false;
this.optionupdate(this.optionscreen);
return;
}// end function

public function scrollup(event:MouseEvent) : void
{
this.scrolln = 1;
return;
}// end function

public function item35f() : int
{
    return 5 + (this.itemx[35] % 10 - 3);
}// end function

public function chooseimg(event:MouseEvent) : void
{
this.splitvar = event.target.parent.name.split("a");
this.newint = this.splitvar[1];
this.imagesel = this.newint;
this.imageupdate();
return;
}// end function

public function aboutremove() : void
{
this.aboutscreen.exitb.removeEventListener(MouseEvent.MOUSE_UP, this.exitsave);
this.aboutscreen.kd.removeEventListener(MouseEvent.MOUSE_UP, this.gotoKid);
return;
}// end function

public function rlup(event:MouseEvent) : void
{
if (this.setlevel < this.maxlevel)
{
    (this.setlevel + 1);
}
this.shopscreen.asker2.axt.text = String(this.setlevel);
return;
}// end function

public function removestart() : void
{
this.dontcallstart = false;
removeChild(this.startscreen);
return;
}// end function

public function gotoKid(event:MouseEvent)
{
    this.targetURL = new URLRequest("http://www.kongregate.com/accounts/kidgamez/?gamereferral=enigmata2");
    CustomMetrics.Log("KongClick");
    navigateToURL(this.targetURL);
    return;
}// end function

public function skillch(event:MouseEvent) : void
{
this.soundf(this.snapsound);
if (this.skillfol !== 0)
{
    this.splitvar = event.target.name.split("sk");
    this.newint = this.splitvar[1];
    this.i = 10 + 1;
    do
    {

        if (this.skillsArray[this.i] == this.skillfol)
        {
            this.skillsArray[this.i] = 0;
        }
        var _loc_2:String = this;
        _loc_2.i = this.i - 1;
    }while (--this.i > 0)
    if (this.skillsori !== 0)
    {
        this.skillsArray[this.skillsori] = this.skillsArray[this.newint];
    }
    this.skillsori = 0;
    this.skillsArray[this.newint] = this.skillfol;
    this.shopscreen.skillmask.visible = false;
    this.skillfol = 0;
    this.skillschange();
}
return;
}// end function

public function item34f() : int
{
    return 2 + (this.itemx[34] % 10 - 3) * 2;
}// end function

public function flashf(param1:int) : void
{
this.flashscreen.gotoAndStop(param1);
return;
}// end function

public function g3fx(event:MouseEvent) : void
{
this.qualityx = 3;
stage.quality = "low";
this.optionupdatex();
stage.frameRate = 22;
return;
}// end function

public function item36f() : int
{
    return 1 + (this.itemx[36] % 10 - 3);
}// end function

public function newgamefun(event:MouseEvent) : void
{
this.stopMusic();
this.currentMusic = this.music1;
this.soundPosition = 0;
this.playMusic();
if (this.deathmode)
{
    this.deathscreen.ax2.kg.removeEventListener(MouseEvent.MOUSE_UP, this.gotoKong);
    this.deathscreen.ax2.a1.removeEventListener(MouseEvent.MOUSE_UP, this.loadgamef);
    this.deathscreen.ax2.a2.removeEventListener(MouseEvent.MOUSE_UP, this.newgamefun);
    this.deathmode = false;
    this.deathscreen.visible = false;
    this.deathscreen.gotoAndStop(1);
}
this.pausescreen.visible = false;
this.pausescreen.gotoAndStop(5);
this.chooseship.gotoAndStop(1);
this.chooseship.a1.addEventListener(MouseEvent.MOUSE_UP, this.choosef);
this.chooseship.a2.addEventListener(MouseEvent.MOUSE_UP, this.choosef);
this.chooseship.a3.addEventListener(MouseEvent.MOUSE_UP, this.choosef);
this.bg1.gotoAndStop(1);
this.clearscreen();
this.blurx(this.chooseship);
this.bars.na.visible = false;
this.replayx = 1;
this.newgamexs = true;
this.pausegame = false;
this.lockpause = false;
this.newgamenow();
Mouse.show();
return;
}// end function

public function sremove() : void
{
this.shopArray[1].y = 501;
this.shopArray[10].y = 501;
this.shopArray[2].y = 501;
this.shopArray[3].y = 501;
delete this.shopArray[1];
delete this.shopArray[10];
delete this.shopArray[2];
delete this.shopArray[3];
stage.removeEventListener(MouseEvent.MOUSE_UP, this.endscroll);
this.shopscreen.ships1.buy.removeEventListener(MouseEvent.MOUSE_UP, this.buyship);
this.shopscreen.ships1.leftx.removeEventListener(MouseEvent.MOUSE_UP, this.leftx);
this.shopscreen.ships1.b1.removeEventListener(MouseEvent.MOUSE_UP, this.shipb3);
this.shopscreen.ships1.b2.removeEventListener(MouseEvent.MOUSE_UP, this.shipb3);
this.shopscreen.ships1.b3.removeEventListener(MouseEvent.MOUSE_UP, this.shipb3);
this.shopscreen.cm.removeEventListener(MouseEvent.MOUSE_UP, this.openasker);
this.shopscreen.asker.nl.removeEventListener(MouseEvent.MOUSE_UP, this.continuem);
this.shopscreen.asker.rl.removeEventListener(MouseEvent.MOUSE_UP, this.openasker2);
this.shopscreen.asker.bw.bw.removeEventListener(MouseEvent.MOUSE_UP, this.bossfuc);
this.shopscreen.asker.exitb.removeEventListener(MouseEvent.MOUSE_UP, this.exitsave);
this.shopscreen.helper.ntb.removeEventListener(MouseEvent.MOUSE_UP, this.gotoGuide1);
this.shopscreen.helper.ofx.removeEventListener(MouseEvent.MOUSE_UP, this.gotoForum);
this.shopscreen.helper.exitb.removeEventListener(MouseEvent.MOUSE_UP, this.exitsave);
this.shopscreen.asker2.rl.removeEventListener(MouseEvent.MOUSE_UP, this.continuem);
this.shopscreen.asker2.exitb.removeEventListener(MouseEvent.MOUSE_UP, this.exitsave);
this.shopscreen.asker2.lup.removeEventListener(MouseEvent.MOUSE_UP, this.rlup);
this.shopscreen.asker2.ldown.removeEventListener(MouseEvent.MOUSE_UP, this.rldown);
this.shopscreen.asker2.sb.ab.removeEventListener(MouseEvent.MOUSE_UP, this.sbf);
this.shopscreen.sg.removeEventListener(MouseEvent.MOUSE_UP, this.saveshows);
this.shopscreen.r1.removeEventListener(MouseEvent.MOUSE_UP, this.heal1);
this.shopscreen.r2.removeEventListener(MouseEvent.MOUSE_UP, this.heal2);
this.shopscreen.r3.removeEventListener(MouseEvent.MOUSE_UP, this.heal3);
this.shopscreen.shop1.up.removeEventListener(MouseEvent.MOUSE_DOWN, this.scrollup);
this.shopscreen.shop1.down.removeEventListener(MouseEvent.MOUSE_DOWN, this.scrolldown);
this.shopscreen.shop1.scrollz.removeEventListener(MouseEvent.MOUSE_DOWN, this.scrollzf);
this.shopscreen.b1.removeEventListener(MouseEvent.MOUSE_UP, this.shop1);
this.shopscreen.b2.removeEventListener(MouseEvent.MOUSE_UP, this.shop2);
this.shopscreen.b3.removeEventListener(MouseEvent.MOUSE_UP, this.shop3);
this.shopscreen.b4.removeEventListener(MouseEvent.MOUSE_UP, this.shop4);
this.shopscreen.b5.removeEventListener(MouseEvent.MOUSE_UP, this.shop5);
this.shopscreen.b6.removeEventListener(MouseEvent.MOUSE_UP, this.shop6);
this.shopscreen.b7.removeEventListener(MouseEvent.MOUSE_UP, this.optionshow);
this.shopscreen.b8.removeEventListener(MouseEvent.MOUSE_UP, this.shop8);
this.shopscreen.b9.removeEventListener(MouseEvent.MOUSE_UP, this.shop9);
this.shopscreen.shop1.bb1.removeEventListener(MouseEvent.MOUSE_UP, this.shop1a);
this.shopscreen.shop1.bb2.removeEventListener(MouseEvent.MOUSE_UP, this.shop1b);
this.shopscreen.shop1.bb3.removeEventListener(MouseEvent.MOUSE_UP, this.shop1c);
this.shopscreen.ships1.rightx.removeEventListener(MouseEvent.MOUSE_UP, this.rightx);
this.i = 15 + 1;
do
{

    this.shopscreen.shop1["a" + this.i].buy.removeEventListener(MouseEvent.MOUSE_UP, this.a1f);
    this.shopscreen.shop1["a" + this.i].equip.removeEventListener(MouseEvent.MOUSE_UP, this.a2f);
    this.shopscreen.shop1["a" + this.i].buy.removeEventListener(MouseEvent.MOUSE_DOWN, this.a1ft);
    this.shopscreen.shop1["a" + this.i].equip.removeEventListener(MouseEvent.MOUSE_DOWN, this.a1ft);
    this.shopscreen.shop1["a" + this.i].trial.removeEventListener(MouseEvent.MOUSE_DOWN, this.a1ft);
    this.shopscreen.shop1["a" + this.i].trial.removeEventListener(MouseEvent.MOUSE_UP, this.a3f);
    this.shopscreen.shop1["a" + this.i].upg.removeEventListener(MouseEvent.MOUSE_UP, this.upgf);
    this.shopscreen.shop1["a" + this.i].upg.removeEventListener(MouseEvent.MOUSE_DOWN, this.a1ft);
    this.shopscreen.shop1["a" + this.i].boxhigh.removeEventListener(MouseEvent.MOUSE_DOWN, this.skillfollow);
    var _loc_1:String = this;
    _loc_1.i = this.i - 1;
}while (--this.i > 0)
stage.removeEventListener(MouseEvent.MOUSE_UP, this.endcancel);
this.shopscreen.skillmask.removeEventListener(MouseEvent.MOUSE_UP, this.skillend);
this.i = 10 + 1;
do
{

    this.shopscreen["sk" + this.i].removeEventListener(MouseEvent.MOUSE_UP, this.skillch);
    this.shopscreen["sk" + this.i].removeEventListener(MouseEvent.MOUSE_DOWN, this.skillch2);
    var _loc_1:String = this;
    _loc_1.i = this.i - 1;
}while (--this.i > 0)
this.shopscreen.shop1.removeEventListener(MouseEvent.MOUSE_WHEEL, this.handleMouseWheel);
return;
}// end function

public function mc1f(event:MouseEvent) : void
{
this.mousecontrol = true;
this.optionupdate(this.optionscreen);
return;
}// end function

public function mc2f(event:MouseEvent) : void
{
this.mousecontrol = false;
this.optionupdate(this.optionscreen);
return;
}// end function

public function scrollzf(event:MouseEvent) : void
{
this.oriscrollz = this.shopscreen.shop1.scrollz.y;
this.orimousez = mouseY;
this.scrolln = 3;
return;
}// end function

public function b2f(event:MouseEvent) : void
{
this.whiteon = true;
this.whitescreen.gotoAndStop(1);
this.whitescreen.visible = true;
this.optionupdate(this.optionscreen);
return;
}// end function

public function item15f() : int
{
    return 3 + (this.itemx[15] % 10 - 3);
}// end function

public function missionlisten() : void
{
this.i = 15 + 1;
do
{

    this.mission["a" + this.i].ax2.axb.addEventListener(MouseEvent.MOUSE_UP, this.missionpress);
    var _loc_1:String = this;
    _loc_1.i = this.i - 1;
}while (--this.i > 0)
this.mission.lm.addEventListener(MouseEvent.MOUSE_UP, this.missionexit);
this.mission.am.addEventListener(MouseEvent.MOUSE_UP, this.missionaccept);
this.mission.cr.addEventListener(MouseEvent.MOUSE_UP, this.acceptreward);
this.mission.exitb.addEventListener(MouseEvent.MOUSE_UP, this.missionexit);
return;
}// end function

public function openasker2(event:MouseEvent) : void
{
this.shopscreen.asker.visible = false;
this.shopscreen.asker2.visible = true;
if (this.overrideboss)
{
    this.shopscreen.asker2.sb.ex.visible = true;
}
else
{
    this.shopscreen.asker2.sb.ex.visible = false;
}
this.blurx(this.shopscreen.asker2);
this.shopscreen.asker2.axt.text = String(this.setlevel);
return;
}// end function

public function bossfuc(event:MouseEvent) : void
{
this.namenow = "bw";
this.continuem2();
return;
}// end function

public function orishop(param1:MovieClip, param2:int) : void
    {
        param1.bl1.visible = false;
param1.bl2.visible = false;
param1.bl3.visible = false;
this.i = this.shopmax[this.shopnum] + 1;
do
{

    param1["a" + this.i].bout.visible = false;
    param1["a" + this.i].a1.text = this.a1Text[this.i + param2];
    param1["a" + this.i].a2.text = this.a2Text[this.i + param2];
    param1["a" + this.i].a4.text = this.a4Text[this.i + param2];
    param1["a" + this.i].a4.blendMode = BlendMode.ADD;
    param1["a" + this.i].y = this.oriy + (this.i - 1) * 50;
    param1["a" + this.i].x = param1.a1.x;
    param1["a" + this.i].a2.x = param1["a" + this.i].a1.x + param1["a" + this.i].a1.textWidth + 5;
    param1["a" + this.i].a3.text = this.commaf(this.goldValue[this.i + param2]) + " Gold";
    param1["a" + this.i].a2.transform.colorTransform = this.colorValue[this.i + param2];
    param1["a" + this.i].a5.gotoAndStop(100);
    param1["a" + this.i].a6.gotoAndStop(1);
    param1["a" + this.i].buy.visible = false;
    param1["a" + this.i].trial.visible = false;
    param1["a" + this.i].upg.visible = false;
    param1["a" + this.i].a3.transform.colorTransform = new ColorTransform();
    var _loc_3:String = this;
    _loc_3.i = this.i - 1;
}while (--this.i > 0)
if (this.shopmax[this.shopnum] < 7)
{
    param1.scrollz.visible = false;
}
else
{
    param1.scrollz.visible = true;
}
param1.scrollz.y = 127 * (-1 * (this.shopscreen.shop1.a1.y - 42) / ((this.shopmax[this.shopnum] - 6) * 50 - 15 + 42)) + 76;
this.i = 15 + 1;
do
{

    if (this.i > this.shopmax[this.shopnum])
    {
        param1["a" + this.i].y = 5000;
    }
    var _loc_3:String = this;
    _loc_3.i = this.i - 1;
}while (--this.i > 0)
this.i = 3 + 1;
do
{

    if (this.shopnum - this.sdiff == this.i)
    {
        param1["bl" + this.i].visible = true;
    }
    else
    {
        param1["bl" + this.i].visible = false;
    }
    var _loc_3:String = this;
    _loc_3.i = this.i - 1;
}while (--this.i > 0)
this.updatestuff();
this.itemsupdate();
return;
}// end function

public function bonusget(param1:MovieClip) : void
{
this.numuse = param1.ax.currentFrame;
if (this.bonussoundonce)
{
    this.bonussoundonce = false;
    if (this.numuse !== 16 && this.numuse !== 21)
    {
        if (param1.goodbonus)
        {
            this.soundf(this.gbsound);
        }
        else
        {
            if (this.itemx[35] >= 3 && this.itemx[35] < 10)
            {
                this.ep = this.ep + this.valuegain(this.ep, this.tep, this.item35f());
            }
            if (this.numuse == 12)
            {
                this.soundf(this.boomsound);
            }
            else
            {
                this.soundf(this.bbsound);
            }
        }
    }
}
if (this.replayx !== 4)
{
    (this.bcollect + 1);
    (this.bonusthis + 1);
}
if (this.numuse == 1)
{
    this.goldf(this.highgold());
    this.bonusdisplay(this.highgold() + " Gold", 2);
}
else if (this.numuse == 2)
{
    this.goldf(this.lowgold());
    this.bonusdisplay(this.lowgold() + " Gold", 2);
}
else if (this.numuse == 3)
{
    if (this.hp !== this.thp)
    {
        if (this.itemx[37] == 3)
        {
            this.bonusdisplay(this.valuegain(this.hp, this.thp, 100) + " Armor", 1);
        }
        else
        {
            this.bonusdisplay(this.valuegain(this.hp, this.thp, 50) + " Armor", 1);
        }
    }
    else
    {
        this.bonusdisplay("Max Armor", 1);
    }
    if (this.itemx[37] == 3)
    {
        this.hp = this.hp + this.valuegain(this.hp, this.thp, 100);
    }
    else
    {
        this.hp = this.hp + this.valuegain(this.hp, this.thp, 50);
    }
}
else if (this.numuse == 4)
{
    if (this.shp !== this.tshp)
    {
        if (this.itemx[37] == 3)
        {
            this.bonusdisplay(this.valuegain(this.shp, this.tshp, 100) + " Shield", 1);
        }
        else
        {
            this.bonusdisplay(this.valuegain(this.shp, this.tshp, 50) + " Shield", 1);
        }
    }
    else
    {
        this.bonusdisplay("Max Shield", 1);
    }
    if (this.itemx[37] == 3)
    {
        this.shp = this.shp + this.valuegain(this.shp, this.tshp, 100);
    }
    else
    {
        this.shp = this.shp + this.valuegain(this.shp, this.tshp, 50);
    }
}
else if (this.numuse == 5)
{
    if (this.ep !== this.tep)
    {
        if (this.itemx[37] == 3)
        {
            this.bonusdisplay(this.valuegain(this.ep, this.tep, 100) + " Energy", 1);
        }
        else
        {
            this.bonusdisplay(this.valuegain(this.ep, this.tep, 50) + " Energy", 1);
        }
    }
    else
    {
        this.bonusdisplay("Max Energy", 1);
    }
    if (this.itemx[37] == 3)
    {
        this.ep = this.ep + this.valuegain(this.ep, this.tep, 100);
    }
    else
    {
        this.ep = this.ep + this.valuegain(this.ep, this.tep, 50);
    }
}
else if (this.numuse == 6)
{
    if (this.bonuslock == false)
    {
        if (this.weaponmode == 6)
        {
            this.bonusdisplay("Fusion Plasma", 4);
            this.weaponmode = 9;
            this.bonustimer = this.bonuslength * 3;
            this.weaponchange();
        }
        else if (this.weaponmode == 13)
        {
            this.bonusdisplay("Fusion Laser", 4);
            this.weaponmode = 15;
            this.bonustimer = this.bonuslength * 3;
            this.weaponchange();
        }
        else if (this.weaponmode == 18)
        {
            this.bonusdisplay("Fusion Synth", 4);
            this.weaponmode = 19;
            this.bonustimer = this.bonuslength * 3;
            this.weaponchange();
        }
        else
        {
            this.bonusdisplay("Fusion Fire", 4);
            this.weaponmode = 2;
            this.bonustimer = this.bonuslength;
            this.weaponchange();
        }
    }
    else
    {
        this.bonusdisplay("Bonus Locked", 3);
    }
}
else if (this.numuse == 7)
{
    if (this.bonuslock == false)
    {
        if (this.weaponmode == 7)
        {
            this.bonusdisplay("Double Vecton Laser", 4);
            this.weaponmode = 8;
            this.bonustimer = this.bonuslength * 3;
            this.weaponchange();
        }
        else if (this.weaponmode == 13)
        {
            this.bonusdisplay("Double Blue Laser", 4);
            this.weaponmode = 14;
            this.bonustimer = this.bonuslength * 3;
            this.weaponchange();
        }
        else
        {
            this.bonusdisplay("Double Fire", 4);
            this.weaponmode = 3;
            this.bonustimer = this.bonuslength;
            this.weaponchange();
        }
    }
    else
    {
        this.bonusdisplay("Bonus Locked", 3);
    }
}
else if (this.numuse == 8)
{
    if (this.bonuslock == false)
    {
        if (this.weaponmode == 10)
        {
            this.bonusdisplay("Cataclysm Blast", 4);
            this.weaponmode = 11;
            this.bonustimer = this.bonuslength * 2;
            this.weaponchange();
        }
        else if (this.weaponmode == 16)
        {
            this.bonusdisplay("Fevron Blast", 4);
            this.weaponmode = 17;
            this.bonustimer = this.bonuslength * 3;
            this.weaponchange();
        }
        else
        {
            this.bonusdisplay("Laser Blast", 4);
            this.weaponmode = 4;
            this.bonustimer = this.bonuslength;
            this.weaponchange();
        }
    }
    else
    {
        this.bonusdisplay("Bonus Locked", 3);
    }
}
else if (this.numuse == 9)
{
    this.expl(this.ship.x, this.ship.y, 103);
    this.negmode = 2;
    this.negtimer = this.negbonuslength;
    this.negchange();
}
else if (this.numuse == 10)
{
    this.expl(this.ship.x, this.ship.y, 103);
    this.negmode = 3;
    this.negtimer = this.negbonuslength;
    this.negchange();
}
else if (this.numuse == 11)
{
    this.expl(this.ship.x, this.ship.y, 103);
    this.negmode = 4;
    this.negtimer = this.negbonuslength;
    this.negchange();
}
else if (this.numuse == 12)
{
    this.bonusdisplay("EXPLOSION!", 5);
    this.expl(this.ship.x, this.ship.y, 104);
    this.shipdamage(10 + this.levelx * 5);
}
else if (this.numuse == 13)
{
    this.bonusdisplay("- " + (1000 + 1000 * this.levelx) + " Gold", 5);
    this.expl(this.ship.x, this.ship.y, 103);
    this.gold = this.gold - (1000 + 1000 * this.levelx);
}
else if (this.numuse == 14)
{
    if (this.missleAmmo[20] < 999 - 25)
    {
        if (this.itemx[37] == 3)
        {
            this.missleAmmo[20] = this.missleAmmo[20] + 50;
            this.bonusdisplay("50 Regular Missiles", 1);
        }
        else
        {
            this.missleAmmo[20] = this.missleAmmo[20] + 25;
            this.bonusdisplay("25 Regular Missiles", 1);
        }
    }
    else
    {
        this.missleAmmo[20] = 999;
        this.bonusdisplay("Max Regular Missiles", 1);
    }
}
else if (this.numuse == 15)
{
    this.expl(this.ship.x, this.ship.y, 103);
    this.negmode = 5;
    this.negtimer = this.negbonuslength * 2;
    this.negchange();
}
else if (this.numuse == 16)
{
    this.k = 10 + 1;
    do
    {

        if (this.skills["a" + this.k].ax5.currentFrame !== 1)
        {
            this.skills["a" + this.k].ax5.stop();
        }
        var _loc_2:String = this;
        _loc_2.k = this.k - 1;
    }while (--this.k > 0)
    Mouse.show();
    this.pausegame = false;
    this.lockpause = false;
    this.mission.gotoAndStop(2);
    this.missionnow = 3;
}
else if (this.numuse == 17)
{
    if (this.bonuslock == false)
    {
        this.bonusdisplay("Unleashed Plasma", 4);
        this.weaponmode = 6;
        this.bonustimer = this.bonuslength * 2;
        this.weaponchange();
    }
    else
    {
        this.bonusdisplay("Bonus Locked", 3);
    }
}
else if (this.numuse == 18)
{
    if (this.bonuslock == false)
    {
        this.bonusdisplay("Vecton Laser", 4);
        this.weaponmode = 7;
        this.bonustimer = this.bonuslength * 2;
        this.weaponchange();
        if (this.itemx[313] == 1)
        {
            this.achievef(313);
        }
    }
    else
    {
        this.bonusdisplay("Bonus Locked", 3);
    }
}
else if (this.numuse == 19)
{
    if (this.bonuslock == false)
    {
        this.bonusdisplay("Cataclysm Orbs", 4);
        this.weaponmode = 10;
        this.bonustimer = this.bonuslength * 2;
        this.weaponchange();
    }
    else
    {
        this.bonusdisplay("Bonus Locked", 3);
    }
}
else if (this.numuse == 20)
{
    if (this.bonuslock == false)
    {
        this.bonusdisplay("Ultra Tetra Fire", 4);
        this.weaponmode = 12;
        this.bonustimer = this.bonuslength * 2;
        this.weaponchange();
    }
    else
    {
        this.bonusdisplay("Bonus Locked", 3);
    }
}
else if (this.numuse == 21)
{
    this.k = 10 + 1;
    do
    {

        if (this.skills["a" + this.k].ax5.currentFrame !== 1)
        {
            this.skills["a" + this.k].ax5.stop();
        }
        var _loc_2:String = this;
        _loc_2.k = this.k - 1;
    }while (--this.k > 0)
    Mouse.show();
    this.pausegame = false;
    this.lockpause = false;
    this.avatar.gotoAndStop(2);
    this.avatar.visible = true;
    this.avatarnow = 3;
}
else if (this.numuse == 22)
{
    this.bonusdisplay("Nekon Orb", 3);
    (this.orbcounter + 1);
}
else if (this.numuse == 23)
{
    this.bonusdisplay("Red Nekon Orb", 3);
    (this.orbcounter + 1);
}
else if (this.numuse == 24)
{
    this.bonusdisplay("Green Nekon Orb", 3);
    (this.orbcounter + 1);
}
else if (this.numuse == 25)
{
    this.bonusdisplay("Black Nekon Orb", 3);
    (this.orbcounter + 1);
}
else if (this.numuse == 26)
{
    this.bonusdisplay("Bonus Killer!", 5);
    this.expl(this.ship.x, this.ship.y, 123);
    this.weaponmode = 1;
    this.bonustimer = 0;
    this.weaponchange();
}
else if (this.numuse == 27)
{
    this.expl(this.ship.x, this.ship.y, 103);
    this.negmode = 8;
    this.negtimer = this.negbonuslength;
    this.negchange();
}
else if (this.numuse == 28)
{
    if (this.bonuslock == false)
    {
        this.bonusdisplay("Blue Laser", 4);
        this.weaponmode = 13;
        this.bonustimer = this.bonuslength * 2;
        this.weaponchange();
        if (this.itemx[330] == 1)
        {
            this.achievef(330);
        }
    }
    else
    {
        this.bonusdisplay("Bonus Locked", 3);
    }
}
else if (this.numuse == 29)
{
    this.tutshow(2, "Exploding Box", "You fool, I am no ordinary box. Hahahahaha!");
    this.bonusdisplay("Exploding Box", 5);
    if (this.itemx[333] == 1)
    {
        this.achievef(333);
    }
    this.explitemtimer = 150;
    this.eitemx = param1.x;
    this.eitemy = param1.y;
}
else if (this.numuse == 30)
{
    this.bonusdisplay("Total Recovery!", 1);
    this.ep = this.tep;
    this.hp = this.thp;
    this.shp = this.tshp;
}
else if (this.numuse == 31)
{
    this.intuse = this.levelx;
    if (this.intuse > 20)
    {
        this.intuse = 20;
    }
    this.tutshow(2, "Torn Note", this.noteArray[this.intuse]);
}
else if (this.numuse == 32)
{
    this.itemx[44] = 1;
    this.bonusdisplay("Ledgendary Key!", 3);
}
else if (this.numuse == 33)
{
    if (this.bonuslock == false)
    {
        this.bonusdisplay("Fevron Sparks", 4);
        this.weaponmode = 16;
        this.bonustimer = this.bonuslength * 2;
        this.weaponchange();
    }
    else
    {
        this.bonusdisplay("Bonus Locked", 3);
    }
}
else if (this.numuse == 34)
{
    if (this.bonuslock == false)
    {
        this.bonusdisplay("Phase Synth", 4);
        this.weaponmode = 18;
        this.bonustimer = this.bonuslength * 2;
        this.weaponchange();
    }
    else
    {
        this.bonusdisplay("Bonus Locked", 3);
    }
}
else if (this.numuse >= 35 && this.numuse <= 43)
{
    if (this.missleAmmo[30 + this.numuse - 35] + this.goldValue[211 + this.numuse - 35] <= 20)
    {
        if (this.numuse == 43)
        {
            this.bonusdisplay("+" + this.goldValue[211 + this.numuse - 35] + " " + this.a1Text[211 + this.numuse - 35], 7);
        }
        else
        {
            this.bonusdisplay("+" + this.goldValue[211 + this.numuse - 35] + " " + this.a1Text[211 + this.numuse - 35] + "s", 7);
        }
        this.missleAmmo[30 + this.numuse - 35] = this.missleAmmo[30 + this.numuse - 35] + this.goldValue[211 + this.numuse - 35];
    }
    else
    {
        this.missleAmmo[30 + this.numuse - 35] = 20;
        this.bonusdisplay(this.a1Text[211 + this.numuse - 35] + "s Full", 7);
    }
}
else if (this.numuse == 44)
{
    this.k = 13;
    (this.itemx[this.k + 400] + 1);
    if (this.itemx[this.k + 400] - 5 < this.killTotal[this.k + 400])
    {
        this.bonusdisplay(this.a1Text[this.k + 400] + " ( " + (this.itemx[this.k + 400] - 5) + " / " + this.killTotal[this.k + 400] + " )", 3);
    }
    else if (this.itemx[this.k + 400] - 5 == this.killTotal[this.k + 400])
    {
        this.bonusdisplay(this.a1Text[this.k + 400] + " ( Complete! )", 3);
        (this.mcomplete + 1);
        if (this.itemx[326] == 1)
        {
            if (this.mcomplete > 4)
            {
                this.achievef(326);
            }
        }
        if (this.itemx[341] == 1)
        {
            if (this.mcomplete > 14)
            {
                this.achievef(341);
            }
        }
    }
}
return;
}// end function

public function equipthis(param1:int) : void
{
this.equipnum = this.equipnum + param1;
if (param1 > 0)
{
    this.soundf(this.bsound);
}
else
{
    this.soundf(this.uqsound);
}
if (this.idiff < 100)
{
    this.nnum[this.idiff] = this.nnum[this.idiff] + param1;
}
return;
}// end function

public function g1fx(event:MouseEvent) : void
{
this.qualityx = 1;
stage.quality = "medium";
this.optionupdatex();
stage.frameRate = 24;
return;
}// end function

public function pgevent(event:MouseEvent) : void
    {
        stage.removeEventListener(Event.ENTER_FRAME, this.fakeload);
this.pg.pg.removeEventListener(MouseEvent.CLICK, this.pgevent);
this.g1.ax.removeEventListener(MouseEvent.MOUSE_UP, this.g1fx);
this.g2.ax.removeEventListener(MouseEvent.MOUSE_UP, this.g2fx);
this.g3.ax.removeEventListener(MouseEvent.MOUSE_UP, this.g3fx);
this.s1.ax.removeEventListener(MouseEvent.MOUSE_UP, this.s1fx);
this.s2.ax.removeEventListener(MouseEvent.MOUSE_UP, this.s2fx);
this.kbut.removeEventListener(MouseEvent.MOUSE_UP, this.gotoKong);
this.kbut2.removeEventListener(MouseEvent.MOUSE_UP, this.gotoKong);
Tracker.LogPlay();
loaderInfo.removeEventListener(ProgressEvent.PROGRESS, this.onProgressMade);
loaderInfo.removeEventListener(Event.COMPLETE, this.onCompletelyDownloaded);
play();
return;
}// end function

public function endcancel(event:MouseEvent) : void
{
this.okaypress = false;
return;
}// end function

public function textloadb(event:MouseEvent) : void
{
this.savescreen.tl.visible = true;
this.savescreen.tl.ax.text = "";
return;
}// end function

public function s2fx(event:MouseEvent) : void
{
this.soundon = false;
this.musicon = false;
this.optionupdatex();
return;
}// end function

public function stopMusic() : void
{
if (this.musicChannel != null)
{
    this.soundPosition = this.musicChannel.position;
    this.musicChannel.stop();
    this.musicChannel.removeEventListener(Event.SOUND_COMPLETE, this.loopMusic);
    this.musicChannel = null;
}
return;
}// end function

public function distancef2(param1:MovieClip, param2:int, param3:int) : int
{
    this.numuse = this.round(Math.sqrt((param1.x - param2) * (param1.x - param2) + (param1.y - param3) * (param1.y - param3)));
    return this.numuse;
}// end function

public function heal1(event:MouseEvent) : void
{
this.hp = this.thp;
this.shopscreen.shipflash.play();
this.shopscreen.r1.visible = false;
this.shopscreen.d1.text = "Armor: " + this.hp + "/" + this.thp;
this.savehp = 1;
this.gold = this.gold - 1000;
this.soundf(this.rsound);
return;
}// end function

public function qlow2(event:MouseEvent) : void
{
if (this.passw.text == "Charlotte" || this.passw.text == "charlotte")
{
    this.newgame = true;
    this.gameonce = true;
    gotoAndStop(1, "Scene 2");
}
else
{
    this.passw.text = "Incorrect Password";
}
return;
}// end function

public function heal2(event:MouseEvent) : void
{
this.shp = this.tshp;
this.shopscreen.shipflash.play();
this.shopscreen.r2.visible = false;
this.shopscreen.d2.text = "Shield: " + this.shp + "/" + this.tshp;
this.gold = this.gold - 1000;
this.saveshp = 1;
this.soundf(this.rsound);
return;
}// end function

public function heal3(event:MouseEvent) : void
{
this.ep = this.tep;
this.shopscreen.shipflash.play();
this.shopscreen.r3.visible = false;
this.shopscreen.d3.text = "Energy: " + this.round(this.ep) + "/" + this.tep;
this.gold = this.gold - 1000;
this.saveep = 1;
this.soundf(this.rsound);
return;
}// end function

public function numadd(param1:int) : void
{
if (int(this.splitvar2[this.j + param1]) == 33)
{
    (this.numuse + 1);
}
else if (int(this.splitvar2[this.j + param1]) == 111)
{
    this.numuse = this.numuse + -1;
}
else if (int(this.splitvar2[this.j + param1]) == 13)
{
    this.numuse = this.numuse + 2;
}
else
{
    this.numuse = this.numuse + int(this.splitvar2[this.j + param1]);
}
return;
}// end function

public function tutno(event:MouseEvent) : void
{
this.lockpause = true;
this.tutlevel = 600;
this.once = true;
return;
}// end function

public function endscroll(event:MouseEvent) : void
{
this.scrolln = 0;
return;
}// end function

public function beamfun(param1:MovieClip) : void
    {
        param1.firetimer = 30 + this.ceil(Math.random() * param1.firerate);
this.k = param1.firenum + 1;
this.soundf(this.electrosound);
do
{

    if (this.be < 4)
    {
        (this.be + 1);
    }
    else
    {
        this.be = 1;
    }
    if (this.beamArray[this.be].useok == true)
    {
        this.beamArray[this.be].useok = false;
        this.beamArray[this.be].gotoAndStop(3);
        this.beamArray[this.be].ax.gotoAndStop(param1.weapontype - 2);
        this.beamArray[this.be].ax2.gotoAndStop(param1.weapontype - 2);
        this.beamArray[this.be].ax.height = 2;
        this.numuse = param1.bval + this.k;
        this.beamArray[this.be].loc = param1.ax["a" + this.numuse];
        this.beamArray[this.be].loc2 = param1;
        this.beamArray[this.be].x = this.findx(this.beamArray[this.be].loc2.x, -this.beamArray[this.be].loc.x, -this.beamArray[this.be].loc.y, this.beamArray[this.be].loc2.rotation);
        this.beamArray[this.be].y = this.findy(this.beamArray[this.be].loc2.y, -this.beamArray[this.be].loc.x, -this.beamArray[this.be].loc.y, this.beamArray[this.be].loc2.rotation);
        this.expl(this.beamArray[this.be].x, this.beamArray[this.be].y, 117);
        this.beamArray[this.be].timerx = 1;
        this.beamArray[this.be].finx = this.ship.x + this.speedx * 5;
        this.beamArray[this.be].finy = this.ship.y + this.speedy * 5;
        this.beamArray[this.be].tdist = this.distancef2(this.beamArray[this.be], this.beamArray[this.be].finx, this.beamArray[this.be].finy);
        this.beamArray[this.be].rotation = this.findrotation2(this.beamArray[this.be], this.beamArray[this.be].finx, this.beamArray[this.be].finy) + 180;
    }
    var _loc_2:String = this;
    _loc_2.k = this.k - 1;
}while (--this.k > 0)
return;
}// end function

public function shipb3(event:MouseEvent) : void
{
this.splitvar = event.target.name.split("b");
this.newint = this.splitvar[1] - 1;
this.orishipv = this.shipselect;
this.shipselect = this.offvar + this.newint;
this.dispship = this.shipselect;
if (this.shipown[this.dispship] == 3)
{
    this.orishipv = this.dispship;
}
this.oriship(this.shopscreen.ships1);
this.shopscreen.ships1.sflash.play();
this.shopscreen.ships1.s5.y = 295;
return;
}// end function

public function m1f(event:MouseEvent) : void
{
this.musicon = true;
this.playMusic();
this.optionupdate(this.optionscreen);
return;
}// end function

public function textloadff(event:MouseEvent) : void
{
this.textuseK = this.savescreen.tl.ax.text;
this.textnow = 1;
this.textload();
return;
}// end function

public function m2f(event:MouseEvent) : void
{
this.musicon = false;
this.stopMusic();
this.optionupdate(this.optionscreen);
return;
}// end function

public function bonusdisplay(param1:String, param2:int)
{
    if (this.bonusdtimer < 0)
    {
        this.bonusdtimer = 10;
        if (this.dp < this.dispnum)
        {
            (this.dp + 1);
        }
        else
        {
            this.dp = 1;
        }
        if (this.dispArray[this.dp].useok)
        {
            if (param2 == 1)
            {
                this.alltint.setTint(6750084, 1);
            }
            else if (param2 == 2)
            {
                this.alltint.setTint(16761190, 1);
            }
            else if (param2 == 3)
            {
                this.alltint.setTint(16777215, 1);
            }
            else if (param2 == 4)
            {
                this.alltint.setTint(8447743, 1);
            }
            else if (param2 == 5)
            {
                this.alltint.setTint(16596542, 1);
            }
            else if (param2 == 6)
            {
                this.alltint.setTint(8388863, 1);
            }
            else if (param2 == 7)
            {
                this.alltint.setTint(16618238, 1);
            }
            this.dispArray[this.dp].ax2.transform.colorTransform = this.alltint;
            this.dispArray[this.dp].fmode = false;
            this.dispArray[this.dp].useok = false;
            this.dispArray[this.dp].alpha = 0;
            this.dispArray[this.dp].y = this.ship.y + 25;
            this.dispArray[this.dp].x = this.ship.x;
            this.dispArray[this.dp].ax2.text = param1;
            this.dispArray[this.dp].ax.text = param1;
        }
    }
    return;
}// end function

public function switchx() : void
{
this.soundf(this.shopsound);
if (this.currentshop == 1 || this.currentshop == 2 || this.currentshop == 4 || this.currentshop == 5 || this.currentshop == 6 || this.currentshop == 9)
{
    this.shopArray[1].y = 501;
    this.shopArray[10].y = this.shopscreen.glows.y;
}
else
{
    this.shopArray[1].y = 501;
}
return;
}// end function

public function reportKeyDown(event:KeyboardEvent) : void
{
if (this.cheater == 2)
{
    if (event.keyCode == 71)
    {
        this.tutshow(2, "Genu", "Hey, I am Genu -- This is a message to test my icon.");
    }
    if (event.keyCode == 72)
    {
        this.tutshow(2, "Skymar", "Hey, I am Skymar -- This is a message to test my icon.");
    }
    if (event.keyCode == 73)
    {
        this.hp = 500000;
        this.thp = 500000;
    }
    if (event.keyCode == Keyboard.DELETE)
    {
        this.leveltimer = -100;
    }
    if (event.keyCode == Keyboard.HOME)
    {
        this.missionshow = 1;
    }
    if (event.keyCode == Keyboard.INSERT)
    {
        this.noteshow = 1;
    }
    if (event.keyCode == Keyboard.PAGE_DOWN)
    {
        this.weapondamage = 50000;
    }
    if (event.keyCode == Keyboard.BACKSPACE)
    {
        if (this.itemx[44] == -1)
        {
            this.itemx[44] = 1;
        }
    }
    if (event.keyCode == Keyboard.SHIFT)
    {
        this.BOSSFIND = 6;
    }
    if (event.keyCode == 75)
    {
        if (this.overrideboss == false)
        {
            this.overrideboss = true;
            this.bonusdisplay("Steven\'s Cheat", 3);
        }
    }
    if (event.keyCode == Keyboard.PAGE_UP)
    {
        this.goldf(5000000);
        this.achpoints = this.achpoints + 20;
        this.tutfirst2 = 2;
        if (this.itemx[16] == -1)
        {
            this.itemx[16] = 1;
        }
        if (this.itemx[31] == -1)
        {
            this.itemx[31] = 1;
        }
        if (this.itemx[108] == -1)
        {
            this.itemx[108] = 1;
        }
        if (this.itemx[115] == -1)
        {
            this.itemx[115] = 1;
        }
        if (this.itemx[204] == -1)
        {
            this.itemx[204] = 1;
        }
        if (this.itemx[207] == -1)
        {
            this.itemx[207] = 1;
        }
        if (this.BOSSFIND == 6)
        {
            this.updatestuff();
        }
    }
    if (event.keyCode == 82)
    {
        (this.levelx + 1);
        this.lvx = this.levelx % 6;
        if (this.lvx == 0)
        {
            this.lvx = 6;
        }
        this.bg1.gotoAndStop(this.lvx);
        if (this.BOSSFIND == 6)
        {
            this.updatestuff();
        }
    }
}
if (event.keyCode == Keyboard.END)
{
    this.hp = 0;
    this.shp = 0;
    this.bonusdisplay("SELF DESTRUCT", 5);
}
if (event.keyCode == 75)
{
    if (this.tutlevel > 0)
    {
        this.tutlevel = 22;
    }
}
if (this.cheater !== 2)
{
    if (this.customkeys.indexOf(89) == -1)
    {
        if (event.keyCode == 89)
        {
            this.cheacounter = 5;
        }
    }
    if (this.customkeys.indexOf(85) == -1)
    {
        if (event.keyCode == 85)
        {
            if (this.cheacounter == 5)
            {
                this.cheacounter = 10;
            }
            else
            {
                this.cheacounter = 0;
            }
        }
    }
    if (this.customkeys.indexOf(73) == -1)
    {
        if (event.keyCode == 85)
        {
            if (this.cheacounter == 10)
            {
                this.cheacounter = 15;
            }
            else
            {
                this.cheacounter = 0;
            }
        }
    }
    if (this.customkeys.indexOf(72) == -1)
    {
        if (event.keyCode == 72)
        {
            if (this.cheacounter == 15)
            {
                this.cheacounter = 20;
            }
            else
            {
                this.cheacounter = 0;
            }
        }
    }
    if (this.customkeys.indexOf(74) == -1)
    {
        if (event.keyCode == 74)
        {
            if (this.cheacounter == 20)
            {
                this.cheacounter = 25;
            }
            else
            {
                this.cheacounter = 0;
            }
        }
    }
    if (this.customkeys.indexOf(75) == -1)
    {
        if (event.keyCode == 75)
        {
            if (this.cheacounter == 25)
            {
                this.cheater = 2;
                this.bonusdisplay("Cheater", 3);
            }
            else
            {
                this.cheacounter = 0;
            }
        }
    }
}
if (this.BOSSFIND == 6)
{
    this.pausescreen.visible = false;
    this.pausescreen.gotoAndStop(5);
    if (this.shopscreen.currentFrame == 1)
    {
        this.shopscreen.howtoskill.gotoAndStop(1);
    }
}
if (this.BOSSFIND !== 6)
{
    this.keydown = false;
    if (event.keyCode == Keyboard.LEFT || event.keyCode == 65)
    {
        this.moveLeft = true;
        this.moveRight = false;
    }
    if (event.keyCode == Keyboard.RIGHT || event.keyCode == 68)
    {
        this.moveRight = true;
        this.moveLeft = false;
    }
    if (event.keyCode == Keyboard.UP || event.keyCode == 87)
    {
        this.moveUp = true;
        this.moveDown = false;
    }
    if (event.keyCode == Keyboard.DOWN || event.keyCode == 83)
    {
        this.moveUp = false;
        this.moveDown = true;
    }
    if (event.keyCode == Keyboard.SPACE || event.keyCode == this.customkeys[12])
    {
        if (this.mousecontrol == false)
        {
            if (this.lockon)
            {
                this.lockon = false;
                if (this.leveltimer < this.levellength - 20)
                {
                    this.bonusdisplay("Targeting OFF", 3);
                }
                this.mousepointer.visible = false;
                Mouse.show();
            }
        }
        this.shoot = true;
        this.shoot2 = true;
    }
    if (event.keyCode == Keyboard.CONTROL)
    {
        this.mfire = true;
    }
    if (event.keyCode == 49 || event.keyCode == this.customkeys[1] || event.keyCode == 97)
    {
        this.keydown = true;
        (this.bpress + 1);
        this.btimer = 50;
        this.skillsf(this.skillsArray[1], 1);
    }
    if (event.keyCode == 50 || event.keyCode == this.customkeys[2] || event.keyCode == 98)
    {
        this.keydown = true;
        (this.bpress + 1);
        this.btimer = 50;
        this.skillsf(this.skillsArray[2], 2);
    }
    if (event.keyCode == 51 || event.keyCode == this.customkeys[3] || event.keyCode == 99)
    {
        this.keydown = true;
        this.skillsf(this.skillsArray[3], 3);
    }
    if (event.keyCode == 52 || event.keyCode == this.customkeys[4] || event.keyCode == 100)
    {
        this.keydown = true;
        this.skillsf(this.skillsArray[4], 4);
    }
    if (event.keyCode == 53 || event.keyCode == this.customkeys[5] || event.keyCode == 101)
    {
        this.keydown = true;
        this.skillsf(this.skillsArray[5], 5);
    }
    if (event.keyCode == 54 || event.keyCode == this.customkeys[6] || event.keyCode == 102)
    {
        this.keydown = true;
        this.skillsf(this.skillsArray[6], 6);
    }
    if (event.keyCode == 55 || event.keyCode == this.customkeys[7] || event.keyCode == 103)
    {
        this.keydown = true;
        this.skillsf(this.skillsArray[7], 7);
    }
    if (event.keyCode == 56 || event.keyCode == this.customkeys[8] || event.keyCode == 104)
    {
        this.keydown = true;
        this.skillsf(this.skillsArray[8], 8);
    }
    if (event.keyCode == 57 || event.keyCode == this.customkeys[9] || event.keyCode == 105)
    {
        this.keydown = true;
        this.skillsf(this.skillsArray[9], 9);
    }
    if (event.keyCode == 48 || event.keyCode == this.customkeys[10] || event.keyCode == 96)
    {
        this.keydown = true;
        this.skillsf(this.skillsArray[10], 10);
    }
    if (event.keyCode == 90 || event.keyCode == this.customkeys[11])
    {
        this.keydown = true;
        if (this.autofire == false)
        {
            this.autofire = true;
            this.shoot = true;
            this.bonusdisplay("Auto-Fire ON", 3);
        }
        else
        {
            this.autofire = false;
            this.shoot = false;
            this.bonusdisplay("Auto-Fire OFF", 3);
        }
    }
    if (event.keyCode == 80 || event.keyCode == Keyboard.ENTER || event.keyCode == Keyboard.ESCAPE || this.pausegame == false)
    {
        if (this.delaytimer < 0)
        {
            if (this.lockpause)
            {
                if (this.pausegame == false)
                {
                    this.playMusic();
                    this.pausegame = true;
                    this.pausescreen.visible = false;
                    if (this.pausescreen.currentFrame == 7 || this.pausescreen.currentFrame == 4)
                    {
                        this.pausescreen.kbut.removeEventListener(MouseEvent.MOUSE_DOWN, this.gotoKong);
                    }
                    if (this.pausescreen.currentFrame == 7)
                    {
                        this.pausescreen.removeChild(this.pausescreen.adBox);
                    }
                    this.pausescreen.gotoAndStop(5);
                    if (this.lockon)
                    {
                        Mouse.hide();
                    }
                    this.k = 10 + 1;
                    do
                    {

                        if (this.skills["a" + this.k].ax5.currentFrame !== 1)
                        {
                            this.skills["a" + this.k].ax5.play();
                        }
                        var _loc_2:String = this;
                        _loc_2.k = this.k - 1;
                    }while (--this.k > 0)
                }
                else
                {
                    this.stopMusic();
                    this.pausescreen.gotoAndStop(1);
                    this.pauseg();
                }
            }
        }
    }
}
return;
}// end function

}
}
});