import { Leon, Lobo } from './Animal.js';

// Selección de elementos del DOM
const animalForm = document.getElementById('animalForm');
const animalTable = document.getElementById('animalTable');
const animalModal = new bootstrap.Modal(document.getElementById('animalModal'));
const modalContent = document.getElementById('modalContent');
const animalSound = document.getElementById('animalSound');

// Evento para agregar animal
animalForm.addEventListener('submit', function(e) {
  e.preventDefault();

  // Obtener datos del formulario
  const nombre = document.getElementById('animalName').value;
  const especie = document.getElementById('animalSpecies').value;
  const edad = document.getElementById('animalAge').value;

  let animal;
  if (especie.toLowerCase() === 'leon') {
    animal = new Leon(nombre, especie, edad);
  } else if (especie.toLowerCase() === 'lobo') {
    animal = new Lobo(nombre, especie, edad);
  } else {
    alert('Especie no reconocida');
    return;
  }

  // Agregar a la tabla
  const row = animalTable.insertRow();
  row.innerHTML = `
    <td>${animal.nombre}</td>
    <td>${animal.especie}</td>
    <td>${animal.edad}</td>
    <td><button class="btn btn-info ver-detalle">Ver Detalle</button></td>
  `;

  // Evento para mostrar detalles del animal en un modal
  row.querySelector('.ver-detalle').addEventListener('click', function() {
    modalContent.innerHTML = `
      <p>Nombre: ${animal.nombre}</p>
      <p>Especie: ${animal.especie}</p>
      <p>Edad: ${animal.edad}</p>
      <p>Sonido: ${animal.emitirSonido()}</p>
    `;
    animalModal.show();
  });

  // Limpiar formulario
  animalForm.reset();
});
    