import React, { useState, useEffect } from 'react'
import PieChart from '../../homeComponents/PieChart';

const LoansRequestPerformance = ({ loansPerformance }) => {

    const pieChartDataset = {
        labels: ["Pending", "Approved", "Declined"],
        datasets: [
          {
            labels: "Loans Request Performance",
            data: loansPerformance,
            backgroundColor: ["#DA9D62", "#1CAA43", "#E93B3B", '#1B49FF'],
          },
        ],
      };
    
      const [pieData, setPieData] = useState(pieChartDataset);
    
      const [pieOptions, setPieOptions] = useState({
        plugins: {
          legend: {
            display: false,
          },
        },
      });
    
      const setData = () => {
        setPieData(pieChartDataset);
      };
    
      useEffect(() => {
        setData();
      }, [loansPerformance]);
  return (
    // <div>
      <PieChart chartData={pieData} chartOptions={pieOptions} />
    // {/* </div> */}
  )
}

export default LoansRequestPerformance

