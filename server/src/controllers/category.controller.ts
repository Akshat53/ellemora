import { Request, Response } from "express";
import CategoryService from "../services/category.service";
import ServerConstants from "../constants/constants";
import { QueryFilters } from "src/types/product.types";
import { CategoriesData } from "src/types/categories.types";

const getCategories = async (req: Request, res: Response) => {
  const { parentId, orderBy = "desc" } = req.query;
  const sortBy =
    typeof req.query.sortBy === "string"
      ? req.query.sortBy
      : ServerConstants.sortBy;
  const sortOrder =
    orderBy === "asc"
      ? ServerConstants.orderByAsc
      : ServerConstants.orderByDesc;
  try {
    const query: QueryFilters = {};

    if (typeof parentId === "string" && parentId) {
      query.parentCategory = {
        $in: [parentId],
      };
    }
    const categories = await CategoryService.getCategories({
      query,
      sortBy,
      sortOrder,
    });
    const data: CategoriesData = {
      categoriesList: categories,
    };
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getCategoryById = async (req: Request, res: Response) => {
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
};

const createAndUpdateCategory = async (req: Request, res: Response) => {
  try {
    let level = 0;
    const { name, parentId, id } = req.body; // Destructure parentId from the request body

    let existCategory = null;
    if (id) {
      existCategory = await CategoryService.getCategoryById(id);
    } else {
      if (name) {
        existCategory = await CategoryService.getCategoryByName(name);
      }
    }

    if (existCategory) {
    }
    if (parentId) {
      const parentCategory = await CategoryService.getCategoryById(parentId);
      if (parentCategory) {
        level = parentCategory.level + 1;
      } else {
        return res.status(404).json({ error: "Parent category not found" });
      }
    }
    const categoryData = {
      ...req.body,
      level: level,
      parentCategory: [parentId],
    };

    // Create the new category
    const savedCategory = await CategoryService.createCategory(categoryData);
    res.status(201).json(savedCategory);
  } catch (error) {
    console.error("Failed to create category:", error);
    res.status(500).json({ error: "Failed to create category" });
  }
};

export default {
  getCategories,
  getCategoryById,
  createAndUpdateCategory,
};
