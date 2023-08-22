import React from "react";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { Button as PrimeButton } from "primereact/button";
import "./MyButton.scss";
import { MyComponentProps } from "../Component.interface";

export interface MyButtonProps extends MyComponentProps {
  /** The label to assign on button. */
  label?: string;
  /** Boolean property to disable a button when click is triggered */
  isLoading: boolean;
  /** Boolean property to disable a button */
  isDisabled: boolean;
  /** What background color to usex */
  background?: string;
  /** The action to execute when the click is triggered. */
  onClick: () => void;
}

/**
 * MIDTV Base Button disabled
 */
export const MyButton: React.FC<MyButtonProps> = ({
  label,
  onClick,
  isLoading,
  isDisabled,
  background,
}): JSX.Element => {
  return (
    <>
      <PrimeButton
        disabled={isDisabled}
        loading={isLoading}
        label={label}
        onClick={onClick}
        className={`mdtv-button ${background}`}
      />
    </>
  );
};
