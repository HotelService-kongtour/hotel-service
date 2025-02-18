import React from "react";
import styled from "styled-components";
import { useColors } from "../context/ColorContext";
import { Link } from "react-router-dom";

import LogoIcon from "assets/logo/logo-H.svg";
import LogoName from "assets/logo/logo-Hantour.svg";

const Header = () => {
  const colors = useColors();

  return (
    <HeaderMain>
      <Link to="/">
        <Logo>
          <img src={LogoIcon} alt="logo-icon" />
          <img src={LogoName} alt="logo-name" />
        </Logo>
      </Link>

      <Menus>
        <Link to="/hotel-search">
          <Menu color={colors.main}>Hotel Reservation</Menu>
        </Link>
        <Link to="/my-info">
          <Menu color={colors.main}>My Info</Menu>
        </Link>
        <Link to="/login">
          <Menu color={colors.main}>Login</Menu>
        </Link>
      </Menus>
    </HeaderMain>
  );
};

export default Header;

const HeaderMain = styled.header`
  height: 10vh;
  padding: 0 20rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;

  @media screen and (max-width: 1440px) {
    padding: 0 10rem;
  }
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

  @media screen and (max-width: 1440px) {
    font-size: 0.9rem;
  }
`;
