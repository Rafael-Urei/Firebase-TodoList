import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { LoginModal } from "../shared/components/LoginPage/LoginPage";
import { useAppAuthContext } from "../shared/contexts/AuthContext/Auth";
import { Dashboard } from "../pages/PrivatePages/Dashboard/Dashboard";

export const AppRoutes = () => {
  const { currentUser }: any = useAppAuthContext();
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginModal />} />
        <Route path="*" element={<Navigate to="/home" />} />
        {currentUser && <Route path="/dashboard" element={<Dashboard />} />}
      </Routes>
    </>
  );
};
