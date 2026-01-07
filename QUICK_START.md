# Quick Start Reference

## 🚀 Start Both Servers (Recommended)

### Terminal 1 - Backend
```bash
cd server
npm run dev
```
Expected: "Server is running on port 5000"

### Terminal 2 - Frontend  
```bash
cd client
npm start
```
Expected: Browser opens at http://localhost:3000

---

## 📱 Pages Available

| Page | URL | Features |
|------|-----|----------|
| Home | http://localhost:3000/ | Welcome, features, categories |
| Products | http://localhost:3000/products | Browse & filter products |
| Cart | http://localhost:3000/cart | View & manage cart items |

---

## 🛍️ Key Features

✅ **Home Page**
- Hero banner
- Feature cards
- Category showcase

✅ **Products Page** 
- 7 product categories
- Filter buttons
- Product cards
- Add to cart

✅ **Shopping Cart**
- Item list table
- Remove items
- Clear cart
- Total calculation

---

## 💡 Quick Tips

### To Add Sample Products to Database
```bash
cd server
npm run seed
```
This adds 20 sample products to MongoDB.

### To Change Port
Edit `server/.env`:
```
PORT=5001
```

### Without MongoDB?
The app works with mock data automatically!

### API Base URL
```
http://localhost:5000/api
```

---

## 📝 File Locations

| Item | Path |
|------|------|
| Backend Config | `server/.env` |
| Products Controller | `server/controllers/productController.js` |
| Cart Controller | `server/controllers/cartController.js` |
| Home Page | `client/src/pages/HomePage.js` |
| Products Page | `client/src/pages/ProductsPage.js` |
| Cart Page | `client/src/pages/CartPage.js` |
| Styles | `client/src/styles/` |

---

## 🎯 Product Categories

1. 🥬 Vegetables
2. 🍎 Fruits  
3. 🥛 Dairy
4. 🥩 Meat
5. 🥖 Bakery
6. 🥤 Beverages
7. 🍿 Snacks

---

## 🔗 API Routes

**GET** - Retrieve data
```
/api/products              → All products
/api/products/:id          → Single product
/api/cart                  → Current cart
```

**POST** - Create/Add data
```
/api/products              → Create product
/api/cart/add              → Add to cart
```

**PUT** - Update data
```
/api/products/:id          → Update product
```

**DELETE** - Remove data
```
/api/products/:id          → Delete product
/api/cart/:productId       → Remove from cart
/api/cart                  → Clear cart
```

---

## 🎨 Colors Used

- **Primary**: #667eea (Purple)
- **Dark**: #764ba2 (Dark Purple)
- **Secondary**: #6c757d (Gray)
- **Danger**: #dc3545 (Red)
- **Success**: #28a745 (Green)

---

## 📦 Dependencies

**Backend:**
- express, mongoose, cors, dotenv, bcryptjs, jsonwebtoken

**Frontend:**
- react, react-router-dom, axios

---

## ✅ Testing Checklist

- [ ] Backend starts without errors
- [ ] Frontend loads at http://localhost:3000
- [ ] Home page displays all sections
- [ ] Products page shows products
- [ ] Category filters work
- [ ] Add to cart works
- [ ] Cart page displays items
- [ ] Remove from cart works
- [ ] Clear cart works
- [ ] Navigation works between pages

---

## 🆘 Common Commands

```bash
# Install dependencies
npm install

# Start development server with auto-reload
npm run dev

# Start production server
npm start

# Seed database with sample data
npm run seed

# Install new package
npm install package-name
```

---

## 📚 Project Size

- **Backend**: ~500 lines of code
- **Frontend**: ~800 lines of code
- **Total**: ~1300 lines of production code
- **Pages**: 3 (Home, Products, Cart)
- **Components**: 4 (App, HomePage, ProductsPage, CartPage, ProductCard)
- **API Endpoints**: 10+

---

For more details, see:
- 📖 README.md - Full project overview
- 🔧 SETUP.md - Detailed setup guide
- 📋 DOCS.md - Complete documentation

---

**Ready to code? Start with the setup command above! 🎉**
