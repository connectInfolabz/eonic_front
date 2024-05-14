import React from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = React.useState({
    username: "",
    email: "",
    phoneNo: "",
    password: "",
    role: "1",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_MONGO_BASE_URL}/user/signup`,
        registerData
      );

      const { success } = response.data;
      if (success) {
        toast.success("Register Successful", {
          autoClose: 1500,
          onClose: () => navigate("/login"),
        });
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message, {
          autoClose: 1500,
        });
      }
    }
  };
  return (
    <>
      <div className="wrapper" style={{ maxWidth: "500px" }}>
        <div className="logo">
          <img
            src="https://www.freepnglogos.com/uploads/farmer-png/connor-handsome-farmer-farmer-man-vector-20.png"
            alt=""
          />
        </div>
        <div className="text-center mt-4 name">Eonic India</div>
        <form onSubmit={handleSubmit} className="p-3 mt-3">
          <div className="row ">
            <div className="col-6">
              <div className="form-field d-flex align-items-center">
                <span className="far fa-user" />
                <input
                  type="text"
                  name="username"
                  id="userName"
                  value={registerData.userName}
                  onChange={handleChange}
                  placeholder="Username"
                />
              </div>
            </div>
            <div className="col-6 ">
              <div className="form-field d-flex align-items-center">
                <span className="far fa-at" />
                <input
                  type="email"
                  name="email"
                  value={registerData.email}
                  onChange={handleChange}
                  id="pwd"
                  placeholder="Email"
                />
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-6 ">
              <div className="form-field d-flex align-items-center">
                <span className="far fa-phone" />
                <input
                  type="tel"
                  value={registerData.phoneNo}
                  onChange={handleChange}
                  name="phoneNo"
                  maxLength={10}
                  minLength={10}
                  placeholder="Phone No"
                />
              </div>
            </div>
            <div className="col-6 ">
              <div className="form-field d-flex align-items-center">
                <span className="far fa-key" />
                <input
                  type="password"
                  name="password"
                  value={registerData.password}
                  onChange={handleChange}
                  id="pwd"
                  placeholder="Password"
                />
              </div>
            </div>
          </div>
          <button type="submit" className="btn mt-3">
            Signup
          </button>
        </form>
        <div className="text-center fs-6">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </>
  );
}

export default Signup;
