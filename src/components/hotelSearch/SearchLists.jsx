import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import CustomMainInput from "../custom/CustomMainInput";
import { useColors } from "context/ColorContext";

const hotelLists = [
  {
    name: "Lotte Hotel Seoul",
    place: "Seoul",
    room_type_01: "Superior Twin",
    room_type_02: "Superior Double",
    room_type_01_price: "169,000",
    room_type_02_price: "204,000",
  },
  {
    name: "Lotte Hotel Busan",
    place: "Busan",
    room_type_01: "Superior Twin",
    room_type_02: "Superior Double",
    room_type_01_price: "169,000",
    room_type_02_price: "204,000",
  },
  {
    name: "Best Western Gangnam",
    place: "Seoul",
    room_type_01: "Superior Twin",
    room_type_02: "Superior Double",
    room_type_01_price: "169,000",
    room_type_02_price: "204,000",
  },
  {
    name: "Best Western Cheongdam",
    place: "Seoul",
    room_type_01: "Superior Twin",
    room_type_02: "Superior Double",
    room_type_01_price: "169,000",
    room_type_02_price: "204,000",
  },
  {
    name: "Best Western Incheon",
    place: "Incheon",
    room_type_01: "Superior Twin",
    room_type_02: "Superior Double",
    room_type_01_price: "169,000",
    room_type_02_price: "204,000",
  },
];

const SearchLists = ({ searchKeyword }) => {
  const colors = useColors();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedArea = queryParams.get("area") || "Seoul";

  const filteredHotels = hotelLists.filter((hotel) => {
    const matchesSearch = hotel.name
      .toLowerCase()
      .includes(searchKeyword?.toLowerCase() || "");
    const matchesArea = hotel.place === selectedArea;

    if (selectedArea === "Other") {
      return (
        matchesSearch && !["Seoul", "Busan", "Incheon"].includes(hotel.place)
      );
    }

    return matchesSearch && matchesArea;
  });

  return (
    <Wrapper>
      <CustomMainInput />
      <ListsBox>
        <Lists>
          {filteredHotels.map((list) => (
            <Link to={`/hotel-detail/${list.name}`} key={list.name}>
              <List color={colors.mainLight}>
                <InfoBox>
                  <TitleBox>
                    <Title>{list.name}</Title>
                    <Place>{list.place}</Place>
                  </TitleBox>

                  <PriceWrapper>
                    <PriceBox>
                      <RoomTypeName>{list.room_type_01} Room</RoomTypeName>
                      <Price>₩ {list.room_type_01_price}</Price>
                    </PriceBox>
                    <PriceBox>
                      <RoomTypeName>{list.room_type_02} Room</RoomTypeName>
                      <Price>₩ {list.room_type_02_price}</Price>
                    </PriceBox>
                  </PriceWrapper>
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

  @media screen and (max-width: 1280px) {
    width: 68%;
  }
`;

const ListsBox = styled.div`
  height: 100%;
  overflow-y: auto;
  padding-right: 1rem;

  @media screen and (max-width: 1280px) {
    padding-right: 0.5rem;
  }
`;

const Lists = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const List = styled.li`
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  border: 2px solid #ececec;
  border-radius: 1rem;

  &:hover {
    border-color: ${(props) => props.color};
  }

  @media screen and (max-width: 1280px) {
    padding: 1rem;
  }
`;

const InfoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TitleBox = styled.div``;
const Title = styled.h3``;
const Place = styled.p`
  font-size: 1rem;
  color: #666;
`;

const PriceWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
`;
const PriceBox = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1rem;
`;
const RoomTypeName = styled.p`
  color: #666;
`;
const Price = styled.h3``;
