import express from "express";
import CategoryController from "../controllers/category.controller";

const router = express.Router();

router.get("/", CategoryController.getCategories);
router.get("/:id", CategoryController.getCategoryById);
router.post("/", CategoryController.createAndUpdateCategory);

export default router;
