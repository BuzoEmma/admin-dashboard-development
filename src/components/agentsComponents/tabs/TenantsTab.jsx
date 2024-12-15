import React from 'react'

const TenantsTab = ({ data }) => {

  return (
    <div className="agent-table">
        <table>
            <thead>
                <tr>
                    <th>HOUSE ID</th>
                    <th>BEDROOM</th>
                    <th>HOUSE VALUE</th>
                    <th>TENANTS NAME</th>
                    <th>DUE DATE</th>
                    <th>HOUSE TAG</th>
                    <th>ACTIONS</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map(tenant => (
                        <tr key={tenant.id}>
                            <td>
                                <div className="agent-photo-name">
                                    <div className='holder-img'>House</div>
                                    <p>{tenant.id}</p>
                                </div>
                            </td>
                            <td>{tenant.bedroom}</td>
                            <td>{tenant.value}</td>
                            <td>{tenant.tenantName}</td>
                            <td>{tenant.dueDate}</td>
                            <td>
                                {
                                    tenant.houseTag.map(tag => (
                                        <button className={tag.includes('Occupied') ? `occupied-btn` : tag.includes('Vacant') ? `vacant-btn` : tag.includes('Due') || tag.includes('Loan') ? `due-btn` : tag.includes('Paid') ? `paid-btn` : tag.includes('Almost due') ? 'almost-due-btn' : '' }>{tag}</button>
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

export default TenantsTab
