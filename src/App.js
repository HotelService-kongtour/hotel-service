import { BrowserRouter, Outlet, Route, Routes, Navigate } from "react-router-dom";
import { useEffect } from "react";
import axiosInstance from "axiosInstance";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyInfo from "./pages/MyInfo";
import HotelSearch from "./pages/HotelSearch";
import HotelDetail from "./pages/HotelDetail";
import SignUp from "pages/SignUp";
import FindPassword from "pages/FindPassword";
import ResetPassword from "pages/ResetPassword";
import ReservationComplete from "pages/ReservationComplete";
import HotelManagement from "pages/admin/HotelManagement";
import ReservationManagement from "pages/admin/ReservationManagement";
import AdminLayout from "./components/AdminLayout";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  // useEffect(() => {
  //   axiosInstance
  //     .get("/endpoint")
  //     .then((response) => {
  //       console.log("서버 응답:", response.data);
  //     })
  //     .catch((error) => {
  //       console.error("서버 연결 오류:", error);
  //     });
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/find-password" element={<FindPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/my-info" element={<MyInfo />} />
          <Route path="/hotel-search" element={<HotelSearch />} />
          <Route path="/hotel-detail/:hotelName" element={<HotelDetail />} />
          <Route
            path="/reservation-complete"
            element={<ReservationComplete />}
          />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/hotel-management" replace />} />
          <Route path="hotel-management" element={<HotelManagement />} />
          <Route path="reservation-management" element={<ReservationManagement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
