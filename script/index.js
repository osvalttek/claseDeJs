let arr = ["b", "c", "a"].sort()
let menorAMayor = [1, 2, 10, 4, 3].sort((a, b) => a - b)
let mayorAMenor = [1, 2, 10, 4, 3].sort((a, b) => b - a)

// -----------------------------------------------------------------------

const obj = {}///esto es un objeto

//estos se llaman objetos literales
const alumno1 = {
    nombre: "El Brian",
    apellido: "Martinez",
    edad: 20,
    matricula: true,
    cursos: ["mate", "programación"]
}
const alumno2 = {
    nombre: "El Kevin",
    apellido: "Garcia",
    edad: 22,
    matricula: true,
    cursos: ["mate", "programación", ["idioma"], { turno: "matutino" }],
    notas: [1, 2, 3, 4],
    promedio: function () {

    }
}

//dot notation
let nombre1 = alumno1.nombre
let curso1 = alumno1.cursos[1]

//bracket notation
let cursos = "notas"
let nombre2 = alumno2['nombre']
let curso2 = alumno2[cursos][1]

//modificar un el valor de una propiedad
alumno2.nombre = "Kevin"
alumno2.promedio = "hola"
// console.table(alumno1)
// console.table(arr)

let kevin = alumno2//de esta forma copio el obj pero sigo haciendo referencia al mismo espacio en memoriaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

// kevin["estudia"]=true
kevin.estudia = false

// ----------------------------------------------------------

const persona = {
    nombre: "El Brandon",
    apellido: "Perez",
    nombreCompleto: function () {
        return `${this.nombre}  ${this.apellido}`
    },
    quienEsThis: () => this,
    this: this,
    // this2: function () {
    //     return function () {
    //         return this
    //     }
    // }

}




