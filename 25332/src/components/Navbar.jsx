import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { cartItems } = useCart();
  const itemCount = cartItems.length;

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "1rem", background: "#eee" }}>
      <div>
        <Link to="/" style={{ marginRight: "1rem" }}>Inicio</Link>
        <Link to="/products" style={{ marginRight: "1rem" }}>Productos</Link>
        <Link to="/page/25832">Página dinámica</Link>
      </div>
      <div style={{ position: "relative" }}>
        <Link to="/cart">
          <FaShoppingCart size={32} />
          {itemCount > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-8px",
                right: "-8px",
                background: "red",
                color: "white",
                borderRadius: "50%",
                padding: "2px 6px",
                fontSize: "0.8rem",
              }}
            >
              {itemCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
