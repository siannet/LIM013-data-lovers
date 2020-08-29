import { pokedex, typeOption, pcOption, inputSearch, filterTypeOption, sortPcOption, filterInputSearch } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

/*console.log(data, tipo);*/

const root = document.getElementById("root");
let search= document.querySelector(".search");
const type=document.querySelector(".type");
const pc=document.querySelector(".pc");
const window= document.getElementById("window");
//const btnClick= document.getElementsByClassName("pokedex");
const btnClose= document.getElementById("close");


//window.innerHTML=  data.pokemon.map(pokedex).join(" ");


const characteristics = (dataIndex) => {
    return `
    <div class="characteristics">
      <p>N° ${parseInt(dataIndex.num)}</p>
      <p><strong>${dataIndex.name.toUpperCase()}</strong></p> 
      <img src="${dataIndex.img}">
      <p>Tipo: ${dataIndex.type}</p>
      <p> PC: ${Object.values(dataIndex.stats)[3]}</p>
    </div>
    `
}

/*----------------Presentación de la Pokedex----------------------*/
root.innerHTML=  data.pokemon.map(pokedex).join(" ");

let pokemon = document.getElementsByClassName("pokedex");
for(let i = 0; i < pokemon.length; i++){
   
    pokemon[i].addEventListener('click',function(){
        window.style.display="block";
        window.innerHTML=characteristics(data.pokemon[i]);
    });
}

btnClose.addEventListener("click",function() {
    window.style.display="none";
})

/*---------------------Filtrar por Tipo--------------------------------*/
let changeTypeEvent=()=>{ 
    const dataFiltradaPorTipo = filterTypeOption(data.pokemon, type.value);
    const tipoOrdenadoPorPC = sortPcOption(dataFiltradaPorTipo, pc.value); //lee el filtro PC cuando se active
    const dataOrdenadaPorPC = sortPcOption(data.pokemon, pc.value);

    //const typeFiltered= dataFiltradaPorTipo.sort(pcOption(pc.value)); 
    
    //Muestra la cantidad por tipo seleccionado + los Pokemon
    root.innerHTML=`
    <div class="typeQuantity">
      <p>En el tipo <strong>${type.value.toUpperCase()}</strong> hay ${Object.entries(dataFiltradaPorTipo).length} Pokemon</p>
    </div>
    ` + dataFiltradaPorTipo.map(pokedex).join(" ");

    //Muestra todos los tipos, es decir la Pokedex inicial u ordena la Pokedex sin ningun tipo seleccionado
    if(type.value=="all-types" || type.value==""){
        root.innerHTML=dataOrdenadaPorPC.map(pokedex).join(" "); //se puso sort para que cambiara por PC
    }
}
type.addEventListener('change',changeTypeEvent);

/*---------------------Ordenar por PC--------------------------------*/
let changePcEvent=()=>{
    
    changeTypeEvent(); // permite que trabajen en conjunto

    /*
    const dataOrdenadaPorPC = sortPcOption(data.pokemon, pc.value);
    //Muestra MaxCP de forma independiente, cuando la pestaña Tipo este desactivada
    if(type.value==""){
    root.innerHTML=dataOrdenadaPorPC.map(pokedex).join(" ");
    }*/
}
pc.addEventListener('change', changePcEvent);

/*----------------Realizar la búsqueda de pokemon----------------------*/
search.addEventListener('keyup',()=>{  //mejorar la búsqueda por nro de pokedex y autocompletado
    //const searchFiltered= data.pokemon.filter(inputSearch(search.value));
    //const allFilters= searchFiltered.filter(typeOption(type.value)).sort(pcOption(pc.value)); //lee los filtros activos
    const searchFiltered = filterInputSearch(data.pokemon,search.value);
    const dataFiltradaPorTipo = filterTypeOption(searchFiltered, type.value);
    //const tipoOrdenadoPorPC = sortPcOption(dataFiltradaPorTipo, pc.value);
    
    root.innerHTML="";
    
    if(Object.entries(searchFiltered).length === 0){         //Si el usuario ingresa mal el nombre del Pokemon
        root.innerHTML=`
        <div class="pikachu-search">
          <p>Pokemon no encontrado, por favor verifique</p>
          <img src="./img/Buscador.gif">
        </div>
        `

    }else if(Object.entries(searchFiltered).length === 251){ //cuando se borra la busqueda
        root.innerHTML=  dataFiltradaPorTipo.map(pokedex).join(" ")|| //búsqueda con filtros activos
                         searchFiltered.map(pokedex).join(" ");//búsqueda independiente
    
    }else{
        root.innerHTML=searchFiltered.map(pokedex).join(" ");   //búsqueda inicial
    }   
    //console.log(searchFiltered)
});
