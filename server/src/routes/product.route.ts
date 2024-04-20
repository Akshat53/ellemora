import express from "express";
import productController from "../controllers/product.controller";
import { fileUploadMiddleware } from "../middleware/excelfileuploader.middleware";
import { ExcelController } from "../controllers/excelfileuploader.controller";

const router = express.Router();

const excelController = new ExcelController();

router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.get("/:id/media", productController.getProductMedia);
router.post("/", productController.addProduct);
router.post("/upload", fileUploadMiddleware, excelController.upload);

export default router;
