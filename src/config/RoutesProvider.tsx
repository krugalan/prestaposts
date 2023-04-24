import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AUTH } from "../routes";
import { AUTH_LOGIN } from "../modules/auth/routes";
import { Login } from "../modules/auth";
import { Users } from "../modules/user";
import { MainLayout } from "../components/layout/MainLayout";
import PrivateRoute from "../modules/auth/private-route";

export const RoutesProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AUTH + AUTH_LOGIN} element={<Login />} />
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Users />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
