import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import CustomInput from "components/custom/CustomInput";
import CustomButton from "components/custom/CustomButton";

import XIcon from "assets/icons/x-mark.svg";
import EyeOffIcon from "assets/icons/eye-off-outline.svg";
import EmailVerifymodal from "components/Login/EmailVerifymodal";

const AdminSignUp = () => {
  const navigate = useNavigate();

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [nameValue, setNameValue] = useState("");

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const [showEmailModal, setShowEmailModal] = useState(false);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  const isPasswordMatch = passwordValue === confirmPasswordValue;

  const handleClickContinue = () => {
    alert("이메일 인증이 완료되었습니다.");
    setShowEmailModal(false);
    setIsBtnDisabled(true);
  };

  const handleClickCreateBtn = () => {
    alert("회원가입을 축하드립니다!");
    navigate("/admin/login");
  };

  return (
    <Wrapper>
      <SignupWrapper>
        <TitleContainer>
          관리자 회원가입
          <img
            src={XIcon}
            alt="x-icon"
            onClick={() => navigate("/admin/login")}
          />
        </TitleContainer>
        <LoginForm>
          <EmailBox>
            <CustomInput
              width={"82%"}
              labelText={"이메일"}
              placeholder={"이메일"}
              type={"email"}
              onChange={setEmailValue}
              validateType={"email"}
              language={"ko"}
            />
            <VerifyBtn onClick={() => setShowEmailModal(true)}>
              <CustomButton
                padding={"0.8rem 0.5rem"}
                fontSize={"0.9rem"}
                fontWeight={"500"}
                disabled={isBtnDisabled}
              >
                인증
              </CustomButton>
            </VerifyBtn>
          </EmailBox>

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

          <NameBox>
            <CustomInput
              labelText={"이름"}
              placeholder={"성함을 입력해주세요."}
              type="text"
              onChange={setNameValue}
            />
          </NameBox>

          <BtnBox onClick={handleClickCreateBtn}>
            <CustomButton fontWeight={"600"}>회원가입</CustomButton>
          </BtnBox>
        </LoginForm>
      </SignupWrapper>

      {/* 이메일인증 */}
      {showEmailModal && (
        <EmailVerifymodal language="ko" onContinueClick={handleClickContinue} />
      )}
    </Wrapper>
  );
};

export default AdminSignUp;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SignupWrapper = styled.div`
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

const LoginForm = styled.form`
  height: 90%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
`;

const EmailBox = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: relative;
`;
const VerifyBtn = styled.div`
  width: 15%;
  position: absolute;
  right: 0;
  top: 28px;
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
