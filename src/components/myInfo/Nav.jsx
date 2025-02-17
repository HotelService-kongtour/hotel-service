import React from "react";
import styled from "styled-components";

const Nav = () => {
  return <NavContainer>nav</NavContainer>;
};

export default Nav;

const NavContainer = styled.div`
  width: 28%;
  height: calc(90vh - 4rem);
  padding: 0.5rem 1.5rem 0 0;
  border-right: 1px solid #ccc;
  position: relative;
`;

const Name = styled.h2``;
const Email = styled.div``;

const Menus = styled.ul``;
const Menu = styled.li``;
