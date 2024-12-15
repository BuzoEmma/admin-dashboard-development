import React, { useState } from 'react'
import searchIcon from '../../../asserts/Icons/search-icon.png'
import HabeepLandlordsItem from '../habeepLandlordsComponents/HabeepLandlordsItem'
import TableListComponent from '../../generalComponents/TableListComponent'
import AddLandlordPopup from '../../popComponents/AddLandlordPopup'
import NoAvailableData from '../../generalComponents/NoAvailableData'

const HabeepLandlords = ({ records }) => {

  const habeepLandlordsHeaderList = ['LANDLORD USERNAME', 'COMPOUNDS', 'LOCATION', 'EMAIL', 'PHONE NUMBER', 'ACTIONS'];
  const [searchItem, setSearchItem] = useState('');
  const [showAddLandlordPopup, setShowAddLandlordPopup] = useState(false);

  // console.log(records)

  const closeAddLandlordPopup = () => {
    setShowAddLandlordPopup(false)
  }
  
  const handleSearch = (e) => {
    setSearchItem(e.target.value);
  }

  const newData = records?.filter((record) => (
    record?.userData?.fname.toLowerCase().includes(searchItem.toLowerCase())
    || record?.userData?.surname.toLowerCase().includes(searchItem.toLowerCase())
    // || record?.location.toLowerCase().includes(searchItem.toLowerCase())
    || record?.userData?.email.toLowerCase().includes(searchItem.toLowerCase())
  ));

  return (
    <div>
        <div className="search-filter mb-5">
          <div className="search-bar items-center">
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

        <div className='border rounded-xl p-2 mt-3'>
          {
            searchItem.length ? (
              <TableListComponent headerList={habeepLandlordsHeaderList} dataList={newData} itemComponent={HabeepLandlordsItem} fontSize={10} />
            ) : (
              <TableListComponent headerList={habeepLandlordsHeaderList} dataList={records} itemComponent={HabeepLandlordsItem} fontSize={10} />
           )
          }
        </div> 
    </div>
  )
}

export default HabeepLandlords
