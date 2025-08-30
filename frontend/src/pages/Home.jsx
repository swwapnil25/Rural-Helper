// frontend/src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import api from '../Api'; 
import ServiceCard from '../components/ServiceCard';
import ProductCard from '../components/ProductCard';
import ContactForm from '../components/ContactForm';
import products from '../data/products';

export default function Home(){
  const [services, setServices] = useState([]);
  const [news, setNews] = useState([]);
  const [clickedService, setClickedService] = useState(null); // Track which card was clicked

  useEffect(() => {
    api.get('/services').then(r => setServices(r.data)).catch(()=>{});
    api.get('/news').then(r => setNews(r.data)).catch(()=>{});
  }, []);

  return (
    <div>
      {/* HERO */}
      <section 
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          padding: "28px",
          marginTop: "20px",
          background: "linear-gradient(135deg, #ffffff, #f8fff8)",
          borderRadius: "12px",
          boxShadow: "0 6px 20px rgba(19,38,30,0.04)"
        }}
      >
        <div style={{ flex: 1 }}>
          <h1 style={{ margin: "0 0 8px 0", fontSize: "1.8rem" }}>
            Essential products and services for rural communities
          </h1>
          <p style={{ margin: 0, color: "#67707d" }}>
            Groceries, medicines, farming inputs and local helpful services — delivered and supported near you.
          </p>
        </div>

        <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
          <img
            src="https://i.ibb.co/jv8N7WqC/stock-photo-d-young-farmer-character-leaning-against-a-shovel-agriculture-occupation-illustration-co.jpg"
            alt="Rural support"
            style={{
              width: "100%",
              maxWidth: "1200px",
              height: "auto",
              maxHeight: "498px",
              borderRadius: "12px",
              objectFit: "cover"
            }}
          />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ marginTop: "18px", marginBottom: "8px" }}>
        <h2>Our Services</h2>

        {services.length === 0 ? (
          <p style={{ color: "#999", fontSize: "0.95rem", marginTop: "8px" }}>
            ⚠️ Services are temporarily not available. Please check back later.
          </p>
        ) : (
          <div
            style={{
              display: "grid",
              gap: "16px",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))"
            }}
          >
            {services.map(s => (
              <div key={s._id || s.name}>
                <ServiceCard 
                  s={s} 
                  onClick={() => setClickedService(s.title || s.name)} 
                />
                {/* Show message under the clicked card */}
                {clickedService === (s.title || s.name) && (
                  <p style={{ marginTop: "6px", color: "red", fontSize: "0.9rem", fontWeight: "bold" }}>
                    Services are temporarily not available. Please check back later.
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* AVAILABLE PRODUCTS */}
      <section style={{ marginTop: "18px", marginBottom: "8px" }}>
        <h2>Available Products</h2>
        <div style={{
          display: "grid",
          gap: "16px",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))"
        }}>
          {products.slice(0,6).map(p => (
            <ProductCard
              key={p._id}
              p={p}
              onAdd={() => { window.location.href = '/products'; }}
            />
          ))}
        </div>
      </section>

      {/* NEWS */}
      {/* NEWS */}
<section style={{ marginTop: "18px", marginBottom: "28px" }}>
  <h2>News & Updates</h2>
  <ul style={{ marginBottom: "20px", paddingLeft: "18px" }}>
    {news.map((n) => (
      <li
        key={n.id || n.title}
        style={{ color: "#67707d", fontSize: "0.95rem", marginBottom: "6px" }}
      >
        {n.title}
      </li>
    ))}
  </ul>
</section>


      {/* CONTACT */}
      <section id="contact" style={{ marginTop: "28px", marginBottom: "28px" }}>
        <h2 style={{ marginBottom: "16px", fontSize: "1.6rem" }}>Contact Us</h2>
        <div
          style={{
            background: "#ffffff",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
            border: "1px solid rgba(0,0,0,0.05)",
            marginBottom: "22px",
          }}
        >
          <h3 style={{ margin: "0 0 8px 0", color: "#2E7D32" }}>📍 Address</h3>
          <p style={{ margin: "4px 0", fontSize: "15px", color: "#333" }}>
            Rural-Helper Community Center, Near Gram Panchayat
          </p>
          <p style={{ margin: "4px 0", fontSize: "14px", color: "#555" }}>
            📞 Helpline: <b>+91 98222 33344</b>
          </p>
        </div>
        <ContactForm />
      </section>
    </div>
  );
}
