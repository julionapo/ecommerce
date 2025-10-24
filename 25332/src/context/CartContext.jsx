import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (producto) => {
    setCartItems((prevItems) => [...prevItems, producto]);
  };

  const removeFromCart = (id) => {
    const nuevoCarrito = cartItems.filter((item) => item.id !== id);
    setCartItems(nuevoCarrito);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
