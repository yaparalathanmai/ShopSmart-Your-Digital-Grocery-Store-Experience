# ShopSmart Backend API

Express.js backend server for ShopSmart e-commerce application.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure `.env` file:
   ```env
   MONGODB_URI=mongodb://localhost:27017/shopsmart
   PORT=5000
   JWT_SECRET=your_jwt_secret_key
   NODE_ENV=development
   ```

3. Start MongoDB:
   ```bash
   mongod
   ```

4. Run the server:
   ```bash
   npm start
   ```

The server will start on `http://localhost:5000`

## API Structure

- **/models** - Database schemas
- **/routes** - API routes
- **/controllers** - Business logic
- **/middleware** - Custom middleware (authentication)
- **/config** - Configuration files

## Key Features

- User authentication with JWT
- Product management
- Shopping cart functionality
- Order management
- Admin dashboard
- Payment method support (COD, Card, UPI)
