import { User } from '../../models/User';

type CreateOptions = Pick<User, 'name' | 'email' | 'phone'>;

export class UserService {
  // Метод для створення нового користувача в базі даних на основі переданих опцій
  create(options: CreateOptions) {
    return User.create(options);
  }

  // Метод для отримання всіх користувачів із бази даних
  findAll() {
    return User.findAll();
  }

  // Метод для отримання користувача за адресою електронної пошти
  findByEmail(email: string) {
    return User.findOne({
      where: { email }, // Умова пошуку за електронною поштою
    })
  };
}
