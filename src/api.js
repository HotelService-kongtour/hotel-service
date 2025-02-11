import axiosInstance from "./axiosInstance";

// 예시로 데이터를 가져오는 API 요청 함수
export const fetchData = async () => {
  try {
    const response = await axiosInstance.get("/data"); // 상대 경로로 요청
    return response.data; // 응답 데이터 반환
  } catch (error) {
    throw error; // 에러가 발생하면 던져서 호출한 곳에서 처리
  }
};
