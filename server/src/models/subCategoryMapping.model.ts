import mongoose, { Schema, Document } from 'mongoose';

export interface ISubCategoryMapping extends Document {
  subCategoryId: mongoose.Types.ObjectId;
  categoryId: mongoose.Types.ObjectId;
  softDelete: boolean;
  isActive: boolean;
}

const subCategoryMappingSchema: Schema = new Schema({
  subCategoryId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'SubCategory',
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Category',
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

const SubCategoryMapping = mongoose.model<ISubCategoryMapping>('SubCategoryMapping', subCategoryMappingSchema);

export default SubCategoryMapping;
