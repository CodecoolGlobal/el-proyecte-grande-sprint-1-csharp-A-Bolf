import Layout from "./components/Layout";
import Dashboard from "./components/DashBoard";
import CreateTicket from "./components/CreateTicket";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { options, ChartData } from "./components/StackedBarChart";
import axios from "axios";
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
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
    axios.get(`${API_ENDPOINT}/api/ticket/updates`).then((res) => {
      setUpdates(res.data);
    });
    axios.get(`${API_ENDPOINT}/api/ticket/statuscounts`).then((res) => {
      setStatusData(res.data);
      ChartData.datasets[0].data = [res.data.OPEN];
      ChartData.datasets[1].data = [res.data.CLOSED];
      ChartData.datasets[2].data = [res.data.IN_PROGRESS];
      ChartData.datasets[3].data = [res.data.RESOLVED];
      options.scales.x.max = CalcTotalTicketCount(res.data);
      setIsLoading(false);
    });
  };
  const [isLoading, setIsLoading] = useState(true);
  const [StatusData, setStatusData] = useState([]);
  const [Updates, setUpdates] = useState([]);
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
          <Route path="dashboard" element={<Dashboard updates={Updates} />} />
          <Route path="add-issue" element={<CreateTicket />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
