import { filterTypeOption, sortPcOption, filterInputSearch } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import { TestWatcher } from 'jest';
// import data from './data/rickandmorty/rickandmorty.js';

let root = document.getElementById("root");
let search = document.querySelector(".search");
const type = document.querySelector(".type");
const pc = document.querySelector(".pc");
const moreInformation = document.getElementById("moreInformation");
const btnClose = document.getElementById("close");


// menu hamburguesa
let btnHamburger= document.getElementById("iHamburger");
let enlaces= document.getElementById("enlaces");
let circleSize=0;

btnHamburger.addEventListener("click",()=>{
  if (circleSize==0) {
    enlaces.className=("enlaces hideCircle");
    circleSize=1;
  }else{
    enlaces.classList.remove("hideCircle");
    enlaces.className=("enlaces showCircle");
    circleSize=0;
  }
})


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
            <p class="numbers"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="25" height="25"
            viewBox="0 0 172 172"
            style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M86,7.85422c-25.64044,0 -48.42347,12.26811 -62.86734,31.20188c-0.7794,0.97455 -0.96998,2.29475 -0.49801,3.44994c0.47197,1.15519 1.53246,1.96425 2.77131,2.11423c1.23884, 0.14998 2.46177,-0.38263 3.19577,-1.39182c13.19997,-17.30319 33.94992,-28.49422 57.39828,-28.49422c23.44836, 0 44.19829,11.19443 57.39828,28.50094c0.734,1.00919 1.95692,1.54179 3.19576,1.39181c1.23884,-0.14998 2.29933,-0.95903 2.7713,-2.11422c0.47197,-1.15519 0.2814,-2.47538 -0.498,-3.44993c-14.44385,-18.93733 -37.2269,-31.20859 -62.86735,-31.20859zM86,55.41625c-17.01265,0 -30.96,13.6209 -30.96,30.77188c0,17.15097 13.89025,31.14812 30.96,31.14812c17.06975,0 30.96,-13.99715 30.96,-31.14812c0,-17.15098 -13.94735,-30.77188 -30.96, -30.77188zM86,62.29625c12.28045,0 22.27722,8.79427 23.84485,20.64h-10.58203c-1.54758,-5.9023 -6.89778,-10.32 -13.26281,-10.32c-6.36504,0 -11.71523,4.4177 -13.26281,10.32h-10.58203c1.56763,-11.84573 11.5644,-20.64 23.84485,-20.64zM11.81828,68.24235c-1.63565,0.02288 -3.02901,1.19431 -3.3325,2.80172c-1.05427,5.14903 -1.60578,10.4738 -1.60578,15.93015c0,37.60614 26.30507,69.08115 61.54375,77.08422c1.85348,0.42116 3.69743,-0.73996 4.11859,-2.59344c0.42116,-1.85348 -0.73996,-3.69743 -2.59344,-4.11859c-32.16468,-7.30493 -56.1889,-35.97225 -56.1889,-70.37219c0,-4.99436 0.50312,-9.85656 1.46469,-14.55281c0.22563,-1.02583 -0.02972,-2.09853 -0.69334,-2.91268c-0.66362,-0.81415 -1.66281,-1.28054 -2.71306,-1.26638zM160.07422,68.24235c-1.02993,0.01873 -1.99728,0.49797 -2.63617,1.30601c-0.63889,0.80804 -0.88208,1.85985 -0.66274,2.86633c0.9615,4.69594 1.46469,9.56517 1.46469,14.55953c0,34.39994 -24.02444,63.07402 -56.1889,70.37891c-1.23509,0.23634 -2.24283,1.12771 -2.6282,2.3247c-0.38538,1.19699 -0.08698,2.50887 0.77822,3.42141c0.8652,
            0.91254 2.15934,1.28033 3.37514,0.9592c35.23889,-8.00312 61.54375,-39.47808 61.54375,-77.08422c0,
            -5.45635 -0.55145,-10.78754 -1.60578,-15.93687c-0.3138,-1.6446 -1.76599,-2.8245 -3.44,-2.795zM86,
            79.49625c3.84046,0 6.88,3.03954 6.88,6.88c0,3.84046 -3.03954,6.88 -6.88,6.88c-3.84046,0 -6.88,
            -3.03954 -6.88,-6.88c0,-3.84046 3.03954,-6.88 6.88,-6.88zM62.21563,89.81625h10.52156c1.54758,5.9023 
            6.89778,10.32 13.26281,10.32c6.36504,0 11.71523,-4.4177 13.26281,-10.32h10.52156c-1.73258,11.71627 
            -11.68329,20.64 -23.78437,20.64c-12.10109,0 -22.0518,-8.92373 -23.78437,-20.64z"></path></g></g></svg> 
            ${parseInt(datos.num)}</p>
            <p><strong>${datos.name.toUpperCase()}</strong></p> 
            <img src="${datos.img}">
            <p>TYPE: ${imgTipo}</p>
            <p> PC: ${Object.values(datos.stats)[3]}</p>
          </div>
           <div class="card-back">
            <p>N° ${parseInt(datos.num)}</p>
            <p><strong>${datos.name.toUpperCase()}</strong></p> 
            <p>height:${datos.size.height}</p>
            <p>weight:${datos.size.weight}</p>
            <p> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="30" height="30"
            viewBox="0 0 172 172"
            style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" 
            stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" 
            stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"
            style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff">
            <path d="M85.81187,3.44c-0.60568,0.0235 -1.1944,0.20661 -1.70656,0.53078l-51.48578,32.57922c-0.99456,
            0.63014 -1.59782,1.72512 -1.59906,2.9025l-0.11422,53.83735c-0.00212,0.72296 0.22356,1.42821 0.645,
            2.01562l51.59328,71.82344c0.64623,0.90042 1.68668,1.43437 2.795,1.43437c1.10832,0 2.14877,-0.53395 
            2.795,-1.43437l51.7075,-71.93765c0.42115,-0.58288 0.64907,-1.28308 0.65172,-2.00219v-53.73656c-0.0004,
            -1.18109 -0.60663,-2.2794 -1.60578,-2.90922l-51.7075,-32.5725c-0.58749,-0.37178 -1.27384,-0.55683 -1.9686,
            -0.53078zM85.94625,10.95156l48.2675,30.40234v50.72656l-48.27422,67.14047l-48.15328,-67.02625l0.1075,
            -50.84078zM86,37.84c-15.90656,0 -29.03844,12.06408 -30.75844,27.52h21.07c1.42072,-4.00072 5.20268,
            -6.88 9.68844,-6.88c4.48576,0 8.26772,2.87928 9.68844,6.88h21.07c-1.72,-15.45592 -14.85188,-27.52 -30.75844,
            -27.52zM55.24156,72.24c1.72,15.45592 14.85188,27.52 30.75844,27.52c15.90656,0 29.03844,-12.06408 30.75844,
            -27.52h-21.07c-1.42072,4.00072 -5.20268,6.88 -9.68844,6.88c-4.48576,0 -8.26772,-2.87928 -9.68844,-6.88z">
            </path></g></g></svg>Place: ${Object.values(datos.generation)[1]}</p>
            <p> PC: ${Object.values(datos.stats)[3]}</p>
            <p> HP: ${Object.values(datos.stats)[4]}</p>
            <p>TYPE: ${imgTipo}</p>
            <button class="plus" onclick="document.getElementById('demo').play()" id= "${datos.num}" type="button">+</button>
          </div>
        </div>
      </div>
      `
}

// const color=colors[type];
// divDecla.style.backgroundColor=color;
/*--------------Mostrar características de la Pokedex---------------------*/
const characteristics = (dataIndex) => {
  let imgTipo = "";
  dataIndex.type.forEach((tipo) => {
    imgTipo += `<img class="imgType" src="./img/${tipo}.png"/>`;
  });
  return `<div class="modalContent">
      <img class= "pokemonImg" src="${dataIndex.img}">
      <p>${dataIndex.num} <strong>${dataIndex.name.toUpperCase()}</strong></p>
      <p><small><strong>Region: </strong>${Object.values(dataIndex.generation)[1].toUpperCase()}</small></p>  
      <p>${Object.values(dataIndex.size)[1]} | ${imgTipo} | ${Object.values(dataIndex.size)[0]}</p>
      <hr>
      <p><strong>About: </strong><br>${dataIndex.about}</p>    
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

window.addEventListener("click", function (e) {
  if(e.target ==modalWindow){
  modalWindow.style.display = "none";
  }
})

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