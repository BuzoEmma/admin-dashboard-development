import React, { useState } from 'react'
import searchIcon from '../../../asserts/Icons/search-icon.png'
import TenantsLandlordsItem from '../tenantsLandlordsComponens/TenantsLandlordsItem'
import TableListComponent from '../../generalComponents/TableListComponent'
import AddLandlordPopup from '../../popComponents/AddLandlordPopup'

const TenantsLandlords = ({ records }) => {

  const tenantsLandlordsHeaderList = ['LANDLORD USERNAME', 'LOCATION', 'TENANTS', 'PHONE NUMBER', 'ACTIONS']
  const [searchItem, setSearchItem] = useState('');
  const [showAddLandlordPopup, setShowAddLandlordPopup] = useState(false);

  const closeAddLandlordPopup = () => {
      setShowAddLandlordPopup(false)
    }
  
  const handleSearch = (e) => {
    setSearchItem(e.target.value);
  }


  const newData = records?.filter((record) => (
    record?.username.toLowerCase().includes(searchItem.toLowerCase())
    || record?.tenant.toLowerCase().includes(searchItem.toLowerCase())
    || record?.location.toLowerCase().includes(searchItem.toLowerCase())
));

  return (
    <div>
        <div className="search-filter mb-5">
          <div className="search-bar">
              <input type="text" placeholder='Search' value={searchItem} onChange={handleSearch} />
              <div>
                  <img src={searchIcon} alt="" />
              </div>
          </div>

          {/* <div className=''>
            <button onClick={() => {setShowAddLandlordPopup(!showAddLandlordPopup)}} className='bg-[#1B49FF] text-xs text-white rounded px-3 py-2 cursor-pointer'>
                Add landlord
            </button>
          </div> */}
        </div>

        <AddLandlordPopup visible={showAddLandlordPopup} onClose={closeAddLandlordPopup} />

        <div>
          {
            searchItem.length ? (
              <TableListComponent headerList={tenantsLandlordsHeaderList} dataList={newData} itemComponent={TenantsLandlordsItem} fontSize={10} />
            ) : (
              <TableListComponent headerList={tenantsLandlordsHeaderList} dataList={records} itemComponent={TenantsLandlordsItem} fontSize={10} />
            )
          }
        </div>
    </div>
  )
}

export default TenantsLandlords
