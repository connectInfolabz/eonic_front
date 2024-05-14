import React from "react";
import TopBar from "../../Common/TopBar";
import NavBar from "../../Common/NavBar";
import Footer from "../../Common/Footer";
import ContactComp from "./components/ContactComp";

function Contact() {
  return (
    <>
      <TopBar />
      <NavBar />

      <ContactComp />
      <Footer />
    </>
  );
}

export default Contact;
