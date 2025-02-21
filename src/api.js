import axiosInstance from "axiosInstance";

// 로그인 API >> ✅ 완료
export const loginApi = async (email, password, autoLogin) => {
  try {
    const response = await axiosInstance.post(
      "/api/auth/login",
      {
        email,
        password,
        autoLogin,
      },
      {
        withCredentials: true,
      }
    );

    const { accessToken, ...userInfo } = response.data.data;

    const headerToken = response.headers["authorization"];
    const tokenToSave = headerToken || accessToken;

    // accessToken만 localStorage에 저장
    if (tokenToSave) {
      localStorage.setItem("accessToken", tokenToSave);
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    } else {
      console.error("No token received in response");
    }

    // refreshToken은 서버에서 자동으로 httpOnly 쿠키로 설정됨
    return response.data;
  } catch (error) {
    console.error("로그인 에러:", error);
    throw error;
  }
};

// 이메일 인증요청 API >> ✅ 완료
export const sendVerificationEmailApi = async (email, verificationType) => {
  try {
    const response = await axiosInstance.post(
      "/api/auth/send-verification-email",
      {
        email,
        verificationType,
      }
    );
    return response.data;
  } catch (error) {
    console.error("이메일 인증요청 에러:", error);
    throw error;
  }
};

// 이메일인증 API >> 회원가입&비번재설정 분리 >> ✅ 완료
export const verifyEmailApi = async (email, code, verificationType) => {
  try {
    const response = await axiosInstance.post("/api/auth/verify-email", {
      email,
      code,
      verificationType,
    });
    return response.data;
  } catch (error) {
    console.error("이메일 인증 에러:", error);
    throw error;
  }
};

// 회원가입 API >> ✅ 완료
export const signupApi = async (
  email,
  password,
  firstName,
  lastName,
  companyName
) => {
  try {
    const response = await axiosInstance.post("/api/auth/signup", {
      email,
      password,
      firstName,
      lastName,
      companyName,
    });
    return response.data;
  } catch (error) {
    console.error("회원가입 에러:", error);
    throw error;
  }
};

// 비밀번호 재설정 API
export const resetPasswordApi = async (email, code, password) => {
  try {
    const response = await axiosInstance.post(
      "/api/auth/reset-password",
      {
        email,
        code,
        password,
      },
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("비밀번호 재설정 에러:", error);
    throw error;
  }
};
