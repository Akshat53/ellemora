import { Schema, Document, PopulateOptions, Types } from "mongoose";
import { IMedia } from "./media.types";

export interface QueryFilters {
  categories?: { $in: string[] };
  price?: { $gte: number; $lte: number };
  sizes?: { $in: string[] };
  colors?: { $in: string[] };
  parentCategory?: { $in: string[] };
}

export interface GetOptions {
  query: QueryFilters;
  sortBy: string;
  sortOrder: 1 | -1;
  limit?: number;
  skip?: number;
}

export interface IProduct extends Document {
  name: string;
  description: string;
  shortDescription: string;
  length: string;
  fit: string;
  sleeveTypes: string[];
  pattern: string;
  components: string[];
  numberOfComponents: number;
  neckline: string;
  fabric: string;
  typeOfWork: string;
  core: string;
  disclaimer: string;
  returnPolicy: string;
  price: number;
  discount: number;
  discountType: string;
  color: [{ name: string; code: string }];
  sizes: string[];

  relationId?: string;
  primaryVariant: boolean;
  softDelete: boolean;
  isActive: boolean;
  tags: string[];
  categoryId: Types.ObjectId;
  media: IMedia[];
  masterProduct: Types.ObjectId | null;
}

export interface ProductPaginationData {
  productsList: IProduct[];
  totalProducts: number;
  limit: number;
  page: number;
  totalPages: number;
  start: number;
}
