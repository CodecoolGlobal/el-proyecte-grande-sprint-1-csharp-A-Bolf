import React, { useState } from "react";
import CreateTicketButtons from "./CreateTicketButtons";
import Dropdown from "./Dropdown";
import { API_ENDPOINT } from "../App";
const options = ["TASK", "BUG", "REQUEST", "OTHER"];

const CreateTicket = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState(options[0]);
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("LOW");
  const [category, setCategory] = useState("new feature");
  const [assignee, setAssignee] = useState("user1");
  //super not sure about this date field as of right now so i'll refrain from using it
  const [date, setDate] = useState(new Date());
  const handleSubmit = (e) => {
    e.preventDefault();
    const ticket = {
      Id: (Math.random() * 99999) | 0,
      title,
      description,
      priority,
      category,
      type,
      AssigneeIDs: [(Math.random() * 100) | 0],
      CreatorID: (Math.random() * 100) | 0,
      DueDate: new Date(date),
      LastUpdatedDate: new Date(),
      CreatedDate: new Date(),
      //add date here
    };

    const tempURL = `${API_ENDPOINT}/api/ticket`;
    fetch(tempURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ticket),
    })
      .then(() => {
        console.log(JSON.stringify(ticket), " ADDED SUCCESSFULLY");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Add Issue</p>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <CreateTicketButtons />
          <Dropdown
            options={options}
            onChange={(e) => setType(e.target.value)}
          />
          <div className="text-container">
            <input
              type="text"
              id="issue-title"
              placeholder="Title"
              required
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <input
              type="text"
              id="issue-description"
              placeholder="Description"
              required
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="property-container">
            <p>Status: Open</p>
            <Dropdown
              label={"Priority"}
              options={["low", "medium", "high"]}
              onChange={(e) => setPriority(e.target.value)}
            />
            <Dropdown
              label={"Category"}
              options={["new feature", "bugfix"]}
              onChange={(e) => setCategory(e.target.value)}
            />
            <br />
            Date:
            <input
              type="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <Dropdown
              label={"Assignee"}
              options={["user1", "user2"]}
              onChange={(e) => setAssignee(e.target.value)}
            />
          </div>
          <CreateTicketButtons />
        </form>
      </div>
    </div>
  );
};

export default CreateTicket;
