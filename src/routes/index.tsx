import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home/Home";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};
