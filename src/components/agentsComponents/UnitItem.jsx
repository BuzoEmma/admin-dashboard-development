import React from 'react'

const UnitItem = ({itemData}) => {
  return (
    <tr>
        <td className="whitespace-nowrap px-px py-4 border-b">
            {
                itemData?.images.length ? (
                    <div className='flex'>
                        <img className='rounded-sm w-7 h-6' src={itemData?.images[0]?.link ? itemData?.images[0]?.link : itemData?.images[1]?.link ? itemData?.images[1]?.link : itemData?.images[2]?.link   } alt="" />
                        <p>{itemData?._id?.substring(0, 6)}</p>
                    </div>
                ) : (
                    <div className="agent-photo-name">
                        <div className='holder-img'>House</div>
                        <p>{itemData?._id}</p>
                    </div>
                )
            }
        </td>
        {/* <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.house}</td> */}
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.location?.address.substring(0, 20)}...</td>
        <td className="whitespace-nowrap px-px py-4 border-b">NGN {itemData?.price}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.size}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.sold == true ? 'True' : 'False'}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.tenant ? itemData?.tenant : 'No Tenant Yet'}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.landlord ? itemData?.landlord : '--------------'}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">...</td>
    </tr>
  )
}

export default UnitItem
