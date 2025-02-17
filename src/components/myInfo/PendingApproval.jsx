import React from "react";
import styled from "styled-components";

const pendinglist = [
  {
    hotel_name: "Lotte Hotel 01",
    date: "2025-01-01",
    price: 1000000,
  },
  {
    hotel_name: "Lotte Hotel 02",
    date: "2025-01-01",
    price: 1000000,
  },
];

const PendingApproval = () => {
  return (
    <Wrapper>
      <PendingLists></PendingLists>
    </Wrapper>
  );
};

export default PendingApproval;

const Wrapper = styled.div``;

const PendingLists = styled.ul``;
const List = styled.li``;
const Name = styled.h4``;
const Date = styled.p``;

const PriceBox = styled.div``;
const Price = styled.h3``;
const BtnBox = styled.div``;
