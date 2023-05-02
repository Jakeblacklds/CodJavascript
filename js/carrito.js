
function mostrarCarrito() {
verCarrito.addEventListener("click", () => {
    // Header de la ventana
    ventanaContainer.innerHTML = ""
    ventanaContainer.style.display = "flex"
    let ventanaHeader = document.createElement("div")
    ventanaHeader.className = "ventanaHeader"
    ventanaHeader.innerHTML = `
    <h2 class="ventanaHeader-title">Carrito</h2>
    `
    ventanaContainer.append(ventanaHeader)
    // Botón para cerrar la ventana
    const ventanaBtn = document.createElement("h1")
    ventanaBtn.innerText = "X"
    ventanaBtn.className = "ventanaBtn"

    ventanaBtn.addEventListener("click", () => {
      ventanaContainer.style.display = "none"
    })

    ventanaHeader.append(ventanaBtn)

    // Contenido del carrito
    carrito.forEach((product) => { 
    
    let carritoContent = document.createElement("div")
    carritoContent.className = "ventan-content"
    carritoContent.innerHTML = `
    <img class="ventana-img" src="${product.imagen}" >
    <h3>${product.nombre}</h3>
    <p>$ ${product.precio}</p>
    <p>Cantidad: ${product.cantidad}</p> 
    <p>Subtotal: $ ${product.precio * product.cantidad}</p>
    `
    ventanaContainer.append(carritoContent)

    let eliminar = document.createElement("span")
    eliminar.innerText = "Borrar"
    eliminar.className = "eliminar-producto"
    carritoContent.append(eliminar)
    eliminar.addEventListener("click", eliminarProducto)

  })

    // Total de la compra
    let total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad , 0)
    let totalContent = document.createElement("div")
    totalContent.className = "totalContent"
    totalContent.innerHTML = `
    <h3>Total: $ ${total}</h3>
    `
    ventanaContainer.append(totalContent)

    // Botón para finalizar la compra
    let finalizarCompra = document.createElement("button")
    finalizarCompra.innerText = "Finalizar compra"
    finalizarCompra.className = "finalizar-compra"

    finalizarCompra.addEventListener("click", () => {
      Swal.fire({
        title: '¿Estás seguro que quieres finalizar la compra?',
        text: "El total de tu compra es de $" + total,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d81159',
        cancelButtonColor: '#black',
        confirmButtonText: 'Sí, finalizar',
        cancelButtonText: 'No, cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            '¡Gracias por tu compra!',
            'Tu compra ha sido realizada con éxito.',
            'success'
          )
          carrito = []
          contadorCarrito()
          guardarLocal()
          ventanaContainer.style.display = "none"
        }
      })
    })

    ventanaContainer.append(finalizarCompra)
  })
}

verCarrito.addEventListener("click", mostrarCarrito)
function eliminarProducto(e) {
    const productoAEliminar = e.target.parentElement
    const nombreProducto = productoAEliminar.querySelector("h3").innerText
    const productoEliminado = carrito.find((el) => el.nombre === nombreProducto)
    const index = carrito.indexOf(productoEliminado)
    // Agregar esta parte para mostrar la alerta
    Swal.fire({
        title: '¿Estás seguro que quieres eliminar el producto?',
        text: nombreProducto,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d81159',
        cancelButtonColor: '#black',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'No, cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          // Si el usuario confirma, eliminar el producto del carrito
          carrito.splice(index, 1)
          productoAEliminar.remove()
          let total = carrito.reduce((acc, el) => acc + el.precio, 0)
          let totalContent = document.querySelector(".totalContent")
          totalContent.innerHTML = `
              <h3>Total: $ ${total}</h3>
              `
          contadorCarrito()
          guardarLocal()
          // Mostrar un mensaje de éxito
          Swal.fire(
            'Eliminado',
            'El producto ha sido eliminado del carrito.',
            'success'
          )
        }
      })
    // Fin de la parte agregada
}

//función que guarda el largo del carrito en el local storage
function contadorCarrito (carritoa) {
    cantidadCarrito.style.display = "block"
    let carritoLargo = carrito.length
    localStorage.setItem("carritoLargo", JSON.stringify(carritoLargo))
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLargo"))
}

contadorCarrito(carrito)