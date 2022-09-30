// Escribí while Loops
// En este ejercicio deberás imprimir en la consola:
// Todos los números entre 5 y 50 que sean divisibles por 5 y 3 al mismo tiempo.
// +, -, *, /, %

// let i = 1
// while (i <= 50) {
//     if (i >= 5) {
//         if (i % 3 == 0 && i % 5 == 0) {
//             console.log(i + " este numero es divisible por ambos")
//         }
//     }

//     i++
// }

// let i = 5
// while (i <= 50) {
//         if (!(i % 3) && !(i % 5) ) console.log(i + " este numero es divisible por ambos")
//     i++
// }

// let arr = []
// for (let num = 5; num <=50; num++) {
//     num % 5 === 0 && num % 3 === 0 && arr.push(num);
// }
// console.log(arr)

// ----------------------------------------------------------------
// Par O Impar
// En este ejercicio deberás crear un programa que le pregunte al usuario un número y que le devuelva un mensaje que indique si es par o impar. El programa terminará si el usuario ingresa un 0 o un número negativo.

// show hint
// .Mediante la función prompt, deberá ingresar un conjunto de valores numéricos enteros y positivos.
// .Por cada número, deberás informarle si el valor ingresado es par o impar.
// .La salida del programa se producirá cuando ingrese un 0 o un número negativo.



// do {
//     let i = prompt("escrivi un numero entero positivo, para salir ingrea o o un numero negativo")
//     if (i <= 0) {
//         break
//     }
//     if (i % 2 == 0) {
//         console.log(`${i} este numero es par`)
//     } else {
//         console.log(`${i} este numero es impar`)
//     }
// } while (i <= 0);



// do {
//     var i = prompt("escrivi un numero entero positivo, para salir ingrea o o un numero negativo")
//     if (i <= 0) break
//     i % 2 == 0?console.log(`${i} este numero es par`):console.log(`${i} este numero es impar`)
// } while (i >0);


// -----
// let numero2 = prompt("captura un numero:")
// while (parseInt(numero2) != 0 && parseInt(numero2) > 0) {
//     if (numero2 % 2 === 0) {
//         console.log("es par " + numero2)
//     }
//     else {
//         console.log("es impar " + numero2)
//     }
//     numero2 = prompt("captura un numero:")
// }

// let numero = parseInt(prompt("captura un numero:"))
// while (numero > 0) {
//     numero % 2 ? console.log("es impar " + numero) : console.log("es par " + numero)
//     numero = prompt("captura un numero:")
// }

// ----------------------------------------------------------------

// FizzBuzz
// En este ejercicio deberás escribir un programa que imprima en la consola los números del 1 al 100, teniendo en cuenta estos criterios:

// Si el número es múltiplo de 3, deberá imprimir "Fizz" en vez del número.
// Si es múltiplo de 5, deberá imprimir "Buzz".
// Si es múltiplo de 3 y de 5 (a la misma vez), deberá imprimir "FizzBuzz".


// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("FizzBuzz")
//     } else if (i % 3 == 0) {
//         console.log("Fizz")
//     } else if (!(i % 5)) {
//         console.log("Buzz")
//     } else {
//         console.log(i)
//     }
// }

// for (let i = 1; i <= 100; i++) {
//     !(i % 5) && !(i % 3) && console.log("FizzBuzz")
//     !(i % 5) && console.log("Fizz")
//     !(i % 3) && console.log("Buzz")
//     console.log(i)
// }

// ----------------------------------------------------------------
// Burro-Mático
// En este ejercicio deberás crear un programa que ayude al Burro a preguntar al usuario "¿Ya merito llegamos?

// Si el usuario responde “Si”, el programa deberá darle un mensaje de bienvenida a Muy Muy Lejano. Sino, deberá mostrarle, nuevamente, el mensaje del Burro.

// Importante: El programa deberá identificar como verdadero tanto “Si”, como “SI”, como “si”.

// let condicion = prompt("¿Ya merito llegamos?").toLowerCase()
// while (condicion != "si") {
//     console.log("no")
//     condicion = prompt("¿Ya merito llegamos?").toLowerCase()
// }
// console.log("bienvenida a Muy Muy Lejano")



// let condicion
// do {
//     condicion = prompt("¿Ya merito llegamos?").toLowerCase() == "si"
//     condicion ? console.log("bienvenida a Muy Muy Lejano") : console.log("no")
// } while (!condicion);




// ----------------------------------------------------------------
// Piedra, Papel O Tijera.
// En este ejercicio deberás escribir un código que:

// Le pida al usuario que ingrese uno de estos valores: "Piedra", "Papel" o "Tijera".
// Elija un valor al azar usando Math.random ().
// Le diga al usuario quién ganó.
// show hint
// Si nunca jugaste al Piedra, Papel o Tijera, conocé sus reglas:

// La tijera corta al papel.
// El papel envuelve a la piedra.
// La piedra rompe la tijera.
// bonus
// Le pregunte al usuario si le gustaría volver a jugar.

// let usuario
// let ganar
// do {
//     let y = Math.floor(Math.random() * 3) + 1
//     ganar = false
//     usuario = prompt("Seleccione piedra, papel o tijera").toLowerCase()
//     if (y == 1) {
//         console.log("la compu selecciono piedra")
//     } else if (y == 2) {
//         console.log("la compu selecciono papel")
//     } else {
//         console.log("la compu selecciono tijera")
//     }
//     switch (usuario) {
//         case "piedra":
//             if (y == 1) {
//                 console.log("empate")
//             } else if (y == 2) {
//                 console.log("perdiste")
//             } else {
//                 console.log("ganaste")
//                 ganar = true
//             }
//             break;
//         case "papel":
//             if (y == 1) {
//                 console.log("ganaste")
//                 ganar = true
//             } else if (y == 2) {
//                 console.log("empate")
//             } else {
//                 console.log("perdiste")
//             }
//             break;
//         case "tijera":
//             if (y == 1) {
//                 console.log("perdiste")
//             } else if (y == 2) {
//                 console.log("ganaste")
//                 ganar = true
//             } else {
//                 console.log("empate")
//             }
//             break;
//         default:
//             console.log("escribi bien")
//             break;
//     }
// } while (!ganar);
// -----------------------
// let i
// let maquina

// do {
//     let usuario = prompt("ingrese: piedra, papel o tijera").toLowerCase()
//     maquina = Math.floor(Math.random() * 2)
//     console.log("Piedra=0, papel=1 y tijera=2")
//     console.log(`Maquina: ${maquina}`)

//     if (usuario == "piedra") {
//         if (maquina === 0) {
//             console.log(`Usuario: ${usuario}`)
//             console.log(`Maquina: piedra`)
//             console.log(`Empate`)
//         } else if (maquina === 1) {
//             console.log(`Usuario: ${usuario}`)
//             console.log(`Maquina: papel`)
//             console.log(`Perdiste`)
//         } else if (maquina === 2) {
//             console.log(`Usuario: ${usuario}`)
//             console.log(`Maquina: tijera`)
//             console.log(`Ganaste`)
//         }
//     } else if (usuario == "papel") {
//         if (maquina === 0) {
//             console.log(`Usuario: ${usuario}`)
//             console.log(`Maquina: piedra`)
//             console.log(`Ganaste`)
//         } else if (maquina === 1) {
//             console.log(`Usuario: ${usuario}`)
//             console.log(`Maquina: papel`)
//             console.log(`Empate`)
//         } else if (maquina === 2) {
//             console.log(`Usuario: ${usuario}`)
//             console.log(`Maquina: tijera`)
//             console.log(`Perdiste`)
//         }
//     } else if (usuario == "tijera") {
//         if (maquina === 0) {
//             console.log(`Usuario: ${usuario}`)
//             console.log(`Maquina: piedra`)
//             console.log(`Perdiste`)
//         } else if (maquina === 1) {
//             console.log(`Usuario: ${usuario}`)
//             console.log(`Maquina: papel`)
//             console.log(`Ganaste`)
//         } else if (maquina === 2) {
//             console.log(`Usuario: ${usuario}`)
//             console.log(`Maquina: tijera`)
//             console.log(`Empate`)
//         }
//     } else {
//         alert("ingresa una opción correcta")
//     }
//     i = prompt("quieres volver a jugar?").toLowerCase()
// } while (i == "si");

// ----------


// ----------------------------------------------------------------
// Adiviná Un Número
// En este ejercicio deberás crear un programa para que el usuario adivine un número generado al azar.
// Para eso, seguí estas indicaciones:

// Usá el método prompt para pedirle al usuario que ingrese un número (n), que esté entre el 1 y el 10.
// Usá parseInt(n) para convertir el String en un Number.
// Generá un número random entre 1 y el Valor ingresado por el usuario (n).
// Pedile al usuario que descubra cuál es el número generado al azar.
// Decile si acertó, si es mayor o si es menor.
// Repetí el proceso hasta que adivine el número.
// Cuando lo descubra, felicitalo y usá un contador que le indique cuántas oportunidades usó para adivinar el número correcto.
//Importante: si el input del usuario es NaN, el programa deberá pedirle que ingrese un número.

// let contador = 1
// let usuario = parseInt(prompt("Ingrese un numero entre el 1 y el 10"))
// let acerto = "no"
// let maquina = Math.ceil(Math.random() * usuario)
// while (acerto != "si") {
//     // while (usuario <= 0 || usuario > 10 || isNaN(usuario)) {
//     //     usuario = parseInt(prompt("Ingrese un nuevo numero"))
//     // }
//     usuario = parseInt(prompt("Ingrese un nuevo numero"))
//     if (usuario > maquina) {
//         contador++
//         alert("el numero que elegiste es mayor")
//     } else if (usuario < maquina) {
//         contador++
//         alert("el numero que elegiste es menor")
//     } else {
//         alert("adivinaste en " + contador)
//         acerto = "si"
//     }
//     // usuario = 0
// }
// // -----------------
// let n = 0
// let uN = 0
// let cont = 0
// do {
//     n = parseInt(prompt("Ingresa un número del 1 al 10:"));
//     if (isNaN(n) || n < 1 || n > 10) {
//         alert("[Error]Ingresa un número valido");
//     }
// } while (isNaN(n) || n < 1 || n > 10);
// let nR = Math.floor(Math.random() * n) + 1;
// do {
//     cont += 1
//     uN = parseInt(prompt(`Adivina el número del 1 al ${n}:`));
//     if (isNaN(uN) || uN < 1 || uN > n) {
//         alert("[Error]Ingresa un número valido");
//     }
//     if (uN > nR) {
//         alert(`El número que ingresaste ${uN} es mayor, sigue intentando`);
//     } else if (uN < nR) {
//         alert(`El número que ingresaste ${uN} es menor, sigue intentando`);
//     }
// } while (uN != nR);
// console.log(`Has acertado en ${cont} intentos, el número era ${nR}`);
// -------------------
// do {
//     if (usuario < 1 && usuario > 10) {
//         while (acierto != "si")
//     .....
//     }
//     else
//         usuario == parseInt(Prompt("numero incorrecto, intenta de nuevo"))
// } while ()

// ----------------------------------------------------------------
// Producto Acumulado
// Escribí un while Loop que, dado un número elegido por vos previamente, calcule el producto de todos los enteros positivos entre 1 y ese número.
let usuario = Number(prompt("ingresa un numero"))
let resultado = usuario
while (usuario > 2) {
    resultado *= usuario - 1
    usuario--
}
console.log(resultado)


// Al terminar el While, imprimí el resultado por consola.
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------





