import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import axiosInstance from "axiosInstance";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
