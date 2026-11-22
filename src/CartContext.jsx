import { createContext, useContext, useState, useCallback } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [message, setMessage] = useState("");

  const notify = useCallback((text) => {
    setMessage(text);
    setTimeout(() => setMessage(""), 1600);
  }, []);

  const add = useCallback((item) => {
    setItems((prev) => [...prev, item]);
    notify(`Added: ${item.name}`);
  }, [notify]);

  const remove = (index) => setItems((prev) => prev.filter((_, i) => i !== index));
  const total = items.reduce((sum, i) => sum + i.price, 0);

  return (
    <CartContext.Provider value={{ items, add, remove, total, message, notify }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
