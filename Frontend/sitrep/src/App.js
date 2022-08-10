import Layout from "./components/Layout";
import Dashboard from "./components/DashBoard";
import CreateTicket from "./components/CreateTicket";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { options } from "./components/StackedBarChart";
import axios from "axios";
function App() {
  function CalcTotalTicketCount(StatusData) {
    return (
      StatusData.OPEN +
      StatusData.CLOSED +
      StatusData.IN_PROGRESS +
      StatusData.RESOLVED
    );
  }

  const fetchOnLoad = async () => {
    axios.get("https://localhost:7003/api/ticket/statuscounts").then((res) => {
      setStatusData(res.data);
      setIsLoading(false);
      console.log(res.data);
      options.scales.x.max = CalcTotalTicketCount(res.data);
    });
  };
  const [isLoading, setIsLoading] = useState(true);
  const [StatusData, setStatusData] = useState([]);
  const [Updates, setUpdates] = useState([
    { id: 1, issue: "Issue1", time_ago: "5 mins" },
    { id: 2, issue: "Issue2", time_ago: "5 mins" },
    { id: 3, issue: "Issue3", time_ago: "5 mins" },
  ]);
  useEffect(() => {
    fetchOnLoad();
  }, []);
  if (isLoading) {
    return <div className="load-screen">Loading...</div>;
  }
  return (
    <div className="app">
      <Routes>
        <Route path="app/*" element={<Layout />}>
          <Route
            path="dashboard"
            element={<Dashboard updates={Updates} StatusData={StatusData} />}
          />
          <Route path="add-issue" element={<CreateTicket />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
