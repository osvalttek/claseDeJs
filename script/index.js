
//tarea hacer un pop, unshift, shift,

let ar = [1, 2, 3, 4, 5, "hola"]
// function pop(array) {
//     let pop = array[array.length - 1]
//     array.splice(array.length - 1, 1)
//     return pop
// }

const pop = (data) => {
    let array = [...data.splice(data.length - 1, 1)];
    return array[0];
};


const unshift1 = (array, ...arg) => {
    console.log(arg)
    array.splice(0, 0, ...arg)
    return array.length
}

function shift(array) {
    let shift = array[0]
    array.splice(0, 1)
    return shift
}

// -----------------------------------------------------------------

let nombres = ["Maria", "Pedro", "Juan", "Cesar", "Erick"]
let nombresCompletos = [{}, {}, {}]


function iteradora(array) {
    // opcion 1
    function datos(value, index, array) {
        console.log(value)
        console.log(index)
        console.log(array)
    }
    // array.forEach(datos);

    // opcion 2
    // array.forEach(function datos(value, index, array) {
    //     console.log(index)
    //     console.log(value)
    //     console.log(array)
    // });

    // opcion 3
    // array.forEach((value, index, array) => {
    //     console.log(index)
    //     console.log(value)
    //     console.log(array)
    // });

    // opcion 4
    // array.forEach((value) => console.log(value));
    // let newArray = []
    // array.forEach((value) => newArray.push(value.toUpperCase()));
    // return newArray

    // map
    // array.map(datos)
    // return array.map(value => value.toUpperCase())

    // filter
    // acepta tres parametros value, index y array
    // return array.filter(datos)
    return array.filter(values => values === "Cesar" || values === "Juan")

    // let filter = []
    // let length = array.length
    // for (let i = 0; i < length; i++) {
    //     if (array[i] === "Cesar" || array[i] === "Juan") {
    //         filter.push(array[i])
    //     }
    // }
    // return filter

}

// let nombresUp = nombres.map(nombre => nombre.toUpperCase())

let precios = [10, 20, 30, 40]

function reduce(array) {
    // acepta 4 parametros, total, value, index, array
    // return array.reduce((total, value, index, array) => {
    //     // console.log("start", start)
    //     // console.log("value", value)
    //     // console.log("index", index)
    //     // console.log("array", array)
    //     return total += value
    // },0)
    // return array.reduce((total, value) => {
    //     return total += value
    // })
    // return array.reduce((total, value) => {
    //     return total += value
    // },"")
    return array.reduce((total, value) => {
        return total += value
    }, )
}





















