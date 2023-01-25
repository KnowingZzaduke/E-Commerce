
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

    const carrito = [];
    const contentListaProductos = document.querySelector('.content_lista-carrito');
    const contentCarrito = document.querySelector('.content_productos');
    const listaCarrito = document.querySelector('.lista_carrito');
    arrayProducto.forEach((prod) =>{
        const {id, nombre, precio, img} = prod;
        contentCarrito.innerHTML +=`
        <div class="producto">
            <img src="${img}" alt="Imagen productos">
            <div class="content_parrafos-detalle-producto">
                <p class="nombre_producto">${nombre}</p>
                <p class="precio_producto">$${precio}</p>
            </div>
            <div class="content_detalles-producto";">
                <div class="content_botones">
                    <button type="button" class="boton_agregar-carrito" onclick="agregarProducto(${id})">Agregar al carrito</button>   
                    <button type="button" class="boton_visualizar"><i class="fa-solid fa-eye"></i></button>
                </div>
            </div>
        </div>
        `
    })

    //FUNCIÓN PARA AGREGAR PRODUCTOS AL CARRITO
    function agregarProducto(id){
        const item = arrayProducto.find((prod) => prod.id === id)
        carrito.push(item);
        mostrarProductos();
    }

    function mostrarProductos(){
        if(listaCarrito){
            contentListaProductos.style.display = ('block')
            listaCarrito.style.display = ('block');
            listaCarrito.innerHTML = "";
            carrito.forEach((prod) =>{
                const {id, nombre, precio, img} = prod;
                listaCarrito.innerHTML += `
                <div class="carrito">
                    <img src="${img}" alt="Monitor Gamer">
                    <div class="content_detalle-producto">
                        <p>${nombre}</p>
                        <p>$${precio}</p>
                    </div>
                    <div class="content_boton-borrar-producto">
                        <i class="fa-solid fa-trash"></i>
                    </div>
                    <hr>
                </div>
                <hr>
                ` 
            })
        }
    }

    function vaciarCarrito(resultadoP){
        const botonVaciarCarrito = document.querySelector('.vaciar');
        if(botonVaciarCarrito){
            carrito.length = [];
            contentListaProductos.style.display = ('block')
            listaCarrito.style.display = ('none');
            if(carrito.length == []){
                listaCarrito.insertAdjacentHTML('afterend', '<p class="parrafo_mensaje">Por favor agrega productos al carrito</p>');
                const p = document.querySelector('.parrafo_mensaje');
            }else{ 
                console.log(p);                
                mostrarProductos();
            }
        }

    }

