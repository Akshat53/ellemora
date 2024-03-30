import express from "express";
import userRoutes from "./src/routes/user.routes";
import authRoutes from "./src/routes/auth.route"

const app = express();
app.use(express.json());

app.use("/api/v1", userRoutes);
app.use("/api/v1", authRoutes);


export default app;
