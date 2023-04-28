import { Outlet } from "react-router-dom";
import { Container } from "./components";
import { MainHeader } from "./MainHeader";

export const MainLayout = () => {
  return (
    <>
      <MainHeader />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
