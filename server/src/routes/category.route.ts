import express from "express";
import CategoryController from "../controllers/category.controller";

const router = express.Router();

router.post("/categories", CategoryController.createCategory);
router.get("/categories/:id", CategoryController.getCategoryById);
router.get("/categories", CategoryController.getCategories);
router.get("/categories/parent", CategoryController.getParentCategories); // Corrected endpoint definition

export default router;
