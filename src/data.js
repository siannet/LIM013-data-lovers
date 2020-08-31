/*--------------Llamar datos de la Pokedex---------------------*/
export const pokedex = (datos) => {
  let imgTipo= "";
  datos.type.forEach((tipo)=>{
    imgTipo += `<img class="imgType" src="./img/${tipo}.png"/>`;
  });

    return `
    <div class="pokedex" id= ${datos.num} >
      <p>N° ${parseInt(datos.num)}</p>
      <p><strong>${datos.name.toUpperCase()}</strong></p> 
      <img src="${datos.img}">
      <p>Tipo: ${imgTipo}</p>
      <p> PC: ${Object.values(datos.stats)[3]}</p>
    </div>
    `
}

/*------------------Agrupar por tipo--------------------------*/
export const typeOption =(input) => datos=> datos.type.includes(input);

export const filterTypeOption = (data, nameType) => {
  return data.filter((objPokemon) => {
    return objPokemon.type.includes(nameType)
  })
}
 //input es el parametro q será reemplazado por type.value

/*------------------Agrupar por PC-----------------------------*/
export const pcOption =(input) => (dato1,dato2)=>{ 
  if(input==="HIGHER"){
      return Object.values(dato2.stats)[3]-Object.values(dato1.stats)[3];
  }else if(input==="LESS"){
      return Object.values(dato1.stats)[3]-Object.values(dato2.stats)[3];
  }
}

export const sortPcOption = (data, namePC)=>{
  return data.sort((objPokemon1,objPokemon2 )=>{
    if(namePC==="HIGHER"){
      return Object.values(objPokemon2.stats)[3]-Object.values(objPokemon1.stats)[3];
    }else if(namePC==="LESS"){
      return Object.values(objPokemon1.stats)[3]-Object.values(objPokemon2.stats)[3];
  }
  })
}

/*-----------------Ingreso de búsqueda------------------------*/
export const inputSearch= (input) => (datos)=>{
  let pokedexNumber =input.padStart(3,"000"); 
  return datos.name.startsWith(input.toLowerCase())||
        datos.num.startsWith(pokedexNumber)||
        datos.num.startsWith(input);
};

export const filterInputSearch = (data, input) =>{
  return data.filter((objPokemon)=>{
    let pokedexNumber = input.padStart(3,"000"); 
    return objPokemon.name.startsWith(input.toLowerCase())||
           objPokemon.num.startsWith(pokedexNumber)||
           objPokemon.num.startsWith(input);
  })
}
//input es el parametro q será reemplazado por search.value