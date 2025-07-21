//productsRouter.js
import { getAllProducts, saveProduct, deleteProductById, updateProductById } from "../models/productsModel.js";

const getAll = async () =>{
    return await getAllProducts();
};

const createProduct = async(product)=>{
    return await saveProduct(product);
};

const getById = async(id)=>{
    const products = await getAllProducts();
    return products.find(p => p.id === id);
};

const remProduct = async (id) => {
  const products = await getAllProducts();
  const found = products.find(p => p.id === id);
  if (!found) throw new Error("Producto no encontrado");
  await deleteProductById(id);
};

const update = async (id, data) => {
  const products = await getAllProducts();
  const found = products.find(p => p.id === id);
  if (!found) throw new Error("Producto no encontrado");
  await updateProductById(id, data);
};

export default {getAll, createProduct, getById, remProduct, update};