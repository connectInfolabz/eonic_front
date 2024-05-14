import React, { useEffect, useState } from "react";
import axios from "axios";

function Carousel() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_MONGO_BASE_URL}/user/getBanner`
        );
        const data = await response.data.banners;
        setData(data);
      } catch (error) {
        console.log(error);
        setData([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="container-fluid mb-3">
      <div className="row px-xl-5">
        <div className="col-lg-12">
          {loading ? (
            <div className="text-center">Loading...</div>
          ) : data.length > 0 ? (
            <div
              id="header-carousel"
              className="carousel slide carousel-fade mb-30 mb-lg-0"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                {data.map((banner, index) => (
                  <li
                    key={index}
                    data-target="#header-carousel"
                    data-slide-to={index}
                    className={index === 0 ? "active" : ""}
                  />
                ))}
              </ol>
              <div className="carousel-inner">
                {data.map((banner, index) => (
                  <div
                    key={index}
                    className={`carousel-item position-relative ${
                      index === 0 ? "active" : ""
                    }`}
                    style={{ height: 430 }}
                  >
                    <img
                      className="position-absolute w-100 h-100"
                      src={`${process.env.REACT_APP_MONGO_BASE_URL}/images/bannerImage/${banner.bannerImg}`}
                      style={{ objectFit: "cover" }}
                      alt={banner.bannerTitle}
                    />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                      <div className="p-3" style={{ maxWidth: 700 }}>
                        <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                          {banner.bannerTitle}
                        </h1>
                        <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                          {banner.bannerDesc}
                        </p>
                        <a
                          className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                          href="/#"
                        >
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center text-muted">No banners available</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
