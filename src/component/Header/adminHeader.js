import React from "react";
import "../../styles/header.scss";
import adminHeader from "../../images/admin-header.png";
import signupLogo from "../../images/signupLogo.png";
import "../../styles/header.scss";
import "../../styles/UI.scss";
import { BiArrowBack } from "react-icons/bi";

const adminheader = () => {
  return (
    <>
      <div className="header-img-org-admin">
        <img src={adminHeader} className="admin-header web" alt="" />

        <img src={signupLogo} className="admin-header mob admin-header-logo" alt="" />
      </div>
    </>
  );
};

export default adminheader;
