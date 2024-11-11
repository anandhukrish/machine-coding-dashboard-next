"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { ChartData } from "@/lib/types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
    },
    tooltip: {
      callbacks: {
        label: (context: any) => {
          let label = context.dataset.label || "";
          if (label) {
            label += ": ";
          }
          if (context.parsed.y !== null) {
            label += `$${context.parsed.y}k`;
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
        color: "rgba(0, 0, 0, 0.1)",
      },
      ticks: {
        callback: (value: number | string) => `$${value}k`,
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June"];

const data: ChartData = {
  labels,
  datasets: [
    {
      label: "Monthly Sales",
      data: [400, 300, 600, 800, 500, 700],
      backgroundColor: "#add8e6",
    },
  ],
};

const BarChart = () => {
  return (
    <div className="h-[350px]">
      <Bar options={options} data={data} />
    </div>
  );
};

export default BarChart;
