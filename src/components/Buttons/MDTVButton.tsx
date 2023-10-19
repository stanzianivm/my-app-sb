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
  /** What background color to use */
  primary?: "primary" | "secondary" | "disabled" | "link";
  /**How large should the button be? */
  size?: "small" | "medium" | "large";
  /** The action to execute when the click is triggered. */
  onClick?: () => void;
}

/**
 * MIDTV Base Button
 */
export const MDTVButton: React.FC<MyButtonProps> = ({
  primary,
  isDisabled,
  isLink,
  isLoading,
  label,
  onClick,
  size = "medium",
}): JSX.Element => {
  const mode = () => {
    switch (primary) {
      case "primary":
        return "mdtv-button-primary";
      case "secondary":
        return "mdtv-button-secondary";
      case "disabled":
        return "mdtv-button-disabled";
      case "link":
        return "mdtv-button-link";
    }
  };

  return (
    <>
      <PrimeButton
        disabled={isDisabled}
        label={label}
        link={isLink}
        loading={isLoading}
        onClick={onClick}
        className={[`mdtv-button-${size}`, mode()].join(" ")}
      />
    </>
  );
};
