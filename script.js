// script.js

// Seleccionamos el botón y el elemento de consejo
const botonTip = document.getElementById("boton-tip");
const consejo = document.getElementById("consejo");

// Añadimos un evento al botón para mostrar u ocultar el consejo
botonTip.addEventListener("click", () => {
    consejo.classList.toggle("hidden");
    if (consejo.classList.contains("hidden")) {
        botonTip.textContent = "Ver Consejo";
    } else {
        botonTip.textContent = "Ocultar Consejo";
    }
});
