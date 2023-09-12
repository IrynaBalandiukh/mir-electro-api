import { Controller } from '../../types';
import { UserService } from '../services/user.service';

export const getAllUsersController: Controller = async (req, res) => {
  const userService = new UserService();

  // We call the `findAll` function of the `userService` service to get all users
  const users = await userService.findAll();

  res.send(users);
}
