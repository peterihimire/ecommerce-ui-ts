import React from "react";

const Select = ({
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
          {labelText}{" "}
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
