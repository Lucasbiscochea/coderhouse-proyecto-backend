
const fs = require('fs').promises;

class ProductManager {
  constructor(filePath) {
    this.filePath = filePath;
  }

  async getProducts() {
    try {
      const data = await fs.readFile(this.filePath, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      throw new Error('Error al leer los productos');
    }
  }

  async getProductById(id) {
    try {
      const products = await this.getProducts();
      const product = products.find((p) => p.id === id);
      if (!product) {
        throw new Error('Producto no encontrado');
      }
      return product;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductManager;
