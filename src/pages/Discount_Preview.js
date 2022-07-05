import React from "react";
import Sidebar from "../component/Sidebar/Admin_Sidebar.js";
import Header from "../component/Header/adminHeader";
import Discounticon from "../images/Discount-icon.svg";
import Discount from "../images/discount.png";
import "../styles/header.scss";
import "../styles/signup.scss";
import "../styles/admin_pages.scss";
import Footer from "../component/Footer/Admin_footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import r_s1_f from "../images/r-s1-f.svg";
import l_s1_f from "../images/l_s1_f.svg";
import r_s1_b from "../images/r_s1_b.svg";
import r_s1_d_f from "../images/r-s1-d-f.svg";
import l_s1_b from "../images/l_s1_b.svg";

const Discount_Preview = () => {
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
        <img src={Discounticon} alt="" /> Discount
      </div>
      <Sidebar />
      <div className="main-admin-area admin-user">
      <div className="main-area-div">
        <div className="admin-user-top-bar d-flex"></div>
        <div className="Discount-prev d-flex">
          <div className="prev-left-text w-50">
            <div className="d-flex">
              <div className="w-50 text-left">
                <p>Discount name</p>
                <h4>Special Discount</h4>
              </div>
              <div className="w-50 text-left">
                <p>Discount</p>
                <h4>20%</h4>
              </div>
            </div>

            <div className="d-flex my-5">
              <div className="w-50 text-left">
                <p>Start date</p>
                <h4>06/10/2022</h4>
              </div>
              <div className="w-50 text-left">
                <p>Start date</p>
                <h4>07/10/2022</h4>
              </div>
            </div>

            <div className="d-flex my-5">
              <div className="w-50 text-left">
                <p>Category</p>
                <h4>Summer discount</h4>
              </div>
              <div className="w-50 text-left">
                <p>Tags</p>
                <h4>Deal, Deal, Deal</h4>
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
          <div className="prev-dis-ing w-50 mx-5">
            <img src={Discount} alt="" />
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Discount_Preview;
