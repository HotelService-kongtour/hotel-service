import React, { useState } from "react";
import styled from "styled-components";
import { useColors } from "../../context/ColorContext";

import SearchIcon from "../../assets/icons/search-glass.svg";

const CustomMainInput = () => {
  const colors = useColors();

  const [inputValue, setInputValue] = useState("");

  const handleSearchHotel = (e) => {
    e.preventDefault();

    console.log(inputValue);
    setInputValue("");
  };

  return (
    <InputWrapper onSubmit={handleSearchHotel}>
      <InputIcon>
        <img src={SearchIcon} alt="search-icon" />
      </InputIcon>
      <SearchInput
        type="text"
        placeholder={"Search for hotel name"}
        $borderColor={colors.main}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </InputWrapper>
  );
};

export default CustomMainInput;

const InputWrapper = styled.form`
  position: relative;
  width: 100%;
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
const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  padding-left: 2.5rem;
  margin: 0;
  margin-top: 0.25rem;
  border: 2px solid ${(props) => props.$borderColor};
  border-radius: 0.5rem;
  background-color: #fff;
  color: #333;
  font-size: 1.2rem;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #666;
    font-size: 1rem;
  }

  @media screen and (max-width: 1440) {
    font-size: 1rem;
    &::placeholder {
      font-size: 0.8rem;
    }
  }
`;
