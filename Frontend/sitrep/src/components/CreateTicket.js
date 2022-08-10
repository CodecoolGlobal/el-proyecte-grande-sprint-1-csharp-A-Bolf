import React from "react";
import CreateTicketButtons from "./CreateTicketButtons";
import Dropdown from "./Dropdown";
const options = ["Task", "Bug", "Feature Request"];
const CreateTicket = () => {
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Add Issue</p>
      <CreateTicketButtons />
      <Dropdown options={options} />
      <div className="form-container">
        <div className="text-container">
          <input type="text" id="issue-title" placeholder="Title" />
          <br />
          <input id="issue-description" placeholder="Description" />
        </div>

        <div className="property-container">
          <p>Status: Open</p>
          <Dropdown label={"Priority"} options={["normal", "high"]} />
          <Dropdown label={"Category"} options={["new feature", "bugfix"]} />
          <br />
          Date:
          <input type="Date" />
          <Dropdown label={"Assignee"} options={["user1", "user2"]} />
        </div>
      </div>
      <CreateTicketButtons />
    </div>
  );
};

export default CreateTicket;
