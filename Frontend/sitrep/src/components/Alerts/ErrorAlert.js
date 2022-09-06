import * as React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

export default function ErrorAlert({ text, open }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={open}>
        <Alert severity="error" sx={{ mb: 2 }}>
          {text}
        </Alert>
      </Collapse>
    </Box>
  );
}