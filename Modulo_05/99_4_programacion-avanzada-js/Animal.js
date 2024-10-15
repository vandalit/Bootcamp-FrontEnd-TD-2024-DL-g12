class Animal {
    constructor(nombre, especie, edad) {
      this.nombre = nombre;
      this.especie = especie;
      this.edad = edad;
    }
  
    emitirSonido() {
      return `${this.nombre} hace un sonido`;
    }
  }
  
  class Leon extends Animal {
    emitirSonido() {
      return `${this.nombre} ruge`;
    }
  }
  
  class Lobo extends Animal {
    emitirSonido() {
      return `${this.nombre} aúlla`;
    }
  }
  
  export { Animal, Leon, Lobo };
  