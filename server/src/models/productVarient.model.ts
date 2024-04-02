import mongoose, { Schema, Document } from 'mongoose';

export interface IProductVariant extends Document {
  productId: mongoose.Types.ObjectId;
  uniqueVariantCode: string;
  name: string;
  description?: string;
  shortDescription?: string;
  length?: string;
  fit?: string;
  sleeveType?: string;
  pattern?: string;
  noOfComponents?: number;
  components?: string;
  neckline?: string;
  fabric?: string;
  typeOfWork?: string;
  core?: string;
  disclaimer?: string;
  returnPolicy?: string;
  price: number;
  discount: number;
  discountType: 'amount' | 'percent';
  size: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';
  softDelete: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const productVariantSchema: Schema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Product',
  },
  uniqueVariantCode: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  shortDescription: {
    type: String,
    required: false,
  },
  length: {
    type: String,
    required: false,
  },
  fit: {
    type: String,
    required: false,
  },
  sleeveType: {
    type: String,
    required: false,
  },
  pattern: {
    type: String,
    required: false,
  },
  noOfComponents: {
    type: Number,
    required: false,
  },
  components: {
    type: String,
    required: false,
  },
  neckline: {
    type: String,
    required: false,
  },
  fabric: {
    type: String,
    required: false,
  },
  typeOfWork: {
    type: String,
    required: false,
  },
  core: {
    type: String,
    required: false,
  },
  disclaimer: {
    type: String,
    required: false,
  },
  returnPolicy: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  discount: {
    type: Number,
    required: true,
  },
  discountType: {
    type: String,
    required: true,
    enum: ['amount', 'percent'],
  },
  size: {
    type: String,
    required: true,
    enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
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
}, {
  timestamps: true,
});

const ProductVariant = mongoose.model<IProductVariant>('ProductVariant', productVariantSchema);

export default ProductVariant;
