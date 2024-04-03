import mongoose, { Schema, Document } from 'mongoose';

interface IProduct extends Document {
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
  colors: Array<{ name: string; code: string }>;
  sizes: string[];
  variants: Array<{
    color: number;
    sizes: string[];
    
  }>;
  media: Array<{ type: 'photo' | 'video'; url: string }>;
  primaryVariant: boolean;
  softDelete: boolean;
  isActive: boolean;
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
  discountType: { type: String, required: true },
  colors: [
    {
      name: { type: String, required: true },
      code: { type: String, required: true }
    }
  ],
  sizes: { type: [String], required: true },
  variants: [
    {
      color: { type: Number, required: true },
      sizes: { type: [String], required: true },
    
    }
  ],
  media: [
    {
      type: { type: String, enum: ['photo', 'video'], required: true },
      url: { type: String, required: true }
    }
  ],
  primaryVariant: { type: Boolean, required: true },
  softDelete: { type: Boolean, required: true, default: false },
  isActive: { type: Boolean, required: true, default: true },
});

const Product = mongoose.model<IProduct>('Product', productSchema);
export default Product;
