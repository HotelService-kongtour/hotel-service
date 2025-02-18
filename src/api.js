import axiosInstance from "axiosInstance";

// import axios from "axios";

// const axiosInstance = axios.create({
//   // baseURL: process.env.REACT_APP_API_BASE_URL,
//   baseURL: "http://210.178.0.131",
//   withCredentials: true,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("accessToken");
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// 로그인 API
// export const loginApi = async (email, password, autoLogin) => {
//   return await axiosInstance.post("/api/auth/login", {
//     email,
//     password,
//     autoLogin,
//   });
// };
export const loginApi = async (email, password, autoLogin) => {
  try {
    const response = await axiosInstance.post("/api/auth/login", {
      email,
      password,
      autoLogin,
    });

    const { accessToken, refreshToken, ...userInfo } = response.data.data;

    // 토큰 저장
    if (accessToken) {
      localStorage.setItem("accessToken", `Bearer ${accessToken}`);
      if (autoLogin && refreshToken) {
        localStorage.setItem("refreshToken", refreshToken);
      }
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    }

    return response.data;
  } catch (error) {
    console.error("API 에러:", error);
    throw error;
  }
};

// 회원가입 API
// export const signupApi = async (
//   email,
//   password,
//   firstName,
//   lastName,
//   companyName
// ) => {
//   return await axiosInstance.post("/api/auth/signup", {
//     email,
//     password,
//     firstName,
//     lastName,
//     companyName,
//     loginType: "EMAIL",
//   });
// };

// 이메일인증 API
// export const verifyEmailApi = async (email, code) => {
//   return await axiosInstance.post("/api/auth/verify-email", {
//     email,
//     code,
//     verificationType: "SIGNUP",
//   });
// };

// 이메일인증코드요청 API

// export const loginApi = async (email, password, autoLogin) => {
//   try {
//     const response = await fetch("http://210.178.0.131/api/auth/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         // Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({
//         email,
//         password,
//         autoLogin,
//       }),
//     });

//     if (!response.ok) {
//       throw new Error(`Error: ${response.statusText}`);
//     }

//     const authorizationHeader = response.headers.get("Authorization");

//     // 만약 Authorization 헤더가 존재하면
//     if (authorizationHeader) {
//       console.log("Authorization Header:", authorizationHeader);
//       // 토큰을 로컬 스토리지 등에 저장할 수 있음
//       localStorage.setItem("accessToken", authorizationHeader);
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("로그인 요청 오류:", error);
//     throw error;
//   }
// };

// 비밀번호재설정 API
// export const resetPasswordApi = async (email, code, password) => {
//   return await axiosInstance.post("/api/auth/reset-password", {
//     email,
//     code,
//     password,
//   });
// };
