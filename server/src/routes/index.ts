import express from "express";

import userRoutes from "./user.routes";
import authRoutes from "./auth.route";
import productRoutes from "./product.route";
import categoryRoutes from "./category.route";
import mediaRoutes from "./media.route";
import dummyRoutes from "./dummy.route";

const apiRouter = express.Router();

apiRouter.use("/users", userRoutes);
apiRouter.use("/auth", authRoutes);
apiRouter.use("/products", productRoutes);
apiRouter.use("/categories", categoryRoutes);
apiRouter.use("/upload", mediaRoutes);
apiRouter.use("/dummy", dummyRoutes);

export default apiRouter;
