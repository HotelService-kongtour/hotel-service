import React from "react";
import styled from "styled-components";
import { useColors } from "context/ColorContext";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { attractionMockData } from "data/attractionMockData";

import NextArrowIcon from "assets/icons/arrow-forward-dark.svg";
import PrevArrowIcon from "assets/icons/arrow-back-dark.svg";

import MainPrepare from "assets/images/main-prepare.png";
import MainSeoul from "assets/images/main-seoul.jpeg";
import MainIncheon from "assets/images/main-incheon.jpg";
import MainBusan from "assets/images/main-busan.jpeg";
import MainJeju from "assets/images/main-jeju.jpg";
import MainCasino from "assets/images/main-casino.jpeg";
import MainTradition from "assets/images/main-tradition.jpeg";
import MainSpring from "assets/images/main-spring.jpg";
import MainSummer from "assets/images/main-summer.jpg";
import MainFall from "assets/images/main-fall.jpg";
import MainWinter from "assets/images/main-winter.jpeg";

const locations = [
  { area: "Seoul", imageURL: MainSeoul },
  { area: "Busan", imageURL: MainBusan },
  { area: "Jeju", imageURL: MainJeju },
  { area: "Incheon", imageURL: MainIncheon },
  { area: "Gangneung", imageURL: MainPrepare },
  { area: "Daejeon", imageURL: MainPrepare },
  { area: "Gwangju", imageURL: MainPrepare },
];

const themes = [
  { area: "Casino", imageURL: MainCasino },
  { area: "Korea Traditional", imageURL: MainTradition },
  { area: "Spring", imageURL: MainSpring },
  { area: "Summer", imageURL: MainSummer },
  { area: "Fall", imageURL: MainFall },
  { area: "Winter", imageURL: MainWinter },
];

const MainHotel = () => {
  const colors = useColors();

  const PrevArrow = ({ onClick, className }) => {
    return (
      <ArrowButton
        onClick={onClick}
        style={{ left: "-35px" }}
        className="prev-arrow"
      >
        <img src={PrevArrowIcon} alt="prev-arrow" />
      </ArrowButton>
    );
  };

  const NextArrow = ({ onClick, className }) => {
    return (
      <ArrowButton
        onClick={onClick}
        style={{ right: "-30px" }}
        className="next-arrow"
      >
        <img src={NextArrowIcon} alt="next-arrow" />
      </ArrowButton>
    );
  };

  const CirclePrevArrow = ({ onClick }) => {
    return (
      <CircleArrowButton
        onClick={onClick}
        style={{ left: "-20px" }}
        className="circle-prev-arrow"
      >
        <img src={PrevArrowIcon} alt="prev-arrow" />
      </CircleArrowButton>
    );
  };

  const CircleNextArrow = ({ onClick }) => {
    return (
      <CircleArrowButton
        onClick={onClick}
        style={{ right: "10px" }}
        className="circle-next-arrow"
      >
        <img src={NextArrowIcon} alt="next-arrow" />
      </CircleArrowButton>
    );
  };

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const attractionSliderSettings = {
    ...sliderSettings,
    slidesToShow: 5,
    nextArrow: <CircleNextArrow />,
    prevArrow: <CirclePrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <MainWrapper>
      <ListContainer>
        <ListTitle>Hotels by Location</ListTitle>
        <Slider {...sliderSettings}>
          {locations.map((loc) => (
            <Link to={`/hotel-search?area=${loc.area}`} key={loc.area}>
              <List $imageurl={loc.imageURL} color={colors.mainLight}>
                <Text>{loc.area}</Text>
              </List>
            </Link>
          ))}
        </Slider>
      </ListContainer>

      {/* 관광명소 리스트 */}
      <ListContainerAttraction>
        <ListTitle>Tourist Attractions</ListTitle>
        <Slider {...attractionSliderSettings}>
          {attractionMockData.map((attraction) => (
            <Link to={``} key={attraction.attractionName}>
              <AttractionList
                $imageurl={attraction.imageURL}
                color={colors.mainLight}
                key={attraction.attractionName}
              >
                <AttractionTextContainer>
                  <AttractionText>
                    <p>{attraction.attractionName}</p>
                    <p style={{ fontSize: "0.8em", opacity: 0.8 }}>
                      {attraction.openTime} - {attraction.closeTime}
                    </p>
                    <p style={{ fontSize: "0.8em", opacity: 0.8 }}>
                      ${attraction.price}
                    </p>
                  </AttractionText>
                </AttractionTextContainer>
              </AttractionList>
            </Link>
          ))}
        </Slider>
      </ListContainerAttraction>

      <ListContainer>
        <ListTitle>Hotels by Theme</ListTitle>
        <Slider {...sliderSettings}>
          {themes.map((theme) => (
            <Link to={`/hotel-search?theme=${theme.area}`} key={theme.area}>
              <List
                key={theme.area}
                $imageurl={theme.imageURL}
                color={colors.mainLight}
              >
                <Text>
                  {theme.area.split(" ").map((word, index) => (
                    <p key={index}>{word}</p>
                  ))}
                </Text>
              </List>
            </Link>
          ))}
        </Slider>
      </ListContainer>
    </MainWrapper>
  );
};

export default MainHotel;

const MainWrapper = styled.div`
  margin-top: 2rem;
`;

const ListContainer = styled.div`
  margin-bottom: 3rem;
  position: relative;
`;
const ListContainerAttraction = styled(ListContainer)`
  background-color: #ececec;
  border-radius: 1rem;
  padding: 4rem 2rem;
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

  @media screen and (max-width: 1440px) {
    &.prev-arrow {
      left: -25px !important;
    }
    &.next-arrow {
      right: -15px !important;
    }

    img {
      width: 24px;
      height: 24px;
    }
  }

  @media screen and (max-width: 1280px) {
    &.next-arrow {
      right: -25px !important;
    }
  }

  @media screen and (max-width: 1024px) {
    &.next-arrow {
      right: -15px !important;
    }
  }
`;

const CircleArrowButton = styled(ArrowButton)`
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  opacity: 0.8;

  img {
    width: 24px;
    height: 24px;
    position: relative;
    left: ${(props) => (props.style?.left ? "4px" : "0")};
  }

  &:hover {
    opacity: 1;
    background: ${(props) => props.theme.colors?.mainLight || "#f8f8f8"};
  }

  @media screen and (max-width: 1440px) {
    width: 32px;
    height: 32px;

    img {
      width: 16px;
      height: 16px;
    }

    &.circle-next-arrow {
      right: 5px !important;
    }
  }

  @media screen and (max-width: 1280px) {
    &.circle-next-arrow {
      right: 0px !important;
    }
  }

  @media screen and (max-width: 1024px) {
    &.circle-next-arrow {
      right: 5px !important;
    }
  }
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
  background-image: ${({ $imageurl }) => `url(${$imageurl})`};
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

const AttractionList = styled(List)`
  padding: 0.5rem;
  width: 200px;
  height: 280px;
  background-image: ${({ $imageurl }) => `url("${$imageurl}")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &:hover {
    border: none;
  }

  @media screen and (max-width: 1440px) {
    width: 180px;
    height: 240px;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  color: #fff;
  z-index: 3;
`;

const AttractionTextContainer = styled.div`
  background-color: #fff;
  padding: 0.5rem;
  border-radius: 0.5rem;
  width: 100%;
  z-index: 3;
`;

const AttractionText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  color: #333;
`;
