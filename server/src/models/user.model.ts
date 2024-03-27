import mongoose, { Schema, Document } from "mongoose";

export interface User extends Document {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address: string;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  isActive: boolean;
}

const userSchema = new Schema<User>(
  {
    username: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    collection: "Users",
  }
);

export default mongoose.model<User>("User", userSchema);
