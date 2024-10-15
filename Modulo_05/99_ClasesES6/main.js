import { Cliente } from './Cliente.js';
import { Empresa } from './Empresa.js';

// Crear instancia de la empresa
const empresaXYZ = new Empresa('XYZ Consultores');

// Crear clientes
const cliente1 = new Cliente('Juan', 100000, 20000);
const cliente2 = new Cliente('Maria', 150000, 25000);

// Agregar clientes a la empresa
empresaXYZ.agregarCliente(cliente1);
empresaXYZ.agregarCliente(cliente2);

// Calcular y mostrar el impuesto total
console.log(`El impuesto total a pagar es: $${empresaXYZ.calcularImpuestosTotales()}`);
