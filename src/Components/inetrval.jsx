import React, { useEffect, useState } from "react";

const Interval = () => {
  const [index, setIndex] = useState(0);
  const colors = ["white", "pink", "yellow", "blue"];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % colors.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []); 

  return (
    <div
      style={{
        backgroundColor: colors[index],
        height: "100vh",
        
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "24px",
        transition: "background-color 0.5s ease",
      }}
    >
      Background changing every 2 seconds...
    </div>
  );
};

export default Interval;
