// clual es la estructura de las funciones?
// 1

function saludar() {
    console.log("Hola, como estas?")
}
// saludar()
// console.log("Hola, como estas otra vez?")

// parametros de las funciones
function sumar(num1, num2) {
    console.log(num1 + num2)
}
function parametros(num1, num2) {
    console.log("parametro 1=", num1)
    console.log("parametro 2=", num2)
}

// parametros(4)
// parametros(null, 4)
// parametros(undefined, 4)

// no se pueden inicializar variables dentro de los parametros de una funcion
// function variablesParametros(let nombre="Osvaldo"){
// console.log(nombre)
// }
// variablesParametros()
// ----

// let nombre = "osvaldo"
function variablesParametros(nombre) {
    console.log("hola, me llamo ", nombre)
}
// variablesParametros()
// variablesParametros(nombre)

// parametro por default
function parametroDefault(nombre = "Pepe", apellido) {
    console.log(`hola, me llamo ${nombre}  ${apellido}`)
}
// parametroDefault()
// parametroDefault("Cesar", "Castro")

// argumentos de una funcion
function argumentos() {
    console.log(" estos son los argumentos de la funcion: ", arguments)
}

// argumentos("hola", 1,3 ,4,5)


// ---------
// evitar utilizar las variables de esta forma
let apellido = "Sánchez"
// let apellido
function datos() {
    // console.log(apellido)
}
// datos()
// apellido="Conde"
// datos()
// apellido="Cortez"
// datos()
// datos()


let calculo
function calcular(num1, num2) {
    // console.log(num1+ num2)
    calculo = num1 + num2
}
calcular(4, 5)
console.log(calculo)

function calcular2(num1, num2) {
    // opcion 1
    // if (num1 === undefined || num2 === undefined) {
    //     // console.log("asigna numeros a los parametros")
    //     return "asigna numeros a los parametros"
    // }
    // return num1 + num2
    // return num1 + num2//esto no se va a ver
    // console.log(num1 + num2)//esto no se va a ver

    // opcion 2
    // if (num1 === undefined || num2 === undefined) return "asigna numeros a los parametros"
    // return num1 + num2

    // opcion 3
    return num1 === undefined || num2 === undefined ? "asigna numeros a los parametros" : num1 + num2
}

calculo = calcular2(9)



// scope o alcance de las variable

// alcance()
function alcance() {
    // nombre = "Juan Conde"///asi noooooooo
    let nombre = "Juan Conde"
    console.log(nombre)
}
// alcance()

// console.log(nombre)
apellidoAlumnos()
let apellido2 = "Covarrubias"
function apellidoAlumnos() {
    // console.log("1", apellido2)
    let apellido2 = "Garza"
    console.log("2", apellido2)
}
console.log("3", apellido2)

// ---------------------------------------------------

function bday(nombre) {
    let bdayLyrics = "que los cumpla feliz, "
    !nombre ? console.log("ingresa un nombre") : console.log(`${bdayLyrics.repeat(2)}que los cumpla ${nombre}, ${bdayLyrics}`)
}


// contruir una funcion que cante la cancion de los elefantes, que pida como parametro las n veces que se tiene que repetir







