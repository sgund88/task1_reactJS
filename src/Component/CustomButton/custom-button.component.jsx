import React from "react";
import "./custom-button.styles.css";

const CustomButton = ({
  children,
  buttonEnable,
  buttonDisable,
  title,
  ...otherProps
}) => (
  <button
    className={`${
      (buttonEnable ? "button-enable" : "") ||
      (buttonDisable ? "button-disable" : "")
    } custom-button`}
    {...otherProps}
  >
    {children}
    {title}
  </button>
);

export default CustomButton;
