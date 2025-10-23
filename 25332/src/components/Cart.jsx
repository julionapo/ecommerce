import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems, setCartItems, removeFromCart } = useContext(CartContext);

  const vaciarCarrito = () => setCartItems([]);

  if (cartItems.length === 0) {
    return (
      <div style={{ padding: "2rem" }}>
        <h2>🛒 Tu carrito está vacío</h2>
        <p>Agregá productos desde la página de inicio o desde la ficha técnica.</p>
      </div>
    );
  }

  const total = cartItems.reduce((acc, item) => {
    const precio = parseFloat(item.precio.replace("$", "").replace(".", "").replace(",", "."));
    return acc + precio;
  }, 0);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>🛒 Carrito de compras</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {cartItems.map((item, index) => (
            <li key={index} style={{ display: "flex", alignItems: "center", marginBottom: "1rem", borderBottom: "1px solid #ccc", paddingBottom: "1rem" }}>
                <img src={item.imagen} alt={item.nombre} style={{ width: "80px", marginRight: "1rem", borderRadius: "4px" }} />
                <div style={{ flexGrow: 1 }}>
                <strong>{item.nombre}</strong>
                <p style={{ margin: 0 }}>{item.precio}</p>
                </div>
                <button
                onClick={() => removeFromCart(index)}
                style={{ background: "#ff4d4d", color: "#fff", border: "none", padding: "0.3rem 0.6rem", borderRadius: "4px" }}
                >
                🗑 Quitar
                </button>
            </li>
        ))}

      </ul>
      <hr />
      <h3>Total: ${total.toLocaleString("es-AR", { minimumFractionDigits: 2 })}</h3>
      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <button
          onClick={vaciarCarrito}
          style={{ padding: "0.5rem 1rem", background: "#dc3545", color: "#fff", border: "none", borderRadius: "4px" }}
        >
          Vaciar carrito
        </button>
        <button
          style={{ padding: "0.5rem 1rem", background: "#28a745", color: "#fff", border: "none", borderRadius: "4px" }}
        >
          Finalizar compra
        </button>
      </div>
    </div>
  );
};

export default Cart;


