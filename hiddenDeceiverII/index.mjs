import {readFileSync} from 'node:fs';

showAllExercises();

function showAllExercises()
{
    const jsonData = loadData();
}

async function loadData() {

    const dataChacters = await JSON.parse(readFileSync("./data/characters.json", 'utf-8'));

    const dataStones = await JSON.parse(readFileSync("./data/preciousStones.json", 'utf-8'));

    const dataWeapons = await JSON.parse(readFileSync("./data/weapons.json", 'utf-8'));

    const data = [dataChacters, dataStones, dataWeapons];

    console.log(data);

    return data;
}    