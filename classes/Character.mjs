import { channel } from "node:diagnostics_channel";

export default class Character 
{

    //CHARACTER OCCUPATION TYPES
    static THUG = 0;
    static PRIEST = 1;
    static PEASANT = 2;

    constructor(name,occupation,gold,life)
    {
        this.name = name;
        this.occupation = occupation;
        this.gold = gold;
        this.weapon = {};
        this.pouch = [];
        this.life = life;
    }

    printAttributesCombat()
    {
        console.log("-----------------")
        console.log("Name: " + this.name);
        console.log("Life: " + this.life);
        console.log("Weapon Name: " + this.weapon.getName());
        console.log("Weapon Damage: " + this.weapon.getNumDieDamage() + "D6+2");
        console.log("Weapon Quality: " + this.weapon.getQuality());
        console.log("-----------------");
    }

    printAttributes()
    {
        let occupationText = " ";

        if(this.occupation === Character.THUG)
        {
            occupationText = "Thug";
        }
        else if(this.occupation === Character.PRIEST)
        {
            occupationText = "Priest";
        }
        else
        {
            occupationText = "Peasant";
        }

        console.log(this.name);
        console.log("---------------")
        console.log("Occupation: " + occupationText);
        console.log("Gold: " + this.gold);
        console.log("-----------");
        console.log("Weapon");
        console.log("-----------");

        this.weapon.printAttributes();

        console.log("-----------");
        console.log("Pouch");
        console.log("-----------");

        for(let i=0;i<this.pouch.length;i++)
        {
            this.pouch[i].printAttributes();
        }
    }

    attack(target)
    {
        let damage = 0;

        for(let i=0; i<this.weapon.getNumDieDamage();i++)
        {
            damage += Math.floor(Math.random()*6) + 1;
        }

        damage += 2;

        let targetLife = target.getLife();

        targetLife -= damage;

        target.setLife(targetLife);

        let weaponQuality = this.weapon.getQuality();

        weaponQuality -= 3;

        this.weapon.setQuality(weaponQuality);

        return damage;
    }

    getName()
    {
        return this.name;
    }

    getLife()
    {
        return this.life;
    }

    setLife(value)
    {
        this.life = value;
    }

    addStone(stone)
    {
        this.pouch.push(stone);
    }

    getGold()
    {
        return this.gold;
    }

    setGold(amount)
    {
        this.gold = amount;
    }

    getOccupation()
    {
        return this.occupation;
    }

    setWeapon(weapon)
    {
        this.weapon = weapon;
    }
}