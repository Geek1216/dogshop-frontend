import React from "react";
import "../../styles/header.scss";
import "../../styles/signup.scss";
import "../../styles/UI.scss";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <Form className=" form mx-auto ">
        <h1 className=" text-center my-lg-5  dog-n-h">
          What is your Dog’s name?
        </h1>
        <Form.Label className="dog-name text-left" htmlFor="Dog name">
          Dog name
        </Form.Label>
        <Form.Control
          type="text"
          id="dog-name"
          placeholder="name here"
          className="dog-name-input my-lg-3  "
        />
        <div className="button">
          <Link to="#">
            <button>She’s a good girl</button>{" "}
          </Link>
          <Link to="#">
            <button>he’s a good Boy</button>
          </Link>
        </div>
        <Link to="./Signup_2.js" className="form-next-btn ">
          <button className="my-lg-5">Next</button>
        </Link>
      </Form>
    </>
  );
};

export default Signup;
