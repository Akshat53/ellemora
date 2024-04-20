import Product from "../models/product.model";
import { IMedia } from "src/types/media.types";
import { QueryFilters, GetOptions, IProduct } from "src/types/product.types";

const addProduct = async (productData: any): Promise<IProduct> => {
  const newProduct = new Product(productData);
  const savedProduct = await newProduct.save();
  return savedProduct;
};

const getAllProducts = async (options: GetOptions): Promise<IProduct[]> => {
  const { query, sortBy, sortOrder, limit, skip } = options;
  try {
    const products = await Product.find(query)
      .sort({ [sortBy]: sortOrder })
      .skip(skip as number)
      .limit(limit as number)
      .populate("media");

    return products;
  } catch (error: any) {
    throw new Error("Error fetching products: " + error.message);
  }
};

const getProductById = async (id: string): Promise<IProduct | null> => {
  const product = await Product.findById(id).populate("media");
  return product;
};

const getProductMedia = async (id: string): Promise<IMedia[]> => {
  try {
    const product = await Product.findById(id).populate("media");
    return product ? product.media : [];
  } catch (err) {
    console.error("Failed to get product media:", err);
    throw new Error("Failed to get product media");
  }
};

const countProducts = async (query: QueryFilters): Promise<number> => {
  return Product.countDocuments(query);
};

export default {
  addProduct,
  getAllProducts,
  getProductById,
  getProductMedia,
  countProducts,
};
