import React from "react";
import Header from "../component/Header/signupheader.js";
import "../styles/header.scss";
import "../styles/signup.scss";
import "../styles/UI.scss";
import Form from "react-bootstrap/Form";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import signupProgress from "../images/signup-progress-4.png";
import r_s1_f from "../images/r-s1-f.svg";
import l_s1_f from "../images/l_s1_f.svg";
import r_s1_b from "../images/r_s1_b.svg";
import r_s1_d_f from "../images/r-s1-d-f.svg";
import l_s1_b from "../images/l_s1_b.svg";


const Signup_4 = () => {
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
          <h1 className=" text-center  my-lg-5 dog-n-h">Any allergies?</h1>

          <div className="allegries">
            <div className="boxes d-flex">
              <div className="box mx-4 px-5 bg-light py-3">
                <input type="checkbox" className="checkbox me-3" id="chicken" />{" "}
                <label htmlFor="chicken">Chicken</label>
              </div>
              <div className="box mx-4 px-5 bg-light py-3">
                <input type="checkbox" id="beef" className=" me-3" />
                <label htmlFor="beef">Beef</label>
              </div>
            </div>
            <br />
            <br />

            <div className="boxes d-flex">
              <div className="box mx-4 px-5 bg-light py-3">
                <input type="checkbox" id="wheat" className="checkbox me-3" />
                <label htmlFor="wheat">Wheat</label>
              </div>
              <div className="box mx-4 px-5 bg-light py-3">
                <input type="checkbox" id="none" className=" me-3" />
                <label htmlFor="none">None</label>
              </div>
            </div>
          </div>

          <div className="disc my-xl-5 w-100 mx-auto text-center">
            Note: If your dog has other dietrary restrictions please contact us{" "}
            <br />
            and we will do our best to accomodate.
          </div>
          <Link to="../pages/Signup_5.js" className="form-next-btn ">
            <button className="my-lg-5">Next</button>
          </Link>
        </Form>

        <Footer />
      </div>
    </>
  );
};

export default Signup_4;
