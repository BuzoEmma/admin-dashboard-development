import React from 'react'
import { abbreviateNumber } from "js-abbreviation-number";
// import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useSelector } from 'react-redux';

const HabeepHouses = ({ houses }) => {

    const sortedHouses = houses?.slice(-4);

    const tenantsIds = [];

    const activeTenantsData = useSelector((state) => state?.activeTenants?.activeTenants);


    for(let i = 0; i < sortedHouses?.length; i++) {
        tenantsIds.push(sortedHouses[i].tenantId);
    }

    const housesTenants = activeTenantsData?.filter(tenant => tenantsIds?.includes(tenant.id));
    
    const getTenantName = (id, index) => {
        const tenant = housesTenants?.filter(tenant => tenant?.id === id)[index]
        if(tenant?.surname) {
            return `${tenant?.surname} ${tenant?.fname}`
        } else {
            return '-----'
        }
        
    }

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Unit ID</th>
                    <th>House ID</th>
                    <th>Tenant</th>
                    <th>Landlord</th>
                    <th>Amount</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {sortedHouses?.map((house, index) => (
                    <tr key={index} style={{fontSize: '10px'}}>
                        <td className="">------</td>
                        <td className="">{house?.publicId}</td>
                        <td className="">{getTenantName(house?.tenantId, index)}</td>
                        <td className="">------</td>
                        <td className="">{abbreviateNumber(house?.price, 0)}</td>
                        <td className='blue '>...</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div> 
  )
}

export default HabeepHouses