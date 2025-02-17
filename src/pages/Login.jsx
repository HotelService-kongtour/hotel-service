import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import CustomInput from "components/custom/CustomInput";
import CustomButton from "components/custom/CustomButton";
import { useColors } from "context/ColorContext";
import { loginApi } from "api";

import XIcon from "assets/icons/x-mark.svg";
import Logo from "assets/logo/logo.svg";
import LogoName from "assets/logo/logo_name.svg";
import AppleLogo from "assets/logo/logo-Apple.svg";
import GoogleLogo from "assets/logo/logo-Google.svg";

const Login = () => {
  const colors = useColors();
  const navigate = useNavigate();

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [autoLogin, setAutoLogin] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   // 유효성 검사
  //   if (emailError || passwordError) {
  //     console.log("유효성 검사 오류:", { emailError, passwordError });
  //     return;
  //   }

  //   try {
  //     // 로그인 API 호출
  //     const response = await loginApi(emailValue, passwordValue, autoLogin);
  //     console.log("로그인 응답:", response);

  //     // 헤더에서 Authorization 토큰을 추출
  //     const token =
  //       response.headers?.authorization || response.headers?.Authorization;

  //     // 토큰이 존재하면 로컬 스토리지에 저장
  //     if (token) {
  //       localStorage.setItem("accessToken", token);
  //       console.log("로그인 성공, 토큰:", token);
  //       navigate("/", { replace: true }); // 로그인 성공 후 홈으로 이동
  //     } else {
  //       console.log("로그인 실패: 헤더에서 토큰을 받지 못했습니다.");
  //     }
  //   } catch (error) {
  //     console.error("로그인 오류 상세정보:", error);
  //   }
  // };

  const handleLogin = async (e) => {
    e.preventDefault();

    // 유효성 검사
    if (emailError || passwordError) {
      console.log("유효성 검사 오류:", { emailError, passwordError });
      return;
    }

    try {
      const response = await fetch("http://210.178.0.131/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailValue,
          password: passwordValue,
          autoLogin,
        }),
      });

      // 응답 상태가 200인 경우
      if (response.ok) {
        const token =
          response.headers?.get("Authorization") ||
          response.headers?.get("authorization");

        // 토큰이 존재하면 로컬 스토리지에 저장
        if (token) {
          localStorage.setItem("accessToken", token);
          console.log("로그인 성공, 토큰:", token);
          navigate("/", { replace: true });
        } else {
          console.log("로그인 실패: 헤더에서 토큰을 받지 못했습니다.");
        }
      } else {
        console.log("로그인 실패:", response.statusText);
      }
    } catch (error) {
      console.error("로그인 오류 상세정보:", error);
    }
  };

  return (
    <Wrapper>
      <LoginWrapper>
        <NavTitle>
          Login
          <Link to="/">
            <img src={XIcon} alt="x-icon" />
          </Link>
        </NavTitle>
        <Container>
          <LogoContainer>
            <Link to="/">
              <LogoBox>
                <img src={Logo} alt="logo" />
                <img src={LogoName} alt="logo-name" />
              </LogoBox>
            </Link>
            <Script>
              Find the perfect space for your cherished moments with Kong tour
            </Script>
          </LogoContainer>
          <LoginForm onSubmit={handleLogin}>
            <CustomInput
              labelText={"Email"}
              placeholder={"Email"}
              type={"email"}
              onChange={setEmailValue}
              validateType={"email"}
              onError={setEmailError}
            />
            <CustomInput
              labelText={"Password"}
              placeholder={"Password"}
              type={"password"}
              onChange={setPasswordValue}
              validateType={"password"}
              onError={setPasswordError}
            />

            <CheckboxContainer>
              <CheckboxLabel>
                <Checkbox
                  type="checkbox"
                  checked={autoLogin}
                  onChange={() => setAutoLogin(!autoLogin)}
                />
                Auto Login
              </CheckboxLabel>
              <Link to="/find-password">
                <PasswordLink>Forgot Password?</PasswordLink>
              </Link>
            </CheckboxContainer>

            <CustomButton
              type="submit"
              fontWeight={"600"}
              disabled={emailError || passwordError}
            >
              Login
            </CustomButton>
            <Link to="/sign-up">
              <CustomButton
                bgColor={"#fff"}
                textColor={"#333"}
                borderColor={"#ccc"}
                fontWeight={"600"}
              >
                Sign up
              </CustomButton>
            </Link>
          </LoginForm>

          <OauthContainer>
            <OauthText>Other ways to sign in</OauthText>
            <CustomButton
              bgColor={"#fff"}
              textColor={"#666"}
              padding={"0.5rem"}
              fontSize={"0.9rem"}
              imageSrc={GoogleLogo}
              shadow={"0px 2px 5px rgba(0, 0, 0, 0.2)"}
            >
              Sign in with Goolgle
            </CustomButton>
            <CustomButton
              bgColor={"#000"}
              textColor={"#fff"}
              padding={"0.5rem"}
              fontSize={"0.9rem"}
              imageSrc={AppleLogo}
            >
              Sign in with Apple
            </CustomButton>
            <PolicyText color={colors.sub}>
              By continueting, you agree to Kong tour Terms of use, read use
              Privacy Policy.
            </PolicyText>
          </OauthContainer>
        </Container>
      </LoginWrapper>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoginWrapper = styled.div`
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

const LogoContainer = styled.div`
  width: 60%;
  margin: auto;
  margin-bottom: 2rem;
`;
const LogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;
const Script = styled.p`
  font-size: 0.9rem;
  text-align: center;
  line-height: 1.8;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Checkbox = styled.input``;
const CheckboxLabel = styled.label`
  font-size: 0.8rem;
  color: #666;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  cursor: pointer;
`;
const PasswordLink = styled.span`
  font-size: 0.8rem;
  color: #666;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const OauthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`;
const OauthText = styled.p`
  font-size: 0.8rem;
`;
const PolicyText = styled.p`
  width: 80%;
  text-align: center;
  font-size: 0.9rem;
  line-height: 1.8;
  color: ${(props) => props.color};
`;
