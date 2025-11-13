import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductCards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={styles.container}>
      {products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        products.map((product) => (
          <div key={product.id} style={styles.card}>
            <img src={product.image} alt={product.title} style={styles.image} />
            <h3 style={styles.category}>{product.category}</h3>
            <h2 style={styles.title}>{product.title}</h2>
            <p style={styles.description}>
              {product.description.slice(0, 80)}...
            </p>
            <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
              <button style={styles.button}>Read More</button>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductCards;

// --- styles remain same ---

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    overflow: "hidden",
    textAlign: "center",
    padding: "15px",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "contain",
  },
  category: {
    color: "#f39c12",
    marginTop: "10px",
    textTransform: "capitalize",
  },
  title: {
    fontSize: "18px",
    margin: "10px 0",
  },
  description: {
    fontSize: "14px",
    color: "#555",
  },
  button: {
    backgroundColor: "#f39c12",
    color: "#fff",
    border: "none",
    padding: "8px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
};