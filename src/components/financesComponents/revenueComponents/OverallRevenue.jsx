import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import LineChart from '../LineChart';
import LineChartLabel from '../LineChartLabel';
import handleTabs from '../../generalComponents/HandleTabs';


const OverallRevenue = () => {
  const revenue = useSelector((state) => state?.revenueData?.revenue);
  const revenueAnalysis = useSelector((state) => state?.revenueAnalysis?.revenueAnalysis);

  const [all, setAll] = useState(true)
  const [properties, setProperties] = useState(false)
  const [rentCommssions, setRentCommissions] = useState(false)
  const [registrations, setRegistrations] = useState(false)
  const [loanInterests, setLoanInterests] = useState(false)

  console.log(revenueAnalysis);

  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const propertiesData = [600, 400, 325, 300, 400, 300, 450, 300, 450, 500, 600, 450];
  const rentData = [300, 200, 550, 200, 400, 150, 750, 220, 200, 600, 200, 250];
  const feesData = [400, 300, 440, 230, 300, 500, 300, 230, 300, 400, 220, 235];
  // const profitData = [100, 300, 440, 230, 300, 300, 400, 220, 235];

  const dataAll = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "#1CAA43",
        borderColor: "#1CAA43",
        data: propertiesData,
      },
      {
        label: "My First dataset",
        backgroundColor: "#1B49FF",
        borderColor: "#1B49FF",
        data: rentData,
      },
      {
        label: "My First dataset",
        backgroundColor: "#FFDB1B",
        borderColor: "#FFDB1B",
        data: feesData,
      },
    ],
  };

  const dataRent = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "#FFDB1B",
        borderColor: "#FFDB1B",
        data: rentData,
      },
    ],
  };

  const dataFees = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "#1B49FF",
        borderColor: "#1B49FF",
        data: feesData,
      },
    ],
  };

  const dataProperties = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "#1CAA43",
        borderColor: "#1CAA43",
        data: propertiesData,
      }
    ],
  };


  const options = {
    animation: true,
    plugins: {
      legend: {
        display: false,
      },
      ticks: { display: false },
    },
    tension: 0.25,
    borderCapStyle: "round",
    pointBackgroundColor: 'transparent',
    pointBorderColor: 'transparent',
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          dash: [2,4],
      },  
      },
      y: {
        grid: {
          display: true,
        },
        border: {
          dash: [3,6],
      },  
      },
    },
  }

  return (
    <div>
      <div className='overallrevenue-header'>
        <div className='mb-3'>
          <h2 className='text-lg font-bold'>Revenue</h2>
          <p>Your Revenue This Year</p>
        </div>
        <div className='renenue-nav'>
          <span className={all ? `highlighted-revenue` : ''} onClick={() => handleTabs(setAll, [setAll, setProperties, setRegistrations, setRentCommissions, setLoanInterests])}>All</span>
          <span className={properties ? `highlighted-revenue` : ''} onClick={() => handleTabs(setProperties, [setAll, setProperties, setRegistrations, setRentCommissions, setLoanInterests])}>Properties</span>
          <span className={rentCommssions ? `highlighted-revenue` : ''} onClick={() => handleTabs(setRentCommissions, [setAll, setProperties, setRegistrations, setRentCommissions, setLoanInterests])}>Rent Commissions</span>
          <span className={registrations ? `highlighted-revenue` : ''} onClick={() => handleTabs(setRegistrations, [setAll, setProperties, setRegistrations, setRentCommissions, setLoanInterests])}>Registrations</span>
          <span className={loanInterests ? `highlighted-revenue` : ''} onClick={() => handleTabs(setLoanInterests, [setAll, setProperties, setRegistrations, setRentCommissions, setLoanInterests])}>Loans Interest</span>
        </div>
      </div>

      <div className='line-chart-label-area'>
        { all && (
            <>
            <LineChartLabel title={'Properties'} amount={revenue[3]?.properties?.amount} percent={10} growth='increase' />
            <LineChartLabel title={'Rent Commission'} amount={revenue[2]?.['rent-commision']?.amount} percent={10} growth='decrease' />
            <LineChartLabel title={'Registration'} amount={revenue[1]?.['registrations']?.amount} percent={10} growth='decrease' />
            <LineChartLabel title={'Loan Interests'} amount={revenue[0]?.['loan-interests']?.amount} percent={10} growth='decrease' />
            </>
        )}
        { properties && <LineChartLabel title={'Properties'} amount={revenue[3]?.properties?.amount} percent={10} growth='increase' />}
        { rentCommssions && <LineChartLabel title={'Rent Commission'} amount={revenue[2]?.['rent-commision']?.amount} percent={10} growth='decrease' />}
        { registrations && <LineChartLabel title={'Registration'} amount={revenue[1]?.['registrations']?.amount} percent={10} growth='decrease' />}
        { loanInterests && <LineChartLabel title={'Loan Interests'} amount={revenue[0]?.['loan-interests']?.amount} percent={10} growth='decrease' />}
      </div>
      <LineChart data={all ? dataAll : properties ? dataProperties : rentCommssions ? dataFees : registrations ? dataRent : loanInterests ? dataRent :  ''} options={options}/>

    </div>
  )
}

export default OverallRevenue
