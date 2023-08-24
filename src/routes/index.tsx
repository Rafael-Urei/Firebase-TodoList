import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { LoginModal } from "../pages/Login/LoginPage";
import { useAppAuthContext } from "../shared/contexts/AuthContext/Auth";
import { Upcoming } from "../pages/Private/Dashboard/Upcoming";
import { Profile } from "../pages/Private/Profile/Profile";
import { Tasks } from "../pages/Private/Dashboard/Tasks";
import { useEffect } from "react";
import { useAppMenuContext } from "../shared/contexts/MenuContext/MenuContext";
import { GanttChart, ListChecks } from "lucide-react";

export const AppRoutes = () => {
  const { currentUser }: any = useAppAuthContext();
  const { setMenuOptions } = useAppMenuContext();
  useEffect(() => {
    setMenuOptions([
      {
        label: "Tasks",
        path: "/tasks",
        icon: <ListChecks />,
      },
      {
        label: "Upcoming",
        path: "/upcoming",
        icon: <GanttChart />,
      },
    ]);
  }, []);
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginModal />} />
        <Route path="*" element={<Navigate to="/home" />} />
        {currentUser && <Route path="/upcoming" element={<Upcoming />} />}
        {currentUser && <Route path="/tasks" element={<Tasks />} />}
        {currentUser && <Route path="/profile" element={<Profile />} />}
      </Routes>
    </>
  );
};
