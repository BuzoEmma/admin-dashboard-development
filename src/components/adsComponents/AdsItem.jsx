import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAgents } from '../../redux/Api';
import { getAgent } from '../generalComponents/FilterAgentsAndAds';


const AdsItem = ({itemData}) => {
  const dispatch = useDispatch();
  const agents = useSelector((state) => state?.agents?.agents);
  const [filteredAgent, setFilteredAgent] = useState('');

  
  useEffect(() => {
    dispatch(getAgents());
    getAgent(agents, itemData, setFilteredAgent);
}, [dispatch, agents]);
  return (
    <tr key={itemData?.publicId}>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.publicId}</td>
        <td className="whitespace-nowrap px-px py-4 border-b cursor-pointer" title={itemData?.location?.address}>{itemData?.location?.address.substring(0, 20)}...</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.price.toLocaleString()}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.agentData?.fname}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.size}</td>
        <td className="whitespace-nowrap px-px py-4 border-b pl-5">...</td>
    </tr>
  )





































  
}

export default AdsItem
