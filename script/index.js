import { hola, chau}  from "./saludar.js"

hola("osvaldo")
// chau("osvaldito")


const form = document.querySelector("form")
const nombre = document.querySelector("#nombre")
const p = document.querySelector("p")
const img = document.querySelector("img")

// then
// function consumoApi(name) {
//     return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
//         .then(dataJson => dataJson.json())
// }
// form.onsubmit = (e) => {
//     e.preventDefault()
//     let name = nombre.value
//     consumoApi(name)
//         .then(pok => {
//             p.textContent = pok.name
//             img.setAttribute("src", pok.sprites.front_default)
//             img.setAttribute("alt", pok.name)
//         })
//         .catch(e => p.textContent = e.message)
//         .finally(() => nombre.value = "")
// }

// async
async function consumoApi(name) {
    let pokFetch = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    let pokJson = await pokFetch.json()
    return pokJson
}

form.onsubmit = async (e) => {
    e.preventDefault()
    try {
        let name = nombre.value
        let pok = await consumoApi(name)
        console.log(pok.response)
        p.textContent = pok.name
        img.setAttribute("src", pok.sprites.front_default)
        img.setAttribute("alt", pok.name)
    } catch (e) {
        p.textContent = e
    } finally {
        nombre.value = ""
    }
}

// crear archivo selectores que contenga todos los selectores
// crear archivo api que contenga el pedido a la api
// crear archivo submit que realice el evento y el render dela peticion