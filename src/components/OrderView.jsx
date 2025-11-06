import React from "react";
import "./OrderView.css";

function OrderView({ cart, onClose, onClear, onEdit }) {
  const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <div className="orderview-bg">
      <div className="orderview-modal">
        <button className="orderview-close" onClick={onClose} aria-label="Close Cart">×</button>
        <h2>Your Cart</h2>
        <button className="orderview-clearbtn" onClick={onClear}>
          Clear Cart
        </button>
        {cart.length === 0 ? (
          <div className="orderview-empty">Your cart is empty.</div>
        ) : (
          <>
            <div className="orderview-list">
              {cart.map((item, idx) => (
                <div key={idx} className="orderview-item">
                  <img src={item.img} alt={item.name} className="orderview-img" />
                  <div>
                    <div className="orderview-name">
                      {item.name} <span>x{item.qty}</span>
                      <button
                        className="orderview-editbtn"
                        onClick={() => onEdit(idx)}
                        aria-label={`Edit ${item.name}`}
                      >
                        Edit
                      </button>
                    </div>
                    {item.extras && item.extras.length > 0 && (
                      <div className="orderview-options">+ {item.extras.join(", ")}</div>
                    )}
                    {item.addons && item.addons.length > 0 && (
                      <div className="orderview-options">Addons: {item.addons.join(", ")}</div>
                    )}
                    {item.instructions && (
                      <div className="orderview-instr">
                        <span>Note:</span> {item.instructions}
                      </div>
                    )}
                  </div>
                  <span className="orderview-price">${item.totalPrice.toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="orderview-total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default OrderView;
