import express from "express";
import AuthController from "../controllers/auth.controller";

const router = express.Router();
router.post("/login", AuthController.loginUser);

export default router;
