// script.js

// Inicializar el contador si no existe en localStorage
if (!localStorage.getItem('easterEggCount')) {
    localStorage.setItem('easterEggCount', 0);
}

// Función para obtener el contador actual
function getEasterEggCount() {
    return parseInt(localStorage.getItem('easterEggCount'), 10);
}

// Función para incrementar el contador
function incrementEasterEggCount() {
    let count = getEasterEggCount();
    count++;
    localStorage.setItem('easterEggCount', count);
    return count;
}

// Función para mostrar el contador (opcional)
function displayEasterEggCount() {
    const count = getEasterEggCount();
    document.getElementById('easterEggCount').innerText = count;
}

// Llamar a displayEasterEggCount() cuando la página carga (opcional)
window.onload = displayEasterEggCount;

// Función para manejar el clic en un elemento "easter egg"
function handleEasterEggClick(event) {
    event.target.style.display = 'none'; // Ocultar el elemento clickeado
    incrementEasterEggCount(); // Incrementar el contador global
    alert('¡Encontraste un Easter Egg!');
}

// Agregar eventos de clic a los elementos "easter egg"
document.addEventListener('DOMContentLoaded', function() {
    const easterEggs = document.querySelectorAll('.easter-egg');
    easterEggs.forEach(function(egg) {
        egg.addEventListener('click', handleEasterEggClick);
    });
});
