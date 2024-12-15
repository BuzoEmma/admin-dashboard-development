import React, { useState, useEffect } from 'react'
import PieChart from '../../homeComponents/PieChart'

const TenantsFinancePerfomance = ({ finance }) => {

    const pieChartDataset = {
        labels: ["Paid Rent", "Owe Rent", "Saving", "Up-to-date"],
        datasets: [
          {
            labels: "Tenants Finance Performance",
            data: [finance?.paidRent?.amount, finance?.oweRent?.amount, finance?.tenantSaving?.amount, finance?.upToDate?.amount],
            backgroundColor: ["#1CAA43", "#E93B3B", "#FFDB1B", "#1B49FF"],
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
      }, [finance]);
  return (
    <div>
      <PieChart chartData={pieData} chartOptions={pieOptions} />
    </div>
  )
}

export default TenantsFinancePerfomance
