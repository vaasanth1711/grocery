const http = require('http');

const API_URL = 'localhost:5000';
//hiuhh
// Product data to add (name, quantity, category)
const productsToAdd = [
  { name: 'Fresh Tomatoes', qty: 2, cat: 'Vegetables' },
  { name: 'Red Apples', qty: 3, cat: 'Fruits' },
  { name: 'Milk (1 Liter)', qty: 1, cat: 'Dairy' },
  { name: 'Chicken Breast (1 lb)', qty: 2, cat: 'Meat' },
  { name: 'Whole Wheat Bread', qty: 1, cat: 'Bakery' },
  { name: 'Orange Juice (1 L)', qty: 2, cat: 'Beverages' },
  { name: 'Chips (Regular)', qty: 1, cat: 'Snacks' }
];

function makeRequest(method, path, data) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: 5000,
      path: path,
      method: method,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const req = http.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(body));
        } catch {
          resolve(body);
        }
      });
    });

    req.on('error', reject);
    if (data) req.write(JSON.stringify(data));
    req.end();
  });
}

async function addProductsToCart() {
  try {
    console.log('📦 Fetching all products from database...\n');
    
    const allProducts = await makeRequest('GET', '/api/products');
    console.log(`✅ Found ${allProducts.length} products\n`);
    
    let cartTotal = 0;
    let itemsAdded = [];

    // Add each product from each category
    for (const productToAdd of productsToAdd) {
      const product = allProducts.find(p => p.name === productToAdd.name);
      
      if (product) {
        console.log(`🛒 Adding: ${productToAdd.qty}x ${productToAdd.name} (${productToAdd.cat})`);
        
        const cartData = await makeRequest('POST', '/api/cart/add', {
          productId: product._id,
          quantity: productToAdd.qty
        });
        
        const subtotal = product.price * productToAdd.qty;
        cartTotal = cartData.totalPrice;
        itemsAdded.push({
          name: productToAdd.name,
          price: product.price,
          qty: productToAdd.qty,
          subtotal: subtotal
        });
        
        console.log(`   ✅ Added! Price: $${product.price} × ${productToAdd.qty}\n`);
      } else {
        console.log(`❌ Product not found: ${productToAdd.name}\n`);
      }
    }

    // Display summary
    console.log('\n═══════════════════════════════════════════════════════');
    console.log('🛒 SHOPPING CART SUMMARY');
    console.log('═══════════════════════════════════════════════════════\n');
    
    itemsAdded.forEach((item, idx) => {
      console.log(`${idx + 1}. ${item.name}`);
      console.log(`   $${item.price.toFixed(2)} × ${item.qty} = $${item.subtotal.toFixed(2)}`);
    });
    
    console.log('\n═══════════════════════════════════════════════════════');
    console.log(`📦 Total Items: ${itemsAdded.length} products from 7 categories`);
    console.log(`💰 Cart Total: $${cartTotal.toFixed(2)}`);
    console.log('═══════════════════════════════════════════════════════\n');
    
    console.log('✨ Visit http://localhost:3000/cart to see your cart!\n');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

addProductsToCart();
