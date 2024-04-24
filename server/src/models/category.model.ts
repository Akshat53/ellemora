// src/models/category.model.ts
import mongoose, { Schema } from "mongoose";
import { ICategory } from "../types/categories.types"; 

const categorySchema = new Schema<ICategory>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  parentCategory: { type: Schema.Types.ObjectId, ref: 'Category', default: null },
  level: { type: Number, required: true, default: 0 },
  isActive: { type: Boolean, required: true, default: true },
  softDelete: { type: Boolean, required: true, default: false },
}, {
  timestamps: true,
});

export default mongoose.model<ICategory>("Category", categorySchema);
