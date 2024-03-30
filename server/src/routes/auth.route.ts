import express from "express";
import AuthController from "../controllers/auth.controller";


const router = express.Router();
router.post('/auth/login', AuthController.loginUser);


export default router;              