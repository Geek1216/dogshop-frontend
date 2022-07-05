import React from "react";
import "../../styles/header.scss";
import "../../styles/signup.scss";
import "../../styles/UI.scss";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import ex_sm_dog from "../images/dog-extra-sm.png";
import sm_dog from "../images/dog-sm.png";
import s_dog from "../images/dog-s.png";
import lg_dog from "../images/dog-lg.png";

const Signup_2 = () => {
  return (
    <>
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
<<<<<<< HEAD:src/pages/Signup_2.js
          <Link to="../pages/Signup_3.js" className="form-next-btn">
            <button className="my-lg-5">Next</button>
=======
          <Link to="./Signup_3.js" className="form-next-btn">
            <button className="my-lg-5 w-50">Next</button>
>>>>>>> 47db8bdd637949ad5a260030db7153d48bca318d:src/components/Signup/Signup_2.js
          </Link>
        </Form>
    </>
  );
};

export default Signup_2;
