# ShopSmart - Your Digital Grocery Store Experience

A comprehensive full-stack e-commerce application built with React, Node.js/Express, and MongoDB.

## Features ✨

### User Features
- User Registration and Login
- Browse Products by Category
- Search and Filter Products
- Shopping Cart Management
- Checkout Process (Multi-step)
- Order Management
- Order Tracking
- User Profile Management
- Payment Methods: COD, Card, UPI

### Admin Features
- Dashboard with Statistics
- Product Management (Add, Edit, Delete)
- Category Management
- Order Management
- Order Status Updates
- Revenue Tracking

## Project Structure

```
shopsmart/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Category.js
│   │   ├── Cart.js
│   │   └── Order.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── products.js
│   │   ├── cart.js
│   │   ├── orders.js
│   │   └── admin.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── productController.js
│   │   ├── cartController.js
│   │   ├── orderController.js
│   │   └── adminController.js
│   ├── middleware/
│   │   └── auth.js
│   ├── config/
│   │   └── db.js
│   ├── server.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.js
│   │   │   ├── Footer.js
│   │   │   ├── ProductCard.js
│   │   │   ├── LoaderSpinner.js
│   │   │   └── ProtectedRoute.js
│   │   ├── pages/
│   │   │   ├── LandingPage.js
│   │   │   ├── LoginPage.js
│   │   │   ├── RegisterPage.js
│   │   │   ├── ProductsPage.js
│   │   │   ├── CartPage.js
│   │   │   ├── CheckoutPage.js
│   │   │   ├── MyOrdersPage.js
│   │   │   ├── ProfilePage.js
│   │   │   ├── NotFoundPage.js
│   │   │   └── admin/
│   │   │       ├── AdminDashboard.js
│   │   │       ├── ManageProducts.js
│   │   │       └── ManageOrders.js
│   │   ├── context/
│   │   │   ├── AuthContext.js
│   │   │   └── CartContext.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles/
│   ├── public/
│   │   └── index.html
│   └── package.json
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js (v14+)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Backend Setup

1. **Navigate to backend folder**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Edit `.env` file:
   ```env
   MONGODB_URI=mongodb://localhost:27017/shopsmart
   PORT=5000
   JWT_SECRET=your_jwt_secret_key_change_in_production
   NODE_ENV=development
   ```

4. **Start MongoDB**
   ```bash
   mongod
   ```

5. **Run the backend server**
   ```bash
   npm start
   ```
   Or for development with auto-reload:
   ```bash
   npm run dev
   ```

The backend server will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend folder**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the React app**
   ```bash
   npm start
   ```

The frontend will open on `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (protected)
- `PUT /api/auth/profile` - Update user profile (protected)

### Products
- `GET /api/products` - Get all products
- `GET /api/products/categories` - Get all categories
- `GET /api/products/:id` - Get product details
- `POST /api/products/:id/review` - Add review (protected)

### Cart
- `GET /api/cart` - Get cart (protected)
- `POST /api/cart/add` - Add to cart (protected)
- `POST /api/cart/remove` - Remove from cart (protected)
- `POST /api/cart/update` - Update cart quantity (protected)
- `POST /api/cart/clear` - Clear cart (protected)

### Orders
- `POST /api/orders/place` - Place order (protected)
- `GET /api/orders` - Get user orders (protected)
- `GET /api/orders/:id` - Get order details (protected)
- `POST /api/orders/:id/cancel` - Cancel order (protected)
- `GET /api/orders/:id/track` - Track order (protected)

### Admin (Admin only)
- `POST /api/admin/products` - Add product
- `PUT /api/admin/products/:id` - Update product
- `DELETE /api/admin/products/:id` - Delete product
- `POST /api/admin/categories` - Add category
- `PUT /api/admin/categories/:id` - Update category
- `DELETE /api/admin/categories/:id` - Delete category
- `GET /api/admin/orders` - Get all orders
- `PUT /api/admin/orders/:id` - Update order status
- `GET /api/admin/dashboard/stats` - Get dashboard statistics

## User Roles

### Customer (User)
- Browse products
- Search and filter
- Manage cart
- Place orders
- Track orders
- Manage profile

### Administrator (Admin)
- All user permissions
- Manage products
- Manage categories
- View all orders
- Update order status
- View dashboard statistics

## Database Schema

### User
- name, email, password, role, phone, address, city, state, pincode, avatar

### Product
- name, description, price, originalPrice, category, image, stock, rating, reviews, unit

### Category
- name, description, image

### Cart
- user, items, totalPrice

### Order
- user, items, totalPrice, shippingAddress, paymentMethod, paymentStatus, orderStatus, trackingNumber

## Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (Authentication)
- bcryptjs (Password hashing)
- CORS

### Frontend
- React
- React Router
- Axios
- Context API (State Management)
- CSS3

## Future Enhancements

- Payment gateway integration (Stripe/Razorpay)
- Email notifications
- Advanced search and filters
- Product recommendations
- Wishlist feature
- Product ratings and reviews
- Seller dashboard
- Real-time notifications
- Mobile app

## Contributing

Feel free to fork this project and submit pull requests with improvements.

## License

This project is open source and available under the MIT License.

## Support

For issues and questions, please contact: support@shopsmart.com

---

Happy Shopping! 🛒
