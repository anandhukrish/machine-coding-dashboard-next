"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  TooltipItem,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { ChartData } from "@/lib/types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
    },
    tooltip: {
      mode: "index" as const,
      intersect: false,
      callbacks: {
        label: (context: TooltipItem<"line">) => {
          let label = context.dataset.label || "";
          if (label) {
            label += ": ";
          }
          if (context.parsed.y !== null) {
            label += `${context.parsed.y}k users`;
          }
          return label;
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        color: "#add8e6",
      },
      ticks: {
        callback: (value: number | string) => `${value}k`,
      },
    },
  },
  interaction: {
    mode: "nearest" as const,
    axis: "x" as const,
    intersect: false,
  },
};

const getDayLabel = (daysAgo: number): string => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return `Day ${7 - daysAgo}`;
};

const labels = Array.from({ length: 7 }, (_, i) => getDayLabel(6 - i));

const data: ChartData = {
  labels,
  datasets: [
    {
      label: "Active Users",
      data: [2.5, 3.2, 4.0, 3.8, 4.5, 5.2, 4.8],
      borderColor: "#add8e6",
      tension: 0.4,
      pointRadius: 4,
      pointHoverRadius: 6,
      pointBackgroundColor: "#add8e6",
      pointBorderColor: "white",
      pointBorderWidth: 2,
    },
  ],
};

export default function LineChart() {
  return (
    <div className="h-[300px]">
      <Line options={options} data={data} />
    </div>
  );
}
