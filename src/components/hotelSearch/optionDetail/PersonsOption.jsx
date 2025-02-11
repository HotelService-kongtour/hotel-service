import React, { useCallback, useEffect, useState } from "react";
import { useColors } from "../../../context/ColorContext";
import styled from "styled-components";

import PeopleIcon from "assets/icons/people-outline.svg";
import XIcon from "assets/icons/x-mark.svg";
import MinusIcon from "assets/icons/minus.svg";
import PlusIcon from "assets/icons/plus.svg";

const PersonsOption = () => {
  const colors = useColors();

  const [rooms, setRooms] = useState([{ adults: 2, children: 0 }]);
  const [showPersonsOption, setShowPersonsOption] = useState(false);

  useEffect(() => {
    if (showPersonsOption) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showPersonsOption]);

  const handleChangeNumber = (roomIndex, type, opt) => {
    setRooms((prevRooms) => {
      const newRooms = [...prevRooms];
      const currentValue = newRooms[roomIndex][type];

      if (opt === "minus" && currentValue > 0) {
        newRooms[roomIndex][type] = currentValue - 1;
      } else if (opt === "plus") {
        newRooms[roomIndex][type] = currentValue + 1;
      }

      // console.log("Updated Rooms:", newRooms); // 호출 횟수 확인용

      return newRooms;
    });
  };

  const handleAddRoom = () => {
    setRooms((prevRooms) => [...prevRooms, { adults: 2, children: 0 }]);
  };

  const handleRemoveRoom = (roomIndex) => {
    setRooms((prevRooms) =>
      prevRooms.filter((_, index) => index !== roomIndex)
    );
  };

  return (
    <OptionWrapper>
      <PersonsInput
        color={colors.main}
        onClick={() => setShowPersonsOption((prev) => !prev)}
      >
        <InputIcon>
          <img src={PeopleIcon} alt="people-icon" />
        </InputIcon>
        {rooms.reduce((acc, room) => acc + room.adults, 0)} Adults,{" "}
        {rooms.reduce((acc, room) => acc + room.children, 0)} Children
      </PersonsInput>

      {showPersonsOption && (
        <OptionsModal>
          <TitleContainer>
            <Title>Number of People</Title>
            <CloseBtn>
              <img
                src={XIcon}
                alt="x-icon"
                onClick={() => setShowPersonsOption(false)}
              />
            </CloseBtn>
          </TitleContainer>
          <Options>
            <AddRoomBtn color={colors.main} onClick={handleAddRoom}>
              Add Room
            </AddRoomBtn>
            <InnerWrapper>
              {rooms.map((room, index) => (
                <RoomContainer key={index}>
                  <RoomName>Room {index + 1}</RoomName>
                  <NumberOption
                    label="Adult"
                    count={room.adults}
                    onChange={(opt) => handleChangeNumber(index, "adults", opt)}
                    colors={colors.main}
                  />
                  <NumberOption
                    label="Child"
                    count={room.children}
                    onChange={(opt) =>
                      handleChangeNumber(index, "children", opt)
                    }
                    colors={colors.main}
                  />
                  <DeleteRoomBtn onClick={() => handleRemoveRoom(index)}>
                    Remove Room {index + 1}
                  </DeleteRoomBtn>
                </RoomContainer>
              ))}
            </InnerWrapper>
          </Options>
        </OptionsModal>
      )}
    </OptionWrapper>
  );
};

const NumberOption = ({ label, count, onChange, colors }) => {
  return (
    <OptionBox>
      <OptionName>{label}</OptionName>
      <NumberBox>
        <NumberBtn color={colors} onClick={() => onChange("minus")}>
          <img src={MinusIcon} alt="minus-icon" />
        </NumberBtn>
        <Number>{count}</Number>
        <NumberBtn color={colors} onClick={() => onChange("plus")}>
          <img src={PlusIcon} alt="plus-icon" />
        </NumberBtn>
      </NumberBox>
    </OptionBox>
  );
};

export default PersonsOption;

const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const InputIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 0.75rem;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;

  img {
    width: 100%;
    height: 100%;
  }
`;
const PersonsInput = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid #dfdfdf;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  padding-left: 2.5rem;
  color: #666;
  cursor: pointer;

  &:hover {
    border-color: ${(props) => props.color};
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.color};
  }
`;

const OptionsModal = styled.div`
  width: 100%;
  height: 50vh;
  padding-bottom: 2rem;
  border: 1px solid #dfdfdf;
  border-radius: 0.5rem;
  background-color: #fff;
  color: #333;
  position: absolute;
  z-index: 99;
  top: 60px;
`;

const TitleContainer = styled.div`
  padding: 0.75rem 0;
  text-align: center;
  border-bottom: 1px solid #dfdfdf;
  position: relative;
`;
const Title = styled.h5``;
const CloseBtn = styled.button`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;

const Options = styled.div`
  height: 100%;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const AddRoomBtn = styled.button`
  color: ${(props) => props.color};
  margin-bottom: 1rem;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 1440px) {
    font-size: 0.7rem;
  }
`;

const InnerWrapper = styled.div`
  width: 100%;
  height: 85%;
  overflow-y: auto;
`;
const RoomContainer = styled.div`
  width: 100%;
  padding: 1rem;
  margin-bottom: 0.5rem;
  border: 1px solid #dfdfdf;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (max-width: 1440px) {
    padding: 0.5rem;
    gap: 0.5rem;
  }
`;
const RoomName = styled.h5``;
const OptionBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const OptionName = styled.p`
  @media screen and (max-width: 1440px) {
    font-size: 0.8rem;
  }
`;
const OptionSpan = styled.span``;

const NumberBox = styled.div`
  display: flex;
  align-items: center;
`;
const NumberBtn = styled.button`
  border: 2px solid #dfdfdf;
  padding: 2px;

  img {
    width: 16px;
    height: 16px;
  }

  &:hover {
    border-color: ${(props) => props.color};
  }
`;
const Number = styled.div`
  width: 50px;
  text-align: center;

  @media screen and (max-width: 1440px) {
    width: 40px;
    font-size: 0.8rem;
  }
`;

const DeleteRoomBtn = styled.button`
  color: #bd1212;
  font-size: 0.7rem;

  &:hover {
    text-decoration: underline;
  }
`;
