import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { LoginModal } from "../pages/Login/LoginPage";
import { useAppAuthContext } from "../shared/contexts/AuthContext/Auth";
import { Upcoming } from "../pages/Private/Dashboard/Upcoming";
import { Profile } from "../pages/Private/Profile/Profile";

export const AppRoutes = () => {
  const { currentUser }: any = useAppAuthContext();
  console.log(currentUser);
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginModal />} />
        <Route path="*" element={<Navigate to="/home" />} />
        {currentUser && <Route path="/upcoming" element={<Upcoming />} />}
        {currentUser && <Route path="/profile" element={<Profile />} />}
      </Routes>
    </>
  );
};
