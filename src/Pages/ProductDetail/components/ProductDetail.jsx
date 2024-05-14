import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import axios from "axios";
import { toast } from "react-toastify";

function ProductDetail() {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  // const products = location.state?.product;
  const [product, setProduct] = useState();
  const [enquiryData, setEnquiryData] = useState({
    productId: "",
    username: "",
    email: "",
  });
  // console.log(product);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const fetchProducts = async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_MONGO_BASE_URL}/user/getOneProduct`,
          {
            productId,
          }
        );
        console.log(response.data);
        const data = await response.data;
        setProduct(data.product);
      } catch (error) {
        alert(error.response.data.message);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();

    setEnquiryData({ productId: productId });
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEnquiryData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_MONGO_BASE_URL}/user/addEnquiry`,
        enquiryData
      );

      toast.success(response.data.message, {
        autoClose: 1500,
      });
    } catch (error) {
      toast.error(error.response.data.message, {
        autoClose: 1500,
      });
    } finally {
      setEnquiryData({
        username: "",
        email: "",
        enquiry: "",
      });
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-12">
            <nav className="breadcrumb bg-light mb-30">
              <Link className="breadcrumb-item text-dark" to="/">
                Home
              </Link>
              <Link className="breadcrumb-item text-dark" to="/">
                Shop
              </Link>
              <span className="breadcrumb-item active">Shop Detail</span>
            </nav>
          </div>
        </div>
      </div>
      <div className="container-fluid pb-5">
        <div className="row px-xl-5">
          <div className="col-lg-5 mb-30">
            <div
              id="product-carousel"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner bg-light">
                {!loading && product ? (
                  product.productImgs.map((image, index) => {
                    return (
                      <div
                        key={index}
                        className={`carousel-item ${
                          index === 0 ? "active" : ""
                        }`}
                      >
                        <img
                          className="w-100 h-100"
                          src={`${process.env.REACT_APP_MONGO_BASE_URL}/images/productImage/${image}`}
                          alt={image}
                        />
                      </div>
                    );
                  })
                ) : (
                  <div>Please wait</div>
                )}
              </div>
              <a
                className="carousel-control-prev"
                href="#product-carousel"
                data-slide="prev"
              >
                <i className="fa fa-2x fa-angle-left text-dark" />
              </a>
              <a
                className="carousel-control-next"
                href="#product-carousel"
                data-slide="next"
              >
                <i className="fa fa-2x fa-angle-right text-dark" />
              </a>
            </div>
          </div>
          <div className="col-lg-7 h-auto mb-30">
            {/* <div className="h-100 bg-light p-30"> */}
            <div className="bg-light p-30">
              <h3>{product?.productName}</h3>
              <h3 className="font-weight-semi-bold mb-4">
                ₹ {product?.productPrice}
              </h3>
              <form onSubmit={handleSubmit}>
                <p className="mb-1">
                  Do You Have Any Enquiry?
                  <br />
                  <span className="text-primary"> Reach out to us</span>
                </p>
                <div className="form-group">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        name="username"
                        onChange={handleChange}
                        value={enquiryData.username}
                        className="form-control"
                        placeholder="Your Full Name"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={enquiryData.email}
                        className="form-control"
                        placeholder="Your Email Address"
                        required
                      />
                    </div>
                  </div>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    name="enquiry"
                    onChange={handleChange}
                    value={enquiryData.enquiry}
                    placeholder="Your Enquiry"
                    required
                  />
                  <button type="submit" className="btn btn-primary my-2">
                    Submit
                  </button>

                  <a
                    className="btn btn-primary my-2 ml-2"
                    href={product?.buyLink}
                  >
                    Buy
                  </a>
                </div>
              </form>

              <div className="d-flex pt-2">
                <strong className="text-dark mr-2">Share on:</strong>
                <div className="d-inline-flex">
                  <a className="text-dark px-2" href="/#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="text-dark px-2" href="/#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="text-dark px-2" href="/#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a className="text-dark px-2" href="/#">
                    <i className="fab fa-pinterest" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row px-xl-5">
          <div className="col">
            <div className="bg-light p-30">
              <div className="nav nav-tabs mb-4">
                <a
                  className="nav-item nav-link text-dark active"
                  data-toggle="tab"
                  href="#tab-pane-1"
                >
                  Description
                </a>
                {/* <a
                  className="nav-item nav-link text-dark"
                  data-toggle="tab"
                  href="#tab-pane-2"
                >
                  Information
                </a>
                <a
                  className="nav-item nav-link text-dark"
                  data-toggle="tab"
                  href="#tab-pane-3"
                >
                  Reviews (0)
                </a> */}
              </div>
              <div className="tab-content">
                <div className="tab-pane fade show active" id="tab-pane-1">
                  <p>{product?.productDesc}</p>
                </div>
                {/* <div className="tab-pane fade" id="tab-pane-2">
                  <h4 className="mb-3">Additional Information</h4>
                  <p>
                    Eos no lorem eirmod diam diam, eos elitr et gubergren diam
                    sea. Consetetur vero aliquyam invidunt duo dolores et duo sit.
                    Vero diam ea vero et dolore rebum, dolor rebum eirmod
                    consetetur invidunt sed sed et, lorem duo et eos elitr,
                    sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed
                    tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing,
                    eos dolores sit no ut diam consetetur duo justo est, sit
                    sanctus diam tempor aliquyam eirmod nonumy rebum dolor
                    accusam, ipsum kasd eos consetetur at sit rebum, diam kasd
                    invidunt tempor lorem, ipsum lorem elitr sanctus eirmod
                    takimata dolor ea invidunt.
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item px-0">
                          Sit erat duo lorem duo ea consetetur, et eirmod
                          takimata.
                        </li>
                        <li className="list-group-item px-0">
                          Amet kasd gubergren sit sanctus et lorem eos sadipscing
                          at.
                        </li>
                        <li className="list-group-item px-0">
                          Duo amet accusam eirmod nonumy stet et et stet eirmod.
                        </li>
                        <li className="list-group-item px-0">
                          Takimata ea clita labore amet ipsum erat justo voluptua.
                          Nonumy.
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item px-0">
                          Sit erat duo lorem duo ea consetetur, et eirmod
                          takimata.
                        </li>
                        <li className="list-group-item px-0">
                          Amet kasd gubergren sit sanctus et lorem eos sadipscing
                          at.
                        </li>
                        <li className="list-group-item px-0">
                          Duo amet accusam eirmod nonumy stet et et stet eirmod.
                        </li>
                        <li className="list-group-item px-0">
                          Takimata ea clita labore amet ipsum erat justo voluptua.
                          Nonumy.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-pane-3">
                  <div className="row">
                    <div className="col-md-6">
                      <h4 className="mb-4">1 review for "Product Name"</h4>
                      <div className="media mb-4">
                        <img
                          src="img/user.jpg"
                          alt="user.jpg"
                          className="img-fluid mr-3 mt-1"
                          style={{ width: 45 }}
                        />
                        <div className="media-body">
                          <h6>
                            John Doe
                            <small>
                              {" "}
                              - <i>01 Jan 2045</i>
                            </small>
                          </h6>
                          <div className="text-primary mb-2">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            <i className="far fa-star" />
                          </div>
                          <p>
                            Diam amet duo labore stet elitr ea clita ipsum, tempor
                            labore accusam ipsum et no at. Kasd diam tempor rebum
                            magna dolores sed sed eirmod ipsum.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h4 className="mb-4">Leave a review</h4>
                      <small>
                        Your email address will not be published. Required fields
                        are marked *
                      </small>
                      <div className="d-flex my-3">
                        <p className="mb-0 mr-2">Your Rating * :</p>
                        <div className="text-primary">
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                        </div>
                      </div>
                      <form>
                        <div className="form-group">
                          <label htmlFor="message">Your Review *</label>
                          <textarea
                            id="message"
                            cols={30}
                            rows={5}
                            className="form-control"
                            defaultValue={""}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="name">Your Name *</label>
                          <input type="text" className="form-control" id="name" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="email">Your Email *</label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                          />
                        </div>
                        <div className="form-group mb-0">
                          <input
                            type="submit"
                            defaultValue="Leave Your Review"
                            className="btn btn-primary px-3"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
