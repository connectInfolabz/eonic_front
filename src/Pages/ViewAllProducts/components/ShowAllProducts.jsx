import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

function ShowAllProducts() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(8);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_MONGO_BASE_URL}/user/getProducts`);
        const data = await response.json();
        setProducts(data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const handlePageChange = (page) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setCurrentPage(page);
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
              <span className="breadcrumb-item active">Shop List</span>
            </nav>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-lg-12 ">
            <div className="row pb-3">
              <div className="col-12 pb-1">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div className="ml-2">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-light dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        products
                      </button>
                      <div className="dropdown-menu dropdown-menu-left">
                        <Link
                          className="dropdown-item"
                          onClick={() => setProductsPerPage(10)}
                        >
                          10
                        </Link>
                        <Link
                          className="dropdown-item"
                          onClick={() => setProductsPerPage(20)}
                        >
                          20
                        </Link>
                        <Link
                          className="dropdown-item"
                          onClick={() => setProductsPerPage(30)}
                        >
                          30
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {loading ? (
                <div className="col-lg-3 col-md-4 col-sm-6 pb-1 h3">
                  Please Wait
                </div>
              ) : currentProducts.length > 0 ? (
                currentProducts.map((product) => (
                  <div
                    className="col-lg-3 col-md-4 col-sm-6 pb-1"
                    key={product._id}
                  >
                    <div className="product-item bg-light mb-4">
                      <div className="product-img position-relative overflow-hidden">
                        <img
                          style={{
                            height: 300,
                            width: 300,
                            objectFit: "cover",
                          }}
                          className="img-fluid w-100"
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
              <div className="col-12">
                <nav>
                  <ul className="pagination justify-content-center">
                    <Pagination
                      current={currentPage}
                      total={products.length}
                      pageSize={productsPerPage}
                      onChange={handlePageChange}
                      hideOnSinglePage={true}
                    />
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowAllProducts;
