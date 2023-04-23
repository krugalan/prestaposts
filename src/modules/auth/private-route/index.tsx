import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

import { AUTH } from "../../../routes";
import { AUTH_LOGIN } from "../routes";
import { selectLoginToken } from "../selectors";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const token = useSelector(selectLoginToken);

  if (!token) {
    return (
      <Navigate to={AUTH + AUTH_LOGIN} state={{ from: location }} replace />
    );
  }

  return children;
};

export default PrivateRoute;
