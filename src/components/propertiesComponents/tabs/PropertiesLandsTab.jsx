import React, { useState } from 'react'
import landsItem from '../LandsComponents/landsItem'
import TableListComponent from '../../generalComponents/TableListComponent'
import searchIcon from '../../../asserts/Icons/search-icon.png'

const PropertiesLandsTab = ({ landsData }) => {
  const landsHeader = ['UNIT ID', 'LOCATION', 'UNIT VALUE', 'AGENT', 'SIZE', 'PLOT', 'ACTIONS'];
  const [searchItem, setSearchItem] = useState('');

  const handleSearch = (e) => {
    setSearchItem(e.target.value);
  }

  const newDataList = landsData?.filter(record => (
    record?.publicId?.toLowerCase().includes(searchItem.toLowerCase())
     || record?.location?.address?.toLowerCase().includes(searchItem.toLowerCase())
     || record?.plots?.toLocaleString().includes(searchItem.toLowerCase())
     || record?.size?.toLocaleString().includes(searchItem.toLowerCase())
     || record?.price?.toLocaleString().includes(searchItem.toLowerCase())
   ))

  return (
    <>
      <div className="search-filter flex justify-between items-center mb-5">
          <div className="search-bar mr-3 flex justify-between item-center h-8" style={{width: '200px'}}>
              <input type="text" onChange={handleSearch} value={searchItem}  placeholder='Search' />
              <div>
                  <img src={searchIcon} alt="" />
              </div>
          </div>
          <button className='bg-[#1B49FF] text-white text-xs w-20 py-2 px-2 rounded-md'>Add a unit</button>
      </div>
      <div className='border rounded-xl p-2 mt-3'>
        {
          searchItem ? (
            <TableListComponent headerList={landsHeader} dataList={newDataList} itemComponent={landsItem} fontSize={12} /> 
          ) : (
            <TableListComponent headerList={landsHeader} dataList={landsData} itemComponent={landsItem} fontSize={12} /> 
          )
        }
      </div>
    </>
  )
}

export default PropertiesLandsTab
