import { Outlet, NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import LogoImage from "assets/logo/hantour_admin_logo.svg";

function AdminLayout() {
  return (
    <AdminContainer>
      <Sidebar>
        <Logo src={LogoImage} alt="Hotel Admin Logo" />
        <NavContainer>
          <MenuList>
            <MenuLink to="/admin/hotel-management">호텔 내역</MenuLink>
            <MenuLink to="/admin/reservation-management">예약 내역</MenuLink>
          </MenuList>
          {/* 임시링크 */}
          <Link to={"/"}>
            <LogoutButton>로그아웃</LogoutButton>
          </Link>
        </NavContainer>
      </Sidebar>
      <Content>
        <Outlet />
      </Content>
    </AdminContainer>
  );
}

export default AdminLayout;

const AdminContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Sidebar = styled.div`
  width: 240px;
  background-color: white;
  padding: 20px;
  border-right: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 180px;
  margin-bottom: 40px;
`;

const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuLink = styled(NavLink)`
  display: block;
  padding: 15px 10px;
  text-decoration: none;
  color: #333;
  font-size: 16px;
  margin-bottom: 10px;
  border-radius: 4px;

  &.active {
    color: #2e7d32;
    background-color: #e8f5e9;
  }

  &:hover {
    background-color: #f5f5f5;
  }
`;

const LogoutButton = styled.button`
  display: block;
  padding: 15px 10px;
  text-decoration: none;
  color: #dc3545;
  font-size: 16px;
  margin-top: auto;
  border: none;
  background: none;
  cursor: pointer;
  text-align: left;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const Content = styled.main`
  flex: 1;
  padding: 30px;
  background-color: #f9f9f9;
`;
