// Se importa las clases de animales.js
import { Leon, Lobo, Oso, Serpiente, Aguila } from './animales.js';

// Función para cargar datos de animales del archivo JSON
const AnimalData = async () => {
    const response = await fetch('./animales.json');
    const data = await response.json();
    return data.animales;
};

// IIFE para manejar el registro de animales
(async () => {
    const animales = await AnimalData();

    // Manejar la previsualización del animal seleccionado
    document.getElementById('animal').addEventListener('change', (event) => {
        const nombreAnimal = event.target.value;
        const animalSelect = animales.find(animal => animal.name === nombreAnimal);

        // Mostrar la imagen correspondiente al animal seleccionado
        if (animalSelect) {
            const previewDiv = document.getElementById('preview');
            previewDiv.innerHTML = `
                <img src="./assets/imgs/${animalSelect.imagen}" class="img-fluid mx-auto d-block preview-img" width="200px" height="300px" alt="${nombreAnimal}">
            `;
        }
    });

    // Registrar y mostrar el animal en el DOM al hacer clic en "Agregar"
    document.getElementById('btnRegistrar').addEventListener('click', () => {
        const nombreAnimal = document.getElementById('animal').value;
        const edadAnimal = document.getElementById('edad').value;
        const comentariosAnimal = document.getElementById('comentarios').value;

        // Validación de que se haya seleccionado un animal y edad
        if (!nombreAnimal || nombreAnimal === "Seleccione un animal") {
            alert('Por favor, selecciona un animal.');
            return;
        }
        if (!edadAnimal || edadAnimal === "Seleccione un rango de años") {
            alert('Por favor, selecciona una edad.');
            return;
        }

        const animalSelect = animales.find(animal => animal.name === nombreAnimal);

        if (animalSelect) {
            let nuevoAnimal;
            switch (nombreAnimal) {
                case 'Leon':
                    nuevoAnimal = new Leon(nombreAnimal, edadAnimal, animalSelect.imagen, comentariosAnimal, animalSelect.sonido);
                    break;
                case 'Lobo':
                    nuevoAnimal = new Lobo(nombreAnimal, edadAnimal, animalSelect.imagen, comentariosAnimal, animalSelect.sonido);
                    break;
                case 'Oso':
                    nuevoAnimal = new Oso(nombreAnimal, edadAnimal, animalSelect.imagen, comentariosAnimal, animalSelect.sonido);
                    break;
                case 'Serpiente':
                    nuevoAnimal = new Serpiente(nombreAnimal, edadAnimal, animalSelect.imagen, comentariosAnimal, animalSelect.sonido);
                    break;
                case 'Aguila':
                    nuevoAnimal = new Aguila(nombreAnimal, edadAnimal, animalSelect.imagen, comentariosAnimal, animalSelect.sonido);
                    break;
            }

            // Mostrar el nuevo animal registrado
            mostrarAnimal(nuevoAnimal);

            // Restablecer el formulario a su estado inicial
            document.getElementById('animal').value = '';
            document.getElementById('edad').value = '';
            document.getElementById('comentarios').value = '';
            document.getElementById('preview').innerHTML = '';
        }
    });
})();

// Mostrar el animal en el DOM
const mostrarAnimal = (animal) => {
    const contenedor = document.getElementById('Animales');
    const divAnimal = document.createElement('div');
    divAnimal.classList.add('card', 'm-2', 'animal-card');
    divAnimal.style.width = "200px";

    // Crear la estructura de la tarjeta
    divAnimal.innerHTML = `
        <img src="./assets/imgs/${animal.Img}" class="card-img-top" alt="${animal.Nombre}">
        <div class="card-body text-center">
            <h5 class="card-title">${animal.Nombre}</h5>
            <button class="btn btn-success mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal" id="toggleInfo">Ver detalles</button>
        </div>
    `;

    // Evento para mostrar la información en el modal
    divAnimal.querySelector('#toggleInfo').addEventListener('click', () => {
        const modalBody = document.querySelector('#exampleModal .modal-body');
        modalBody.innerHTML = `
            <div class="text-center">
                <h5><strong>${animal.Nombre}</strong></h5>
                <p class="modalText"><strong>Edad:</strong> ${animal.Edad}</p>
                <p class="modalText"><strong>Comentarios:</strong> ${animal._comentarios}</p>
                <img src="./assets/imgs/${animal.Img}" class="img-fluid mx-auto d-block my-3" width="200px" alt="${animal.Nombre}">
                <button class="btn btn-warning mt-2 reproducir-sonido">
                    <i class="fa-solid fa-volume-high"></i> Escuchar sonido
                </button>
            </div>
        `;

        // Añadir el evento para reproducir sonido dentro del modal
        modalBody.querySelector('.reproducir-sonido').addEventListener('click', () => {
            reproducirSonido(animal.Sonido);
        });
    });

    // Añadir la nueva tarjeta al contenedor
    contenedor.appendChild(divAnimal);
};

// Función para reproducir el sonido del animal
const reproducirSonido = (sonido) => {
    try {
        const audio = document.getElementById('player');
        audio.src = `./assets/sounds/${sonido}`;
        audio.play();
    } catch (error) {
        alert('Hubo un problema al reproducir el sonido. Por favor, inténtalo de nuevo.');
    }
};
// Evento para detener el sonido al cerrar el modal
const modal = document.getElementById('exampleModal');
modal.addEventListener('hidden.bs.modal', () => {
    const audio = document.getElementById('player');
    if (!audio.paused) {
        audio.pause();
    }
});