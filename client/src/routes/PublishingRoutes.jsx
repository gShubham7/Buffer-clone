import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import CalendarComponent from "../components/shubham/Calendar";
import FacebookPage from "../pages/FacebookPage";
import InstagramPage from "../pages/InstagramPage";
import { Publishing } from "../pages/Publishing";
import linkedinPage from "../pages/LinkedinPage";
import PrivateRoute from "./PrivateRoute";
import LinkedinPage from "../pages/LinkedinPage";

const PublishingRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/publishing"
          element={
            <PrivateRoute>
              <CalendarComponent />
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
          path="/publishing/linkedin"
          element={
            <PrivateRoute>
              <LinkedinPage />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default PublishingRoutes;
