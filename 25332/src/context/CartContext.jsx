import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Recuperar carrito desde localStorage al iniciar
  useEffect(() => {
    const storedCart = localStorage.getItem("carrito");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Guardar carrito en localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const removeFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, setCartItems, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
