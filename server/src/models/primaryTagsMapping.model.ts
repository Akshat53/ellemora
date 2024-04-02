import mongoose, { Schema, Document } from 'mongoose';

export interface IPrimaryTagsMapping extends Document {
  variantId: mongoose.Types.ObjectId;
  primaryTagId: mongoose.Types.ObjectId;
  softDelete: boolean;
  isActive: boolean;
}

const primaryTagsMappingSchema: Schema = new Schema({
  variantId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'ProductVariant',
  },
  primaryTagId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'PrimaryTag',
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

const PrimaryTagsMapping = mongoose.model<IPrimaryTagsMapping>('PrimaryTagsMapping', primaryTagsMappingSchema);

export default PrimaryTagsMapping;
