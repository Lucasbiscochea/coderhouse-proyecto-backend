
const ProductManager = require('../models/ProductManager.js');
const productManager = new ProductManager('./src/products.json');

exports.getAllProducts = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit);
    const products = await productManager.getProducts();

    if (limit) {
      res.json(products.slice(0, limit));
    } else {
      res.json(products);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProductById = async (req, res, next) => {
  try {
    const productId = parseInt(req.params.pid);
    const product = await productManager.getProductById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el producto' });
  }
};

exports.addProduct = async (req, res, next) => {
  try {
    const newProduct = req.body; // Suponiendo que los datos del nuevo producto se envían en el cuerpo de la solicitud
    const product = await productManager.addProduct(newProduct);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar el producto' });
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const productId = parseInt(req.params.pid);
    await productManager.deleteProduct(productId);
    res.status(204).send(); // Sin contenido en la respuesta
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el producto' });
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const productId = parseInt(req.params.pid);
    const updatedProduct = req.body; // Suponiendo que los datos actualizados del producto se envían en el cuerpo de la solicitud
    await productManager.updateProduct(productId, updatedProduct);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el producto' });
  }
};

