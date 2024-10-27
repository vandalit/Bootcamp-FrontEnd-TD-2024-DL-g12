//Se exportan las clases para ser ejecutadas en script.js
export { Leon, Lobo, Oso, Serpiente, Aguila };  

// Clase Padre Animales
class Animales {
    constructor(nombre, edad, img, comentarios, sonido) {
        this._nombre = nombre;
        this._edad = edad;
        this._img = img;
        this._comentarios = comentarios;
        this._sonido = sonido;
    }

    get Nombre() {
        return this._nombre;
    }

    get Edad() {
        return this._edad;
    }

    get Img() {
        return this._img;
    }

    get Sonido() {
        return this._sonido;
    }

    set Comentarios(comentarios) {
        this._comentarios = comentarios;
    }
}

// Clases hijas
class Leon extends Animales {
    Rugir() {
        return this.Sonido;
    }
}

class Lobo extends Animales {
    Aullar() {
        return this.Sonido;
    }
}

class Oso extends Animales {
    Grunir() {
        return this.Sonido;
    }
}

class Serpiente extends Animales {
    Sisear() {
        return this.Sonido;
    }
}

class Aguila extends Animales {
    Chillar() {
        return this.Sonido;
    }
}