
import { Request, Response } from 'express';
import { uploadFile } from '../services/media.service';

export async function upload(req: Request, res: Response): Promise<void> {
  try {
    await uploadFile(req);
    res.status(200).send('File uploaded successfully');
  } catch (err) {
    console.error('Error uploading file:', err);
    res.status(500).send('Error uploading file');
  }
}
