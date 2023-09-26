import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppAuthProvider } from "./shared/contexts/AuthContext/auth-context";
import { AppMenuProvider } from "./shared/contexts/MenuContext/menu-context";
import { Menu } from "./shared/components";
import { AppCalendarProvider } from "./shared/contexts/CalendarContext/calendar-context";
import { AppTaskMenuProvider } from "./shared/contexts/TaskMenuContext/task-menu-context";
import { AppTasksProvider } from "./shared/contexts/task-context";
import TaskMenu from "./components/EditTaskForm/task-menu";

export const App = () => {
  return (
    <div className="flex bg-slate-50 w-screen dark:bg-zinc-800">
      <AppAuthProvider>
        <AppTaskMenuProvider>
          <AppTasksProvider>
            <AppCalendarProvider>
              <AppMenuProvider>
                <BrowserRouter>
                  <Menu>
                    <AppRoutes></AppRoutes>
                  </Menu>
                  <TaskMenu />
                </BrowserRouter>
              </AppMenuProvider>
            </AppCalendarProvider>
          </AppTasksProvider>
        </AppTaskMenuProvider>
      </AppAuthProvider>
    </div>
  );
};
