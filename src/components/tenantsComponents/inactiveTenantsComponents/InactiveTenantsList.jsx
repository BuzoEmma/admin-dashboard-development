import React from 'react'
import InactiveTenant from './InactiveTenant'
import NoAvailableData from '../../generalComponents/NoAvailableData'

const InactiveTenantsList = ({ tenants }) => {
  return (
    <div>
        <div className="agent-table active-tenants-table">
            {
                tenants?.length ? (
                    <>
                        <table>
                            <thead>
                                <tr>
                                    <th><p className='th'>USERNAME</p></th>
                                    <th><p className='th'>EMAIL</p></th>
                                    <th><p className="th">LOCATION</p></th>
                                    <th><p className="th">EMAIL ADDRESS</p></th>
                                    <th><p className="th">PHONE NUMBER</p></th>
                                    {/* <th><p className="th">ACTIONS</p></th> */}
                                </tr>
                            </thead>
                            <tbody>
                            {
                                tenants?.map(tenant => (
                                    <InactiveTenant tenant={tenant}/>
                                ))
                                }
                            </tbody>
                        </table>
                    </> 
                ) : <NoAvailableData notice={'No data available yet'}/>
            }
        </div>
    </div>
  )
}

export default InactiveTenantsList
