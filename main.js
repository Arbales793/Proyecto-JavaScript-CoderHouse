document.getElementById('agregar-al-carrito').addEventListener('click', function () {

});
localStorage.setItem("carrito", JSON.stringify(productos));

var carrito = {
    items: [],
    agregarItem: function (producto) {
        this.items.push(producto);
    },
    quitarItem: function (producto) {
        var indice = this.items.indexOf(producto);
        if (indice > -1) {
            this.items.splice(indice, 1);
        }
    }
};

document.getElementById('agregar-al-carrito').addEventListener('click', function () {
    var producto = productos[0]; 
    carrito.agregarItem(producto);
});


fetch('productos.json')
    .then(response => response.json())
    .then(data => {});

const carrito = document.getElementById('carrito');
carrito.classList.add('agregado');

setTimeout(function () {
    carrito.classList.remove('agregado');
}, 500);

if (carritoStorage) {
    carrito = JSON.parse(carritoStorage);
} else {
    let div = document.createElement("div");
    div.innerHTML = `
        <h2>No hay productos en el carrito</h2>

        localStorage.setItem("carrito", JSON.stringify(productos));
let carritoStorage = localStorage.getItem("carrito");


const traerProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        reject("Error en el servidor");
        }, 3000);
});
};


traerProductos()
.then((response) => {
    response.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = `
        < h2 > ID: ${ item.id }</ >
        <p>Nombre: ${item.nombre}</p>
        <b>$${item.precio}</b>
    `;

document.body.append(div);
    });
})
.catch((error) => {
    let div = document.createElement("div");
    div.innerHTML = `Error, intente luego ${ error } `;

    document.body.append(div);
});


let listado = document.getElementById("listado");

const traerDatos = async () => {
try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

data.forEach((publicacion) => {
    const li = document.createElement("li");
    li.innerHTML = `
        < h2 > ${ publicacion.title }</ >
            <p>${publicacion.body}</p>
    `;

listado.append(li);
    });
} catch (error) {
    const div = document.createElement("div");
    div.innerHTML = `Error ${ error } `;

    document.body.append(div);
}
};
traerDatos();

