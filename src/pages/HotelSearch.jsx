import React from "react";
import styled from "styled-components";
import SearchOptions from "../components/hotelSearch/SearchOptions";
import SearchLists from "../components/hotelSearch/SearchLists";

const HotelSearch = () => {
  return (
    <Wrapper>
      <SearchOptions />
      <SearchLists />
    </Wrapper>
  );
};

export default HotelSearch;

const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  padding: 2rem 20rem;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1440px) {
    padding: 2rem 10rem;
  }
`;
