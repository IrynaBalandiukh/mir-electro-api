import { Controller } from '../../types';
import { UserService } from '../services/user.service';

export const getAllUsersController: Controller = async (req, res) => {
  const userService = new UserService();

  // Викликаємо функцію `findAll` сервісу `userService` для отримання всіх користувачів
  const users = await userService.findAll();

  res.send(users);
}
