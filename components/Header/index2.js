import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.png";
import { AiOutlineUser } from "react-icons/ai";  
import { TbShoppingCart } from "react-icons/tb";
import "../../styles/header.scss";
import "../../styles/UI.scss";
import Switch from "../Switch";
import Sidebar from "../Sidebar/Sidebar.js";


const Header2 = () => {
  return (
    <header className="container-fluid">
              <div className="mob-sidebar">
          <Sidebar />
        </div>
      <div className="header-nav d-flex justify-content-between align-items-center flex-wrap desk-header">
        <a className="text-start">
        </a>
        <div className="navbar my-3">
          <div className="primary-menu">
            <ul id="header_menu" className="header_menu">
              <a href="/" className="header_menu_item2">
                
                Home
              </a>
              <a href="#about" className="header_menu_item2">
                About
              </a>
              <a href="#whats" className="header_menu_item2">
                What's Inside
              </a>
              <a href="/pages/Contact.js" className="header_menu_item2">
                Contact
              </a>
              <a href="#faq" className="header_menu_item2">
                FAQ
              </a>
              <a href="/pages/Signup.js" className="header_menu_item2">
              Get Pawpack
              </a>
            </ul>
          </div>
          <div className="nav-btns">
            <Link to="../pages/Signup.js" className="nav-item2">
              <AiOutlineUser />
            </Link>
            <Link to="../pages/Cart.js" className="nav-item2">
              <TbShoppingCart />
            </Link>
          </div>
          <Switch className={"headerswitch2"} />
        </div>
      </div>
    </header>
  );
};

export default Header2;
