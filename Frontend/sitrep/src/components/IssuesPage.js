import React from "react";
import TicketTable from "./TicketTable";

const IssuesPage = ({ tickets }) => {
  return (
    <>
      <TicketTable tickets={tickets} />
    </>
  );
};

export default IssuesPage;
