import express from "express";
import userRoutes from "./src/routes/user.routes";

const app = express();
app.use(express.json());

app.use("/api/v1/users", userRoutes);

export default app;
