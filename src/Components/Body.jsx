import React from "react";


const Body = () => {
  const mainStyle = {
    padding: "40px 20px",
    minHeight: "70vh",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
  };

  const titleStyle = {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#222",
  };

  const textStyle = {
    fontSize: "16px",
    maxWidth: "700px",
    margin: "0 auto",
    color: "#555",
    lineHeight: "1.6",
  };

  const cardContainer = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    marginTop: "40px",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    width: "250px",
    padding: "20px",
    textAlign: "left",
    transition: "transform 0.3s ease",
  };

  const cardTitle = {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "10px",
  };

  const cardText = {
    fontSize: "14px",
    color: "#666",
  };

  return (
    <main style={mainStyle}>
      <h1 style={titleStyle}>Blogify</h1>
      <p style={textStyle}>
        Welcome to Blogify, where words come alive and ideas flourish. Dive into
        a world of captivating stories, insightful perspectives, and
        thought-provoking articles that traverse the realms of DK's blog's main
        themes or topics. Our home is a virtual sanctuary for curious minds, a
        place where the beauty of language meets the depth of exploration.
      </p>

      <div style={cardContainer}>
        <div
          style={cardStyle}
          // onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          // onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <h3 style={cardTitle}>💰 Live Prices</h3>
          <p style={cardText}>
            Get the latest gold and silver prices updated in real time.
          </p>
        </div>

        <div
          style={cardStyle}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <h3 style={cardTitle}>📊 Interactive Charts</h3>
          <p style={cardText}>
            Analyze market trends with easy-to-read 1-year performance graphs.
          </p>
        </div>
        

        <div
          style={cardStyle}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <h3 style={cardTitle}>🔔 Price Alerts</h3>
          <p style={cardText}>
            Set custom alerts and never miss a price drop or spike.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Body;
