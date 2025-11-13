import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Blog from "../Components/blog";
import AboutPage from "../Pages/AboutPage";
import ContactPage from "../Pages/ContactPage";
import SingleProductPage from "../Pages/SingleProductPage"; 

const RRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/product/:id" element={<SingleProductPage />} /> 
    </Routes>
  );
};

export default RRoute;
