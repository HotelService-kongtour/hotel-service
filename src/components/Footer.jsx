import React from "react";
import styled from "styled-components";

import LogoIcon from "../assets/logo/logo.svg";
import LogoName from "../assets/logo/logo_name.svg";

const Footer = () => {
  return (
    <MainFooter>
      <Logo>
        <img src={LogoIcon} alt="logo-icon" style={{ width: "24px" }} />
        <img src={LogoName} alt="logo-name" style={{ width: "80px" }} />
      </Logo>
      <Script>
        <Text>
          (주) kongtour
          <br />
          대표이사: 홍길동 | 사업자등록번호: 000-00-00000
          <br />
          연락처: 010-0000-0000 | 이메일 : admin@gmail.com
          <br />
          주소: 서울특별시 영등포구 의사당대로 83, 8 -112호 (여의도동, 오투타워)
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
    </MainFooter>
  );
};

export default Footer;

const MainFooter = styled.div`
  width: 100%;
  padding: 2rem 10rem;
  background-color: #ececec;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const Script = styled.div`
  padding: 1rem 0;
`;
const Text = styled.p`
  font-size: 0.8rem;
  letter-spacing: 1px;
  line-height: 2;
`;

const Terms = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const Term = styled.a`
  font-size: 0.8rem;
  border: 1px solid #333;
  padding: 4px;
`;
