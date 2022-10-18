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





































// -----------------------------------------------------------------------------------------------------------
// class User {
//     constructor(nombre, apellido) {
//         this.nombre = nombre
//         this.apellido = apellido
//     }
// }

// class Business extends User {
//     constructor(nombre, apellido) {
//         super(nombre, apellido)
//         this.addmin = true
//         this.products = new Products()
//     }
//     static getAllProducts(negocio) {
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
//     }
//     addProduct(nombre, precio, cantidad) {
//         this.products.push({
//             nombre,
//             precio,
//             cantidad
//         })
//     }

//     getAllProducts() {
//         return this.products
//     }

//     modifyProduct() {

//     }

//     deleteProduct(nombre) {
//         let filtro = this.products.filter(product => product.nombre != nombre.toLowerCase())
//         this.products = []
//         this.products.push(...filtro)
//         return this.products
//     }

// }


// class Cart {
//     constructor() {
//         this.cart = []
//     }
//     addProduct(nombre, cantidad) {
//         let filtro = Business.getAllProducts(negocio).find(product => product.nombre === nombre.toLowerCase())
//         if (filtro) {
//             this.cart.push({
//                 nombre,
//                 cantidad,
//                 precio: filtro.precio
//             })
//         }
//     }

//     getAllCArtProducts() {
//         return this.products
//     }

//     modifyCartProduct() {

//     }

//     deleteCartProduct() {

//     }

// }

// let negocio = new Business("osvaldo", "ojeda")
// negocio.products.addProduct("remera", 100, 10)
// negocio.products.addProduct("pantalon", 150, 20)
// negocio.products.addProduct("camisa", 100, 15)
// negocio.products.addProduct("medias", 20, 100)
// let comprador = new Buyer("kuka", "ojeda")


