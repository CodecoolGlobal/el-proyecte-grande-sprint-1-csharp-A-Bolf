import React from "react";
import { Bar } from "react-chartjs-2";
import { options } from "./StackedBarChart";

const TicketStatusChart = ({ StatusCounts }) => {
  if (!StatusCounts) {
    return <div>Chart Loading...</div>;
  }
  const ChartData = {
    labels: [""],
    datasets: [
      {
        stack: "Stack 0",
        backgroundColor: ["#18de41"],
        label: "Open",
        data: [StatusCounts.OPEN],
      },
      {
        stack: "Stack 0",
        label: "Closed",
        backgroundColor: ["#238fde"],
        data: [StatusCounts.CLOSED],
      },
      {
        stack: "Stack 0",
        label: "In Progress",
        backgroundColor: ["#D73A4A"],
        data: [StatusCounts.IN_PROGRESS],
      },
      {
        stack: "Stack 0",
        label: "Resolved",
        backgroundColor: ["#A371F7"],
        data: [StatusCounts.RESOLVED],
      },
    ],
  };
  return (
    <div className="chart-container" style={{ width: "25vw", height: "13vh" }}>
      <Bar data={ChartData} options={options} />
    </div>
  );
};

export default TicketStatusChart;
