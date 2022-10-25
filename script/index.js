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
const input = document.querySelector("input")
const p = document.querySelector("p")

// form.addEventListener("submit",)
form.onsubmit = (e) => {
    e.preventDefault()
    try {
        if (!input.value) throw "El campo no puede estar vacio"
        if (typeof (input.value) === "number") throw "Np podes ingresar numeros"
        p.textContent = input.value
    } catch (e) {
        p.textContent = e
    } finally {
        input.value = ""
    }

}


