import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCartContext } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCartContext();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProducto(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error al cargar el producto");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Cargando producto...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!producto) return null;

  return (
    <div className="container">
      <h2>{producto.title}</h2>
      <img src={producto.image} alt={producto.title} style={{ maxWidth: "300px" }} />
      <p>{producto.description}</p>
      <strong>${producto.price.toFixed(2)}</strong>
      <br />
      <button className="button" onClick={() => addToCart(producto)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductDetail;
