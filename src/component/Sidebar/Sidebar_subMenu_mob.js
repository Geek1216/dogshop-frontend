import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../styles/admin_pages.scss"

const SidebarLink = styled(Link)`
  display: flex;
  color: #dd7a48 !important;
  justify-content: space between;
  align-items: center;
  padding: 20px;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  list-style: none;
  margin: auto 30px;

  &:hover {
    background: #09d1c6;
    border-radius: 7px;
    border: none;
    cursor: pointer;
    color: #fff !important;
  }



`;



const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  height: 60px;
  padding-left: 3rem;
  display: flex;
  aligh-items: center;
  text-decoration: none;
  color: #dd7a48;
`;

const Sidebar_subMenu_mob = ({ item }) => {
  // const [subnav, setSubnav] = useState(false);

  // const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink  to="/">
      <div>
          <SidebarLabel >
            Home
          </SidebarLabel>
        </div>

      </SidebarLink>

    </>
  );
};

// {subnav &&
//   item.subNav.map(
//     (item,
//     (index) => {
//       return (
//         <DropdownLink to={item.path} key={index}>
//           {item.icon}
//           <SidebarLabel>{item.title}</SidebarLabel>
//         </DropdownLink>
//       );
//     })
//   )}

// className="useCallback(({isActive}) => isActive ? classes.active : classes.link)"

export default Sidebar_subMenu_mob;
