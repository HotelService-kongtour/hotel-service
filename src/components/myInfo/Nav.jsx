import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useColors } from "context/ColorContext";

import UserIcon from "assets/icons/user.svg";
import ClipboardIcon from "assets/icons/clipboard.svg";
import ArrowIcon from "assets/icons/arrow-forward-dark.svg";

const MenuItems = [
  {
    id: "myinfo",
    icon: UserIcon,
    title: "Edit My Info",
    description: "View and Edit My Info",
  },
  {
    id: "booking",
    icon: ClipboardIcon,
    title: "Booking History",
    description: "View All Reservations and Payment Details",
  },
];

const Nav = ({ activeMenu }) => {
  const colors = useColors();
  const navigate = useNavigate();

  return (
    <NavContainer>
      <NameBox>
        <Name>Hello, User!</Name>
        <Email>user1234@gmail.com</Email>
      </NameBox>

      <Menus>
        {MenuItems.map((item) => (
          <Menu
            key={item.id}
            onClick={() =>
              navigate(
                item.id === "myinfo"
                  ? "/my-info/edit"
                  : "/my-info/booking-history"
              )
            }
            $isactive={activeMenu === item.id}
            color={colors.main}
          >
            <MenuInner>
              <img src={item.icon} alt={`${item.id}-icon`} />
              <MenuText>
                <div>{item.title}</div>
                <p>{item.description}</p>
              </MenuText>
            </MenuInner>
            <Arrow>
              <img src={ArrowIcon} alt="arrow-icon" />
            </Arrow>
          </Menu>
        ))}
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

  @media screen and (max-width: 1024px) {
    width: 35%;
    height: calc(92vh - 4rem);
    padding: 0.5rem 1rem 0 0;
  }
`;

const NameBox = styled.div`
  margin-bottom: 2rem;
`;
const Name = styled.h2`
  @media screen and (max-width: 1280px) {
    font-size: 1.3rem;
  }

  @media screen and (max-width: 1024px) {
    font-size: 1.2rem;
  }
`;
const Email = styled.div`
  @media screen and (max-width: 1280px) {
    font-size: 1rem;
  }
`;

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

  @media screen and (max-width: 1024px) {
    img {
      width: 28px;
    }
  }
`;
const MenuText = styled.div`
  p {
    font-size: 0.9rem;
    color: #999;
  }

  @media screen and (max-width: 1024px) {
    p {
      font-size: 0.8rem;
    }
  }
`;

const Arrow = styled.div`
  img {
    width: 20px;
    opacity: 0.5;
  }
`;
