boton_darkLight = document.querySelector("#darkLight")
body = document.querySelector("#body")
navBar = document.querySelector("#navBar")

// evento Dark/Light
boton_darkLight.addEventListener("click", () => {
    //Light => Dark
    if (body.classList.contains("bg-light")) {
        navBar.classList.remove("navbar-dark", "bg-dark");
        navBar.classList.add("bg-light");
        body.classList.remove("bg-light");
        body.classList.add("bg-dark");
    }
    //Dark => Light
    else {
        navBar.classList.add("navbar-dark", "bg-dark");
        navBar.classList.remove("bg-light");
        body.classList.add("bg-light");
        body.classList.remove("bg-dark");
    }
})

//botones y audios
//reproducir audio
function reproducirAudio(numero) {
    const audio = document.getElementById("audio" + numero);
    audio.play();
}
//Pausar sonido
function pausarAudio(numero) {
    const audio = document.getElementById("audio" + numero);
    audio.pause();
}
//bucle sonido
function bucleAudio(numero) {
    const audio = document.getElementById("audio" + numero);
    //Loop on => off
    if (audio.loop) {
        botonBucle[numero - 1].classList.remove("active");
    }
    //Loop off => on
    else {
        botonBucle[numero - 1].classList.add("active");
    }
    audio.loop = !audio.loop;
}
// Todas las barras de volumen y los elementos de audio
const barrasVolumen = document.querySelectorAll("#barraVolumen");
const audios = document.querySelectorAll(".audio");
//evento barra de volumen
barrasVolumen.forEach(function (barraVolumen, index) {
    barraVolumen.addEventListener("input", function () {
        audios[index].volume = parseFloat(barraVolumen.value);
    });
});

//opcion añadir
let contador = 5;

function duplicarElemento() {
    const elementoOriginal = document.getElementById("originalBox");
    const contenedor = document.getElementById("añadirBox");
    const elementoDuplicado = elementoOriginal.cloneNode(true);

    // Incrementa el contador
    contador++;

    //Actualizaciones:
    // Nombre del boton
    const botonDuplicado = elementoDuplicado.querySelector("#boton");
    botonDuplicado.innerText = `test ${contador}`;
    // Audio del boton
    //...nota abajo del archivo...

    // Numero de onclick
    elementoDuplicado.querySelector("#boton").setAttribute("onclick", "reproducirAudio(" + contador + ")");
    // ID de audio
    elementoDuplicado.querySelector(".audio").setAttribute("id", "audio" + contador);
    // ID de boton pausa
    elementoDuplicado.querySelector("#botonDetener").setAttribute("onclick", "pausarAudio(" + contador + ")");
    // ID de boton bucle
    elementoDuplicado.querySelector("#botonBucle").setAttribute("onclick", "bucleAudio(" + contador + ")");

    // Agrega el elemento al contenedor
    contenedor.parentNode.insertBefore(elementoDuplicado, contenedor.previousSibling);
}
//ERRORES:
// . Al crear un nuevo boton, la opción de bajar el volumen de tal no responde

//-------------------------------------------------------------------------------------------
//NOTA: mas adelante hare que al crear(click) un nuevo boton:

// 1.Te lleve a tus carpetas para seleccionar el audio para el boton (solo .mp3).
// 2.Aparezca un input para colocar el nombre (luego de eso el input se transforma en boton).

//esta pagina esta en proceso por lo que todavia no incluí ningun estilo y solo esta en "generico".
