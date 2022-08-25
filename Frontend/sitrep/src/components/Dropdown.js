import React from "react";
import { Select, MenuItem } from "@mui/material";

const Dropdown = ({ label, options, toChange }) => {
  return (
    <>
      {label}
      <Select
        autoWidth
        defaultValue={options[0]}
        onChange={(e) => {
          toChange(e.target.value);
        }}
      >
        {options.map((option) => (
          <MenuItem value={option}>{option}</MenuItem>
        ))}
      </Select>
    </>
  );
};

export default Dropdown;
