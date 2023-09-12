import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { initDB } from './initDB';
import { userRouter } from './routers/user.router';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors()); // Allow requests from other domains
app.use(express.json()); // Install middleware for processing requests that have a body in JSON format

// Connect Sequelize

const sequelize = initDB();

sequelize.authenticate();
sequelize.sync({ alter: true });

// We set the route for processing requests to '/api/user' and indicate that all such requests will be processed using userRouter
app.use('/api/user', userRouter); 

app.listen(PORT, () => {
  console.log(`API is ready on http://localgost:${PORT}`);
})
