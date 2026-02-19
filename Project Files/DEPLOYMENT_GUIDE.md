# Deployment & Troubleshooting Guide

## 🚀 Deployment Options

### Option 1: Heroku (Free Tier)

#### Backend Deployment
```bash
# 1. Install Heroku CLI
# Download from: https://devcenter.heroku.com/articles/heroku-cli

# 2. Login to Heroku
heroku login

# 3. Create new app
heroku create shopsmart-backend

# 4. Set environment variables
heroku config:set MONGODB_URI=your_mongodb_connection_string
heroku config:set JWT_SECRET=your_secret_key
heroku config:set NODE_ENV=production

# 5. Deploy
git push heroku main

# 6. View logs
heroku logs --tail
```

#### Frontend Deployment
Deploy to Vercel:
```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy
vercel

# 3. Configure environment variables in Vercel dashboard
REACT_APP_API_URL=https://shopsmart-backend.herokuapp.com
```

### Option 2: AWS

Use Elastic Beanstalk for backend and S3/CloudFront for frontend.

### Option 3: DigitalOcean

Use App Platform for automatic deployment from GitHub.

---

## 🔧 Troubleshooting Guide

### Backend Issues

#### Issue: MongoDB Connection Fails
```
Error: connect ECONNREFUSED 127.0.0.1:27017
```
**Solution:**
- Ensure MongoDB is running: `mongod`
- Check MongoDB URI in .env
- For MongoDB Atlas, verify:
  - IP is whitelisted
  - Password is correct
  - Connection string format is correct

#### Issue: Port 5000 Already in Use
```
Error: listen EADDRINUSE: address already in use :::5000
```
**Solution:**
```bash
# On Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# On Mac/Linux
lsof -i :5000
kill -9 <PID>
```

#### Issue: CORS Error
```
Access to XMLHttpRequest has been blocked by CORS policy
```
**Solution:**
- CORS is already configured in server.js
- Ensure frontend is running on port 3000
- Check if backend is running on port 5000

#### Issue: JWT Token Invalid
```
Error: Token is not valid
```
**Solution:**
- Token may be expired (7-day expiry)
- Clear localStorage and login again
- Verify JWT_SECRET in .env is consistent

### Frontend Issues

#### Issue: Cannot Find Module Error
```
Module not found: Can't resolve 'react-router-dom'
```
**Solution:**
```bash
npm install
npm start
```

#### Issue: API Calls Failing
```
404 Not Found on /api/products
```
**Solution:**
- Ensure backend server is running
- Check API URL in services/api.js
- Verify endpoints are correct
- Check network tab in DevTools

#### Issue: Blank Page After Login
**Solution:**
- Check browser console for errors
- Verify token is saved in localStorage
- Clear browser cache: Ctrl+Shift+Del
- Hard refresh: Ctrl+Shift+R

#### Issue: Cart/Auth Not Persisting
**Solution:**
```javascript
// Check if localStorage is accessible
localStorage.setItem('test', 'value');
console.log(localStorage.getItem('test'));

// Check network requests in DevTools
```

---

## 📊 Performance Optimization

### Backend
```javascript
// Add caching headers
app.use((req, res, next) => {
  res.set('Cache-Control', 'public, max-age=300');
  next();
});

// Use database indexing
db.products.createIndex({ name: 1 });
db.users.createIndex({ email: 1 });
```

### Frontend
```javascript
// Implement code splitting
const AdminDashboard = React.lazy(() => import('./pages/admin/AdminDashboard'));

// Use React.memo for performance
export default React.memo(ProductCard);

// Optimize images
<img src={image} alt="Product" loading="lazy" />
```

---

## 🔍 Monitoring & Logging

### Backend Logging
```javascript
// Add logging to server.js
const fs = require('fs');
const path = require('path');

const logFile = fs.createWriteStream(path.join(__dirname, 'logs', 'app.log'), { flags: 'a' });

app.use((req, res, next) => {
  const log = `${new Date().toISOString()} ${req.method} ${req.url}`;
  logFile.write(log + '\n');
  next();
});
```

### Frontend Logging
```javascript
// Add error tracking
window.addEventListener('error', (event) => {
  console.error('Error:', event.error);
  // Send to error tracking service
});
```

---

## 🧪 Testing Checklist

### User Flow Testing
- [ ] Register with new email
- [ ] Login with credentials
- [ ] Update profile
- [ ] Browse products
- [ ] Search products
- [ ] Filter by category
- [ ] Add to cart
- [ ] Update cart quantity
- [ ] Remove from cart
- [ ] Proceed to checkout
- [ ] Fill shipping info
- [ ] Select payment method
- [ ] Place order
- [ ] View order
- [ ] Cancel order
- [ ] View order history
- [ ] Logout

### Admin Flow Testing
- [ ] Login as admin
- [ ] View dashboard
- [ ] View statistics
- [ ] Add product
- [ ] Edit product
- [ ] Delete product
- [ ] Add category
- [ ] View all orders
- [ ] Update order status

### Edge Cases
- [ ] Empty cart checkout
- [ ] Duplicate email registration
- [ ] Invalid login credentials
- [ ] Expired token
- [ ] Missing required fields
- [ ] Invalid inputs

---

## 🔐 Security Checklist

- [ ] Change JWT_SECRET in production
- [ ] Use HTTPS in production
- [ ] Validate all inputs
- [ ] Sanitize output
- [ ] Rate limiting enabled
- [ ] CORS properly configured
- [ ] No sensitive data in localStorage
- [ ] Use environment variables
- [ ] Update dependencies regularly
- [ ] Implement rate limiting:

```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);
```

---

## 📱 Mobile Testing

### Responsive Breakpoints
- [ ] Phone (320px - 480px)
- [ ] Tablet (481px - 768px)
- [ ] Desktop (769px+)

### Mobile Checklist
- [ ] Touch-friendly buttons (min 44x44px)
- [ ] Readable text (min 16px)
- [ ] No horizontal scroll
- [ ] Forms optimized for mobile
- [ ] Images responsive
- [ ] Navigation accessible

---

## 🚨 Common Error Solutions

### 502 Bad Gateway
- Backend server crashed
- Restart backend
- Check server logs
- Verify database connection

### 429 Too Many Requests
- Rate limiting triggered
- Implement rate limiting properly
- Check for infinite loops
- Wait and retry

### 500 Internal Server Error
- Server-side error
- Check server console
- Review error logs
- Verify all dependencies installed

### ENOTFOUND Error
- DNS resolution failed
- Check domain name
- Verify internet connection
- Try again after delay

---

## 📞 Getting Help

1. **Check Error Logs**
   - Backend: Server console
   - Frontend: Browser DevTools (F12)
   - Network tab to see API calls

2. **Common Issues Documentation**
   - See SETUP_GUIDE.md
   - See README.md files

3. **API Testing**
   - Use Postman to test endpoints
   - Verify request format
   - Check response codes

4. **Contact**
   - Email: support@shopsmart.com

---

## 📚 Additional Resources

### MongoDB
- Docs: https://docs.mongodb.com/
- Atlas: https://www.mongodb.com/cloud/atlas

### Express.js
- Docs: https://expressjs.com/

### React
- Docs: https://react.dev/

### Deployment
- Heroku: https://www.heroku.com/
- Vercel: https://vercel.com/
- AWS: https://aws.amazon.com/

---

## ✅ Pre-Launch Checklist

- [ ] All endpoints tested
- [ ] All pages tested
- [ ] Error handling implemented
- [ ] Loading states added
- [ ] Responsive design verified
- [ ] Security measures in place
- [ ] Environment variables set
- [ ] Database backup created
- [ ] Documentation complete
- [ ] Comments added to code
- [ ] Performance optimized
- [ ] Testing completed

---

**Last Updated: February 18, 2024**
