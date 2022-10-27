import { form, nombre, p, img } from "./selectores.js"
import consumoApi from "./api.js"

function onSubmit() {
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
}

export default onSubmit