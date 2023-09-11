import React from "react";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { Button as PrimeButton } from "primereact/button";
import "./MDTVButton.scss";
// import { MyComponentProps } from "../Component.interface";

import "../../styles/mdtv.scss";

export interface MyButtonProps {
  /** The label to assign on button. */
  label?: string;
  /** Boolean property to disable a button when click is triggered */
  isLoading: boolean;
  /** Boolean property to disable a button */
  isDisabled: boolean;
  /** Boolean property for the button to be of type link*/
  isLink?: boolean;
  /** What class to different buttons */
  className?: string;
  /** The action to execute when the click is triggered. */
  onClick?: () => void;
}

/**
 * MIDTV Base Button
 */
export const MDTVButton: React.FC<MyButtonProps> = ({
  label,
  onClick,
  isLoading,
  isDisabled,
  isLink,
  className,
}): JSX.Element => {
  return (
    <>
      <PrimeButton
        disabled={isDisabled}
        loading={isLoading}
        label={label}
        onClick={onClick}
        className={`mdtv-button-${className}`}
        link={isLink}
      />
    </>
  );
};
