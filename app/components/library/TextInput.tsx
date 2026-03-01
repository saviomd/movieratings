import type { ChangeEvent } from "react";

interface IProps {
  id: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: number | string;
}

function TextInput({ id, onChange, placeholder, value }: IProps) {
  return (
    <input
      className="form-control"
      id={id}
      onChange={onChange}
      placeholder={placeholder}
      type="text"
      value={value}
    />
  );
}

export default TextInput;
