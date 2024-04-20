import express from "express";
import UserController from "../controllers/user.controller";
import authenticateToken from "../middleware/authenticate.middleware";

const router = express.Router();

router.get("/", authenticateToken, UserController.getAllUsers);
router.get("/:id", authenticateToken, UserController.getUserByID);
router.post("/create", authenticateToken, UserController.createUser);
router.put("/:id", authenticateToken, UserController.updateUser);

// router.delete('/api/users/:id', UserController.deleteUser);

export default router;
