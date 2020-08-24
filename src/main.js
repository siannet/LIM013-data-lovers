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
const btnClick= document.querySelector("#root");;
const btnClose= document.getElementById("close");


btnClick.addEventListener("click",() =>{
    // console.log("funciono");
    console.log(btnClick.value)
    window.style.display="block";
    window.innerHTML=data.pokemon.map(pokedex).join(" ")
})

btnClose.addEventListener("click",function() {
    window.style.display="none";
})

root.innerHTML=  data.pokemon.map(pokedex).join(" ");
/*----------------Realizar la búsqueda de pokemon----------------------*/

search.addEventListener('keyup',()=>{  //mejorar la búsqueda por nro de pokedex y autocompletado
    const inputSearch= data.pokemon.filter((character)=>{

    //console.log(parseInt(character.num));
        return character.name.startsWith(search.value.toLowerCase())||
        character.num.startsWith(search.value);
    });
    
    root.innerHTML="";

    //Condición si el usuario ingresa mal el nombre del Pokemon
    if (Object.entries(inputSearch).length === 0){
        root.innerHTML=`
        <div class="pikachu-search">
          <p>Pokemon no encontrado, por favor verifique</p>
          <img src="./img/Buscador.gif">
        </div>
        `
    }else{
        root.innerHTML=inputSearch.map(pokedex).join(" ");    
    }
    
});

/*-------------------Seleccionar por tipo------------------------------*/

type.addEventListener('change',()=>{ //change averiguar, mejorar los filtros en todos los tipos
    const inputType= data.pokemon.filter((character)=>{
        return character.type.includes(type.value);
    });

    //Muestra la cantidad por tipo seleccionado + los Pokemon
    root.innerHTML=`
    <div class="typeQuantity">
      <p>En el tipo <strong>${type.value.toUpperCase()}</strong> hay ${Object.entries(inputType).length} Pokemon</p>
    </div>
    <br>` + inputType.map(pokedex).join(" ");

    //Muestra todos los tipos, es decir la Pokedex inicial
    if(type.value==="all-types"){
        root.innerHTML=data.pokemon.map(pokedex).join(" ");
    }
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