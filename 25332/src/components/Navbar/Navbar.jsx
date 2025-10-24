import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";


import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  const { cartItems } = useCartContext();

  const itemCount = cartItems.length;

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "1rem", background: "#eee" }}>
      <div>
        <Link to="/" style={{ marginRight: "1rem" }}>Inicio</Link>
        <a href="#productos">Productos</a>

        <Link to="/page/25832">Página dinámica</Link>
      </div>
      <div style={{ position: "relative" }}>
        <Link to="/carrito">
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

export default NavBar;
