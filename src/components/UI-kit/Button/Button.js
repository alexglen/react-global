import React from "react";
import classnames from "classnames";
import "./Button.scss";

const Button = ({ children, type, onClick }) => {
  const buttonClass = classnames("button", {
    "button-primary": type === "primary",
    "button-secondary": type === "secondary"
  });

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
