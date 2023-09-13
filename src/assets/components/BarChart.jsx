import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const BarChart = ({chartTitle}) =>{
    const top = 'top'
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: top,
          },
          title: {
            display: true,
            text: chartTitle,
          },
        },
      };
      const data = {
        labels,
        datasets: [
          {
            label: 'Course Purchases',
            data: [3, 6, 8, 10, 18 , 19, 10 , 10 , 14, 145, 90, 19],
            backgroundColor: 'blue',
          },
        ],
      };
      console.log(data)
    return(
      <Bar
      data={data}
      options={options}
      >

      </Bar>
    )
}







export function App() {
  return <Bar options={options} data={data} />;
}
