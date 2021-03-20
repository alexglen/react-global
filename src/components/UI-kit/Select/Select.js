import React from "react";
import "./Select.scss";

const Select = ({ title, options, name, value, onChange }) => {
  return (
    <div className="select-component">
      <label>
        <span>{title}</span>
        <select name={name} value={value} onChange={onChange}>
          {options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Select;
