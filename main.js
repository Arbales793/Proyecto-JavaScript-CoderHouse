/*
//variable numeros
//let numero = parseFloat(prompt("ingrese un numero:"))
//alert(numero + 30)
// variable nombre
//let nombre = prompt("Ingrese su nombre")
//alert(nombre + "," + "Como estas")*/

/*
function nombreFuntion () {
    codigo a ejecutar por la funcion
}

para ejecutar o invocar la funcion hacemos nombreFunction()
*/

//function saludar() {
//    console.log("hola");
//}

/*
function nombreFuntion (param1, ..., para,3) {
    codigo a ejecutar por la funcion
}

para ejecutar o invocar la funcion hacemos nombreFunction(valor1, valor 2, ...)
*/

/*function saludar(saludo, nombre) {
    console.log(`${saludo} ${nombre}`);
}

saludar("hola", "Andres");
saludar("Bienvenida", "Camila");



function calculadora(num1, num2, operacion) {
    switch (operacion) {
    case "+":
        return num1 + num2;
        break;

    case "-":
        return num1 - num2;
        break;

    case "*":
        return num1 * num2;
        break;

    case "/":
        return num1 / num2;
        break;

    default:
        return "Operacion no identificada";
        break;
    }
}

//let num1 = parseInt(prompt("Ingrese el numero uno"));
//let num2 = parseInt(prompt("Ingrese el numero dos"));
//let operacion = prompt("Ingrese la opreacion");

//let resultado = calculadora(num1, num2, operacion);
//alert(`El resultado es ${resultado}`);
*/

/*class Producto {
    constructor(nombre, precio, imagen, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
    this.cantidad = cantidad;
    
}
    vender() {
        if(this.cantidad ===0) {
            console.log("Sin stock")
        } else {
            this.cantidad -= 1; // this.cantidad = this.cantidad - 1
        }
    }

}

const producto1 = new Producto(
    "Guitarra Eléctrica Les Paul Egr 200",
    867212,
    "http://asjkfdgh",
    5
);

console.log(producto1);
producto1.vender();
producto1.vender();
producto1.vender();
producto1.vender();
producto1.vender();
producto1.vender();
console.log(producto1);
*/

//--------------------------   APUNTES DE CLASE, HASTA CLASE NUMERO 4 INCLUIDA------------------------------

//funcion flecha con varibles y constantes - calculos de futuros precios de guitarras
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = (x) => x * 0.21;

let precioProducto = 11000;
let descuento = 1100;

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
console.log(nuevoPrecio);


//Ciclo con condicional
let entrada = prompt("Ingresar un nombre");
//Se ingresa "ESC" para finalizar el bucle
while (entrada != "ESC") {
    switch (entrada) {
        case "Facu":
        alert("HOLA FACU");
        break;
        case "Pedro":
        alert("HOLA PEDRO");
        break;
        default:
        alert("USUARIO NO IDENTIFICADO - INGRESE (ESC) PARA FINALIZAR");
        break;
}
entrada = prompt("Ingresar un nombre");
}

//condicional
let edad = parseInt(prompt("Ingrese su edad"));

if (edad >= 18) {
    alert("Edad confirmada - Puedes realizar compras en la página");
} else {
    alert("Edad confirmada - No puedes realizar compras en la página");
}



