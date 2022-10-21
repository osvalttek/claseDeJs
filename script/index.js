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

// const h1=document.querySelector("#n1")
// const hs1=document.querySelectorAll("h1")
// const anchor=document.querySelector("a")
// const img=document.querySelector("img")

// console.dir(h1)
// console.dir(hs1[2])


// h1.style.backgroundColor="tomato"
// hs1[1].className="red"
// hs1[1].innerText="clases 1 n°2"
// hs1[2].innerText="clases 1 n°3"
// // hs1[2].classList.add("blue")
// hs1[2].classList.remove("n3")
// hs1[2].classList.toggle("n3")
// // hs1[2].classList.toggle("blue")
// // hs1[2].classList.toggle("blue")
// // hs1[2].classList.toggle("dark")
// hs1[2].classList.toggle("dark")
// hs1[2].classList.toggle("light")
// console.log(hs1[2].classList.item(0))
// console.log(hs1[2].classList.contains("n3"))
// // hs1[2].classList.replace("dark","light")
// hs1[2].classList.replace("light","dark")
// // -----------------------------------------------
// //agregar atributos a una etiqueta
// // algununos atributos los puedo agregar directamente si son especificos

// anchor.href="google.com"
// // hs1[1].href="google.com"//no me deja agregar href porque no es nativa del h1
// // hs1[1].setAttribute("href","google.com")// de esta forma lo agrega pero no tiene accion
// // anchor.class="google"// esto no 
// console.dir(anchor)

// img.src="https://www.elespectador.com/resizer/ti2d1pExzZSzsImY9C3o2NDpKwM=/920x613/filters:format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/IWAGH4BFVVEWDEC22MN3PC6ARM.jpg"

// img.width="150"
// // img.className="img"//esto no se hace
// img.setAttribute("alt","perro")
// // img.setAttribute("id","perro")
// img.id="perro"
// img.classList.add("img1")

// console.dir(img)


// console.log("attr",img.getAttribute("class"))

// ---------------------------------------------------

// const h1 = document.querySelector("h1")
// h1.textContent = "<h1>soy un contenido creado con textContent</h1>"
// h1.innerText = "<h1>soy un contenido creado con innerText</h1>"
// h1.innerHTML = "<h1>soy un contenido creado con innerHTML</h1>"//el innerHTML entiende eliquetas y texto


// console.dir(h1)

// -----------------------------
//primer metodo
const header = document.querySelector("header")
const h1logoName = document.createElement("h1")
const nav = document.createElement("nav")
const link1 = document.createElement("a")
const link2 = document.createElement("a")
const link3 = document.createElement("a")
const link4 = document.createElement("a")

h1logoName.innerText = "logo"
link1.innerText = "link1"
link2.innerText = "link2"
link3.innerText = "link3"
link4.innerText = "link4"

nav.appendChild(link1)
nav.appendChild(link2)
nav.appendChild(link3)
nav.appendChild(link4)
header.appendChild(h1logoName)
header.appendChild(nav)
header.style.backgroundColor = "dodgerblue"
//segundo metodo

const main = document.createElement("main")
const section = document.createElement("section")
const data = {
    titulo: "nuestra pagina",
    img: "https://www.elespectador.com/resizer/ti2d1pExzZSzsImY9C3o2NDpKwM=/920x613/filters:format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/IWAGH4BFVVEWDEC22MN3PC6ARM.jpg",
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quo ducimus non ad adipisci eum enim in nisi ipsum illo, doloremque ut culpa. Magnam dolorem, suscipit at asperiores incidunt cumque."
}

const dataCard = [
    {
        titulo: "img 1",
        img: "https://nationaltoday.com/wp-content/uploads/2022/07/14-Pitbull-Awareness-Month.jpg"
    },
    {
        titulo: "img 2",
        img: "https://i.pinimg.com/736x/54/3d/ff/543dff88b449b6bc0b6d573cb71babae.jpg"
    },
    {
        titulo: "img 3",
        img: "https://cdn.milenio.com/uploads/media/2022/10/13/hasbulla-instagram.jpg"
    },
    {
        titulo: "img 4",
        img: "https://cdn.soyunperro.com/wp-content/uploads/2019/03/pitbulls.jpg"
    },
]
//data para el main
main.innerHTML = `<h2>${data.titulo}</h2>
<img src=${data.img} width="150">
<p>${data.content}</p>
`
//data para el section
//METODO1
// for (const iterator of dataCard) {
//     section.innerHTML += `<h2>${iterator.titulo}</h2>
//     <img src=${iterator.img} width="150">
//     `
// }

function galeria(dataCard) {
    for (const iterator of dataCard) {
        let div = document.createElement("div")
        div.innerHTML = `<h2>${iterator.titulo}</h2>
           <img src=${iterator.img} width="150">  `
        section.appendChild(div)
    }
}

galeria(dataCard)


document.body.appendChild(main)
document.body.appendChild(section)

// ----------------------------------------------------------

const input = document.querySelector("input")
// input.remove()
console.dir(input)

const button = document.querySelector("button")
const button1 = document.querySelector("#button1")

//metodo 1 evento click

function darclick() {
    console.log("click funcion externa")
}
// // button.addEventListener("click",darclick)

// // button.addEventListener("click", function () {
// //     console.log("click funcion normal")
// // })
// button.addEventListener("click", ()=> {
//     console.log("click funcion flecha")
// })

//metodo 2 evento click

// button.onclick=darclick

// button.onclick=function(){
//     console.log("click funcion normal anonima")
// }

// button.onclick=()=>{
//     console.log("click funcion flecha")
// }

button.onclick = function () {
    this.classList.toggle("red")
}



// input.onchange=function(){
//     console.log(this.value)
// }
input.onkeydown=function(keka){
    console.log(keka)
    console.log(this.value)
}

// input.onkeyup=function(){
//     console.log(this.value)
// }

// input.oninput = function (target) {
//     console.log(target)
//     console.log(this.value)
// }

button1.onclick = (target) => {
    console.log(target)
    input.value = "1"
}






























