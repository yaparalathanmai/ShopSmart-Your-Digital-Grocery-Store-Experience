// Sample data for seeding database
// Run: node seed.js

require('dotenv').config();
const mongoose = require('mongoose');

const Category = require('./models/Category');
const Product = require('./models/Product');
const User = require('./models/User');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/shopsmart', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

const seedData = async () => {
  try {
    // Clear existing data
    await Category.deleteMany({});
    await Product.deleteMany({});
    
    // Add categories
    const categories = await Category.create([
      {
        name: 'Vegetables',
        description: 'Fresh vegetables delivered to your doorstep',
      },
      {
        name: 'Fruits',
        description: 'Seasonal fresh fruits',
      },
      {
        name: 'Dairy',
        description: 'Milk, cheese, yogurt and more',
      },
      {
        name: 'Grains & Flour',
        description: 'Rice, wheat, flour and cereals',
      },
      {
        name: 'Spices',
        description: 'Authentic spices and seasonings',
      },
      {
        name: 'Oils & Condiments',
        description: 'Cooking oils and condiments',
      },
    ]);

    console.log('✅ Categories added');

    // Add products
    const products = await Product.create([
      // Vegetables
      {
        name: 'Tomato',
        description: 'Fresh red tomatoes, rich in vitamin C',
        price: 40,
        originalPrice: 50,
        category: categories[0]._id,
        stock: 100,
        unit: 'kg',
        rating: 4.5,
      },
      {
        name: 'Onion',
        description: 'Golden onions, perfect for cooking',
        price: 30,
        originalPrice: 40,
        category: categories[0]._id,
        stock: 150,
        unit: 'kg',
        rating: 4.3,
      },
      {
        name: 'Carrot',
        description: 'Orange carrots, crunchy and sweet',
        price: 35,
        originalPrice: 45,
        category: categories[0]._id,
        stock: 120,
        unit: 'kg',
        rating: 4.7,
      },
      
      // Fruits
      {
        name: 'Banana',
        description: 'Fresh yellow bananas, rich in potassium',
        price: 60,
        originalPrice: 80,
        category: categories[1]._id,
        stock: 200,
        unit: 'dozen',
        rating: 4.6,
      },
      {
        name: 'Apple',
        description: 'Crispy red apples, sweet and juicy',
        price: 100,
        originalPrice: 130,
        category: categories[1]._id,
        stock: 80,
        unit: 'kg',
        rating: 4.8,
      },
      {
        name: 'Orange',
        description: 'Juicy oranges, rich in vitamin C',
        price: 50,
        originalPrice: 65,
        category: categories[1]._id,
        stock: 90,
        unit: 'kg',
        rating: 4.5,
      },
      
      // Dairy
      {
        name: 'Milk',
        description: 'Fresh pasteurized milk, 1 Liter',
        price: 50,
        originalPrice: 60,
        category: categories[2]._id,
        stock: 150,
        unit: 'liter',
        rating: 4.4,
      },
      {
        name: 'Yogurt',
        description: 'Creamy yogurt, 500g',
        price: 40,
        originalPrice: 50,
        category: categories[2]._id,
        stock: 100,
        unit: 'piece',
        rating: 4.5,
      },
      {
        name: 'Cheese',
        description: 'Processed cheese slices, 200g',
        price: 120,
        originalPrice: 150,
        category: categories[2]._id,
        stock: 60,
        unit: 'piece',
        rating: 4.6,
      },
      
      // Grains
      {
        name: 'Rice',
        description: 'Basmati rice, 1 kg',
        price: 80,
        originalPrice: 100,
        category: categories[3]._id,
        stock: 200,
        unit: 'kg',
        rating: 4.5,
      },
      {
        name: 'Wheat Flour',
        description: 'Pure wheat flour, 1 kg',
        price: 40,
        originalPrice: 50,
        category: categories[3]._id,
        stock: 150,
        unit: 'kg',
        rating: 4.4,
      },
      
      // Spices
      {
        name: 'Turmeric Powder',
        description: 'Pure turmeric powder, 100g',
        price: 30,
        originalPrice: 40,
        category: categories[4]._id,
        stock: 100,
        unit: 'piece',
        rating: 4.7,
      },
      {
        name: 'Chili Powder',
        description: 'Red chili powder, 100g',
        price: 25,
        originalPrice: 35,
        category: categories[4]._id,
        stock: 120,
        unit: 'piece',
        rating: 4.6,
      },
      
      // Oils
      {
        name: 'Cooking Oil',
        description: 'Pure vegetable cooking oil, 1 Liter',
        price: 150,
        originalPrice: 180,
        category: categories[5]._id,
        stock: 100,
        unit: 'liter',
        rating: 4.5,
      },
      {
        name: 'Salt',
        description: 'Table salt, 1 kg',
        price: 20,
        originalPrice: 25,
        category: categories[5]._id,
        stock: 200,
        unit: 'kg',
        rating: 4.3,
      },
    ]);

    console.log('✅ Products added');

    // Create admin user
    const adminUser = await User.create({
      name: 'Admin User',
      email: 'admin@shopsmart.com',
      password: 'Admin@123',
      role: 'admin',
      phone: '9999999999',
    });

    console.log('✅ Admin user created');
    console.log('Admin Email: admin@shopsmart.com');
    console.log('Admin Password: Admin@123');

    console.log('\n✅ Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error.message);
    process.exit(1);
  }
};

connectDB().then(() => {
  seedData();
});
