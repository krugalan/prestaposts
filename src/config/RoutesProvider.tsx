import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  redirect,
} from "react-router-dom";
import { AUTH } from "../routes";
import { AUTH_LOGIN } from "../modules/auth/routes";
import { Login } from "../modules/auth";
import PrivateRoute from "../modules/auth/private-route";
import { Users } from "../modules/user";

export const RoutesProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={AUTH + AUTH_LOGIN} element={<Login />} />

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

function Layout() {
  return <Outlet />;
}
