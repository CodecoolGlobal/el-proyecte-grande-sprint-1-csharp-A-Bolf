import React from "react";
import TicketCard from "../TicketCard";

export default function TicketPreview({ update, onClose }) {
  update.status = "Open";
  return (
    <p>
      <TicketCard isInModal={true} closeModal={onClose} update={update} />
    </p>
  );
}
