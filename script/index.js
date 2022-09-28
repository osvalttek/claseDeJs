// bucles de iteracion
// for, while, do while

// for
let a = 1

// let b = a + 1
//  a = a + 1
// a += 1
// a++
a

// for (let i =0; i < 5; i++) {
//     // console.log("hola" + i + 1)
//     // console.log("hola", i + 1)
//     console.log(`hola ${i + 1}`)
// }

// console.log("chau ", i)

// for (let i =5; i>=1; i--) {
//     // console.log("hola" + i + 1)
//     // console.log("hola", i + 1)
//     console.log(`hola ${i }`)
// }

// for (let i = 1; i <=50 ; i+=2) {
//     console.log(i)
// }


// while
// let j = 8
// while (j >0) {
//     console.log(j)
//     j-=2
// }


// dowhile

// let j = 1
// do {
//     console.log(j)
//     j++
// } while (j <= 4);
// console.log(j)

// ---------
// let j = 1
// let boolean = true

// do {
//     console.log(j)
//     j <= 3 ? j++ : boolean = false
// } while (boolean);
// ------------------------------------------------------

// for (let i = 0; i < 10; i++) {
//     if (i === 4) console.log("hola")
//     console.log(i)
// }


// for (let i = 0; i < 4; i++) {
//     // if (i < 2) {
//     //     console.log("hola")
//     // } else {
//     //     console.log("chau")
//     // }
//     // i<2 || i==3 ? console.log("hola"):console.log("chau")
//     // i<2 || i==3 ? console.log("hola"): null/// esto esta mal pero no tanto 
//     // if (i<2 || i==3) console.log("chau")
// }

// for anidados, tabla de multiplicacion
// for (let i = 1; i <= 10; i++) {
//     console.log(`Tabla del ${i}`)
//     for (let j = 1; j <= 10; j++) {
//         console.log( `${i} x ${j} = ${i*j}` )
//     } 
// console.log(" ")
// }


// while
// let i = 1
// let j = 1
// while (i <= 10) {
//     console.log(`Tabla del ${i}`)
//     while (j <= 10) {
//         console.log(`${i} x ${j} = ${i * j}`)
//         j++
//     }
//     j=1
//     i++
// }



// dowhile

let i = 1
let j = 1

do {
    console.log(`Tabla del ${i}`)
    do {
        console.log(`${i} x ${j} = ${i * j}`)
        j++
    } while (j <= 10);
    j = 1
    i++
} while (i <= 10);





