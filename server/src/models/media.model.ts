
import mongoose from 'mongoose';

const fileSchema = new mongoose.Schema({
  path: { type: String, required: true }
});

const File = mongoose.model('File', fileSchema);

export default File;
