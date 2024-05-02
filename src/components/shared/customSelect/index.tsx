import React from "react";
import { CustomSelectProps } from "../../../types/types";

const Select: React.FC<CustomSelectProps> = ({
  labelText,
  children,
  id,
  required,
  wrapClass,
  sort,
  ...props
}) => {
  return (
    <>
      {labelText && (
        <label htmlFor={id}>
          {labelText} {required && <span>*</span>}
        </label>
      )}
      <div
        className={`select-wrapper ${wrapClass ? wrapClass : ""} ${
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
