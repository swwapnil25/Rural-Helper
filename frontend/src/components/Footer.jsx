// src/components/Footer.jsx
import React from "react";
import ContactForm from "./ContactForm";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#2E7D32", // nice green shade
        color: "white",
        padding: "40px 20px",
        marginTop: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "24px",
            fontSize: "24px",
          }}
        >
          Contact Us
        </h2>

        {/* Contact Form */}
        <ContactForm />

        {/* Footer bottom text */}
        <p
          style={{
            textAlign: "center",
            marginTop: "30px",
            fontSize: "14px",
            color: "#f1f1f1",
          }}
        >
          © {new Date().getFullYear()} My Website — All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
