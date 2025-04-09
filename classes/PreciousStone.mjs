export default class PreciousStone
{
    constructor(name,description,value)
    {
        this.name = name;
        this.description = description;
        this.value = value;
    }

    getName()
    {
        return this.name;
    }

    getDescription()
    {
        return this.description;
    }

    getValue()
    {
        return this.value;
    }
}