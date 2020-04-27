//DOM-
// querySelector - querySelectorAll
//Obtener elemento de la clase
let links = document.querySelectorAll(".close");

//Recorrerlas-
links.forEach(function(link){

  //Agregar evento click a cada uno
  link.addEventListener('click',function(ev){
    ev.preventDefault();

    let contenido = document.querySelector(".contenido");

    //Quitar las clases de animación
    contenido.classList.remove("fadeInDown");
    contenido.classList.remove("animated");

    //Agregar las clases de animación
    contenido.classList.add("fadeOutUp");
    contenido.classList.add("animated");

    setTimeout(function(){
      location.href = "../index.html";
    }, 600);

    return false;
  });
});
