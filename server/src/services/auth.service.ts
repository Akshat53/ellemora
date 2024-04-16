import userModel, { User as UserModel } from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

type UserType = UserModel & { _id: string };

class AuthService {
  static async validatePassword(
    user: UserType,
    password: string
  ): Promise<boolean> {
    return bcrypt.compare(password, user.password);
  }

  static generateAuthToken(user: UserType): string {
    return jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, {
      expiresIn: "1h",
    });
  }
}

export default AuthService;
