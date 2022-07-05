import React from "react";
import "../../styles/header.scss";
import "../../styles/header.scss";
import "../../styles/UI.scss";
import { BiArrowBack } from "react-icons/bi";
import { Link, Routes, Route, useNavigate } from "react-router-dom";

const Item = () => {
    const navigate = useNavigate();
  return (
<>
<button onClick={() => navigate(-1)} style={{border: 'none', background: 'transparent'}}>
        <BiArrowBack className="backward-icon" />
      </button>
</>
  )
}

export default Item
