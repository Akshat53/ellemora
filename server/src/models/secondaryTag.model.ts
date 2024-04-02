import mongoose, { Schema, Document } from 'mongoose';

export interface ISecondaryTag extends Document {
  name: string;
  softDelete: boolean;
  isActive: boolean;
}

const secondaryTagSchema: Schema = new Schema({
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

const SecondaryTag = mongoose.model<ISecondaryTag>('SecondaryTag', secondaryTagSchema);

export default SecondaryTag;
