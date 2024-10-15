"use strict";

var _Cliente = require("./Cliente.js");
var _Empresa = require("./Empresa.js");
// Crear instancia de la empresa
var empresaXYZ = new _Empresa.Empresa('XYZ Consultores');

// Crear clientes
var cliente1 = new _Cliente.Cliente('Juan', 100000, 20000);
var cliente2 = new _Cliente.Cliente('Maria', 150000, 25000);

// Agregar clientes a la empresa
empresaXYZ.agregarCliente(cliente1);
empresaXYZ.agregarCliente(cliente2);

// Calcular y mostrar el impuesto total
console.log("El impuesto total a pagar es: $".concat(empresaXYZ.calcularImpuestosTotales()));
