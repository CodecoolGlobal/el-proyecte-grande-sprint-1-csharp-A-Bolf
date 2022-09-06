import { useState } from "react";
import Collapse from "@mui/material/Collapse";
import Login from "./Login/Login";
const LoginButton = () => {
  let [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? "Nevermind" : "Login"}
      </button>
      <Collapse in={open}>
        <Login />
      </Collapse>
    </>
  );
};
export default LoginButton;
