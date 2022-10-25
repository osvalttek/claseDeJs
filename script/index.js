// let saludar="hola"
// try {
//     console.log(algo)
// } catch (e) {
//     if (e instanceof ReferenceError) {
//         console.log(e.message)
//     } else {
//         console.log(e.name)
//         console.log(e.message)
//     }
// }


// function saludar(saludo) {
//     try {
//         if (saludo === undefined) throw "no se que es saludo"
//         if (typeof (saludo) === "number") throw new Error("esto es un numeroooo")
//         console.log("soy", saludo)
//     } catch (e) {
//         console.log(e)
//         console.log(e.message)
//     }
// }
// let newArr= new Array()
// let arr=[]
// saludar()
// ---------------------------------------------------------------------------
const form = document.querySelector("form")
const nombre = document.querySelector("#nombre")
const edad = document.querySelector("#edad")
const p = document.querySelector("p")


form.onsubmit = (e) => {
    e.preventDefault()
    try {
        if (!nombre.value || !edad.value) throw "El campo no puede estar vacio"
        if (edad.value < 18) throw "Sos menor de edad"
        p.textContent = `Vienvenido!!! podes pasar ${nombre.value}, porque tenes ${edad.value}`
    } catch (e) {
        p.textContent = e
    } finally {
        nombre.value = ""
        edad.value = ""
        setTimeout(() => {
            p.textContent = ""
        }, 2000);
    }
}

function hola() {
    // console.log("hola")
     return "hola"
}
function chau() {
    console.log("chau")
}

setTimeout(() => {
    hola()
}, 0);

chau()

let arr = ["a", "b", "c"]

function up(params) {
    return params.map((e) => e.toUpperCase())
}

function saludar() {
    setTimeout(() => {
        hola()
    }, 2000);
}


