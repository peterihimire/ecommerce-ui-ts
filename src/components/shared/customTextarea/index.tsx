import React from "react";
import { CustomTextareaProps } from "../../../types/types";

const Textarea: React.FC<CustomTextareaProps> = ({
  labelText,
  labelClass,
  children,
  id,
  required,
  clicked,
  iconSrc,
  optionalText,
  wrapperClass,
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
          {labelText} {required && <span>*</span>}
        </label>
      )}
      <div className={`textarea-wrapper ${wrapperClass ? wrapperClass : ""}`}>
        <div className="input-icon">
          <img src={iconSrc} alt="" />
        </div>
        <textarea
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          {...props}
          id={id}
          required={required}
        ></textarea>
      </div>
    </>
  );
};

export default Textarea;
