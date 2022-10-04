saludar()
function saludar() {
    console.log("hola equipo")
}
console.log(x)
var x = "x"
// n = "n"
// console.log(n)
let n
y = "y"
console.log(y)
var y
// ---------------------------
const nombre = "0svaldo"
function nom(nombre) {
    console.log(arguments)
    return nombre
}

// --------------
let apellido
function lastName(apellido) {
    return apellido
}
apellido = lastName("Cortez")

// -----------
// function anonima
const edad = function (edad) {
    return edad
}
// -------
// arrow function o funcion flecha

const estadoCivil = (estado) => estado// puede recivir o no parametros y si es en una sola linea puedo omitir las llaves{ bloque de codigo } y tiene un return implicito

const genero = (gender) => {
    // console.log(arguments)// da error
    return gender
}

// instituto("fleming")// no tiene hoisting
const instituto = inst => inst

// ------------------------

// funcion dentro de otra funcion
function sumar(n1, n2) {
    return n1 + n2
}
function matematica(n1, n2) {
    return sumar(n1, n2)
}

// funcion callback

function restar(n1, n2) {
    return n1 - n2
}

function math(fn,n1,n2) {
    return fn(n1,n2)
}

// ----------------------------

function areaCircle(r) {
    return Math.PI*r**2
}

function vol(r,h,fn) {
    return fn(r)*h
}

// function vol2(r,h) {
//     return Math.PI*r**2*h
// }








































