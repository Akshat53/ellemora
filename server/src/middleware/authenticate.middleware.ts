import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import User, { User as UserModel } from "../models/user.model";

interface CustomRequest extends Request {
  user?: UserModel;
}

const authenticateToken = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(
    token,
    process.env.JWT_SECRET as string,
    async (err, decodedToken) => {
      if (err) {
        return res.status(403).json({ message: "Invalid token" });
      }

      const userId = (decodedToken as JwtPayload).id;
      try {
        const user = await User.findById(userId);
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }
        req.user = user;
        next();
      } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
      }
    }
  );
};

export default authenticateToken;
