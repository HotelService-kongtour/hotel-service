import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CustomMainInput from "../custom/CustomMainInput";

const hotelLists = [
  {
    name: "Hotel_1",
    place: "Jeju",
    check_in_time: "15:00",
    check_out_time: "11:00",
    sale: "4%",
    price: "204,000",
  },
  {
    name: "Hotel_2",
    place: "Jeju",
    check_in_time: "15:00",
    check_out_time: "11:00",
    sale: "4%",
    price: "204,000",
  },
  {
    name: "Hotel_3",
    place: "Jeju",
    check_in_time: "15:00",
    check_out_time: "11:00",
    sale: "4%",
    price: "204,000",
  },
  {
    name: "Hotel_4",
    place: "Jeju",
    check_in_time: "15:00",
    check_out_time: "11:00",
    sale: "4%",
    price: "204,000",
  },
  {
    name: "Hotel_5",
    place: "Jeju",
    check_in_time: "15:00",
    check_out_time: "11:00",
    sale: "4%",
    price: "204,000",
  },
];

const SearchLists = () => {
  return (
    <Wrapper>
      <CustomMainInput />
      <ListsBox>
        <Lists>
          {hotelLists.map((list) => (
            <Link to={`/hotel-detail/${list.name}`} key={list.name}>
              <List>
                <ImgBox />
                <InfoBox>
                  <TitleBox>
                    <Title>{list.name}</Title>
                    <Place>{list.place}</Place>
                  </TitleBox>
                  <PriceBox>
                    <ChechInTime>
                      Check-in at {list.check_in_time} | Check-out at{" "}
                      {list.check_out_time}
                    </ChechInTime>
                    <Price>${list.price}~</Price>
                  </PriceBox>
                </InfoBox>
              </List>
            </Link>
          ))}
        </Lists>
      </ListsBox>
    </Wrapper>
  );
};

export default SearchLists;

const Wrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ListsBox = styled.div`
  height: 100%;
  padding-right: 2rem;
  overflow-y: auto;
`;

const Lists = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const List = styled.li`
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ececec;
`;

const ImgBox = styled.div`
  width: 250px;
  aspect-ratio: 1/1;
  border-radius: 1rem;
  background-color: #d6dcd970;
`;
const InfoBox = styled.div`
  width: calc(100% - 300px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TitleBox = styled.div``;
const Title = styled.h3``;
const Place = styled.p``;

const PriceBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const ChechInTime = styled.p`
  color: #666;
`;
const Price = styled.h3``;
