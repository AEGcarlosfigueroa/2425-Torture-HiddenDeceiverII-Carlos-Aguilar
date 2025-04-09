export default class PreciousStone
{
    constructor(name,description,value)
    {
        this.name = name;
        this.description = description;
        this.value = value;
    }

    printAttributes()
    {
        console.log(this.name + ": " + this.value + " coins");
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