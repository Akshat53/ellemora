import { Request, Response } from "express";
import CategoryService from "../services/category.service";
import ServerConstants from "../constants/constants";
import { QueryFilters } from "src/types/product.types";
import { CategoriesData } from "src/types/categories.types";
import Category from '../models/category.model';
import mongoose from "mongoose";

// Utility function for sending errors
const sendError = (res: Response, error: any, statusCode: number = 500) => {
  console.error(error);
  res.status(statusCode).json({ error: error.message || "Internal server error" });
};

// Middleware for handling async requests
const asyncHandler = (fn: Function) => (req: Request, res: Response, next: Function) =>
  Promise.resolve(fn(req, res, next)).catch((error) => sendError(res, error));

const getCategories = asyncHandler(async (req: Request, res: Response) => {
  const { parentId, orderBy = "desc" } = req.query;
  const sortBy = typeof req.query.sortBy === "string" ? req.query.sortBy : ServerConstants.sortBy;
  const sortOrder = orderBy === "asc" ? ServerConstants.orderByAsc : ServerConstants.orderByDesc;
  
  const query: QueryFilters = {};
  if (typeof parentId === "string" && parentId) {
    query.parentCategory = { $in: [parentId] };
  }

  const categories = await CategoryService.getCategories({ query, sortBy, sortOrder });
  res.status(200).json({ categoriesList: categories });
});

const getCategoryById = asyncHandler(async (req: Request, res: Response) => {
  const categoryId = req.params.id;
  const category = await CategoryService.getCategoryById(categoryId);
  if (!category) {
    return res.status(404).json({ error: "Category not found" });
  }
  res.status(200).json(category);
});

const createAndUpdateCategory = asyncHandler(async (req: Request, res: Response) => {
  const { name, description, parentIdentifier } = req.body;
  let level = 0;
  let parentCategory = null;

  if (parentIdentifier) {
    parentCategory = mongoose.Types.ObjectId.isValid(parentIdentifier)
      ? await Category.findById(parentIdentifier)
      : await Category.findOne({ name: parentIdentifier });

    if (!parentCategory) {
      return res.status(404).json({ error: "Parent category not found" });
    }
    level = parentCategory.level + 1;
  }

  const existingCategory = await Category.findOne({ name: name });
  if (existingCategory) {
    return res.status(409).json({ error: "Category with the same name already exists" });
  }

  const categoryData = { name, description, parentCategory: parentCategory ? parentCategory._id : null, level, isActive: true, softDelete: false };
  const savedCategory = await Category.create(categoryData);
  res.status(201).json(savedCategory);
});

export default {
  getCategories,
  getCategoryById,
  createAndUpdateCategory,
};
