import React from "react";
import Sidebar from "../component/Sidebar/Admin_Sidebar.js";
import Header from "../component/Header/adminHeader";
import Discounticon from "../images/Discount-icon.svg";
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

const Admin_Discount_Management = () => {
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
        <img src={Discounticon} alt="" /> Discount Management
      </div>
      <Sidebar />
      <div className="main-admin-area">
      <div className="main-area-div">
        <div className="admin-user-top-bar d-flex"></div>
        <div className="discount-edit d-flex">
          <div className="discount-edit-input">
            <label htmlFor="Discount-name" className="d-block">
              Discount Name
            </label>
            <input
              type="Text"
              id="Discount-name"
              className="my-2 text-center"
            />
          </div>
          <div className="discount-edit-input">
            <label htmlFor="Discount" className="d-block">
              Discount
            </label>
            <input type="Text" id="Discount" className="my-2 text-center" />
          </div>
          <div className="discount-edit-input">
            <label className="d-block">Start date</label>
            <input
              value={"06/10/2022"}
              type="date"
              className="my-2 text-center"
            />
          </div>
          <div className="discount-edit-input">
            <label className="d-block">End date</label>
            <input type="date" id="l-name" className="my-2 text-center" />
          </div>
        </div>

        <div className="discount-edit d-flex">
          <div className="discount-edit-input2">
            <label className="d-block">Category</label>
            <input type="Text" className="my-2 text-center" />
          </div>
          <div className="discount-edit-input2">
            <label className="d-block">HashTags</label>
            <input type="text" data-role="taginput" />
          </div>
          <div className="discount-edit-input2 upload-images2">
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
          <Link to="../pages/Discount_Preview.js">
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

export default Admin_Discount_Management;
