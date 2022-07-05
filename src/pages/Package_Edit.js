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
import { Add_user_popup } from "../component/Popups/Add_user_popup";
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
      <div className="main-admin-area">
      <div className="main-area-div">
        <div className="admin-user-top-bar d-flex"></div>
        <div className="order-edit d-flex">
          <div className="order-edit-input">
            <label htmlFor="f-name" className="d-block">
              First Name
            </label>
            <input
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
              type="Text"
              id="l-name"
              className="my-2 text-center"
            />
          </div>
        </div>

        <div className="order-edit d-flex">
          <div className="order-edit-input">
            <label className="d-block">Price</label>
            <input
              type="Text"
              className="my-2 text-center"
            />
          </div>
          <div className="order-edit-input upload-images">
            <p>Upload Images</p>
            <label htmlFor="upload-images" className="d-block "></label>
            <input
              type="file"
              id="upload-images"
              className="my-2 text-center"
              hidden
            />
          </div>
          </div>

          <div className="discount-description">
          <label htmlFor="dis-text-area">Description</label>
          <textarea name="" id="" cols="150" rows="6"></textarea>
        </div>
        <div className="textarea-btn my-3">
          <Link to="../pages/Package_Preview.js">
            <button className="textarea-cancle mx-2">Preview</button>
          </Link>
          <button className="textarea-add mx-2">Save</button>
        </div>
        </div>
      </div>
       


      <Footer />
    </>
  );
};

export default Package_Edit;
