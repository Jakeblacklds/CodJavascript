// Lista de productos de productos gamer con ID, categoría, nombre, precio e imagen
let productos = [
  {
    id: 1,
    categoria: "mouse",
    nombre: "mouse Logitech G502",
    descripcion: "Mouse gamer con 6 botones y sensor óptico",
    precio: 1000,
    imagen: "https://www.pchmayoreo.com/pub/media/catalog/product/0/9/097855144430-L.jpg",
  },
  {
    id: 2,
    categoria: "mouse",
    nombre: "mouse Razer Deathadder",
    descripcion: "Mouse Razer con luces RGB ",
    precio: 1530,
    imagen: "https://m.media-amazon.com/images/I/51QHGpyTqFL._AC_SS450_.jpg",
  },
  {
    id: 3,
    categoria: "teclado",
    nombre: "teclado razer blackwidow",
    descripcion: "Teclado mecánico con luces RGB",
    precio: 3400,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_638619-MLA45374821312_032021-O.jpg",
  },
  {
    id: 4,
    categoria: "teclado",
    nombre: "teclado logitech G512",
    descripcion: "Teclado mecánico con luces RGB",
    precio: 1400,
    imagen: "https://ddtech.mx/assets/uploads/8d10737356137a6395b34619741ddbb6.png",
  },
  {
    id: 5,
    categoria: "monitor",
    nombre: "monitor gamer AOC 24",
    descripcion: "Monitor  de 24 pulgadas  Full HD",
    precio: 10000,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_758769-MLA47598712227_092021-O.jpg",
  },
  {
    id: 6,
    categoria: "monitor",
    nombre: "monitor Gamer AOC 27",
    descripcion: "Monitor  de 27 pulgadas con resolución 4K",
    precio: 20000,
    imagen: "https://i1.wp.com/garrcorpcomputer.com/wp-content/uploads/2021/09/monitor-gamer-8.png?fit=561%2C493&ssl=1",
  },
  {
    id: 7,
    categoria: "auriculares",
    nombre: "auriculares hyperX cloud",
    descripcion: "Auriculares gamer con micrófono",
    precio: 5000,
    imagen: "https://webonline.macstore.mx/img/sku/ACCHYP002_FZ.jpg",
  },
  {
    id: 8,
    categoria: "auriculares",
    nombre: "auriculares hyperX cloud II",
    descripcion: "Auriculares gamer con micrófono",
    precio: 7000,
    imagen: "https://ddtech.mx/assets/uploads/0629982c1acd2784bdee264d96384a4f.jpg",
  },
  ]

  let contenedorProductos = document.getElementById("productos")

 

  let buscador = document.getElementById("buscador")
  buscador.addEventListener("input", filtroNombre)

  let menorPrecio = document.getElementById("menor-precio")
  let filtradoPorMenorPrecio = false;
  menorPrecio.addEventListener("click", filtroMenorPrecio)

  let mayorPrecio = document.getElementById("mayor-precio")
  let filtradoPorMayorPrecio = false;
  mayorPrecio.addEventListener("click", filtroMayorPrecio)

  mostrarProductos( productos )
  mostrarCarrito()

  // Función para filtrar los productos por nombre usando el buscador poniendo letra por letra
  function filtroNombre() {
    let listaFiltrada = productos.filter(producto => producto.nombre.includes(buscador.value))  
    mostrarProductos(listaFiltrada)
  }

  // Función para filtrar los productos por precio de menor a mayor y se ordene otra vez al hacer click
  function filtroMenorPrecio() {
        // se le cambia el valor a la variable para que se active el filtro cuando se haga click en el checkbox
    filtradoPorMenorPrecio = !filtradoPorMenorPrecio; 
    // se uso la Funcion de Orden Superior sort() para reordenar los productos por precio
    if (filtradoPorMenorPrecio) {
      // si el filtro está activo, se ordena de menor a mayor precio
      productos.sort((a, b) => a.precio - b.precio);
    } else {
      // si el filtro está desactivado, se vuelve a mostrar la lista original
      productos.sort((a, b) => a.id - b.id);
    }
    mostrarProductos(productos);
  }

  // Función para filtrar los productos por precio de mayor a menor y se ordene otra vez al hacer click
  function filtroMayorPrecio() {
    filtradoPorMayorPrecio = !filtradoPorMayorPrecio; 
    if (filtradoPorMayorPrecio) {
      productos.sort((a, b) => b.precio - a.precio);
    } else {
      productos.sort((a, b) => a.id - b.id);
    }
    mostrarProductos(productos);

  }

// Función para mostrar los productos en la página usando innerHTML
function mostrarProductos(listaProductos ) {
  contenedorProductos.innerHTML = ""
  listaProductos.forEach((producto) => {
    let cajaProducto = document.createElement("div")
    cajaProducto.className = "caja-producto"
    cajaProducto.innerHTML = `
      <h3>${producto.nombre}</h3>
      <p>${producto.descripcion}</p>
      <p>Precio: $${producto.precio}</p>
      <img class= "imagen" style="width: 200px; height: 200px;" src="${producto.imagen}" >
      <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
    `

    contenedorProductos.appendChild(cajaProducto)


  })
}

// Función para agregar productos al carrito y se guarden en el localStorage
function agregarAlCarrito(id) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || []
  let producto = productos.find((producto) => producto.id === id)
  carrito.push(producto)
  localStorage.setItem("carrito", JSON.stringify(carrito))
  mostrarCarrito()
}

// Función para mostrar los productos que se agregaron al carrito
function mostrarCarrito() {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || []
  let contenedorCarrito = document.getElementById("carrito")
  contenedorCarrito.innerHTML = ""
  carrito.forEach((producto) => {
    let cajaProducto = document.createElement("div")
    cajaProducto.className = "caja-producto"
    cajaProducto.innerHTML = `
      <h4>${producto.nombre}</h4>
      <p>${producto.descripcion}</p>
      <p>Precio: $${producto.precio}</p>
      <img class= "imagen-carrito" style="width: 100px; height: 100px;" src="${producto.imagen}" >
      <button onclick="eliminarDelCarrito(${producto.id})">Eliminar del carrito</button>
    `
    //Eliminamos el producto de la página
    
    contenedorCarrito.appendChild(cajaProducto)
 
  })
}

// Función para eliminar productos del carrito y del local storage
function eliminarDelCarrito(id) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || []
  carrito = carrito.filter((producto) => producto.id !== id)
  localStorage.setItem("carrito", JSON.stringify(carrito))
  mostrarCarrito()
}






