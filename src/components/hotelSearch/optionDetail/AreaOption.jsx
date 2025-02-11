import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useColors } from "../../../context/ColorContext";

import GlobeIcon from "assets/icons/globe-outline.svg";
import MapIcon from "assets/icons/map-outline.svg";
import XIcon from "assets/icons/x-mark.svg";

const locationList = [
  { area: "Seoul", nation: "Korea" },
  { area: "Busan", nation: "Korea" },
  { area: "Incheon", nation: "Korea" },
  { area: "Gangneung", nation: "Korea" },
  { area: "Daejeon", nation: "Korea" },
  { area: "Daegu", nation: "Korea" },
  { area: "Gyeongju", nation: "Korea" },
  { area: "Jeju", nation: "Korea" },
  { area: "Other", nation: "Korea" },
];

const AreaOption = () => {
  const colors = useColors();

  const [showPlaceOptions, setShowPlaceOptions] = useState(false);
  const [selectedArea, setSeletedArea] = useState("Seoul");

  useEffect(() => {
    if (showPlaceOptions) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showPlaceOptions]);

  const handleChangeArea = (area) => {
    setSeletedArea(area);
    setShowPlaceOptions(false);
  };

  return (
    <OptionWrapper>
      <InputIcon>
        <img src={GlobeIcon} alt="globe-icon" />
      </InputIcon>
      <PlaceInput
        color={colors.main}
        onClick={() => setShowPlaceOptions((prev) => !prev)}
      >
        {selectedArea}
      </PlaceInput>

      {showPlaceOptions && (
        <OptionsModal>
          <TitleContainer>
            <Title>Select City</Title>
            <CloseBtn>
              <img
                src={XIcon}
                alt="x-icon"
                onClick={() => setShowPlaceOptions(false)}
              />
            </CloseBtn>
          </TitleContainer>
          <Options>
            {locationList.map((location) => (
              <Option
                key={location.area}
                color={colors.main}
                onClick={() => handleChangeArea(`${location.area}`)}
              >
                <img src={MapIcon} alt="map-icon" />
                <OptionText>
                  <TextArea>{location.area}</TextArea>
                  <TextNation>{location.nation}</TextNation>
                </OptionText>
              </Option>
            ))}
          </Options>
        </OptionsModal>
      )}
    </OptionWrapper>
  );
};

export default AreaOption;

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
const PlaceInput = styled.div`
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
  overflow-y: auto;
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

const Options = styled.ul`
  padding: 0.5rem 1rem;
`;
const OptionText = styled.div``;
const TextArea = styled.p`
  font-size: 1.1rem;
  line-height: 1;
`;
const TextNation = styled.span`
  font-size: 0.9rem;
  font-weight: 700;
`;
const Option = styled.li`
  padding: 0.75rem 0;
  border-bottom: 1px solid #dfdfdf;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    ${TextArea} {
      color: ${(props) => props.color};
    }
    img {
      transform: translateY(-3px);
      transition: transform 0.2s;
    }
  }
`;
