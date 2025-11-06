import React, { useState } from "react";
import "./MenuMain.css";

// Example categories
const CATEGORIES = [
  { id: "all", name: "All", img: "https://img.icons8.com/color/48/000000/ingredients-box.png" },
  { id: "appetizers", name: "Appetizers", img: "https://img.icons8.com/color/48/000000/salad.png" },
  { id: "burgers", name: "Flame Grill Burgers", img: "https://img.icons8.com/color/48/000000/hamburger.png" },
  { id: "veggie", name: "Veggie & Plant Based Burgers", img: "https://img.icons8.com/color/48/000000/vegan-food.png" },
  // Add more categories as needed
];

// Example items
const MENU_ITEMS = [
  {
    id: 1,
    name: "Chicken Dumplings",
    category: "appetizers",
    price: "2.50ETB",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 2,
    name: "Egg Roll",
    category: "appetizers",
    price: "1.50ETB",
    img: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 3,
    name: "Fried Cheese Wonton",
    category: "appetizers",
    price: "2.00ETB",
    img: "https://images.unsplash.com/photo-1464306076886-debede14baa9?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 4,
    name: "Vegetable Dumplings",
    category: "veggie",
    price: "2.50ETB",
    img: "https://images.unsplash.com/photo-1459802071246-2010b6e16c2a?auto=format&fit=crop&w=400&q=80"
  },
  // Add more items as needed
];

const MenuMain = ({ onAddClick }) => {

  const [search, setSearch] = useState("");
  const [activeCat, setActiveCat] = useState("all");

  const filteredItems = MENU_ITEMS.filter(item =>
    (activeCat === "all" || item.category === activeCat) &&
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="menu-main">
      {/* Search */}
      <div className="menu-search">
        <input
          type="text"
          placeholder="Search by Menu Item"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button className="menu-search-btn">
          <svg height="24" width="24" fill="#2196f3" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27..."/>
            <circle cx="10.5" cy="10.5" r="7.5" stroke="#2196f3" fill="none"/>
          </svg>
        </button>
      </div>

      {/* Categories */}
      <div className="menu-cat-scroll">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            className={`menu-cat-btn${activeCat===cat.id?" active":""}`}
            onClick={() => setActiveCat(cat.id)}
          >
            <img src={cat.img} alt={cat.name} />
            <span>{cat.name}</span>
          </button>
        ))}
      </div>

      {/* Items Grid */}
      <div className="menu-items-grid">
        {filteredItems.map(item => (
          <div key={item.id} className="menu-item-card">
            <img src={item.img} alt={item.name} className="menu-item-img"/>
            <div className="menu-item-infos">
              <div className="menu-item-title">{item.name}</div>
              <div className="menu-item-bottom">
                <span className="menu-item-price">{item.price}</span>
                <button className="menu-item-add" onClick={() => onAddClick(item)}>
                  <svg viewBox="0 0 20 20" fill="#2196f3" width="20" height="20"><path d="M10,5 L10,15 M5,10 L15,10" stroke="#2196f3" strokeWidth="2" strokeLinecap="round"/></svg>
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
        {filteredItems.length === 0 && <div className="empty-state">No items found.</div>}
      </div>
    </main>
  );
};


export default MenuMain;
