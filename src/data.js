/*------------------Agrupar por tipo--------------------------*/
export const filterTypeOption = (data, nameType) => {
  return data.filter((objPokemon) => {
    return objPokemon.type.includes(nameType);
  });
};

/*-------------Estadística de tipo--------------------------*/
export const statistics = (data, nameType) => {
  let quantity = filterTypeOption(data, nameType).length;
  let porcentage = ((quantity / data.length) * 100).toFixed(1);
  return [quantity, porcentage];
};

/*------------------Agrupar por PC-----------------------------*/
export const sortPcOption = (data, namePC) => {
  return data.sort((objPokemon1, objPokemon2) => {
    if (namePC === "HIGHER") {
      return (
        Object.values(objPokemon2.stats)[3] -
        Object.values(objPokemon1.stats)[3]
      );
    } else if (namePC === "LESS") {
      return (
        Object.values(objPokemon1.stats)[3] -
        Object.values(objPokemon2.stats)[3]
      );
    }
  });
};

/*-----------------Ingreso de búsqueda------------------------*/
export const filterInputSearch = (data, input) => {
  return data.filter((objPokemon) => {
    let pokedexNumber = input.padStart(3, "000");
    return (
      objPokemon.name.startsWith(input.toLowerCase()) ||
      objPokemon.num.startsWith(pokedexNumber) ||
      objPokemon.num.startsWith(input)
    );
  });
};
//input es el parametro q será reemplazado por search.value
