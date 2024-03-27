import User, { User as UserType } from "../models/user.model";

class UserService {
  static async getAllUsers(): Promise<UserType[]> {
    return User.find();
  }

  static async createUser(userData: UserType): Promise<UserType> {
    const newUser = new User(userData);
    return newUser.save();
  }
  static async updateUser(
    userId: string,
    userData: UserType
  ): Promise<UserType | null> {
    console.log(userId);
    return User.findByIdAndUpdate(userId, userData, { new: true });
  }
}

export default UserService;
