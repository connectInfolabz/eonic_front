import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function YouMayAlsoLike() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`${process.env.REACT_APP_MONGO_BASE_URL}/user/getProducts`);
      const data = await response.json();
      setProducts(data.products);
    };
    fetchProducts();
  }, []);

   function truncateText(text, maxLength) {
     let words = text.split(" ");
     if (words.length <= maxLength) {
       return text;
     }
     return words.slice(0, maxLength).join(" ") + "...";
   }

  // Shuffle the products array to get random products
  const shuffledProducts = products
    ? products.sort(() => Math.random() - 0.5).slice(0, 5)
    : [];

  return (
    <div className="container-fluid py-5">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">You May Also Like</span>
      </h2>
      <div className="row px-xl-5">
        <div className="col">
          {products && products.length > 0 ? (
            <OwlCarousel
              className="owl-carousel related-carousel"
              loop
              margin={25}
              autoplay
              autoplayTimeout={3000}
              autoplayHoverPause={true}
              items={4}
              responsive={{
                0: {
                  items: 1,
                },
                576: {
                  items: 2,
                },
                768: {
                  items: 3,
                },
                992: {
                  items: 4,
                },
              }}
            >
              {shuffledProducts.map((product, index) => (
                <div key={index} className="product-item bg-light">
                  <div className="product-img position-relative overflow-hidden">
                    <img
                      className="img-fluid w-100"
                      style={{
                        objectFit: "cover",
                        height: "150px",
                        width: "200px",
                      }}
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
                    <a
                      className="h6 text-decoration-none text-truncate"
                      href="/#"
                    >
                      {truncateText(product.productName, 4)}
                    </a>
                    <div className="d-flex align-items-center justify-content-center mt-2">
                      <h5>{product.productPrice}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default YouMayAlsoLike;