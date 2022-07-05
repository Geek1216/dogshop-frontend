import React from "react";
import Head from "../component/Header/index2";
import "../styles/header.scss";
import "../styles/signup.scss";
import "../styles/UI.scss";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Paw from "../images/pawPackbig.png";
import Footer from "../component/Footer";
import { BiArrowBack } from "react-icons/bi";
import { TbShoppingCart } from "react-icons/tb";
import cart_item from "../images/cart-item.png";
import profile_item from "../images/profile-item.png";
import Duration from "../images/duration.png";
import account from "../images/account.svg";
import logout from "../images/logout.svg";
import Header from "../component/Header/signupheader.js"
import { AiOutlineUser } from "react-icons/ai";
import r_s1_f from "../images/r-s1-f.svg";
import l_s1_f from "../images/l_s1_f.svg";
import r_s1_b from "../images/r_s1_b.svg";
import r_s1_d_f from "../images/r-s1-d-f.svg";
import l_s1_b from "../images/l_s1_b.svg";

const Account = () => {
  return (
    <>
      <Head />
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
      <div className="nav-btns4">
          <Link to="../pages/Signup.js" className="nav-item4">
            <AiOutlineUser />
          </Link>
          <Link to="../pages/Cart.js" className="nav-item4">
            <TbShoppingCart />
          </Link>
        </div>
      <div className="main-con mx-auto">
       

        <div className="pawPackbig">
        <Link to="/">
              <img src={Paw} alt="" />
            </Link>
        </div>
        <div className="cart">
          <div className="cart-title">
            <h3>My Account</h3>
            <img src={account} alt="" />
          </div>
          <div className="acc-label d-flex acc-label-web">
            <div> Account Info </div>
              <Link to="/pages/Login.js">
                <h3 className="d-inline">Logout</h3>
                <img className="d-inline" src={logout} alt="" />
              </Link>
 </div>

 <div className="acc-label d-flex acc-label-mob">
              <Link to="/pages/Login.js">
                <h3 className="d-inline">Logout</h3>
                <img className="d-inline" src={logout} alt="" />
              </Link>
            <div className="acc-label-cen"> Account Info </div>
 </div>

          <div className="account-items-titles">
            <div>Name</div>
            <div>Email</div>
            <div>Address</div>
            <div>Acction</div>
          </div>
          <div className="account-items">
  
              <div className="acc-profile">
                <img src={profile_item} alt="" />
                <p>John Doe</p>
             
            </div>
            <div className="acc-email"> johndoe21@gmail.com</div>
            <div className="text-left px-3 acc-add">
              223-1244, Koromogawaku Sawada
              <br />
              Oshu-shi
              <br />
              Iwate
            </div>
            <div>
              <Link to="#">
                <div className="dots3">
                  <p></p>
                </div>
              </Link>
            </div>
          </div>

          <div className="acc-label acc-label-cen">Your Plan</div>
          <div className="account-items-titles">
            <div>Name</div>
            <div>Description</div>
            <div>Price</div>
            <div>Duration</div>
          </div>
          <div className="account-items">
            <div className="plan">
              <img className="d-inline mx-2" src={cart_item} alt="" />
              <p className="d-inline mx-2">12 Month Plan</p>
            </div>
            <div className="acc-email acc-desc">
              Sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.......
            </div >
            <div className="acc-add blue-clr font-600"><span>&nbsp;&nbsp;</span>$23</div>
            <div className="acc-dur">
              <img src={Duration} alt="" />
              <p className="my-2">Your Package expires on 10 june 2022</p>
            </div>
          </div>
          <Link to="../pages/Account.js" className="checkout">
            <button className="my-lg-5">Renew subscription</button>
          </Link>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Account;
