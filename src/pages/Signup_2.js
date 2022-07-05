import React from "react";
import Header from "../component/Header/signupheader.js";
import "../styles/header.scss";
import "../styles/signup.scss";
import "../styles/UI.scss";
import Form from "react-bootstrap/Form";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import signupProgress from "../images/signup-progress-2.png";
import ex_sm_dog from "../images/dog-extra-sm.png";
import sm_dog from "../images/dog-sm.png";
import s_dog from "../images/dog-s.png";
import lg_dog from "../images/dog-lg.png";
import r_s1_f from "../images/r-s1-f.svg";
import l_s1_f from "../images/l_s1_f.svg";
import r_s1_b from "../images/r_s1_b.svg";
import r_s1_d_f from "../images/r-s1-d-f.svg";
import l_s1_b from "../images/l_s1_b.svg";


const Signup_2 = () => {
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
        <Form className=" form mx-auto">
          <h1 className=" text-center  my-lg-5 dog-n-h">How big is jack?</h1>

          <div className="dog-size">
            <Link to="#">
              {" "}
              <button className="">
                <img src={ex_sm_dog} alt="" />
                <p>Extra Small</p>
                <h5>Less than 5KG</h5>
              </button>
            </Link>

            <Link to="#">
              {" "}
              <button className="">
                <img src={sm_dog} alt="" />
                <p>Small</p>
                <h5>Less than 10KG</h5>
              </button>
            </Link>

            <Link to="#">
              {" "}
              <button className="">
                <img src={s_dog} alt="" />
                <p>Medium</p>
                <h5>Less than 15KG</h5>
              </button>
            </Link>
            <Link to="#">
              {" "}
              <button className="">
                <img src={lg_dog} alt="" />
                <p>Large</p>
                <h5>Less than 20KG</h5>
              </button>
            </Link>
          </div>
          <div className="disc my-xl-5 w-100 mx-auto text-center">
            All products are the same price, regardless of size.
            <br />
            You can change sizes at any time.
          </div>
          <Link to="../pages/Signup_3.js" className="form-next-btn">
            <button className="my-lg-5">Next</button>
          </Link>
        </Form>

        <Footer />
      </div>
    </>
  );
};

export default Signup_2;
