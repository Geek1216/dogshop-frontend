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
import { Add_user_popup } from "../component/Popups/Add_user_popup";
import r_s1_f from "../images/r-s1-f.svg";
import l_s1_f from "../images/l_s1_f.svg";
import r_s1_b from "../images/r_s1_b.svg";
import r_s1_d_f from "../images/r-s1-d-f.svg";
import l_s1_b from "../images/l_s1_b.svg";

const Edit_Order = () => {
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
        <img src={Ordericon} alt="" /> Order
      </div>
      <Sidebar />
      <div className="main-admin-area">
        <div className="main-area-div">
          <div className="admin-user-top-bar d-flex"></div>
          <div className="order-edit d-flex">
            <div className="order-edit-input">
              <label htmlFor="Email" className="d-block">
                Email Address
              </label>
              <input
                type="Email"
                id="Email"
                value={"John123@gmail.com"}
                className="my-2 text-center"
              />
            </div>
            <div className="order-edit-input">
              <label htmlFor="f-name" className="d-block">
                First Name
              </label>
              <input
                value={"John"}
                type="Text"
                id="f-name"
                className="my-2 text-center"
              />
            </div>
            <div className="order-edit-input">
              <label htmlFor="l-name" className="d-block">
                Last Name
              </label>
              <input
                value={"Doe"}
                type="Text"
                id="l-name"
                className="my-2 text-center"
              />
            </div>
          </div>

          <div className="order-edit d-flex">
            <div className="order-edit-input">
              <label className="d-block">Subscription plan</label>
              <input
                type="Text"
                value={"12 Months Plan"}
                className="my-2 text-center"
              />
            </div>
            <div className="order-edit-input">
              <label className="d-block">Start date</label>
              <input
                value={"06/10/2022"}
                type="date"
                className="my-2 text-center"
              />
            </div>
            <div className="order-edit-input">
              <label className="d-block">End date</label>
              <input type="date" id="l-name" className="my-2 text-center" />
            </div>
          </div>

          <div className="order-edit d-flex">
            <div className="status-area">
              <p className="d-block">Status</p>
              <button className="btn">Active</button>
            </div>
            <div className="status-area">
              <p className="d-block status-area-select-p">Order</p>
              <select name="Oder-status" id="">
                <option className="Order-status-opt" value="Pending">
                  Pending
                </option>
                <option className="Order-status-opt" value="Completed">
                  Completed
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Edit_Order;
