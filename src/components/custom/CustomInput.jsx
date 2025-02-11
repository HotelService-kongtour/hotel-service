import React, { useState } from "react";
import styled from "styled-components";
import { useColors } from "../../context/ColorContext";
import { isValidEmail, isValidPassword, isValidPhone } from "utils/validation";

const CustomInput = ({
  placeholder,
  labelText,
  type = "text",
  disabled = false,
  onChange,
  value,
  width,
  imageSrc,
  validateType,
  serverError,
  onIconClick,
  isVisible,
}) => {
  const colors = useColors();
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    onChange(value);

    // 이메일 유효성 검사
    if (validateType === "email") {
      if (!value) {
        setError("Please enter your email");
      } else if (!isValidEmail(value)) {
        setError("Please enter a valid email address");
      } else if (serverError && serverError === "email_not_registered") {
        setError("This email is not registered");
      } else {
        setError("");
      }
    }
    // 비밀번호 유효성 검사
    else if (validateType === "password") {
      if (!value) {
        setError("Please enter your password");
      } else if (!isValidPassword(value)) {
        setError(
          "Passwords must contain 8-20 characters, letters, numbers, and special characters"
        );
      } else if (serverError && serverError === "incorrect_password") {
        setError("Email or password is incorrect");
      } else {
        setError("");
      }
    }
  };

  return (
    <InputWrapper>
      <InputBox>
        <Label>{labelText}</Label>
        <Input
          color={colors.sub}
          type={type}
          placeholder={placeholder}
          $phcolor={colors.sub}
          width={width}
          disabled={disabled}
          value={value}
          onChange={handleChange}
          required
        />
        {imageSrc && (
          <IconWrapper
            onClick={onIconClick}
            style={{ opacity: isVisible ? "1" : "0.5" }}
          >
            <Icon src={imageSrc} alt="input-icon" />
          </IconWrapper>
        )}
      </InputBox>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  );
};

export default CustomInput;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Label = styled.label`
  display: inline-block;
  font-size: 0.9rem;
  color: #333;
  margin-bottom: 4px;
`;

const Input = styled.input`
  width: ${(props) => (props.width ? props.width : "100%")};
  padding: 0.75rem;
  margin: 0;
  margin-top: 0.25rem;
  border: 1.5px solid ${(props) => props.color};
  border-radius: 0.5rem;
  background-color: #fff;
  color: #333;
  font-size: 1.2rem;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${(props) => props.$phcolor};
    font-size: 1rem;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  cursor: pointer;
`;
const Icon = styled.img``;

const ErrorMessage = styled.div`
  margin-top: 0.5rem;
  color: red;
  font-size: 0.9rem;
`;
