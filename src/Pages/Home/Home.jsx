import React from "react";
import TopBar from "../../Common/TopBar";
import NavBar from "../../Common/NavBar";
import Footer from "../../Common/Footer";
import Carousel from "./components/Banner";
import Features from "./components/Features";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import Vendor from "./components/Vendor";

function Home() {
  return (
    <>
      <TopBar />
      <NavBar />
      <Carousel />
      <Features />
      <Categories />
      <FeaturedProducts />
      {/* <Offers /> */}
      {/* <RecentProducts /> */}
      <Vendor />
      <Footer />
    </>
  );
}

export default Home;
