import { useColors } from "context/ColorContext";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import CustomInput from "components/custom/CustomInput";
import CustomButton from "components/custom/CustomButton";

import LogoName from "assets/logo/logo_name.svg";

const AdminLogin = () => {
  const colors = useColors();
  const navigate = useNavigate();

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  return (
    <Wrapper>
      <LoginWrapper>
        <Container>
          <LogoContainer>
            <img src={LogoName} alt="logo-name" />
          </LogoContainer>
          <LoginForm>
            <CustomInput
              labelText={"이메일"}
              placeholder={"이메일을 입력해주세요."}
              type={"email"}
              onChange={setEmailValue}
              validateType={"email"}
              language={"ko"}
            />
            <CustomInput
              labelText={"패스워드"}
              placeholder={"패스워드를 입력해주세요."}
              type={"password"}
              onChange={setPasswordValue}
              validateType={"password"}
              language={"ko"}
            />

            <BtnBox onClick={() => navigate("/admin")}>
              <CustomButton fontWeight={"600"}>로그인</CustomButton>
            </BtnBox>
          </LoginForm>
          <LinkBox>
            <Link to="/admin/sign-up">
              <LinkText>회원가입</LinkText>
            </Link>
            <Link to="/admin/find-password">
              <LinkText>비밀번호를 찾으시겠습니까?</LinkText>
            </Link>
          </LinkBox>
        </Container>
      </LoginWrapper>
    </Wrapper>
  );
};

export default AdminLogin;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoginWrapper = styled.div`
  width: 25%;
  height: 60%;
  border: 2px solid #ececec;
  border-radius: 1rem;
  margin: auto;
  overflow: hidden;
`;

const Container = styled.div`
  padding: 2rem;
`;

const LogoContainer = styled.div`
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const BtnBox = styled.div`
  margin-top: 2rem;
`;

const LinkBox = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;
const LinkText = styled.div`
  font-size: 0.9rem;
  color: #666;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
