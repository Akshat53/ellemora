import express from "express";
import productController from "../controllers/product.controller";
import { fileUploadMiddleware } from "../middleware/productUpload.middleware";
import { ExcelController } from '../controllers/productUploader.controller';

const router = express.Router();

const excelController = new ExcelController(); 

router.post("/products", productController.addProduct);

router.post("/products/upload", fileUploadMiddleware, excelController.upload);

router.get('/products/:id', productController.getProductById);


router.get('/products/:id/media', productController.getProductMedia);


router.get('/products', productController.getAllProducts);

export default router;
