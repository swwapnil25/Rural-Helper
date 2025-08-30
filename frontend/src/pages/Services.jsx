// src/pages/Services.jsx
import React, { useEffect, useState } from "react";
import api from "../Api";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  const [services, setServices] = useState([]);
  const [clickedService, setClickedService] = useState(null);

  useEffect(() => {
    fetchServices();
  }, []);

  async function fetchServices() {
    try {
      const res = await api.get("/services");
      setServices(res.data);
    } catch (err) {
      console.error("Error fetching services", err);
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Our Services</h2>
      <div
        style={{
          display: "grid",
          gap: "16px",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          marginTop: "16px",
        }}
      >
        {services.map((s) => (
          <div key={s._id || s.name}>
            {/* service card */}
            <div onClick={() => setClickedService(s.title || s.name)}>
              <ServiceCard s={s} />
            </div>

            {/* show unavailable message only for clicked service */}
            {clickedService === (s.title || s.name) && (
              <p
                style={{
                  marginTop: "6px",
                  color: "red",
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                }}
              >
                ⚠️ Services are temporarily not available. Please check back
                later.
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
