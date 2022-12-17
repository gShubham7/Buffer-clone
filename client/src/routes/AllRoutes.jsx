import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../components/prakash/Components/Navbar/Navbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Pricing from "../pages/PricePage";
import { Publishing } from "../pages/Publishing";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/publishing" ||
      location.pathname === "/login" ||
      location.pathname === "/register" ? null : (
        <Navbar />
      )}
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/pricing" element={<Pricing />}></Route>
        {/* <Route path="/blogs" element={<Blog />}></Route> */}
        <Route
          exact
          path="/publishing"
          element={
            <PrivateRoute>
              <Publishing />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default AllRoutes;