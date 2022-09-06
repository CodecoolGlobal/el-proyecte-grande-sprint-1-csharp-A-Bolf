import React from "react";
import TicketPreview from "./Modal/TicketPreview";
import { useState } from "react";
import { Button } from "@mui/material";
const CreateTicketButtons = ({ AddOnClick, Ticket }) => {
  const [showmodal, setShowmodal] = useState(false);
  const modalStyle = {
    top: "50%",
    left: "50%",
    maxWidth: "40vw",
    maxHeight: "40vh",
    transform: "translate(-50%, -50%)",
    position: "fixed",
    opacity: "1",
    zIndex: "100",
    overflow: "hidden",
  };
  const showModalBackgroundStyle = {
    top: "0",
    left: "0",
    position: "fixed",
    height: "100vh",
    width: "100vw",
    opacity: "0.9",
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
        style={showmodal ? showModalBackgroundStyle : hideModalStyle}
      ></div>
      <div style={showmodal ? modalStyle : hideModalStyle}>
        <TicketPreview onClose={handleClose} update={Ticket} />
      </div>

      <Button
        type="submit"
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
