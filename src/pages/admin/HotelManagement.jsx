import React, { useState } from "react";
import AdminTable from "components/admin/AdminTable";
import CustomSearchbar from "components/custom/CustomSearchBar";
import Pagination from "components/admin/Pagination";

const hotelData = [
  {
    hotelName: "그랜드호텔",
    region: "서울",
    theme: "Korean-Traditional",
    availableRooms: 15,
    reservationCount: 45,
    hotelNumber: "HTL001",
    review: null,
  },
  {
    hotelName: "시티호텔",
    region: "부산",
    theme: "Pet-friendly",
    availableRooms: 8,
    reservationCount: 32,
    hotelNumber: "HTL002",
    review: null,
  },
];

const HotelManagement = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const hotelHeaders = [
    { key: "hotelName", label: "호텔명", type: "text" },
    { key: "region", label: "지역", type: "text" },
    { key: "theme", label: "테마", type: "theme" },
    { key: "availableRooms", label: "예약가능 룸 수", type: "text" },
    { key: "reservationCount", label: "예약 건 수", type: "text" },
    { key: "hotelNumber", label: "호텔 번호", type: "text" },
    { key: "review", label: "호텔 리뷰", type: "button" },
  ];

  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return hotelData.slice(startIndex, endIndex);
  };

  const handleReviewClick = (rowData) => {
    console.log("호텔 리뷰:", rowData);
  };

  const handleThemeChange = (value) => {
    console.log("테마 변경:", value);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <CustomSearchbar placeholder="호텔명을 입력해주세요" />
      <AdminTable
        headers={hotelHeaders}
        data={getCurrentPageData()}
        onReviewClick={handleReviewClick}
        onThemeChange={handleThemeChange}
      />
      <Pagination
        totalItems={hotelData.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default HotelManagement;
