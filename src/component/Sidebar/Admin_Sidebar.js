import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Sidebar_Data } from "./Sidebar_Data";
import SubMenu from "./Sidebar_subMenu";
import logo from "../../images/Logo.png";
import "../../styles/sidebar.scss";

const Nav = styled.div`
  height: 80px;
  dislay: flex;
  justify-conten: flex-start;
  align-items: center;
  z-index:9999 !important;
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

  @media (max-width:1107px){
    display:flex;
    z-index: 45 !important,
  }

  &&:hover {
    color: #0bd0c6;
  }
`;

const SidebarNav = styled.nav`
  background: #feddc6;
  width: 350px;
  height: 100vh;
  display:flex;
  justify-centent:center;
  position:fixed;
  top:0;
  @media (max-width:1107px){
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition:350ms;
  z-index 10;
  width:100%;
  height: 100%;
  overflow-y: scroll,

  }

  `;


  

const SidebarWrap = styled.div`
  width: 100%;
`;

const Admin_Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <Nav>
        <NavIcon to="#">
          <FaIcons.FaBars onClick={showSidebar} />
        </NavIcon>
      </Nav>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          <img src={logo} className="my-4 mx-3" alt="" />
          <NavIcon to="#">
            <AiIcons.AiOutlineClose className="menu-close" onClick={showSidebar} />
          </NavIcon>
          {Sidebar_Data.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};

export default Admin_Sidebar;
