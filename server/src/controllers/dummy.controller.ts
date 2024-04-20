import Product from "../models/product.model";

async function updateProductPrices() {
  const products = await Product.find(); // Fetch all products

  products.forEach(async (product) => {
    const randomPrice = Math.floor(Math.random() * 100) + 1;
    product.price = randomPrice;
    await product.save();
  });

  console.log("Prices updated with random values.");
};

export default {
  updateProductPrices,
};
