import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AUTH } from "../routes";
import { AUTH_LOGIN } from "../modules/auth/routes";
import PrivateRoute from "../modules/auth/private-route";

// Modules Screens
import { Login } from "../modules/auth";
import { Users } from "../modules/user";
import { MainLayout } from "../components/layout/MainLayout";
import { Posts } from "../modules/posts";
import { PATH_HOME, PATH_POSTS } from "../constants";

export const RoutesProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AUTH + AUTH_LOGIN} element={<Login />} />
        <Route element={<MainLayout />}>
          <Route
            path={PATH_HOME}
            element={
              <PrivateRoute>
                <Users />
              </PrivateRoute>
            }
          />
          <Route
            path={PATH_POSTS}
            element={
              <PrivateRoute>
                <Posts />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
