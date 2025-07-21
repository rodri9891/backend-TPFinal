//productsModel.js
import {db} from '../config/db.js';
import {collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc} from 'firebase/firestore';

const productCollection = collection(db, 'productos');

export const getAllProducts = async ()=>{
    try{
        const productList =  await getDocs(productCollection);
        const product=[];
        productList.forEach(doc=>product.push({id:doc.id, ...doc.data()}));
        return product;
    } catch (error){
        throw new Error("Error", error.message);
    }
}


export const saveProduct = async(product)=>{
    try{
        const newProduct = await addDoc(productCollection, product);
        return newProduct;
    } catch (error){
        throw new Error("Error", error.message);
    }
}

export const deleteProductById = async (id) => {
  try {
    const delDoc = doc(db, 'productos', id);
    await deleteDoc(delDoc);
  } catch (error) {
    throw new Error(`Error al eliminar producto: ${error.message}`);
  }
};

export const updateProductById = async (id, data) => {
  try {
    const productRef = doc(db, 'productos', id);
    await updateDoc(productRef, data);
  } catch (error) {
    throw new Error(`Error al actualizar producto: ${error.message}`);
  }
};