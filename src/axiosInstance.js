// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: process.env.REACT_APP_API_BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export default axiosInstance;

// // 로그인 API
// export const loginApi = async (email, password) => {
//   return await axiosInstance.post("/api/auth/login", {
//     email,
//     password,
//   });
// };

// 요청 인터셉터 (선택 사항: 요청 전에 공통적으로 처리할 로직 추가)
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // 예: 인증 토큰을 헤더에 추가
//     const token = localStorage.getItem("token"); // 예시로 로컬스토리지에서 토큰 가져오기
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// 응답 인터셉터 (선택 사항: 응답을 공통적으로 처리할 로직 추가)
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     // 예: 오류 처리
//     if (error.response && error.response.status === 401) {
//       // 인증 오류 처리
//       console.error("Unauthorized! Please log in again.");
//     }
//     return Promise.reject(error);
//   }
// );
