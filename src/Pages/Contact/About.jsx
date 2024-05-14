import React from "react";
import { NavLink } from "react-router-dom";
import TopBar from "../../Common/TopBar";
import NavBar from "../../Common/NavBar";
import Footer from "../../Common/Footer";
// import 'bootstrap/dist/css/bootstrap.min.css';

function AboutNavbar() {
  return (
    <>
      <TopBar />
      <NavBar />

      <HWAbout />
      <AboutIcons />
      <AboutBread />
      <AboutShipping />
      <AboutShippingSummary />
      <AboutProd />
      <AboutFooter />
    </>
  );
}

function HWAbout() {
  return (
    <>
      <div className="container-fluid my-5">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <p className="bg-secondary pr-3 text-center p-5"> About Us</p>
        </h2>
      </div>
    </>
  );
}

function AboutBread() {
  return (
    <>
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-12">
            <nav className="breadcrumb bg-light mb-30">
              <NavLink className="breadcrumb-item text-dark" to="/">
                Home
              </NavLink>
              <span className="breadcrumb-item active text-center">About</span>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

function AboutIcons() {
  return (
    <>
      <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center bg-light mb-4"
              style={{ padding: "30px" }}
            >
              {/* <h1 className="fa fa-check text-primary m-0 mr-3"></h1> */}
              <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center bg-light mb-4"
              style={{ padding: "30px" }}
            >
              {/* <h1 className="fa fa-shipping-fast text-primary m-0 mr-2"></h1> */}
              <h5 className="font-weight-semi-bold m-0">Shipping</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center bg-light mb-4"
              style={{ padding: "30px" }}
            >
              {/* <h1 className="fas fa-exchange-alt text-primary m-0 mr-3"></h1> */}
              <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center bg-light mb-4"
              style={{ padding: "30px" }}
            >
              {/* <h1 className="fa fa-phone-volume text-primary m-0 mr-3"></h1> */}
              <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function AboutShipping() {
  return (
    <>
      <div class="container-fluid mb-3">
        <div class="row px-xl-5">
          <div class="col-lg-12">
            <div className="carousel-item position-relative active">
              <img
                className="position-absulte"
                src="img/kitchen.jpg"
                alt=""
                style={{ height: "530px", width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function AboutShippingSummary() {
  return (
    <>
      <p
        className="container-fluid p-5 text-justify"
        style={{ fontFamily: "sans-serif", fontWeight: "500" }}
      >
        "Eonic's" is a leading hardware shop that operates exclusively through
        its comprehensive website, catering to the needs of DIY enthusiasts,
        homeowners, contractors, and businesses alike. This innovative online
        platform offers a vast array of hardware products, ranging from power
        tools and electrical supplies to plumbing fixtures and building
        materials. The company prioritizes customer satisfaction and strives to
        ensure timely delivery of orders, with efficient logistics and reliable
        shipping partners. Additionally, customers can track their orders in
        real-time through the website, providing peace of mind and transparency
        throughout the shipping process.
        <span>
          "Eonic's" commitment to excellence extends beyond its product
          offerings and shipping services. The website also provides valuable
          resources such as how-to guides, project ideas, and expert advice to
          assist customers in their DIY endeavors and home improvement projects.
        </span>
        <br />
        <br />
        Overall, "Eonic's" stands out as a premier destination for all hardware
        needs, offering convenience, quality products, and exceptional service
        through its user-friendly website and efficient shipping solutions.
        Whether you're tackling a weekend DIY project or managing a large-scale
        construction venture, "Eonic's" is your one-stop shop for all things
        hardware-related
      </p>
    </>
  );
}

function AboutProd() {
  return (
    <>
      <div className="container-fluid">
        <div class="row px-xl-5">
          <div class="col-lg-12 col-md-8">
            <hr />
            <div class="row pb-3">
              <div class="col-lg-4 col-md-6 col-sm-6 pb-1">
                <div className="position-relative active">
                  <img
                    className="position-absulte"
                    src="img/91.jpg"
                    alt=""
                    style={{ marginTop: "30px" }}
                  />
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6 pb-1">
                <div className="position-relative active">
                  <img
                    className="position-absulte"
                    src="img/91.jpg"
                    alt=""
                    style={{ marginTop: "30px" }}
                  />
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6 pb-1">
                <div className="position-relative active">
                  <img
                    className="position-absulte"
                    src="img/91.jpg"
                    alt=""
                    style={{ marginTop: "30px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <p
          style={{ fontFamily: "sans-serif", fontWeight: "500" }}
          className=" container-fluid text-justify"
        >
          <h1 className="container-fluid text-center ">Eocnic Quality</h1>
          "Quality of "Eonic" is a renowned hardware shop committed to providing
          customers with top-notch products for all their needs. Specializing in
          a wide range of hardware essentials, from tools and equipment to
          building materials and home improvement supplies, Quality Hardware
          Emporium prides itself on sourcing only the finest products from
          reputable manufacturers. At Quality Hardware Emporium, every item in
          stock undergoes rigorous quality checks to ensure it meets the highest
          standards. Whether you're a professional contractor, a dedicated DIY
          enthusiast, or a homeowner in need of reliable tools and materials,
          you can trust that the products available at Quality Hardware Emporium
          are built to last and perform reliably. <br />
          <br />
          What sets Quality Hardware Emporium apart is its unwavering commitment
          to customer satisfaction. The knowledgeable staff members are always
          on hand to assist customers in finding the perfect products for their
          specific needs, offering expert advice and guidance every step of the
          way. Additionally, the shop prioritizes transparency and integrity,
          ensuring that customers can shop with confidence, knowing they're
          getting quality products at fair prices. From heavy-duty power tools
          to precision hand tools, from durable building materials to innovative
          home improvement solutions, Quality Hardware Emporium has everything
          you need to tackle any project with confidence. With a reputation for
          excellence and a dedication to quality, it's no wonder that customers
          trust Quality Hardware Emporium for all their hardware needs.
        </p>
      </div>
    </>
  );
}

function AboutFooter() {
  return (
    <>
      <Footer />
    </>
  );
}

export default AboutNavbar;
export {
  HWAbout,
  AboutIcons,
  AboutBread,
  AboutShipping,
  AboutShippingSummary,
  AboutProd,
  AboutFooter,
};
