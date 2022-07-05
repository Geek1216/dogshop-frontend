import React from "react";
import "../../styles/header.scss";
import "../../styles/signup.scss";
import "../../styles/UI.scss";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import signupProgress from "../images/signup-progress-6.png";
import subscription_logo from "../images/subscription-logo.png";

const Signup_6 = () => {
  return (
    <>
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
          Plans automatically renew and you are committing to the length of your
          Pawpack Plan.
        </div>
        <Link to="./Signup_7.js" className="form-next-btn   w-50">
          <button className="my-lg-5 w-25">Next</button>
        </Link>
      </Form>
    </>
  );
};

export default Signup_6;
