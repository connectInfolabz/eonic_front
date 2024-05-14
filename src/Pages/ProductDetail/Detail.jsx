import React from "react";
import TopBar from "../../Common/TopBar";
import NavBar from "../../Common/NavBar";
import Footer from "../../Common/Footer";
import ProductDetail from "./components/ProductDetail";
import YouMayAlsoLike from "./components/YouMayAlsoLike";

function Detail() {
  return (
    <>
      <TopBar />
      <NavBar />
      <ProductDetail />
      <YouMayAlsoLike />
      <Footer />
    </>
  );
}
export default Detail;
