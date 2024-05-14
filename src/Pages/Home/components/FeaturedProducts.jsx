import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`${process.env.REACT_APP_MONGO_BASE_URL}/user/getProducts`);
      const data = await response.json();
      setProducts(data.products);
    };
    fetchProducts();
  }, []);

  return (
    <>
      {/* {loading && <Loading />} */}
      <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Featured Products</span>
          <div className="d-flex justify-content-end">
            <Link
              style={{ fontSize: "21px" }}
              className="text-primary ml-auto "
              to="/shop"
            >
              View All
            </Link>
          </div>
        </h2>
        <div className="row px-xl-5">
          {products ? (
            products.slice(0, 4).map((product) => (
              <div
                className="col-lg-3 col-md-4 col-sm-6 pb-1"
                key={product._id}
              >
                <div className="product-item bg-light mb-4">
                  <div className="product-img position-relative overflow-hidden">
                    <img
                      className="img-fluid w-100"
                      style={{ objectFit: "cover", height: 300 }}
                      src={`${process.env.REACT_APP_MONGO_BASE_URL}/images/productImage/${product.productImgs[0]}`}
                      alt={product.productImgs[0]}
                    />
                    <div className="product-action">
                      <Link
                        className="btn btn-outline-dark btn-square"
                        to={`/detail/${product._id}`}
                      >
                        <i className="fa fa-eye" />
                      </Link>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <p className="h6 text-decoration-none text-truncate px-3">
                      {product.productName}
                    </p>
                    <div className="d-flex align-items-center justify-content-center mt-2">
                      <h5>₹ {product.productPrice}</h5>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1 h3">
              No products
            </div>
          )}
        </div>
      </div>
      <h1 className="position-relative text-center">Our Location On the Map</h1>
      <div className="col-lg-12">
        <div className="bg-light p-30">
          <iframe
            style={{ width: "100%", height: 400 }}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d940040.8353039223!2d72.5713620628352!3d23.022504973503835!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1712213967760!5m2!1sen!2sin"
            frameBorder={0}
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
            title="map"
          />
        </div>
      </div>
      <p
        style={{ fontFamily: "sans-serif", fontWeight: "500" }}
        className="p-5 text-justify mb-0"
      >
        <h1 className="text-center">Eocnic Quality</h1>
        "Quality of "Eonic" is a renowned hardware shop committed to providing
        customers with top-notch products for all their needs. Specializing in a
        wide range of hardware essentials, from tools and equipment to building
        materials and home improvement supplies, Quality Hardware Emporium
        prides itself on sourcing only the finest products from reputable
        manufacturers. At Quality Hardware Emporium, every item in stock
        undergoes rigorous quality checks to ensure it meets the highest
        standards. Whether you're a professional contractor, a dedicated DIY
        enthusiast, or a homeowner in need of reliable tools and materials, you
        can trust that the products available at Quality Hardware Emporium are
        built to last and perform reliably. <br />
        <br />
        What sets Quality Hardware Emporium apart is its unwavering commitment
        to customer satisfaction. The knowledgeable staff members are always on
        hand to assist customers in finding the perfect products for their
        specific needs, offering expert advice and guidance every step of the
        way. Additionally, the shop prioritizes transparency and integrity,
        ensuring that customers can shop with confidence, knowing they're
        getting quality products at fair prices. From heavy-duty power tools to
        precision hand tools, from durable building materials to innovative home
        improvement solutions, Quality Hardware Emporium has everything you need
        to tackle any project with confidence. With a reputation for excellence
        and a dedication to quality, it's no wonder that customers trust Quality
        Hardware Emporium for all their hardware needs.
      </p>
    </>
  );
}

export default FeaturedProducts;
