# MERN Grocery Store

A complete e-commerce website for a grocery store built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

### Pages
1. **Home Page** - Landing page with features and categories
2. **Products Page** - Browse all products with category filtering
3. **Shopping Cart** - View, manage, and checkout items

### Functionality
- Browse products by category
- Add products to shopping cart
- View cart contents
- Remove items from cart
- Mock product data for demo
- Responsive design for mobile and desktop

## Project Structure

```
project/
├── server/                 # Node.js + Express Backend
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── controllers/       # Business logic
│   ├── server.js          # Main server file
│   ├── package.json
│   └── .env
│
└── client/                # React Frontend
    ├── src/
    │   ├── pages/        # Page components
    │   ├── components/   # Reusable components
    │   ├── styles/       # CSS files
    │   ├── App.js
    │   └── index.js
    ├── public/
    └── package.json
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables in `.env`:
   ```
   MONGODB_URI=mongodb://localhost:27017/grocery-store
   PORT=5000
   NODE_ENV=development
   ```

4. Start the server:
   ```bash
   npm start
   ```
   For development with auto-reload:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The application will open at `http://localhost:3000`

## API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `GET /api/products/category/:category` - Get products by category
- `POST /api/products` - Create new product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

### Cart
- `GET /api/cart` - Get cart
- `POST /api/cart/add` - Add item to cart
- `DELETE /api/cart/:productId` - Remove item from cart
- `DELETE /api/cart` - Clear entire cart

## Product Categories

- Vegetables
- Fruits
- Dairy
- Meat
- Bakery
- Beverages
- Snacks

## Technologies Used

### Backend
- **Express.js** - Web server framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **CORS** - Cross-Origin Resource Sharing
- **Dotenv** - Environment variables

### Frontend
- **React** - UI library
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client
- **CSS3** - Styling with responsive design

## Usage

1. **Browse Products**: Navigate to the Products page to see all available items
2. **Filter by Category**: Use the category filters to narrow down products
3. **Add to Cart**: Select quantity and click "Add to Cart"
4. **View Cart**: Click on the Cart link to see your items
5. **Checkout**: Click the Checkout button to proceed (demo only)
6. **Clear Cart**: Remove all items from cart with one click

## Styling

The application features:
- Modern gradient color scheme (purple/blue)
- Responsive grid layouts
- Hover effects and smooth transitions
- Mobile-friendly design
- Clean and intuitive UI

## Future Enhancements

- User authentication and registration
- Order history and management
- Payment gateway integration
- Product search functionality
- Product reviews and ratings
- Admin dashboard
- Order tracking
- Email notifications

## Notes

- The demo uses mock data when the API is unavailable
- MongoDB connection is optional for testing the UI
- Ensure both frontend and backend servers are running
- The frontend is configured to proxy API calls to `http://localhost:5000`

## License

ISC

