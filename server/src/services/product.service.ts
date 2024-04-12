import Product, { IProduct } from "../models/product.model";
import {IMedia} from "../models/media.model"

const addProduct = async (productData: any): Promise<IProduct> => {
  const newProduct = new Product(productData);
  const savedProduct = await newProduct.save();
  return savedProduct;
};

const getAllProducts = async (): Promise<IProduct[]> => {
  const products = await Product.find().populate('media'); 
  
  return products;
};

const getProductById = async (id: string): Promise<IProduct | null> => {
  const product = await Product.findById(id).populate('media'); 
  return product;
};

const getProductMedia = async (id: string): Promise<IMedia[]> => {
  try {
    const product = await Product.findById(id).populate('media');
    return product ? product.media : [];
  } catch (err) {
    console.error("Failed to get product media:", err);
    throw new Error("Failed to get product media");
  }
};

export default {
  addProduct,
  getAllProducts,
  getProductById,
  getProductMedia,
};
