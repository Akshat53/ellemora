import userModel, { User as UserModel } from "../models/user.model";


type UserType = UserModel & { _id: string };

class UserService {
  static async getAllUsers(): Promise<UserType[]> {
    return userModel.find();
  }

  static async createUser(userData: Partial<UserType>): Promise<UserType> {
    const newUser = new userModel(userData);
    return newUser.save();
  }
  static async updateUser(userId: string, userData: UserType): Promise<UserType | null> {
    console.log(userId);
    return userModel.findByIdAndUpdate(userId, userData, { new: true });
  }

  static async getUserById(userId: string): Promise<UserType | null> {
    return userModel.findById(userId);
  }

  static async findUserByEmail(email: string): Promise<UserType | null> {
    return userModel.findOne({ email });
  }


}

export default UserService;
