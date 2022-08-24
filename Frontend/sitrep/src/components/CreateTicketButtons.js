import React from "react";
import TicketPreview from "./Modal/TicketPreview";
import { useState } from "react";
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
    opacity: "0.9",
    backgroundColor: "black",
  };
  const hideModalStyle = {
    display: "none",
  };
  const handleClose = () => {
    setShowmodal(false);
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-primary create-ticket-button preview-button"
        onClick={() => setShowmodal(!showmodal)}
      >
        Preview
      </button>
      <div
        className="modalContainer"
        style={showmodal ? showModalStyle : hideModalStyle}
      >
        <div style={modalStyle}>
          {" "}
          <TicketPreview onClose={handleClose} update={Ticket} />
        </div>
      </div>
      <button
        className="btn btn-primary create-ticket-button add-button"
        onClick={AddOnClick}
      >
        Add
      </button>
    </>
  );
};

export default CreateTicketButtons;
