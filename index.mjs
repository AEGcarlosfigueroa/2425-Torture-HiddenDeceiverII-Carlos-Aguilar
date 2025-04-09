import {readFileSync} from 'node:fs';
import PreciousStone from './classes/PreciousStone.mjs';

showAllExercises();

function showAllExercises()
{
    const jsonData = loadData();

    const stones = stoneFactory(jsonData[1]);

    console.log(stones);
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