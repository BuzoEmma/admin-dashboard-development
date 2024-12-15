import React from 'react'
import { useNavigate } from 'react-router-dom';

const HabeepLandlordsItem = ({itemData}) => {
  const navigate = useNavigate();

  const handleRoute = () => {
    // /landlord/:id
      navigate(`/landlord/${itemData?.userData?._id}`, { state: { landlord : itemData } });
  };
  return (
    <tr className=' hover:bg-slate-100 cursor-pointer' onClick={handleRoute}>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.userData?.fName} {itemData?.userData?.surname}</td>
        <td className="whitespace-nowrap px-px py-4 border-b pl-5">{itemData?.totalCompounds}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData.location ? itemData?.location : '----------'}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.userData?.email}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.phoneNumber}</td>
        <td className="whitespace-nowrap px-px py-4 border-b pl-5">...</td>
    </tr>
  )
}

export default HabeepLandlordsItem
