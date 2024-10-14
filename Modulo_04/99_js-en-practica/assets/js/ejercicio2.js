let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let btn3 = document.getElementById("btn-3");
let btn4 = document.getElementById("btn-4");
let btn5 = document.getElementById("btn-5");
let btn6 = document.getElementById("btn-6");
let divCaja = document.getElementById("caja");

btn1.addEventListener("click", function(){
    divCaja.setAttribute("style", "border:1px solid black;width: 100%;height: 100%; background-color: #e53e3e")
});

btn2.addEventListener("click", function(){
    divCaja.setAttribute("style", "border:1px solid black;width: 100%;height: 100%; background-color: #dd6b20")
});

btn3.addEventListener("click", function(){
    divCaja.setAttribute("style", "border:1px solid black;width: 100%;height: 100%; background-color: #faf089")
});

btn4.addEventListener("click", function(){
    divCaja.setAttribute("style", "border:1px solid black;width: 100%;height: 100%; background-color: #48bb78")
});

btn5.addEventListener("click", function(){
    divCaja.setAttribute("style", "border:1px solid black;width: 100%;height: 100%; background-color: #81e6d9")
});

btn6.addEventListener("click", function(){
    divCaja.setAttribute("style", "border:1px solid black;width: 100%;height: 100%; background-color: #d53f8c")
});