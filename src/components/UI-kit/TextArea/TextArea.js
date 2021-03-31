import React from "react";
import "./TextArea.scss";

const TextArea = ({ placeholder, title, type, value, onChange, name }) => {
  return (
    <div className="textarea-component">
      <label>
        <span>{title}</span>
        <textarea type={type} placeholder={placeholder} value={value} onChange={onChange} name={name} rows="4" />
      </label>
    </div>
  );
};

export default TextArea;
