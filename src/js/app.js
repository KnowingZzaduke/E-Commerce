window.addEventListener('load', function(){
    const toggleAbrir = document.querySelector('.abrir');
    const toggleCerrar = document.querySelector('.cerrar')
    const menu = document.querySelector('.content_lista-menu');
    
    toggleAbrir.addEventListener('click', function(e){
        if(e){
            menu.style.display = ('block');
        }
    })

    toggleCerrar.addEventListener('click', function(e){
        if(e){
            menu.style.display = ('none');
        }
    })

    //Array de objetos que contiene los productos
const arrayProducto = [
    {
        id: 1,
        nombre: "Camara",
        precio: 5000,
        img: "../img/camara-gamer.png"
    },

    {
        id: 2,
        nombre: "Monitor",
        precio: 5000,
        img: "../img/monitor-gamer.png"
    },

    {
        id: 3,
        nombre: "Tarjeta gráfica",
        precio: 5000,
        img: "../img/tarjeta-grafica.png"
    },

    {
        id: 4,
        nombre: "Controles",
        precio: 5000,
        img: "../img/control-xbox.png"
    },

    {
        id: 5,
        nombre: "Ariculares",
        pracio: 5000,
        img: "../img/auriculares-gamer.png"
    },

    {
        id: 6,
        nombre: "Mouse",
        precio: 5000,
        img: "../img/mouse-gamer.png"
    },

    {
        id: 7,
        nombre: "Teclado",
        precio: 5000,
        img: "../img/teclado-gamer.png"
    },

    {
        id: 8,
        nombre: "Gabinete",
        precio: 5000,
        img: "../img/gabinete-gamer.png"
    }
]

const resultadoObtenerRutaImg = obtenerRutaImg(arrayProducto);


const contentProductos = document.querySelector('.content_productos');
const productos = document.createElement('DIV');
const imgProductos = document.createElement('IMG');
const nombreProducto = document.createElement('P');
const precioProducto = document.createElement('P');
productos.classList.add('productos');
imgProductos.src = ("${resultadoObtenerRutaImg}");
})

function obtenerRutaImg(arrayProducto){
    for(let i = 0; i < arrayProducto.length; i++){
        return arrayProducto[i].img;
    }
}


function insertarImg(done){
    contentProductos.appendChild(productos);
    productos.innerHTML(imgProductos);
    console.log(productos);
    done();
}

