import { Button as PrimeButton } from "primereact/button";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

import "./MyButton.css";
import { MyComponentProps } from "../Component.interface";

export interface MyButtonProps extends MyComponentProps {
  /** The label to assign on button. */
  label: string;
  /** The action to execute when the click is triggered. */
  onClick: () => void;
}

/**
 * MyDTV Base Button
 */
export const MyButton: React.FC<MyButtonProps> = ({
  testId = "mydtv-button",
  ...props
}): JSX.Element => {
  return (
    <PrimeButton
      test-id={testId}
      label={props.label}
      onClick={props.onClick}
      className={"mdtv-button " + props.additionalClassName}
    />
  );
};
