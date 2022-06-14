import React from "react";
import "../style/InputField.css";

const InputField = ({ handleSearch }) => {
  return (
    <div className="input-wrapper">
      <input
        className="search"
        placeholder="Search..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default InputField;
