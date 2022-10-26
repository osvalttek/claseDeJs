
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

form.onsubmit = (e) => {
    e.preventDefault()
    try {
        let name = nombre.value
        let pok = consumoApi(name)
        .then((e)=> console.log("hola",e))
        // if (!nombre.value) throw "El campo no puede estar vacio"
       
    } catch (e) {
        p.textContent = e
    } finally {
        nombre.value = ""

    }
}



function hola() {
    // console.log("hola")
    return "hola"
}
function chau() {
    // console.log("chau")
    return "chau"
}
// function saludar() {
//     setTimeout(() => {
//         p.textContent = hola()
//     }, 2000);
//     setTimeout(() => {
//         p.textContent = chau()
//     }, 1000);
// }

// ---------------------------------------------
// promesas

// sin finaly

// function saludar(name) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             name ? resolve(hola()) : reject("no recivi parametros")
//         }, 2000);
//     })
//         .then(res => p.textContent = res)
//         .then(() => {
//             setTimeout(() => {
//                 return p.textContent = chau()
//             }, 1000);
//         }).catch(e => p.textContent = e)
// }

// con finaly
function saludar(name) {
    // esto no lo vamos a hacer nosotros 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            name ? resolve(hola()) : reject("no recivi parametros")
        }, 2000);
    })
        // --------------------------
        .then(res => p.textContent = res)
        .then(() => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(chau())
                }, 1000);
            })
        })
        .then(kuka => p.textContent = kuka)
        .catch(e => p.textContent = e)
        .finally((param) => {
            console.log("param", param)
            setTimeout(() => {
                return p.textContent = ""
            }, 1000);
        })
}

// -----------------------------------------------------------------------

// function consumoApi() {
//     return fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//         .then(dataJson => dataJson.json())
//         .then(data => data.name)
//         .catch(err => console.log(err))
// }



// async function consumoApi() {
//     try {
//         let fetchData = await fetch("https://pokeapi.co/api/v2/pokemon/")
//         let dataJson = await fetchData.json()
//         console.log(dataJson)
//     } catch (err) {
//         console.log(err)
//     }
// }






