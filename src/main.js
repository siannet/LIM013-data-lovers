import { pokedex, tipo } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

/*console.log(data, tipo);*/

const root = document.getElementById("root");
let search= document.querySelector(".search");
const type=document.querySelector(".type");
const pc=document.querySelector(".pc");
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

root.innerHTML=  data.pokemon.map(pokedex).join(" ");
/*----------------Realizar la búsqueda de pokemon----------------------*/

search.addEventListener('keyup',()=>{  //mejorar la búsqueda por nro de pokedex y autocompletado
    const inputSearch= data.pokemon.filter((character)=>{
        return character.name.startsWith(search.value.toLowerCase())||
        character.num.startsWith(search.value);
    });

    root.innerHTML="";
    root.innerHTML=inputSearch.map(pokedex).join(" ");
});

/*-------------------Seleccionar por tipo------------------------------*/

type.addEventListener('change',()=>{ //change averiguar, mejorar los filtros en todos los tipos
    const inputType= data.pokemon.filter((character)=>{
        return character.type.includes(type.value);
    });
    
    root.innerHTML=inputType.map(pokedex).join(" ");
});


/*---------------------Seleccionar por PC--------------------------------*/

pc.addEventListener('change',()=>{ 
    const PC= data.pokemon.sort((a,b)=>{
        
        if(pc.value==="HIGHER"){
            return Object.values(b.stats)[3]-Object.values(a.stats)[3];
        }else{
            return Object.values(a.stats)[3]-Object.values(b.stats)[3];
        }
       
   });
    root.innerHTML=PC.map(pokedex).join(" ");
});