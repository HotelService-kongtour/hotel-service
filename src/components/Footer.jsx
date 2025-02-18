import React from "react";
import styled from "styled-components";

import LogoIcon from "../assets/logo/logo_H.svg";
import LogoName from "../assets/logo/logo_Hantour.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <MainFooter>
      <FooterInner>
        <Logo>
          <img src={LogoIcon} alt="logo-icon" className="logo-icon" />
          <img src={LogoName} alt="logo-name" className="logo-name" />
        </Logo>
        <Script>
          <Text>
            (주) Hantour
            <br />
            대표이사: 홍길동 | 사업자등록번호: 000-00-00000
            <br />
            연락처: 010-0000-0000 | 이메일 : admin@gmail.com
            <br />
            주소: 서울특별시 영등포구 의사당대로 83, 8 -112호 (여의도동,
            오투타워)
            <br />
            통신판매업자신고: 강남 - 02096호
          </Text>
        </Script>
        <Terms>
          <Term href="#a" target="_blank" rel="noopener noreferrer">
            이용약관
          </Term>
          <Term href="#a" target="_blank" rel="noopener noreferrer">
            개인정보처리방침
          </Term>
          <Term href="#a" target="_blank" rel="noopener noreferrer">
            사업자정보
          </Term>
        </Terms>

        {/* 임시 관리자 */}
        <Link to={"/admin"}>
          <Admin>관리자</Admin>
        </Link>
      </FooterInner>
    </MainFooter>
  );
};

export default Footer;

const MainFooter = styled.div`
  width: 100%;
  height: 28vh;
  padding: 0 20rem;
  background-color: #ececec;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;

  @media screen and (max-width: 1440px) {
    height: 24vh;
    padding: 0 10rem;
    font-size: 0.6rem;
  }
`;
const FooterInner = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
`;

const Admin = styled.div`
  width: fit-content;
  background-color: #fff;
  padding: 0.5rem;
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: pointer;

  &:hover {
    font-weight: 600;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .logo-icon {
    width: 24px;
  }
  .logo-name {
    width: 80px;
  }

  @media screen and (max-width: 1440px) {
    .logo-icon {
      width: 16px;
    }
    .logo-name {
      width: 60px;
    }
  }
`;
const Script = styled.div`
  padding: 1rem 0;

  @media screen and (max-width: 1440px) {
    padding: 0.5rem 0;
  }
`;
const Text = styled.p`
  letter-spacing: 1px;
  line-height: 2;
`;

const Terms = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const Term = styled.a`
  border: 1px solid #999;
  padding: 4px;
  font-size: 0.7rem;

  @media screen and (max-width: 1440px) {
    font-size: 0.6rem;
  }
`;
