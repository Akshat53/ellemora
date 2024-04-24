import mongoose from "mongoose";
import * as xlsx from "xlsx";
import csv from "csv-parser";
import * as fs from "fs";
import Product from "../models/product.model";
import Media from "../models/media.model";
import Category from "../models/category.model";
import { IProduct } from "src/types/product.types";
import { ICategory } from "src/types/categories.types";

export class ExcelService {
  async findOrCreateCategory(categoryPath: string): Promise<mongoose.Types.ObjectId | null> {
    const categories = categoryPath.split('/');
    let currentParentId: mongoose.Types.ObjectId | null = null;
    let currentLevel = 0;

    for (const name of categories) {
      let category: ICategory | null = await Category.findOne({ name, parentCategory: currentParentId });

      if (!category) {
        category = await Category.create({
          name,
          parentCategory: currentParentId,
          level: currentLevel,
          isActive: true,
          softDelete: false,
          description: "Auto-generated category"
        });
      }

      currentParentId = category._id;
      currentLevel = category.level + 1;
    }

    return currentParentId;  
  }

  

  async parseAndStoreFile(file: Express.Multer.File): Promise<IProduct[]> {
    let data: any[] = [];
    if (
      file.mimetype === "application/vnd.ms-excel" ||
      file.mimetype === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      const workbook = xlsx.readFile(file.path);
      const sheetNameList = workbook.SheetNames;
      data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetNameList[0]]);
    } else if (file.mimetype === "text/csv") {
      await new Promise((resolve, reject) => {
        fs.createReadStream(file.path)
          .pipe(csv())
          .on("data", (row) => data.push(row))
          .on("end", () => {
            console.log("CSV file successfully processed");
            resolve(true);
          })
          .on("error", reject);
      });
    }

    if (data.length > 0) {
      const productPromises = data.map(async (item) => {
        const categoryId = await this.findOrCreateCategory(item.categoryPath || "Default/Category/Path");

        const productData = {
          name: item.name || "Default Name",
          description: item.description || "Default Description",
          shortDescription: item.shortDescription || "Default Short Description",
          length: item.length || "Default Length",
          fit: item.fit || "Default Fit",
          sleeveTypes: item.sleeveTypes ? item.sleeveTypes.split(";") : [],
          pattern: item.pattern || "Default Pattern",
          components: item.components ? item.components.split(";") : [],
          numberOfComponents: item.numberOfComponents || 1,
          neckline: item.neckline || "Default Neckline",
          fabric: item.fabric || "Default Fabric",
          typeOfWork: item.typeOfWork || "Default TypeOfWork",
          core: item.core || "Default Core",
          disclaimer: item.disclaimer || "Default Disclaimer",
          returnPolicy: item.returnPolicy || "Default Return Policy",
          price: item.price || 0,
          discount: item.discount || 0,
          discountType: item.discountType || "None",
          color: {
            name: item["color.name"] || "Default Color Name",
            code: item["color.code"] || "#FFFFFF",
          },
          sizes: item.sizes ? item.sizes.split(";") : [],
          categoryId,
          tags: item.tags ? item.tags.split(";") : [],
          isActive: typeof item.isActive === 'string' ? item.isActive.toLowerCase() === 'true' : !!item.isActive,
          softDelete: typeof item.softDelete === 'string' ? item.softDelete.toLowerCase() === 'true' : !!item.softDelete,
          primaryVariant: typeof item.primaryVariant === 'string' ? item.primaryVariant.toLowerCase() === 'true' : !!item.primaryVariant,
        };

        const newProduct = await Product.create(productData);

        if (item.media && item.media.trim()) {
          const imageURLs = item.media.split(";");
          const mediaDocuments = imageURLs.map((url:string) => ({
            productId: newProduct._id,
            type: "image", 
            url: url,
            filename: url.split("/").pop(),
            path: url,
          }));

          const createdMedia = await Media.insertMany(mediaDocuments);
          await Product.findByIdAndUpdate(newProduct._id, { $set: { media: createdMedia.map((media) => media._id) } });
        }

        return newProduct;
      });

      return Promise.all(productPromises);
    } else {
      throw new Error("No data to insert");
    }
  }
}
