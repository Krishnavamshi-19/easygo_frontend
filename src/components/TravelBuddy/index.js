import React, { useState } from "react";
import Footer from "../Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
// import Products from './Products';
// import Products from './Products_2';
// import productData from "./Products3/data";
import Products from "./Products3";
import productData from "./Products/data";

const TravelBuddy = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Products heading="TravelBuddy" data={productData} />
      <Footer />
    </>
  );
};

export default TravelBuddy;
