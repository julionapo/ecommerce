import { useProducts } from "../hooks/useProducts";
import ProductCard from "./ProductCard";

const ProductList = ({ onAddToCart }) => {
  const { products, loading, error } = useProducts();

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error al cargar productos.</p>;

  return (
    <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default ProductList;
