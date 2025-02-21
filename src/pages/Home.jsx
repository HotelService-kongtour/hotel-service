import React from "react";
import styled from "styled-components";
import MainHotel from "../components/home/MainHotel";
import CustomMainInput from "../components/custom/CustomMainInput";
// import FlightSearchResults from "components/home/FlightSearchResults";
// import WeekendDeals from "components/home/WeekendDeals";
const Home = () => {
  return (
    <Wrapper>
      <CustomMainInput />
      <MainHotel />
      {/* <FlightSearchResults /> */}
      {/* <WeekendDeals /> */}
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  padding: 2rem 20rem;

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
