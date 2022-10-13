const tenis={
    marca:"nike",
    color:"blancas",
    talle:[33,34,35]
}

Object.keys(tenis)
Object.values(tenis)

function iteradorObj(object) {
//    for (const key in object) {
//   console.log(object[key])
//    }
   for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(element)
    }
   }
}

//copia pero hace referencia al mismo obj
let copiaTenisIgual=tenis
//esto hace una copia superficial 
let copiaTenis={...tenis}
//
let copiaAmano={
    marca:tenis.marca,
    color:tenis.color,
    talle:[tenis.talle[0], tenis.talle[1],tenis.talle[2]]
}



// Ejercicio
// 1 crear una funcion que reciva tres paramatros, nombre, precio y cantidad y retorne un objeto con las propiedades nombre, precio, cantidad y total
// 
function obj(nombre, precio, cantidad) {
    // opcion1
    // let articulo={
    //     nombre:nombre,
    //     precio:precio,
    //     cantidad:cantidad,
    //     total:function () {
    //         return this.precio*this.cantidad
    //     }
    // }
    // return articulo

    let total=precio*cantidad
    //si el key y el value de un obj tienen el mismo nombre se puede escribir asi
    return {
        nombre,
        precio,
        cantidad,
        total
    }
}

// ----------------------------------------------------------------------

// 2 Aumentar La Nota
// Tenés una lista de estudiantes con su desempeño académico actual. Querés subirle 2 puntos a aquellos que su nota sea mayor a 5. Recordá que la nota tampoco puede superar al 10.

// Ejemplo:

let estudiantes=[ { Estudiante: "Juan", nota: 6 },
 { Estudiante: "Mario", nota: 8 },
 { Estudiante: "Julia", nota: 10 },
 { Estudiante: "Sofia", nota: 2 }]

//  let estudiantesModificado=estudiantes.map((estudiante)=>{
//     if (estudiante["nota"]>5 && estudiante["nota"]<=8) estudiante.nota+=2
//     if (estudiante["nota"]===9) estudiante.nota+=1
//     return estudiante
//  })

// let copia=estudiantes.slice()
// let copia=[...estudiantes]

//  function subirNota(estudiante) {
//     for (let i = 0; i < estudiante.length; i++) {
//         if(estudiante[i].nota>5 && estudiante[i].nota<=8){
//             estudiante[i].nota+=2
//         }
//         if(estudiante[i].nota===9){
//             estudiante[i].nota+=1
//         } 
//     }
//     return estudiante
//  }



// salida=[ { Estudiante: "Juan", nota: 8 },
// { Estudiante: "Mario", nota: 10 },
// { Estudiante: "Julia", nota: 10 },
// { Estudiante: "Sofia", nota: 2 },]
// ----------------------------------------------------------------------
// 3 Tenemos un Arreglo de Objetos, donde cada uno representa a una persona. Usando .filter(), creá un nuevo Arreglo con las personas que tengan más de 27 años.

// let personas = [ { nombre: 'Ana', edad: '28'},
// { nombre: 'María', edad: '24' }, { nombre: 'José', edad: '31' }
// ];
// let personasConMasDe27 = // Codeá la solución

// console.log(personasConMasDe27);
// // [{ nombre: 'Ana', edad: '28' }, { nombre: 'José', edad: '31' }]

// ----------------------------------------------------------------------
// let actoresVocales = []

// let actoresPrincipales = ['Tom Hanks', 'Johnny Depp', 'Elizabeth Taylor', 'Morgan Freeman', 'Jennifer Aniston', 'Meryl Streep', 'Natalie Portman', 'Ashton Kutcher']
// let peliculas = []

// let actoresPrincipalesPorPelicula = {
//     "Titanic": "Leonardo DiCaprio",
//     "El Padrino": "Al Pacino",
//     "Matrix": "Keanu Reeves",
//     "Iron Man": "Robert Downey Jr",
//     "Soy leyenda": "Will Smith",
//     "Bastardos sin gloria": "Brad Pitt"
// }
// Iterá actoresPrincipales y llevá a actoresVocales aquellos cuyo nombre o apellido comience con una vocal.
// Iterá sobre el Objeto actoresPrincipalesPorPelicula y agregá sus nombres y apellidos al Arreglo actoresPrincipales.
// Iterá sobre el Objeto actoresPrincipalesPorPelicula y agregá los nombres de las películas en el Arreglo peliculas.
// Creá un Objeto vacíó llamado peliculaPorActor.
// Agregá Propiedades a este Objeto donde la clave sea el nombre del actor y el valor sea la película.
// Adaptá tu código para que pueda haber más de una película por cada actor.

// ----------------------------------------------------------------------
// Posición Adecuada
// Tenés un array de objetos con el nombre y la edad de distintas personas. Este arreglo debe ser ordenado agregando una propiedad llamada posicion. Esta propiedad ubica a las personas en su posición adecuada, de menor a mayor.

// Ejemplo:

// [ { nombre: "Alba", edad: 15 },
//   { nombre: "Estrella", edad: 30 },
//   { nombre: "Belen", edad: 20 },
//   { nombre: "Santiago", edad: 4 },
//   { nombre: "Katherine", edad: 55 }]

// Output:

// [ { nombre: 'Santiago', edad: 4, posicion: 0 },
//   { nombre: 'Alba', edad: 15, posicion: 1 },
//   { nombre: 'Belen', edad: 20, posicion: 2 },
//   { nombre: 'Estrella', edad: 30, posicion: 3 },
//   { nombre: 'Katherine', edad: 55, posicion: 4 }]


// ----------------------------------------------------------------------
// 🚀Software Factory
// Pensemos que somos una software factory (empresa de desarrollo) y tenemos un cliente que tiene varios artículos de tecnología. Este cliente nos plantea dos necesidades para su negocio:

// Conocer el valor total de cada artículo según sus cantidades (es decir, cuál es el valor total de todos sus televisores, por ejemplo).

// Imprimir una lista que separe cada artículo con su respectiva suma total de valores en sus respectivos Objetos.

// ¿Cómo realizar estos pedidos?

// Crearás una nueva Función, en la cual su argumento haga referencia a un Arreglo de productos del ecommerce (el cual nuestro cliente ya nos brinda).

// let ecommerce = [
// {nombre: "Samsung TV", precio: 6000, articulos:10}, 
// {nombre: "DELL notebook", precio: 4000, articulos:30 },
// {nombre:"Auriculares Sony", precio: 1500, articulos:15},
// {nombre:"Monitor Philips", precio:12000, articulos:20},
// {nombre:"Teclado logitech", precio: 3000, articulos:5}]
 
// La Función en general tendrá que devolver un nuevo Arreglo con Objetos que tengan el nombre de cada producto y el valor total de todos los artículos que se encuentren en la tienda.

// ¿Qué debería devolver?
// show hint
// totalArtículos(ecommerce) 
// // Debe retornar (5) [{…}, {…}, {…}, {…}, {…}]
// {Samsung TV: 60000}
// {DELL notebook: 120000}
// {Auriculares Sony: 22500}
// {Monitor Philips: 240000}
// {Teclado logitech: 15000}
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------