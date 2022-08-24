import React from "react";
import TicketPreview from "./Modal/TicketPreview";
import { useState } from "react";
import { Button } from "@mui/material";
const CreateTicketButtons = ({ AddOnClick, Ticket }) => {
  const [showmodal, setShowmodal] = useState(false);
  const modalStyle = {
    top: "50%",
    left: "50%",
    width: "30%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    opacity: "1",
  };
  const showModalStyle = {
    top: "0",
    left: "0",
    position: "fixed",
    height: "100vh",
    width: "100vw",
    opacity: "0.8",
    backgroundColor: "black",
    zIndex: "99",
  };
  const hideModalStyle = {
    display: "none",
  };
  const handleClose = () => {
    setShowmodal(false);
  };
  return (
    <>
      <Button
        variant="outlined"
        type="button"
        className="create-ticket-button preview-button"
        onClick={() => setShowmodal(!showmodal)}
      >
        Preview
      </Button>
      <div
        className="modalContainer"
        style={showmodal ? showModalStyle : hideModalStyle}
      >
        <div style={modalStyle}>
          <TicketPreview onClose={handleClose} update={Ticket} />
        </div>
      </div>
      <Button
        variant="contained"
        className="create-ticket-button add-button"
        onClick={AddOnClick}
      >
        Add
      </Button>
    </>
  );
};

export default CreateTicketButtons;
