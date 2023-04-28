import { Outlet } from "react-router-dom";
import { Container } from "./components";
import { MainHeader } from "./MainHeader";
import { selectLoading } from "../../modules/session/selectors";
import { useSelector } from "react-redux";
import { SpinnerLoader } from "../SpinnerLoader";

export const MainLayout = () => {
  const isLoading = useSelector(selectLoading);
  return (
    <>
      <MainHeader />
      {isLoading && <SpinnerLoader />}
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
