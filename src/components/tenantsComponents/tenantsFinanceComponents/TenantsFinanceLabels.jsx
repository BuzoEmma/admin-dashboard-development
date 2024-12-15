import React from 'react'
import { abbreviateNumber } from "js-abbreviation-number";


const TenantsFinanceLabels = ({ color, title, amount, tenantsNum, percent, currency}) => {
  return (
    <div className='tenant-finance-label p-3 rounded-xl shadow-lg w-28'>
      <div className='tenant-finance-label-color' style={{'color': color, 'backgroundColor': color}}>
        c
      </div>
      <div className="tenant-finance-label-info">
        <small>{title}</small>
        <h3>{`${tenantsNum} Tenants`}</h3>
        <p>{`${currency} ${amount.toLocaleString()}`}</p>
        <small >{`${percent.toLocaleString().substring(0, 5)}%`}</small>
      </div>
    </div>
  )
}

export default TenantsFinanceLabels
