import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function ContactComp() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    email: "",
    subject: "",
    message: "",
  });

  const [contactDetail, setContactDetail] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_MONGO_BASE_URL}/user/contactUs`,
        data
      );
      toast.success(response.data.message, {
        autoClose: 1500,
        onClose: () => navigate("/"),
      });
    } catch (error) {
      toast.error(error.response.data.message, {
        autoClose: 1500,
      });
    }
  };

  useEffect(() => {
    const fetchContactData = async () => {
      const response = await axios.post(
        `${process.env.REACT_APP_MONGO_BASE_URL}/user/getContactDetail`
      );
      setContactDetail(response.data.contactDetail[0]);
    };
    fetchContactData();
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-12">
            <nav className="breadcrumb bg-light mb-30">
              <Link className="breadcrumb-item text-dark" to="/">
                Home
              </Link>
              <span className="breadcrumb-item active">Contact</span>
            </nav>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Contact Us</span>
        </h2>
        <div className="row px-xl-5">
          <div className="col-lg-7 mb-5">
            <div className="contact-form bg-light p-30">
              <div id="success" />
              <form onSubmit={handleSubmit}>
                <div className="control-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    name="username"
                    onChange={handleChange}
                    value={data.username}
                    required
                  />
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                    name="email"
                    onChange={handleChange}
                    value={data.email}
                    required="required"
                  />
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Subject"
                    name="subject"
                    onChange={handleChange}
                    value={data.subject}
                    required="required"
                  />
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group">
                  <textarea
                    className="form-control"
                    rows={8}
                    id="message"
                    placeholder="Message"
                    name="message"
                    onChange={handleChange}
                    value={data.message}
                    required="required"
                  />
                  <p className="help-block text-danger" />
                </div>
                <div>
                  <button
                    className="btn btn-primary py-2 px-4"
                    type="submit"
                    id="sendMessageButton"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5 mb-5">
            <div className="bg-light p-30 mb-30">
              <iframe
                style={{ width: "100%", height: 250 }}
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d940040.8353039223!2d72.5713620628352!3d23.022504973503835!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1712213967760!5m2!1sen!2sin"
                frameBorder={0}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
                title="map"
              />
            </div>
            <div className="bg-light p-30 mb-3">
              <p className="mb-2">
                <i className="fa fa-map-marker-alt text-primary mr-3" />
                {contactDetail?.address}
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope text-primary mr-3" />
                {contactDetail?.email}
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt text-primary mr-3" />
                {contactDetail?.phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactComp;
