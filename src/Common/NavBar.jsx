import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function NavBar() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_MONGO_BASE_URL}/viewCategories`)
      .then((res) => {
        if (res.data.success) {
          setCategories(res.data.categories);
        } else {
          console.error("Failed to fetch categories:", res.data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setCategories([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const [activeItem, setActiveItem] = useState("Home");
  const location = window.location.pathname;

  useEffect(() => {
   
    switch (location) {
      case "/":
        setActiveItem("Home");
        break;
      case "/shop":
        setActiveItem("Shop");
        break;
      case "/detail":
        setActiveItem("Detail");
        break;
      case "/contact":
        setActiveItem("Contact");
        break;
      case "/cart":
        setActiveItem("Cart");
        break;
      case "/checkout":
        setActiveItem("Checkout");
        break;
      case "/aboutUs":
        setActiveItem("Checkout");
        break;

      default:
        setActiveItem("");
        break;
    }
  }, [location]);

  return (
    <>
      <div className="container-fluid bg-dark mb-30">
        <div className="row px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <a
              className="btn d-flex align-items-center justify-content-between bg-primary w-100"
              data-toggle="collapse"
              href="#navbar-vertical"
              style={{ height: 65, padding: "0 30px" }}
            >
              <h6 className="text-dark m-0">
                <i className="fa fa-bars mr-2" />
                Categories
              </h6>
              <i className="fa fa-angle-down text-dark" />
            </a>
            <nav
              className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
              id="navbar-vertical"
              style={{ width: "calc(100% - 30px)", zIndex: 999 }}
            >
              <div className="navbar-nav w-100">
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  categories &&
                  categories.map((category) => (
                    <Link
                      key={category?._id}
                      to={`/category/${category?._id}`}
                      className="nav-item nav-link"
                    >
                      {category?.categoryName}
                    </Link>
                  ))
                )}
              </div>
            </nav>
          </div>
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
              <a href="/#" className="text-decoration-none d-block d-lg-none">
                <span className="h1 text-uppercase text-dark bg-light px-2">
                  Eonic
                </span>
                <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">
                  India
                </span>
              </a>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav mr-auto py-0">
                  <Link
                    to="/"
                    className={`nav-item nav-link ${
                      activeItem === "Home" ? "active" : ""
                    }`}
                  >
                    Home
                  </Link>
                  <Link
                    to="/shop"
                    className={`nav-item nav-link ${
                      activeItem === "Shop" ? "active" : ""
                    }`}
                  >
                    Shop
                  </Link>
                  <Link
                    to="/contact"
                    className={`nav-item nav-link ${
                      activeItem === "Contact" ? "active" : ""
                    }`}
                  >
                    Contact
                  </Link>
                  <Link
                    to="/aboutUs"
                    className={`nav-item nav-link ${
                      activeItem === "AboutUs" ? "active" : ""
                    }`}
                  >
                    About Us
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
