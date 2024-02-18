class Product {
    constructor({ title, description, price, thumbnail, code, stock }) {
        this.id = '_' + Math.random().toString(36).substr(2, 9);
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
}

class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(productDetails) {
        const existingProduct = this.products.find(product => product.code === productDetails.code);
        if (existingProduct) {
            throw new Error('Error: Ya existe un producto con el mismo código');
        }
        
        const newProduct = new Product(productDetails);
        this.products.push(newProduct);
    }

    getProductById(productId) {
        const product = this.products.find(product => product.id === productId);
        if (!product) {
            throw new Error('Producto no encontrado');
        }
        return product;
    }

    updateProduct(productId, updatedFields) {
        const product = this.getProductById(productId);
        Object.assign(product, updatedFields);
    }

    deleteProduct(productId) {
        const index = this.products.findIndex(product => product.id === productId);
        if (index !== -1) {
            this.products.splice(index, 1);
        } else {
            throw new Error('Producto no encontrado, no se puede eliminar.');
        }
    }

    getProducts() {
        return this.products;
    }
}

const productManager = new ProductManager();

productManager.addProduct({
    title: 'Laptop HP Envy 15',
    description: 'Laptop ultradelgada con pantalla táctil y procesador Intel Core i7.',
    price: 1200,
    thumbnail: 'laptop.jpg',
    code: 'hp001',
    stock: 10
});

productManager.addProduct({
    title: 'PC Gamer Alienware Aurora R10',
    description: 'Potente PC de escritorio diseñado para juegos de alta gama con Ryzen 9 y RTX 3080.',
    price: 2500,
    thumbnail: 'pc_gamer.jpg',
    code: 'awr10',
    stock: 5
});

console.log(productManager.getProducts());

productManager.deleteProduct(productManager.getProducts()[0].id);
console.log(productManager.getProducts());


