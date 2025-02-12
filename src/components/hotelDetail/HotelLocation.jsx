import React from "react";
import styled from "styled-components";

import PinIcon from "assets/icons/pin.svg";

const HotelLocation = () => {
  return (
    <LocationContainer>
      <Title>Location</Title>
      <Location>
        <img src={PinIcon} alt="pin-icon" />
        address, 123456
      </Location>
      <Map />
    </LocationContainer>
  );
};

export default HotelLocation;

const LocationContainer = styled.div`
  padding: 2rem 0;
`;

const Title = styled.h3`
  width: 100%;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #ececec;
`;
const Location = styled.div`
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  img {
    width: 24px;
  }
`;

const Map = styled.div`
  width: 100%;
  height: 50vh;
  border-radius: 0.5rem;
  background-color: #ccc;
`;
