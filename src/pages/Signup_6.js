import React from "react";
import Header from "../component/Header/signupheader.js";
import "../styles/header.scss";
import "../styles/signup.scss";
import "../styles/UI.scss";
import Form from "react-bootstrap/Form";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import signupProgress from "../images/signup-progress-6.png";
import subscription_logo from "../images/subscription-logo.png";
import r_s1_f from "../images/r-s1-f.svg";
import l_s1_f from "../images/l_s1_f.svg";
import r_s1_b from "../images/r_s1_b.svg";
import r_s1_d_f from "../images/r-s1-d-f.svg";
import l_s1_b from "../images/l_s1_b.svg";


const Signup_6 = () => {
  return (
    <>
      <div className="main-con">
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

        <div className="progress-bar">
          <img src={signupProgress} />
        </div>
        <Form className=" form mb-3 w-75 mx-auto my-lg-5">
          <h1 className=" text-center  my-lg-5 dog-n-h">Choose a Plan</h1>

          <div className="dog-size">
            <Link to="#">
              {" "}
              <button className="">
                <img src={subscription_logo} alt="" />
                <p>12 Month Subscription</p>
                <h5 className="brown-clr">$23</h5>
              </button>
            </Link>

            <Link to="#">
              {" "}
              <button className="">
                <img src={subscription_logo} alt="" />
                <p>6 Month Subscription</p>
                <h5 className="brown-clr">$23</h5>
              </button>
            </Link>

            <Link to="#">
              {" "}
              <button className="">
                <img src={subscription_logo} alt="" />
                <p>Monthly Subscription</p>
                <h5 className="brown-clr">$23</h5>
              </button>
            </Link>
          </div>
          <div className="disc my-xl-5 w-100 mx-auto text-center">
            Plans automatically renew and you are committing to the length of
            your Pawpack Plan.
          </div>
          <Link to="../pages/Signup_7.js" className="form-next-btn   w-50">
            <button className="my-lg-5 w-25">Subscribe</button>
          </Link>
        </Form>

        <Footer />
      </div>
    </>
  );
};

export default Signup_6;
