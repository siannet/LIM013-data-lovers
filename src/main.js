import { filterTypeOption, sortPcOption, filterInputSearch } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

let root = document.getElementById("root");
let search = document.querySelector(".search");
const type = document.querySelector(".type");
const pc = document.querySelector(".pc");
const moreInformation = document.getElementById("moreInformation");
const btnClose = document.getElementById("close");

/*--------------Mostrar datos de la Pokedex---------------------*/
const pokedex = (datos) => {
  let imgTipo = "";
  datos.type.forEach((tipo) => {
    imgTipo += `<img class="imgType" src="./img/${tipo}.png"/>`;
  });

  return `
      <div class="boxPokedex">
        <div class="cardPokedex">
          <div class="card-front">
            <p>N° ${parseInt(datos.num)}</p>
            <p><strong>${datos.name.toUpperCase()}</strong></p> 
            <img src="${datos.img}">
            <p>Tipo: ${imgTipo}</p>
            <p> PC: ${Object.values(datos.stats)[3]}</p>
          </div>
          <div class="card-back">
            <p>N° ${parseInt(datos.num)}</p>
            <p><strong>${datos.name.toUpperCase()}</strong></p> 
            <img src="${datos.img}">
            <p>Tipo: ${imgTipo}</p>
            <p> PC: ${Object.values(datos.stats)[3]}</p>
            <button onclick="document.getElementById('demo').play()" id= "${datos.num}" type="button">+</button>
          </div>
        </div>
      </div>
      `
}

/*--------------Mostrar características de la Pokedex---------------------*/
const characteristics = (dataIndex) => {
  let imgTipo = "";
  dataIndex.type.forEach((tipo) => {
    imgTipo += `<img class="imgType" src="./img/${tipo}.png"/>`;
  });
  return `
    <div class="characteristics">
      <img src="${dataIndex.img}">
      <p>${dataIndex.num} <strong>${dataIndex.name.toUpperCase()}</strong></p>
      <p>${Object.values(dataIndex.size)[1]} | ${imgTipo} | ${Object.values(dataIndex.size)[0]}</p>
      <p><strong>About: </strong><br>${dataIndex.about}</p>    
      
      <p> PC: ${Object.values(dataIndex.stats)[3]}</p>
    </div>
    `
}

/*----------------Presentación de la Pokedex----------------------*/
root.innerHTML = data.pokemon.map(pokedex).join(" ");

/*-----------------Ventana modal---------------------------------*/
root.addEventListener('click', (e) => {
  for (let j = 0; j < data.pokemon.length; j++) {
    if (data.pokemon[j].num == e.target.id) {
      modalWindow.style.display = "block";
      moreInformation.innerHTML = characteristics(data.pokemon[j]);
    }
  }
});

btnClose.addEventListener("click", function () {
  modalWindow.style.display = "none";
})

/*---------------------Filtrar por Tipo--------------------------------*/
let changeTypeEvent = () => {
  const dataFiltradaPorTipo = filterTypeOption(data.pokemon, type.value);
  const tipoOrdenadoPorPC = sortPcOption(dataFiltradaPorTipo, pc.value); //lee el filtro PC cuando se active
  const dataOrdenadaPorPC = sortPcOption(data.pokemon, pc.value);
  
  //Muestra la cantidad por tipo seleccionado + los Pokemon
  root.innerHTML = `
    <div class="typeQuantity">
      <p>En el tipo <strong>${type.value.toUpperCase()}</strong> hay ${Object.entries(dataFiltradaPorTipo).length} Pokemon</p>
    </div>
    ` + dataFiltradaPorTipo.map(pokedex).join(" ");

  //Muestra todos los tipos, es decir la Pokedex inicial u ordena la Pokedex sin ningun tipo seleccionado
  if (type.value == "all-types" || type.value == "") {
    root.innerHTML = dataOrdenadaPorPC.map(pokedex).join(" "); //se puso sort para que cambiara por PC
  }
}
type.addEventListener('change', changeTypeEvent);

/*---------------------Ordenar por PC--------------------------------*/
pc.addEventListener('change', () => {
  changeTypeEvent(); // permite que trabajen en conjunto
});

/*----------------Realizar la búsqueda de pokemon----------------------*/
search.addEventListener('keyup', () => {  //mejorar la búsqueda por nro de pokedex y autocompletado
  const searchFiltered = filterInputSearch(data.pokemon, search.value);
  const dataFiltradaPorTipo = filterTypeOption(searchFiltered, type.value);

  root.innerHTML = "";
  console.log(searchFiltered);
  if (Object.entries(searchFiltered).length === 0) {         //Si el usuario ingresa mal el nombre del Pokemon
    root.innerHTML = `
        <div class="pikachu-search">
          <p>Pokemon no encontrado, por favor verifique</p>
          <img src="./img/Buscador.gif">
        </div>
        `

  } else if (Object.entries(searchFiltered).length === 251) { //cuando se borra la busqueda
    root.innerHTML = dataFiltradaPorTipo.map(pokedex).join(" ") || //búsqueda con filtros activos
      searchFiltered.map(pokedex).join(" ");//búsqueda independiente

  } else {
    root.innerHTML = searchFiltered.map(pokedex).join(" ");   //búsqueda inicial
  }
  //console.log(searchFiltered)
});






/*-----------------Ventana modal---------------------------------*/
/*let pokemon = root.querySelectorAll(".pokedex");
console.log(pokemon);
for(let i = 0; i < pokemon.length; i++){

    pokemon[i].addEventListener('click',function (){
        modalWindow.style.display="block";
        moreInformation.innerHTML=characteristics(data.pokemon[i]);
    });
}

*/