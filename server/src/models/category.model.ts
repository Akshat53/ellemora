import mongoose, { Schema, Document } from "mongoose";

export interface ICategory extends Document {
  name: string;
  description: string;
  parentCategory?: Schema.Types.ObjectId | null;
  children?: ICategory[];
  isActive: boolean;
  softDelete: boolean;
}

const categorySchema = new Schema<ICategory>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  parentCategory: { type: Schema.Types.ObjectId, ref: "Category", default: null },
  children: [{ type: Schema.Types.ObjectId, ref: "Category" }],
  isActive: { type: Boolean, required: true, default: true },
  softDelete: { type: Boolean, required: true, default: false },
});
export default mongoose.model<ICategory>("Category", categorySchema);