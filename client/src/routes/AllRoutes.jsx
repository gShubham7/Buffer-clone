import { Flex } from "@chakra-ui/react";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Channels } from "../components/anjali/Channels";
import Footer from "../components/prakash/Components/Footer/Footer";
import Navbar from "../components/prakash/Components/Navbar/Navbar";
import AltNavbar from "../components/shubham/AltNavbar";
import SideBar from "../components/shubham/SideBar";
import Admin from "../pages/Admin";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Pricing from "../pages/PricePage";
import Register from "../pages/Register";
import AdminPrivateAuth from "./AdminPrivateAuth";
import PublishingRoutes from "./PublishingRoutes";

const AllRoutes = () => {
  const location = useLocation();

  if (
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/admin"
  ) {
    return (
      <Routes>
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        {/* <Route
          exact
          path="/admin"
          element={
            <AdminPrivateAuth>
              <Admin />
            </AdminPrivateAuth>
          }
        ></Route> */}
      </Routes>
    );
  } else if (location.pathname === "/channels") {
    return (
      <>
        <>
          <AltNavbar />
        </>
        <>
          <Routes>
            <Route exact path="/channels" element={<Channels />}></Route>
          </Routes>
        </>
      </>
    );
  } else if (
    location.pathname === "/publishing" ||
    location.pathname === "/publishing/calender" ||
    location.pathname === "/publishing/facebook" ||
    location.pathname === "/publishing/instagram" ||
    location.pathname === "/publishing/twitter"
  ) {
    return (
      <>
        <AltNavbar />
        <Flex justifyContent="space-between">
          <SideBar />
          <PublishingRoutes />
        </Flex>
      </>
    );
  } else {
    return (
      <>
        <>
          <Navbar />
        </>
        <>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/pricing" element={<Pricing />}></Route>
          </Routes>
        </>
        <>
          <Footer />
        </>
      </>
    );
  }
};

export default AllRoutes;
