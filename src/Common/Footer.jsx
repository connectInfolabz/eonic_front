import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
    backToTop();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const fetchContactData = async () => {
      const response = await axios.post(
        `${process.env.REACT_APP_MONGO_BASE_URL}/user/getContactDetail`
      );
      setData(response.data.contactDetail[0]);
    };
    fetchContactData();
  }, []);

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="container-fluid bg-dark text-secondary pt-5">
        <div className="row px-xl-5 pt-5">
          <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
            <h5 className="text-secondary text-uppercase mb-4">Get In Touch</h5>
            <p className="mb-4">
              Contact us if you need any help regarding our products or services or if you have any queries. We are always happy to help.
            </p>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt text-primary mr-3" />
              {data?.address}
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope text-primary mr-3" />
              {data?.email}
            </p>
            <p className="mb-0">
              <i className="fa fa-phone-alt text-primary mr-3" />
              {data?.phone}
            </p>
          </div>
          <div className="col-lg-8 col-md-12 ">
            <div className="row justify-content-end">
              <div className="col-md-4 mb-5">
                <h5 className="text-secondary text-uppercase mb-4">
                  Quick Shop
                </h5>
                <div className="d-flex flex-column justify-content-start">
                  <Link className="text-secondary mb-2" to="/">
                    <i className="fa fa-angle-right mr-2" />
                    Home
                  </Link>
                  <Link className="text-secondary mb-2" to="/shop">
                    <i className="fa fa-angle-right mr-2" />
                    Our Shop
                  </Link>
                  {/* <Link className="text-secondary mb-2" to="/detail">
                    <i className="fa fa-angle-right mr-2" />
                    Shop Detail
                  </Link>
                  <Link className="text-secondary mb-2" to="/cart">
                    <i className="fa fa-angle-right mr-2" />
                    Shopping Cart
                  </Link>
                  <Link className="text-secondary mb-2" to="/checkout">
                    <i className="fa fa-angle-right mr-2" />
                    Checkout
                  </Link> */}
                  <Link className="text-secondary" to="/contact">
                    <i className="fa fa-angle-right mr-2" />
                    Contact Us
                  </Link>{" "}
                  <Link className="text-secondary" to="/aboutUs">
                    <i className="fa fa-angle-right mr-2" />
                    About Us
                  </Link>
                </div>
              </div>
              {/* <div className="col-md-4 mb-5">
                <h5 className="text-secondary text-uppercase mb-4">
                  My Account
                </h5>
                <div className="d-flex flex-column justify-content-start">
                  <Link className="text-secondary mb-2" to="/">
                    <i className="fa fa-angle-right mr-2" />
                    Home
                  </Link>
                  <Link className="text-secondary mb-2" to="/shop">
                    <i className="fa fa-angle-right mr-2" />
                    Our Shop
                  </Link>
                  <Link className="text-secondary mb-2" to="/detail">
                    <i className="fa fa-angle-right mr-2" />
                    Shop Detail
                  </Link>
                  <Link className="text-secondary mb-2" to="/cart">
                    <i className="fa fa-angle-right mr-2" />
                    Shopping Cart
                  </Link>
                  <Link className="text-secondary mb-2" to="/checkout">
                    <i className="fa fa-angle-right mr-2" />
                    Checkout
                  </Link>
                  <Link className="text-secondary" to="/contact">
                    <i className="fa fa-angle-right mr-2" />
                    Contact Us
                  </Link>
                </div>
              </div> 
              <div className="col-md-4 mb-5">
                <h5 className="text-secondary text-uppercase mb-4">
                  Newsletter
                </h5>
                <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
                <form>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Email Address"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary">Sign Up</button>
                    </div>
                  </div>
                </form>
                <h6 className="text-secondary text-uppercase mt-4 mb-3">
                  Follow Us
                </h6>
                <div className="d-flex">
                  <a className="btn btn-primary btn-square mr-2" href="/#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-primary btn-square mr-2" href="/#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-primary btn-square mr-2" href="/#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a className="btn btn-primary btn-square" href="/#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>*/}
            </div>
          </div>
        </div>
        <div
          className="row border-top mx-xl-5 py-4"
          style={{ borderColor: "rgba(256, 256, 256, .1) !important" }}
        >
          <div className="col-md-6 px-xl-0">
            <p className="mb-md-0 text-center text-md-left text-secondary">
              ©{" "}
              <a className="text-primary" href="/#">
                2024
              </a>
              . All Rights Reserved. Designed by {" "}
              <a className="text-primary" href="/#">
                Eonic
              </a>
              <br />
              Distributed By: <a href="/#">Team Eonic</a>
            </p>
          </div>
          <div className="col-md-6 px-xl-0 text-center text-md-right">
            <span className="h1 text-uppercase text-primary bg-dark px-2">
              Eonic
            </span>
            <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">
              India
            </span>
          </div>
        </div>
      </div>

      {isVisible ? (
        <Link
          onClick={backToTop}
          className={`btn btn-primary back-to-top fadeIn`}
        >
          <i className="fa fa-angle-double-up" />
        </Link>
      ) : null}
    </>
  );
}

export default Footer;
