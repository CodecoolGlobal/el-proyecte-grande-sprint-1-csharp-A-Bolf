import React from "react";

const CreateTicketButtons = ({ PreviewOnClick, AddOnClick }) => {
  return (
    <>
      <button
        className="btn btn-primary create-ticket-button preview-button"
        onClick={PreviewOnClick}
      >
        Preview
      </button>
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
