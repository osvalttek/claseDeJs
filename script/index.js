// jorge
const bgColor = document.querySelector("body")
const bgColorCalc = document.querySelector("section")
const numberColor = document.querySelectorAll(".numberColor")
const operatorColor = document.querySelectorAll(".operatorColor")
const darkLightBtn = document.querySelector(".darkLightMode")
// ---- calc
// const input = document.querySelector(".input")
// const btnClear = document.querySelector("#btnClear")
// const btnDivision = document.querySelector("#btnDivision")
// const btnMultiplication = document.querySelector("#btnMultiplication")
// const btnSubtraction = document.querySelector("#btnSubtraction")
// const btnAddition = document.querySelector("#btnAddition")
// const btnEqual = document.querySelector("#btnEqual")
// const btnDot = document.querySelector("#btnDot")
// const btnNine = document.querySelector("#btnNine")
// const btnEight = document.querySelector("#btnEight")
// const btnSeven = document.querySelector("#btnSeven")
// const btnSix = document.querySelector("#btnSix")
// const btnFive = document.querySelector("#btnFive")
// const btnFour = document.querySelector("#btnFour")
// const btnThree = document.querySelector("#btnThree")
// const btnTwo = document.querySelector("#btnTwo")
// const btnOne = document.querySelector("#btnOne")
// const btnZero = document.querySelector("#btnZero")

// btnClear.onclick = () => {
//     input.value = "";
// }
// btnNine.onclick = () => {
//     if (input.value != "Syntax ERROR") {
//         input.value += "9";
//     } else {
//         input.value = "9"
//     }
// }
// btnEight.onclick = () => {
//     if (input.value != "Syntax ERROR") {
//         input.value += "8";
//     } else {
//         input.value = "8"
//     }
// }
// btnSeven.onclick = () => {
//     if (input.value != "Syntax ERROR") {
//         input.value += "7";
//     } else {
//         input.value = "7"
//     }
// }
// btnSix.onclick = () => {
//     if (input.value != "Syntax ERROR") {
//         input.value += "6";
//     } else {
//         input.value = "6"
//     }
// }
// btnFive.onclick = () => {
//     if (input.value != "Syntax ERROR") {
//         input.value += "5";
//     } else {
//         input.value = "5"
//     }
// }
// btnFour.onclick = () => {
//     if (input.value != "Syntax ERROR") {
//         input.value += "4";
//     } else {
//         input.value = "4"
//     }
// }
// btnThree.onclick = () => {
//     if (input.value != "Syntax ERROR") {
//         input.value += "3";
//     } else {
//         input.value = "3"
//     }
// }
// btnTwo.onclick = () => {
//     if (input.value != "Syntax ERROR") {
//         input.value += "2";
//     } else {
//         input.value = "2"
//     }
// }
// btnOne.onclick = () => {
//     if (input.value != "Syntax ERROR") {
//         input.value += "1";
//     } else {
//         input.value = "1"
//     }
// }
// btnZero.onclick = () => {
//     if (input.value != "Syntax ERROR") {
//         input.value += "0";
//     } else {
//         input.value = ""
//     }
// }
// btnDivision.onclick = () => {
//     if (input.value != "Syntax ERROR" && input.value != "") {
//         input.value += "/";
//     } else {
//         input.value = ""
//     }
// }
// btnMultiplication.onclick = () => {
//     if (input.value != "Syntax ERROR" && input.value != "") {
//         input.value += "*";
//     } else {
//         input.value = ""
//     }
// }
// btnSubtraction.onclick = () => {
//     if (input.value != "Syntax ERROR" && input.value != "") {
//         input.value += "-";
//     } else {
//         input.value = ""
//     }
// }
// btnAddition.onclick = () => {
//     if (input.value != "Syntax ERROR" && input.value != "") {
//         input.value += "+";
//     } else {
//         input.value = ""
//     }
// }
// btnDot.onclick = () => {
//     if (input.value != "Syntax ERROR") {
//         input.value += ".";
//     } else {
//         input.value = ""
//     }
// }
// btnEqual.onclick = () => {
//     if (input.value != "") {
//         try {
//             input.value = eval(input.value)
//         } catch (e) {
//             console.log("error", e)
//             input.value = "Syntax ERROR"
//         }
//     }
// };


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
    let del = input.value.split("")
    del.pop()
    input.value = del.join("")
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

