import { Router } from 'express';

import { createUserController } from '../User/controllers/create.controller';
import { getAllUsersController } from '../User/controllers/getAll.controller';

export const userRouter = Router();

// Route POST '/' for creating new user
userRouter.post('/', createUserController);

// Route GET '/' to get all users
userRouter.get('/', getAllUsersController);
