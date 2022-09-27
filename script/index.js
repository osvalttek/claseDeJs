// var me permite redeclarar variables con el mismo nombre y tambien puedo sobreescribirla y mutal el tipo de dato

var nombre // esto es declarar una variable, solamente darle nombre pero sin ningun valor
nombre = "Pedlito"// esto es asignar a una variable un valor
var nombre = "Pedlo"// esto es inicializar una variable la declaro, le doy un nombre y le doy un valor
nombre = 12//puedo cambiar el tipo de dato
var nombre = []
nombre

//let
let apellido// puedo declararla
apellido = "Torres"// puedo asignarle un valor
apellido = "Garcia"// puedo reasignarle un valor
apellido = []//12//puedo cambiar el tipo de dato
// let apellido="Rodriguez"//no puedo redeclarar una variable con el mismo nombre si fue declarada con let

// const
// const edad //no me permite declararla, sin un valor hay que inicializarla
const edad = 35 // solamente puedo inicializarla, la declaro y le doy un valor
// edad=53// no puedo reasignarle un valor y tampoco cabiar el tipo de dato
// const edad= 12// no puedo redeclarar una variable con el mismo nombre si fue declarada con const

// ------------------------------------------------------------------------


// construir un programa que me diga si me puedo jubilar
// utilizar propt para preguntarle al usuario , su nombre, edad y genero si es mujer a los 60 y si es hombre a los 65
// y con un alert avisar si ya esta en edad de jubilarse y si no cuantos años de aporte le faltan

// const edadUsuario = prompt("cual es tu edad?")

// console.log(typeof (edadUsuario))//una forma
// console.log(typeof edadUsuario)//segunda forma
// console.log(edadUsuario === "12")

// console.log("con parseInt", parseInt(edadUsuario))
// console.log(typeof (parseInt(edadUsuario)))
// console.log("sin parseInt", edadUsuario)

// let usuarioNombre = prompt("como te llamas?")
// // let usuarioEdad = parseInt(prompt("que edad tenes?"))
// let usuarioEdad = Number(prompt("que edad tenes?"))
// let usuarioGenero = prompt("Hombre o mujer?").trim().toLowerCase()
// let hombre = "hombre"
// let mujer = "mujer"

// if (usuarioGenero === hombre) {
//     if (usuarioEdad >= 65) {
//         console.log("Puedes jubilarte " + usuarioNombre + ". Felicitaciones")//opcion 1 para concatenar
//         console.log("Puedes jubilarte ", usuarioNombre, ". Felicitaciones")//opcion 2 para concatenar
//         console.log(`Puedes jubilarte ${usuarioNombre}. Felicitaciones`)//opcion 3 para concatenar
//     } else {
//         console.log(`Te faltan ${65 - usuarioEdad} años para jubilarte`)
//         // console.log("Te faltan "+ String(65-parseInt(usuarioEdad)))
//     }
// } else if (usuarioGenero === mujer) {

//     if (usuarioEdad >= 60) {
//         console.log(`Puedes jubilarte ${usuarioNombre}. Felicitaciones`)//opcion 3 para concatenar
//     } else {
//         console.log(`Te faltan ${60 - usuarioEdad} años para jubilarte`)

//     }
// }

// -----------------------------------------------------------------------------------------------------



// let usuarioNombre = prompt("como te llamas?")
// let usuarioEdad = Number(prompt("que edad tenes?"))
// let usuarioGenero = prompt("Hombre o mujer?").trim().toLowerCase()
// let hombre = "hombre"
// let mujer = "mujer"


// if (usuarioEdad >= 60 && usuarioGenero == mujer) {
//     alert(`Te puedes jubilar ${usuarioNombre}`)
// } else if (usuarioEdad >= 65 && usuarioGenero == hombre) {
//     alert(`Te puedes jubilar ${usuarioNombre}`)
// } else {
//     if (usuarioGenero == mujer) {
//         var falta = 60 - usuarioEdad
//     } else if (usuarioGenero == hombre) {
//         var falta = 65 - usuarioEdad
//     }
//     alert(`No te puedes jubilar ${usuarioNombre}, te faltan ${falta} años.`)
// }

// ------------------------------------------------------------------------

let usuarioNombre = prompt("como te llamas?")
let usuarioEdad = Number(prompt("que edad tenes?"))
let usuarioGenero = prompt("Hombre o mujer?").trim().toLowerCase()
let hombre = "hombre"
let mujer = "mujer"


if ((usuarioEdad >= 60 && usuarioGenero == mujer) || (usuarioEdad >= 65 && usuarioGenero == hombre)) {
    alert(`Te puedes jubilar ${usuarioNombre}`)
} else {
    // primera opcion
    // if (usuarioGenero == mujer) {
    //     var falta = 60 - usuarioEdad
    // } else if (usuarioGenero == hombre) {
    //     var falta = 65 - usuarioEdad
    // }
    // segunda opcion
    // let falta
    // if (usuarioGenero == mujer) {
    //     falta = 60 - usuarioEdad
    // } else {
    //     falta = 65 - usuarioEdad
    // }
    // tercera opcion
    // operador ternario
    // consicion de verdar? si es true retorna la primer opcion : si es false la condicion retorna esta opcion    
    let falta = usuarioGenero == mujer ? 60 - usuarioEdad : 65 - usuarioEdad
    alert(`No te puedes jubilar ${usuarioNombre}, te faltan ${falta} años.`)
}










