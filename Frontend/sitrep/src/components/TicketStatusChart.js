import React from "react";
import { Bar } from "react-chartjs-2";
import { options, ChartData } from "./StackedBarChart";

const TicketStatusChart = () => {
  return (
    <div className="chart-container">
      <Bar
        style={{ width: "60vh", height: "13vh" }}
        data={ChartData}
        options={options}
      />
    </div>
  );
};

export default TicketStatusChart;
