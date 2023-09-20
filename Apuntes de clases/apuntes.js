//Clase constructora de los productos
//class Producto {
//    constructor(nombre, precio) {
//        this.nombre = nombre;
//        this.precio = precio;
//        this.vendido = false;
//}

//vender() {
//    this.vendido = true;
//    }
//}

//Arreglo donde se guardan los productos creados
//const productos = [];

//Productos creados que se agregan al listado anterior
//productos.push(new Producto("Guitarra Criolla", 100000));
//productos.push(new Producto("Guitarra Electrica", 750000));
//productos.push(new Producto("Funda guitarra criolla", 7200));
//productos.push(new Producto("Funda guitarra electrica", 10000));


//Mensaje emergente para que el usuario interactue con la busqueda de productos de la página
//let nombre = prompt("Ingrese el nombre del producto a consultar. Ej: Guitarra Criolla, Guitarra Electrica, etc.");

//while (nombre != "ESC") {

//let producto;


//for (const item of productos) {
//    if (item.nombre === nombre) {
//    producto = item;
//    }
//}
//Condicionales de interacción de usuario con busqueda de la página
//if (producto) {
//    let mensaje = `
//        Nombre: ${producto.nombre}
//        Precio: $${producto.precio}
//    `;
//Mensaje de resultado de busqueda y bucle
//    alert(mensaje);
//} else {
//    alert("El producto no se encuentra disponible. Si desea salir del buscador escriba ESC");
//}

//nombre = prompt("Ingrese el nombre del producto a consultar. Ej: Guitarra Criolla, Guitarra Electrica, etc.");
//}

//Listado de productos disponibles para consultar y/o comprar
//const elementos = [
//    { id: 1, nombre: "Guitarra Criolla", precio: 100000 },
//    { id: 2, nombre: "Guitarra electrica", precio: 750000 },
//    { id: 3, nombre: "Funda guitarra criolla", precio: 7200 },
//    { id: 4, nombre: "Funda guitarra electrica", precio: 10000 },
//];
//Detalle listado de nombres de prouctos
//const nombres = elementos.map((item) => item.nombre);
//console.log(nombres);
//Detalle listado de precios de productos y variaciones del iva
//const precios = elementos.map((item) => item.precio);
//console.log(precios);

//const nuevosPrecios = elementos.map((item) => {
//return {
//    id: item.id,
//    nombre: item.nombre,
//    precio: item.precio - item.precio * 0.21,
//    };
//});

//console.log(nuevosPrecios);

//Despliegue de detalle de elementos y parámetros en arreglo
//elementos.forEach((item) => {
//console.log(item.nombre);
//console.log(item.precio);
//console.log(item.id);
//});

// Buscador de objeto en arreglo
//const objetoElegido = elementos.find((item) => item.nombre ==="Guitarra");
//console.log(objetoElegido);

//filtro de precios a consultar por productos en la página
//const filtrados = elementos.filter((item) => item.precio > 7000);
//console.log(filtrados);

//let precio = parseInt(prompt("Ingrese el precio minimo del producto a consultar"));

//const filtros = elementos.filter((item) => item.precio > precio);

//filtros.forEach((item) => {
//let mensaje = `
//    Id: ${item.id}
//    Nombre: ${item.nombre}
//    Precio: $${item.precio}
//`;

//alert(mensaje);
//});

//acumulador de valores totales del carrito de compras
//const total = elementos.reduce((acumulador, item) => acumulador + item.precio, 0);
//console.log(total);









/// apuntes de Clase 5

/*let usuario;
let usuarioStorage = sessionStorage.getItem("usuario");

if (usuarioStorage) {
    usuario = usuarioStorage;
    alert(`Hola nuevamente ${usuario}`);
} else {
    usuario = prompt("Ingrese su usuario");
    alert(`Bienvenid@ por primera vez ${usuario}`);
    sessionStorage.setItem("usuario", usuario);
}//

const productos = [
    { id: 1, nombre: "camisa", precio: 1000 },
    { id: 2, nombre: "gorra", precio: 750 },
    { id: 3, nombre: "zapato", precio: 370 },
    { id: 4, nombre: "media", precio: 1250 },
];

localStorage.setItem("carrito", JSON.stringify(productos));



to  Everyone
let eliminar = document.getElementById("eliminar");
let carrito = [];

//me traigo el carrito del storage
let carritoStorage = localStorage.getItem("carrito");

//si hay carrito lo cargo si no coloco en el dom que no hay productos
if (carritoStorage) {
    carrito = JSON.parse(carritoStorage);
} else {
    let div = document.createElement("div");
    div.innerHTML = `
    <h2>No hay productos en el carrito</h2>
`;

    document.body.append(div);
}

//recorro el carrito y muestro en el dom los productos carrito
carrito.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = `
    <h2>ID: ${item.id}</h2>
    <p>Nombre: ${item.nombre}</p>
    <b>$${item.precio}</b>
`;

    document.body.append(div);
});

//elimino el storage, muestro el alert y recargo la pagina
eliminar.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
    alert("Carrito eliminado");
});


// let usuario;
// let usuarioStorage = sessionStorage.getItem("usuario");

// if (usuarioStorage) {
//   usuario = usuarioStorage;
//   alert(`Hola nuevamente ${usuario}`);
// } else {
//   usuario = prompt("Ingrese su usuario");
//   alert(`Bienvenid@ por primera vez ${usuario}`);
//   sessionStorage.setItem("usuario", usuario);
// }
*/

