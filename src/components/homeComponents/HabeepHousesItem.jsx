// import React from 'react'

// const HabeepHousesItem = (itemData) => {
//     const housesTenants = activeTenantsData?.filter(tenant => tenantsIds?.includes(tenant.id));
    
//     const getTenantName = (id) => {
//         const tenant = housesTenants?.filter(tenant => tenant.id === id)[0]
        
//         return `${tenant?.surname} ${tenant?.fname}`
//     }

//   return (
//     <tr key={itemData?.publicId} style={{fontSize: '10px'}}>
//         <td className="whitespace-nowrap  py-4 border-b">{itemData?.house?.publicId}</td>
//         <td className="whitespace-nowrap  py-4 border-b">------</td>
//         <td className="whitespace-nowrap  py-4 border-b">{getTenantName(itemData?.house?.tenantId)}</td>
//         <td className="whitespace-nowrap  py-4 border-b">------</td>
//         <td className="whitespace-nowrap  py-4 border-b">{abbreviateNumber(itemData?.house?.price, 1)}</td>
//         <td className='blue whitespace-nowrap  py-4 border-b'>...</td>
//     </tr>
//   )
// }

// export default HabeepHousesItem
