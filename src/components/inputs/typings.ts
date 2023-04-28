export type setEdit = {
  setEditable: React.Dispatch<React.SetStateAction<boolean>>;
};

export type InputEditProps = {
  value: string;
  name: string;
};

export type InputEditableProps = {
  action: (...args: any[]) => void;
};
