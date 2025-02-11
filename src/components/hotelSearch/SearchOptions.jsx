import React from "react";
import styled from "styled-components";
import AreaOption from "./optionDetail/AreaOption";
import DateOption from "./optionDetail/DateOption";
import PersonsOption from "./optionDetail/PersonsOption";
import CustomButton from "components/custom/CustomButton";

const SearchOptions = () => {
  return (
    <Options>
      <AreaOption />
      <DateOption />
      <PersonsOption />
      <BtnWrapper>
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
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
`;
const BtnWrapper = styled.div`
  width: calc(100% - 1.5rem);
  position: absolute;
  bottom: 2rem;

  @media screen and (max-width: 1440px) {
    bottom: 1rem;
  }
`;
