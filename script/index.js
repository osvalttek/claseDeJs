// repaso

// datos primitivos
// string, number, booolean, undefined, null, symbol

// datos complejos

// Object, array, function
// objeto
const objeto = {
    propiedad: "valor"
}

// arrays
const arreglo = [12, "string", {}, objeto, []]

// funciones
function sumar(params) {
}
// arow function
const restar = () => { }
// ----------------------------------------------------------------------
// valores por referencia

// let nombre={
//     nombre:"Maria",
//     apellido:"Covarrubias"
// }
let nombre = "Mar"
let apellido = "Covarrubias"

// es cuando una variable hace referencia a otra variable
// let usuario= nombre
let usuario = {
    nombre: nombre,
    apellido: apellido
}
usuario

// ------------------------------------------------
// built-in-Methods
console.log("")
// window.alert("chau")
// alert("hola")
// const dato= prompt("cual es tu nombre")
// console.log(dato)
// ---------------------------------------------------
// Condicionales

// if(condicion de verdad = a true){

//     si la condicion de verdad en verdadera se ejecuta el codigo que esta entre llaves

// }

// este codigo se ejecuta
if (true) {
    console.log("la condicion es verdadera")
}


// este codigo no
if (false) {
    console.log("la condicion es falsa")
}

// operadores logicos y de desigualdad
if (!true) {
    console.log("la condicion es falsa")
}

if (!false) {
    console.log("la condicion es verdadera")
}

//1 != "1" //desigualdad blanda
//1 !== "1" //desigualdad estricta

// operador or ||
if (true || false) {
    console.log("la condicion es verdadera")
}

// true||true = true
// true|| false=true
// false||true=true
// false||false= false

// operador && 
if (true && true) {
    console.log("la condicion es verdadera")
}

// true && true = true
// true && false = false
// false && true = false
// false && false = false


// operadores de comparacion

//1 == "1" //igualdad blanda
//1 === "1" //igualdad estricta

// ...<... menor que
// ...>... mayor que 
// ...<=... menor o igual que 
// ...>=... mayor o igual que 


const edad = prompt("que edad tenes?")

if (edad >= 18 && edad < 40) {
    console.log("podes ingresar al antro")
    if (edad<22) {
        console.log("mostra el ine")
    }
} else if (edad >= 40) {
    console.log("tenes que ir a treinta y mas ")
} else {
    console.log("rumbele")
}



































































