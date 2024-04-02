import { Request, Response } from "express";
import UserService from "../services/user.service";
import bcrypt from 'bcrypt';

class UserController {
  static async getAllUsers(req: Request, res: Response) {
    try {
      const users = await UserService.getAllUsers();
      res.json(users);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  

  static async createUser(req: Request, res: Response) {
    try {
      const { firstName, lastName, email, mobile, password } = req.body;

     
      const hashedPassword = await bcrypt.hash(password, 10);

     
      const userData = {
        firstName,
        lastName,
        email,
        mobile,
        password: hashedPassword,
      };

      const newUser = await UserService.createUser(userData);
      res.status(201).json(newUser);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  // update existing  user

  static async updateUser(req: Request, res: Response) {
    try {
      const userId = req.params.id;
      const userData = req.body;
      const updatedUser = await UserService.updateUser(userId, userData);
      res.json(updatedUser);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  

  static async getUserByID(req: Request, res: Response) {
    try {
      const userId = req.params.id;
      const getUser = await UserService.getUserById(userId);
      res.json(getUser);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default UserController;
