import { useCartContext } from "../../context/CartContext";
import "./Carrito.css";

const Carrito = () => {
  const { cartItems, removeFromCart } = useCartContext();

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const finalizarCompra = () => {
    alert(`Gracias por tu compra. Total a pagar: $${total.toFixed(2)}`);
  };

  return (
    <div className="container">
      <h2>Tu carrito</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div className="cart-list">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-image" />
              <div className="cart-info">
                <h4>{item.title}</h4>
                <p>${item.price.toFixed(2)}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </div>
          ))}
          <div className="cart-summary">
            <strong>Total: ${total.toFixed(2)}</strong>
            <button onClick={finalizarCompra}>Finalizar compra</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrito;
