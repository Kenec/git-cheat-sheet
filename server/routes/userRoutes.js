import express from 'express';
import controllers from '../controllers';

const userController = controllers.users;
const userRoutes = express.Router();

userRoutes.get('/signup', userController.signup);
userRoutes.get('/signin', userController.signin);

export default userRoutes;