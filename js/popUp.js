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

/// Crear el botón de cerrar y agregarlo al popup
const closeButton = document.createElement('button');
closeButton.classList.add('close-button'); // Añadimos una clase para el estilo

// Crear el span para el cierre con forma de "X"
const xButton = document.createElement('span');
xButton.textContent = 'X';
xButton.classList.add('close-icon'); // Añadimos una clase para el estilo

// Agregar el span al botón
closeButton.appendChild(xButton);

// Agregar el evento click para cerrar el popup
closeButton.addEventListener('click', cerrarPopUp);

// Agregar el botón completo al popup
document.getElementById('popUp').appendChild(closeButton);


// Evento onload para mostrar el popup al cargar la página
window.onload = function () {
    mostrarPopUp();
};

// Cerrar el popup al presionar Escape
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        cerrarPopUp();
    }
});
