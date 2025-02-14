import React from "react";
import styled from "styled-components";
import { useColors } from "context/ColorContext";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import MainSeoul from "assets/images/main-seoul.jpeg";
import MainBusan from "assets/images/main-busan.jpeg";
import MainCasino from "assets/images/main-casino.jpeg";
import MainTradition from "assets/images/main-tradition.jpeg";
import MainPrepare from "assets/images/main-prepare.png";
import NextArrowIcon from "assets/icons/arrow_forward_dark.svg";
import PrevArrowIcon from "assets/icons/arrow_back_dark.svg";

const locations = [
  { area: "Seoul", imageURL: MainSeoul },
  { area: "Busan", imageURL: MainBusan },
  { area: "Incheon", imageURL: MainPrepare },
  { area: "Gangneung", imageURL: MainPrepare },
  { area: "Daejeon", imageURL: MainPrepare },
  { area: "Daegu", imageURL: MainPrepare },
  { area: "Gyeongju", imageURL: MainPrepare },
  { area: "Jeju", imageURL: MainPrepare },
  { area: "Other", imageURL: MainPrepare },
];

const themes = [
  { area: "Casino", imageURL: MainCasino },
  { area: "Korea Traditional", imageURL: MainTradition },
  { area: "Pet Friendly", imageURL: MainPrepare },
  { area: "Eco Friendly", imageURL: MainPrepare },
];

const MainHotel = () => {
  const colors = useColors();
  const PrevArrow = ({ onClick }) => {
    return (
      <ArrowButton onClick={onClick} style={{ left: "-30px" }}>
        <img src={PrevArrowIcon} alt="prev-arrow" />
      </ArrowButton>
    );
  };

  const NextArrow = ({ onClick }) => {
    return (
      <ArrowButton onClick={onClick} style={{ right: "-30px" }}>
        <img src={NextArrowIcon} alt="next-arrow" />
      </ArrowButton>
    );
  };

  const locationSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <MainWrapper>
      <ListContainer>
        <ListTitle>Hotels by Location</ListTitle>
        <Slider {...locationSettings}>
          {locations.map((loc) => (
            <Link to={`/hotel-search?area=${loc.area}`} key={loc.area}>
              <List imageUrl={loc.imageURL} color={colors.mainLight}>
                <Text>{loc.area}</Text>
              </List>
            </Link>
          ))}
        </Slider>
      </ListContainer>

      <ListContainer>
        <ListTitle>Hotels by Theme</ListTitle>
        <ListWrapper>
          <Lists>
            {themes.map((theme) => (
              <List
                key={theme.area}
                imageUrl={theme.imageURL}
                color={colors.mainLight}
              >
                <Text>
                  {theme.area.split(" ").map((word, index) => (
                    <p key={index}>{word}</p>
                  ))}
                </Text>
              </List>
            ))}
          </Lists>
        </ListWrapper>
      </ListContainer>
    </MainWrapper>
  );
};

export default MainHotel;

const MainWrapper = styled.div`
  margin-top: 2rem;
`;

const ListContainer = styled.div`
  margin-bottom: 2rem;
  position: relative;
`;

const ListTitle = styled.h3`
  margin-bottom: 1rem;
`;
const ArrowButton = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;
  opacity: 0.3;

  img {
    width: 32px;
    height: 32px;
  }

  &:hover {
    opacity: 0.5;
  }
`;

const ListWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Lists = styled.ul`
  display: flex;
  gap: 1rem;
  transition: transform 0.3s ease;
`;

const List = styled.li`
  width: 240px;
  height: 300px;
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  font-weight: 600;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 1rem;
    z-index: 2;
  }

  &:hover {
    border: 4px solid ${(props) => props.color};
  }

  @media screen and (max-width: 1440px) {
    width: 205px;
    height: 260px;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  color: #fff;
  z-index: 3;
`;
