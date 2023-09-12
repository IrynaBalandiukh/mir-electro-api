import { Router } from 'express';

import { createUserController } from '../User/controllers/create.controller';
import { getAllUsersController } from '../User/controllers/getAll.controller';

export const userRouter = Router();

// Маршрут POST '/' для створення нового користувача
userRouter.post('/', createUserController);

// Маршрут GET '/' для отримання всіх користувачів
userRouter.get('/', getAllUsersController);
