import { Request, Response } from "express";

import User, { User as UserType } from "../models/user.model";
import AuthService from "../services/auth.service"; // Assuming this is your service class

class AuthController {
  static async loginUser(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const isPasswordValid = await AuthService.validatePassword(user, password);

      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const token = AuthService.generateAuthToken(user);

      res.json({ token });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default AuthController;
