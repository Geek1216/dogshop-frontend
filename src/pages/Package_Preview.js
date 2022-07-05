import React from "react";
import Sidebar from "../component/Sidebar/Admin_Sidebar.js";
import Header from "../component/Header/adminHeader";
import Packageicon from "../images/Package-icon.svg";
import "../styles/header.scss";
import "../styles/signup.scss";
import "../styles/admin_pages.scss";
import Footer from "../component/Footer/Admin_footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import Package from "../images/package.png";
import r_s1_f from "../images/r-s1-f.svg";
import l_s1_f from "../images/l_s1_f.svg";
import r_s1_b from "../images/r_s1_b.svg";
import r_s1_d_f from "../images/r-s1-d-f.svg";
import l_s1_b from "../images/l_s1_b.svg";

const Package_Edit = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
          <Header />
          <div className="r_s1_f">
          {" "}
          <img src={r_s1_f} alt="" />
        </div>
        <div className="l_s1_f">
          {" "}
          <img src={l_s1_f} alt="" />
        </div>
        <div className="r_s1_b">
          {" "}
          <img src={r_s1_b} alt="" />
        </div>
        <div className="r_s1_d_f">
          {" "}
          <img src={r_s1_d_f} alt="" />{" "}
        </div>
        <div className="l_s1_b">
          {" "}
          <img src={l_s1_b} alt="" />{" "}
        </div>
      <div className="admin-title">
        {" "}
        <img src={Packageicon} alt="" /> Packages
      </div>
      <Sidebar />
      <div className="main-admin-area admin-user">
      <div className="main-area-div">
        <div className="admin-user-top-bar d-flex"></div>
        <div className="Discount-prev d-flex">
          <div className="prev-dis-ing w-25 mx-5">
            <img src={Package} alt="" />
          </div>
          <div className="prev-left-text w-50">
            <div className="d-flex">
              <div className="w-50 text-left">
                <p>Name</p>
                <h4>New package</h4>
              </div>
              <div className="w-50 text-left">
                <p>Duration</p>
                <h4>12 Month Package</h4>
              </div>
            </div>

            <div className="d-flex my-5">
              <div className="w-100 text-left">
                <p>Price</p>
                <h4>$23</h4>
              </div>
            </div>

            <div className="des">
              <p>Description</p>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </h4>
            </div>
          </div>
        </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Package_Edit;
