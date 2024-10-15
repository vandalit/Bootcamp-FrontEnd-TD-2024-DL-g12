export class Cliente {
    constructor(nombre, ventasAnuales, deducciones) {
      this.nombre = nombre;
      this.ventasAnuales = ventasAnuales;
      this.deducciones = deducciones;
    }
  
    // Getters
    getNombre() {
      return this.nombre;
    }
  
    getVentasAnuales() {
      return this.ventasAnuales;
    }
  
    getDeducciones() {
      return this.deducciones;
    }
  
    // Setters
    setNombre(nombre) {
      this.nombre = nombre;
    }
  
    setVentasAnuales(ventasAnuales) {
      this.ventasAnuales = ventasAnuales;
    }
  
    setDeducciones(deducciones) {
      this.deducciones = deducciones;
    }
  
    // Método para calcular el impuesto
    calcularImpuesto() {
      const impuesto = (this.ventasAnuales - this.deducciones) * 0.21;
      return impuesto;
    }
  }
  