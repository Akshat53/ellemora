import { ICategory } from "../models/category.model";
import Category from "../models/category.model";


export default class CategoryService {
  static async createCategory(categoryData: ICategory): Promise<ICategory> {
    try {
      const newCategory = new Category(categoryData);
      return await newCategory.save();
    } catch (error:any) {
      throw new Error("Failed to create category: " + error.message);
    }
  }

  static async getCategoryById(id: string): Promise<ICategory | null> {
    try {
      return await Category.findById(id).populate("children");
    } catch (error:any) {
      throw new Error("Error fetching category by ID: " + error.message);
    }
  }

  static async getCategories(parentId?: string): Promise<ICategory[]> {
    try {
      const query = parentId ? { parentCategory: parentId } : { parentCategory: null };
      return await Category.find(query);
    } catch (error:any) {
      throw new Error("Error fetching categories: " + error.message);
    }
  }

  static async getParentCategories(): Promise<ICategory[]> {
    try {
      return await Category.find({ parentCategory: null });
    } catch (error:any) {
      throw new Error("Error fetching parent categories: " + error.message);
    }
  }
}
