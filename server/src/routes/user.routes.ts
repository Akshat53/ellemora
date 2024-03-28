import express from 'express';
import UserController from '../controllers/user.controller';

const router = express.Router();

router.get('/', UserController.getAllUsers);
router.post('/create', UserController.createUser);
router.put('/:id', UserController.updateUser);

// router.delete('/api/users/:id', UserController.deleteUser);




export default router;