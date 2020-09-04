import { filterTypeOption, sortPcOption, filterInputSearch } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

let root = document.getElementById("root");
let porcentage = document.querySelector("#porcentage");
let search = document.querySelector(".search");
const type = document.querySelector(".type");
const pc = document.querySelector(".pc");
const btnClose = document.getElementById("close");

/*--------------Mostrar datos de la Pokedex---------------------*/
const pokedex = (datos) => {
  let imgTipo = "";
  datos.type.forEach((tipo) => {
    imgTipo += `<figure>
    <img class="imgType" src="./img/${tipo}.png"/>
    <figcaption><small>${tipo}</small></figcaption>
  </figure>`;
  });
  let imgDebil = "";
  datos.weaknesses.forEach((debil) => {
    imgDebil += `<figure>
    <img class="imgType" src="./img/${debil}.png"/>
    <figcaption><small>${debil}</small></figcaption>
  </figure>`;
  });
  let movimiento=[];
  datos["quick-move"].forEach((mov) => {
    movimiento.push(mov.name);
  });
  let ataque=[];
  datos["special-attack"].forEach((mov) => {
    ataque.push(mov.name);
  });
  return `
      <div class="boxPokedex">
        <div class="cardPokedex">
          <div class="card-front">
          <div class="text front">
            <p>N° ${parseInt(datos.num)}</p>
            <p><strong>${datos.name.toUpperCase()}</strong></p> 
            <img src="${datos.img}">
            <table style="margin: 0 auto;">
              <tr>
              <th>Type: </th>
                <th>${imgTipo}</th>
              </tr>
              <tr>
              <td></td>
                <td><small>${datos.type.join(" / ")}</small></td>
              </tr>
              </table>
            <p><strong>PC: </strong>${Object.values(datos.stats)[3]}</p>
          </div>
          </div>
          <div class="card-back">
          <div class="text-back">
            <p>N° ${parseInt(datos.num)}</p>
            <p><strong>${datos.name.toUpperCase()}</strong></p> 
            <span><small>${Object.values(datos.size)[1]}</small> |${imgTipo}| <small>${Object.values(datos.size)[0]}</small></span>
            <hr>
            <p><strong>Base stats</strong></p> 
            <table style="margin: 0 auto;">
              <tr>
                <th>${Object.values(datos.stats)[0]}</th>
                <th>${Object.values(datos.stats)[1]}</th>
                <th>${Object.values(datos.stats)[2]}</th>
              </tr>
              <tr>
                <td><small><em>Attack</em></small></td>
                <td><small><em>Defense</em></small></td>
                <td><small><em>Stamina</em></small></td>
              </tr>
            </table>
            <p><strong> Fast attacks: </strong>${movimiento.join(", ")}</p>
            <p><strong> Special attacks: </strong>${ataque.join(", ")}</p>
            <p><strong>Weaknesses:</strong>${imgDebil}</p>
            <button onclick="document.getElementById('demo').play()" id= "${datos.num}" class="plus" type="button">+</button>
          </div>
          </div>
        </div>
      </div>
      `
}

/*--------------Mostrar características de la Pokedex---------------------*/
const characteristics = (dataIndex) => {
  let imgTipo = "";
  dataIndex.type.forEach((tipo) => {
    imgTipo += `<figure>
    <img class="imgType" src="./img/${tipo}.png"/>
    <figcaption><small>${tipo}</small></figcaption>
  </figure>`;
  });
 
    let evolution=""
      let nextEvolution=dataIndex.evolution["next-evolution"];
      let prevEvolution=dataIndex.evolution["prev-evolution"];
      if(nextEvolution[0]["next-evolution"]!=undefined){
      evolution+=`
      <div class="next">
      <img src="https://www.serebii.net/pokemongo/pokemon/${nextEvolution[0].num}.png"/>
      <img src="https://www.serebii.net/pokemongo/pokemon/${nextEvolution[0]["next-evolution"][0].num}.png"/>
      </div>`
      }else if(nextEvolution!=undefined){
        evolution+=`
        <img src="https://www.serebii.net/pokemongo/pokemon/${nextEvolution[0].num}.png"/>
        `
      }else if(prevEvolution[0]["prev-evolution"]!=undefined){
        evolution+=`
        <div class="prev">
        <img src="https://www.serebii.net/pokemongo/pokemon/${prevEvolution[0].num}.png"/>
        <img src="https://www.serebii.net/pokemongo/pokemon/${prevEvolution[0]["prev-evolution"][0].num}.png"/>
        </div>`
        }else if(prevEvolution!=undefined){
          evolution+=`
          <img src="https://www.serebii.net/pokemongo/pokemon/${prevEvolution[0].num}.png"/>
          `
        }else{
          evolution+="no";
        }
  
  /*let evolution = "";
  console.log(dataIndex.evolution["next-evolution"][0].name);
 if(Object.keys(dataIndex.evolution)[1]=="next-evolution"&&Object.keys(dataIndex.evolution)[2]==undefined){
  evolution +=`<img src="https://www.serebii.net/pokemongo/pokemon/${dataIndex.evolution["next-evolution"][0].num}.png"/>
  <img src="https://www.serebii.net/pokemongo/pokemon/${dataIndex.evolution["next-evolution"][0]["next-evolution"][0].num}.png"/>`

 }else if((Object.keys(dataIndex.evolution)[1]=="next-evolution")&&Object.keys(dataIndex.evolution)[2]=="prev-evolution"){
  evolution +=`<img src="https://www.serebii.net/pokemongo/pokemon/${dataIndex.evolution["next-evolution"][0].num}.png"/>
  <img src="https://www.serebii.net/pokemongo/pokemon/${dataIndex.evolution["prev-evolution"][0].num}.png"/>`

 }else if(Object.keys(dataIndex.evolution)[1]=="prev-evolution"&&Object.keys(dataIndex.evolution)[2]==undefined){
  evolution +=`<img src="https://www.serebii.net/pokemongo/pokemon/${dataIndex.evolution["prev-evolution"][0].num}.png"/>
  <img src="https://www.serebii.net/pokemongo/pokemon/${dataIndex.evolution["prev-evolution"][0]["prev-evolution"][0].num}.png"/>`
 }*/
  
  
  // evolution +=`<img src="https://www.serebii.net/pokemongo/pokemon/${dataIndex.evolution["next-evolution"][0].num}.png"/>
   //<img src="https://www.serebii.net/pokemongo/pokemon/${dataIndex.evolution["pre-evolution"][0].num}.png"/>`
  //console.log(dataIndex.evolution["next-evolution"][0].name);
  //console.log(dataIndex.evolution["next-evolution"][0]["next-evolution"][0].name);
  return `
    <div class="modalContent">
      <img class= "pokemonImg" src="${dataIndex.img}">
      <p>${dataIndex.num} <strong>${dataIndex.name.toUpperCase()}</strong></p>
      <p><small><strong>Region: </strong>${Object.values(dataIndex.generation)[1].toUpperCase()}</small></p>  
      <span>Weight: ${Object.values(dataIndex.size)[1]} | ${imgTipo} | Height: ${Object.values(dataIndex.size)[0]}</span>
      <hr>
      <p><strong>About: </strong><br>${dataIndex.about}</p> 
      <p>${evolution}</p>
    </div>
    `
}

/*----------------Presentación de la Pokedex----------------------*/
root.innerHTML = data.pokemon.map(pokedex).join(" ");

document.querySelector(".inicio").addEventListener('click',()=>{
  document.location = "index.html";
})


/*-----------------Ventana modal---------------------------------*/
root.addEventListener('click', (e) => {
  const moreInformation = document.getElementById("moreInformation");
  for (let i = 0; i < data.pokemon.length; i++) {
    if (data.pokemon[i].num == e.target.id) {
      modalWindow.style.display = "block";
      moreInformation.innerHTML = characteristics(data.pokemon[i]);
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
porcentage.innerHTML= `
<div class="typeQuantity">
  <img class="imgTypeFilter" src="./img/${type.value}.png"/>
  <p>En el tipo <strong>${type.value.toUpperCase()}</strong> hay ${Object.entries(dataFiltradaPorTipo).length} Pokemon</p>
</div>`;
root.innerHTML = dataFiltradaPorTipo.map(pokedex).join(" ");

  //Muestra todos los tipos, es decir la Pokedex inicial u ordena la Pokedex sin ningun tipo seleccionado
  if (type.value === "all-types" || type.value == "") {
    porcentage.innerHTML="";
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

/*--------Hamburguesa----------------------------*/
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