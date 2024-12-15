import React from 'react'

const RentstatusSummary = (data) => {
    // console.log(data?.data)
  return (
    <div className='chart-area_item rent-summary-area'>
    <p className='title mb-5'>Rent Status Summary</p>
    <div>
        {
            data?.data?.map(item => (
                <div className='rent-summary mb-3'>
                <div className='rent-summary-info'>
                    <small>{item?.name.toUpperCase()}</small>
                    <p>{item?.count}</p>
                </div>
                <div className='rent-summary-btn' style={item?.name === 'paid' ? {'backgroundColor': '#1CAA43'} : item?.name === 'owe' ? {'backgroundColor': '#E9653B'} : item?.name === 'almost due' ? {'backgroundColor': '#563600'} : {'backgroundColor': '#1CAA43'}}>
                    {'>'}
                </div>
            </div>
            ))
        }
    </div>
</div>
  )
}

export default RentstatusSummary
