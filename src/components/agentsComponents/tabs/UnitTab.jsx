import React from 'react'
import TableListComponent from '../../generalComponents/TableListComponent';
import UnitItem from '../UnitItem';

const UnitTab = ({ data }) => {
  const unitsHeaderList = ['UNIT ID', 'LOCATION', 'UNIT VALUE', 'SIZE', 'SOLD', 'TENANT', 'LANDLORD NAME', 'ACTIONS'];  
  return (
    <div>
        <TableListComponent headerList={unitsHeaderList} dataList={data} itemComponent={UnitItem} fontSize={10} />
        {/* <table>
            <thead>
                <tr>
                    <th>UNIT ID</th>
                    <th>HOUSE</th>
                    <th>LOCATION</th>
                    <th>UNIT VALUE</th>
                    <th>TENANTS</th>
                    <th>LANDLORD NAME</th>
                    <th>ACTIONS</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map(unit => (
                        <tr key={unit.id}>
                            <td>
                                <div className="agent-photo-name">
                                    <div className='holder-img'>House</div>
                                    <p>{unit.id}</p>
                                </div>
                            </td>
                            <td>{unit.house}</td>
                            <td>{unit.location}</td>
                            <td>{unit.value}</td>
                            <td>{unit.tenants}</td>
                            <td>{unit.landlord}</td>
                            <td>...</td>
                        </tr>
                    ))
                }
            </tbody>
        </table> */}
    </div>
  )
}

export default UnitTab
