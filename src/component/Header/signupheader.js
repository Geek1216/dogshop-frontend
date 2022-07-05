import React from "react";
import "../../styles/header.scss";
import signupHeader from "../../images/signup-header.png";
import signupLogo from "../../images/signupLogo.png";
import "../../styles/header.scss";
import "../../styles/UI.scss";
import Back from "./backwardarrow.js";
import logo from "../../images/Logo.png";
import { Link } from "react-router-dom";

const signupheader = () => {
  return (
    <>
      <div className="header-img-org">
        <img src={signupHeader} className="signup-header web" alt="" />
        <Link  to="/pages/Cart" style={{ cursor: "pointer" }}>
         
          <img src={logo} className=" mob-sidebar-logo" alt="" />
        </Link>
        {/* <img src={signupLogo} className="signup-header mob" alt="" /> */}
      </div>
      <Back />
    </>
  );
};

export default signupheader;
