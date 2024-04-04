import express from 'express';
import productController from '../controllers/product.controller';

const router = express.Router();


router.post('/products', productController.addProduct);

export default router;
