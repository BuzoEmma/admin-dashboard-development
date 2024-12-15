import React, { useState, useEffect } from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import OfflinePerformanceLabel from './OfflinePerformanceLabel'


const OfflineTransactionPerformance = ({data}) => {

    const approved = data?.filter(transaction => (
      transaction?.isVerified === true && transaction?.isDenied === false
    ))

    const pending = data?.filter(transaction => (
      transaction?.isVerified === false && transaction?.isDenied === false
    ))

    const declined = data?.filter(transaction => (
      transaction?.isVerified === false && transaction?.isDenied === true
    ))

    const pieChartDataset = {
        labels: ["Pending", "Approved", "Declined"],
        datasets: [
          {
            labels: "Offline Transaction Performance",
            data: [pending?.length, approved?.length, declined?.length],
            backgroundColor: ["#DA9D62", "#1CAA43", "#E93B3B"],
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
    // checkStatus();
    setData();
  }, [])
    
  return (
    <div className="chart-area">
      <div className="chart-area_item flex justify-between items-center">
        <div className=''>
          <h3 className='mb-5 font-bold'>Offline Transaction Performance</h3>
          <div className='piechart'>
            <div className=' z-0'>
              <Pie data={pieChartDataset} options={pieOptions} />
            </div>
            <div className="home-piechart-center">
                <div className='absolute' style={{width: '200px'}}>
                  <h3 className='text-sm mb-3'>Total Offline Transactions</h3>
                  <p className='font-bold'>{pending?.length + approved?.length + declined?.length}</p>
                </div>
            </div>
          </div>
        </div>
        <div>
          <OfflinePerformanceLabel color={'#DA9D62'} title={'Pending'} value={pending?.length} />
          <OfflinePerformanceLabel color={'#1CAA43'} title={'Approved'} value={approved?.length} />
          <OfflinePerformanceLabel color={'#E93B3B'} title={'Declined'} value={declined?.length} />
        </div>
      </div>
    </div>
  )
}

export default OfflineTransactionPerformance
