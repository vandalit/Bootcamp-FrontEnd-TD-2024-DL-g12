class Impuestos {
    constructor(montoBrutoAnual, deducciones) {
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones;
    }

    // Getters
    get montoBrutoAnual() {
        return this._montoBrutoAnual;
    }

    get deducciones() {
        return this._deducciones;
    }

    // Setters
    set montoBrutoAnual(montoBrutoAnual) {
        this._montoBrutoAnual = montoBrutoAnual;
    }

    set deducciones(deducciones) {
        this._deducciones = deducciones;
    }
}

export default Impuestos;
