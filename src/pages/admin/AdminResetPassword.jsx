import CustomButton from "components/custom/CustomButton";
import CustomInput from "components/custom/CustomInput";
import React, { useState } from "react";
import styled from "styled-components";

import EyeOffIcon from "assets/icons/eye-off-outline.svg";
import { useNavigate } from "react-router-dom";
import XIcon from "assets/icons/x-mark.svg";

const AdminResetPassword = () => {
  const navigate = useNavigate();

  const [passwordValue, setPasswordValue] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");

  const isPasswordMatch = passwordValue === confirmPasswordValue;

  const handleClickCreateBtn = () => {
    alert("비밀번호가 변경되었습니다.");
    navigate("/admin/login");
  };

  return (
    <Wrapper>
      <ResetWrapper>
        <TitleContainer>
          관리자 비밀번호 재설정
          <img
            src={XIcon}
            alt="x-icon"
            onClick={() => navigate("/admin/login")}
          />
        </TitleContainer>
        <PasswordForm>
          <PasswordBox>
            <CustomInput
              labelText={"비밀번호"}
              placeholder={"비밀번호를 입력해주세요."}
              type={isPasswordVisible ? "text" : "password"}
              onChange={setPasswordValue}
              validateType={"password"}
              imageSrc={EyeOffIcon}
              isVisible={isPasswordVisible}
              onIconClick={() => setIsPasswordVisible((prev) => !prev)}
              language={"ko"}
            />
            <p>8~16자의 문자, 숫자, 특수문자를 포함하여 입력하세요.</p>
          </PasswordBox>
          <div>
            <CustomInput
              labelText={"비밀번호 확인"}
              placeholder={"비밀번호를 입력해주세요."}
              type={isConfirmPasswordVisible ? "text" : "password"}
              onChange={setConfirmPasswordValue}
              imageSrc={EyeOffIcon}
              isVisible={isConfirmPasswordVisible}
              onIconClick={() => setIsConfirmPasswordVisible((prev) => !prev)}
            />
            {!isPasswordMatch && confirmPasswordValue && (
              <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
            )}
          </div>

          <BtnBox onClick={handleClickCreateBtn}>
            <CustomButton fontWeight={"600"}>비밀번호 변경</CustomButton>
          </BtnBox>
        </PasswordForm>
      </ResetWrapper>
    </Wrapper>
  );
};

export default AdminResetPassword;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ResetWrapper = styled.div`
  width: 25%;
  height: 80%;
  border: 2px solid #ececec;
  border-radius: 1rem;
  margin: auto;
  overflow: hidden;
  padding: 2rem;
`;

const TitleContainer = styled.div`
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;

  img {
    opacity: 0.7;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }
`;
const PasswordForm = styled.form`
  height: 90%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
`;

const PasswordBox = styled.div`
  p {
    padding-top: 0.5rem;
    font-size: 0.8rem;
    color: #666;
  }
`;
const ErrorMessage = styled.div`
  padding-top: 0.5rem;
  color: red;
  font-size: 0.9rem;
`;

const NameBox = styled.div`
  display: flex;
  gap: 1rem;
`;

const BtnBox = styled.div`
  width: 100%;
  position: absolute;
  bottom: 2rem;
  left: 0;
`;
