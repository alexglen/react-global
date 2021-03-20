import React from "react";
import "./Input.scss";

const Input = ({ placeholder, title, type, value, onChange, name }) => {
  return (
    <div className="input-component">
      <label>
        <span>{title}</span>
        <input type={type} placeholder={placeholder} value={value} onChange={onChange} name={name} required />
      </label>
    </div>
  );
};

export default Input;
