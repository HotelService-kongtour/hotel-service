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
import axios from "axios";

const Login = () => {
  const colors = useColors();
  const navigate = useNavigate();

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [autoLogin, setAutoLogin] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (emailError || passwordError) {
      console.log("유효성 검사 오류:", { emailError, passwordError });
      return;
    }

    try {
      const response = await axios.post(
        "http://210.178.0.131/api/auth/login",
        {
          email: emailValue,
          password: passwordValue,
          autoLogin,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      console.log("로그인 응답:", response.data);

      const { accessToken, refreshToken, ...userInfo } = response.data.data;

      if (accessToken) {
        // Access Token 저장
        localStorage.setItem("accessToken", `Bearer ${accessToken}`);
        console.log("Access Token 저장 완료");

        // Refresh Token 저장 (자동 로그인 선택 시)
        if (autoLogin && refreshToken) {
          localStorage.setItem("refreshToken", refreshToken);
          console.log("Refresh Token 저장 완료");
        }

        // 사용자 정보 저장 (토큰 제외)
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        console.log("사용자 정보 저장됨:", userInfo);

        console.log("로그인 성공:", response.data.message);
        navigate("/", { replace: true });
      } else {
        console.error("Access Token이 응답에 없습니다");
      }
    } catch (error) {
      console.error("로그인 실패:", {
        에러메시지: error.response?.data || error.message,
        상태코드: error.response?.status,
      });
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
