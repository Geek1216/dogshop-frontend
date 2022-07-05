import React from "react";
import Sidebar from "../component/Sidebar/Admin_Sidebar.js";
import Header from "../component/Header/adminHeader";
import Ordericon from "../images/Order-icon.svg";
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

const Orders = () => {
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
        <img src={Ordericon} alt="" /> Order
      </div>
      <Sidebar />
      <div className="main-admin-area admin-user">
      <div className="main-area-div">
        <div className="admin-user-top-bar d-flex"></div>
        <hr className="admin-hr" />
        <div className="data-area-main">
        <div className="data-area d-flex py-4 bg-light-brown">
          <div className="data-area-email-main mx-3 ">
            <input type="checkbox" id="email" />
            <label htmlFor="email">Email address</label>
          </div>
          <div className="data-area-text-main mx-5">First name</div>
          <div className="data-area-text-main mx-5">Last name</div>
          <div className="data-area-text-main mx-5">Status</div>
          <div className="data-area-text-main mx-5">Orders</div>
          <div className="data-area-text-main mx-5">Actions</div>
        </div>

        <div className="data-area d-flex py-4 bg-dark-brown">
          <div className="data-area-email mx-3 ">
            <input type="checkbox" id="user1" />
            <label htmlFor="user1">Email address</label>
          </div>
          <div className="data-area-text mx-5">John</div>
          <div className="data-area-text mx-5">Doe</div>
          <div className="data-area-text mx-5 text-success">Active</div>
          <div className="data-area-text mx-5">Pending</div>
          <div className="data-area-text mx-5">
            <div className="edt-del-btns">
              <Link to="../pages/Order_Edit.js">
                <button className="edt-btn mx-2"></button>
              </Link>
              <button className="del-btn mx-2"></button>
            </div>
          </div>
        </div>

        <div className="data-area d-flex py-4 bg-light-brown">
          <div className="data-area-email mx-3 ">
            <input type="checkbox" id="user2" />
            <label htmlFor="user2">Email address</label>
          </div>
          <div className="data-area-text mx-5">John</div>
          <div className="data-area-text mx-5">Doe</div>
          <div className="data-area-text mx-5 text-danger">Inactive</div>
          <div className="data-area-text mx-5 text-primary">Completed</div>
          <div className="data-area-text mx-5">
            <div className="edt-del-btns">
              <Link to="../pages/Order_Edit.js">
                <button className="edt-btn mx-2"></button>
              </Link>
              <button className="del-btn mx-2"></button>
            </div>
          </div>
        </div>
        <div className="data-area d-flex py-4 bg-dark-brown">
          <div className="data-area-email mx-3 ">
            <input type="checkbox" id="user3" />
            <label htmlFor="user3">Email address</label>
          </div>
          <div className="data-area-text mx-5">John</div>
          <div className="data-area-text mx-5">Doe</div>
          <div className="data-area-text mx-5 text-success">Active</div>
          <div className="data-area-text mx-5">Pending</div>
          <div className="data-area-text mx-5">
            <div className="edt-del-btns">
              <Link to="../pages/Order_Edit.js">
                <button className="edt-btn mx-2"></button>
              </Link>
              <button className="del-btn mx-2"></button>
            </div>
          </div>
        </div>

        <div className="data-area d-flex py-4 bg-light-brown">
          <div className="data-area-email mx-3 ">
            <input type="checkbox" id="user4" />
            <label htmlFor="user4">Email address</label>
          </div>
          <div className="data-area-text mx-5">John</div>
          <div className="data-area-text mx-5">Doe</div>
          <div className="data-area-text mx-5 text-danger">Inactive</div>
          <div className="data-area-text mx-5 text-primary">Completed</div>
          <div className="data-area-text mx-5">
            <div className="edt-del-btns">
              <Link to="../pages/Order_Edit.js">
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

export default Orders;
