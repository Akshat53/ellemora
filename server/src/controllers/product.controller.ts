import { Request, Response } from "express";
import productService from "../services/product.service";
import { ProductPaginationData, QueryFilters } from "src/types/product.types";
import ServerConstants from "../constants/constants";

const getAllProducts = async (req: Request, res: Response) => {
  const {
    page = "1",
    limit = "10",
    categoriesId = "",
    priceRange = "",
    sizes = "",
    colorsId = "",
    orderBy = "desc",
  } = req.query;

  const sortBy =
    typeof req.query.sortBy === "string"
      ? req.query.sortBy
      : ServerConstants.sortBy;
  const sortOrder =
    orderBy === "asc"
      ? ServerConstants.orderByAsc
      : ServerConstants.orderByDesc;

  try {
    const pageNum = parseInt(page as string);
    const limitNum = parseInt(limit as string);

    const query: QueryFilters = {};
    if (typeof categoriesId === "string" && categoriesId) {
      query.categories = {
        $in: categoriesId.split(",").map((id) => id.trim()),
      };
    }

    if (typeof priceRange === "string" && priceRange) {
      const [min, max] = priceRange.split(":").map(Number);
      query.price = { $gte: min, $lte: max };
    }

    if (typeof sizes === "string" && sizes) {
      query.sizes = { $in: sizes.split(",").map((size) => size.trim()) };
    }

    if (typeof colorsId === "string" && colorsId) {
      query.colors = { $in: colorsId.split(",").map((id) => id.trim()) };
    }

    const products = await productService.getAllProducts({
      query,
      sortBy,
      sortOrder,
      limit: limitNum,
      skip: (pageNum - 1) * limitNum,
    });

    const totalProducts = await productService.countProducts(query);

    const data: ProductPaginationData = {
      productsList: products,
      totalProducts,
      limit: limitNum,
      page: pageNum,
      totalPages: Math.ceil(totalProducts / limitNum),
      start: (pageNum - 1) * limitNum,
    };

    res.status(200).json(data);
  } catch (err) {
    console.error("Failed to get products:", err);
    res.status(500).send("Failed to get products");
  }
};

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
