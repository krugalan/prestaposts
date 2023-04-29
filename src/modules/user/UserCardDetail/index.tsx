import { User } from "../typings";
import { updateUserById } from "../services";
import { useDispatch, useSelector } from "react-redux";
import { loadingStatus } from "../../session/sessionSlice";
import { InputEditable } from "../../../components/inputs/InputEditable";
import { updateUserData } from "../userSlice";
import { selectUsers } from "../selectors";
import { floatCardContainerHOC } from "../../../components/layout/FloatCardContainerHOC";

export const UserCardDetail = floatCardContainerHOC((item: User) => {
  const dispatch = useDispatch();
  const listUsers = useSelector(selectUsers);
  const { id, first_name, last_name, email } = item;
  const auxDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua.`;

  const handleChangeValue = async (objUpdate: any) => {
    dispatch(loadingStatus(true));
    await updateUserById({ id: id.toString(), ...objUpdate }).then(
      (res) =>
        res &&
        dispatch(
          updateUserData([
            ...listUsers.filter((el) => el.id !== id),
            { ...item, ...res },
          ])
        )
    );
    dispatch(loadingStatus(false));
  };

  return (
    <>
      <InputEditable
        value={first_name}
        name="first_name"
        action={handleChangeValue}
      />
      <InputEditable
        value={last_name}
        name="last_name"
        action={handleChangeValue}
      />
      <InputEditable value={email} name="email" action={handleChangeValue} />
      <InputEditable
        value={auxDescription}
        name="description"
        action={handleChangeValue}
      />
    </>
  );
});
