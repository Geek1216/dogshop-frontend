import React from "react";
import Head from "../component/Header/index2";
import "../styles/header.scss";
import "../styles/signup.scss";
import "../styles/UI.scss";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import signupHeader from "../images/signup-header.png";
import Paw from "../images/pawPackbig.png";
import Footer from "../component/Footer";
import { BiArrowBack } from "react-icons/bi";
import { TbShoppingCart } from "react-icons/tb";
import cart_item from "../images/cart-item.png";
import Header from "../component/Header/signupheader.js";
import { AiOutlineUser } from "react-icons/ai";
import r_s1_f from "../images/r-s1-f.svg";
import l_s1_f from "../images/l_s1_f.svg";
import r_s1_b from "../images/r_s1_b.svg";
import r_s1_d_f from "../images/r-s1-d-f.svg";
import l_s1_b from "../images/l_s1_b.svg";


const Cart = () => {
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
            <h3>Your Cart</h3>
            <TbShoppingCart />
          </div>
          <div className="cart-items-titles">
            <div className="item-pkg-title">Package</div>
            <div className="item-dur-title">Duration</div>
            <div className="item-pri-title">Price</div>
          </div>{" "}
          <div className="cart-items">
            <div className="item-pkg">
              <div>
                <img src={cart_item} alt="" />
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Vitae, qui?
                </p>
              </div>
            </div>
            <div className="item-dur">1 Month</div>
            <div className="item-pri">$25</div>
          </div>
          <hr />
          <div className="cart-items">
            <div className="item-pkg">
              <div>
                <img src={cart_item} alt="" />
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Vitae, qui?
                </p>
              </div>
            </div>
            <div className="item-dur">1 Month</div>
            <div className="item-pri">$25</div>
          </div>
          <Link to="../pages/Account.js" className="checkout">
            <button className="my-lg-5">Checkout</button>
          </Link>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Cart;
