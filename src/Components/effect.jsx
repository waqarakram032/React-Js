import React, { useEffect, useState } from 'react';

const Effect = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Users List</h2>
      {products.length === 0 ? (
        <p>.....Loading</p>
      ) : (
products.map((product) => (
          <p key={product.id}>{product.name}</p>
        ))
      )}
    </div>
  );
};

export default Effect;
        