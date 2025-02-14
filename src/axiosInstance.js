import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;

// 회원가입 API
export const signupApi = async (
  email,
  password,
  firstName,
  lastName,
  companyName
) => {
  return await axiosInstance.post("/auth/signup", {
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
  return await axiosInstance.post("/auth/verify-email", {
    email,
    code,
    verificationType: "SIGNUP",
  });
};

// 이메일인증코드요청 API

// 로그인 API
export const loginApi = async (email, password) => {
  return await axiosInstance.post("/auth/login", {
    email,
    password,
    autoLogin: true,
  });
};

// 비밀번호재설정 API
export const resetPasswordApi = async (email, code, password) => {
  return await axiosInstance.post("/auth/reset-password", {
    email,
    code,
    password,
  });
};
