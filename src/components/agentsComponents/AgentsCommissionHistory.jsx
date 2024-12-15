import React from 'react'

const AgentsCommissionHistory = () => {
  const commissionHistory = [
    {
      date: '14/09/23',
      action: 'Habeeb paid rent to landlord',
      amount : '3,500,000'
    },
    {
      date: '14/09/23',
      action: 'Transfer from DAVID CARRICK',
      amount : '292,000'
    },
    {
      date: '14/09/23',
      action: 'Habeeb paid rent to landlord',
      amount : '3,500,000'
    },
    {
      date: '14/09/23',
      action: 'Transfer from DAVID CARRICK',
      amount : '292,000'
    },
    {
      date: '14/09/23',
      action: 'Transfer from DAVID CARRICK',
      amount : '292,000'
    },
    {
      date: '14/09/23',
      action: 'Transfer from DAVID CARRICK',
      amount : '292,000'
    },
    {
      date: '14/09/23',
      action: 'Transfer from DAVID CARRICK',
      amount : '292,000'
    },
  ]
  return (
    <div>
      <table>
        {
          commissionHistory.map(history => (
            <tr>
              <td className='date'>{history.date}</td>
              <td className='action'>{history.action}</td>
              <td className='amount'>{history.amount}</td>
            </tr>
          ))
        }
      </table>
    </div>
  )
}

export default AgentsCommissionHistory
