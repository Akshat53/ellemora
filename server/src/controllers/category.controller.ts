import { Request, Response } from "express";
import CategoryService from "../services/category.service";
import Category, { ICategory } from "../models/category.model";

class CategoryController {
  static async createCategory(req: Request, res: Response) {
    try {
      const categoryData = req.body;
      const savedCategory = await CategoryService.createCategory(categoryData);
      res.status(201).json(savedCategory);
    } catch (error) {
      console.error("Failed to create category:", error);
      res.status(500).json({ error: "Failed to create category" });
    }
  }

  static async getCategoryById(req: Request, res: Response) {
    try {
      const categoryId = req.params.id;
      const category = await CategoryService.getCategoryById(categoryId);
      if (!category) {
        return res.status(404).json({ error: "Category not found" });
      }
      res.status(200).json(category);
    } catch (error) {
      console.error("Error fetching category:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  static async getCategories(req: Request, res: Response) {
    try {
      const parentId = req.query.parentId as string | undefined;
      const categories = await CategoryService.getCategories(parentId);
      res.status(200).json(categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  static async getParentCategories(): Promise<ICategory[]> {
    try {
      return await Category.find({ parentCategory: null }).populate('children');
    } catch (error:any) {
      throw new Error("Error fetching parent categories: " + error.message);
    }
  }

}

export default CategoryController;
