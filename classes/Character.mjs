import { channel } from "node:diagnostics_channel";

export default class Character 
{

    //CHARACTER OCCUPATION TYPES
    static THUG = 0;
    static PRIEST = 1;
    static PEASANT = 2;

    constructor(name,occupation,gold)
    {
        this.name = name;
        this.occupation = occupation;
        this.gold = gold;
        this.weapon = {};
        this.pouch = [];
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