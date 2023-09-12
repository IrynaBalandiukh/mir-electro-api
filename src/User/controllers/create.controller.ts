import { isValidEmail, isValidPhoneNumber } from '../../helpers';
import { Controller } from '../../types';
import { UserService } from '../services/user.service';

export const createUserController: Controller = async (req, res) => {
  const userService = new UserService();

  const { name, email, phone } = req.body; // Receive data from the request body

  // We check the validity of the name
  if (name.length < 3) {
    return res.status(400).json({ error: 'The name must contain at least 3 characters' });
  }

  // We check the validity of the mail
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  // We check the validity of the eomer of the phone
  if (!isValidPhoneNumber(phone)) {
    return res.status(400).json({ error: 'Invalid phone number (expected format is +380XXXXXXXXX)' });
  }

  const existingUser = await userService.findByEmail(email);

  if (existingUser) {
    // If the user exists, we update his data as needed
    existingUser.name = name;
    existingUser.phone = phone;

    await existingUser.save();

    return res.status(200).json({ message: 'Your contact information has been successfully saved' });
  } else {
    // If the user does not exist, create a new user
    await userService.create({ name, email, phone });

    return res.status(200).json({ message: 'Your contact information has been successfully saved' });
  };
}
