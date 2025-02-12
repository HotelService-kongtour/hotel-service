import React from "react";
import styled from "styled-components";
import HotelInfomation from "components/hotelDetail/HotelInfomation";
import HotelLocation from "components/hotelDetail/HotelLocation";
import HotelReview from "components/hotelDetail/HotelReview";
import HotelRooms from "components/hotelDetail/HotelRooms";
import { useParams } from "react-router-dom";

const HotelDetail = () => {
  const { hotelName } = useParams();

  return (
    <Wrapper>
      <HotelInfomation />
      <HotelRooms hotelName={hotelName} />
      <HotelLocation />
      <HotelReview />
    </Wrapper>
  );
};

export default HotelDetail;

const Wrapper = styled.div`
  padding: 2rem 20rem;

  @media screen and (max-width: 1440px) {
    padding: 2rem 10rem;
  }
`;
