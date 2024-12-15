import React from 'react'
import Agent from './Agent'
import TableListComponent from '../generalComponents/TableListComponent';

const AgentsList = ({agents}) => {
    const agentsHeaderList = ['USERNAME', 'NO OF ADS', 'LOCATION', 'EMAIL ADDRESS', 'PHONE NUMBER', 'ACTION'];
  return (
    <div>
        <TableListComponent dataList={agents} headerList={agentsHeaderList} itemComponent={Agent} />
    </div>
  )
}

export default AgentsList
