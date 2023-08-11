import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppLoginModalProvider } from "./shared/contexts/LoginModalContext";

export const App = () => {
  return (
    <AppLoginModalProvider>
      <BrowserRouter>
        <AppRoutes></AppRoutes>
      </BrowserRouter>
    </AppLoginModalProvider>
  );
};
