import { useEffect, useRef } from "react";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  Tooltip,
  Legend
);

const StudyChart = ({ activeData, goalData }) => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (!activeData || !goalData) return;

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(canvasRef.current, {
      type: "bar",
      data: {
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [
          {
            label: "Active",
            data: activeData,          
            backgroundColor: "#6CCDBF",
            barThickness: 22,
            borderRadius: 6,
          },
          {
            label: "Goal",
            data: goalData,           
            backgroundColor: "#D9D9D9",
            barThickness: 22,
            borderRadius: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { grid: { display: false } },
          y: {
            beginAtZero: true,
            ticks: {
              callback: (v) => v + "h",
            },
          },
        },
        plugins: {
          legend: {
            position: "right",
            labels: {
              usePointStyle: true,
              pointStyle: "circle",
            },
          },
        },
      },
    });

    return () => {
      chartRef.current?.destroy();    
    };
  }, [activeData, goalData]);         

  
  return (
    <canvas
      ref={canvasRef}                
      style={{ height: "260px", width: "100%" }}
    />
  );
};

export default StudyChart;
