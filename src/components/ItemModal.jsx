import React, { useState } from "react";
import "./ItemModal.css";

function ItemModal({ item, onClose, onAdd }) {
  // For demo: Edit as per your needs!
  const [qty, setQty] = useState(1);
  const [extras, setExtras] = useState([]);
  const [addons, setAddons] = useState([]);
  const [instr, setInstr] = useState('');

  const basePrice = parseFloat(item.price.replace(/[^0-9.]/g, "")) || 0;
  const extrasPrice = extras.length * 1.00; // +1.00 per extra
  const addonsPrice = addons.length * 1.50; // +1.50 per addon
  const totalPrice = (basePrice + extrasPrice + addonsPrice) * qty;

  function handleAdd() {
    // Add whatever you need from modal state
    onAdd({ ...item, qty, extras, addons, instructions: instr, totalPrice });
  }

  return (
    <div className="modal-bg">
      <div className="item-modal">
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-header">
          <img src={item.img} alt={item.name} />
          <div>
            <div className="modal-title">{item.name}</div>
            <div className="modal-desc">{item.desc}</div>
            <div className="modal-price">{item.price}</div>
          </div>
        </div>
        <div className="modal-row">
          Quantity:
          <button onClick={() => setQty(Math.max(1, qty-1))}>-</button>
          <span>{qty}</span>
          <button onClick={() => setQty(qty+1)}>+</button>
        </div>
        <div className="modal-row">Extras:
          {["Avocado", "Bacon", "Chilli Fries"].map(opt =>
            <label key={opt}>
              <input
                type="checkbox"
                checked={extras.includes(opt)}
                onChange={() => setExtras(e =>
                  e.includes(opt) ? e.filter(o=>o!==opt) : [...e, opt]
                )} /> {opt} +1.00ETB
            </label>
          )}
        </div>
        <div className="modal-row">Addons:
          {["Soda (Can)"].map(opt =>
            <label key={opt}>
              <input
                type="checkbox"
                checked={addons.includes(opt)}
                onChange={() => setAddons(a =>
                  a.includes(opt) ? a.filter(o=>o!==opt) : [...a, opt]
                )} /> {opt} +1.50ETB
            </label>
          )}
        </div>
        <div className="modal-row">
          <textarea
            value={instr}
            onChange={e => setInstr(e.target.value)}
            placeholder="Add note (extra mayo, cheese, etc)"
          />
        </div>
        <button className="modal-add-btn" onClick={handleAdd}>
          Add to Cart – ₹{totalPrice.toFixed(2)}
        </button>
      </div>
    </div>
  );
}
export default ItemModal;
