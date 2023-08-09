import React, { useState } from "react";
import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";

const Input = ({
  innerLabel,
  wrapperClass,
  labelText,
  optionalText,
  children,
  id,
  required,
  clicked,
  reveal,
  iconSrc,
  passIcon,
  password,
  ...props
}) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };
  return (
    <>
      {/* {labelText && <label htmlFor={id}>{labelText}</label>} */}
      {/* {labelText && (
        <div className="label-wrapper">
          <label htmlFor={id}>
            {labelText}
            <span>*</span>
          </label>
          <p>{optionalText}</p>
        </div>
      )} */}

      {labelText && (
        <label htmlFor={id}>
          {labelText}
          {required && (
            <span
              // style={{
              //   color: "#ff8662",
              //   marginLeft: "3px",
              //   verticalAlign: "middle",
              // }}
            >
              *
            </span>
          )}
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
            <div
              className="pass-icon"
              // onClick={() => toggleVisibility()}
              onClick={reveal}
            >
              {/* {visible ? <Visibility /> : <VisibilityOff />} */}
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
