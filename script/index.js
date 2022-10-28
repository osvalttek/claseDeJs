import { p } from "./selectores.js";
import onSubmit from "./submit.js";
onSubmit()

const body = document.querySelector("body")
const mode = document.querySelector("#mode")

// crear archivo selectores que contenga todos los selectores
// crear archivo api que contenga el pedido a la api
// crear archivo submit que realice el evento y el render dela peticion

function background() {
    !localStorage.getItem("mode") ? (
        localStorage.setItem("mode", "light"),
        body.classList.toggle(localStorage.getItem("mode"))
    ) : (
        body.classList.toggle(localStorage.getItem("mode"))
    )
}
background()

mode.onclick = () => {
    if (localStorage.getItem("mode") !== "dark") {
        localStorage.setItem("mode", "dark")
        body.classList.replace("light", localStorage.getItem("mode"))
    } else {
        localStorage.setItem("mode", "light")
        body.classList.replace("dark", localStorage.getItem("mode"))
    }
}