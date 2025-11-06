import React from "react";
import "./FooterBar.css";

function FooterBar({ cartTotal, onViewOrder }) {
  return (
    <div className="footer-bar">
      <div className="footer-bar-content">
        <span className="footer-bar-cart">
          <svg width="18" height="18" fill="#fff" style={{marginRight: "7px"}}>
            <circle cx="9" cy="9" r="8" fill="#fff" opacity="0.6"/>
            <text x="9" y="12" fontSize="10" textAnchor="middle" fill="#2196f3">🛒</text>
          </svg>
          Items – <span className="footer-bar-amount">${cartTotal.toFixed(2)}</span>
        </span>
        <button className="footer-bar-btn" onClick={onViewOrder}>
          View Order
        </button>
      </div>
    </div>
  );
}

export default FooterBar;
