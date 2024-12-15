import React from 'react'
import { useNavigate } from 'react-router-dom';

const ActiveTenant = ({ itemData }) => {
  const navigate = useNavigate();

  const handleRoute = () => {
      navigate(`/tenant/${itemData?.username}`, { state: { tenant : itemData} });
  };

  return (
    <tr className='cursor-pointer hover:bg-[#f2f2f2]' key={itemData?.id} onClick={handleRoute}>
        <td className='whitespace-nowrap px-px py-4 border-b'>
            <div className="agent-photo-name">
                {
                    itemData?.profilePicture ? (
                        <div>
                            <img className='tenants-img' src={itemData?.profilePicture} alt="" />
                        </div>
                    ) : <div className='holder-img'>{itemData?.username[0]}{itemData?.username[1]}</div>

                }
                <p>{itemData?.username}</p>
            </div>
        </td>
        <td className='whitespace-nowrap px-px py-4 border-b'>{itemData?.email}</td>
        <td className='whitespace-nowrap px-px py-4 border-b'>{itemData?.nationality}</td>
        <td className='whitespace-nowrap px-px py-4 border-b'>{itemData?.phoneNumber}</td>
        <td className='whitespace-nowrap px-px py-4 border-b'>--------</td>
        {/* <td>
            <button className={itemData?.rentStatus[0].toLowerCase().includes('OCCUPIED') ? `occupied-btn` : tenant?.rentStatus[0].toLowerCase().includes('VACANT') ? `vacant-btn` : tenant?.rentStatus[0].toLowerCase().includes('DUE') || tenant?.rentStatus[0].toLowerCase().includes('LOAN') ? `due-btn` : tenant?.rentStatus[0].toLowerCase().includes('PAID') ? `paid-btn` : tenant?.rentStatus[0].toLowerCase().includes('ALMOST DUE') ? 'almost-due-btn' : '' }>{tenant?.rentStatus}</button>
        </td> */}
        {/* <td>...</td> */}
    </tr>
  )
}

export default ActiveTenant
