import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/ViewAllProducts/Shop";
import Contact from "./Pages/Contact/Contact";
import Detail from "./Pages/ProductDetail/Detail";
import Signup from "./Pages/AuthPages/Registration";
import Login from "./Pages/AuthPages/Login";
import { ToastContainer } from "react-toastify";
import ViewProductsByCategory from "./Pages/ViewProductsByCategory/ViewProductsByCategory";
import AboutNavbar from "./Pages/Contact/About";

function App() {
  return (
    <>
      <ToastContainer stacked />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutUs" element={<AboutNavbar />} />
          <Route path="/detail/:_id" element={<Detail />} />
          <Route path="/category/:_id" element={<ViewProductsByCategory />} />
          <Route
            path="*"
            element={<div className="text-center h3">404 Page Not Found</div>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
