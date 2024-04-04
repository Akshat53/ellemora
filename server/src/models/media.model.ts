import mongoose, { Schema, Document } from 'mongoose';

interface IMedia extends Document {
  type: 'photo' | 'video';
  url: string;
}

const mediaSchema = new Schema<IMedia>({
  type: { type: String, enum: ['photo', 'video'], required: true },
  url: { type: String, required: true }
});

const Media = mongoose.model<IMedia>('Media', mediaSchema);

export default Media;
