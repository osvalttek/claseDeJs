// function nombre(nombre) {
//     console.log(nombre)
//     return nombre
// }
// // let miNombre = nombre("Carlos")
// const apellido = () => console.log("apellido")

// const edad = (edad) => {
//     console.log(edad)
//     return edad
// }
// // function doble(params) {
// //     return params * 2
// // }
// // let mapeo = [1, 2, 3, 4].map(doble)

// // let dobles = [1, 2, 3, 4].map(function doble(params) {
// //     return params * 2
// // })

// // let dobles = [1, 2, 3, 4].map((params)=>{
// //     return params * 2
// // })

// // let dobles = [1, 2, 3, 4].map(params=>{
// //     return params * 2
// // })
// let dobles = [1, 2, 3, 4].map(params => params * 2)

// // ------------------------------------------------------------------------

// let documento = {
//     doctype: "",
//     html: {
//         head: {},
//         body: {}
//     }
// }
// // ------------------

const h1=document.querySelector("#n1")
const hs1=document.querySelectorAll("h1")
console.dir(h1)
console.dir(hs1[2])


h1.style.backgroundColor="tomato"
hs1[1].className="red"
hs1[1].innerText="clases 1 n°2"
hs1[2].innerText="clases 1 n°3"
// hs1[2].classList.add("blue")
hs1[2].classList.remove("n3")
hs1[2].classList.toggle("n3")
// hs1[2].classList.toggle("blue")
// hs1[2].classList.toggle("blue")
// hs1[2].classList.toggle("dark")
hs1[2].classList.toggle("dark")
hs1[2].classList.toggle("light")
console.log(hs1[2].classList.item(0))
console.log(hs1[2].classList.contains("n3"))
// hs1[2].classList.replace("dark","light")
hs1[2].classList.replace("light","dark")





