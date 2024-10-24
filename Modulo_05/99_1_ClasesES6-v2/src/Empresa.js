import { Cliente } from './Cliente.js';

export class Empresa {
  constructor(nombre) {
    this.nombre = nombre;
    this.clientes = [];
  }

  // Método para agregar cliente
  agregarCliente(cliente) {
    this.clientes.push(cliente);
  }

  // Método para calcular impuestos de todos los clientes
  calcularImpuestosTotales() {
    return this.clientes.reduce((total, cliente) => total + cliente.calcularImpuesto(), 0);
  }
}
