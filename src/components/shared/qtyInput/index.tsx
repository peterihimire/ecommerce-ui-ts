import React from "react";
import { CustomInputProps } from "../../../types/types";
const Input: React.FC<CustomInputProps> = ({
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
  passIcon,
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
      {/* {innerLabel && (
        <div className={`input-wrapper ${wrapperClass ? wrapperClass : ""}`}>
          <input
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            type={type}
            onBlur={onBlur}
            {...props}
            id={id}
            required={required}
          />
          <label htmlFor={id} onClick={clicked}>
            {children}
          </label>
        </div>
      )} */}

      <div className={`input-qty-wrapper ${wrapperClass ? wrapperClass : ""}`}>
        <input
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          type={type}
          onBlur={onBlur}
          {...props}
          id={id}
          required={required}
        />
      </div>
    </>
  );
};

export default Input;
