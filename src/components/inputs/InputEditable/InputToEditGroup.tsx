import editIcon from "../../../assets/edit.svg";
import { ImgIconAction, InputContainer, InputTextField } from "../components";
import { InputEditProps, setEdit } from ".";

export const InputToEditGroup = ({
  setEditable,
  value,
}: InputEditProps & setEdit) => {
  const handleEditStateChange = () => setEditable((prev: boolean) => !prev);

  return (
    <InputContainer>
      <InputTextField>{value}</InputTextField>
      <ImgIconAction
        src={editIcon}
        className="editIcon"
        alt="Editar"
        onClick={handleEditStateChange}
      />
    </InputContainer>
  );
};
