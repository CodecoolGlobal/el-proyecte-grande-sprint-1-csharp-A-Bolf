import React from "react";
import { Bar } from "react-chartjs-2";
import { options } from "./StackedBarChart";

const TicketStatusChart = ({ StatusData }) => {
  const chartData = {
    labels: [""],
    datasets: [
      {
        stack: "Stack 0",
        backgroundColor: ["#18de41"],
        label: "Open",
        data: [StatusData.OPEN],
      },
      {
        stack: "Stack 0",
        label: "Closed",
        backgroundColor: ["#238fde"],
        data: [StatusData.CLOSED],
      },
      {
        stack: "Stack 0",
        label: "In Progress",
        backgroundColor: ["#D73A4A"],
        data: [StatusData.IN_PROGRESS],
      },
      {
        stack: "Stack 0",
        label: "Resolved",
        backgroundColor: ["#A371F7"],
        data: [StatusData.RESOLVED],
      },
    ],
  };
  return (
    <div className="chart-container">
      <Bar
        style={{ width: "60vh", height: "13vh" }}
        data={chartData}
        options={options}
      />
    </div>
  );
};

export default TicketStatusChart;
