import { isValidEmail, isValidPhoneNumber } from '../../helpers';
import { Controller } from '../../types';
import { UserService } from '../services/user.service';

export const createUserController: Controller = async (req, res) => {
  const userService = new UserService();

  const { name, email, phone } = req.body; // Отримуємо дані з тіла запиту

  // Перевіряємо валідність імені
  if (name.length < 3) {
    return res.status(400).json({ error: 'The name must contain at least 3 characters' });
  }

  // Перевіряємо валідність пошти
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  // Перевіряємо валідність еомеру телефону
  if (!isValidPhoneNumber(phone)) {
    return res.status(400).json({ error: 'Invalid phone number (expected format is +380XXXXXXXXX)' });
  }

  const existingUser = await userService.findByEmail(email);

  if (existingUser) {
    // Якщо користувач існує, оновлюємо його дані за потребою
    existingUser.name = name;
    existingUser.phone = phone;

    await existingUser.save();

    return res.status(200).json({ message: 'Your contact information has been successfully saved' });
  } else {
    // Якщо користувач не існує, створюємо нового користувача
    await userService.create({ name, email, phone });

    return res.status(200).json({ message: 'Your contact information has been successfully saved' });
  };
}
