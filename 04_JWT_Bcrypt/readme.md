# Express Authentication API

This is a basic Node.js and Express-based authentication API that supports:

- User registration with hashed passwords using `bcrypt`
- User login with JWT token generation
- User logout (placeholder implementation)
- In-memory user storage (for learning/demo purposes)

## 📦 Technologies Used

- Node.js
- Express.js
- Bcrypt (for password hashing)
- JSON Web Token (JWT)

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed. You can check this by running:

## Installation

1 Clone this repository:
- git clone https://github.com/your-username/express-auth-api.git
- cd express-auth-api

2 Install dependencies:
npm install

3 Running the Server
nodemon app.js

## 🔐 API Endpoints

1. Register
POST /register

- Request Body:
{
  "username": "your_username",
  "password": "your_password"
}

- Response:
{
  "message": "User registered successfully",
  "username": "your_username",
  "token": "jwt_token_here"
}

2. Login
POST /login

- Request Body:
{
  "username": "your_username",
  "password": "your_password"
}

- Response:
{
  "message": "User logged in successfully",
  "username": "your_username",
  "token": "jwt_token_here"
}

3. Logout
POST /logout

This is a placeholder route. In-memory users are not removed here. No token is invalidated (as JWT is stateless).

- Response:
{
  "message": "User logged out successfully"
}




