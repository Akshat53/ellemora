import express from 'express';
import productController from '../controllers/product.controller';

const router = express.Router();

// Route to add a new product
router.post('/products', productController.addProduct);

export default router;
