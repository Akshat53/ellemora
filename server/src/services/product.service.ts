import Product from "../models/product.model"; 
const addProduct = async (productData: any) => {
  try {
    const newProduct = new Product(productData);

    const savedProduct = await newProduct.save();
    return savedProduct;
  } catch (err) {
    console.error("Failed to create product:", err);
    throw new Error("Failed to create product");
  }
};

export default {
  addProduct,
};
