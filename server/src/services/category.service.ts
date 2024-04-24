import { GetOptions } from "src/types/product.types";
// import from "../types/categories.types";
import Category from "../models/category.model";
import  { ICategory } from "../types/categories.types"

const getCategories = async (options: GetOptions): Promise<ICategory[]> => {
  const { query, sortBy, sortOrder } = options;
  try {
    const categories = await Category.find(query).sort({ [sortBy]: sortOrder });

    return categories;
  } catch (error: any) {
    throw new Error("Error fetching categories: " + error.message);
  }
};

const createCategory = async (data: ICategory): Promise<ICategory> => {
  try {
    const newCategory = new Category(data);
    return await newCategory.save();
  } catch (error: any) {
    throw new Error("Failed to create category: " + error.message);
  }
};

const getCategoryById = async (id: string): Promise<ICategory | null> => {
  try {
    return await Category.findById(id);
  } catch (error: any) {
    throw new Error("Error fetching category by ID: " + error.message);
  }
};

const getCategoryByName = async (name: string): Promise<ICategory | null> => {
  try {
    return await Category.findOne({ name: name });
  } catch (error: any) {
    throw new Error("Error fetching category by name: " + error.message);
  }
};

export default {
  getCategories,
  getCategoryByName,
  getCategoryById,
  createCategory,
};
