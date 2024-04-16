import mongoose, { Schema, Document } from "mongoose";

export interface User extends Document {
  isAdmin: boolean;
  role: "user" | "admin" | "superAdmin";
  firstName: string;
  lastName: string;
  email: string;
  mobile : string;
  password: string;
  softDelete: boolean;
  isActive: boolean;
}

const userSchema: Schema<User> = new Schema(
  {
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    role: {
      type: String,
      required: true,
      default: "user",
      enum: ["user", "admin", "superAdmin"],
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
   mobile: {
    type: String,
    required : true
    },
    password: {
      type: String,
      required: true,
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

export default mongoose.model<User>("User", userSchema);
