import React from "react";
import { CustomTextareaProps } from "../../../types/types";

const Textarea: React.FC<CustomTextareaProps> = ({
  labelText,
  children,
  id,
  required,
  clicked,
  iconSrc,
  optionalText,
  wrapperClass,
  onBlur,
  onChange,
  ...props
}) => {
  return (
    <>
      {labelText && (
        <label htmlFor={id}>
          {labelText} {required && <span>*</span>}
        </label>
      )}
      <div className={`textarea-wrapper ${wrapperClass ? wrapperClass : ""}`}>
        <div className="input-icon">
          <img src={iconSrc} alt="" />
        </div>
        <textarea {...props} id={id} required={required}></textarea>
      </div>
    </>
  );
};

export default Textarea;
