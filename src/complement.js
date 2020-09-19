/*-----------PRESENTACIÓN DE LA PAGINA DE INICIO Y DE LA POKEDEX----------*/
const pag1 = document.getElementById("pag1");
const pag2 = document.getElementById("pag2");
const titulo= document.querySelector(".tituloTeam");

//Elección de Team valor
document.getElementById("valor").addEventListener("click", () => {
  pag1.style.display = "none";
  pag2.style.display = "block";
  titulo.innerHTML=`
  <h1> VALOR</h1>
  <p>"OUR FIRES WILL NEVER DIE"</p>
  `
  document.querySelector(".banner-team").classList.add("valor");
})
//Elección de Team Instinct
document.getElementById("instinct").addEventListener("click", () => {
  pag1.style.display = "none";
  pag2.style.display = "block";
  titulo.innerHTML=`
  <h1> INSTINCT</h1>
  <p>"THERE IS NO SHELTER FROM THE STORM"</p>
  `
  document.querySelector(".banner-team").classList.add("instinct");
})
//Elección de Team Mystic
document.getElementById("mystic").addEventListener("click", () => {
  pag1.style.display = "none";
  pag2.style.display = "block";
  titulo.innerHTML=`
  <h1> MYSTIC</h1>
  <p>"THE POWER OF KNOWLEDGE"</p>
  `
  document.querySelector(".banner-team").classList.add("mystic");
})
//Ventana lateral
document.querySelector(".news-icon").addEventListener('click', ()=>{
    document.querySelector(".news-icon").classList.toggle("click");
    document.querySelector(".vertical-bar").classList.toggle("show");
  })