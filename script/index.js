// declarar variables
// hay 3 formas de declarar variables
var nombre
let apellido
const edad=0

// asignación a variables 
nombre= "Chayanne"
apellido= "Arce"

// inicializar variables 
var mascota= "Solovino"

// las variables declaradas con var se pueden redeclarar y sobreescribir
var carro 
carro ="ford"
console.log(carro)
var carro=""
console.log(carro)
var carro=12
console.log(carro)

//las variables declaradas con let las puedo reasignar pero no las puedo redeclarar 
let comida="tacos"
console.log(comida)
comida="chicharron de la ramos"
console.log(comida)
// let comida="pollo"// esto esta mal
// let carro = "kia" //esto tambien esta mal porque ya declare carro con var 
console.log(carro)

function cat() {
    //esta muy mal declarar variables sin var, let o const
    gato="persa"
    console.log(gato)
}
// si ejecuto la funcion se libera el gato
cat()
gato="angora"
console.log(gato)

//las variables declaradas con const no se mueden redeclarar ni modificar su valor
const pi=3.14
console.log(pi)
pi=3.1416
console.log(pi)

//tipos  de datos =primitivos
let string="lo que quiera entre comillas"
let numeros=12
let bigInt= 2n ** 53n //son numeros muy grandes
let boolean=true// valores de verdad, pueden ser true o false
let indeninido=undefined //una variable declarada y sin asignacion de valor es undefined
let nul= null 
let simbolos ///tarea investigar sobre simbolos

// complejos


















