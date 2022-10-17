const osvaldo = {
    nombre: "Osvaldo",
    apellido: "Ojeda"
}
const juan = {
    nombre: "Juan",
    apellido: "Garcia"
}
juan.saltar = () => "estoy saltando"// agregar un metodo a un obj literal

class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre,
            this.apellido = apellido,
            this.vivo = true
    }
    saludar = () => {
        return `Hola soy ${this.nombre}`
    }
    morir() {
        this.vivo = false
        return ` ${this.nombre} esta en el cielo`
    }
    static tomar() {
        return "esta persona va a tomar duff"
    }
}

function Person(nombre, apellido) {
    this.nombre = nombre,
        this.apellido = apellido,
        this.vivo = true
    // this.saludar = () => {
    //     return `Hola soy ${this.nombre}`
    // },
    // this.morir = function () {
    //     this.vivo = false
    //     return ` ${this.nombre} esta en el cielo`
    // }
}
Persona.caminar = () => {
    return "esta persoa va a caminar"
}
Persona.prototype.saltar = () => "estoy saltando"
Person.prototype.saltar = () => "estoy saltando"
// Person.prototype.saludar = () => {
//     return `Hola soy ${this.nombre}`
// }// aca el this se pierde por el arrow function
Person.prototype.saludar = function () {
    return `Hola soy ${this.nombre}`
}
Person.prototype.morir = function () {
    this.vivo = false
    return ` ${this.nombre} esta en el cielo`
}

Person.tomar = () => {
    return "esta persona va a tomar duff"
}// esta sintaxis sirve para agregar metodos de clases a clases y a funciones contructoras

Person.prototype.altura = 1.60//esto no se suele hacer con las propiedades si con los metodos


const homero = new Persona("Homero", "Simpsons")
const bart = new Persona("Bart", "Simpsons")
const lisa = new Person("Lisa", "Simpsons")
const maggie = new Person("Maggie", "Simpsons")
const rafa = new Person("rafa", "Simpsons")
const marge = new Person("marge", "Simpsons")
const nelson = new Person("nelson", "Simpsons")
const ned = new Person("ned", "Simpsons")
const moe = new Person("moe", "Simpsons")
const barnie = new Person("barnie", "Simpsons")
const carl = new Person("carl", "Simpsons")
// ----------------------------------------------------------------
// Herencia

class Humano {
    constructor(nombre, edad, genero) {
        this.nombre = nombre,
            this.edad = edad,
            this.genero = genero
    }
}
class Alumnos extends Humano {
    constructor(nombre, edad, genero, grado) {
        super(nombre, edad, genero),
            this.grado = grado
    }
}
class Profesor extends Humano {
    constructor(nombre, edad, genero, materia, grado) {
        super(nombre, edad, genero)
        this.materia = materia,
            this.grado = grado
    }
}


let milhouse= new Alumnos("Milhouse", 10, "masculino", 4)
let crabapple= new Profesor("Crabapple",40, "femenino", "matematicas",4 )












