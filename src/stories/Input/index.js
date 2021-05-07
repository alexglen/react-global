import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import "./styles.scss";

export const Input = ({ placeholder, title, type, value, onChange, name, size = "medium" }) => {
  const inputClass = classnames("input", {
    small: size === "small",
    medium: size === "medium",
    large: size === "large",
  });

  return (
    <div className={inputClass}>
      <label>
        <span>{title}</span>
        <input type={type} placeholder={placeholder} value={value} onChange={onChange} name={name} />
      </label>
    </div>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

Input.defaultProps = {
  placeholder: "",
  title: "",
  type: "",
  value: "",
  onChange: undefined,
  name: "",
  size: "",
};
