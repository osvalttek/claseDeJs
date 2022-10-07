// -----------------------------

// array, arreglo o matriz unidimensional

const arreglo = []
const alumno1 = "Osvaldito"
const alumno2 = "Jorge"
const alumno3 = "Jesus"
const alumno4 = "Juan"
const alumnos = ["Cesar", "Ana", "Kevin", "Erick"]

// dentro de los arrays puedo guardar cualquier tipo de dato de js

const students = [alumno1, 1, alumnos, ["a", 4], {}, function saludar() { console.log("hola") }]

// con la sintaxis de corchetes puedo acceder a los indices del array
const nAr = new Array(2, 233, 646)// se puede declarar asi, pero nosotros vamos a usar [] 
students[2]

const vocales = ["a", "e", "i", "o", "u"]

const strVocales = "aeiou"

// console.log("vocales largo", vocales.length)
// console.log("vocales", vocales[1])
// console.log("strVocales ", strVocales[1])
// console.log("strVocales largo ", strVocales.length)

function recorrerArray(arr) {
    //puedo recorrerlo con un for
    // let largo = arr.length
    // for (let i = 0; i < largo; i++) {
    //     const element = arr[i];
    //     console.log(element)
    //     console.log("i",i)
    // }
    // puedo recorrerlo con un forEach
    // arr.forEach((element, indice, array) => {
    //     console.log("element", element)
    //     console.log("indice", indice)
    //     console.log("array", array)
    // });

    //puedo recorrerlo con un for of
    for (const iterator of arr) {
        console.log("iterator", iterator)
    }

    //puedo recorrerlo con un for in
    // for (const key in arr) {
    //     console.log("key", key)
    //     console.log("arr", arr)
    //     console.log("arrKey", arr[key])
    // }
}
// push agrega un elemento al final del array
// vocales.push("A")

function emuladorPush(arr, elemento) {
    arr[arr.length] = elemento
    return arr
}

// pop elimina el ultimo elemento de mi array
// vocales.pop("o")

function emuladorPop(arr) {
    return arr.slice(0, arr.length - 1)
}


//shift elimina un lemento de la primer posicion de un array
// vocales.shift()
// vocales.shift()

//unshift agrega un elemento al principio del array
// vocales.unshift("hola")


// ---------------------

vocales[0] = 1
// vocales[-1] = 10//noooooooooooooooooo




//tarea hacer un pop, unshift, shift




































