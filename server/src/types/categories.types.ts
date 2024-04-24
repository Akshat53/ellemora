import { Schema, Document, Types } from "mongoose";



export interface ICategory extends Document {
  name: string;
  description: string;
  parentCategory?: Types.ObjectId | null;
  level: number;
  isActive: boolean;
  softDelete: boolean;
}

export interface CategoriesData {
  categoriesList: ICategory[];
}
