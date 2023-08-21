import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppAuthProvider } from "./shared/contexts/AuthContext/Auth";
import { AppMenuProvider } from "./shared/contexts/MenuContext/MenuContext";
import { Menu } from "./shared/components";
import { AppTimeProvider } from "./shared/contexts/TimeContext/TimeContext";
import { AppAddModalProvider } from "./shared/contexts/AddTaskModalContext/AddModal";

export const App = () => {
  return (
    <div className="flex bg-slate-50 w-screen">
      <AppAuthProvider>
        <AppAddModalProvider>
          <AppTimeProvider>
            <AppMenuProvider>
              <BrowserRouter>
                <Menu>
                  <AppRoutes></AppRoutes>
                </Menu>
              </BrowserRouter>
            </AppMenuProvider>
          </AppTimeProvider>
        </AppAddModalProvider>
      </AppAuthProvider>
    </div>
  );
};
