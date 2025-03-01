import React from "react";
import styled from "styled-components";
import SearchOptions from "../components/hotelSearch/SearchOptions";
import SearchLists from "../components/hotelSearch/SearchLists";
import { useLocation } from "react-router-dom";

const HotelSearch = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const areaFromUrl = queryParams.get("area") || "Seoul";
  const searchFromUrl = queryParams.get("search") || "";

  return (
    <Wrapper>
      <SearchOptions selectedArea={areaFromUrl} />
      <SearchLists searchKeyword={searchFromUrl} />
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

  @media screen and (max-width: 1280px) {
    padding: 2rem 6rem;
  }

  @media screen and (max-width: 1024px) {
    padding: 2rem 4rem;
  }
`;
