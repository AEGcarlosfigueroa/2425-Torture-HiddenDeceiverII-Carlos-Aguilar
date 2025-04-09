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