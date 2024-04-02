import mongoose, { Schema, Document } from 'mongoose';

export interface IPrimaryTag extends Document {
  name: string;
  softDelete: boolean;
  isActive: boolean;
}

const primaryTagSchema: Schema = new Schema({
  name: {
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
});

const PrimaryTag = mongoose.model<IPrimaryTag>('PrimaryTag', primaryTagSchema);

export default PrimaryTag;
