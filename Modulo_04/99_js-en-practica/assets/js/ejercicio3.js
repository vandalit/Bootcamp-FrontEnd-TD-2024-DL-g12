let btnSumar = document.getElementById("btn-sumar");
let btnRestar = document.getElementById("btn-restar");
let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");
let resultado = document.querySelector(".resultado");

btnSumar.addEventListener("click", function(){
    var num1 = valor1.value;
    num1 = parseInt(num1);
    var num2 = valor2.value;
    num2 = parseInt(num2);
    let suma = num1 + num2;
    resultado.innerHTML = ` ${suma}`;
});

btnRestar.addEventListener("click", function(){
    var num1 = valor1.value;
    num1 = parseInt(num1);
    var num2 = valor2.value;
    num2 = parseInt(num2);
    let resta = num1 - num2;

    if (resta < 0) {
        resultado.innerHTML = "0";
    }else {
        resultado.innerHTML = ` ${resta}`;
    }
});