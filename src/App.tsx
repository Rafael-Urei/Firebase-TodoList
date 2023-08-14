import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppAuthProvider } from "./shared/contexts/AuthContext/Auth";

export const App = () => {
  return (
    <AppAuthProvider>
      <BrowserRouter>
        <AppRoutes></AppRoutes>
      </BrowserRouter>
    </AppAuthProvider>
  );
};
