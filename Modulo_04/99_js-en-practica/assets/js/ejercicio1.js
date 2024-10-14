let resultado = document.querySelector(".resultado")
let formulario = document.getElementById("formulario");

let txtNombre = document.getElementById("nombre");
let errorNombre = document.querySelector(".errorNombre");

let txtAsunto = document.getElementById("asunto");
let errorAsunto = document.querySelector(".errorAsunto");

let txtMensaje = document.getElementById("mensaje");
let errorMensaje = document.querySelector(".errorMensaje");

formulario.addEventListener("submit", function(evento){
    evento.preventDefault();

    let regExLetras = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
    var nombre = txtNombre.value;
    var asunto = txtAsunto.value;
    var mensaje = txtMensaje.value;
    
    if (nombre == ""){
        errorNombre.innerHTML = "El nombre es requerido";
    }else if(regExLetras.test(nombre) == false){
        errorNombre.innerHTML = "Ingrese solo letras";
    }else errorNombre.innerHTML = "";

    if (asunto == ""){
        errorAsunto.innerHTML = "El asunto es requerido";
    }else if(regExLetras.test(asunto) == false){
        errorAsunto.innerHTML = "Ingrese solo letras";
    }else errorAsunto.innerHTML = "";

    if (mensaje == ""){
        errorMensaje.innerHTML = "El mensaje es requerido";
    }else if(regExLetras.test(mensaje) == false){
        errorMensaje.innerHTML = "Ingrese solo letras";
    }else errorMensaje.innerHTML = "";

    if (regExLetras.test(nombre) == true && regExLetras.test(asunto) == true && regExLetras.test(mensaje) == true){
        resultado.innerHTML = "Mensaje enviado con éxito";
        txtNombre.value = "";
        txtAsunto.value = "";
        txtMensaje.value = "";
    }else{
        resultado.innerHTML = "";
    }
})