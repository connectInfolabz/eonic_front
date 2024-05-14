import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    role: "1",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(data);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_MONGO_BASE_URL}/user/login`,
        data
      );

      const { success } = response.data;
      if (success) {
        toast.success("Login Successful", {
          autoClose: 1500,
          onClose: () => window.location.reload(),
        });
      }
    } catch (error) {
      console.log("Login Err: ", error);
      if (error.response) {
        toast.error(error.response.data.message, {
          autoClose: 1500,
        });
      }
    }
  };
  return (
    <>
      <div className="wrapper">
        <div className="logo">
          <img
            src="https://www.freepnglogos.com/uploads/farmer-png/connor-handsome-farmer-farmer-man-vector-20.png"
            alt=""
          />
        </div>
        <div className="text-center mt-4 name">Eonic India</div>
        <form onSubmit={handleSubmit} className="p-3 mt-3">
          <div className="form-field d-flex align-items-center">
            <span className="far fa-at" />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={handleChange}
              value={data.email}
            />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="fas fa-key" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={handleChange}
              value={data.password}
              id="pwd"
              placeholder="Password"
            />
            <i
              className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"} mr-3`}
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          <button type="submit" className="btn mt-3">
            Login
          </button>
        </form>
        <div className="text-center fs-6">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </>
  );
}

export default Login;
