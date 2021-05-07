import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

export const TextArea = ({ placeholder, title, type, value, onChange, name, rows }) => {
  return (
    <div className="textarea">
      <label>
        <span>{title}</span>
        <textarea type={type} placeholder={placeholder} value={value} onChange={onChange} name={name} rows={rows} />
      </label>
    </div>
  );
};

TextArea.propTypes = {
  placeholder: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

TextArea.defaultProps = {
  placeholder: "",
  title: "",
  type: "textarea",
  value: "",
  onChange: undefined,
  name: "",
};
