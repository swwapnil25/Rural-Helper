// backend/seed.js
// Run this once to populate services, products, and demo user

require('dotenv').config();
const bcrypt = require('bcryptjs');
const connectDB = require('./config/db');

const User = require('./models/User');
const Service = require('./models/Service');
const Product = require('./models/Product');

const seed = async () => {
  try {
    await connectDB();

    console.log('Clearing old data...');
    await User.deleteMany();
    await Service.deleteMany();
    await Product.deleteMany();

    console.log('Inserting services...');
    const services = await Service.insertMany([
      { name: 'Grocery Delivery', icon: '🛒' },
      { name: 'Medicine Supply', icon: '💊' },
      { name: 'Farming Tools', icon: '🚜' },
      { name: 'Water Supply', icon: '💧' },
      { name: 'Transport Assistance', icon: '🚐' },
    ]);

    console.log('Inserting products...');
    const products = await Product.insertMany([
      { name: 'Rice (1kg)', price: 40, icon: '🍚' },
      { name: 'Wheat Flour (1kg)', price: 35, icon: '🌾' },
      { name: 'Milk (1L)', price: 25, icon: '🥛' },
      { name: 'Paracetamol', price: 10, icon: '💊' },
      { name: 'Cooking Oil (1L)', price: 120, icon: '🛢️' },
      { name: 'Vegetables (1kg)', price: 50, icon: '🥦' },
    ]);

    console.log('Creating demo user...');
    const hashedPassword = await bcrypt.hash('DemoPass123', 10);
    const demoUser = await User.create({
      name: 'Demo User',
      email: 'demo@demo.com',
      password: hashedPassword,
      phone: '9999999999',
    });

    console.log('✅ Seed completed successfully!');
    console.log('Demo login: demo@demo.com / DemoPass123');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seed();
