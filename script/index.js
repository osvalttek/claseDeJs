// jorge
const bgColor = document.querySelector("body")
const bgColorCalc = document.querySelector("section")
const numberColor = document.querySelectorAll(".numberColor")
const operatorColor = document.querySelectorAll(".operatorColor")
const darkLightBtn = document.querySelector(".darkLightMode")

darkLightBtn.onclick = () => {
    for (const elementN of numberColor) {
        elementN.classList.toggle("numberColorD")
        elementN.classList.toggle("numberColor")
    }
    for (const elementO of operatorColor) {
        elementO.classList.toggle("operatorColor")
        elementO.classList.toggle("operatorColorD")
    }
    bgColor.classList.toggle("bgColorD")
    bgColorCalc.classList.toggle("bgColorCalcD")
}
// ----------------------------------------------------------------------------------
const d = document
const input = d.querySelector(".input")
const btnClear = d.querySelector("#btnClear")
const btnDel = d.querySelector("#btnDel")
const btnCalc = d.querySelectorAll(".btnCalc")
const btnEqual = d.querySelector("#btnEqual")
btnClear.onclick = () => input.value = ""
function calculator(btnCalc) {
    for (const i of btnCalc) {
        i.onclick = () => {
            if (input.value === "Syntax ERROR") {
                input.value = ""
            }
            input.value += i.value
        }
    }
}
calculator(btnCalc)

btnDel.onclick = () => {
    input.value = input.value.slice(0, -1)
}
btnEqual.onclick = () => {
    if (input.value != "") {
        try {
            input.value = eval(input.value)
        } catch (e) {
            console.log("error", e)
            input.value = "Syntax ERROR"
        }
    }
}

