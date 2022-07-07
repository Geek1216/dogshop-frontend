import React, { useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
// import { Sidebar_Data_mob } from "./Sidebar_Data_mob";
import SubMenu from "./Sidebar_subMenu_mob";
import logo from "../../images/Logo.png";
import "../../styles/sidebar.scss";


const Nav = styled.div`
  height: 80px;
  dislay: flex;
  justify-conten: flex-start;
  align-items: center;
  z-index: 9999;
`;

const NavIcon = styled(Link)`
  margin-left: 3rem !important;
  font-size: 1.5rem;
  height: 80px;
  // margin-top: 10rem !important;
  display: none;
  justify-content: flex-start;
  align-items: center;
  color: #b36234;
  z-index: 9999 !important;

  @media (max-width: 1107px) {
    display: flex;
  }

  &&:hover {
    color: #0bd0c6;
  }
`;

const SidebarNav = styled.nav`
  background: #feddc6;
  width: 350px;
  height: 100vh;
  display: flex;
  justify-centent: center;
  z-index: 9999 !important;
  position: fixed;
  top: 0;
  @media (max-width: 1107px) {
    left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
    transition: 350ms;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <Nav>
        <NavIcon to="#" className="side-index">
          <FaIcons.FaBars onClick={showSidebar} />
          {/* <img src={logo} className=" mob-sidebar-logo" alt="" /> */}
        </NavIcon>
      </Nav>
      <SidebarNav sidebar={sidebar} className="side-index">
        <SidebarWrap>
          <Link to="/">
            {" "}
            <img src={logo} className="my-4 mx-3" alt="" />
          </Link>
          <NavIcon to="#">
            <AiIcons.AiOutlineClose
              className="menu-close"
              onClick={showSidebar}
            />
          </NavIcon>
          {/* {Sidebar_Data_mob.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })} */}

          <NavLink to="/" className="mob-s-l">
            Home
          </NavLink>

          <a href="#about" className="mob-s-l s-ac">
            About
          </a>

          <a href="#whats" className="mob-s-l s-ac">
            What's Inside
          </a>

          <NavLink
            to="/pages/Contact.js"
            className="mob-s-l"
            
          >
            Contact
          </NavLink>

          <a href="#faq" className="mob-s-l s-ac">
            FAQ
          </a>

          <NavLink
            to="/pages/Signup.js"
            className="mob-s-l"
        
          >
            Get Pawpack
          </NavLink>
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};

export default Sidebar;
