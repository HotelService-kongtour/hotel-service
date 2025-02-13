import React from "react";

import CompleteImg from "assets/images/complete.jpg";
import styled from "styled-components";
import CustomButton from "components/custom/CustomButton";

const ReservationComplete = () => {
  return (
    <Wrapper>
      <ImgContainer>
        <img src={CompleteImg} alt="complete-image" />
      </ImgContainer>

      <InfoContainer>
        <InfoTitle>
          <h2>Your reservation is Confirmed!</h2>
          <p>Lotte Hotel Seoul</p>
          <span>123456</span>
        </InfoTitle>

        <InfoRoomBox>
          <InfoRoomName>
            <p>Premium Family Room</p>
            <span>1</span>
          </InfoRoomName>
          <InfoRoomDate>
            <DateCheckIn>
              <span>Check-in</span>
              <div>Thu,Feb 13,</div>
              <div>2025, 3:00 PM</div>
            </DateCheckIn>
            <DateCheckOut>
              <span>Check-out</span>
              <div>Fri,Feb 14,</div>
              <div>2025, 12:00 PM</div>
            </DateCheckOut>
          </InfoRoomDate>
        </InfoRoomBox>

        <CustomButton>View reservation details</CustomButton>
      </InfoContainer>
    </Wrapper>
  );
};

export default ReservationComplete;

const Wrapper = styled.div`
  height: 62vh;
  padding: 0 20rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 1440px) {
    height: 66vh;
    padding: 2rem 10rem;
  }
`;

const ImgContainer = styled.div`
  width: 40%;

  img {
    width: 100%;
  }

  @media screen and (max-width: 1440px) {
    width: 30%;
  }
`;

const InfoContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 1440px) {
    width: 25%;
  }
`;
const InfoTitle = styled.div`
  text-align: center;

  p {
    padding: 0.5rem 0;
  }
  span {
    font-weight: 600;
    font-size: 1rem;
  }

  @media screen and (max-width: 1440px) {
    font-size: 0.8rem;

    h2 {
      font-size: 1.3rem;
    }
  }
`;

const InfoRoomBox = styled.div`
  width: 100%;
`;
const InfoRoomName = styled.div`
  width: 100%;
  padding-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-weight: 600;
  }

  @media screen and (max-width: 1440px) {
    font-size: 0.8rem;
  }
`;
const InfoRoomDate = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const DateCheckIn = styled.div`
  width: 49%;
  padding: 1rem;
  border-radius: 0.25rem;
  background-color: #ececec;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.3rem;

  span {
    font-size: 1rem;
    font-weight: 600;
    color: #999;
  }

  @media screen and (max-width: 1440px) {
    font-size: 0.8rem;

    span {
      font-size: 0.8rem;
    }
  }
`;
const DateCheckOut = styled(DateCheckIn)`
  align-items: flex-end;
`;
