import React from "react";
import { CustomSelectProps } from "../../../types/types";

const Select: React.FC<CustomSelectProps> = ({
  sort,

  id,
  innerLabel,
  wrapperClass,
  labelClass,
  labelText,
  optionalText,
  children,
  required,
  clicked,
  reveal,
  iconSrc,

  password,
  onBlur,
  onChange,
  placeholder,
  name,
  type,
  value,
  ...props
}) => {
  return (
    <>
      {labelText && (
        <label
          className={`label-wrapper ${labelClass ? labelClass : ""}`}
          htmlFor={id}
        >
          {labelText}
          {required && <span>*</span>}
        </label>
      )}
      <div
        className={`select-wrapper ${wrapperClass ? wrapperClass : ""} ${
          sort ? "sort" : ""
        }`}
      >
        <select {...props} id={id} required={required}>
          {children}
        </select>
      </div>
    </>
  );
};

export default Select;
