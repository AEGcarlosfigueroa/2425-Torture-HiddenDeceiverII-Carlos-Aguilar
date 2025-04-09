export default class Weapon 
{

    //WEAPON DAMAGE TYPES
    static WAND = 0;
    static SWORD = 1;
    static BOW = 2;

    //WEAPON RARITY TYPES
    static COMMON = 0;
    static ARCANE = 1;

    constructor(name,description,numDieDamage,type,quality,damageType)
    {
        this.name = name;
        this.description = description;
        this.numDieDamage = numDieDamage;
        this.type = type;
        this.quality = quality;
        this.damageType = damageType;
    }

    getName()
    {
        return this.name;
    }

    getQuality()
    {
        return this.quality;
    }

    setQuality(value)
    {
        this.quality = value;
    }

    getNumDieDamage()
    {
        return this.numDieDamage;
    }

    getDamageType()
    {
        return this.damageType;
    }

    getType()
    {
        return this.type;
    }

    printAttributes()
    {
        let typeText = " ";

        if(this.type === Weapon.ARCANE)
        {
            typeText = "Arcane";
        }
        else
        {
            typeText = "Common";
        }
        
        console.log("Name: " + this.name);
        console.log("Description: " + this.description);
        console.log("Num dies of Damage: " + this.numDieDamage);
        console.log("Type: " + typeText);
        console.log("Quality: " + this.quality);
    }
}