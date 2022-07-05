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
import r_s1_f from "../images/r-s1-f.svg";
import l_s1_f from "../images/l_s1_f.svg";
import r_s1_b from "../images/r_s1_b.svg";
import r_s1_d_f from "../images/r-s1-d-f.svg";
import l_s1_b from "../images/l_s1_b.svg";

const Admin_Packages = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <hr className="admin-hr" />
          <div className="data-area-main">
            <div className="data-area d-flex py-4 bg-light-brown">
              <div className="data-area-email-main mx-5 ">
                <input type="checkbox" id="email" />
                <label htmlFor="email">Package</label>
              </div>
              <div className="data-area-text-main mx-5">Duration</div>
              <div className="data-area-text-main mx-5">Price</div>

              <div className="data-area-text-main mx-5">Actions</div>
            </div>

            <div className="data-area d-flex py-4 bg-dark-brown">
              <div className="data-area-email mx-5 ">
                <input type="checkbox" id="user1" />
                <label htmlFor="user1">Monthly</label>
              </div>
              <div className="data-area-text mx-5">1 Month</div>
              <div className="data-area-text mx-5">$23</div>

              <div className="data-area-text mx-5">
                <div className="edt-del-btns">
                  <Link to="../pages/Package_Edit.js">
                    {" "}
                    <button className="edt-btn mx-2"></button>
                  </Link>
                  <button className="del-btn mx-2"></button>
                </div>
              </div>
            </div>

            <div className="data-area d-flex py-4 bg-light-brown">
              <div className="data-area-email mx-5 ">
                <input type="checkbox" id="user2" />
                <label htmlFor="user2">Monthly</label>
              </div>
              <div className="data-area-text mx-5">1 Month</div>
              <div className="data-area-text mx-5">$23</div>

              <div className="data-area-text mx-5">
                <div className="edt-del-btns">
                  <Link to="../pages/Package_Edit.js">
                    {" "}
                    <button className="edt-btn mx-2"></button>
                  </Link>
                  <button className="del-btn mx-2"></button>
                </div>
              </div>
            </div>
            <div className="data-area d-flex py-4 bg-dark-brown">
              <div className="data-area-email mx-5 ">
                <input type="checkbox" id="user3" />
                <label htmlFor="user3">Monthly</label>
              </div>
              <div className="data-area-text mx-5">1 Month</div>
              <div className="data-area-text mx-5">$23</div>

              <div className="data-area-text mx-5">
                <div className="edt-del-btns">
                  <Link to="../pages/Package_Edit.js">
                    {" "}
                    <button className="edt-btn mx-2"></button>
                  </Link>
                  <button className="del-btn mx-2"></button>
                </div>
              </div>
            </div>

            <div className="data-area d-flex py-4 bg-light-brown">
              <div className="data-area-email mx-5 ">
                <input type="checkbox" id="user4" />
                <label htmlFor="user4">Monthly</label>
              </div>
              <div className="data-area-text mx-5">1 Month</div>
              <div className="data-area-text mx-5">$23</div>

              <div className="data-area-text mx-5">
                <div className="edt-del-btns">
                  <Link to="../pages/Package_Edit.js">
                    {" "}
                    <button className="edt-btn mx-2"></button>
                  </Link>
                  <button className="del-btn mx-2"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Admin_Packages;
