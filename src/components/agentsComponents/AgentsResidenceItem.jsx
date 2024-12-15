import React from 'react'

const AgentsResidenceItem = ({itemData}) => {
  return (
    <tr>
        <td className='whitespace-nowrap px-px py-4 border-b'>{itemData?.city.toUpperCase()}</td>
        <td className='whitespace-nowrap px-px py-4 border-b'>{itemData?.noOfAgents}</td>
    </tr>
  )
}

export default AgentsResidenceItem
