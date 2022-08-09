import React, { useState } from "react";
import CreateTicketButtons from "./CreateTicketButtons";
import Dropdown from "./Dropdown";
const options = ["Task", "Bug", "Feature Request"];

const CreateTicket = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState(options[0]);
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("normal");
  const [category, setCategory] = useState("new feature");
  const [assignee, setAssignee] = useState("user1");
  //super not sure about this date field as of right now so i'll refrain from using it
  const [date, setDate] = useState(new Date());
  const handleSubmit = (e) => {
    e.preventDefault();
    const ticket = {
      type,
      title,
      description,
      priority,
      category,
      assignee,
      //add date here
    };
    const tempURL = "/api/ticket/add";
    fetch(tempURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ticket),
    }).then(() => {
      console.log("new Ticket Added!");
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
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
          <div className="text-container">
            <input
              type="text"
              id="issue-title"
              placeholder="Title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <input
              type="text"
              id="issue-description"
              placeholder="Description"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="property-container">
            <p>Status: Open</p>
            <Dropdown
              label={"Priority"}
              options={["normal", "high"]}
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            />
            <Dropdown
              label={"Category"}
              options={["new feature", "bugfix"]}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <br />
            Date:
            <input
              type="Date"
              //add date hook here
            />
            <Dropdown
              label={"Assignee"}
              options={["user1", "user2"]}
              value={assignee}
              onChange={(e) => setAssignee(e.target.value)}
            />
            <button>{title} or NOTHING</button>
          </div>
          <CreateTicketButtons />
        </form>
      </div>
    </div>
  );
};

export default CreateTicket;
