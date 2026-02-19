# ShopSmart API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication
All protected endpoints require a JWT token in the Authorization header:
```
Authorization: Bearer <token>
```

---

## 📱 Authentication Endpoints

### Register User
```
POST /auth/register
Content-Type: application/json

Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "confirmPassword": "password123"
}

Response:
{
  "message": "User registered successfully",
  "token": "jwt_token",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

### Login User
```
POST /auth/login
Content-Type: application/json

Body:
{
  "email": "john@example.com",
  "password": "password123"
}

Response:
{
  "message": "Login successful",
  "token": "jwt_token",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

### Get User Profile
```
GET /auth/profile
Authorization: Bearer <token>

Response:
{
  "message": "User profile retrieved",
  "user": {
    "_id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user",
    "phone": "9999999999",
    "address": "123 Main St",
    "city": "New York",
    "state": "NY",
    "pincode": "10001"
  }
}
```

### Update User Profile
```
PUT /auth/profile
Authorization: Bearer <token>
Content-Type: application/json

Body:
{
  "name": "John Doe",
  "phone": "9999999999",
  "address": "123 Main St",
  "city": "New York",
  "state": "NY",
  "pincode": "10001"
}

Response:
{
  "message": "User profile updated successfully",
  "user": { ...updated user data }
}
```

---

## 🛍️ Product Endpoints

### Get All Products
```
GET /products
Query Parameters:
  - category: category_id (optional)
  - search: search_keyword (optional)
  - sort: 'price-low' | 'price-high' | 'newest' (optional)

Response:
{
  "message": "Products retrieved successfully",
  "count": 15,
  "products": [
    {
      "_id": "product_id",
      "name": "Tomato",
      "description": "Fresh red tomatoes",
      "price": 40,
      "originalPrice": 50,
      "category": { ...category data },
      "stock": 100,
      "rating": 4.5,
      "unit": "kg"
    }
  ]
}
```

### Get Product Details
```
GET /products/:id

Response:
{
  "message": "Product retrieved successfully",
  "product": { ...product data with reviews }
}
```

### Get All Categories
```
GET /products/categories

Response:
{
  "message": "Categories retrieved successfully",
  "categories": [
    {
      "_id": "category_id",
      "name": "Vegetables",
      "description": "Fresh vegetables"
    }
  ]
}
```

### Add Product Review
```
POST /products/:id/review
Authorization: Bearer <token>
Content-Type: application/json

Body:
{
  "comment": "Great product!",
  "rating": 5
}

Response:
{
  "message": "Review added successfully",
  "product": { ...updated product with review }
}
```

---

## 🛒 Cart Endpoints

### Get Cart
```
GET /cart
Authorization: Bearer <token>

Response:
{
  "message": "Cart retrieved successfully",
  "cart": {
    "_id": "cart_id",
    "user": "user_id",
    "items": [
      {
        "product": { ...product data },
        "quantity": 2,
        "price": 40
      }
    ],
    "totalPrice": 80
  }
}
```

### Add to Cart
```
POST /cart/add
Authorization: Bearer <token>
Content-Type: application/json

Body:
{
  "productId": "product_id",
  "quantity": 2
}

Response:
{
  "message": "Product added to cart successfully",
  "cart": { ...updated cart }
}
```

### Remove from Cart
```
POST /cart/remove
Authorization: Bearer <token>
Content-Type: application/json

Body:
{
  "productId": "product_id"
}

Response:
{
  "message": "Product removed from cart",
  "cart": { ...updated cart }
}
```

### Update Cart Quantity
```
POST /cart/update
Authorization: Bearer <token>
Content-Type: application/json

Body:
{
  "productId": "product_id",
  "quantity": 3
}

Response:
{
  "message": "Cart updated successfully",
  "cart": { ...updated cart }
}
```

### Clear Cart
```
POST /cart/clear
Authorization: Bearer <token>

Response:
{
  "message": "Cart cleared successfully",
  "cart": { items: [], totalPrice: 0 }
}
```

---

## 📦 Order Endpoints

### Place Order
```
POST /orders/place
Authorization: Bearer <token>
Content-Type: application/json

Body:
{
  "shippingAddress": {
    "name": "John Doe",
    "phone": "9999999999",
    "address": "123 Main St",
    "city": "New York",
    "state": "NY",
    "pincode": "10001"
  },
  "paymentMethod": "cod" | "card" | "upi"
}

Response:
{
  "message": "Order placed successfully",
  "order": {
    "_id": "order_id",
    "user": "user_id",
    "items": [...],
    "totalPrice": 150,
    "shippingAddress": {...},
    "paymentMethod": "cod",
    "paymentStatus": "pending",
    "orderStatus": "pending"
  }
}
```

### Get User Orders
```
GET /orders
Authorization: Bearer <token>

Response:
{
  "message": "Orders retrieved successfully",
  "count": 3,
  "orders": [...]
}
```

### Get Order Details
```
GET /orders/:id
Authorization: Bearer <token>

Response:
{
  "message": "Order retrieved successfully",
  "order": { ...order data }
}
```

### Cancel Order
```
POST /orders/:id/cancel
Authorization: Bearer <token>

Response:
{
  "message": "Order cancelled successfully",
  "order": { ...updated order with status: 'cancelled' }
}
```

### Track Order
```
GET /orders/:id/track
Authorization: Bearer <token>

Response:
{
  "message": "Order tracking info retrieved",
  "order": {
    "orderNumber": "order_id",
    "status": "shipped",
    "trackingNumber": "TRK123456",
    "items": [...],
    "estimatedDelivery": "2024-02-25T..."
  }
}
```

---

## 👨‍💼 Admin Endpoints

All admin endpoints require `Authorization: Bearer <admin_token>`

### Add Product
```
POST /admin/products
Body:
{
  "name": "Product Name",
  "description": "Description",
  "price": 100,
  "originalPrice": 120,
  "category": "category_id",
  "stock": 50,
  "unit": "kg"
}
```

### Update Product
```
PUT /admin/products/:id
Body: (same as add product)
```

### Delete Product
```
DELETE /admin/products/:id
```

### Add Category
```
POST /admin/categories
Body:
{
  "name": "Category Name",
  "description": "Description"
}
```

### Update Category
```
PUT /admin/categories/:id
Body: (same as add category)
```

### Delete Category
```
DELETE /admin/categories/:id
```

### Get All Orders
```
GET /admin/orders
```

### Update Order Status
```
PUT /admin/orders/:id
Body:
{
  "orderStatus": "pending" | "confirmed" | "shipped" | "delivered" | "cancelled"
}
```

### Get Dashboard Stats
```
GET /admin/dashboard/stats

Response:
{
  "message": "Dashboard stats retrieved successfully",
  "stats": {
    "totalUsers": 10,
    "totalProducts": 50,
    "totalOrders": 25,
    "totalRevenue": 15000,
    "recentOrders": [...]
  }
}
```

---

## Error Responses

### 400 Bad Request
```json
{
  "message": "Please provide all required fields"
}
```

### 401 Unauthorized
```json
{
  "message": "No token, authorization denied"
}
```

### 403 Forbidden
```json
{
  "message": "Admin access required"
}
```

### 404 Not Found
```json
{
  "message": "Product not found"
}
```

### 500 Internal Server Error
```json
{
  "message": "Internal Server Error",
  "error": "Error details"
}
```

---

## Testing with Postman

1. Register a user and copy the token
2. Set `Authorization` header with `Bearer <token>`
3. Test each endpoint

---

Last Updated: February 18, 2024
