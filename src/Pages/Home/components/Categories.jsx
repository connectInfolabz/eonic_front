import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Categories() {
    const [categories, setCategories] = useState([]);
  
    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const response = await axios.post(
            `${process.env.REACT_APP_MONGO_BASE_URL}/viewCategories`
          );
          setCategories(response.data.categories);
        } catch (error) {
          console.error("Error fetching categories:", error);
        }
      };
  
      fetchCategories();
    }, []);
  
    return (
      <div className="container-fluid pt-5">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Categories</span>
        </h2>
        <div className="row px-xl-5 pb-3">
          {categories.map((category) => (
            <div className="col-lg-4 col-md-4 col-sm-6 pb-1" key={category._id}>
              <Link
                className="text-decoration-none"
                to={`/category/${category?._id}`}
              >
                <div className="cat-item d-flex align-items-center mb-4">
                  <div className="overflow-hidden">
                    <img
                      className="img-fluid"
                      style={{ objectFit: "cover", width: 100, height: 100 }}
                      src={`${process.env.REACT_APP_MONGO_BASE_URL}/images/categoryImage/${category.categoryImg}`}
                      alt={`${category.categoryImg}`}
                    />
                  </div>
                  <div className="flex-fill pl-3">
                    <h6>{category.categoryName}</h6>
                    <small className="text-body">
                      {category.productCount} Products
                    </small>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
}
  
export default Categories;