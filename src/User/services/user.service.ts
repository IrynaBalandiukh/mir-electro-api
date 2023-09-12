import { User } from '../../models/User';

type CreateOptions = Pick<User, 'name' | 'email' | 'phone'>;

export class UserService {
  // A method to create a new user in the database based on the passed options
  create(options: CreateOptions) {
    return User.create(options);
  }

  // A method to retrieve all users from a database
  findAll() {
    return User.findAll();
  }

  // A method to get a user by email address
  findByEmail(email: string) {
    return User.findOne({
      where: { email },
    })
  };
}
