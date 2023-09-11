import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import "./MDTVInput.scss";

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

/**
 * MIDTV Base Input
 */
export const MDTVInput: React.FC<MyInputProps> = ({
  label,
  type,
  id,
  name,
  error,
  idDisabled,
}): JSX.Element => {
  const [value, setValue] = useState("");

  return (
    <>
      <div className="input-container">
        <span className="p-float-label p-span">
          <InputText
            id={id}
            type={type}
            name={name}
            className={[
              "input-controls",
              error ? "p-invalid input-controls-error" : undefined,
            ].join(" ")}
            value={value}
            disabled={idDisabled}
            onChange={(e) => setValue(e.target.value)}
          />
          <label className="label-text">{label}</label>
        </span>
        {error ? (
          <small className="p-error small-error">{error}</small>
        ) : (
          <small className="p-error small-error"></small>
        )}
      </div>
    </>
  );
};
