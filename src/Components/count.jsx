import React, { useState } from "react";

const Count = () => {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);

  const handleLike = () => {
    if (like) {
      setLike(false);
      setCount((prev) => prev - 1);
    } else {
      setLike(true);
      setCount((prev) => prev + 1);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
      }}
    >
      <button
        onClick={handleLike}
        style={{
          fontSize: "50px",
          border: "none",
          background: "transparent",
          cursor: "pointer",
          color: like ? "red" : "gray",
          transition: "transform 0.2s ease, color 0.2s ease",
          transform: like ? "scale(1.3)" : "scale(1)",
        }}
      >
        ❤️
      </button>

      <p style={{ fontSize: "20px", fontWeight: "bold" }}>
        {count} {count === 1 ? "Like" : "Likes"}
      </p>
    </div>
  );
};

export default Count;
