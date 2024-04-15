import { Request, Response } from "express";
import productService from "../services/product.service";
import { ProductList } from "src/interface/display/products.interface";

const addProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const savedProduct = await productService.addProduct(productData);
    res.status(200).json(savedProduct);
  } catch (err) {
    console.error("Failed to create product:", err);
    res.status(500).send("Failed to create product");
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await productService.getAllProducts();
    let data = {
      productsList: products,
      limit: 10,
      page: 1,
      start: 0,
    };
    res.status(200).json(data);
  } catch (err) {
    console.error("Failed to get products:", err);
    res.status(500).send("Failed to get products");
  }
};

const getProductById = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const product = await productService.getProductById(productId);
    let data = {
      productDetails: product,
    };
    res.status(200).json(data);
  } catch (err) {
    console.error("Failed to get product:", err);
    res.status(500).send("Failed to get product");
  }
};

const getProductMedia = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const media = await productService.getProductMedia(productId);
    res.status(200).json(media);
  } catch (err) {
    console.error("Failed to get product media:", err);
    res.status(500).send("Failed to get product media");
  }
};

export default {
  addProduct,
  getAllProducts,
  getProductById,
  getProductMedia,
};
