import React from "react";
import { Route, Routes } from "react-router-dom";
import { Publishing } from "../pages/Publishing";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/publishing" element={<Publishing />}></Route>
    </Routes>
  );
};

export default AllRoutes;
