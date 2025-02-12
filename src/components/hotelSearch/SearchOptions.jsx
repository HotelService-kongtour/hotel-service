import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import AreaOption from "./optionDetail/AreaOption";
import DateOption from "./optionDetail/DateOption";
import PersonsOption from "../hotelDetail/PersonsOption";
import CustomButton from "components/custom/CustomButton";
import useSearchOptionsStore from "store/useSearchOptionsStore";

const SearchOptions = () => {
  const optionsRef = useRef(null);

  const { setShowPlaceOptions, setShowDateOptions, setShowPersonsOption } =
    useSearchOptionsStore();

  const handleClickCompleteBtn = () => {
    setShowPlaceOptions(false);
    setShowDateOptions(false);
    setShowPersonsOption(false);
  };

  const handleClickOutside = (event) => {
    if (optionsRef.current && !optionsRef.current.contains(event.target)) {
      setShowPlaceOptions(false);
      setShowDateOptions(false);
      setShowPersonsOption(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Options>
      <OptionsContainer ref={optionsRef}>
        <AreaOption />
        <DateOption />
        {/* <PersonsOption /> */}
      </OptionsContainer>

      <BtnWrapper onClick={handleClickCompleteBtn}>
        <CustomButton>Complete</CustomButton>
      </BtnWrapper>
    </Options>
  );
};

export default SearchOptions;

const Options = styled.div`
  width: 28%;
  height: 100%;
  padding: 0.5rem 1.5rem 0 0;
  border-right: 1px solid #ccc;
  position: relative;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BtnWrapper = styled.div`
  width: calc(100% - 1.5rem);
  position: absolute;
  bottom: 2rem;

  @media screen and (max-width: 1440px) {
    bottom: 1rem;
  }
`;
