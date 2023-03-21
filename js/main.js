
/* Programa para advinar un numero aleatorio entre 1 y 10! */

//Esta es linea de codigo la busque, ya que no sabia como generar un numero aleatorio

let puntajeTotal = 0
menuPrincipal()


function menuPrincipal () {
    let menu = parseInt(prompt("Bienvenido al juego de adivinar el número! \n 1. Jugar \n 2. Puntaje Total\n 3. Salir"))
    switch (menu) {
        case 1:
            adivinarNumero()
            break
        case 2:
            alert("El puntaje total es de " + puntajeTotal)
            menuPrincipal()
            break2
        case 3:
            alert("Gracias por jugar!")
            break
        default:
            alert("Opción inválida")
            menuPrincipal()
    }
}

function adivinarNumero() {
let numeroAleatorio = Math.floor(Math.random() * 10) + 1
//Aqui empieza el bucle para que el usuario tenga 5 intentos para adivinar el numero
for (let i = 0; i < 5; i++) {
    alert("Tienes 5 intentos para adivinar el número" + "\n" + "             Intento " + (i + 1) + " de 5")
    // Se le pide al usuario que ingrese un numero
    let numeroIngresado = parseInt(prompt("Ingrese un número entre 1 y 10"))
        
    // Aqui se compara el numero ingresado con el numero aleatorio,
        if (numeroIngresado == numeroAleatorio) {
            // se hizo una funcion para calcular el puntaje de acuerdo a los intentos
            
            alert("Ganaste! Obtuviste  " + puntaje(i) + "  puntos")
            puntajeTotal += puntaje(i)
            // Se le pregunta al usuario si desea seguir jugando
            jugarOtraVez()
            break
        } else {
            if (numeroIngresado > numeroAleatorio) {
                alert("El número es menor")
            } else {   
                alert("El número es mayor")
            }
                } 
    // Si el usuario no adivina el numero en los 5 intentos, se le muestra el numero aleatorio
    if (i == 4) {
        alert("Perdiste! El número era " + numeroAleatorio)
        jugarOtraVez()
    }
    

} 

}


//Esta funcion calcula el puntaje del usuario, se le resta 200 por cada intento.Por lo tanto, si falla en todos los intentos obtendra 0 puntos
function puntaje (intentos)
{
    let puntaje = 1000 - (intentos * 200)
    return puntaje
}

function jugarOtraVez () {
    let otravez = parseInt(prompt("¿Desea jugar otra vez? \n 1. Si \n 2. Puntaje Total \n 3. Menu Principal"))
    switch (otravez) {
        case 1:
            adivinarNumero()
            break
        case 2:
            alert ("El puntaje total es de " + puntajeTotal)
            jugarOtraVez()
            break
        case 3:
            menuPrincipal()
            break
        default:
            alert("Opción inválida")
            jugarOtraVez()
}
}