import React, { useState } from "react";
import styled from "styled-components";

import XIcon from "assets/icons/x-mark.svg";
import EmailVerifymodal from "components/Login/EmailVerifymodal";
import { useNavigate } from "react-router-dom";
import CustomInput from "components/custom/CustomInput";
import CustomButton from "components/custom/CustomButton";

const AdminFindPassword = () => {
  const navigate = useNavigate();

  const [emailValue, setEmailValue] = useState("");

  const [showEmailModal, setShowEmailModal] = useState(false);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  const handleClickContinue = () => {
    alert("이메일 인증이 완료되었습니다.");
    setShowEmailModal(false);
    setIsBtnDisabled(true);
    navigate("/admin/reset-password");
  };

  return (
    <Wrapper>
      <FindWrapper>
        <TitleContainer>
          관리자 비밀번호 찾기
          <img
            src={XIcon}
            alt="x-icon"
            onClick={() => navigate("/admin/login")}
          />
        </TitleContainer>
        <EmailForm>
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
        </EmailForm>
      </FindWrapper>

      {/* 이메일인증 */}
      {showEmailModal && (
        <EmailVerifymodal
          setShowEmailModal={setShowEmailModal}
          language="ko"
          onContinueClick={handleClickContinue}
        />
      )}
    </Wrapper>
  );
};

export default AdminFindPassword;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FindWrapper = styled.div`
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

const EmailForm = styled.form`
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
