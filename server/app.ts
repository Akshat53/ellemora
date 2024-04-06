import express from "express";
import userRoutes from "./src/routes/user.routes";
import authRoutes from "./src/routes/auth.route"
import productRoutes from "./src/routes/product.route"
import categoryRoutes from "./src/routes/category.route"
import mediaRoutes from "./src/routes/media.route"

const app = express();
app.use(express.json());

app.use("/api/v1", userRoutes);
app.use("/api/v1", authRoutes);
app.use("/api/v1", productRoutes);
app.use("/api/v1", categoryRoutes);
app.use("/api/v1", mediaRoutes)


export default app;
