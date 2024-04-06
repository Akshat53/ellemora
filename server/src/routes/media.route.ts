
import express from "express";
import multer from "multer";

import { upload } from "../controllers/media.controller";

const router = express.Router();

const storage = multer.memoryStorage();
const uploadMiddleware = multer({ storage: storage }).single("image");

router.post("/upload", uploadMiddleware, upload);

export default router;
