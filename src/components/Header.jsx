import React from "react";
import "../styles/Header.css";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Header() {
  const { totalAmount, itemCount } = useCart();
  const navigate = useNavigate();
  return (
    <header className="header">
      <h2 className="logo">Grocery Go</h2>
      <input
        type="text"
        placeholder="Search groceries..."
        className="search-bar"
      />
      <div className="header-actions">
        <div className="cart-pill">
          <span>Cart</span>
          <strong>({itemCount})</strong>
          <strong>₹{totalAmount.toFixed(2)}</strong>
        </div>
        <button className="login-btn" onClick={() => navigate("/login")}>
          Login / Signup
        </button>
      </div>
    </header>
  );
}

export default Header;
