import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useColors } from "context/ColorContext";

import MainPrepare from "assets/images/main-prepare.png";
import MainSeoul from "assets/images/main-seoul.jpeg";
import MainBusan from "assets/images/main-busan.jpeg";
import MainCasino from "assets/images/main-casino.jpeg";
import MainTradition from "assets/images/main-tradition.jpeg";
import { Link } from "react-router-dom";

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
  const areasRef = useRef(null);
  const themesRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [targetRef, setTargetRef] = useState(null);

  const onMouseDown = (e, ref) => {
    setTargetRef(ref);
    setIsDragging(true);
    setStartX(e.clientX);
    setScrollLeft(ref.current.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e) => {
    if (!isDragging || !targetRef) return;

    const distance = e.clientX - startX;
    targetRef.current.scrollLeft = scrollLeft - distance;
  };

  return (
    <MainWrapper>
      <ListContainer>
        <ListTitle>Hotels by Location</ListTitle>
        <DragScrollContainer
          onMouseDown={(e) => onMouseDown(e, areasRef)}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          ref={areasRef}
        >
          <Lists>
            {locations.map((loc) => (
              <Link to={`/hotel-search?area=${loc.area}`} key={loc.area}>
                <List imageUrl={loc.imageURL} color={colors.mainLight}>
                  <Text>{loc.area}</Text>
                </List>
              </Link>
            ))}
          </Lists>
        </DragScrollContainer>
      </ListContainer>

      <DragScrollContainer
        onMouseDown={(e) => onMouseDown(e, themesRef)}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        ref={themesRef}
      >
        <ListContainer>
          <ListTitle>Hotels by Theme</ListTitle>
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
        </ListContainer>
      </DragScrollContainer>
    </MainWrapper>
  );
};

export default MainHotel;

const MainWrapper = styled.div`
  margin-top: 2rem;
`;

const ListContainer = styled.div`
  margin-bottom: 2rem;
`;
const ListTitle = styled.h3`
  margin-bottom: 1rem;
`;

const DragScrollContainer = styled.div`
  overflow: hidden;
`;
const Lists = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  gap: 1rem;
  user-select: none;
`;
const List = styled.li`
  flex-shrink: 0;
  width: 250px;
  height: 350px;
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

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 1rem;
    z-index: 1;
  }

  &:hover {
    border: 4px solid ${(props) => props.color};
  }

  @media screen and (max-width: 1440px) {
    width: 200px;
    height: 300px;
  }
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  color: #fff;
  z-index: 2;
`;
