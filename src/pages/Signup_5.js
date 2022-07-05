import React from "react";
import Header from "../component/Header/signupheader.js";
import "../styles/header.scss";
import "../styles/signup.scss";
import "../styles/UI.scss";
import Form from "react-bootstrap/Form";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import signupProgress from "../images/signup-progress-5.png";
import r_s1_f from "../images/r-s1-f.svg";
import l_s1_f from "../images/l_s1_f.svg";
import r_s1_b from "../images/r_s1_b.svg";
import r_s1_d_f from "../images/r-s1-d-f.svg";
import l_s1_b from "../images/l_s1_b.svg";


const Signup_5 = () => {
  return (
    <>
      <div className="main-con mx-auto">
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
        <Form className=" form w-50 mx-auto ">
          <h1 className=" text-center my-lg-5  dog-n-h">Create an account</h1>
          <Form.Label className="dog-name text-left" htmlFor="Dog name">
            Email
          </Form.Label>
          <Form.Control
            type="Email"
            id="dog-name"
            placeholder="Email"
            className="dog-name-input my-lg-2  mx-auto"
          />
          <br />
          <br />
          <Form.Label className="dog-name text-left" htmlFor="Dog name">
            Password
          </Form.Label>
          <Form.Control
            type="password"
            id="dog-name"
            placeholder="Password"
            className="dog-name-input my-lg-2  mx-auto"
          />
          <br />
          <br />
          <br />

          <Link to="../pages/Signup_6.js" className="form-next-btn">
            <button className="my-lg-5 w-50">Signup</button>
          </Link>
        </Form>

        <Footer />
      </div>
    </>
  );
};

export default Signup_5;
