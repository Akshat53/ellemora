import express from "express";
import MediaController from "../controllers/media.controller";
import uploadMiddleware from "../middleware/upload.middleware";

const router = express.Router();

router.post("/upload", uploadMiddleware, MediaController.uploadMedia);

export default router;
