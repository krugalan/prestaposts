import { useNavigate } from "react-router-dom";
import { H4Text, PText } from "../../../components/layout";
import { UserCardImage } from "../components";
import { User } from "../typings";
import { getUserDetail } from "../services";
import { PATH_USER_DETAIL } from "../../../constants";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loadingStatus } from "../../session/sessionSlice";
import { floatCardContainerHOC } from "../../../components/layout/FloatCardContainerHOC";

const UserCard = (item: User) => {
  const { id, avatar, first_name, last_name, email } = item;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUserDetail = async () => {
    dispatch(loadingStatus(true));
    await getUserDetail(id.toString())
      .then((res) => navigate(PATH_USER_DETAIL, { state: res }))
      .catch(() => toast("Error al obtener el usuario"))
      .finally(() => dispatch(loadingStatus(false)));
  };

  return (
    <div onClick={handleUserDetail}>
      <UserCardImage src={avatar} />
      <H4Text>
        {first_name} {last_name}
      </H4Text>
      <PText>{email}</PText>
      <PText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </PText>
    </div>
  );
};

export const UserCardFloat = floatCardContainerHOC(UserCard);
