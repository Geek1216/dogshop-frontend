import React from "react";
import "../../styles/header.scss";
import "../../styles/signup.scss";
import "../../styles/UI.scss";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import signupProgress from "../images/signup-progress-8.png";
import subscription_logo from "../images/subscription-logo.png";
import card from "../images/credit-card.svg";
import card_dark from "../images/credit-card-brown.svg";
import paypal from "../images/paypal.png";

const Signup_8 = () => {


  return (
    <>
        <Form className=" form w-100 mx-auto px-xl-5">
          <h1 className=" text-center my-lg-5  dog-n-h">Payment</h1>

          <div className="shipping d-inline-flex w-100">
            <div className="summary w-50 px-xl-5">
              <h4>Order summary</h4>
              <div className="user my-xl-5 " >
                <img src={subscription_logo} alt="" />
                <span  className=" px-5 text-secondary">jack's first box</span>
              </div>

              <hr className="w-100 mx-auto" />

              <div className="subscription w-100">
                <div className="w-100 d-flex">
                  <h5 className="text-secondary w-50 text-left">
                    12 month subscription
                  </h5>
                  <p className=" brown-clr text-center fs-3 w-50">$23</p>
                </div>
                <p className=" my-5 m-dog ">Medium dog</p>
              </div>

              <hr className="w-100 mx-auto" />

              <div className="Taxes w-100">
                <div className="w-100 d-flex">
                  <h5 className="text-secondary w-50 text-left">Taxes</h5>
                  <p className=" brown-clr text-center fs-3 w-50">---</p>
                </div>

                <div className="w-100 d-flex my-5">
                  <h5 className="text-secondary w-50 text-left">
                    Monthly Total(USD)
                  </h5>
                  <p className=" brown-clr text-center fs-3 w-50">$23</p>
                </div>
              </div>
            </div>

            <div className="vl"></div>

            <div className="details w-50 px-xl-5">
              <h4>Payment details</h4>

              <div className="payment-btns py-xl-3 h-auto">
                <Link to="#">
                  {" "}
                  <button
                    className="btn-wid mx-2 py-3  fs-4 bg-brown-clr text-light font-weight-bold border-brown rounded border"
                    style={{ fontfamily: "raleway" }}
                  >
                    <img src={card} alt="" className="me-3 " />
                    <span className="me-4">Credit card</span>
                  </button>
                </Link>
                <Link to="#">
                  {" "}
                  <button className="btn-wid mx-2 py-3  fs-4 brown-clr bg-light font-weight-bold border-brown rounded border">
                    <img src={paypal} alt="" />
                  </button>
                </Link>
              </div>

              <div className="d-flex card-name-input payment-btns-dog-name-input">
                <img className="card-img" src={card_dark} alt="" />
                <Form.Control
                  type="text"
                  id="dog-name"
                  placeholder=" Card Numbher
                "
                  className="dog-name-input cd-no-wid"
                />

                <Form.Control
                  type="text"
                  id="dog-name"
                  placeholder="MM/YY
                "
                  className="dog-name-input w-25 cd-cvv-dt-wid"
                />
                <Form.Control
                  type="text"
                  id="dog-name"
                  placeholder="CVV
                "
                  className="dog-name-input w-25 cd-cvv-dt-wid"
                />
              </div>

              <div className="grp px-5">
                <p className="fs-3 font-weight-light text-secondary">
                  Billing Address
                </p>
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox" className="">
                  Same as shipping address
                </label>
              </div>

              <div className="add-box py-3 px-2 rounded bg-light">
                <p className="px-3 py-3 fs-2 font-weight-light text-secondary">
                  Shipping address
                </p>
                <span className="px-3  text-muted">John Doe</span>
                <br />

                <span className="px-3 text-muted">1501 Dovetail Drive</span>
                <br />
                <span className="px-3  text-muted">Round Lake, IL, 60073</span>
              </div>

              <p className="d-wid py-2 text-muted">
                By clicking "Buy now" you are committing to the length of your
                Pawpack plan and agree to our{" "}
                <span className="clr-main-txt">Terms</span> &{" "}
                <span className="clr-main-txt">Privacy Policy</span>
              </p>

              <Link to="./Admin_Login.js" className="cont-ship-btn">
                <button className="my-lg-25">Buy now</button>
              </Link>
            </div>
          </div>
        </Form>
    </>
  );
};

export default Signup_8;
