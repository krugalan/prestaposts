import { useState } from "react";
import { ImgIconAction, InputContainer } from "../components";
import { InputEditTextField } from "../components";
import { InputEditProps, InputEditableProps, setEdit } from "../typings";
import checkIcon from "../../../assets/check.svg";

export const InputEditableGroup = ({
  setEditable,
  value,
  action,
  name,
}: InputEditProps & InputEditableProps & setEdit) => {
  const [valueChanged, setValueChanged] = useState(value);
  const handleEditStateChange = () => {
    setEditable((prev: boolean) => !prev);
    action({ [name]: valueChanged });
  };

  return (
    <InputContainer>
      <InputEditTextField
        defaultValue={value}
        onChange={(e) => setValueChanged(e.target.value)}
      />
      <ImgIconAction
        src={checkIcon}
        className="editIcon"
        alt="Editar"
        onClick={handleEditStateChange}
      />
    </InputContainer>
  );
};
