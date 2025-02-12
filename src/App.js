import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import axiosInstance from "axiosInstance";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyInfo from "./pages/MyInfo";
import HotelSearch from "./pages/HotelSearch";
import BookingHistory from "./pages/BookingHistory";
import HotelDetail from "./pages/HotelDetail";
import SignUp from "pages/SignUp";
import FindPassword from "pages/FindPassword";
import ResetPassword from "pages/ResetPassword";
import AdminHeader from "components/admin/AdminHeader";
import Admin from "pages/admin/Admin";
import AdminLogin from "pages/admin/AdminLogin";
import AdminSignUp from "pages/admin/AdminSignUp";
import AdminFindPassword from "pages/admin/AdminFindPassword";
import AdminResetPassword from "pages/admin/AdminResetPassword";
import HotelRoomDetail from "pages/HotelRoomDetail";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
function AdminLayout() {
  return (
    <>
      <AdminHeader />
      <Outlet />
    </>
  );
}

function App() {
  // useEffect(() => {
  //   axiosInstance
  //     .get("/api/auth/login")
  //     .then((response) => {
  //       console.log("Server response:", response.data);
  //       console.log("Server status:", response.status);
  //     })
  //     .catch((error) => {
  //       console.error("Error connecting to server:", error);
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
            path="/hotel-detail/:hotelName/:roomName"
            element={<HotelRoomDetail />}
          />
          <Route path="/booking-history" element={<BookingHistory />} />
        </Route>

        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<Admin />} />
        </Route>

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/sign-up" element={<AdminSignUp />} />
        <Route path="/admin/find-password" element={<AdminFindPassword />} />
        <Route path="/admin/reset-password" element={<AdminResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
