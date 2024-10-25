import Impuestos from './Impuestos.js';

class Cliente {
    constructor(nombre, impuesto) {
        this._nombre = nombre;
        this._impuesto = impuesto;
    }

    // Getters
    get nombre() {
        return this._nombre;
    }

    get impuesto() {
        return this._impuesto;
    }

    // Setters
    set nombre(nombre) {
        this._nombre = nombre;
    }

    set impuesto(impuesto) {
        this._impuesto = impuesto;
    }

    // Método para calcular el impuesto
    calcularImpuesto() {
        const montoBruto = this._impuesto.montoBrutoAnual;
        const deducciones = this._impuesto.deducciones;
        return (montoBruto - deducciones) * 0.21;
    }
}

export default Cliente;
