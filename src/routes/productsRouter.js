//productsRouter.js
import { Router } from 'express';
import productsController from '../controllers/productsController.js';

const router = Router();

router.get("/", productsController.getProducts);
router.post("/", productsController.createProduct);
router.get("/id/:id", productsController.getProductById);
router.delete("/id/:id", productsController.deleteProduct);
router.put("/id/:id", productsController.updateProduct);

export default router;