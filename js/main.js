// Lista de productos de productos gamer con ID, categoría, nombre, precio e imagen
let tiendContent = document.getElementById("tiendContent");
let verCarrito = document.getElementById("verCarrito");
let ventanaContainer = document.getElementById("ventanContainer");
let cantidadCarrido = document.getElementById("cantidadCarrito");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let buscador = document.getElementById("buscador");
let menorPrecio = document.getElementById("menorPrecio");
let mayorPrecio = document.getElementById("mayorPrecio");
let productos = [];

const getProductos = async () => {
  const response = await fetch("data.json")
  productos = await response.json()
  productos.forEach((product) => {
    let content = document.createElement("div")
    content.className = "card"
    content.innerHTML = `
      <img src="${product.imagen}">
      <h3>${product.nombre}</h3>
      <p>${product.descripcion}</p>
      <p class="precio">$${product.precio}</p>
    `
    tiendContent.appendChild(content)
    let comprar = document.createElement("button")
    comprar.innerText = "Agregar al carrito"
    comprar.className = "comprar"
    content.append(comprar)
    comprar.addEventListener("click", () => {
      Toastify({
        text: "Agregado al carrito",
        className: "info",
        style: {
          background: "linear-gradient(to right, #d81159, orange)",
        }
      }).showToast();
      const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id)
      if (repeat) {
        carrito.map((prod) => {
          if (prod.id === product.id) {
            prod.cantidad++
          }
        });
      } else {
        carrito.push({
          id: product.id,
          nombre: product.nombre,
          precio: product.precio,
          imagen: product.imagen,
          cantidad: product.cantidad,
        });
      }
      console.log(carrito)
      contadorCarrito()
      guardarLocal()
    })
    
  })
}

const filtrarProductos = (filtro) => {
  tiendContent.innerHTML = ""
  productos 
    .filter((product) => product.nombre.toLowerCase().includes(filtro))
    .forEach((product) => {
      let content = document.createElement("div")
      content.className = "card"
      content.innerHTML = `
        <img src="${product.imagen}">
        <h3>${product.nombre}</h3>
        <p>${product.descripcion}</p>
        <p class="precio">$${product.precio}</p>
      `;
      tiendContent.appendChild(content)
      let comprar = document.createElement("button");
      comprar.innerText = "Comprar"
      comprar.className = "comprar"
      content.append(comprar)
      comprar.addEventListener("click", () => {
        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
        if (repeat) {
          carrito.map((prod) => {
            if (prod.id === product.id) {
              prod.cantidad++
            }
          });
        } else {
          carrito.push({
            id: product.id,
            nombre: product.nombre,
            precio: product.precio,
            imagen: product.imagen,
            cantidad: product.cantidad,
          });
        }
        console.log(carrito)
        contadorCarrito()
        guardarLocal()
      })
    })
}

//Funcion para filtrar por menor precio y que se quite cuando se desmarca el checkbox



getProductos();

buscador.addEventListener("input", (event) => {
  let filtro = event.target.value.toLowerCase()
  filtrarProductos(filtro)
})

function guardarLocal() {
  localStorage.setItem("carrito", JSON.stringify(carrito))
}




