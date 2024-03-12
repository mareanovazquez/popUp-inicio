// Función para mostrar el popup
function mostrarPopUp() {
    setTimeout(function () {
        document.getElementById('contenedorPopUp').style.display = 'block';
    }, 1500); // 1000 milisegundos = 1 segundo
}

// Función para cerrar el popup
function cerrarPopUp() {
    document.getElementById('contenedorPopUp').style.display = 'none';
}

// Evento onload para mostrar el popup al cargar la página
window.onload = function () {
    mostrarPopUp();
};