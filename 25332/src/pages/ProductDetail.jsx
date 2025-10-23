// pages/ProductDetail.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then(setProduct)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Cargando producto...</p>;
  if (error) return <p>Error al cargar el producto.</p>;
  if (!product) return <p>Producto no encontrado.</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} style={{ width: "150px" }} />
      <p>{product.description}</p>
      <p><strong>${product.price}</strong></p>
    </div>
  );
};

export default ProductDetail;
