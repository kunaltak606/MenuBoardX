import React, { useState } from "react";
import Header from "./components/Header";
import MenuMain from "./components/MenuMain";
import FooterBar from "./components/FooterBar";
import ItemModal from "./components/ItemModal"; // new component
import OrderView from "./components/OrderView";


function App() {
  const [cart, setCart] = useState([]);
  const [modalItem, setModalItem] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);


  // Called when "Add" is clicked on MenuMain
  const handleAddClick = (itemData) => setModalItem(itemData);
  
  const handleRemoveCart = (idx) => {
  const updated = cart.filter((_, i) => i !== idx);
  setCart(updated);
  };


  // Called when user adds item from modal
  const handleAddToCart = (itemWithOptions) => {
  if (editingIndex !== null) {
    // Replace the item in the cart being edited
    const updated = [...cart];
    updated[editingIndex] = itemWithOptions;
    setCart(updated);
    setEditingIndex(null);
  } else {
    setCart([...cart, itemWithOptions]);
  }
  setModalItem(null);
};

    const handleEditCart = (idx) => {
    setEditingIndex(idx);
    setModalItem(cart[idx]);
    setShowOrder(false); // Hide order modal while editing
  };


  const cartTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
  const [showOrder, setShowOrder] = useState(false);


  return (
    <>
      <Header />
      <MenuMain onAddClick={handleAddClick} />
      <FooterBar cartTotal={cartTotal} onViewOrder={() => setShowOrder(true)} />
      {showOrder && (
        <OrderView
          cart={cart}
          onClose={() => setShowOrder(false)}
          onClear={() => setCart([])}
          onEdit={handleEditCart}
          onRemove={handleRemoveCart}
        />
      )}


      {modalItem && (
        <ItemModal
          item={modalItem}
          onClose={() => setModalItem(null)}
          onAdd={handleAddToCart}
        />
      )}
    </>
  );
}

export default App;
