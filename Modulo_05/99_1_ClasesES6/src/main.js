import Cliente from './Cliente.js';
import Impuestos from './Impuestos.js';

// Referencias al DOM
const tableBody = document.getElementById('clientes-table-body');
const clienteForm = document.getElementById('cliente-form');

// Lista para almacenar los clientes
let clientes = [];

// Función para actualizar la tabla con los clientes
function actualizarTabla() {
    // Limpiar la tabla
    tableBody.innerHTML = '';

    // Recorrer los clientes y agregarlos a la tabla
    clientes.forEach(cliente => {
        const row = document.createElement('tr');

        const nombreTd = document.createElement('td');
        nombreTd.textContent = cliente.nombre;

        const montoBrutoTd = document.createElement('td');
        montoBrutoTd.textContent = cliente.impuesto.montoBrutoAnual;

        const deduccionesTd = document.createElement('td');
        deduccionesTd.textContent = cliente.impuesto.deducciones;

        const impuestoTd = document.createElement('td');
        impuestoTd.textContent = cliente.calcularImpuesto().toFixed(2);

        row.appendChild(nombreTd);
        row.appendChild(montoBrutoTd);
        row.appendChild(deduccionesTd);
        row.appendChild(impuestoTd);

        tableBody.appendChild(row);
    });
}

// Manejar el envío del formulario para agregar un nuevo cliente
clienteForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const montoBruto = parseFloat(document.getElementById('montoBruto').value);
    const deducciones = parseFloat(document.getElementById('deducciones').value);

    // Crear un nuevo objeto de Impuestos
    const nuevoImpuesto = new Impuestos(montoBruto, deducciones);

    // Crear un nuevo cliente
    const nuevoCliente = new Cliente(nombre, nuevoImpuesto);

    // Agregar el nuevo cliente a la lista
    clientes.push(nuevoCliente);

    // Actualizar la tabla
    actualizarTabla();

    // Limpiar el formulario
    clienteForm.reset();
});

// Inicializar la tabla por primera vez
actualizarTabla();
