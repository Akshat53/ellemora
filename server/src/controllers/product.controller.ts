import { Request, Response } from "express";
import productService from "../services/product.service";

const addProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const savedProduct = await productService.addProduct(productData);
    res.status(201).json(savedProduct);
  } catch (err) {
    console.error("Failed to create product:", err);
    res.status(500).json({ message: "Failed to create product" });
  }
};

export default {
  addProduct,
};
