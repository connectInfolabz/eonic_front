import React from "react";
import TopBar from "../../Common/TopBar";
import NavBar from "../../Common/NavBar";
import Footer from "../../Common/Footer";
import ViewProductByCategoryComp from "./components/ViewProductsByCategoryComp";

function ViewProductsByCategory() {
  return (
    <>
      <TopBar />
      <NavBar />
      <ViewProductByCategoryComp />
      <Footer />
    </>
  );
}

export default ViewProductsByCategory;
