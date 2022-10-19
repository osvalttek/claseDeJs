//ecommerce
// Crear la clase User, con las propiedades nombre y apellido
// crear la clase Businness que herede las propiedades de User y tenga la propiedad admin=true
// crear la clase Buyer que extienda de User
// crear la clase Cart que en su constructor tenga la propiedad carrito y que sea igual a un array vacio
// crear la clase Products que en su constructor tenga la propiedad products igual a un array vacio

// que Business tenga la propiedad products y que sea una instancia de la clase Products
// que Business tenga un metodo estatico para poder mostrar todos los productos

// que Buyer tenga la propiedad cart y que sea una instancia de la clase Cart

// que Products tenga un metodo para poder agregar productos en forma de objeto con las propiedades nombre, precio y cantidad
// que tenga el metodo para poder eliminar un producto
// que tenga el metodo para poder modificar un producto 
// que tenga el metodo para mostrar los productos

// que Cart tenga el metodo addToCart que agregue productos al carrito en forma de objeto con las propiedades nombre y cantidad, pero antes tiene que comprobar si existe el producto, atravez del metodo de clase de Business
// que tenga el metodo para poder eliminar un producto del carrito
// que tenga el metodo para poder modificar un producto  del carrito
// que tenga el metodo para mostrar los productos del carrito

class User {
    constructor(nombre, apellido) {
        this.nombre = nombre
        this.apellido = apellido
    }
}

class Business extends User {
    constructor(nombre, apellido) {
        super(nombre, apellido)
        this.admin = true
        this.products = new Products()
    }
    static showProducts(negocio) {
        return negocio.products.products
    }
}

class Buyer extends User {
    constructor(nombre, apellido) {
        super(nombre, apellido)
        this.cart = new Cart()
    }
}

class Products {
    constructor() {
        this.products = []
        this.total=0
    }
    showProducts() {
        console.log("products")
        return this.products
    }
    addProducts(nombre, precio, cantidad) {
        this.products.push({
            nombre,
            precio,
            cantidad
        })
    }
}

class Cart {
    constructor() {
        this.cart = []
        this.total = 0
    }
    showCardProducts() {
        console.log("cart")
        return this.cart
    }

    addCartProducts(nombre, cantidad) {
        let find = Business.showProducts(oxxo).find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase())
        if (find) {
            this.cart.push({
                nombre,
                cantidad,
                precio: find.precio
            })
        }
    }
}

let oxxo = new Business("oxxo", "S.A. de C.V.")
oxxo.products.addProducts("coca", 18, 40)
oxxo.products.addProducts("chicles", 5, 50)
oxxo.products.addProducts("vikingos", 22, 60)
let verProductos = Business.showProducts(oxxo)

let kevin = new Buyer("kevin", "Perz")

// -----------------------------------------------

// function Person(nombre) {
//     this.nombre = nombre
//     this.hola = function () {
//        return saludar()
//     }
//       function saludar () {
//         console.log("hola")
//         return this.nombre
//     }
// }

// let persona = new Person("os")

// -------------------------------------------------
// class User {
//     constructor(nombre, apellido) {
//         this.nombre = nombre
//         this.apellido = apellido
//     }
// }

// class Business extends User {
//     constructor(nombre, apellido) {
//         super(nombre, apellido)
//         this.admin = true
//         this.products = new Products()
//     }
//     static showProducts(negocio) {
//         return negocio.products.products
//     }
// }

// class Buyer extends User {
//     constructor(nombre, apellido) {
//         super(nombre, apellido)
//         this.cart = new Cart()
//     }
// }

// class Products {
//     constructor() {
//         this.products = []
//         this.total = 0
//     }
//     showProducts() {
//         console.log("products")
//         return this.products
//     }
//     addProducts(nombre, precio, cantidad) {
//         this.products.push({
//             nombre,
//             precio,
//             cantidad
//         })
//     }
//     deleteProduct(nombre) {
//         let find = this.products.find(product => product.nombre.toLowerCase() === nombre.toLowerCase())
//         if (find) {
//             this.products.splice(find, 1)
//             return this.products
//         }
//         return "no se encontro producto"
//     }
// }

// class Cart {
//     constructor() {
//         this.cart = []
//         this.total = 0

//     }
//     #calcTotal() {
//         this.total = this.cart.reduce((total, producto) => {
//             return total += producto.subTotal
//         }, 0)
//     }
//     showCardProducts() {
//         console.log("cart")
//         return this.cart
//     }
//     addCartProducts(nombre, cantidad = 1) {
//         let find = Business.showProducts(oxxo).find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase())
//         if (find) {
//             this.cart.push({
//                 nombre,
//                 cantidad,
//                 precio: find.precio,
//                 subTotal: find.precio * cantidad
//             })
//             this.#calcTotal()
//             return `Se agrego ${nombre} al carrito`
//         }
//         return "No se pudo agregar ese producto al carrito"
//     }

//     deleteCartProduct(nombre) {
//         let find = this.cart.find(product => product.nombre.toLowerCase() === nombre.toLowerCase())
//         if (find) {
//             if (find.cantidad > 1) {
//                 find.cantidad--
//                 find.subTotal = find.precio * find.cantidad
//                 this.#calcTotal()
//                 return this.cart
//             }
//             this.cart.splice(find, 1)
//             this.#calcTotal()
//             return this.cart
//         }
//         return "no se encontro producto"
//     }
// }

// let oxxo = new Business("oxxo", "S.A. de C.V.")
// oxxo.products.addProducts("coca", 18, 40)
// oxxo.products.addProducts("chicle", 5, 50)
// oxxo.products.addProducts("vikingo", 22, 60)
// // let verProductos = Business.showProducts(oxxo).reduce((total, producto) => {
// //     return total += producto.cantidad
// // }, 0)
// let kevin = new Buyer("kevin", "Perz")
// // kevin.cart.addCartProducts("coca", 2)
// // kevin.cart.addCartProducts("chicle", 1)





