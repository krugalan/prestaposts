import { useEffect } from "react";
import {
  LoginContainer,
  H1Text,
  H4Text,
  InputText,
  ErrorMsg,
  ButtonSubmit,
} from "../../../components/layout";
import { ContainerForm, ContentForm, FormInput } from "../components";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginPayload } from "../typings";
import { useDispatch, useSelector } from "react-redux";
import { loginService } from "../services";
import { selectLoginError, selectLoginToken } from "../selectors";
import { useNavigate } from "react-router-dom";
import { selectLoading } from "../../session/selectors";
import { SpinnerLoader } from "../../../components/SpinnerLoader";
import { PATH_HOME } from "../../../constants";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPayload>();
  const isLoading = useSelector(selectLoading);
  const loginError = useSelector(selectLoginError);
  const token = useSelector(selectLoginToken);

  const onSubmit: SubmitHandler<LoginPayload> = (data) =>
    loginService(data, dispatch);

  useEffect(() => {
    if (token) navigate(PATH_HOME);
  }, [token, navigate]);

  return (
    <>
      <LoginContainer>
        {isLoading && <SpinnerLoader />}
        <ContainerForm>
          <ContentForm>
            <H1Text>Iniciar sesión</H1Text>
            <H4Text>Ingrese sus datos para continuar</H4Text>

            <FormInput onSubmit={handleSubmit(onSubmit)}>
              <InputText
                defaultValue="eve.holt@reqres.in"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              {errors.email && <ErrorMsg>El email es requerido</ErrorMsg>}

              <InputText
                defaultValue="cityslicka"
                placeholder="Password"
                type="password"
                {...register("password", { required: true })}
              />
              {errors.password && <ErrorMsg>La password es requerida</ErrorMsg>}
              {loginError && <ErrorMsg>Error de autenticación</ErrorMsg>}
              <ButtonSubmit type="submit" />
            </FormInput>
          </ContentForm>
        </ContainerForm>
      </LoginContainer>
    </>
  );
};
