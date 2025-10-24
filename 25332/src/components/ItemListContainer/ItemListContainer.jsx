import { useEffect, useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const { cartItems, addToCart, setCartItems, removeFromCart } = useCartContext();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productoActivo, setProductoActivo] = useState(null);
  const [primeraCompra, setPrimeraCompra] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error al cargar productos");
        setLoading(false);
      });
  }, []);

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  if (loading) return <p style={{ padding: "2rem" }}>Cargando productos...</p>;
  if (error) return <p style={{ padding: "2rem", color: "red" }}>{error}</p>;

  return (
    <div className="container">
      <h2>Productos disponibles</h2>
      <div className="product-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="product-card">
            <img src={producto.image} alt={producto.title} className="product-image" />
            <div className="product-info">
              <h3 className="product-title">{producto.title}</h3>
              <p className="product-description">{producto.description}</p>

              <strong className="product-price">${producto.price.toFixed(2)}</strong>

              <div className="product-buttons">
                <button
                  onClick={() => {
                    addToCart(producto);
                    if (primeraCompra) {
                      alert("🛒 Producto agregado. Tocá el ícono del carrito para ver tus compras, el total gastado y finalizar.");
                      setPrimeraCompra(false);
                    }
                  }}
                >
                  Agregar al carrito
                </button>
                <Link to={`/producto/${producto.id}`}>Ver ficha</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
