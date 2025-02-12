import React from "react";
import { useParams } from "react-router-dom";

const HotelRoomDetail = () => {
  const { hotelName, roomName } = useParams();

  return (
    <div>
      <h1>Hotel: {hotelName}</h1>
      <h2>Room: {roomName}</h2>
      {/* 여기에 해당 방에 대한 상세 정보 표시 */}
    </div>
  );
};

export default HotelRoomDetail;
