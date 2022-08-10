import React from "react";

const Dropdown = ({ label, options }) => {
  return (
    <>
      {label}
      <select>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </>
  );
};

export default Dropdown;
