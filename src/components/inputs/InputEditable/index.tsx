import  { useState } from "react";
import { InputEditableGroup } from "./InputEditableGroup";
import { InputToEditGroup } from "./InputToEditGroup";
import { InputEditProps, InputEditableProps } from "../typings";

export const InputEditable = ({
  value,
  name,
  action,
}: InputEditProps & InputEditableProps) => {
  const [editable, setEditable] = useState(false);

  return editable ? (
    <InputEditableGroup {...{ setEditable, value, name, action }} />
  ) : (
    <InputToEditGroup {...{ setEditable, value, name }} />
  );
};
