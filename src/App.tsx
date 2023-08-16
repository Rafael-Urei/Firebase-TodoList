import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppAuthProvider } from "./shared/contexts/AuthContext/Auth";
import { AppMenuProvider } from "./shared/contexts/MenuContext/MenuContext";
import { Menu, ToggleMenu } from "./shared/components";

export const App = () => {
  return (
    <div className="flex bg-slate-50">
      <AppAuthProvider>
        <AppMenuProvider>
          <BrowserRouter>
            <Menu>
              <ToggleMenu></ToggleMenu>
              <AppRoutes></AppRoutes>
            </Menu>
          </BrowserRouter>
        </AppMenuProvider>
      </AppAuthProvider>
    </div>
  );
};
