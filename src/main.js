import { pokedex, tipo } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(pokedex, data);

document.getElementById("root").innerHTML=  data.pokemon.map(pokedex).join(" ");

 