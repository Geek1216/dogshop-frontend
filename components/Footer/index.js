import React, { useState } from "react";
import payment1 from "../../images/payment 1.png";
import payment2 from "../../images/payment 2.png";
import payment3 from "../../images/payment 3.png";
import payment4 from "../../images/payment 4.png";
import Switch from "../Switch";
import "../../styles/footer.scss";

const Footer = () => {
  const [value, setValue] = useState("");

  return (
    <div id="footer" className="footer">
      <div className="footer-top justify-content-lg-between flex-wrap">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3 className="title mb-lg-0 text-white">
                Join Our Mailing List
              </h3>
            </div>
            <div className="col-lg-6">
              <div className="subscribe">
                <form className="footer-form position-relative">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="footer-input input-text"
                    onChange={(e) => {
                      setValue(e.target.value);
                    }}
                    value={value}
                  />
                  <button
                    type="submit"
                    value="submit"
                    className="input-btn input-text">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="text-white"></hr>
      <div className="footer-bottom">
        <div className="container">
          <div className="d-lg-flex justify-content-between text-lg-start text-center">
            <div className="contact">
              <h3 className="text-white">Contanct Us</h3>
              <div className="address">
                <p>4-chōme-7-2 Shimomeguro</p>
                <p>Meguro City, Tokyo 153-0064</p>
                <p>contact@pawpackjp.com</p>
              </div>
            </div>
            <div className="payment">
              <ul className="payment-icons">
                <li className="payment-icon">
                  <img src={payment1} className="icon" />
                </li>
                <li className="payment-icon">
                  <img src={payment2} className="icon" />
                </li>
                <li className="payment-icon">
                  <img src={payment3} className="icon" />
                </li>
                <li className="payment-icon">
                  <img src={payment4} className="icon" />
                </li>
              </ul>
            </div>
            <Switch className={"footerswich"} />
          </div>
        </div>
      </div>
      <div className="copyright">© 2022, Paw Pack Japan</div>
    </div>
  );
};

export default Footer;
