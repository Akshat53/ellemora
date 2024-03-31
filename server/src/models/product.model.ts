import mongoose, { Schema, Document } from "mongoose";

export interface Product extends Document {
  uniqueProductCode: string;
  softDelete: boolean;
  isActive: boolean;
}

const productSchema: Schema<Product> = new Schema(
  {
    uniqueProductCode: {
      type: String,
      required: true,
      unique: true,
    },
    softDelete: {
      type: Boolean,
      required: true,
      default: false,
    },
    isActive: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model<Product>("Product ", productSchema);
