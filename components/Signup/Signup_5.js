import React from "react";
import "../../styles/header.scss";
import "../../styles/signup.scss";
import "../../styles/UI.scss";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Signup_5 = () => {
  return (
    <>
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
        <Form.Label className="dog-name text-left" htmlFor="Dog name">
          Password
        </Form.Label>
        <Form.Control
          type="password"
          id="dog-name"
          placeholder="Password"
          className="dog-name-input my-lg-2  mx-auto"
        />

        <Link to="./Signup_6.js" className="form-next-btn">
          <button className="my-lg-5">Signup</button>
        </Link>
      </Form>
    </>
  );
};

export default Signup_5;
