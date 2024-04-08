import mongoose, { Schema, Document } from "mongoose";

export interface IMedia extends Document {
  productId: Schema.Types.ObjectId;
  type: string;
  url: string;
  filename: string;
  path: string;
}

const mediaSchema = new Schema<IMedia>({
  productId: { type: Schema.Types.ObjectId, required: true },
  type: { type: String, enum: ["image", "video"], required: true },
  url: { type: String, required: true },
  filename: { type: String, required: true },
  path: { type: String, required: true },
}, { timestamps: true });

const Media = mongoose.model<IMedia>("Media", mediaSchema);
export default Media;
