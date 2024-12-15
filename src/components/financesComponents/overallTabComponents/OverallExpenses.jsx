import React, {useState} from 'react'
import PieChart from '../../homeComponents/PieChart';

const OverallExpenses = () => {
    const pieChartDataset = {
        labels: ["Loans", "Commission", "System charges/updates", "Others"],
        datasets: [
          {
            labels: "Expenses",
            data: [100000, 300000, 400000, 200000],
            backgroundColor: ["#1B49FF", "#2BB2FE", "#F9C80E", "#1EA06A"],
          },
        ],
      };
    
    
      const [pieOptions, setPieOptions] = useState({
        plugins: {
          legend: {
            display: false,
          },
        },
      });
  return (
    <div>
        <PieChart chartData={pieChartDataset} chartOptions={pieOptions} />
    </div>
  )
}

export default OverallExpenses
