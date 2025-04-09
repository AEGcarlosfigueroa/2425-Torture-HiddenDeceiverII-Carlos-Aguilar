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

    getDamageType()
    {
        return this.damageType;
    }

    getType()
    {
        return this.type;
    }
}