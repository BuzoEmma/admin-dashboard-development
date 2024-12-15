import React from 'react'

const ExpensesLabel = ({ color, title, amount}) => {
    const style = {
        backgroundColor: color,
        color: color
    }
  return (
    <div className='expense-label'>
      <div className='title'>
        <div className="color" style={style}></div>
        <p>{title}</p>
      </div>
      <p className="expense-amount">{amount}</p>
    </div>
  )
}

export default ExpensesLabel
