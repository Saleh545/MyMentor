import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Education from "../Pages/Education";
import ProjectSell from "../Pages/ProjectSell";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/education" element={<Education/>} />
        <Route path="/project-sell" element={<ProjectSell/>} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
