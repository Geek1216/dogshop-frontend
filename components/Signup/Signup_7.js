import React from "react";
import "../../styles/header.scss";
import "../../styles/signup.scss";
import "../../styles/UI.scss";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import signupProgress from "../images/signup-progress-7.png";
import subscription_logo from "../images/subscription-logo.png";


const Signup_7 = () => {
  return (
    <>
        <Form className=" form mx-auto px-5">
          <h1 className=" text-center my-lg-5  dog-n-h">
            Where should we ship to?
          </h1>

          <div className="shipping d-inline-flex w-100">
            <div className="summary w-50">
              <h4>Order Summary</h4>
              <div className="user my-xl-5">
                <img src={subscription_logo} alt="" />
                <span className="fs-3 px-5 text-dark">jack's first box</span>
              </div>

              <hr className="w-100 mx-auto" />

              <div className="subscription w-100">
                <div className="w-100 d-flex">
                  <h5 className="text-secondary w-50 text-left">
                    12 month subscription
                  </h5>
                  <p className=" brown-clr text-center fs-3 w-50">$23</p>
                </div>
                <p className="m-dog my-5 ">Medium dog</p>
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
              <h4>Shipping details</h4>
              <Form.Control
                type="text"
                id="dog-name"
                placeholder="First name"
                className="dog-name-input my-lg-5  s-i-b "
              />

              <Form.Control
                type="text"
                id="dog-name"
                placeholder="Last name"
                className="dog-name-input  my-lg-5 s-i-b"
              />
              <Form.Control
                type="text"
                id="dog-name"
                placeholder="Address"
                className="dog-name-input  my-lg-5 s-i-b"
              />
              <Form.Control
                type="text"
                id="dog-name"
                placeholder="Apt/Suite (optional)
                "
                className="dog-name-input  my-lg-5 s-i-b"
              />

              <div className="d-flex addr-zip">
                <Form.Control
                  type="text"
                  id="dog-name"
                  placeholder="Address
                "
                  className="dog-name-input my-lg-5 s-i-b"
                />

                <Form.Control
                  type="text"
                  id="dog-name"
                  placeholder="Zip/Postalcode
                "
                  className="dog-name-input my-lg-5 s-i-b"
                />
              </div>

              <Form.Control
                type="text"
                id="dog-name"
                placeholder="Country"
                className="dog-name-input  my-lg-5 s-i-b"
              />
              <Link
                to="./Signup_8.js"
                className="cont-ship-btn "
              >
                <button className="my-lg-25">Continue Shipping</button>
              </Link>
            </div>
          </div>
        </Form>
    </>
  );
};

export default Signup_7;
