import Nav from "components/myInfo/Nav";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";

const MyInfo = () => {
  const location = useLocation();
  const activeMenu = location.pathname.includes("booking-history")
    ? "booking"
    : "myinfo";

  return (
    <Wrapper>
      <Nav activeMenu={activeMenu} />
      <ContentsWrapper>
        <Outlet />
      </ContentsWrapper>
    </Wrapper>
  );
};

export default MyInfo;

const Wrapper = styled.div`
  width: 100%;
  padding: 2rem 20rem;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1440px) {
    padding: 2rem 10rem;
  }

  @media screen and (max-width: 1280px) {
    padding: 2rem 6rem;
  }

  @media screen and (max-width: 1024px) {
    padding: 2rem 4rem;
  }
`;

const ContentsWrapper = styled.div`
  width: 60%;

  @media screen and (max-width: 1024px) {
    width: 63%;
  }
`;
