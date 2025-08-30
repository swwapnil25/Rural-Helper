import React from "react";

export default function ServiceCard({ s, onClick }) {
  return (
    <div 
      className="card service-card" 
      onClick={onClick} 
      style={{ cursor: "pointer" }}
    >
      <div className="service-icon" style={{ fontSize: "32px" }}>
        {s.icon || "🔧"}
      </div>
      <h3>{s.title || s.name}</h3>
      <p className="small">{s.description || "Essential support for your village."}</p>
    </div>
  );
}
