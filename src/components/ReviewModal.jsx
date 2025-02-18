import React, { useState } from "react";
import styled from "styled-components";
import { useColors } from "context/ColorContext";
import CustomInput from "./custom/CustomInput";
import CustomButton from "./custom/CustomButton";

import XIcon from "assets/icons/x-mark.svg";
import StarIcon from "assets/icons/star.svg";
import StarFillIcon from "assets/icons/star-fill.svg";

const ReviewModal = ({ setShowReviewModal }) => {
  const colors = useColors();
  const [rating, setRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  const handleClickCreate = () => {
    alert("Your review has been registered.");
    setShowReviewModal(false);
  };

  return (
    <Wrapper onClick={() => setShowReviewModal(false)}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <CloseBtn onClick={() => setShowReviewModal(false)}>
          <img src={XIcon} alt="x-icon" />
        </CloseBtn>

        <Title>Create review</Title>

        <InputContainer>
          <StarBox>
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                src={rating > index ? StarFillIcon : StarIcon}
                alt="star"
                onClick={() => handleStarClick(index)}
              />
            ))}
          </StarBox>
          <InputBox>
            <Label>Hotel Name</Label>
            <CustomInput placeholder={"Hotel Name"} />
          </InputBox>
          <InputBox>
            <Label>ID</Label>
            <CustomInput placeholder={"ID"} />
          </InputBox>
          <InputBox>
            <Label>Content</Label>
            <TextInput
              typeof="text"
              placeholder="Please write a review."
              color={colors.sub}
            />
          </InputBox>
        </InputContainer>

        <CreateBtn>
          <CustomButton onClick={handleClickCreate}>Create</CustomButton>
        </CreateBtn>
      </Modal>
    </Wrapper>
  );
};

export default ReviewModal;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  width: 40%;
  padding: 2rem;
  background-color: #fff;
  border-radius: 0.5rem;
  position: relative;
`;
const CloseBtn = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  opacity: 0.7;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const Title = styled.h3`
  margin-bottom: 2rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StarBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const Star = styled.img`
  width: 48px;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;
const Label = styled.label`
  font-size: 1rem;
`;
const TextInput = styled.textarea`
  height: 200px;
  padding: 0.75rem;
  border: 1px solid ${(props) => props.color};
  border-radius: 0.5rem;
  font-size: 1rem;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${(props) => props.color};
  }
`;

const CreateBtn = styled.div`
  width: 100%;
  margin-top: 2rem;
`;
