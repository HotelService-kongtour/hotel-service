import BookingHistory from "components/myInfo/BookingHistory";
import EditMyInfo from "components/myInfo/EditMyInfo";
import Nav from "components/myInfo/Nav";
import React from "react";
import styled from "styled-components";

const MyInfo = () => {
  return (
    <Wrapper>
      <Nav />
      <ContentsWrapper>
        <EditMyInfo />
        <BookingHistory />
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
`;

const ContentsWrapper = styled.div`
  width: 70%;
`;
