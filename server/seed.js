const mongoose = require('mongoose');
require('dotenv').config();

const Product = require('./models/Product');

const sampleProducts = [
  {
    name: 'Fresh Tomatoes',
    description: 'Crispy and fresh red tomatoes',
    price: 3.99,
    category: 'Vegetables',
    stock: 50,
    image: 'https://via.placeholder.com/200?text=Tomatoes'
  },
  {
    name: 'Carrots (1 lb)',
    description: 'Orange carrots, fresh and crunchy',
    price: 2.49,
    category: 'Vegetables',
    stock: 60,
    image: 'https://via.placeholder.com/200?text=Carrots'
  },
  {
    name: 'Lettuce',
    description: 'Fresh green lettuce',
    price: 1.99,
    category: 'Vegetables',
    stock: 40,
    image: 'https://via.placeholder.com/200?text=Lettuce'
  },
  {
    name: 'Red Apples',
    description: 'Sweet and crispy red apples',
    price: 4.99,
    category: 'Fruits',
    stock: 55,
    image: 'https://via.placeholder.com/200?text=Apples'
  },
  {
    name: 'Bananas (1 bunch)',
    description: 'Yellow bananas, ready to eat',
    price: 2.99,
    category: 'Fruits',
    stock: 70,
    image: 'https://via.placeholder.com/200?text=Bananas'
  },
  {
    name: 'Oranges (6 pack)',
    description: 'Fresh orange citrus fruits',
    price: 5.99,
    category: 'Fruits',
    stock: 45,
    image: 'https://via.placeholder.com/200?text=Oranges'
  },
  {
    name: 'Milk (1 Liter)',
    description: 'Fresh pasteurized whole milk',
    price: 2.99,
    category: 'Dairy',
    stock: 80,
    image: 'https://via.placeholder.com/200?text=Milk'
  },
  {
    name: 'Yogurt (500g)',
    description: 'Plain Greek yogurt',
    price: 3.49,
    category: 'Dairy',
    stock: 50,
    image: 'https://via.placeholder.com/200?text=Yogurt'
  },
  {
    name: 'Cheese (Cheddar)',
    description: 'Sharp cheddar cheese block',
    price: 6.99,
    category: 'Dairy',
    stock: 30,
    image: 'https://via.placeholder.com/200?text=Cheese'
  },
  {
    name: 'Chicken Breast (1 lb)',
    description: 'Fresh boneless chicken breast',
    price: 8.99,
    category: 'Meat',
    stock: 35,
    image: 'https://via.placeholder.com/200?text=Chicken'
  },
  {
    name: 'Ground Beef (1 lb)',
    description: 'Lean ground beef',
    price: 7.99,
    category: 'Meat',
    stock: 40,
    image: 'https://via.placeholder.com/200?text=BeefGround'
  },
  {
    name: 'Salmon Fillet (1 lb)',
    description: 'Fresh Atlantic salmon fillet',
    price: 12.99,
    category: 'Meat',
    stock: 20,
    image: 'https://via.placeholder.com/200?text=Salmon'
  },
  {
    name: 'Whole Wheat Bread',
    description: 'Fresh baked whole wheat bread',
    price: 2.49,
    category: 'Bakery',
    stock: 60,
    image: 'https://via.placeholder.com/200?text=Bread'
  },
  {
    name: 'Croissants (6 pack)',
    description: 'Butter croissants',
    price: 4.99,
    category: 'Bakery',
    stock: 30,
    image: 'https://via.placeholder.com/200?text=Croissants'
  },
  {
    name: 'Donut Box (12 pack)',
    description: 'Assorted donuts',
    price: 5.99,
    category: 'Bakery',
    stock: 25,
    image: 'https://via.placeholder.com/200?text=Donuts'
  },
  {
    name: 'Orange Juice (1 L)',
    description: 'Fresh squeezed orange juice',
    price: 3.99,
    category: 'Beverages',
    stock: 50,
    image: 'https://via.placeholder.com/200?text=OJ'
  },
  {
    name: 'Coffee (1 lb)',
    description: 'Premium ground coffee',
    price: 8.99,
    category: 'Beverages',
    stock: 40,
    image: 'https://via.placeholder.com/200?text=Coffee'
  },
  {
    name: 'Bottled Water (6 pack)',
    description: 'Pure drinking water',
    price: 3.49,
    category: 'Beverages',
    stock: 100,
    image: 'https://via.placeholder.com/200?text=Water'
  },
  {
    name: 'Chips (Regular)',
    description: 'Classic potato chips',
    price: 2.99,
    category: 'Snacks',
    stock: 75,
    image: 'https://via.placeholder.com/200?text=Chips'
  },
  {
    name: 'Granola Bars (5 pack)',
    description: 'Healthy granola snack bars',
    price: 4.49,
    category: 'Snacks',
    stock: 50,
    image: 'https://via.placeholder.com/200?text=GranolaBar'
  }
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/grocery-store', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');

    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Insert sample products
    const result = await Product.insertMany(sampleProducts);
    console.log(`Successfully added ${result.length} products to the database`);

    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');

  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
