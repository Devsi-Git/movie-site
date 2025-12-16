"use client";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

export default function MyLineChart({
  year,
  rateAvg,
  likedYears,
}: {
  rateAvg: number[];
  year: number[];
  likedYears: number[];
}) {
  const data = {
    labels: year,
    datasets: [
      {
        label: "Like",
        data: likedYears,
        borderColor: "#ff3333",
        borderWidth: 1,
        tension: 0.4,
        pointBackgroundColor: "black",
      },
      {
        label: "rate",
        borderWidth: 1,
        data: rateAvg,
        pointBackgroundColor: "black",
        borderColor: "#f5d835",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    scales: {
      x: {
        grid: {
          display: true,
          color: "#383838",
        },
      },
      y: {
        title: {
          display: true,
          text: "film rate VS your likes",
        },
        grid: {
          display: true,
          color: "#383838",
        },
      },
    },
  };

  return (
    <div className="w-90 max-[531px]:w-80 max-[531px]:h-55 max-[426px]:h-50 max-[426px]:w-70 h-60">
      <Line data={data} options={options} />
    </div>
  );
}
