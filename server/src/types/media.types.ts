import { Schema, Document } from "mongoose";

export interface IMedia extends Document {
  productId: Schema.Types.ObjectId;
  type: string;
  url: string;
  filename: string;
  path: string;
}
