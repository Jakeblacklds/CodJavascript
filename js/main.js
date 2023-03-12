
/* Programa para advinar un numero aleatorio entre 1 y 10! */

//Esta es la unica linea de codigo que busque, ya que no sabia como generar un numero aleatorio
let numeroAleatorio = Math.floor(Math.random() * 10) + 1

//Aqui empieza el bucle para que el usuario tenga 5 intentos
for (let i = 0; i < 5; i++) {
    alert("Tienes 5 intentos para adivinar el número" + "\n" + "             Intento " + (i + 1) + " de 5")
    // Se le pide al usuario que ingrese un numero
    let numeroIngresado = parseInt(prompt("Ingrese un número entre 1 y 10"))
        
    // Aqui se compara el numero ingresado con el numero aleatorio,
        if (numeroIngresado == numeroAleatorio) {
            // se hizo una funcion para calcular el puntaje de acuerdo a los intentos
            
            alert("Ganaste! Obtuviste  " + puntaje(i) + "  puntos")
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
    }
    

} 



// Esta funcion calcula el puntaje del usuario, se le resta 200 por cada intento.Por lo tanto, si falla en todos los intentos obtendra 0 puntos
function puntaje (intentos)
{
    let puntaje = 1000 - (intentos * 200)
    return puntaje
}