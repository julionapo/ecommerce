import { useCart } from "../context/CartContext";
import { useState } from "react";

const productos = [
  {
    id: 25832,
    nombre: "Heladera Samsung 320L",
    descripcion: "Tecnología No Frost, eficiencia A+, diseño moderno en acero inoxidable.",
    precio: "$459.999",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_866457-MLA54928726490_042023-F.webp",
  },
  {
    id: 25833,
    nombre: "Lavarropas LG 8kg",
    descripcion: "Motor Direct Drive, función vapor, 14 programas de lavado, bajo consumo.",
    precio: "$379.999",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_944410-MLA51886325394_102022-F.webp",
  },
  {
    id: 25834,
    nombre: "Microondas BGH Quick Chef 25L",
    descripcion: "Función grill, descongelado automático, diseño moderno y compacto.",
    precio: "$89.999",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_648345-MLA31002501894_062019-F.webp",
  },
];

const Home = () => {
  const { cartItems, addToCart, setCartItems, removeFromCart } = useCart();
  const [productoActivo, setProductoActivo] = useState(null);

  const total = cartItems.reduce((acc, item) => {
    const precio = parseFloat(item.precio.replace("$", "").replace(".", "").replace(",", "."));
    return acc + precio;
  }, 0);

  return (
    <div>
      {/* Hero */}
      <section id="hero" style={{ padding: "4rem", textAlign: "center", background: "#f5f5f5" }}>
        <h1>Electrodomésticos destacados</h1>
        <p>Calidad, eficiencia y diseño para tu hogar</p>
        <a href="#productos">
          <button style={{ marginTop: "1rem", padding: "0.5rem 1rem", fontSize: "1rem" }}>Ver productos</button>
        </a>
      </section>

      {/* Productos */}
      <section id="productos" style={{ padding: "2rem" }}>
        <h2>Productos disponibles</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
          {productos.map((producto) => (
            <div key={producto.id} style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "1rem" }}>
              <img src={producto.imagen} alt={producto.nombre} style={{ width: "100%", borderRadius: "4px" }} />
              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion}</p>
              <strong>{producto.precio}</strong>
              <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem" }}>
                <button
                  onClick={() => addToCart(producto)}
                  style={{
                    padding: "0.5rem 1rem",
                    background: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    transition: "transform 0.2s",
                  }}
                  onMouseDown={(e) => e.currentTarget.style.transform = "scale(0.95)"}
                  onMouseUp={(e) => e.currentTarget.style.transform = "scale(1)"}
                >
                  Agregar al carrito
                </button>
                <button onClick={() => setProductoActivo(producto)}>Ver ficha</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ficha técnica */}
      {productoActivo && (
        <section id="ficha" style={{ padding: "2rem", background: "#eef" }}>
          <h2>Ficha técnica</h2>
          <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
            <img src={productoActivo.imagen} alt={productoActivo.nombre} style={{ width: "300px", borderRadius: "8px" }} />
            <div>
              <h3>{productoActivo.nombre}</h3>
              <p>{productoActivo.descripcion}</p>
              <strong>{productoActivo.precio}</strong>
              <br />
              <button
                onClick={() => addToCart(productoActivo)}
                style={{
                  marginTop: "1rem",
                  padding: "0.5rem 1rem",
                  background: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  transition: "transform 0.2s",
                }}
                onMouseDown={(e) => e.currentTarget.style.transform = "scale(0.95)"}
                onMouseUp={(e) => e.currentTarget.style.transform = "scale(1)"}
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Carrito */}
      <section id="carrito" style={{ padding: "2rem", background: "#f9f9f9" }}>
        <h2>🛒 Carrito</h2>
        {cartItems.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {cartItems.map((item, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "1rem",
                    borderBottom: "1px solid #ccc",
                    paddingBottom: "1rem"
                  }}
                >
                  <img
                    src={item.imagen}
                    alt={item.nombre}
                    style={{ width: "60px", marginRight: "1rem", borderRadius: "4px" }}
                  />
                  <div style={{ flexGrow: 1 }}>
                    <strong>{item.nombre}</strong>
                    <p style={{ margin: 0 }}>{item.precio}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(index)}
                    style={{
                      background: "#dc3545",
                      color: "#fff",
                      border: "none",
                      padding: "0.4rem 0.8rem",
                      borderRadius: "4px",
                      fontSize: "0.9rem",
                      cursor: "pointer",
                      marginLeft: "auto",
                      transition: "transform 0.2s",
                    }}
                    onMouseDown={(e) => e.currentTarget.style.transform = "scale(0.95)"}
                    onMouseUp={(e) => e.currentTarget.style.transform = "scale(1)"}
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
                onClick={() => setCartItems([])}
                style={{
                  background: "#dc3545",
                  color: "#fff",
                  padding: "0.5rem 1rem",
                  borderRadius: "4px",
                  cursor: "pointer"
                }}
              >
                Vaciar carrito
              </button>
              <button
                onClick={() => {
                  alert(`✅ ¡Gracias por tu compra!\nTotal a abonar: $${total.toLocaleString("es-AR", { minimumFractionDigits: 2 })}`);
                  setCartItems([]);
                }}
                style={{
                  background: "#28a745",
                  color: "#fff",
                  padding: "0.5rem 1rem",
                  borderRadius: "4px",
                  cursor: "pointer"
                }}
              >
                Finalizar compra
              </button>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Home;

