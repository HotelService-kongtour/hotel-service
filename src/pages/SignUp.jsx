import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import CustomInput from "components/custom/CustomInput";
import CustomButton from "components/custom/CustomButton";
import EmailVerifymodal from "components/Login/EmailVerifymodal";

import Logo from "assets/logo/logo-H.svg";
import LogoName from "assets/logo/logo-Hantour.svg";
import EyeOffIcon from "assets/icons/eye-off-outline.svg";
import XIcon from "assets/icons/x-mark.svg";

const SignUp = () => {
  const navigate = useNavigate();

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const [showEmailModal, setShowEmailModal] = useState(false);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  const isPasswordMatch = passwordValue === confirmPasswordValue;

  const handleClickXIcon = () => {
    const isLeaving = window.confirm(
      "Your changes will not be saved. Do you really want to leave?"
    );

    if (isLeaving) {
      navigate("/login");
    }
  };

  const handleClickContinue = () => {
    alert("Email authentication has been completed.");
    setShowEmailModal(false);
    setIsBtnDisabled(true);
  };

  const handleClickCreateBtn = () => {
    alert("Congratulations on your membership!");
    navigate("/login");
  };

  return (
    <Wrapper>
      <SignupWrapper>
        <NavTitle>
          Sign up
          <img src={XIcon} alt="x-icon" onClick={handleClickXIcon} />
        </NavTitle>

        <Container>
          <LogoContainer>
            <Link to="/">
              <LogoBox>
                <img src={Logo} alt="logo" />
                <img src={LogoName} alt="logo-name" />
              </LogoBox>
            </Link>
            {/* <Script>
              Find the perfect space for your cherished moments with Kong tour
            </Script> */}
          </LogoContainer>

          <SignupForm>
            <FormInner>
              <EmailBox>
                <CustomInput
                  width={"82%"}
                  labelText={"Email"}
                  placeholder={"Email"}
                  type={"email"}
                  onChange={setEmailValue}
                  validateType={"email"}
                />
                <VerifyBtn onClick={() => setShowEmailModal(true)}>
                  <CustomButton
                    fontSize={"0.9rem"}
                    fontWeight={"500"}
                    disabled={isBtnDisabled}
                  >
                    Verify
                  </CustomButton>
                </VerifyBtn>
              </EmailBox>
              <PasswordBox>
                <CustomInput
                  labelText={"Password"}
                  placeholder={"Password"}
                  type={isPasswordVisible ? "text" : "password"}
                  onChange={setPasswordValue}
                  validateType={"password"}
                  // imageSrc={EyeOffIcon}
                  isVisible={isPasswordVisible}
                  onIconClick={() => setIsPasswordVisible((prev) => !prev)}
                />
                <p>
                  Please use 8 to 16 characters, including letters, numbers, and
                  special characters.
                </p>
              </PasswordBox>
              <div>
                <CustomInput
                  labelText={"Verify Password"}
                  placeholder={"Verify Password"}
                  type={isConfirmPasswordVisible ? "text" : "password"}
                  onChange={setConfirmPasswordValue}
                  // imageSrc={EyeOffIcon}
                  isVisible={isConfirmPasswordVisible}
                  onIconClick={() =>
                    setIsConfirmPasswordVisible((prev) => !prev)
                  }
                />
                {!isPasswordMatch && confirmPasswordValue && (
                  <ErrorMessage>Passwords do not match</ErrorMessage>
                )}
              </div>

              <NameBox>
                <CustomInput
                  labelText={"First Name"}
                  placeholder={"First Name"}
                />
                <CustomInput
                  labelText={"Last Name"}
                  placeholder={"Last Name"}
                />
              </NameBox>
              <CustomInput
                labelText={"Company Name"}
                placeholder={"Company Name"}
              />
            </FormInner>
            <BtnBox onClick={handleClickCreateBtn}>
              <CustomButton>Create Account</CustomButton>
            </BtnBox>
          </SignupForm>
        </Container>
      </SignupWrapper>

      {/* 이메일 인증모달창 */}
      {showEmailModal && (
        <EmailVerifymodal
          setShowEmailModal={setShowEmailModal}
          onContinueClick={handleClickContinue}
        />
      )}
    </Wrapper>
  );
};

export default SignUp;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const SignupWrapper = styled.div`
  width: 30%;
  height: 95%;
  border: 2px solid #ececec;
  border-radius: 1rem;
  margin: auto;
  overflow: hidden;
`;
const NavTitle = styled.div`
  height: 8%;
  padding: 0 1rem;
  background-color: #ececec;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  img {
    cursor: pointer;
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }
  }
`;

const Container = styled.div`
  padding: 2rem 1rem 1rem 1rem;
  width: 100%;
  height: 92%;
`;

const LogoContainer = styled.div`
  width: 60%;
  margin: auto;
  margin-bottom: 2rem;

  @media screen and (max-width: 1440px) {
    margin-bottom: 1rem;
  }
`;
const LogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
const Script = styled.p`
  font-size: 0.9rem;
  text-align: center;
  line-height: 1.8;
`;

const SignupForm = styled.form`
  height: 85%;
  position: relative;
`;

const FormInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (max-width: 1440px) {
    gap: 0.5rem;
  }
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
  top: 24px;
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
  bottom: 0;
  left: 0;

  @media screen and (max-width: 1440px) {
    bottom: -2rem;
  }
`;
