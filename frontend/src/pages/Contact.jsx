// src/pages/Contact.jsx
import React from "react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div style={{ padding: "40px", display: "flex", justifyContent: "center" }}>
      <div style={{ maxWidth: "600px", width: "100%" }}>
        {/* <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Get in Touch</h2> */}
        <ContactForm />
      </div>
    </div>
  );
}
