import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { initDB } from './initDB';
import { userRouter } from './routers/user.router';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors()); // Дозволяємо запити з інших доменів
app.use(express.json()); // Встановлюємо middleware для обробки запитів, які мають тіло у форматі JSON

// Підключаємо Sequelize

const sequelize = initDB();

sequelize.authenticate();
sequelize.sync({ alter: true });

// Встановлюємо маршрут для обробки запитів до '/api/user' та вказуємо, що всі такі запити будуть опрацьовуватися за допомогою userRouter
app.use('/api/user', userRouter); 

app.listen(PORT, () => {
  console.log(`API is ready on http://localgost:${PORT}`);
})
