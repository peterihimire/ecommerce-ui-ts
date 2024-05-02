import React from "react";
import { CustomInputProps } from "../../../types/types";
const Input: React.FC<CustomInputProps> = ({
  id,
  innerLabel,
  wrapperClass,
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
  ...props
}) => {
  return (
    <>
      {labelText && (
        <label htmlFor={id}>
          {labelText}
          {required && <span>*</span>}
        </label>
      )}

      {innerLabel && (
        <div className={`input-wrapper ${wrapperClass ? wrapperClass : ""}`}>
          <input {...props} id={id} required={required} />
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
          <input {...props} id={id} required={required} />
        </div>
      )}
    </>
  );
};

export default Input;
