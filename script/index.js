
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
//     return fetch("https://pokeapi.co/api/v2/pokemon/dit")
//         .then(dataJson => dataJson.json())
//         .then(data => console.log(data.name))
//         .catch(err=>console.log(err))
// }



async function consumoApi() {
    try {
        let fetchData = await fetch("https://pokeapi.co/api/v2/pokemon/dit")
        let dataJson = await fetchData.json()
        console.log(dataJson)
    } catch (err) {
        console.log(err)
    }

}






