import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const ChartData = {
  labels: [""],
  datasets: [
    {
      stack: "Stack 0",
      backgroundColor: ["#18de41"],
      label: "Open",
      data: [],
    },
    {
      stack: "Stack 0",
      label: "Closed",
      backgroundColor: ["#238fde"],
      data: [],
    },
    {
      stack: "Stack 0",
      label: "In Progress",
      backgroundColor: ["#D73A4A"],
      data: [],
    },
    {
      stack: "Stack 0",
      label: "Resolved",
      backgroundColor: ["#A371F7"],
      data: [],
    },
  ],
};

export const options = {
  tooltips: { enabled: false },
  hover: { mode: null },
  indexAxis: "y",
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    title: {
      display: true,
      text: "Ticket Status Ratio",
      color: "#343a40",
    },
  },
  responsive: true,
  interaction: {
    mode: "point",
    intersect: true,
  },
  scales: {
    x: {
      stacked: true,
      orientation: "horizontal",
      ticks: { color: "#343a40" },
      maxStepSize: 1,
      stepSize: 1,
    },
    y: {
      ticks: { color: "#343a40" },
      stacked: true,
      orientation: "horizontal",
      stepSize: 1,
    },
  },
};
