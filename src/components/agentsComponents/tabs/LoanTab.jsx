import React from 'react'

const LoanTab = ({ data }) => {

  return (
    <div className="agent-table">
        <table>
            <thead>
                <tr>
                    <th>UNIT ID</th>
                    <th>BEDROOM</th>
                    <th>HOUSE VALUE</th>
                    <th>TENANT NAME</th>
                    <th>WALLET BALANCE</th>
                    <th>HOUSE TAG</th>
                    <th>ACTIONS</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map(loan => (
                        <tr key={loan.id}>
                            <td>
                                <div className="agent-photo-name">
                                    <div className='holder-img'>House</div>
                                    <p>{loan.id}</p>
                                </div>
                            </td>
                            <td>{loan.bedroom}</td>
                            <td>{loan.value}</td>
                            <td>{loan.tenantName}</td>
                            <td>{loan.walletBalance}</td>
                            <td>
                                {
                                    loan.houseTag.map(tag => (
                                        <button className={tag.includes('Occupied') ? `occupied-btn` : tag.includes('Vacant') ? `vacant-btn` : tag.includes('Due') || tag.includes('Loan') ? `due-btn` : tag.includes('Paid') ? `paid-btn` : '' }>{tag}</button>
                                    ))
                                }
                            </td>
                            <td>...</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default LoanTab
