
    //Array de objetos que contiene los productos
    let arrayProducto = [
        {
            id: 1,
            nombre: "Cámara",
            precio: 5000,
            img: "src/img/camara-gamer.jpg",
            cantidad: 1
        },

        {
            id: 2,
            nombre: "Monitor",
            precio: 5000,
            img: "src/img/monitor-gamer.jpg",
            cantidad: 1
        },

        {
            id: 3,
            nombre: "Tarjeta gráfica",
            precio: 5000,
            img: "src/img/tarjeta-grafica.jpg",
            cantidad: 1
        },

        {
            id: 4,
            nombre: "Control Xbox",
            precio: 5000,
            img: "src/img/mando-xbox.jpg",
            cantidad: 1
        },

        {
            id: 5,
            nombre: "Auriculares",
            precio: 5000,
            img: "src/img/auriculares-gamer.jpg",
            cantidad: 1
        },

        {
            id: 6,
            nombre: "Mouse",
            precio: 5000,
            img: "src/img/mouse-gamer.jpg",
            cantidad: 1
        },

        {
            id: 7,
            nombre: "Teclado",
            precio: 5000,
            img: "src/img/teclado-gamer.jpg",
            cantidad: 1
        },

        {
            id: 8,
            nombre: "Gabinete",
            precio: 5000,
            img: "src/img/carcasa-gamer.jpg",
            cantidad: 1
        }
    ]

    let carrito = [];
    const contentListaProductos = document.querySelector('.content_lista-carrito');
    const contentCarrito = document.querySelector('.content_productos');
    const listaCarrito = document.querySelector('.lista_carrito');
    const botonVaciarCarrito = document.querySelector('.vaciar');
    const contentBotonVaciarCarrito = document.querySelector('.content_boton-vaciar-carrito');
    const valorTotal = document.querySelector('.valor');
    const contentListaProductosPhone = document.querySelector('.content_lista-carrito-phone');
    const listaCarritoPhone = document.querySelector('.lista_carrito-phone');
    var widthBrowser = outerWidth;

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
                    <button type="button" class="boton_visualizar" onclick="modalImage('${img}')"><i class="fa-solid fa-eye"></i></button>
                </div>
            </div>
        </div>
        `
    })

    function modalImage(img){
        const item = arrayProducto.find((prod) => prod.img === img);
        const nombreProducto = item.nombre;
        console.log(nombreProducto);
        if(item){
            swal({
                title: `${nombreProducto}`,
                icon: `${img}`,
                button: "Cerrar",
            })
        }
    }


    //FUNCIÓN PARA AGREGAR PRODUCTOS AL CARRITO
    const agregarProducto = (id) => {
        const existe = carrito.some((prod) => prod.id === id)
        if(existe){
            const prod = carrito.map((prod) => {
                if(prod.id === id){
                    prod.cantidad++
                }
            })
        }else{
            const item = arrayProducto.find((prod) => prod.id === id)
            carrito.push(item);

            if(carrito.length > 1){
                agregarScroll()
            }     
        }  

        mostrarProductos()
        calcularValorProductos();
    };

    function mostrarProductos(){
        if(listaCarrito){
            contentListaProductos.style.display = ('block')
            listaCarrito.style.display = ('block');
            listaCarrito.innerHTML = "";
            carrito.forEach((prod) =>{
                let {id, nombre, precio, img, cantidad} = prod;
                    listaCarrito.innerHTML += `
                    <div class="carrito">
                        <div class="content_imagen-carrito">
                        <img src="${img}" alt="Monitor Gamer">
                        </div>
                        <div class="content_detalle-producto">
                            <p>${nombre}
                                <span>$${precio}</span>
                                <span>X${cantidad}</span>
                            </p>
                        </div>
                        <div class="content_boton-borrar-producto">
                            <i class="fa-solid fa-trash trash" onclick="eliminarProducto(${id})" title="Borrar"></i>
                        </div>
                        <hr>
                    </div>
                    <hr>
                    `
            })
        }
    }

    function crearX(){
        const div = document.createElement('DIV');
        listaCarrito.insertAdjacentHTML('beforebegin', '<p class="fa-sharp fa-solid fa-xmark cerrar_carrito" onclick="cerrarCarrito()"></p>');
    }
    crearX();

    function calcularValorProductos(){
        if(valorTotal){
            valorTotal.innerHTML = carrito.reduce((total, prod) => total + prod.cantidad * prod.precio, 0);
        }
    }

    function vaciarCarrito(){
        carrito.length = [];
        listaCarrito.style.display= ('none');
        if(carrito.length == []){
            contentListaProductos.style.display = ('none');
            quitarScroll();
            
        }else{
            mostrarProductos();
        }
    }

    function agregarScroll(){
        listaCarrito.style.overflowY = "scroll";
        listaCarrito.style.height = "300px";
    }

    function quitarScroll(){
        listaCarrito.style.overflowY = "hidden";
        listaCarrito.style.height = "auto";
    }

    function mostrarAlerta(){
        if(carrito.length == 0){
            setTimeout(() =>{
                swal({
                    title: "¡Tu carrio se encuenta vacío! por favor agrega productos",
                    icon: "warning",
                    button: "Ok",
                    dangerMode: true
                });
            }, 1000);
        }else{
            contentListaProductos.style.display = ('block');
        }
    }

    function eliminarProducto(id){
        const idProducto = id;
        carrito = carrito.filter((producto) => producto.id !== idProducto);
        mostrarProductos();
        if(carrito.length === 0){
            contentListaProductos.style.display = ('none');
            quitarScroll();
        }
    }

    //CERRAR CARRITO
    function cerrarCarrito(){
        contentListaProductos.style.display = ('none');
    } 