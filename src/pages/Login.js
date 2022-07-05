import React from "react";
import Header from "../component/Header/signupheader.js";
import "../styles/header.scss";
import "../styles/signup.scss";
import "../styles/UI.scss";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import signupHeader from "../images/signup-header.png";
import Paw from "../images/pawPackbig.png";
import Footer from "../component/Footer";

const Login = () => {
  return (
    <>
      <div className="main-con mx-auto">
        <Header />

        <Form className=" form mx-auto ">
          <div className="pawPackbig">
            <Link to="/">
              <img src={Paw} alt="" />
            </Link>
          </div>
          <h1 className=" text-center my-lg-5  dog-n-h">Login</h1>
          <Form.Label className="dog-name text-left" htmlFor="Dog name">
            Email
          </Form.Label>
          <Form.Control
            type="text"
            id="dog-name"
            placeholder="Email"
            className="dog-name-input my-lg-2  mx-auto"
          />
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

          <Link to="../pages/Admin_Home.js" className="form-next-btn">
            <button className="my-lg-5">Login</button>
          </Link>
          <p className="text-center already-have">
            Don’t have an account?{" "}
            <Link className="already-have-link" to="../pages/Signup.js">
              {" "}
              Signup{" "}
            </Link>
          </p>
        </Form>
        <Footer />
      </div>
    </>
  );
};

export default Login;
