import { pokedex, tipo } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(data, tipo);

document.getElementById("root").innerHTML= data.pokemon.map(pokedex).join(" ");

const window= document.getElementById("window");
const btnClick= document.getElementById("root");
const btnClose= document.getElementById("close");

btnClick.addEventListener("click",function() {
    // console.log("funciono");
    window.style.display="block";
})

btnClose.addEventListener("click",function() {
    window.style.display="none";
})


// const listPokemon= document.getElementById("root").innerHTML=  data.pokemon.map(pokedex).reverse().join(" ");
