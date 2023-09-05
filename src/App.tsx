import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppAuthProvider } from "./shared/contexts/AuthContext/Auth";
import { AppMenuProvider } from "./shared/contexts/MenuContext/MenuContext";
import { Menu } from "./shared/components";
import { AppAddModalProvider } from "./shared/contexts/AddTaskModalContext/AddModal";
import { AppCalendarProvider } from "./shared/contexts/CalendarContext/CalendarContext";
import { AppTasksProvider } from "./shared/contexts/TasksContext/TasksContext";
import { AppTaskMenuProvider } from "./shared/contexts/TaskMenuContext/TaskMenuContext";
import { TaskMenu } from "./shared/components/EditTaskMenu/TaskMenu";

export const App = () => {
  return (
    <div className="flex bg-slate-50 w-screen dark:bg-zinc-800">
      <AppAuthProvider>
        <AppTasksProvider>
          <AppTaskMenuProvider>
            <AppCalendarProvider>
              <AppAddModalProvider>
                <AppMenuProvider>
                  <BrowserRouter>
                    <Menu>
                      <AppRoutes></AppRoutes>
                    </Menu>
                    <TaskMenu></TaskMenu>
                  </BrowserRouter>
                </AppMenuProvider>
              </AppAddModalProvider>
            </AppCalendarProvider>
          </AppTaskMenuProvider>
        </AppTasksProvider>
      </AppAuthProvider>
    </div>
  );
};
