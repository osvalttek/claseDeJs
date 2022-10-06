let saludar = "hola como estas?"
let copia = saludar.slice(5, 9)
let copia2 = saludar.slice(-6, -1)

function slice(str, start = 0, end = str.length) {
    let copia = ""
    if (start < 0) start += str.length
    if (end < 0) end += str.length
    for (let i = start; i < end; i++) {
        copia += str[i]
    }
    return copia
}
// --------------------------------------------

let sub = saludar.substring()
sub = saludar.substring(5, 6)
sub = saludar.substring(-5, 6)
sub = saludar.substring(-6, -1)

function substring(str, start = 0, end = str.length) {
    let copia = ""
    if (start < 0) start = 0
    if (end > str.length) end = str.length
    if (end < 0) return copia
    for (let i = start; i < end; i++) {
        copia += str[i]
    }
    return copia
}

// ---------------------------------------------

let subs = saludar.substr()


function substr(str, start = 0, end = str.length) {
    if (end != 0) end += start
    return substring(str, start, end)
}
// -----------------------------------
// hacer replace, length,

function length(str) {
    // opcion 1
    // let contador = 0
    // for (const i of str) {
    //     contador++
    // }
    // return contador

    // opcion 2
    let j = true
    let acum = 0
    while (j) {
        str[acum] != undefined ? acum++ : j = false
    }
    return acum;
}

// replace
function replace(str, oldValue, newValue) {
    let result = ""
    for (let i = 0; i < str.length; i++) {
        let existeRemplazo = false
        //Se valida que toda la palabra se repita caracter a caracter
        for (let j = 0; j < oldValue.length; j++) {
            if (oldValue[j] === str[i + j]) {
                existeRemplazo = true
            } else {
                existeRemplazo = false
                break;
            }
        }
        //Se agrega el nuevo texto al string // y se actualiza el valor del index de la variable original agregandole la cantidad de caracteres de la palabra remplazada
        if (existeRemplazo) result += newValue
        existeRemplazo ? i += (oldValue.length - 1) : result += str[i] //Si no existe, solo se copia la variable
    }
    return result
}



function myReplace(string, oldV, newV) {
    return string.split(oldV).join(newV);
}


function replace2(origin, toreplace, replacement) {
    if (origin.match(toreplace)) {
        let myArray = origin.split(" ")
        let index = myArray.indexOf(toreplace)
        myArray[index] = replacement
        console.log(myArray.join(" "))
    } else {
    }
}
function rpls2(origin, toreplace, replacement) {
    let myArrayO = origin.split("")
    let myArrayTR = toreplace.split("")
    for (let i = 0; i <= myArrayO.length; i++) {
        for (let j = 0; j < myArrayTR.length; j++) {
            if (myArrayO[i] == myArrayTR[j]) {
                myArrayO[i] = replacement
                console.log(myArrayO.join(""))
            }
        }
    }

}
// -----------------------------------------------------------------------------------------------

// split
const greeting = "hola, como estas?"
let greeting1 = greeting.split()
let greeting2 = greeting.split("")
let greeting3 = greeting.split(" ")
let greeting4 = greeting.split(",")

// indexOf
// trae el indice del caracter que estoy buscando
let i = greeting.indexOf("l")

function esta(params) {
    // return greeting.indexOf(params) >= 0 ? true : false
    return greeting.indexOf(params,6)
}

// -----------------------------

// array, arreglo o matriz unidimensional

const arreglo=[]
const alumno1="Osvaldito"
const alumno2="Jorge"
const alumno3="Jesus"
const alumno4="Juan"
const alumnos=["Cesar","Ana","Kevin","Erick"]

// dentro de los arrays puedo guardar cualquier tipo de dato de js

const students=[alumno1, 1, alumnos, ["a",4],{}, function saludar() {console.log("hola")}]

// con la sintaxis de corchetes puedo acceder a los indices del array

students[2]

























