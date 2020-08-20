// estas funciones son de ejemplo

// Llamar datos de la Pokedex
export const pokedex = (datos) => {
    return `
    <div class="pokedex">
      <p> ${datos.num} ${datos.name}</p>
      <img src="${datos.img}">
      <p>Tipo: ${datos.type} PC: ${Object.values(datos.stats)[3]}</p>
    </div>
    `
}
/*
let caracteristicaPrincipal = [datos.num,datos.name,datos.type];
${caracteristicaPrincipal}*/
export const tipo = () => {
  return "hola";

};



