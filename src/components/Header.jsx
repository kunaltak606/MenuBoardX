import React from "react";
import "./Header.css"; // (Create this file for styling!)

function Header() {
  return (
    <header className="fs-header">
      <div className="fs-header-left">
        <img
          src="https://gianiicecream.in/wp-content/uploads/2023/03/giani-logo-1.png" // Replace with FoodScan logo URL or local file
          alt="Giani Logo"
          className="fs-header-logo"
        />
        <span className="fs-header-brand">
          <span style={{fontWeight: 600, color: "#212529"}}>Giani </span>
          <span style={{fontWeight: 600, color: "#2196f3"}}>Menu</span>
        </span>
      </div>
      <div className="fs-header-right">
        {/* <button className="fs-header-menu-btn" aria-label="menu">
          <svg width="28" height="28" viewBox="0 0 24 24">
            <rect x="4" y="7" width="16" height="2" rx="1" fill="#2196f3" />
            <rect x="4" y="15" width="16" height="2" rx="1" fill="#2196f3" />
          </svg>
        </button> */}
        <div className="fs-header-profile">
          <img
            src="https://i.pravatar.cc/150?img=4" // Demo user avatar
            alt="profile"
            className="fs-header-avatar"
          />
          <div>
            <span className="fs-header-hello">Hello</span>
            <div className="fs-header-name">Ice Cream Lover</div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
