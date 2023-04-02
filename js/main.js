

let frutas = [
    {nombre: "Manzana", precio: 20},
    {nombre: "Banana", precio: 30},
    {nombre: "Naranja", precio: 15},
    {nombre: "Fresa", precio: 65},
    {nombre: "Pera", precio: 25},
    {nombre: "Melon", precio: 50},
    {nombre: "Sandia", precio: 40},
    {nombre: "Kiwi", precio: 35},
    {nombre: "Uva", precio: 45},
    {nombre: "Mango", precio: 55},
    {nombre: "Papaya", precio: 60},
    {nombre: "Cereza", precio: 70},
    {nombre: "Ciruela", precio: 75},
    {nombre: "Pitaya", precio: 80},
    {nombre: "Mandarina", precio: 85},
]

// Crear un array vacío para el carrito
let carrito = []

// Mostrar el menú de opciones al usuario
menu()

function menu() {
let opcion = prompt("Bienvenido a la tienda de frutas. Elige una opción:\n" +
    "1. Ver el nombre y el precio de cada fruta\n" +
    "2. Añadir una fruta al carrito\n" +
    "3. Total del carrito y Pagar\n" +
    "4. Salir")

// Ejecutar la opción elegida por el usuario

switch (opcion) {

  case "1": // Ver el nombre y el precio de cada fruta
    let mensaje = "" // Crear un mensaje vacío
    frutas.forEach(function(fruta) { // Recorrer el array de frutas
      mensaje += fruta.nombre + ": " + fruta.precio + "$\n"; // Añadir el nombre y el precio de cada fruta al mensaje
    })
    alert(mensaje) // Mostrar el mensaje con las frutas y sus precios
    menu()
    break   



    case "2": // Añadir una fruta al carrito
    BuscayAñade()
    break

    case "3": // Ver el total del Carrito y Pagar
    vercarrito() 
    pagar()
    break

    case "4": // Salir
    alert("Gracias por su visita"); // Mostrar un mensaje de despedida
    break

    default: 
    alert("Opción no válida"); 
    menu() 
}

}

function BuscayAñade() {
    let nombre = prompt("Introduce el nombre de la fruta que quieres buscar"); // Pedir el nombre de la fruta que se quiere buscar al usuario
    let resultado = frutas.find(function(fruta) { // Usar el método find para obtener la primera fruta que coincida con el nombre buscado
        return fruta.nombre === nombre; // Devolve2r verdadero si la fruta actual tiene el mismo nombre que el buscado
    })
    if (resultado) { // Si se ha encontrado una fruta
        alert("El precio de la " + nombre + " es " + resultado.precio + " $"); // Mostrar el precio de la fruta
        alert("¿Desea añadir la fruta al carrito?") // Preguntar si se quiere añadir la fruta al carrito
        let respuesta = prompt("1. Si \n 2. No") // Pedir la respuesta al usuario
        if (respuesta == "1") { // 
            carrito.push(resultado) // Añadir la fruta al carrito
            alert("Se ha añadido la fruta " + nombre + " al carrito"); // Mostrar un mensaje de confirmación
            menu()
        } else {
            alert("No se ha añadido la fruta al carrito"); // Mostrar un mensaje de que no se ha añadido la fruta al carrito
        }
        

    } else { // Si no se ha encontrado ninguna fruta
        alert("Ahorita no tenemos " + nombre + " intente de nuevo" ); // Mostrar un mensaje de que no se ha encontrado la fruta
        BuscayAñade() 
    }

}

function vercarrito() {
  let mensaje = "" 
  let total = sumarProductos(carrito)
  carrito.forEach(function(fruta) { // Recorrer el array del carrito
    
    mensaje += fruta.nombre + ":  " + fruta.precio + "$\n"  // Añadir el nombre y el precio de cada fruta al mensaje
    })
  alert(mensaje + "Total de   " + total + "$") // Mostrar el mensaje con las frutas y sus precios

}

function quitar() {
    let nombre = prompt("Introduce el nombre de la fruta que quieres quitar"); // Pedir el nombre de la fruta que se quiere buscar al usuario
    let resultado = carrito.find(function(fruta) { // Usar el método find para obtener la primera fruta que coincida con el nombre buscado
        return fruta.nombre === nombre; // Devolver verdadero si la fruta actual tiene el mismo nombre que el buscado
    })
    if (resultado) { // Si se ha encontrado una fruta
        alert("¿Desea quitar la fruta del carrito?") // Preguntar si se quiere añadir la fruta al carrito
        let respuesta = prompt("1. Si \n 2. No") // Pedir la respuesta al usuario
        if (respuesta === "1") { // 
            carrito.pop(resultado) //   Quitar la fruta del carrito
            alert("Se ha quitado la fruta " + nombre + " del carrito"); // Mostrar un mensaje de confirmación
            menu()
        } else { // Si la respuesta es no
            quitar() 
        }
    } else { // Si no se ha encontrado ninguna fruta
        alert("La fruta " + nombre + " No esta en el carrito" ); // Mostrar un mensaje de que no se ha encontrado la fruta
        quitar()
    }

}

function pagar() {
    alert("Quiere pagar?") // Preguntar si se quiere pagar
    let respuesta = prompt("1. Si \n 2. No") // Pedir la respuesta al usuario
    if (respuesta === "1") { //
        let pago = prompt("¿Con cuánto va a pagar?") // Pedir el pago al usuario
        let total = 0 // Crear una variable para el total
        carrito.forEach(function(fruta) { // Recorrer el array del carrito
            total += fruta.precio // Sumar el precio de cada fruta al total
        })
        if (pago >= total) { // Si el pago es mayor o igual que el total
            alert("Su cambio es de " + (pago - total) + "$"); // Mostrar el cambio
            alert("Gracias por su compra"); // Mostrar un mensaje de despedida
            
        } else { // Si el pago es menor que el total
            alert("No le alcanza, quite cosas del carrito"); // Mostrar un mensaje de que el pago es insuficiente
            quitar()
            //Despues de quitar algo del carrito, volver a preguntar si quiere pagar
            pagar()
            
        }
    } else 
     { // Si la respuesta es no
        menu()
        }
        
}

function sumarProductos(productos) {
    {
        let total = 0
        for (let i = 0; i < productos.length; i++) {
        total += productos[i].precio
        }
        return total
        }
}