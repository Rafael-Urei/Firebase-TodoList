import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/home";
import Login from "../pages/Login/login";
import Register from "../pages/Register/register";
import { useAppAuthContext } from "../shared/contexts/AuthContext/auth-context";
import Dashboard from "../pages/Private/Dashboard/Dashboard";
import { Profile } from "../pages/Private/Profile/Profile";
import { useEffect } from "react";
import { useAppMenuContext } from "../shared/contexts/MenuContext/menu-context";
import {
  GanttChart,
  ListChecks,
  StepForward,
  ArrowRightFromLine,
  ListEnd,
} from "lucide-react";
import Today from "../pages/Private/Today/today";
import Tomorrow from "../pages/Private/Tomorrow/tomorrow";
import NextWeek from "../pages/Private/NextWeek/nextweek";
import Upcoming from "../pages/Private/Upcoming/upcoming";

export const AppRoutes = () => {
  const { currentUser }: any = useAppAuthContext();
  const { setMenuOptions } = useAppMenuContext();
  useEffect(() => {
    setMenuOptions([
      {
        label: "Upcoming",
        path: "/upcoming",
        icon: <ListChecks />,
      },
      {
        label: "Today",
        path: "/today",
        icon: <ListEnd />,
      },
      {
        label: "Coming Tomorrow",
        path: "/tomorrow",
        icon: <StepForward />,
      },
      {
        label: "Coming Next Week",
        path: "/nextweek",
        icon: <ArrowRightFromLine />,
      },
      {
        label: "Dashboard",
        path: "/dashboard",
        icon: <GanttChart />,
      },
    ]);
  }, []);
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/home" />} />
        {currentUser && <Route path="/dashboard" element={<Dashboard />} />}
        {currentUser && <Route path="/upcoming" element={<Upcoming />} />}
        {currentUser && <Route path="/today" element={<Today />} />}
        {currentUser && <Route path="/tomorrow" element={<Tomorrow />} />}
        {currentUser && <Route path="/nextweek" element={<NextWeek />} />}
        {currentUser && <Route path="/profile" element={<Profile />} />}
      </Routes>
    </>
  );
};
