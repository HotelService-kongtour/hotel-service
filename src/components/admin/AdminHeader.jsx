import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import LogoIcon from "assets/logo/logo.svg";
import LogoName from "assets/logo/logo_name.svg";

const AdminHeader = () => {
  return (
    <HeaderAdmin>
      <Link to="/admin">
        <Logo>
          <img src={LogoIcon} alt="logo-icon" />
          <img src={LogoName} alt="logo-name" />
          관리자
        </Logo>
      </Link>
    </HeaderAdmin>
  );
};

export default AdminHeader;

const HeaderAdmin = styled.header`
  height: 10vh;
  padding: 0 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const Menus = styled.ul`
  display: flex;
  align-items: center;
  gap: 4rem;
`;
const Menu = styled.li`
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.color};
    text-decoration: underline;
  }
`;
