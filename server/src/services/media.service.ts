
import { Request } from 'express';
import { firebaseAdmin } from '../config/firebase';
import File from '../models/media.model'; // Import your Mongoose model for storing file paths

export async function uploadFile(req: Request): Promise<void> {
  if (!req.file) {
    throw new Error('No file uploaded.');
  }

  const bucket = firebaseAdmin.storage().bucket();
  const file = bucket.file(req.file.originalname);

  const stream = file.createWriteStream({
    metadata: {
      contentType: req.file.mimetype
    }
  });

  await new Promise<void>((resolve, reject) => {
    stream.on('error', (err) => {
      console.error('Error uploading file:', err);
      reject(err);
    });

    stream.on('finish', async () => {
      console.log('File uploaded successfully');

      
      const filePath = `gs://${file.metadata.bucket}/${file.name}`;
      const newFile = new File({ path: filePath });
      await newFile.save();

      
      const storedFile = await File.findOne({ path: filePath });

      if (!storedFile) {
        throw new Error('File path not found in database.');
      }

      
      const storagePath = storedFile.path;
      
      
      resolve();
    });

   
    stream.end(req.file!.buffer);
  });
}
