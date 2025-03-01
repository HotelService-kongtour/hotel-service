import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useColors } from "../../../context/ColorContext";
import { useLocation, useNavigate } from "react-router-dom";

import GlobeIcon from "assets/icons/globe-outline.svg";
import MapIcon from "assets/icons/map-outline.svg";
import XIcon from "assets/icons/x-mark.svg";

const locationList = [
  { area: "Seoul", nation: "Korea" },
  { area: "Busan", nation: "Korea" },
  { area: "Jeju", nation: "Korea" },
  { area: "Incheon", nation: "Korea" },
  { area: "Gangneung", nation: "Korea" },
  { area: "Daejeon", nation: "Korea" },
  { area: "Gwangju", nation: "Korea" },
];

const AreaOption = ({ selectedArea }) => {
  const colors = useColors();
  const modalRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const [showPlaceOptions, setShowPlaceOptions] = useState(false);
  const [selected, setSelected] = useState(selectedArea);

  useEffect(() => {
    setSelected(selectedArea);
  }, [selectedArea]);

  useEffect(() => {
    if (showPlaceOptions) {
      document.body.style.overflow = "scroll";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showPlaceOptions]);

  const handleChangeArea = (area) => {
    setSelected(area);
    setShowPlaceOptions(false);

    const queryParams = new URLSearchParams(location.search);
    queryParams.set("area", area);

    navigate({
      pathname: "/hotel-search",
      search: queryParams.toString(),
    });
  };

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShowPlaceOptions(false);
    }
  };

  useEffect(() => {
    if (showPlaceOptions) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPlaceOptions]);

  return (
    <OptionWrapper ref={modalRef}>
      <InputIcon>
        <img src={GlobeIcon} alt="globe-icon" />
      </InputIcon>
      <PlaceInput color={colors.main} onClick={() => setShowPlaceOptions(true)}>
        {selected}
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

  @media screen and (max-width: 1280px) {
    left: 0.5rem;
    width: 20px;
    height: 20px;
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

  @media screen and (max-width: 1280px) {
    padding-left: 2rem;
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
  z-index: 999;
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

  @media screen and (max-width: 1440px) {
    img {
      width: 20px;
    }
  }
`;

const Options = styled.ul`
  padding: 0.5rem 1rem;
`;
const OptionText = styled.div``;
const TextArea = styled.p`
  font-size: 1.1rem;
  line-height: 1;

  @media screen and (max-width: 1440px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 1280px) {
    font-size: 0.9rem;
  }
`;
const TextNation = styled.span`
  font-size: 0.9rem;
  font-weight: 600;

  @media screen and (max-width: 1440px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 1280px) {
    font-size: 0.7rem;
  }
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

  @media screen and (max-width: 1280px) {
    padding: 0.5rem 0;

    img {
      width: 20px;
    }
  }
`;
