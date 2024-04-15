import { firebaseAdmin } from "../config/firebase";
import Media, { IMedia } from "../models/media.model";

class MediaService {
  static async uploadMedia(files: Express.Multer.File[], productId: string): Promise<IMedia[]> {
    const bucket = firebaseAdmin.storage().bucket();
    const mediaPromises: Promise<IMedia>[] = [];

    let foldername = productId
    for (const file of files) {
      const blob = bucket.file(`${foldername}/${file.originalname}`);
      const blobStream = blob.createWriteStream();

      const mediaPromise = new Promise<IMedia>((resolve, reject) => {
        blobStream.on("error", (err) => {
          reject(err);
        });

        blobStream.on("finish", async () => {
          const url = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodeURIComponent(blob.name)}?alt=media`;

          const media = new Media({
            productId,
            type: "image",
            url,
            filename: file.originalname,
            path: blob.name,
          });

          await media.save();
          resolve(media);
        });

        blobStream.end(file.buffer);
      });

      mediaPromises.push(mediaPromise);
    }

    return Promise.all(mediaPromises);
  }
}

export default MediaService;
