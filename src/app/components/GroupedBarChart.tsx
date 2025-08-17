'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [35, 5, 15, 15, 10, 35, 22, 22, 35],
      backgroundColor: '#4545FE',
      barThickness: 4
    },
    {
        label: 'Dataset 2',
        data: [25, 25, 7, 23, 5, 48, 38, 8, 33],
        backgroundColor: '#12B76A',
        barThickness: 4
    },
    {
        label: 'Dataset 3',
        data: [9, 9, 13, 10, 8, 8, 18, 18, 8],
        backgroundColor: '#F04438',
        barThickness: 4
    }
  ]
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    }
  },
  scales: {
  x: {
    barPercentage: 0.3,
    grid: {
      display: false
    },
  },
  y: {
    grid: {
      display: false
    },
    ticks: {
        callback: function (value: number | string) {
          return value + 'm';
        },
      },
  }
}
};

export default function GroupedBarChart() {
  return <Bar data={data} options={options} />;
}
