import { filterTypeOption, sortPcOption, filterInputSearch, statistics } from './data.js';
import data from './data/pokemon/pokemon.js';

/*-----------PRESENTACIÓN DE LA PAGINA DE INICIO Y DE LA POKEDEX----------*/
const pag1 = document.getElementById("pag1");
const pag2 = document.getElementById("pag2");

//Elección de Team valor
document.getElementById("valor").addEventListener("click", () => {
  pag1.style.display = "none";
  pag2.style.display = "block";
})
//Elección de Team Instinct
document.getElementById("instinct").addEventListener("click", () => {
  pag1.style.display = "none";
  pag2.style.display = "block";
})
//Elección de Team Mystic
document.getElementById("mystic").addEventListener("click", () => {
  pag1.style.display = "none";
  pag2.style.display = "block";
})

/*--------------FUNCIÓN QUE CONTIENE LOS DATOS DE LAS CARTILLAS---------------------*/
const pokedex = (datos) => {
  //Creación de imágenes por Tipo de Pokemon
  let imgTipo = "";
  datos.type.forEach((tipo) => {
    imgTipo += `
    <figure>
      <img class="imgType" src="./img/${tipo}.png"/>
      <figcaption><small>${tipo}</small></figcaption>
    </figure>`;
  });
  //Creación de imágenes por Debilidades
  let imgDebil = "";
  datos.weaknesses.forEach((debil) => {
    imgDebil += `
    <figure>
      <img class="imgType" src="./img/${debil}.png"/>
      <figcaption><small>${debil}</small></figcaption>
    </figure>`;
  });
  //Movimientos rápidos de los pokemon
  let movimiento = [];
  datos["quick-move"].forEach((mov) => {
    movimiento.push(mov.name);
  });
  //Ataque especial por Pokemon
  let ataque = [];
  datos["special-attack"].forEach((mov) => {
    ataque.push(mov.name);
  });
  return `
      <div class="boxPokedex">
        <div class="cardPokedex">
          <div class="card-front">
          <div class="text-front">
            <h2>N° ${parseInt(datos.num)}</h2>
            <h2>${datos.name.toUpperCase()}</h2>
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
            <h2>${datos.name.toUpperCase()}</h2> 
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
            <ul>
              <li><strong> Fast attacks: </strong>${movimiento.join(", ")}</li>
              <li><strong> Special attacks: </strong>${ataque.join(", ")}</li>
              <li><strong>Weaknesses:</strong><br>${imgDebil}</li>
            </ul>
            <button onclick="document.getElementById('audio').play()" id= "${datos.num}" class="viewMore" type="button">View more</button>
          </div>
          </div>
        </div>
      </div>
      `
}

/*--------------FUNCIÓN QUE CREA INFORMACIÓN DE LA VENTANA MODAL------*/
const information = (dataIndex) => {
  //Creación de imágenes por Tipo de Pokemon
  let imgTipo = "";
  dataIndex.type.forEach((tipo) => {
    imgTipo += `<figure>
    <img class="imgType" src="./img/${tipo}.png"/>
    <figcaption><small>${tipo}</small></figcaption>
  </figure>`;
  });
  //Creación de las evoluciones por Pokemon seleccionado
  let evolutions = "";
  let nextEvolution = dataIndex.evolution["next-evolution"];
  let prevEvolution = dataIndex.evolution["prev-evolution"];

  if (prevEvolution !== undefined) {
    prevEvolution.forEach((evolution1) => {
      /****Condición con pre y post evolución*****/
      if (nextEvolution !== undefined) {
        //Imprime pre evolution
        evolutions += `
          <div class="evolution-container">
            <div class="evolution-info">
              <img class="evolution1" src="https://www.serebii.net/pokemongo/pokemon/${evolution1.num}.png"/>
              <h4>${evolution1.name.toUpperCase()}</h4>
              <p>N° ${evolution1.num}</p>
              <p><strong><em>Unevolved</em></strong></p>
              <p>Candy cost: ${evolution1["candy-cost"]}</p>
              <p>${dataIndex.evolution.candy}</p>
            </div> 
            <div class="evolution-info">
              <img class="evolution2 pokemonSelected" src="${dataIndex.img}"/>
              <h4>${dataIndex.name.toUpperCase()}</h4>
              <p>N° ${dataIndex.num}</p>
              <p><strong><em>First evolution</em></strong></p>
            </div>
          </div>
          `
        //roca evolutiva
        if (evolution1 !== undefined && evolution1["evolution-item"] !== undefined) {
          evolutions += `
              <div class="evolution-container">
                <div class="evolution-info">
                  <img class="evolution1 stone" src=${evolution1["evolution-item"].img}>
                  <p><strong>${evolution1.name.toUpperCase()}</strong></p>
                  <p>Evolution stone: <br>${evolution1["evolution-item"].name}</p>
                </div>
              </div>
              `
        }
        //Imprime post evolución
        nextEvolution.forEach((evolution3) => {
          evolutions += `
            <div class="evolution-container">
              <div class="evolution-info">
                <img class="evolution3" src="https://www.serebii.net/pokemongo/pokemon/${evolution3.num}.png"/>
                <h4>${evolution3.name.toUpperCase()}</h4>
                <p>N° ${evolution3.num}</p>
                <p><strong><em>Second evolution</em></strong></p>
                <p>Candy required: ${evolution3["candy-cost"]}</p>
                <p>${dataIndex.evolution.candy}</p>
              </div>
            </div>
            `
          //roca evolutiva
          if (evolution3 !== undefined && evolution3["evolution-item"] !== undefined) {
            evolutions += `
              <div class="evolution-container">
                <div class="evolution-info">
                  <img class="evolution3 stone" src=${evolution3["evolution-item"].img}>
                  <p><strong>${evolution3.name.toUpperCase()}</strong></p>
                  <p>Stone requirement: <br>${evolution3["evolution-item"].name}</p>
                </div>
              </div>
              `
          }
        });

      } else /***Condición con dos pre evoluciones*******/
        if (evolution1["prev-evolution"] !== undefined) {
          evolution1["prev-evolution"].forEach((evolution0) => {
            evolutions += `
          <div class="evolution-container">
            <div class="evolution-info">
              <img class="evolution1" src="https://www.serebii.net/pokemongo/pokemon/${evolution0.num}.png"/>
              <h4>${evolution0.name.toUpperCase()}</h4>
              <p>N° ${evolution0.num}</p>
              <p><strong><em>Unevolved</em></strong></p>
              <p>Candy cost: ${evolution0["candy-cost"]}</p>
              <p>${dataIndex.evolution.candy}</p>
            </div>
            <div class="evolution-info">
              <img class="evolution2" src="https://www.serebii.net/pokemongo/pokemon/${evolution1.num}.png"/>
              <h4>${evolution1.name.toUpperCase()}</h4>
              <p>N° ${evolution1.num}</p>
              <p><strong><em>First evolution</em></strong></p>
              <p>Candy cost: ${evolution1["candy-cost"]}</p>
              <p>${dataIndex.evolution.candy}</p>
            </div>
          </div>
            `
            //roca evolutiva
            if (evolution0 !== undefined && evolution0["evolution-item"] !== undefined) {
              evolutions += `
            <div class="evolution-container">
              <div class="evolution-info">
                <img class="evolution1 stone" src=${evolution0["evolution-item"].img}>
                <p><strong>${evolution0.name.toUpperCase()}</strong></p>
                <p>Evolution stone: <br>${evolution0["evolution-item"].name}</p>
              </div>
            </div>
            `
            }
            //roca evolutiva
            if (evolution1 !== undefined && evolution1["evolution-item"] !== undefined) {
              evolutions += `
            <div class="evolution-container">
              <div class="evolution-info">
                <img class="evolution1 stone" src=${evolution1["evolution-item"].img}>
                <p><strong>${evolution1.name.toUpperCase()}</strong></p>
                <p>Evolution stone: <br>${evolution1["evolution-item"].name}</p>
              </div>
            </div>
            `
            }
          })
          //Datos del Pokemon seleccionado
          evolutions += `
            <div class="evolution-container">  
              <div class="evolution-info">
                <img class="evolution3 pokemonSelected" src="${dataIndex.img}"/>
                <h4>${dataIndex.name.toUpperCase()}</h4>
                <p>N° ${dataIndex.num}</p>
                <p><strong><em>Second evolution</em></strong></p>
              </div>
            </div>
            `
        } else { /****Condición con una pre evolución******/
          evolutions += `
          <div class="evolution-container">
            <div class="evolution-info">
              <img class="evolution1" src="https://www.serebii.net/pokemongo/pokemon/${evolution1.num}.png"/>
              <h4>${evolution1.name.toUpperCase()}</h4>
              <p>N° ${evolution1.num}</p>
              <p><strong><em>Unevolved</em></strong></p>
              <p>Candy cost: ${evolution1["candy-cost"]}</p>
              <p>${dataIndex.evolution.candy}</p>
            </div>
          </div>
          `
          //roca evolutiva
          if (evolution1 !== undefined && evolution1["evolution-item"] !== undefined) {
            evolutions += `
          <div class="evolution-container">
            <div class="evolution-info">
              <img class="evolution1 stone" src=${evolution1["evolution-item"].img}>
              <p><strong>${evolution1.name.toUpperCase()}</strong></p>
              <p>Evolution stone: <br>${evolution1["evolution-item"].name}</p>
            </div>
          </div>
          `
          }
          //Datos del Pokemon seleccionado
          evolutions += `
            <div class="evolution-container">  
              <div class="evolution-info">
                <img class="evolution2 pokemonSelected" src="${dataIndex.img}"/>
                <h4>${dataIndex.name.toUpperCase()}</h4>
                <p>N° ${dataIndex.num}</p>
                <p><strong><em>First evolution</em></strong></p>
              </div>
            </div>
            `

        }
    });

  } else if (nextEvolution !== undefined) {
    //Datos del Pokemon seleccionado
    evolutions += `
      <div class="evolution-container">
        <div class="evolution-info">
          <img class="evolution1 pokemonSelected" src="${dataIndex.img}">
          <h4>${dataIndex.name.toUpperCase()}</h4>
          <p>N° ${dataIndex.num}</p>
          <p><strong><em>Unevolved</em></strong></p>
        </div>
      </div>
        `
    nextEvolution.forEach((evolution2) => {
      //Evaluación de una siguiente evolución
      evolutions += `
        <div class="evolution-container">
          <div class="evolution-info">
            <img class="evolution2" src="https://www.serebii.net/pokemongo/pokemon/${evolution2.num}.png"/>
            <h4>${evolution2.name.toUpperCase()}</h4>
            <p>N° ${evolution2.num}</p>
            <p><strong><em>First evolution</em></strong></p>
            <p>Candy required: ${evolution2["candy-cost"]}</p>
            <p>${dataIndex.evolution.candy}</p>
          </div>
        </div>
        `
      //roca evolutiva
      if (evolution2 !== undefined && evolution2["evolution-item"] !== undefined) {
        evolutions += `
          <div class="evolution-container">
            <div class="evolution-info">
              <img class="evolution2 stone" src=${evolution2["evolution-item"].img}>
              <p><strong>${evolution2.name.toUpperCase()}</strong></p>
              <p>Stone requirement: <br>${evolution2["evolution-item"].name}</p>
            </div>
          </div>
          `
      }
      //Condición si tiene 2 próximas evoluciones
      if (evolution2["next-evolution"] !== undefined) {
        evolution2["next-evolution"].forEach((evolution3) => {
          evolutions += `
          <div class="evolution-container">
            <div class="evolution-info">
              <img class="evolution3" src="https://www.serebii.net/pokemongo/pokemon/${evolution3.num}.png"/>
              <h4>${evolution3.name.toUpperCase()}</h4>
              <p>N° ${evolution3.num}</p>
              <p><strong><em>Second evolution</em></strong></p>
              <p>Candy required: ${evolution3["candy-cost"]}</p>
              <p>${dataIndex.evolution.candy}</p>
            </div>
          </div>
          `
          //roca evolutiva
          if (evolution3 !== undefined && evolution3["evolution-item"] !== undefined) {
            evolutions += `
            <div class="evolution-container">
              <div class="evolution-info">
                <img class="evolution3 stone" src=${evolution3["evolution-item"].img}>
                <p><strong>${evolution3.name.toUpperCase()}</strong></p>
                <p>Stone requirement: <br>${evolution3["evolution-item"].name}</p>
              </div>
            </div>
            `
          }
        });
      }
    })
  } else {
    evolutions += "This Pokémon does not evolve.";
  }

  return `
    <button class="close" type="button">X</button>
    <div class="modalContent">
      <h4 class="pc-modal"><small>PC</small> <strong>${Object.values(dataIndex.stats)[3]}</strong></h4>
      <img class= "pokemonImg" src="${dataIndex.img}">
      <h3>${dataIndex.num} ${dataIndex.name.toUpperCase()}</h3>
      <p><small><strong>Region: </strong>${Object.values(dataIndex.generation)[1].toUpperCase()}</small></p>  
      <span>Weight: ${Object.values(dataIndex.size)[1]} | ${imgTipo} | Height: ${Object.values(dataIndex.size)[0]}</span>
      <hr>
      <p><strong>About: </strong><br>${dataIndex.about}</p> 
      <div><strong>Evolutions: </strong><br>${evolutions}</div>
    </div>
    `
}
/*---------------DECLARACION DE VARIABLES UNIVERSALES--------*/
//Raíz principal de la página donde se imprimen los cambios
let root = document.getElementById("root");
//Modal
let modalWindow = document.getElementById("modalWindow");
let moreInformation = document.getElementById("moreInformation");
//Filtros
let search = document.querySelector(".search");
let type = document.querySelector(".type");
let pc = document.querySelector(".pc");
//Calculo por tipo
let calculate = document.querySelector("#calculate");

/*-----------PRESENTACIÓN DE LAS CARTILLAS POKEMON (LA POKEDEX)-------------*/
root.innerHTML = data.pokemon.map(pokedex).join(" ");

/*----------------PRESENTACIÓN DE LA VENTANA MODAL-----------------------*/
root.addEventListener('click', (e) => {
  for (let i = 0; i < data.pokemon.length; i++) {
    if (data.pokemon[i].num == e.target.id) {
      modalWindow.classList.add('active');
      modalWindow.classList.remove('hide');
      moreInformation.innerHTML = information(data.pokemon[i]);
    }
  }
});

/*---------------CERRAR VENTANA MODAL----------------------------- */
//Cerrar por botón
moreInformation.addEventListener("click", function (e) {
  if (e.target.className == "close") {
    modalWindow.classList.add('hide');
    modalWindow.classList.remove('active');
  }
})
//Cerrar dando click fuera de la ventana
window.addEventListener("click", function (e) {
  if (e.target == modalWindow) {
    modalWindow.classList.add('hide');
    modalWindow.classList.remove('active');
  }
});

/*---------------------FILTRADO POR TIPO-------------------------------*/
const changeTypeEvent = () => {
  const dataFiltradaPorTipo = filterTypeOption(data.pokemon, type.value);
  sortPcOption(dataFiltradaPorTipo, pc.value); //lee el filtro PC cuando se active
  const dataOrdenadaPorPC = sortPcOption(data.pokemon, pc.value);

  //Muestra la cantidad por tipo seleccionado + los Pokemon
  calculate.innerHTML = `
  <div class="typeQuantity">
    <img class="imgTypeFilter" src="./img/${type.value}.png"/>
    <p>En el tipo <strong>${type.value.toUpperCase()}</strong> hay ${statistics(data.pokemon, type.value)[0]} Pokemon, que representa el ${statistics(data.pokemon, type.value)[1]} %</p>
  </div>`;

  root.innerHTML = dataFiltradaPorTipo.map(pokedex).join(" ");

  //Muestra todos los tipos, es decir la Pokedex inicial o con PC seleccionado
  if (type.value === "all-types" || type.value == "") {
    calculate.innerHTML = "";
    root.innerHTML = dataOrdenadaPorPC.map(pokedex).join(" ");
  }

}
type.addEventListener('change', changeTypeEvent);

/*---------------------ORDENAMIENTO POR PC--------------------------------*/
pc.addEventListener('change', () => {
  changeTypeEvent(); // permite que trabajen en conjunto
});

/*----------------FUNCION DE BUSQUEDA DE POKEMON----------------------*/
search.addEventListener('keyup', () => {  //mejorar la búsqueda por nro de pokedex y autocompletado
  const searchFiltered = filterInputSearch(data.pokemon, search.value);
  const dataFiltradaPorTipo = filterTypeOption(searchFiltered, type.value);

  root.innerHTML = "";
  calculate.innerHTML="";
console.log(searchFiltered);
  if (searchFiltered.length === 0) {   //Si el usuario ingresa mal el nombre del Pokemon
    root.innerHTML = `
        <div class="pikachu-search">
          <h3>Pokemon no encontrado, por favor verifique</h3>
          <img src="./img/Buscador.gif">
        </div>
        `
  } else if (searchFiltered.length === 251) { //cuando se borra la busqueda
    root.innerHTML = dataFiltradaPorTipo.map(pokedex).join(" ") || //búsqueda con filtros activos
      searchFiltered.map(pokedex).join(" ");    //búsqueda independiente
      
  } else {
    root.innerHTML = searchFiltered.map(pokedex).join(" ");   //búsqueda inicial
  }
  //console.log(searchFiltered);
});

/*------------REINICIO DE LA PÁGINA WEB DANDO CLICK EN EL LOGO Y HOME---------------------- */
document.querySelector(".inicio").addEventListener('click', () => {
  document.location = "index.html";
})

/*---------------MENÚ HAMBURGUESA----------------------------*/
const enlaces = document.getElementById("enlaces");
document.getElementById("iHamburger").addEventListener("click", () => {
  enlaces.style.display = "block";
})
document.getElementById("cerrarMenu").addEventListener("click", function () {
  enlaces.style.display = "none";
})

/*-----------------Ventana modal---------------------------------*/
/*
let pokemon = root.querySelectorAll(".pokedex");
console.log(pokemon);
for(let i = 0; i < pokemon.length; i++){

    pokemon[i].addEventListener('click',function (){
        modalWindow.style.display="block";
        moreInformation.innerHTML=characteristics(data.pokemon[i]);
    });
}

*/