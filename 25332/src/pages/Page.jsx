import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const productos = {
  25832: {
    nombre: "Heladera Samsung 320L",
    descripcion: "Tecnología No Frost, eficiencia A+, diseño moderno en acero inoxidable.",
    precio: "$459.999",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_866457-MLA54928726490_042023-F.webp",
  },
  25833: {
    nombre: "Lavarropas LG 8kg",
    descripcion: "Motor Direct Drive, función vapor, 14 programas de lavado, bajo consumo.",
    precio: "$379.999",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_944410-MLA51886325394_102022-F.webp",
  },
  25834: {
    nombre: "Microondas BGH Quick Chef 25L",
    descripcion: "Función grill, descongelado automático, diseño moderno y compacto.",
    precio: "$89.999",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_648345-MLA31002501894_062019-F.webp",
  },
};

const Page = () => {
  const { id } = useParams();
  const producto = productos[id];
  const { addToCart } = useCart();

  if (!producto) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{producto.nombre}</h1>
      <img src={producto.imagen} alt={producto.nombre} style={{ width: "300px", marginBottom: "1rem" }} />
      <p>{producto.descripcion}</p>
      <strong style={{ fontSize: "1.2rem" }}>{producto.precio}</strong>
      <br />
      <button
        onClick={() => addToCart(producto)}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          background: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default Page;
