import React from 'react'
import Header from '../component/Header/signupheader.js'
import "../styles/header.scss";
import "../styles/signup.scss";
import "../styles/UI.scss";
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import r_s1_f from "../images/r-s1-f.svg";
import l_s1_f from "../images/l_s1_f.svg";
import r_s1_b from "../images/r_s1_b.svg";
import r_s1_d_f from "../images/r-s1-d-f.svg";
import l_s1_b from "../images/l_s1_b.svg";

const Admin_Login = () => {
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


    <Form className=' form mx-auto '>
    <h1 className=" text-center my-lg-5  dog-n-h">Admin Login</h1>
    <Form.Label className="dog-name text-left" htmlFor="Dog name">Username</Form.Label>
       <Form.Control
         type="text"
         id="dog-name"
         placeholder='Username'
         className="dog-name-input my-lg-2  mx-auto"
       />

<br />
          <br />

           <Form.Label className="dog-name text-left" htmlFor="Dog name">Password</Form.Label>
       <Form.Control
         type="password"
         id="dog-name"
         placeholder='Password'
         className="dog-name-input my-lg-2  mx-auto"
       />
       
       <br />
          <br />
          <br />

        <Link to="../pages/Admin_Home.js" className='form-next-btn'><button className='my-lg-5'>Login</button></Link>
         </Form>
         <br />
          <br />
          <br />
 
 
       
        </div>
    </>
  )
}

export default Admin_Login
