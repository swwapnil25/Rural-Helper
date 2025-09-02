import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "rgb(10 76 13)",
        color: "#fff",
        textAlign: "center",
        padding: "16px 0",
        marginTop: "20px",
      }}
    >
   <p style={{ margin: 0 }}>© {new Date().getFullYear()} RuralAccess. All rights reserved.</p>
    </footer>
  );
}
