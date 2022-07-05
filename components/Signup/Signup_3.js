import React from "react";
import "../../styles/header.scss";
import "../../styles/signup.scss";
import "../../styles/UI.scss";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
<<<<<<< HEAD:src/pages/Signup_3.js
import signupProgress from "../images/signup-progress-3.png";
import Calendar from "../images/date.svg";
=======

>>>>>>> 47db8bdd637949ad5a260030db7153d48bca318d:src/components/Signup/Signup_3.js

const Signup_3 = () => {
  return (
    <>
        <Form className=" form w-50 mx-auto">
          <h1 className=" text-center my-lg-5  dog-n-h">
            When is Jack’s Birthday?
          </h1>
          <Form.Label className="dog-name text-left " htmlFor="Dog name">
            Select date
          </Form.Label>

          <Form.Control
            type="date"
            id="dog-name"
            placeholder="MM/DD/YYYY"
            className="dog-name-input my-lg-4  mx-auto"
          />
          <div className="disc  w-100 mx-auto text-centere">
            <Link className="skip-page" to="../pages/Signup_4.js">
              {" "}
              Or, skip this step
            </Link>
          </div>
          <Link to="./Signup_4.js" className="form-next-btn">
            <button className="my-lg-5">Next</button>
          </Link>
        </Form>
    </>
  );
};

export default Signup_3;
