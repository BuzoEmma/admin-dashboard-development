import React from 'react'
import { useNavigate } from 'react-router-dom';

const Agent = ({ itemData }) => {

    const navigate = useNavigate();

    const agentsInitials =(fname, surname)=> {
        const firstStr = fname[0];
        const secondStr = surname[0];
        const initials = firstStr + secondStr;
        return initials;
    }

    const handleRoute = () => {
        navigate(`/agent/${itemData?.username}`, { state: { agent : itemData} });
    };

  return (
        <tr onClick={handleRoute} className='hover:bg-[#f2f2f2] cursor-pointer'>
            <td className='whitespace-nowrap px-px py-4 border-b'>
                <div className="agent-photo-name">
                    <div className='holder-img'>{agentsInitials(itemData?.fname, itemData?.surname)}</div>
                    <p>{itemData?.username}</p>
                </div>
            </td>
            <td className='whitespace-nowrap px-px py-4 border-b'>{itemData?.ads?.length}</td>
            <td className='whitespace-nowrap px-px py-4 border-b'><span>{itemData?.state}</span>-<span>{itemData?.city}</span></td>
            <td className='whitespace-nowrap px-px py-4 border-b'>{itemData?.email}</td>
            <td className='whitespace-nowrap px-px py-4 border-b'>{itemData?.phoneNumber}</td>
            <td className='whitespace-nowrap px-px py-4 border-b agents-action'>...</td>
        </tr>
  )
}

export default Agent
