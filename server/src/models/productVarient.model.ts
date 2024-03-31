import { Document, Schema, model, Types } from 'mongoose';

interface IProductVariant extends Document {
  productId: Types.ObjectId;
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
  primaryTags?: Types.ObjectId[];
  secondaryTags?: Types.ObjectId[];
  category?: Types.ObjectId[];
  subCategory?: Types.ObjectId[];
  price: number;
  discount: number;
  discountType: 'amount' | 'percent';
  size: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';
  color: string;
  softDelete: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const productVariantSchema = new Schema<IProductVariant>(
  {
    productId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Product",
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
    primaryTags: [{
      type: Schema.Types.ObjectId,
      required: false,
      ref: "Tag",
    }],
    secondaryTags: [{
      type: Schema.Types.ObjectId,
      required: false,
      ref: "Tag",
    }],
    category: [{
      type: Schema.Types.ObjectId,
      required: false,
      ref: "Category",
    }],
    subCategory: [{
      type: Schema.Types.ObjectId,
      required: false,
      ref: "SubCategory",
    }],
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
      enum: ['amount', 'percent']
    },
    size: {
      type: String,
      required: true,
      enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
    },
    color: {
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

const ProductVariant = model<IProductVariant>('ProductVariant', productVariantSchema);

export default ProductVariant;
