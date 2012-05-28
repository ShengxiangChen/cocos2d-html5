public function weaponchange() : void
{
if (this.infinitimer <= 0 || this.infinitimer == 500 + (this.itemx[115] - 3) * 100)
{
    if (this.weaponmode == 1)
    {
        this.weapondelay = this.oriweapondelay;
        this.ship.firechoice = this.orifirechoice;
        this.ship.weaponspeed = this.oriweaponspeed;
        this.ship.weapontype = this.oriweapontype;
        this.ship.weapondamage = this.oriweapondamage;
    }
    else if (this.weaponmode == 2)
    {
        this.weapondelay = 2;
        this.ship.firechoice = 2;
        this.ship.weaponspeed = 25;
        this.ship.weapontype = 20;
        this.ship.weapondamage = 30 + this.levelx;
        if (this.ship.weapondamage > 45)
        {
            this.ship.weapondamage = 45;
        }
    }
    else if (this.weaponmode == 3)
    {
        this.weapondelay = this.oriweapondelay;
        if (this.orifirechoice == 1)
        {
            this.ship.firechoice = 4;
        }
        else if (this.orifirechoice == 2)
        {
            this.ship.firechoice = 5;
        }
        else if (this.orifirechoice == 14)
        {
            this.ship.firechoice = 15;
        }
        this.ship.weaponspeed = this.oriweaponspeed;
        this.ship.weapontype = this.oriweapontype;
        this.ship.weapondamage = this.oriweapondamage;
    }
    else if (this.weaponmode == 4)
    {
        this.weapondelay = 1;
        this.ship.firechoice = 6;
        this.ship.weaponspeed = 30;
        this.ship.weapontype = 21;
        this.ship.weapondamage = 15 + this.levelx;
        if (this.ship.weapondamage > 35)
        {
            this.ship.weapondamage = 35;
        }
    }
    else if (this.weaponmode == 5)
    {
        this.weapondelay = 10;
        this.ship.firechoice = 6;
        this.ship.weaponspeed = 15;
        this.ship.weapontype = 28;
        this.ship.weapondamage = 5;
    }
    else if (this.weaponmode == 6)
    {
        this.weapondelay = 7;
        this.ship.firechoice = 34;
        this.ship.weaponspeed = 20;
        this.ship.weapontype = 18;
        this.ship.weapondamage = 20 + this.levelx;
        if (this.ship.weapondamage > 40)
        {
            this.ship.weapondamage = 40;
        }
    }
    else if (this.weaponmode == 7)
    {
        this.weapondelay = 0;
        this.ship.firechoice = 40;
        this.ship.weaponspeed = 40;
        this.ship.weapontype = 15;
        this.ship.weapondamage = 20 + this.levelx;
        if (this.ship.weapondamage > 40)
        {
            this.ship.weapondamage = 40;
        }
    }
    else if (this.weaponmode == 8)
    {
        this.weapondelay = 0;
        this.ship.firechoice = 41;
        this.ship.weaponspeed = 40;
        this.ship.weapontype = 15;
        this.ship.weapondamage = 20 + this.levelx;
        if (this.ship.weapondamage > 40)
        {
            this.ship.weapondamage = 40;
        }
    }
    else if (this.weaponmode == 9)
    {
        this.weapondelay = 5;
        this.ship.firechoice = 34;
        this.ship.weaponspeed = 21;
        this.ship.weapontype = 69;
        this.ship.weapondamage = 20 + this.levelx;
        if (this.ship.weapondamage > 40)
        {
            this.ship.weapondamage = 40;
        }
    }
    else if (this.weaponmode == 10)
    {
        this.weapondelay = 0;
        this.ship.firechoice = 44;
        this.ship.weaponspeed = 21;
        this.ship.weapontype = 74;
        this.ship.weapondamage = 20 + this.levelx;
        if (this.ship.weapondamage > 40)
        {
            this.ship.weapondamage = 40;
        }
    }
    else if (this.weaponmode == 11)
    {
        this.weapondelay = 0;
        this.ship.firechoice = 45;
        this.ship.weaponspeed = 21;
        this.ship.weapontype = 76;
        this.ship.weapondamage = 30 + this.levelx;
        if (this.ship.weapondamage > 50)
        {
            this.ship.weapondamage = 50;
        }
    }
    else if (this.weaponmode == 12)
    {
        this.weapondelay = 1;
        this.ship.firechoice = 46;
        this.ship.weaponspeed = 30;
        this.ship.weapontype = 78;
        this.ship.weapondamage = 30 + this.levelx;
        if (this.ship.weapondamage > 50)
        {
            this.ship.weapondamage = 50;
        }
    }
    else if (this.weaponmode == 13)
    {
        this.weapondelay = 0;
        this.ship.firechoice = 40;
        this.ship.weaponspeed = 40;
        this.ship.weapontype = 84;
        this.ship.weapondamage = 30 + this.levelx;
        if (this.ship.weapondamage > 50)
        {
            this.ship.weapondamage = 50;
        }
    }
    else if (this.weaponmode == 14)
    {
        this.weapondelay = 0;
        this.ship.firechoice = 41;
        this.ship.weaponspeed = 40;
        this.ship.weapontype = 84;
        this.ship.weapondamage = 30 + this.levelx;
        if (this.ship.weapondamage > 50)
        {
            this.ship.weapondamage = 50;
        }
    }
    else if (this.weaponmode == 15)
    {
        this.weapondelay = 0;
        this.ship.firechoice = 40;
        this.ship.weaponspeed = 40;
        this.ship.weapontype = 40;
        this.ship.weapondamage = 40 + this.levelx;
        if (this.ship.weapondamage > 65)
        {
            this.ship.weapondamage = 65;
        }
    }
    else if (this.weaponmode == 16)
    {
        this.weapondelay = 0;
        this.ship.firechoice = 71;
        this.ship.weaponspeed = 35;
        this.ship.weapontype = 41;
        this.ship.weapondamage = 70 + this.levelx * 2;
        if (this.ship.weapondamage > 105)
        {
            this.ship.weapondamage = 105;
        }
    }
    else if (this.weaponmode == 17)
    {
        this.weapondelay = 0;
        this.ship.firechoice = 72;
        this.ship.weaponspeed = 35;
        this.ship.weapontype = 42;
        this.ship.weapondamage = 70 + this.levelx * 2;
        if (this.ship.weapondamage > 105)
        {
            this.ship.weapondamage = 105;
        }
    }
    else if (this.weaponmode == 18)
    {
        this.weapondelay = 0;
        this.ship.firechoice = 78;
        this.ship.weaponspeed = 35;
        this.ship.weapontype = 43;
        this.ship.weapondamage = 25 + this.levelx;
        if (this.ship.weapondamage > 65)
        {
            this.ship.weapondamage = 65;
        }
    }
    else if (this.weaponmode == 19)
    {
        this.weapondelay = 0;
        this.ship.firechoice = 79;
        this.ship.weaponspeed = 35;
        this.ship.weapontype = 44;
        this.ship.weapondamage = 30 + this.levelx;
        if (this.ship.weapondamage > 65)
        {
            this.ship.weapondamage = 65;
        }
    }
    if (this.weaponmode !== 1)
    {
        if (this.itemx[34] >= 3 && this.itemx[34] < 10)
        {
            this.ship.weapondamage = this.ship.weapondamage + this.item34f();
        }
    }
}
return;
}



public function shipchange() : void
{
this.skillkill();
this.chargedelay = 30;
this.bonuslength = 300;
this.negbonuslength = 130;
this.equipmax = 6;
this.defence = 1;
this.armordefence = 1;
this.bonuslock = false;
this.bonuschance = 0.4;
this.epmulti = 1;
if (this.infinitimer > 0)
{
    this.shipselect = 21;
}
if (this.shipselect == 1)
{
    this.oriweapondelay = 2;
    this.orifirechoice = 1;
    this.oriweaponspeed = 23;
    this.oriweapondamage = 33;
    this.oriweapontype = 1;
    this.thp = 150;
    this.tshp = 40;
    this.tep = 100;
    this.equipmax = 6;
    this.speed = 9;
    this.shipname = "RS Freefighter";
}
else if (this.shipselect == 2)
{
    this.oriweapondelay = 4;
    this.orifirechoice = 2;
    this.oriweaponspeed = 24;
    this.oriweapondamage = 35;
    this.oriweapontype = 2;
    this.thp = 120;
    this.tshp = 60;
    this.tep = 120;
    this.equipmax = 5;
    this.speed = 10;
    this.shipname = "Tricraft Lithium";
}
else if (this.shipselect == 3)
{
    this.oriweapondelay = 3;
    this.orifirechoice = 1;
    this.oriweaponspeed = 26;
    this.oriweapondamage = 51;
    this.oriweapontype = 3;
    this.thp = 180;
    this.tshp = 20;
    this.tep = 80;
    this.equipmax = 7;
    this.speed = 9;
    this.shipname = "Cylium Hunter";
}
else if (this.shipselect == 4)
{
    this.oriweapondelay = 1;
    this.orifirechoice = 1;
    this.oriweaponspeed = 24;
    this.oriweapondamage = 23;
    this.oriweapontype = 4;
    this.thp = 230;
    this.tshp = 60;
    this.tep = 120;
    this.equipmax = 7;
    this.speed = 10;
    this.shipname = "RS Essence";
}
else if (this.shipselect == 5)
{
    this.oriweapondelay = 3;
    this.orifirechoice = 2;
    this.oriweaponspeed = 26;
    this.oriweapondamage = 35;
    this.oriweapontype = 5;
    this.thp = 150;
    this.tshp = 80;
    this.tep = 135;
    this.equipmax = 6;
    this.speed = 11;
    this.shipname = "Tricraft Azimuth";
}
else if (this.shipselect == 6)
{
    this.oriweapondelay = 2;
    this.orifirechoice = 1;
    this.oriweaponspeed = 25;
    this.oriweapondamage = 46;
    this.oriweapontype = 6;
    this.thp = 280;
    this.tshp = 30;
    this.tep = 80;
    this.equipmax = 7;
    this.speed = 9;
    this.shipname = "Rogue Seventeen";
}
else if (this.shipselect == 7)
{
    this.oriweapondelay = 1;
    this.orifirechoice = 1;
    this.oriweaponspeed = 30;
    this.oriweapondamage = 40;
    this.oriweapontype = 7;
    this.thp = 345;
    this.tshp = 110;
    this.tep = 140;
    this.equipmax = 7;
    this.speed = 10;
    this.shipname = "RS Vanquisher";
}
else if (this.shipselect == 8)
{
    this.oriweapondelay = 2;
    this.orifirechoice = 2;
    this.oriweaponspeed = 28;
    this.oriweapondamage = 38;
    this.oriweapontype = 8;
    this.thp = 220;
    this.tshp = 200;
    this.tep = 155;
    this.equipmax = 7;
    this.speed = 10;
    this.shipname = "Tricraft Shadow";
}
else if (this.shipselect == 9)
{
    this.oriweapondelay = 1;
    this.orifirechoice = 1;
    this.oriweaponspeed = 28;
    this.oriweapondamage = 47;
    this.oriweapontype = 9;
    this.thp = 450;
    this.tshp = 30;
    this.tep = 80;
    this.equipmax = 8;
    this.speed = 9;
    this.shipname = "Havoc Blaze";
}
else if (this.shipselect == 10)
{
    this.oriweapondelay = 1;
    this.orifirechoice = 1;
    this.oriweaponspeed = 35;
    this.oriweapondamage = 65;
    this.oriweapontype = 10;
    this.thp = 455;
    this.tshp = 190;
    this.tep = 145;
    this.equipmax = 8;
    this.speed = 10;
    this.shipname = "RS Conquest";
}
else if (this.shipselect == 11)
{
    this.oriweapondelay = 1;
    this.orifirechoice = 2;
    this.oriweaponspeed = 35;
    this.oriweapondamage = 40;
    this.oriweapontype = 11;
    this.thp = 320;
    this.tshp = 360;
    this.tep = 200;
    this.equipmax = 7;
    this.speed = 10;
    this.shipname = "Tricraft Revenge";
}
else if (this.shipselect == 12)
{
    this.oriweapondelay = 1;
    this.orifirechoice = 1;
    this.oriweaponspeed = 35;
    this.oriweapondamage = 75;
    this.oriweapontype = 12;
    this.thp = 670;
    this.tshp = 30;
    this.tep = 80;
    this.equipmax = 9;
    this.speed = 9;
    this.shipname = "Lobos Fury";
}
else if (this.shipselect == 13)
{
    this.oriweapondelay = 1;
    this.orifirechoice = 1;
    this.oriweaponspeed = 35;
    this.oriweapondamage = 85;
    this.oriweapontype = 45;
    this.thp = 690;
    this.tshp = 350;
    this.tep = 250;
    this.equipmax = 10;
    this.speed = 9;
    this.shipname = "Nithilum Vision";
}
else if (this.shipselect == 14)
{
    this.oriweapondelay = 2;
    this.orifirechoice = 2;
    this.oriweaponspeed = 35;
    this.oriweapondamage = 80;
    this.oriweapontype = 47;
    this.thp = 650;
    this.tshp = 275;
    this.tep = 300;
    this.equipmax = 10;
    this.speed = 10;
    this.shipname = "Zennon Semicraft";
}
else if (this.shipselect == 15)
{
    this.oriweapondelay = 1;
    this.orifirechoice = 2;
    this.oriweaponspeed = 35;
    this.oriweapondamage = 55;
    this.oriweapontype = 13;
    this.thp = 1350;
    this.tshp = 0;
    this.tep = 200;
    this.equipmax = 12;
    this.speed = 6;
    this.shipname = "Pseudo-Epic";
}
else if (this.shipselect == 21)
{
    this.weaponmode = 1;
    this.oriweapondelay = 0;
    this.orifirechoice = 30;
    this.oriweaponspeed = 33;
    this.oriweapondamage = 50;
    this.oriweapontype = 29;
    this.saveshp = 1;
    this.savehp = 1;
    this.saveep = this.ep / this.tep;
    this.tshp = 2500;
    this.thp = 5000;
    this.speed = 9;
    this.shipname = "Guardian of Mana";
}
this.speed = this.speed + 3;
this.ori2[1] = this.thp;
this.ori2[2] = this.tshp;
this.ori2[3] = this.tep;
this.ori2[4] = this.equipmax;
this.ori2[5] = this.speed;
this.ori2[6] = this.oriweapondamage;
this.ori2[7] = this.orifirechoice;
this.ori2[8] = this.oriweapondelay;
if (this.itemx[39] == 3)
{
    if (this.smallship == false)
    {
        this.smallship = true;
        this.ship.width = this.ship.width * 0.7;
        this.ship.height = this.ship.height * 0.7;
    }
}
else if (this.smallship)
{
    this.smallship = false;
    this.ship.width = this.ship.width / 0.7;
    this.ship.height = this.ship.height / 0.7;
}
if (this.itemx[1] >= 3 && this.itemx[1] < 10)
{
    this.thp = this.thp + this.item1f();
}
if (this.itemx[2] >= 3 && this.itemx[2] < 10)
{
    this.tshp = this.tshp + this.item2f();
}
if (this.itemx[3] >= 3 && this.itemx[3] < 10)
{
    this.defence = this.defence - this.item3f() / 100;
}
if (this.itemx[4] == 3)
{
    this.oriweapondelay = 2;
    this.orifirechoice = 14;
    this.oriweaponspeed = 15;
    this.oriweapondamage = 36;
    this.oriweapontype = 23;
}
if (this.itemx[6] >= 3 && this.itemx[6] < 10)
{
    if (this.orifirechoice == 14)
    {
        this.numuse = 1;
    }
    else
    {
        this.numuse = this.orifirechoice;
    }
    this.oriweapondamage = this.oriweapondamage + this.item6f() * this.oriweapondelay / this.numuse;
}
if (this.itemx[7] >= 3 && this.itemx[7] < 10)
{
    this.speed = this.speed + this.item7f();
}
if (this.itemx[8] >= 3 && this.itemx[8] < 10)
{
    this.tep = this.tep + this.item8f();
}
if (this.itemx[11] == 3)
{
    this.armordefence = this.armordefence - 0.1;
}
if (this.itemx[12] == 3)
{
    this.bonuschance = 0.65;
}
if (this.itemx[15] >= 3 && this.itemx[15] < 10)
{
    this.equipmax = this.equipmax + this.item15f();
}
if (this.itemx[25] >= 3 && this.itemx[25] < 10)
{
    this.epmulti = 1 - this.item25f() / 100;
}
if (this.itemx[10] == 3)
{
    this.tshp = this.tshp * 1.2;
}
if (this.itemx[42] >= 3 && this.itemx[42] < 10)
{
    this.thp = this.thp * (1 + this.item42f() * 0.01);
    this.tshp = this.tshp * (1 + this.item42f() * 0.01);
    this.tep = this.tep * (1 + this.item42f() * 0.01);
    this.oriweapondamage = this.oriweapondamage * (1 + this.item42f() * 0.01);
    this.speed = this.speed * (1 + this.item42f() * 0.01);
}
if (this.itemx[21] >= 3 && this.itemx[21] < 10)
{
    this.thp = this.thp * this.item21f();
    this.tshp = this.tshp * this.item21f();
    this.tep = 1;
}
if (this.itemx[39] == 3)
{
    this.thp = this.thp * 0.9;
    this.tshp = this.tshp * 0.9;
}
if (this.thp >= 5000)
{
    this.thp = 5000;
}
if (this.shp > 5000)
{
    this.shp = 5000;
}
if (this.BOSSFIND !== 6)
{
    if (Math.random() < 5e-005)
    {
        this.thp = 10000000;
    }
    else if (Math.random() < 5e-005)
    {
        this.tshp = 10000000;
    }
    else if (Math.random() < 5e-005)
    {
        this.oriweapondamage = 10000;
    }
}
this.hp = this.thp * this.savehp;
this.shp = this.tshp * this.saveshp;
this.ep = this.tep * this.saveep;
if (this.ship.ax.currentFrame !== this.shipselect)
{
    this.okchange = true;
}
else
{
    this.okchange = false;
}
this.ship.ax.gotoAndStop(this.shipselect);
this.ship.wid = this.round(this.ship.ax.sbox.width / 2);
this.ship.hig = this.round(this.ship.ax.sbox.height / 2);
if (this.itemx[39] == 3)
{
    this.ship.wid = this.ship.wid * 0.7;
    this.ship.hig = this.ship.hig * 0.7;
    this.ship.wid = this.round(this.ship.wid);
    this.ship.hig = this.round(this.ship.hig);
}
this.ship.ax.sbox.visible = false;
if (this.okchange)
{
    this.oriheight = this.ship.ax.t1.height;
}
this.weaponchange();
this.skillschange();
return;
}