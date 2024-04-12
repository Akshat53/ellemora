  import mongoose, { Schema, Document } from "mongoose";

  import { IMedia } from './media.model';
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
    color: { name: string; code: string }; 
    sizes: string[];
    categoryId: Schema.Types.ObjectId;
    media: IMedia[];
    relationId?: string;
    primaryVariant: boolean;
    softDelete: boolean;
    isActive: boolean;
    tags: string[];
    masterProduct: Schema.Types.ObjectId | null;
  }

  const productSchema = new Schema<IProduct>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    shortDescription: { type: String, required: true },
    length: { type: String, required: true },
    fit: { type: String, required: true },
    sleeveTypes: { type: [String], required: true },
    pattern: { type: String, required: true },
    components: { type: [String], required: true },
    numberOfComponents: { type: Number, required: true },
    neckline: { type: String, required: true },
    fabric: { type: String, required: true },
    typeOfWork: { type: String, required: true },
    core: { type: String, required: true },
    disclaimer: { type: String, required: true },
    returnPolicy: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, required: true },
    media: [{ type: Schema.Types.ObjectId, ref: 'Media' }],
    tags: { type: [String], required: true },
    discountType: { type: String, required: true },
    color: { 
      name: { type: String, required: true },
      code: { type: String, required: true },
    },
    categoryId: { type: Schema.Types.ObjectId, ref: "Category"},
    sizes: { type: [String], required: true },
    relationId: { type: String, required: false },
    primaryVariant: { type: Boolean, default:true},
    softDelete: { type: Boolean, required: true, default: false },
    isActive: { type: Boolean, required: true, default: true },
    masterProduct: { type: Schema.Types.ObjectId, ref: "Product", default: null },
  });

  productSchema.pre<IProduct>("save", async function (next) {
    if (this.relationId) {
      try {
        const existingProduct = await mongoose.model<IProduct>("Product").findOne({
          _id: this.relationId,
        });
        if (existingProduct) {
          this.masterProduct = existingProduct._id;

          this.primaryVariant = false;
          next();
        } else {
          throw new Error(
            "Invalid relationId: No product found with the given relationId"
          );
        }
      } catch (error: any) {
        next(error);
      }
    } else {
      next();
    }
  });

  const Product = mongoose.model<IProduct>("Product", productSchema);
  export default Product;
