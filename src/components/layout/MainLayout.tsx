import { Outlet } from "react-router-dom";
import { Container } from "./components";

export const MainLayout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};
