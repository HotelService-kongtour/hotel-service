import axiosInstance from "axiosInstance";

// 회원가입 API
export const signupApi = async (
  email,
  password,
  firstName,
  lastName,
  companyName
) => {
  return await axiosInstance.post("/api/auth/signup", {
    email,
    password,
    firstName,
    lastName,
    companyName,
    loginType: "EMAIL",
  });
};

// 이메일인증 API
export const verifyEmailApi = async (email, code) => {
  return await axiosInstance.post("/api/auth/verify-email", {
    email,
    code,
    verificationType: "SIGNUP",
  });
};

// 이메일인증코드요청 API

// 로그인 API
export const loginApi = async (email, password, autoLogin) => {
  return await axiosInstance.post("/api/auth/login", {
    email,
    password,
    autoLogin,
  });
};

// 비밀번호재설정 API
export const resetPasswordApi = async (email, code, password) => {
  return await axiosInstance.post("/api/auth/reset-password", {
    email,
    code,
    password,
  });
};
