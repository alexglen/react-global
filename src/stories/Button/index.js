import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import "./styles.scss";

export const Button = ({ children, color, onClick, type }) => {
  const buttonClass = classnames("button", {
    "button-primary": color === "primary",
    "button-secondary": color === "secondary",
  });

  return (
    <button className={buttonClass} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

Button.defaultProps = {
  children: "",
  color: "",
  onClick: undefined,
  type: "",
};
