import React from "react";

const Button = ({ type, onHandle, className, style, children }) => {
  console.log("Button Click - ");
  //submit, button, reset
  return (
    <button type={type} onClick={onHandle} className={className} style={style}>
      {children}
    </button>
  );
};

export default Button;
