import express from "express";
import UserController from "../controllers/user.controller";
import  authenticateToken  from "../middleware/authenticate.middleware";

const router = express.Router();

router.get("/users", authenticateToken, UserController.getAllUsers);
router.post("/users/create", authenticateToken, UserController.createUser);
router.put("/:id", authenticateToken, UserController.updateUser);
router.get("/users/:id", authenticateToken, UserController.getUserByID);

// router.delete('/api/users/:id', UserController.deleteUser);

export default router;
