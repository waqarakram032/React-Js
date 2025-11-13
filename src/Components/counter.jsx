import React, { useState } from "react";

const Calculator = () => {
  const [count, setcount] = useState("");
  return (
    <div
      style={{
        width: "260px",
        margin: "50px auto",
        border: "2px solid #333",
        borderRadius: "12px",
        padding: "20px",
        backgroundColor: "#f2f2f2",
        boxShadow: "0 0 15px rgba(0,0,0,0.2)",
      }}
    >
      <input
        type="text"
        placeholder="0"
        value={count}
        style={{
          width: "100%",
          height: "50px",
          textAlign: "right",
          fontSize: "24px",
          marginBottom: "15px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          paddingRight: "10px",
        }}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
        }}
      >
        <button style={btnStyle} onClick={() => setcount(count + "7")}>
          7
        </button>
        <button style={btnStyle} onClick={() => setcount(count + "8")}>
          8
        </button>
        <button style={btnStyle} onClick={() => setcount(count + "9")}>
          9
        </button>
        <button style={opStyle} onClick={() => setcount(count + "/")}>
          /
        </button>
        <button style={btnStyle} onClick={() => setcount(count + "4")}>
          4
        </button>
        <button style={btnStyle} onClick={() => setcount(count + "5")}>
          5
        </button>
        <button style={btnStyle} onClick={() => setcount(count + "6")}>
          6
        </button>
        <button style={opStyle} onClick={() => setcount(count + "*")}>
          *
        </button>
        <button style={btnStyle} onClick={() => setcount(count + "1")}>
          1
        </button>
        <button style={btnStyle} onClick={() => setcount(count + "2")}>
          2
        </button>
        <button style={btnStyle} onClick={() => setcount(count + "3")}>
          3
        </button>
        <button style={opStyle} onClick={() => setcount(count + "-")}>
          -
        </button>

        <button style={btnStyle} onClick={() => setcount(count + "0")}>
          0
        </button>
        <button style={btnStyle} onClick={() => setcount(count + ".")}>
          .
        </button>
        <button style={opStyle} onClick={() => setcount(eval(count))}>
          =
        </button>
        <button style={opStyle} onClick={() => setcount(count + "+")}>
          +
        </button>
        <button
          style={{
            gridColumn: "span 4",
            width: "100%",
            textAlign: "center",
            backgroundColor: "#ff9800",
            color: "#fff",
            border: "none",
            borderRadius:"5px",
            height:"50px",
            fontWeight:"bold",
            fontSize:"20px"
          }}
          onClick={() => setcount("")}
        >
          C
        </button>
      </div>
    </div>
  );
};


const btnStyle = {
  height: "50px",
  fontSize: "18px",
  borderRadius: "8px",
  border: "1px solid #999",
  backgroundColor: "#fff",
  cursor: "pointer",
};

const opStyle = {
  
  backgroundColor: "#ff9800",
  color: "#fff",
  border: "none",
};

export default Calculator;
