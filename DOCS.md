# Project Documentation

## MERN Grocery Store Application

A full-stack e-commerce application for a grocery store with 3+ pages, built using MongoDB, Express, React, and Node.js.

---

## ✅ Deliverables

### Pages Implemented (3+)

1. **Home Page (`/`)**
   - Hero section with store introduction
   - Features section highlighting benefits
   - Category showcase for quick navigation
   - Call-to-action buttons

2. **Products Page (`/products`)**
   - Grid display of all products
   - Category filtering system (7 categories)
   - Individual product cards with details
   - Add to cart functionality
   - Mock data support when backend is unavailable

3. **Shopping Cart Page (`/cart`)**
   - Table view of cart items
   - Remove item functionality
   - Clear cart option
   - Total price calculation
   - Checkout button
   - Continue shopping link

### Technologies Used

**Backend:**
- Node.js with Express.js
- MongoDB with Mongoose ODM
- CORS for cross-origin requests
- Environment configuration with dotenv

**Frontend:**
- React with React Router
- Axios for HTTP requests
- CSS3 for responsive styling
- React Hooks for state management

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js v14+
- npm or yarn
- MongoDB (optional - mock data available)

### Backend Setup

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Configure .env file (already configured)
# MONGODB_URI=mongodb://localhost:27017/grocery-store
# PORT=5000

# Start development server
npm run dev
# OR for production
npm start

# Optional: Seed database with sample products
npm run seed
```

### Frontend Setup

```bash
# Navigate to client directory
cd client

# Install dependencies
npm install

# Start React development server
npm start
# Application opens at http://localhost:3000
```

---

## 📝 API Documentation

### Product Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get single product |
| GET | `/api/products/category/:category` | Get products by category |
| POST | `/api/products` | Create new product |
| PUT | `/api/products/:id` | Update product |
| DELETE | `/api/products/:id` | Delete product |

### Cart Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/cart` | Get current cart |
| POST | `/api/cart/add` | Add item to cart |
| DELETE | `/api/cart/:productId` | Remove item from cart |
| DELETE | `/api/cart` | Clear cart |

### Request/Response Examples

**Add to Cart:**
```json
POST /api/cart/add
{
  "productId": "507f1f77bcf86cd799439011",
  "quantity": 2
}

Response:
{
  "_id": "507f1f77bcf86cd799439011",
  "items": [...],
  "totalPrice": 25.99
}
```

---

## 🎨 Features & UI

### Responsive Design
- Mobile-first approach
- Breakpoints for tablets and desktops
- Touch-friendly buttons and inputs
- Optimized images and performance

### Color Scheme
- Primary: Purple (#667eea) and Blue (#764ba2)
- Secondary: Gray (#6c757d)
- Accent: Red for danger actions (#dc3545)

### Components
- Navigation header with links
- Product cards with images and details
- Category filter buttons
- Cart item table
- Action buttons (Add to Cart, Remove, Checkout)
- Footer with copyright

---

## 📦 Database Schema

### Product Model
```javascript
{
  name: String (required),
  description: String (required),
  price: Number (required, min: 0),
  category: String (enum: ['Vegetables', 'Fruits', 'Dairy', 'Meat', 'Bakery', 'Beverages', 'Snacks']),
  image: String (default: placeholder),
  stock: Number (default: 0),
  createdAt: Date (default: now)
}
```

### Cart Model
```javascript
{
  items: [
    {
      productId: ObjectId (ref: Product),
      quantity: Number (min: 1),
      price: Number
    }
  ],
  totalPrice: Number (default: 0),
  createdAt: Date (default: now)
}
```

---

## 🔍 Testing

### Test Scenarios

1. **Home Page**
   - Navigate to `/`
   - Verify all sections load
   - Click on category cards
   - Click "Shop Now" button

2. **Products Page**
   - Load all products
   - Test category filters
   - Verify product details display
   - Test responsive grid

3. **Cart Functionality**
   - Add items to cart from products page
   - Verify cart updates
   - Remove items from cart
   - Clear entire cart
   - Check total calculation

### Without MongoDB
- All UI elements work with mock data
- Frontend tests can run independently
- API calls return mock responses

---

## 📁 Project Structure

```
project/
├── server/
│   ├── controllers/
│   │   ├── productController.js      (Product CRUD logic)
│   │   └── cartController.js         (Cart operations)
│   ├── models/
│   │   ├── Product.js                (Product schema)
│   │   └── Cart.js                   (Cart schema)
│   ├── routes/
│   │   ├── products.js               (Product routes)
│   │   └── cart.js                   (Cart routes)
│   ├── server.js                     (Main server file)
│   ├── package.json                  (Dependencies)
│   ├── .env                          (Configuration)
│   └── seed.js                       (Database seeding)
│
├── client/
│   ├── public/
│   │   └── index.html                (HTML entry point)
│   ├── src/
│   │   ├── pages/
│   │   │   ├── HomePage.js           (Home page component)
│   │   │   ├── ProductsPage.js       (Products listing)
│   │   │   └── CartPage.js           (Shopping cart)
│   │   ├── components/
│   │   │   └── ProductCard.js        (Reusable product card)
│   │   ├── styles/
│   │   │   ├── index.css             (Global styles)
│   │   │   └── pages.css             (Page-specific styles)
│   │   ├── App.js                    (Main app component)
│   │   └── index.js                  (React entry point)
│   └── package.json                  (Dependencies)
│
├── README.md                         (Project overview)
├── SETUP.md                          (Setup instructions)
├── DOCS.md                           (This file)
└── .gitignore                        (Git ignore rules)
```

---

## 🛠️ Development Tips

### Adding New Routes
1. Create controller function in `server/controllers/`
2. Create route in `server/routes/`
3. Mount route in `server/server.js`

### Adding New Pages
1. Create component in `client/src/pages/`
2. Add route in `client/src/index.js`
3. Add navigation link in header

### Styling New Components
1. Add CSS to relevant file in `client/src/styles/`
2. Use existing classes for consistency
3. Follow mobile-first responsive approach

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Port already in use | Change PORT in .env file |
| MongoDB connection fails | Use mock data or install MongoDB |
| CORS errors | Verify proxy setting in package.json |
| Styles not loading | Clear cache and restart dev server |
| Products not showing | Check backend is running on port 5000 |

---

## 📈 Future Enhancements

- **Authentication**
  - User registration and login
  - JWT token management
  - Protected routes

- **Payment Integration**
  - Stripe/PayPal integration
  - Order processing
  - Payment history

- **Features**
  - Product search
  - User reviews and ratings
  - Wishlist functionality
  - Product recommendations

- **Admin**
  - Admin dashboard
  - Product management
  - Order management
  - User management

- **Performance**
  - Product pagination
  - Image optimization
  - Caching strategies
  - Database indexing

---

## 📞 Support & Resources

- **Node.js**: https://nodejs.org/
- **React**: https://react.dev/
- **MongoDB**: https://www.mongodb.com/
- **Express**: https://expressjs.com/
- **Mongoose**: https://mongoosejs.com/

---

## 📄 License

ISC License - Feel free to use this project for learning and development.

---

**Version**: 1.0.0  
**Last Updated**: 2024  
**Status**: Production Ready ✅

