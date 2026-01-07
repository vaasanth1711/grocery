# Setup & Running Instructions

## Quick Start Guide

### Step 1: Install Backend Dependencies

```bash
cd server
npm install
```

### Step 2: Install Frontend Dependencies

```bash
cd client
npm install
```

### Step 3: Set Up MongoDB (Optional for Demo)

The project includes mock data, so you can test without MongoDB. To use MongoDB:

**Option A: Local MongoDB**
- Install MongoDB from https://www.mongodb.com/try/download/community
- Start MongoDB service
- Keep the default connection string in `.env`

**Option B: MongoDB Atlas (Cloud)**
- Create account at https://www.mongodb.com/cloud/atlas
- Create a cluster and database
- Update `MONGODB_URI` in `server/.env` with your connection string

### Step 4: Start the Backend Server

```bash
cd server
npm run dev
```

Expected output:
```
Server is running on port 5000
MongoDB connected successfully
```

### Step 5: Start the Frontend (in a new terminal)

```bash
cd client
npm start
```

The application will automatically open at `http://localhost:3000`

## Project Features

### ✅ 3+ Pages Implemented

1. **Home Page** (`/`)
   - Welcome section with call-to-action
   - Feature cards highlighting store benefits
   - Category browse section

2. **Products Page** (`/products`)
   - Browse all products
   - Filter by 7 different categories
   - Product cards with price and add to cart
   - Mock data if backend is unavailable

3. **Shopping Cart Page** (`/cart`)
   - View all cart items
   - Remove individual items
   - Clear entire cart
   - Display total price
   - Proceed to checkout button

### 🎨 Styling Features

- Professional gradient color scheme (Purple & Blue)
- Fully responsive design (Mobile, Tablet, Desktop)
- Smooth hover effects and transitions
- Clean, modern UI components
- Navigation header and footer

### 🔧 Backend API

All endpoints are functional and ready to use:

**Products API:**
- GET `/api/products` - List all products
- POST `/api/products` - Add new product
- PUT `/api/products/:id` - Update product
- DELETE `/api/products/:id` - Delete product

**Cart API:**
- GET `/api/cart` - Get current cart
- POST `/api/cart/add` - Add item to cart
- DELETE `/api/cart/:productId` - Remove item
- DELETE `/api/cart` - Clear cart

### 📦 Product Categories

The system supports 7 product categories:
- 🥬 Vegetables
- 🍎 Fruits
- 🥛 Dairy
- 🥩 Meat
- 🥖 Bakery
- 🥤 Beverages
- 🍿 Snacks

## Testing the Application

### Without Backend

1. The frontend loads with mock product data automatically
2. All UI components are fully functional
3. Test the category filtering and navigation
4. Add/remove items from cart (stored in memory)

### With Backend

1. Products are fetched from MongoDB
2. Cart data persists during the session
3. Full CRUD operations work on products

## Troubleshooting

**Port 5000 already in use?**
```bash
# Change port in server/.env
PORT=5001
```

**Port 3000 already in use?**
```bash
# Set port before running
SET PORT=3001 && npm start  (Windows)
PORT=3001 npm start          (Mac/Linux)
```

**MongoDB connection error?**
- Use mock data by keeping both servers disconnected
- Check MongoDB is running
- Verify connection string in `.env`

**CSS not loading?**
- Clear browser cache (Ctrl+Shift+Delete)
- Restart frontend server

## File Structure

```
d:\project\
├── server/
│   ├── controllers/
│   │   ├── productController.js
│   │   └── cartController.js
│   ├── models/
│   │   ├── Product.js
│   │   └── Cart.js
│   ├── routes/
│   │   ├── products.js
│   │   └── cart.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── HomePage.js
│   │   │   ├── ProductsPage.js
│   │   │   └── CartPage.js
│   │   ├── components/
│   │   │   └── ProductCard.js
│   │   ├── styles/
│   │   │   ├── index.css
│   │   │   └── pages.css
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   │   └── index.html
│   └── package.json
│
├── README.md
├── .gitignore
└── SETUP.md (this file)
```

## Next Steps & Enhancements

Consider adding:
- User authentication (JWT)
- Payment gateway (Stripe/PayPal)
- Search functionality
- Product reviews
- Admin dashboard
- Order history
- Email notifications

## Support

For more information, see README.md

Enjoy your Grocery Store! 🛒
