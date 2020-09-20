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

/*---------------------Ventana lateral-------------------------*/
document.querySelector(".news-icon").addEventListener('click', ()=>{
    document.querySelector(".news-icon").classList.toggle("click");
    document.querySelector(".vertical-bar").classList.toggle("show");
  })

/*----------------- Efecto Scroll up--------------------------------*/

window.onscroll = function(){
    const currentScroll = document.documentElement.scrollTop; //desplazamiento desde la parte superior de la pagina
    
    //condicion para desaparecer boton cuando llegue a top
    if (currentScroll > 500){ //desplazamiento mayor a 500px mostrar botón
      document.querySelector(".scrollUp").style.transform = "scale(1)";
    }else{ //desaparecer boton en menos de 500px
      document.querySelector(".scrollUp").style.transform = "scale(0)";
    }

    //evento que me permite ir a top con click
    document.querySelector(".scrollUp").addEventListener("click", scroll = ()=>{
    if (currentScroll > 0){ 
        window.requestAnimationFrame(scroll); //creando animacion 
        window.scrollTo (0, currentScroll-(currentScroll/8)); //sin animacion seria window.scrollTo (0,0) ejex ejey 0
    }
  
  })
}