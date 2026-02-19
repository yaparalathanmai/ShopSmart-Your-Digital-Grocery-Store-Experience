## 🚀 ShopSmart - Quick Start Guide

### Prerequisites
- Node.js v14 or higher
- MongoDB (Local or MongoDB Atlas)
- Git
- npm or yarn

---

## 📦 Part 1: Backend Setup

### Step 1: Navigate to Backend Directory
```bash
cd backend
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Configure Environment Variables
Create or update `.env` file in the backend directory:
```env
MONGODB_URI=mongodb://localhost:27017/shopsmart
PORT=5000
JWT_SECRET=your_secret_key_here_change_in_production
NODE_ENV=development
```

**For MongoDB Atlas (Cloud):**
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/shopsmart
```

### Step 4: Start MongoDB
If using local MongoDB:
```bash
mongod
```

### Step 5: Run Backend Server
```bash
npm start
```

Expected output:
```
Server is running on port 5000
MongoDB connected: localhost
```

---

## 🎨 Part 2: Frontend Setup

### Step 1: Open New Terminal & Navigate to Frontend
```bash
cd frontend
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Start Frontend Server
```bash
npm start
```

The app will automatically open on `http://localhost:3000`

---

## ✅ Testing the Application

### 1. Create Admin Account
- Go to `http://localhost:3000/register`
- Register with any email (e.g., admin@example.com)
- After registration, manually change role to 'admin' in MongoDB

**MongoDB Command:**
```bash
db.users.updateOne(
  { email: "admin@example.com" },
  { $set: { role: "admin" } }
)
```

### 2. Add Sample Products
- Login as admin
- Go to `/admin/products`
- Add categories first
- Then add products

### 3. Test User Features
- Create a user account
- Browse products
- Add items to cart
- Place an order
- Track orders

---

## 🔑 API Testing (Optional)

Use Postman or any REST client:

### Register User
```
POST http://localhost:5000/api/auth/register
Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "confirmPassword": "password123"
}
```

### Login
```
POST http://localhost:5000/api/auth/login
Body:
{
  "email": "john@example.com",
  "password": "password123"
}
```

### Get Products
```
GET http://localhost:5000/api/products
```

---

## 📁 Project Structure Overview

```
shopsmart/
├── backend/
│   ├── models/         (Database schemas)
│   ├── routes/         (API endpoints)
│   ├── controllers/     (Business logic)
│   ├── middleware/      (Authentication)
│   ├── config/         (Configurations)
│   ├── server.js       (Main server file)
│   ├── package.json
│   ├── .env
│   └── .gitignore
├── frontend/
│   ├── src/
│   │   ├── components/  (Reusable components)
│   │   ├── pages/       (Page components)
│   │   ├── context/     (State management)
│   │   ├── services/    (API calls)
│   │   └── App.js       (Main app)
│   ├── public/
│   ├── package.json
│   └── .gitignore
└── README.md
```

---

## 🧪 User Roles & Permissions

### User/Customer Account
- Browse products
- Add items to cart
- Place orders
- View order history
- Update profile

### Admin Account
- All user permissions
- Manage products (add, edit, delete)
- Manage categories
- View all orders
- Update order status
- View dashboard statistics

---

## 🆘 Troubleshooting

### Backend won't start
- Ensure MongoDB is running: `mongod`
- Check if port 5000 is available
- Verify `.env` file is configured correctly
- Check Node.js version: `node --version`

### Frontend won't load
- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` and `package-lock.json`
- Reinstall dependencies: `npm install`
- Ensure backend is running on port 5000

### CORS Error
- Backend CORS is already configured
- Ensure frontend is running on port 3000

### MongoDB Connection Error
- For local MongoDB: Ensure `mongod` is running
- For MongoDB Atlas: Verify connection string in `.env`
- Check username and password

---

## 📝 Additional Commands

### Backend
```bash
npm start        # Start server
npm run dev      # Start with auto-reload (if nodemon installed)
```

### Frontend
```bash
npm start        # Start dev server
npm run build    # Build for production
npm test         # Run tests
```

---

## 🎯 Next Steps

1. Customize the design with your logos and branding
2. Add payment gateway integration (Stripe, Razorpay)
3. Set up email notifications
4. Deploy to production (Heroku, AWS, Vercel)
5. Add product images
6. Set up analytics

---

## 📞 Support

For issues:
1. Check the README files in respective folders
2. Review API endpoints documentation
3. Check browser console for errors
4. Review server logs

---

**Happy Coding! 🚀**
