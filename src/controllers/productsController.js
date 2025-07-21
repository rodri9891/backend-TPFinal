
//productsController.js
import productsService from '../services/productsService.js';

const getProducts = async(req, res) =>{
    try {
        const products = await productsService.getAll();
        res.status(200).json({message:"lista de productos", payload: products});
    } catch (error) {
        res.status(500).json({message:"error del servidor", error: error.message});
    }
};

const createProduct = async(req, res) =>{
    try {
        const {nombre, precio, disponible, stock} = req.body;
        //validacion de campos, pueden ser con detalles
        const newProduct={nombre, precio: +precio, disponible: disponible || false, stock: +stock}

        await productsService.createProduct(newProduct);
        res.status(200).json({message:"producto creado", payload: newProduct});
    } catch (error) {
        res.status(400).json({message:"no se pudo crear", error: error.message});
    }
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productsService.getById(id);
    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.status(200).json({ message: "producto encontrado", payload: product });
  } catch (error) {
    res.status(500).json({ message: "error del servidor", error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await productsService.remProduct(id);
    res.status(200).json({ message: "producto eliminado correctamente" });
  } catch (error) {
    res.status(404).json({ message: "error del servidor", error: error.message });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    await productsService.update(id, data);
    res.status(200).json({ message: "producto actualizado correctamente" });
  } catch (error) {
    res.status(404).json({ message: "no se pudo actualizar", error: error.message });
  }
};

export default {getProducts, createProduct, getProductById, deleteProduct, updateProduct};