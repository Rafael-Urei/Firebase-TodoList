import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { LoginModal } from "../shared/components/LoginModal/LoginModal";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginModal />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};
