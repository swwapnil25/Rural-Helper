// src/components/ContactForm.jsx
import React, { useState } from "react";
import api from "../Api";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/contact", form);
      setStatus("Submitted — thank you!");
      setForm({ name: "", email: "", phone: "", address: "", message: "" });
    } catch (err) {
      setStatus("Error — please try again");
    }
  };

  return (
    <form
      onSubmit={submit}
      style={{
        background: "#fff",
        padding: "28px",
        borderRadius: "12px",
        boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h3
        style={{
          textAlign: "center",
          marginBottom: "12px",
          color: "#2E7D32",
        }}
      >
        Contact Us
      </h3>

      <input
        style={{
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "15px",
        }}
        name="name"
        placeholder="Your name"
        value={form.name}
        onChange={handle}
        required
      />

      <input
        style={{
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "15px",
        }}
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handle}
        required
      />

      <input
        style={{
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "15px",
        }}
        type="tel"
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handle}
        required
      />

      <input
        style={{
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "15px",
        }}
        name="address"
        placeholder="Address"
        value={form.address}
        onChange={handle}
      />

      <textarea
        style={{
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "15px",
          minHeight: "120px",
          resize: "vertical",
        }}
        name="message"
        placeholder="Message"
        value={form.message}
        onChange={handle}
        rows="4"
        required
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <button
          type="submit"
          style={{
            background: "linear-gradient(135deg, #4CAF50, #2E7D32)",
            color: "white",
            border: "none",
            padding: "12px 24px",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "0.3s ease",
          }}
        >
          Send Message
        </button>
        <div
          style={{
            fontSize: "14px",
            color: status.includes("Error") ? "red" : "green",
            fontWeight: "500",
          }}
        >
          {status}
        </div>
      </div>
    </form>
  );
}
