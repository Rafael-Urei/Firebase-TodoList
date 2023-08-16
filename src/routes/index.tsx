import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { LoginModal } from "../pages/Login/LoginPage";
import { useAppAuthContext } from "../shared/contexts/AuthContext/Auth";
import { Upcoming } from "../pages/Private/Dashboard/Upcoming";

export const AppRoutes = () => {
  const { currentUser }: any = useAppAuthContext();
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginModal />} />
        <Route path="*" element={<Navigate to="/home" />} />
        {currentUser && <Route path="/upcoming" element={<Upcoming />} />}
      </Routes>
    </>
  );
};
