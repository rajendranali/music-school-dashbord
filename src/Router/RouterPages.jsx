import LoginForm from "@/Authentication/Login";
import Course from "@/Pages/Course";
import OverViews from "@/Pages/OverViews";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
const RouterPages = () => {
  return (
    <Routes>
      <Route exact path="/course" element={<Course />} />

      <Route exact path="/overview" element={<OverViews />} />
      <Route exact path="/login" element={<LoginForm />} />
    </Routes>
  );
};

export default RouterPages;
