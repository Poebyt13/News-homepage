
var tasto = false;

var body = document.getElementById("body");
var menu = document.getElementById("menu");
var main = document.getElementById("main");
var fondo = document.getElementById("menu-background");


function abrir(){
    if (tasto == false) {
        menu.style.transition = "right";
        menu.style.transitionDuration = "1s";
        menu.style.right = "0";
        tasto = true;

        fondo.style.transition = "zIndex";
        fondo.style.transition = "opacity";
        fondo.style.transitionDuration = ".25s";
        fondo.style.zIndex = "30";
        fondo.style.opacity = "50%";
    }
}


function cerrar(){
    if (tasto == true){
        menu.style.transition = "right";
        menu.style.transitionDuration = "1s";
        menu.style.right = "-30rem";
        tasto = false;

        fondo.style.transition = "zIndex";
        fondo.style.transition = "opacity";
        fondo.style.transitionDuration = ".25s";
        fondo.style.zIndex = "-1";
        fondo.style.opacity = "0";
    }
}
