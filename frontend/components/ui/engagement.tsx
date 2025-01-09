// components/EngagementChart.tsx
"use client"

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = [
  { post_id: 1, type: 'carousel', likes: 120, shares: 30, comments: 20 },
  { post_id: 2, type: 'reel', likes: 300, shares: 50, comments: 80 },
  { post_id: 3, type: 'static', likes: 90, shares: 10, comments: 5 },
  { post_id: 4, type: 'reel', likes: 20, shares: 10, comments: 5 },
  { post_id: 5, type: 'reel', likes: 20, shares: 50, comments: 10 },
  { post_id: 6, type: 'static', likes: 400, shares: 50, comments: 10 },
];

const EngagementChart = () => {
  const chartData = {
    labels: data.map(item => `Post ${item.post_id}`), // X-axis: Post IDs
    datasets: [
      {
        label: 'Likes',
        data: data.map(item => item.likes),
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
      {
        label: 'Shares',
        data: data.map(item => item.shares),
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
      },
      {
        label: 'Comments',
        data: data.map(item => item.comments),
        backgroundColor: 'rgba(255, 159, 64, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Ensure the chart doesn't stretch disproportionately
  };

  return (
    <div style={{ width: '70%', height: '400px', margin: '0 auto' }}>
      <h2>Engagement Bar Chart</h2>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default EngagementChart;
