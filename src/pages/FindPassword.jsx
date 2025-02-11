import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import CustomInput from "components/custom/CustomInput";
import CustomButton from "components/custom/CustomButton";
import EmailVerifymodal from "components/Login/EmailVerifymodal";

import XIcon from "assets/icons/x-mark.svg";

const FindPassword = () => {
  const navigate = useNavigate();

  const [emailValue, setEmailValue] = useState("");
  const [showEmailModal, setShowEmailModal] = useState(false);

  const handleClickContinue = () => {
    alert("Email authentication has been completed.");
    navigate("/reset-password");
  };

  return (
    <Wrapper>
      <FindWrapper>
        <NavTitle>
          Find Password
          <Link to="/login">
            <img src={XIcon} alt="x-icon" />
          </Link>
        </NavTitle>

        <Container>
          <FindForm>
            <EmailBox>
              <CustomInput
                labelText={"Email"}
                placeholder={"Email"}
                type={"email"}
                onChange={setEmailValue}
                validateType={"email"}
              />
              <p>Please enter the email you registered with during sign-up</p>
            </EmailBox>
            <CustomButton onClick={() => setShowEmailModal(true)}>
              Continue
            </CustomButton>
          </FindForm>
        </Container>
      </FindWrapper>

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

export default FindPassword;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FindWrapper = styled.div`
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
  padding: 2rem 1rem;
`;

const FindForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
const EmailBox = styled.div`
  p {
    font-size: 0.8rem;
    padding-top: 0.5rem;
  }
`;
