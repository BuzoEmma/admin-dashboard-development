import React, {useState} from 'react'
import searchIcon from '../../../asserts/Icons/search-icon.png'
import filterIcon from '../../../asserts/Icons/filter.png'
import NoAvailableData from '../../generalComponents/NoAvailableData'
import InactiveTenantsList from '../inactiveTenantsComponents/InactiveTenantsList'

const InactiveTenantsTab = ({ data }) => {
    const [searchTenant, setSearchTenant] = useState('');

    const newData = data?.filter((tenant) => (
        tenant?.username?.toLowerCase().includes(searchTenant.toLowerCase())
        || tenant?.nationality?.toLowerCase().includes(searchTenant.toLowerCase()))
        || tenant?.email?.toLowerCase().includes(searchTenant.toLowerCase())
    );

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchTenant(e.target.value);
    }
  return (
    <div>
        <div className="search-filter">
            <div className="search-bar">
                <input type="text" value={searchTenant} onChange={handleSearch} placeholder='Search for tenant eg Ag 01' />
                <div>
                    <img src={searchIcon} alt="" />
                </div>
            </div>
        </div>

        {
            searchTenant?.length ? (
                <InactiveTenantsList tenants={newData} />
            ) : (
                <InactiveTenantsList tenants={data} />
            )
        }
 
    </div>
  )
}

export default InactiveTenantsTab
