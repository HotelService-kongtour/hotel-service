import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useColors } from "../context/ColorContext";
import { Link, useNavigate } from "react-router-dom";

import LogoIcon from "assets/logo/logo-H.svg";
import LogoName from "assets/logo/logo-Hantour.svg";

const Header = () => {
  const colors = useColors();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");

    setIsLoggedIn(!!token);
    setIsAdmin(userInfo.email === "admin@example.com");
  }, []);

  const handleLogout = () => {
    try {
      // refreshToken 쿠키 제거
      document.cookie =
        "refreshToken=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";

      // 로컬 스토리지의 데이터 삭제
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userInfo");

      // 상태 초기화
      setIsLoggedIn(false);
      setIsAdmin(false);

      // 로그인 페이지로 이동
      navigate("/login");
    } catch (error) {
      console.error("로그아웃 에러:", error);
      alert("Failed to logout. Please try again.");

      // 에러 발생 시에도 로컬 데이터는 삭제 시도
      try {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userInfo");
        document.cookie =
          "refreshToken=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
        setIsLoggedIn(false);
        setIsAdmin(false);
      } catch (storageError) {
        console.error("데이터 삭제 에러:", storageError);
        alert(
          "Failed to clear login data. Please clear your browser data manually."
        );
      }
      navigate("/login");
    }
  };

  return (
    <HeaderMain>
      <Link to="/">
        <Logo>
          <img src={LogoIcon} alt="logo-icon" className="logo-icon" />
          <img src={LogoName} alt="logo-name" className="logo-name" />
        </Logo>
      </Link>

      <Menus>
        <Link to="/hotel-search">
          <Menu color={colors.main}>Hotel Reservation</Menu>
        </Link>
        <Link to="/my-info">
          <Menu color={colors.main}>My Info</Menu>
        </Link>
        {isLoggedIn ? (
          <Menu color={colors.main} onClick={handleLogout}>
            Logout
          </Menu>
        ) : (
          <Link to="/login">
            <Menu color={colors.main}>Login</Menu>
          </Link>
        )}

        {/* Admin 메뉴는 admin 계정일 때만 표시 */}
        {isAdmin && (
          <Link to="/admin">
            <Menu color={colors.main}>Admin</Menu>
          </Link>
        )}
      </Menus>
    </HeaderMain>
  );
};

export default Header;

const HeaderMain = styled.header`
  height: 10vh;
  padding: 0 20rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;

  @media screen and (max-width: 1440px) {
    padding: 0 10rem;
  }

  @media screen and (max-width: 1280px) {
    padding: 0 6rem;
  }

  @media screen and (max-width: 1024px) {
    height: 8vh;
    padding: 0 4rem;
  }
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media screen and (max-width: 1024px) {
    .logo-icon {
      width: 24px;
    }
    .logo-name {
      width: 80px;
    }
  }
`;
const Menus = styled.ul`
  display: flex;
  align-items: center;
  gap: 4rem;
`;
const Menu = styled.li`
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.color};
    text-decoration: underline;
  }

  @media screen and (max-width: 1440px) {
    font-size: 0.9rem;
  }
`;
