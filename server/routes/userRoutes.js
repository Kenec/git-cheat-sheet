import express from 'express';
import controllers from '../controllers';
import userMiddleware from '../middlewares/user';

const userController = controllers.users;
const userRoutes = express.Router();

userRoutes.post('/signup',
  userMiddleware.validateUsername,
  userMiddleware.validateEmail,
  userMiddleware.validatePassword,
  userMiddleware.validatePasswordMatch, 
  userController.signup);
  
userRoutes.post('/signin',
  userMiddleware.validateEmail,
  userMiddleware.validatePassword,
  userController.signin);

export default userRoutes;