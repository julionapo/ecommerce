// hooks/useProducts.js
import { useState, useEffect } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(setProducts)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error };
};
