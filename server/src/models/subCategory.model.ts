import mongoose, { Schema, Document } from 'mongoose';

export interface ISubCategory extends Document {
  name: string;
  description?: string;
  softDelete: boolean;
  isActive: boolean;
}

const subCategorySchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
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

const SubCategory = mongoose.model<ISubCategory>('SubCategory', subCategorySchema);

export default SubCategory;
