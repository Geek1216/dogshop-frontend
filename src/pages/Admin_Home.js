import React from "react";
import Sidebar from "../component/Sidebar/Admin_Sidebar.js";
// import Header from "../images/Admin-home-header.png";
import "../styles/header.scss";
import "../styles/signup.scss";
import "../styles/admin_pages.scss";
import Footer from "../component/Footer/Admin_footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import Sale_chart from "../component/Charts/Sale_chart";
import Abandoned_chart from "../component/Charts/Abandoned_chart";
import Revenue_chart from "../component/Charts/Revenue_reports";
import Traffic_chart from "../component/Charts/Traffic_chart";
import Header from "../component/Header/adminHeader";
import Homeicon from "../images/Home-icon.svg";
import r_s1_f from "../images/r-s1-f.svg";
import l_s1_f from "../images/l_s1_f.svg";
import r_s1_b from "../images/r_s1_b.svg";
import r_s1_d_f from "../images/r-s1-d-f.svg";
import l_s1_b from "../images/l_s1_b.svg";

const Admin_Home = () => {
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
        <img src={Homeicon} alt="" /> Home
      </div>
      <Sidebar />
      <div className="main-admin-area">
        
        <div className="main-area-div">
          
          <div className="home-status-bars">
            <div className="home-status-bars-div revenue">
              <span className="">$255000</span>
              <p>Revenue</p>
            </div>

            <div className="home-status-bars-div users">
              <span className="">25500</span>
              <p>Users</p>
            </div>

            <div className="home-status-bars-div orders">
              <span className="">3600</span>
              <p>Orders</p>
            </div>
          </div>

          <Sale_chart />
          <Abandoned_chart />
          <Revenue_chart />
          <Traffic_chart />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Admin_Home;
