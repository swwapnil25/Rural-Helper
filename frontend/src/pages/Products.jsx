// frontend/src/pages/Products.jsx
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

export default function Products() {
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState([]);

  function addToCart(p) {
    const found = cart.find(i => i.productId === p._id);
    if (found) {
      setCart(cart.map(i => i.productId === p._id ? { ...i, qty: i.qty + 1 } : i));
    } else {
      setCart([...cart, { productId: p._id, name: p.name, price: p.price, qty: 1 }]);
    }
  }

  function removeFromCart(id) {
    setCart(cart.filter(i => i.productId !== id));
  }

  return (
    <div>
      <h2>Products</h2>

      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <input
          className="input"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid">
        {products
          .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
          .map(p => (
            <ProductCard key={p._id} p={p} onAdd={addToCart} />
          ))
        }
      </div>

      <div style={{ marginTop: 16 }} className="card">
        <h3>Your Cart</h3>
        {cart.length === 0 ? (
          <p className="small">Cart is empty</p>
        ) : (
          <>
            {cart.map(i => (
              <div key={i.productId} className="cart-item">
                <div>{i.name} x {i.qty}</div>
                <div>
                  <span className="small">₹ {i.price * i.qty}</span>
                  <button style={{ marginLeft: 12 }} onClick={() => removeFromCart(i.productId)}>Remove</button>
                </div>
              </div>
            ))}
            <div className="total-row">
              <strong>Total</strong>
              <strong>₹ {cart.reduce((s, i) => s + i.price * i.qty, 0)}</strong>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
