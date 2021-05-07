import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

export const Select = ({ title, options, name, value, onChange }) => {
  return (
    <div className="select">
      <label>
        <span>{title}</span>
        <select name={name} value={value} onChange={onChange}>
          {[...new Set(options)].map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

Select.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

Select.defaultProps = {
  title: "",
  options: [],
  value: "",
  onChange: undefined,
  name: "",
};
