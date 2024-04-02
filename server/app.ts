import express from "express";
import userRoutes from "./src/routes/user.routes";
import authRoutes from "./src/routes/auth.route"
import productRoutes from "./src/routes/product.route"

const app = express();
app.use(express.json());

app.use("/api/v1", userRoutes);
app.use("/api/v1", authRoutes);
app.use("/api/v1", productRoutes);


export default app;
