const ProductCard = ({ product, onAddToCart }) => (
  <div style={{ border: "1px solid #ccc", padding: "1rem" }}>
    <h3>{product.title}</h3>
    <img src={product.image} alt={product.title} style={{ width: "100px" }} />
    <p>${product.price}</p>
    <button onClick={() => onAddToCart(product)}>Agregar al carrito</button>
  </div>
);

export default ProductCard;
