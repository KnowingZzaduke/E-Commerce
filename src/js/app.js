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
            img: "src/img/camara-gamer.png",
        },

        {
            id: 2,
            nombre: "Monitor",
            precio: 5000,
            img: "src/img/monitor-gamer.jpg",
        },

        {
            id: 3,
            nombre: "Tarjeta gráfica",
            precio: 5000,
            img: "src/img/tarjeta-grafica.png",
        },

        {
            id: 4,
            nombre: "Controles",
            precio: 5000,
            img: "src/img/control-xbox.png",
        },

        {
            id: 5,
            nombre: "Ariculares",
            pracio: 5000,
            img: "src/img/auriculares-gamer.png",
        },

        {
            id: 6,
            nombre: "Mouse",
            precio: 5000,
            img: "src/img/mouse-gamer.png",
        },

        {
            id: 7,
            nombre: "Teclado",
            precio: 5000,
            img: "src/img/teclado-gamer.png",
        },

        {
            id: 8,
            nombre: "Gabinete",
            precio: 5000,
            img: "src/img/gabinete-gamer.png",
        }
    ]

    
    const contentCarrito = document.querySelector('.content_productos');
    arrayProducto.forEach((prod) =>{
        const {id, nombre, precio, img} = prod;
        console.log(img);
        contentCarrito.innerHTML +=`
        <div class="producto">
            <img src="${img}" alt="Imagen productos">
            <div class="content_parrafos-detalle-producto">
                <p class="nombre_producto">${nombre}</p>
                <p class="precio_producto">$${precio}</p>
            </div>
            <div class="content_detalles-producto";">
                <div class="content_botones">
                    <button class="boton_agregar-carrito">Agregar al carrito</button>   
                    <button type="button" class="boton_visualizar"><i class="fa-solid fa-eye"></i></button>
                </div>
            </div>
        </div>`
    })
})


