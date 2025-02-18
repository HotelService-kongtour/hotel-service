import React from "react";
import styled from "styled-components";
import MainHotel from "../components/home/MainHotel";
import CustomMainInput from "../components/custom/CustomMainInput";

const Home = () => {
  return (
    <Wrapper>
      <CustomMainInput />
      <MainHotel />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  padding: 2rem 20rem;

  @media screen and (max-width: 1440px) {
    padding: 2rem 10rem;
  }
`;
