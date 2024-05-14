import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function TopBar() {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchContactData = async () => {
      const response = await axios.post(
        `${process.env.REACT_APP_MONGO_BASE_URL}/user/getContactDetail`
      );
      setData(response.data.contactDetail[0]);
    };
    fetchContactData();
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
          <div className="col-lg-4">
            <Link to={"/"} className="text-decoration-none">
              <span className="h1 text-uppercase text-primary bg-dark px-2">
                Eonic
              </span>
              <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">
                India
              </span>
            </Link>
          </div>
          <div className="col-lg-8 col-6  text-right">
            <p className="m-0">{data?.email}</p>
            <h5 className="m-0">{data?.phone}</h5>
            {/* <h5 className="m-0"> {data?.address}</h5> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default TopBar;
