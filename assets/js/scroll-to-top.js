// Obtener el botón
let mybutton = document.getElementById("btn-ir-arriba");

// Cuando el usuario se desplaza 20px desde la parte superior del documento, mostrar el botón
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

// Cuando el usuario hace clic en el botón, se desplaza a la parte superior del documento
function topFunction() {
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}