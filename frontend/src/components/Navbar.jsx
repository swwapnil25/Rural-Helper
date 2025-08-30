import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const userStr = localStorage.getItem("user");
  const user = userStr ? JSON.parse(userStr) : null;

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <header
      style={{
        background: "linear-gradient(135deg, #2E7D32, #1B5E20)",
        padding: "14px 28px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Brand */}
        <div
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            color: "white",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          RuralAccess
        </div>

        {/* Nav Links */}
        <nav style={{ display: "flex", gap: "22px" }}>
          {[
            { path: "/", label: "Home" },
            { path: "/services", label: "Services" },
            { path: "/products", label: "Products" },
            { path: "/contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                color: "white",
                textDecoration: "none", // removed underline
                fontSize: "16px",
                fontWeight: 500,
                position: "relative",
                padding: "6px 0",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.target.style.color = "#FFD54F")
              }
              onMouseLeave={(e) => (e.target.style.color = "white")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right side (Auth Buttons) */}
        <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
          {!token ? (
            <>
              <Link
                to="/login"
                style={{
                  color: "#fff",
                  textDecoration: "none", // removed underline
                  padding: "8px 16px",
                  borderRadius: "6px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "#388E3C";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "transparent";
                }}
              >
                Login
              </Link>
              <Link
                to="/register"
                style={{
                  color: "#2E7D32",
                  textDecoration: "none", // removed underline
                  background: "#fff",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "#FFD54F";
                  e.target.style.color = "#1B5E20";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "#fff";
                  e.target.style.color = "#2E7D32";
                }}
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/dashboard"
                style={{
                  color: "#fff",
                  fontWeight: "500",
                  textDecoration: "none", // removed underline
                  padding: "8px 16px",
                }}
              >
                {user?.name || "Dashboard"}
              </Link>
              <button
                onClick={logout}
                style={{
                  background: "#FFD54F",
                  border: "none",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: "600",
                  color: "#1B5E20",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "#FBC02D";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "#FFD54F";
                }}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
