// frontend/src/components/ProductCard.jsx
import React from 'react';

export default function ProductCard({ p, onAdd }){
  return (
    <div className="card">
      <img
        className="product-img"
        src={
          p.imageUrl ||
          "https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=1200&auto=format&fit=crop"
        }
        alt={p.name}
      />
      <h4 style={{margin:'6px 0'}}>{p.name}</h4>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div className="price">₹ {p.price}</div>
        <button className="btn btn-primary" onClick={() => onAdd(p)}>Add</button>
      </div>
    </div>
  );
}
