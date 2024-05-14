import React from "react";
import TopBar from "../../Common/TopBar";
import NavBar from "../../Common/NavBar";
import Footer from "../../Common/Footer";
import ShowAllProducts from "./components/ShowAllProducts";

function Shop() {
  return (
    <>
      <TopBar />
      <NavBar />
      <ShowAllProducts />
      <Footer />
    </>
  );
}

export default Shop;
