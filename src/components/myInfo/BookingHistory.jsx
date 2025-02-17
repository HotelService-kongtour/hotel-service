import React, { useState } from "react";
import styled from "styled-components";
import PendingApproval from "./PendingApproval";
import Approved from "./Approved";

const BookingHistory = () => {
  const [activeMenu, setActiveMenu] = useState("pending");
  const menuItems = [
    { label: "Pending Approval", value: "pending" },
    { label: "Approved", value: "approved" },
  ];

  return (
    <Wrapper>
      <Menus>
        <Menus>
          {menuItems.map((item) => (
            <Menu
              key={item.value}
              onClick={() => setActiveMenu(item.value)}
              $isactive={activeMenu === item.value}
            >
              {item.label}
            </Menu>
          ))}
        </Menus>
      </Menus>

      <BookingContainer>
        {activeMenu === "pending" ? <PendingApproval /> : <Approved />}
      </BookingContainer>
    </Wrapper>
  );
};

export default BookingHistory;

const Wrapper = styled.div`
  width: 100%;
  border: 2px solid #ececec;
  border-radius: 0.5rem;
`;

const Menus = styled.div`
  width: 100%;
  border-bottom: 1px solid #ececec;
  display: flex;
`;
const Menu = styled.div`
  width: 50%;
  text-align: center;
  padding: 1rem;
  cursor: pointer;
  color: ${(props) => (props.$isactive ? "#333" : "#999")};
  font-weight: ${(props) => (props.$isactive ? "700" : "500")};

  &:first-child {
    border-right: 2px solid #ececec;
  }
`;

const BookingContainer = styled.div`
  padding: 2rem 1rem;
`;
