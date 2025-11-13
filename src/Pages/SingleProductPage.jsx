import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProductPage = () => {
  const { id } = useParams(); // ✅ get product id from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <img src={product.image} alt={product.title} width="300" />
      <h2>{product.title}</h2>
      <h3>Category: {product.category}</h3>
      <p>{product.description}</p>
      <h3>Price: ${product.price}</h3>
    </div>
  );
};

export default SingleProductPage;
