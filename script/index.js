import { p } from "./selectores.js";
import onSubmit from "./submit.js";
onSubmit()

const body = document.querySelector("body")
const mode = document.querySelector("#mode")

// crear archivo selectores que contenga todos los selectores
// crear archivo api que contenga el pedido a la api
// crear archivo submit que realice el evento y el render dela peticion


// function background(mod) {
//     localStorage.setItem("mode", mod)
// }
// background("dark")

localStorage.setItem("mode", "dark")



mode.onclick = () => {
    if (localStorage.getItem("mode") === "dark") {
        body.classList.toggle(localStorage.getItem("mode"))
        background("light")
    }else{
        body.classList.toggle("light")
    }
}