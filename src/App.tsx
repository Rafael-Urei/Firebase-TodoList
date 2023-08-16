import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppAuthProvider } from "./shared/contexts/AuthContext/Auth";
import { AppMenuProvider } from "./shared/contexts/MenuContext/MenuContext";
import { Menu } from "./shared/components";

export const App = () => {
  return (
    <div className="flex bg-slate-50">
      <AppAuthProvider>
        <AppMenuProvider>
          <BrowserRouter>
            <Menu>
              <AppRoutes></AppRoutes>
            </Menu>
          </BrowserRouter>
        </AppMenuProvider>
      </AppAuthProvider>
    </div>
  );
};
