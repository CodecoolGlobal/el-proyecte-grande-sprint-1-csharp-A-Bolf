import React from "react";

const Dropdown = ({ label, options, toChange }) => {
  return (
    <>
      {label}
      <select
        onChange={(e) => {
          toChange(e.target.value);
        }}
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </>
  );
};

export default Dropdown;
