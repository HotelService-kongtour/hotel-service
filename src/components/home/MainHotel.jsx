import React, { useRef, useState } from "react";
import styled from "styled-components";

const areas = [
  "Seoul",
  "Incheon",
  "Daejeon",
  "Gwangju",
  "Daegu",
  "Busan",
  "Jeju",
];

const themes = ["Casino", "Korea Tranditional", "Pet Friendly", "Eco Friendly"];

const MainHotel = () => {
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
        <ListTitle>Area</ListTitle>
        <DragScrollContainer
          onMouseDown={(e) => onMouseDown(e, areasRef)}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          ref={areasRef}
        >
          <Lists>
            {areas.map((area) => (
              <List key={area}>{area}</List>
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
          <ListTitle>Theme</ListTitle>
          <Lists>
            {themes.map((theme) => (
              <List key={theme}>{theme}</List>
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
  height: 300px;
  padding: 1rem;
  background-color: #8e8e8e;
  color: #fff;
  border-radius: 1rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  font-weight: 600;

  &:hover {
    background-color: #606060;
    border: 4px solid #ececec;
  }
`;
