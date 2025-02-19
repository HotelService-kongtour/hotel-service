import React from "react";
import styled from "styled-components";
import AreaOption from "./optionDetail/AreaOption";
import DateOption from "./optionDetail/DateOption";
import CustomButton from "components/custom/CustomButton";

const SearchOptions = ({ selectedArea }) => {
  const handleClickCompleteBtn = () => {};

  return (
    <OptionsContainer>
      <Options>
        <AreaOption selectedArea={selectedArea} />
        <DateOption />
      </Options>

      <BtnWrapper onClick={handleClickCompleteBtn}>
        <CustomButton>Complete</CustomButton>
      </BtnWrapper>
    </OptionsContainer>
  );
};

export default SearchOptions;

const OptionsContainer = styled.div`
  width: 28%;
  height: 100%;
  padding: 0.5rem 1.5rem 0 0;
  border-right: 1px solid #ccc;
  position: relative;
`;

const Options = styled.div`
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
