import React, { useEffect, useState } from "react";

const Quote = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [index, setIndex] = useState(0);
  const colors = ["white", "pink", "yellow", "blue"];

  const quotez = [
    "Life is what happens when you’re busy making other plans.",
    "Do not take life too seriously. You will never get out of it alive.",
    "Be yourself; everyone else is already taken.",
    "Happiness depends upon ourselves.",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % colors.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotez.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        fontSize: "24px",
        textAlign: "center",
        marginTop: "50px",
        backgroundColor: colors[index],
      
      }}
    >
      {quotez[quoteIndex]}
    </div>
  );
};

export default Quote;
