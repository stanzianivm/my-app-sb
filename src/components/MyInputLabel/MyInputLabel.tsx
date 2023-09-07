import React, { useState } from "react";
import { InputText } from "primereact/inputtext";

export interface MyInputProps {
  /** The label to assign on input. */
  label?: string;
  id: string;
  //   value: string;
  name: string;
  type: string;
  error?: string;
  idDisabled: boolean;
  //   handleBlur?: any;
  //   handleChange?: any;
}

export const MyInputLabel: React.FC<MyInputProps> = ({
  label,
  type,
  id,
  name,
  error,
  idDisabled,
  //   handleBlur,
  //   handleChange,
}): JSX.Element => {
  const [value, setValue] = useState("");

  return (
    <>
      {/* <div className="card flex justify-content-center"> */}
      <span className="p-float-label">
        <InputText
          id={id}
          type={type}
          name={name}
          className={error ? "p-invalid" : undefined}
          value={value}
          disabled={idDisabled}
          onChange={(e) => setValue(e.target.value)}
          //   onBlur={handleBlur}
          //   onChange={handleChange}
        />
        <label htmlFor="username">{label}</label>
      </span>
      {error ? (
        <small className="p-error">{error}</small>
      ) : (
        <small className="p-error"></small>
      )}
      {/* </div> */}
    </>
  );
};
