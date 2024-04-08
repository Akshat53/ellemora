import { Request, Response } from "express";
import MediaService from "../services/media.service";
import Product from "../models/product.model";

class MediaController {
  static async uploadMedia(req: Request, res: Response) {
    const files = req.files as Express.Multer.File[];
    const { productId } = req.body;

    if (!files) {
      return res.status(400).send({ error: "No files uploaded." });
    }

    try {
      const mediaArray = await MediaService.uploadMedia(files, productId);

      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).send({ error: "Product not found." });
      }

      product.media.push(...mediaArray);
      await product.save();

      res.status(200).send({ message: "Files uploaded successfully.", media: mediaArray });
    } catch (err:any) {
      res.status(500).send({ error: err.message });
    }
  }
}

export default MediaController;
