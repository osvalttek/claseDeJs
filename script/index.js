const osvaldo = {
    nombre: "Osvaldo",
    apellido: "Ojeda"
}
const juan = {
    nombre: "Juan",
    apellido: "Garcia"
}

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
}

function Person(nombre, apellido) {
    this.nombre = nombre,
        this.apellido = apellido,
        this.vivo = true,
        this.saludar = () => {
            return `Hola soy ${this.nombre}`
        }
    this.morir = function () {
        this.vivo = false
        return ` ${this.nombre} esta en el cielo`
    }
}


const homero = new Persona("Homero", "Simpsons")
const bart = new Persona("Bart", "Simpsons")
const lisa = new Person("Lisa", "Simpsons")
