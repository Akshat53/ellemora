import mongoose, { Schema, Document } from 'mongoose';

export interface ISecondaryTagsMapping extends Document {
  variantId: mongoose.Types.ObjectId;
  secondaryTagId: mongoose.Types.ObjectId;
  softDelete: boolean;
  isActive: boolean;
}

const secondaryTagsMappingSchema: Schema = new Schema({
  variantId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'ProductVariant',
  },
  secondaryTagId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'SecondaryTag',
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

const SecondaryTagsMapping = mongoose.model<ISecondaryTagsMapping>('SecondaryTagsMapping', secondaryTagsMappingSchema);

export default SecondaryTagsMapping;
