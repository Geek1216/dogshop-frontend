import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.png";
import { AiOutlineUser } from "react-icons/ai";
import { TbShoppingCart } from "react-icons/tb";
import "../../styles/header.scss";
import "../../styles/UI.scss";
import Switch from "../Switch";
import Sidebar from "../Sidebar/Sidebar.js";


const Header = () => {
  return (
    <>
      <header className="container-fluid ">
        <div className="mob-sidebar">
          <Sidebar />
        </div>
        <div className="header-nav d-flex justify-content-between align-items-center flex-wrap desk-header">
          <Link to="/" className="text-xl-start">
            <img src={logo} className="logo" alt="logo" />
          </Link>
          <div className="navbar d-flex align-items-center">
            <div className="primary-menu">
              <ul id="header_menu" className="header_menu navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="header_menu_item">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="#about" className="header_menu_item">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#whats" className="header_menu_item">
                    What's Inside
                  </a>
                </li>
                <li className="nav-item">
                  <Link to="/pages/Contact.js" className="header_menu_item">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="#faq" className="header_menu_item">
                    FAQ
                  </a>
                </li>
                <li className="nav-item">
                  <Link to="/pages/Signup.js" className="header_menu_item">
                    Get Pawpack
                  </Link>
                </li>
              </ul>
            </div>
            <div className="nav-btns">
              <Link to="../pages/Signup.js" className="nav-item">
                <AiOutlineUser />
              </Link>
              <Link to="/user/cart" className="nav-item">
                <TbShoppingCart />
              </Link>
            </div>
            <Switch className={"headerswitch"} />
          </div>
        </div>
        <div className="col-nav"></div>
      </header>
    </>
  );
};

export default Header;
