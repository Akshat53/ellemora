import express from "express";
import dummyController from "../controllers/dummy.controller";

const router = express.Router();

router.get("/price-update", dummyController.updateProductPrices);

export default router;
