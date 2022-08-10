import Layout from "./components/Layout";
import Dashboard from "./components/DashBoard";
import CreateTicket from "./components/CreateTicket";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [Updates, setUpdates] = useState([
    { id: 1, issue: "Issue1", time_ago: "5 mins" },
    {
      id: 2,
      issue: "Issue2",
      time_ago: "5 mins",
    },
    {
      id: 3,
      issue: "Issue3",
      time_ago: "5 mins",
    },
  ]);
  return (
    <div className="app">
      <Routes>
        <Route path="app/*" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard updates={Updates} />} />
          <Route path="add-issue" element={<CreateTicket />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
