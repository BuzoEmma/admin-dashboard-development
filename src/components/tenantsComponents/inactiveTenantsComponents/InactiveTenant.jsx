import React from 'react'

const InactiveTenant = ({ tenant }) => {
  return (
                <tr key={tenant?.id}>
                    <td>
                        <div className="agent-photo-name">
                            {
                                tenant?.profilePicture ? (
                                    <div>
                                        <img className='tenants-img' src={tenant?.profilePicture} alt="" />
                                    </div>
                                ) : <div className='holder-img'>House</div>

                            }
                            <p>{tenant?.username}</p>
                        </div>
                    </td>
                    <td>{tenant?.email}</td>
                    <td>{tenant?.nationality}</td>
                    <td>{tenant?.email}</td>
                    <td>{tenant?.phoneNumber}</td>
                    {/* <td>...</td> */}
                </tr>
            
  )
}

export default InactiveTenant
