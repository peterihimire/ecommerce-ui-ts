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
      {labelText && (
        <label
          className={`label-wrapper ${labelClass ? labelClass : ""}`}
          htmlFor={id}
        >
          {labelText}
          {required && <span>*</span>}
        </label>
      )}

      {innerLabel && (
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
      )}

      {!innerLabel && (
        <div className={`input-wrapper ${wrapperClass ? wrapperClass : ""}`}>
          <div className="input-icon">
            <img src={iconSrc} alt="" />
          </div>

          {password && (
            <div className="pass-icon" onClick={reveal}>
              {passIcon}
            </div>
          )}
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
      )}
    </>
  );
};

export default Input;
