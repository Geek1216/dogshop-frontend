import React, { useState } from "react";
import "../styles/signup.scss";
import Header from "../component/Header/signupheader.js";
import Head from "../component/Header/index2";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import * as yup from "yup";
import { Validate } from "../helpers/functions";
import { notify } from "../utils/index";

import { AiOutlineUser } from "react-icons/ai";
import { TbShoppingCart } from "react-icons/tb";
import r_s1_f from "../images/r-s1-f.svg";
import l_s1_f from "../images/l_s1_f.svg";
import r_s1_b from "../images/r_s1_b.svg";
import r_s1_d_f from "../images/r-s1-d-f.svg";
import l_s1_b from "../images/l_s1_b.svg";
import c_r_i from "../images/c_r_i.png";
// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
// let schema = yup.object().shape({
//   message: yup.string().label('Message').required(),
//   email: yup.string().label('Email').email(),
//   number: yup.string().label('Phone number').matches(phoneRegExp, 'Phone number is not valid'),
//   l_name: yup.string().label('Last name').required(),
//   f_name: yup.string().label('First name').required(),
// });

const Contact = () => {
  // const [error, setError] = useState({ path: null })
  // const[contact, setContact] = useState({ f_name: "", l_name: "", email: "", number: "", message: "" })

  // const handleChange = (event) => {
  //   event.preventDefault();

  //   setContact({ ...contact, [event.target.name]: event.target.value });
  // }
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   let error = await Validate(schema, contact)
  //   console.log("S-s-s>>>>>>>error>>>>>>>>>>.",error)
  //   setError(error)
  //   if(error) return;
  //   setContact({ f_name: "", l_name: "", email: "", number: "", message: "" })
  //   notify('Login successful', 'success')
  // }

  // console.log("S-s-s>>>>>>>>>>>>>>>>>.",contact)
  return (
    <>
      <Head />
      <Header />
      <img src={c_r_i} alt="" className="c_r_i" />
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
        <div className="Signup-form">
          <h1 className="">Contact Us</h1>
          <h3 className="">We will get back to you as soon as possible!</h3>
          <br />
          <br /> <br />
          <br /> <br />
          <br /> <br />
          <br />
          <div className="s-form-inputs d-flex">
            <div className="">
              <label className="d-block " htmlFor="Firstname">
                First Name
              </label>
              <input type="text" id="Firstname" />
            </div>
            <div className="">
              <label className="d-block " htmlFor="Lasttname">
                Last Name
              </label>
              <input type="text" id="Lasttname" />
            </div>
          </div>
          <br />
          <br />
          <div className="s-form-inputs d-flex">
            <div className="w-50 text-left">
              <label className="d-block " htmlFor="Email">
                Email
              </label>
              <input type="Email" id="Email" />
            </div>
            <div className="w-50">
              <label className="d-block " htmlFor="Phone">
                Phone
              </label>
              <input type="tel" id="Phone" />
            </div>
          </div>
          <br />
          <br />
          <div className="s-form-inputs contact-textarea">
            <label htmlFor="Message">Message</label>
            <textarea
              name="Message"
              id="Message"
              cols="107"
              rows="8"
              placeholder="Message"
            ></textarea>
          </div>
          <br />
          <br />
          <Link to="../pages/Signup.js" className="form-next-btn">
            <button className="my-lg-5 fs-3">Submit</button>
          </Link>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
