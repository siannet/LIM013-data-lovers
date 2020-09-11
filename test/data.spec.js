import { filterTypeOption, statistics, filterInputSearch } from '../src/data.js';

//CREACION DE UNA DATA PRUEBA PARA HACER EL TESTEO
const dataTesteo=[
  {
    "num": "002",
    "name": "ivysaur",
    "size": {
      "height": "0.99 m",
      "weight": "13.0 kg"
    },
    "pokemon-rarity": "normal",
    "type": [
      "grass",
      "poison"
    ]
  },
  {
    "num": "003",
    "name": "venusaur",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "pokemon-rarity": "normal",
    "type": [
      "grass",
      "poison"
    ]
  },
  {
    "num": "005",
    "name": "charmeleon",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "pokemon-rarity": "normal",
    "type": [
      "fire"
    ]
  },
  {
    "num": "007",
    "name": "squirtle",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "pokemon-rarity": "normal",
    "type": [
      "water"
    ]
  },
  {
    "num": "010",
    "name": "caterpie",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "pokemon-rarity": "normal",
    "type": [
      "bug"
    ]
  }
]
/*-----------TEST DE DATA FILTRADA POR TIPO-------------------*/
const dataExpectedType=[
  {
    "num": "005",
    "name": "charmeleon",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "pokemon-rarity": "normal",
    "type": [
      "fire"
    ]
  }
]
describe('filterTypeOption', () => {
  it('is a function', () => {
    expect(typeof filterTypeOption).toBe('function');
  });

  it('debería retornar un array para "dataTesteo", "fire"', () => {
    expect(filterTypeOption(dataTesteo, "fire")).toEqual(dataExpectedType);
  });
});

/*---------------TEST DE ESTADISTICA POR TIPO----------------------*/
const dataExpectedStatistics=[1,"20.0"] //caterpie bug
describe('statistics', () => {
  it('is a function', () => {
    expect(typeof statistics).toBe('function');
  });

  it('returns `[1,"20.0"]`', () => {
    expect(statistics(dataTesteo, "bug")).toEqual(dataExpectedStatistics);
  });
});

/*---------------TEST DE BUSQUEDA----------------------*/
const dataExpectedSearch=[
  {
    "num": "002",
    "name": "ivysaur",
    "size": {
      "height": "0.99 m",
      "weight": "13.0 kg"
    },
    "pokemon-rarity": "normal",
    "type": [
      "grass",
      "poison"
    ]
  }
]
describe('filterInputSearch', () => {
  it('is a function', () => {
    expect(typeof filterInputSearch).toBe('function');
  });
  //Ingreso de nombre
  it('debería retornar un array para "dataTesteo", "ivysaur"', () => {
    expect(filterInputSearch(dataTesteo, "ivysaur")).toEqual(dataExpectedSearch);
  });
  //Ingreso por número de Pokedex
  it('debería retornar un array para "dataTesteo", "002"', () => {
    expect(filterInputSearch(dataTesteo, "002")).toEqual(dataExpectedSearch);
  });
});
