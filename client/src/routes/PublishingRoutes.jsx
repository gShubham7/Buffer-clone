import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import CalendarComponent from "../components/shubham/Calendar";
import FacebookPage from "../pages/FacebookPage";
import InstagramPage from "../pages/InstagramPage";
import { Publishing } from "../pages/Publishing";
import TwitterPage from "../pages/TwitterPage";
import PrivateRoute from "./PrivateRoute";

const PublishingRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/publishing"
          element={
            <PrivateRoute>
              <Publishing />
            </PrivateRoute>
          }
        ></Route>
        <Route
          exact
          path="/publishing/calender"
          element={
            <PrivateRoute>
              <CalendarComponent />
            </PrivateRoute>
          }
        ></Route>
        <Route
          exact
          path="/publishing/facebook"
          element={
            <PrivateRoute>
              <FacebookPage />
            </PrivateRoute>
          }
        ></Route>
        <Route
          exact
          path="/publishing/instagram"
          element={
            <PrivateRoute>
              <InstagramPage />
            </PrivateRoute>
          }
        ></Route>
        <Route
          exact
          path="/publishing/twitter"
          element={
            <PrivateRoute>
              <TwitterPage />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default PublishingRoutes;
