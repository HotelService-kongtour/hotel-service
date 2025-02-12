import React, { useState } from "react";
import styled from "styled-components";
import useSearchOptionsStore from "store/useSearchOptionsStore";
import { useColors } from "context/ColorContext";

import PeopleIcon from "assets/icons/people-outline.svg";
import XIcon from "assets/icons/x-mark.svg";
import MinusIcon from "assets/icons/minus.svg";
import PlusIcon from "assets/icons/plus.svg";

const PersonsOption = () => {
  const colors = useColors();

  const { showPersonsOption, setShowPersonsOption } = useSearchOptionsStore();
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const handleChangeNumber = (type, opt) => {
    if (type === "adults") {
      setAdults((prev) =>
        opt === "minus" && prev > 0
          ? prev - 1
          : opt === "plus"
          ? prev + 1
          : prev
      );
    } else if (type === "children") {
      setChildren((prev) =>
        opt === "minus" && prev > 0
          ? prev - 1
          : opt === "plus"
          ? prev + 1
          : prev
      );
    }
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
        {adults} Adults, {children} Children
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
            <NumberOption
              label="Adult"
              count={adults}
              onChange={(opt) => handleChangeNumber("adults", opt)}
              colors={colors.main}
            />
            <NumberOption
              label="Child"
              count={children}
              onChange={(opt) => handleChangeNumber("children", opt)}
              colors={colors.main}
            />
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
  width: 100%;
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
  border: 2px solid #ececec;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  padding-left: 2.5rem;
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
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
`;

const OptionBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const OptionName = styled.div``;

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
