import React, { useState } from "react";
import "./MenuMain.css";

// Example categories
const CATEGORIES = [
  { id: "all", name: "All", img: "https://img.icons8.com/color/48/ingredients.png" },
  { id: "special_ice_cream", name: "Special Ice Cream", img: "https://img.icons8.com/color/48/ice-cream-bowl.png" },
  { id: "guilt_free_ice_cream", name: "Guilt Free", img: "https://img.icons8.com/color/48/leaf.png" },
  { id: "fruit_ice_cream", name: "Fruit Ice Cream", img: "https://img.icons8.com/color/48/strawberry.png" },
  { id: "choco_nut_cone", name: "Choco Nut Cone", img: "https://img.icons8.com/color/48/waffle-ice-cream.png" },
  { id: "italian_gelato", name: "Italian Gelato", img: "https://img.icons8.com/color/48/frozen-yogurt.png" },
  { id: "sundae", name: "Sundaes", img: "https://img.icons8.com/color/48/ice-cream-sundae.png" },
  { id: "sorbet", name: "Sorbet Vegan", img: "https://img.icons8.com/color/48/popsicle.png" },
  { id: "stone_sundae", name: "Stone Sundae", img: "https://img.icons8.com/color/48/ice-cream-bowl.png" },
  { id: "ice_cream_cake", name: "Ice Cream Cake", img: "https://img.icons8.com/color/48/birthday-cake.png" },
  { id: "ice_cream_shake", name: "Ice Cream Shake", img: "https://img.icons8.com/color/48/milkshake.png" },
  { id: "fruit_shake", name: "Fruit Shake", img: "https://img.icons8.com/color/48/banana-smoothie.png" },
  { id: "ice_cream_soda", name: "Ice Cream Soda", img: "https://img.icons8.com/color/48/soda.png" },
  { id: "add_ons", name: "Add Ons", img: "https://img.icons8.com/color/48/add.png" },
  { id: "kulfi", name: "Kulfi", img: "https://img.icons8.com/color/48/popsicle.png" },
  { id: "faluda", name: "Faluda", img: "https://img.icons8.com/color/48/smoothie.png" },
  { id: "cassata", name: "Cassata", img: "https://img.icons8.com/color/48/cake.png" }
];



// Example items
const MENU_ITEMS = [
  { id: 1, category: "special_ice_cream", name: "Vanilla", price: "68", img: "https://images.unsplash.com/photo-1439396087961-98bc12c21176?auto=format&fit=crop&w=400&q=80" },
  { id: 2, category: "special_ice_cream", name: "Strawberry", price: "68", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" },
  { id: 3, category: "special_ice_cream", name: "Cotton Candy", price: "76", img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" },
  { id: 4, category: "special_ice_cream", name: "Tutty Fruity", price: "76", img: "https://images.unsplash.com/photo-1519864600265-abb2529227a1?auto=format&fit=crop&w=400&q=80" },
  { id: 5, category: "special_ice_cream", name: "Bubble Gum", price: "76", img: "https://images.unsplash.com/photo-1458938354258-3e66eb36eb7b?auto=format&fit=crop&w=400&q=80" },
  { id: 6, category: "special_ice_cream", name: "Rose Special", price: "85", img: "https://images.unsplash.com/photo-1464306076886-debede14baa9?auto=format&fit=crop&w=400&q=80" },
  { id: 7, category: "special_ice_cream", name: "Brownie Walnut", price: "89", img: "https://images.unsplash.com/photo-1516749711405-6e41babd77b5?auto=format&fit=crop&w=400&q=80" },
  { id: 8, category: "special_ice_cream", name: "California Mania", price: "89", img: "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?auto=format&fit=crop&w=400&q=80" },
  { id: 9, category: "special_ice_cream", name: "Butterscotch", price: "89", img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=400&q=80" },
  { id: 10, category: "special_ice_cream", name: "Coffee Walnut", price: "89", img: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?auto=format&fit=crop&w=400&q=80" },
  { id: 11, category: "special_ice_cream", name: "Black Currant", price: "89", img: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=400&q=80" },
  { id: 12, category: "special_ice_cream", name: "Kesar Kulfi", price: "89", img: "https://images.unsplash.com/photo-1465101178521-c1a9136a2737?auto=format&fit=crop&w=400&q=80" },
  { id: 13, category: "special_ice_cream", name: "Chunky Munky", price: "89", img: "https://images.unsplash.com/photo-1532635111-bc4e6f23af89?auto=format&fit=crop&w=400&q=80" },
  { id: 14, category: "special_ice_cream", name: "Chocolate Chips", price: "89", img: "https://images.unsplash.com/photo-1502741126161-b048400d98b2?auto=format&fit=crop&w=400&q=80" },
  { id: 15, category: "special_ice_cream", name: "Almond Chocolate Fudge", price: "89", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" },
  { id: 16, category: "special_ice_cream", name: "Giani Special", price: "89", img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" },
  { id: 17, category: "special_ice_cream", name: "Red Velvet", price: "102", img: "https://images.unsplash.com/photo-1464306076886-debede14baa9?auto=format&fit=crop&w=400&q=80" },
  { id: 18, category: "special_ice_cream", name: "American Nut", price: "102", img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" },
  { id: 19, category: "special_ice_cream", name: "Punjabi Delight", price: "89", img: "https://images.unsplash.com/photo-1465101178521-c1a9136a2737?auto=format&fit=crop&w=400&q=80" },
  { id: 20, category: "special_ice_cream", name: "Black Forest", price: "102", img: "https://images.unsplash.com/photo-1439396087961-98bc12c21176?auto=format&fit=crop&w=400&q=80" },
  { id: 21, category: "special_ice_cream", name: "Belgian Chocolate", price: "102", img: "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?auto=format&fit=crop&w=400&q=80" },
  { id: 22, category: "special_ice_cream", name: "Cream N Cookies", price: "102", img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" },
  { id: 23, category: "special_ice_cream", name: "Mocha Brownie", price: "102", img: "https://images.unsplash.com/photo-1516749711405-6e41babd77b5?auto=format&fit=crop&w=400&q=80" },
  { id: 24, category: "special_ice_cream", name: "Premium Kulfi", price: "102", img: "https://images.unsplash.com/photo-1465101178521-c1a9136a2737?auto=format&fit=crop&w=400&q=80" },
  { id: 25, category: "special_ice_cream", name: "Thandai", price: "102", img: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=400&q=80" },
  { id: 26, category: "special_ice_cream", name: "Elaichi Toffee", price: "102", img: "https://images.unsplash.com/photo-1439396087961-98bc12c21176?auto=format&fit=crop&w=400&q=80" }
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
