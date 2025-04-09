import {readFileSync} from 'node:fs';
import PreciousStone from './classes/PreciousStone.mjs';
import Weapon from './classes/Weapon.mjs';

showAllExercises();

function showAllExercises()
{
    const jsonData = loadData();

    const stones = stoneFactory(jsonData[1]);

    const weapons = weaponFactory(jsonData[2]);

    // console.log(stones);
    console.log(weapons);
}

function weaponFactory(data)
{
    let weapons = [];

    for(let i=0; i<data.length;i++)
    {
        const target = data[i];

        const name = target.name;

        let damageType;

        if(name.toLowerCase().includes("bow"))
        {
            damageType = Weapon.BOW;
        }
        else if(name.toLowerCase().includes("sword"))
        {
            damageType = Weapon.SWORD;
        }
        else
        {
            damageType = Weapon.WAND;
        }

        let type;

        if(target.type === 'common')
        {
            type = Weapon.COMMON;
        }
        else
        {
            type = Weapon.ARCANE;
        }

        const weapon = new Weapon(name,target.description, target.num_die_damage, type, target.quality, damageType);

        weapons.push(weapon);
    }

    return weapons;
}

function stoneFactory(data)
{
    console.log(data.length);

    let stones = [];

    for(let i=0; i<data.length;i++)
    {
        const target = data[i];

        const stone = new PreciousStone(target.name,target.description,target.value);

        stones.push(stone);
    }

    return stones;
}

function loadData() {

    const jsonCharacters = readFileSync("./data/characters.json", 'utf-8');

    const jsonStones = readFileSync("./data/preciousStones.json", 'utf-8');

    const jsonWeapons = readFileSync("./data/weapons.json", 'utf-8');

    const dataCharacters = JSON.parse(jsonCharacters);

    const dataStones = JSON.parse(jsonStones);

    const dataWeapons = JSON.parse(jsonWeapons);

    const data = [dataCharacters, dataStones, dataWeapons];

    // console.log(data);

    return data;
}    