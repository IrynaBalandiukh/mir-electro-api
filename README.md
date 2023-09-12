# Project README: Express.js API with Sequelize

## Introduction

This is a MIR-electro Express.js API project utilizing Sequelize for interacting with a relational database. The API is designed to handle user-related operations and can serve as a foundation for building more complex applications.

## Prerequisites

Before you begin, ensure you have the following installed on your development machine:

- Node.js
- npm (Node Package Manager)
- PostgreSQL or another relational database

## Getting Started

1. Clone the repository to your local machine:
`git clone https://github.com/IrynaBalandiukh/mir-electro-api.git`

2. Install project dependencies:
`cd mir-electro-api`
`npm install`

4. Create a `.env` file in the project root directory and define the following environment variables:

- PORT
- DB_USERNAME
- DB_PASSWORD
- DB_HOST
- DB_PORT
- DB_NAME

5. Start the API server:
`npm run dev`

The API will be available at http://localhost:5000.


## Project Structure

- `index.ts`: The main entry point of the Express.js application.
- `initDB.ts`: Initializes the database connection using Sequelize.
- `routers/user.router.ts`: Contains API routes and logic for user-related operations.
- `.env`: Configuration file for environment variables.

## API Endpoints

- **GET /api/user**: Retrieve a list of users.
- **POST /api/user**: Create a new user.

## Dependencies

- `express`: Web framework for Node.js.
- `cors`: Middleware for enabling Cross-Origin Resource Sharing (CORS).
- `dotenv`: Load environment variables from a .env file.
