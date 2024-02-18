class ProductManager {
    constructor() {
        this.products = [];
    }

    getProducts() {
        return this.products;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        const existingProduct = this.products.find(product => product.code === code);
        if (existingProduct) {
            throw new Error('El código del producto ya existe');
        }

        const id = Math.random().toString(36).substr(2, 9);
        const newProduct = { id, title, description, price, thumbnail, code, stock };
        this.products.push(newProduct);

        return newProduct;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (!product) {
            throw new Error('Producto no encontrado');
        }

        return product;
    }
}

const productManager = new ProductManager();

console.log(productManager.getProducts());

productManager.addProduct("Procesador Intel Core i7-10700K", "Procesador de 10ma generación, 8 núcleos, 16 subprocesos", 350, "imagen_procesador_i7", "PROC123", 10);

try {
    console.log(productManager.getProductById(productManager.getProducts()[0].id));
} catch (error) {
    console.error('¡Ups, ocurrió un error!');
}
