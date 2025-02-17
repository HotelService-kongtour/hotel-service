import React from "react";
import styled from "styled-components";
import { useColors } from "context/ColorContext";

import UserIcon from "assets/icons/user.svg";
import ClipboardIcon from "assets/icons/clipboard.svg";
import ArrowIcon from "assets/icons/arrow_forward_dark.svg";

const Nav = ({ activeMenu, setActiveMenu }) => {
  const colors = useColors();

  return (
    <NavContainer>
      <NameBox>
        <Name>Hello, User!</Name>
        <Email>user1234@gmail.com</Email>
      </NameBox>

      <Menus>
        <Menu
          onClick={() => setActiveMenu("myinfo")}
          $isactive={activeMenu === "myinfo"}
          color={colors.main}
        >
          <MenuInner>
            <img src={UserIcon} alt="user-icon" />
            <MenuText>
              <div>Edit My Info</div>
              <p>View and Edit My Info</p>
            </MenuText>
          </MenuInner>
          <Arrow>
            <img src={ArrowIcon} alt="arrow-icon" />
          </Arrow>
        </Menu>
        <Menu
          onClick={() => setActiveMenu("booking")}
          $isactive={activeMenu === "booking"}
          color={colors.main}
        >
          <MenuInner>
            <img src={ClipboardIcon} alt="clipboard-icon" />
            <MenuText>
              <div>Booking History</div>
              <p>View All Reservations and Payment Details</p>
            </MenuText>
          </MenuInner>
          <Arrow>
            <img src={ArrowIcon} alt="arrow-icon" />
          </Arrow>
        </Menu>
      </Menus>
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.div`
  width: 37%;
  height: calc(90vh - 4rem);
  padding: 0.5rem 2rem 0 0;
  border-right: 1px solid #ccc;
  position: relative;
`;

const NameBox = styled.div`
  margin-bottom: 2rem;
`;
const Name = styled.h2``;
const Email = styled.div``;

const Menus = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Menu = styled.li`
  width: 100%;
  padding: 0.75rem 1rem;
  cursor: pointer;
  border: 2px solid ${(props) => (props.$isactive ? props.color : "#ececec")};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const MenuInner = styled.div`
  width: calc(100% - 30px);
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    width: 32px;
  }
`;
const MenuText = styled.div`
  p {
    font-size: 0.9rem;
    color: #999;
  }
`;

const Arrow = styled.div`
  img {
    width: 20px;
    opacity: 0.5;
  }
`;
