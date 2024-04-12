import { Request, Response } from 'express';
import { ExcelService } from '../services/productUploader.service';

export class ExcelController {
  private excelService: ExcelService;

  constructor() {
    this.excelService = new ExcelService();
  }

  upload = async (req: Request, res: Response) => {
    if (!req.file) {
      res.status(400).send('No file was uploaded');
      return;
    }

    try {
      await this.excelService.parseAndStoreFile(req.file);
      res.status(200).send('Data inserted successfully');
    } catch (err) {
      console.log(err);
      res.status(500).send('Error occurred while inserting data');
    }
  }
}
