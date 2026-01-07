const Cart = require('../models/Cart');
const Product = require('../models/Product');

// Get cart
exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne().populate('items.productId');
    if (!cart) return res.json({ items: [], totalPrice: 0 });
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add to cart
exports.addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const product = await Product.findById(productId);
    
    if (!product) return res.status(404).json({ message: 'Product not found' });
    
    let cart = await Cart.findOne();
    if (!cart) {
      cart = new Cart({ items: [] });
    }
    
    const existingItem = cart.items.find(item => item.productId.toString() === productId);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({
        productId,
        quantity,
        price: product.price
      });
    }
    
    cart.totalPrice = cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    await cart.save();
    res.json(cart);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Remove from cart
exports.removeFromCart = async (req, res) => {
  try {
    const { productId } = req.params;
    const cart = await Cart.findOne();
    
    if (!cart) return res.status(404).json({ message: 'Cart not found' });
    
    cart.items = cart.items.filter(item => item.productId.toString() !== productId);
    cart.totalPrice = cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    
    await cart.save();
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Clear cart
exports.clearCart = async (req, res) => {
  try {
    const cart = await Cart.findOne();
    if (cart) {
      cart.items = [];
      cart.totalPrice = 0;
      await cart.save();
    }
    res.json({ items: [], totalPrice: 0 });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
