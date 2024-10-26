const videoModule = (function() {
    // Función privada para actualizar el iframe
    const mostrarVideo = (url, id) => {
      const iframe = document.getElementById(id);
      iframe.setAttribute("src", url);
    };
  
    // Función pública expuesta para insertar videos
    return {
      setVideo: function(url, id) {
        mostrarVideo(url, id);
      }
    };
  })();

  class Multimedia {
    constructor(url) {
      let _url = url; // Closure para proteger la URL
  
      this.getUrl = function() {
        return _url;
      };
    }
  
    setInicio() {
      return "Este método es para realizar un cambio en la URL del video";
    }
  }

  class Reproductor extends Multimedia {
    constructor(url, id) {
      super(url);
      this.id = id;
    }
  
    // Método para mostrar el video
    playMultimedia() {
      videoModule.setVideo(this.getUrl(), this.id);
    }
  
    // Método para establecer el tiempo de inicio en la URL
    setInicio(tiempo) {
      let nuevaUrl = `${this.getUrl()}?start=${tiempo}`;
      videoModule.setVideo(nuevaUrl, this.id);
    }
  }

  // Instanciar los reproductores
const musica = new Reproductor("https://www.youtube.com/embed/5PSNL1qE6VY", "musica");
const pelicula = new Reproductor("https://www.youtube.com/embed/dQw4w9WgXcQ", "pelicula");
const serie = new Reproductor("https://www.youtube.com/embed/tgbNymZ7vqY", "serie");

// Reproducir los videos
musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia();

// Modificar el inicio del video de Música
musica.setInicio(1); // Empieza desde el segundo 1

