import React, { useState } from "react";
import styled from "styled-components";
import { useColors } from "../../context/ColorContext";
import { useLocation, useNavigate } from "react-router-dom";

import SearchIcon from "../../assets/icons/search-glass.svg";
import FilterOffIcon from "assets/icons/filter-off.svg";

const CustomMainInput = () => {
  const colors = useColors();
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const currentSearch = queryParams.get("search") || "";

  const [inputValue, setInputValue] = useState("");

  const handleSearchHotel = (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams(location.search);
    queryParams.set("search", inputValue);

    navigate({
      pathname: "/hotel-search",
      search: queryParams.toString(),
    });

    // setInputValue("");
  };

  const handleFilterOff = () => {
    const queryParams = new URLSearchParams(location.search);
    queryParams.delete("search");
    setInputValue("");

    navigate({
      pathname: "/hotel-search",
      search: queryParams.toString(),
    });
  };

  return (
    <Wrapper>
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

      {currentSearch && (
        <IconBox onClick={handleFilterOff}>
          <img src={FilterOffIcon} alt="filter-off-icon" />
          <p>filter off</p>
        </IconBox>
      )}
    </Wrapper>
  );
};

export default CustomMainInput;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
`;
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

const IconBox = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  cursor: pointer;
  opacity: 0.7;

  img {
    width: 24px;
  }

  &:hover {
    opacity: 1;
  }
`;
