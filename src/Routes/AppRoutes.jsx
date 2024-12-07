import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Education from "../Pages/Education";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/education" element={<Education/>} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
