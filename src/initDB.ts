import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';

import { models } from './models';

dotenv.config();

// Підключаємо базу дазу даних
export const initDB = (): Sequelize => {
  const DB_USERNAME = process.env.DB_USERNAME ?? '';
  const DB_PASSWORD = process.env.DB_PASSWORD ?? '';
  const DB_HOST = process.env.DB_HOST ?? '';
  const DB_PORT = process.env.DB_PORT ?? '';
  const DB_NAME = process.env.DB_NAME ?? '';

  const DB_URI: string = `postgresql://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

  return new Sequelize(DB_URI, {
    models,
  });
};
