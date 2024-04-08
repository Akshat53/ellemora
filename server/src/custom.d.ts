import { User } from './models/user.model';
// import { Multer } from 'multer';
import { Request as ExpressRequest } from "express";


declare module 'express-serve-static-core' {
  interface Request {
    user?: User;
  }
}
interface MulterRequest extends ExpressRequest {
  file: any; 
}