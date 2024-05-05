import React from "react";
import { CustomCheckboxProps } from "../../../types/types";

const Checkbox: React.FC<CustomCheckboxProps> = ({
  labelText,
  children,
  id,
  required,
  clicked,
  checkText,
  wrapperClass,
  htmlFor,
  // remember this below goes inside on the label classname
  //  form-control--disabled
  ...props
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`checkbox-wrapper ${wrapperClass ? wrapperClass : ""}`}
    >
      <input type="checkbox" {...props} id={id} required={required} />
      <span>{checkText}</span>
    </label>
  );
};

export default Checkbox;
