import React, { useState } from 'react'
import searchIcon from '../../../asserts/Icons/search-icon.png'
import TableListComponent from '../../generalComponents/TableListComponent'
import AdsItem from '../housesComponents/Components/AdsItem'
import TenantsHousesItem from '../housesComponents/Components/TenantsHousesItem'
import CompoundsItem from '../housesComponents/Components/CompoundsItem'
import handleTabs from '../../generalComponents/HandleTabs'
import { getAds, getCompounds } from '../../../redux/Api'
import TableSkeleton from '../../skeleton/TableSkeleton'

const PropertiesHousesTab = ({ tenantsHouses, adsData, compoundsData }) => {
    const [ads, setAds] = useState(true);
    const [tenants, setTenants] = useState(false);
    const [compounds, setCompounds] = useState(false);
    const [searchItem, setSearchItem] = useState('')

    const adsHeaderList = ['UNIT ID', 'LOCATION', 'UNIT VALUE', 'AGENT', 'PURPOSE' ,'ACTIONS'];
    const tenantsHousesHeaderList = ['UNIT ID', 'LOCATION', 'UNIT VALUE', 'TENANT', 'LANDLORD', 'ACTIONS'];
    const compoundsHeaderList = ['COMP. NICKNAME', 'LANDLORD', 'LOCATION', 'HOUSE NO.', 'ACTIONS'];

    // const compoundsData = [
    //   {
    //     nickName: 'Habor Heights',
    //     landlord: 'Bassey Effiong',
    //     location: 'Lagos - Ajah', 
    //     agent: 'Daniel Okon',
    //     houseNo: 5,
    //     certification: 'C/O'
    //   },
    //   {
    //     nickName: 'Sunny Sides',
    //     landlord: 'John Effiong',
    //     location: 'Enugu - Enugu', 
    //     agent: 'Ulims Agam',
    //     houseNo: 6,
    //     certification: 'R/O'
    //   },
    //   {
    //     nickName: 'Riverview Residences',
    //     landlord: 'John Effiong',
    //     location: 'Enugu - Enugu', 
    //     agent: 'Ulims Agam',
    //     houseNo: 7,
    //     certification: 'C/O'
    //   },
    //   {
    //     nickName: 'Riverview Residences',
    //     landlord: 'John Effiong',
    //     location: 'Enugu - Enugu', 
    //     agent: 'Ulims Agam',
    //     houseNo: 4,
    //     certification: 'None'
    //   },
    //   {
    //     nickName: 'Riverview Residences',
    //     landlord: 'John Effiong',
    //     location: 'Enugu - Enugu', 
    //     agent: 'Ulims Agam',
    //     houseNo: 7,
    //     certification: 'C/O'
    //   },
    //   {
    //     nickName: 'Riverview Residences',
    //     landlord: 'John Effiong',
    //     location: 'Enugu - Enugu', 
    //     agent: 'Ulims Agam',
    //     houseNo: 4,
    //     certification: 'None'
    //   },
    //   {
    //     nickName: 'Habor Heights',
    //     landlord: 'Bassey Effiong',
    //     location: 'Lagos - Ajah', 
    //     agent: 'Daniel Okon',
    //     houseNo: 5,
    //     certification: 'C/O'
    //   },
    //   {
    //     nickName: 'Sunny Sides',
    //     landlord: 'John Effiong',
    //     location: 'Enugu - Enugu', 
    //     agent: 'Ulims Agam',
    //     houseNo: 6,
    //     certification: 'R/O'
    //   },
    // ];

    // console.log(tenantsHouses)
    // console.log(adsData)
    // console.log(tenantsHouses);

    var newDataList;

    const handleFilter =()=> {
      if(tenants) {
        newDataList = tenantsHouses?.filter(record => (
         record.houses[0]?.location?.state?.toLowerCase().includes(searchItem?.toLowerCase())
          || record?.fname?.toLowerCase().includes(searchItem?.toLowerCase())
          || record?.surname?.toLowerCase().includes(searchItem?.toLowerCase())
        ))
      } else if(ads) {
        newDataList = adsData?.filter(record => (
          record?._id?.toLowerCase().includes(searchItem.toLowerCase())
          || record?.location?.address.toLowerCase().includes(searchItem.toLowerCase())
          || record?.location?.city?.toLowerCase().includes(searchItem.toLowerCase())
        ))
      } else if(compounds) {
        newDataList = compoundsData?.filter(record => (
          record?.nickName?.toLowerCase().includes(searchItem?.toLowerCase())
          || record?.landlord?.toLowerCase().includes(searchItem?.toLowerCase())
          || record?.location?.toLowerCase().includes(searchItem?.toLowerCase())
          || record?.agent?.toLowerCase().includes(searchItem?.toLowerCase())
        ))
      }
    }
  
    searchItem && handleFilter();
  
    const handleSearch = (e) => {
      e.preventDefault();
      setSearchItem(e.target.value);
    }

    // useEffect(() => {
    //   dispatch(getAgentsPerformance());
    //   dispatch(getAds());
    // }, [dispatch]);

  return (
    <>
      <div className='flex border-b justify-between items-center mb-5'>
        <div className=" text-xs flex py-3 cursor-pointer">
            <p className={ads ? `highlightedTab` : 'pb-4 px-3 -mb-3 text-[#71759D]'} onClick={() => handleTabs(setAds, [setAds, setTenants, setCompounds])}>Ads({adsData?.length})</p>
            <p className={tenants ? `highlightedTab` : 'pb-4 px-3 -mb-3 text-[#71759D]'} onClick={() => handleTabs(setTenants, [setAds, setTenants, setCompounds])}>Tenants Houses({tenantsHouses?.length})</p>
            <p className={compounds ? `highlightedTab` : 'pb-4 px-3 -mb-3 text-[#71759D]'} onClick={() => handleTabs(setCompounds, [setAds, setTenants, setCompounds])}>Compounds({compoundsData?.length})</p>
        </div>
        <div className="search-filter">
          <div className="search-bar mr-3 flex justify-between item-center h-8" style={{width: '200px'}}>
              <input type="text"  placeholder='Search' value={searchItem} onChange={handleSearch}  />
              <div>
                  <img src={searchIcon} alt="" />
              </div>
          </div>
          {/* <button className='bg-[#1B49FF] text-white text-xs w-20 py-2 px-2 rounded-md'>Add a unit</button> */}
        </div>
      </div>
      <div className='border rounded-xl p-2 mt-3'>
        {
          ads ? (
            <div>
              {
                adsData?.length > 0 ? (
                  <div>
                    {
                      searchItem ? (
                        <TableListComponent headerList={adsHeaderList} dataList={newDataList} itemComponent={AdsItem} fontSize={12} />
                      ) : (
                        <TableListComponent headerList={adsHeaderList} dataList={adsData} itemComponent={AdsItem} fontSize={12} />
                      )
                    }
                  </div>
                ) : <TableSkeleton />
              }
            </div>
          ) : tenants ? (
            <div>
              {
                tenantsHouses?.length > 0 ? (
                  <div>
                    {
                      searchItem ? (
                        <TableListComponent headerList={tenantsHousesHeaderList} dataList={newDataList} itemComponent={TenantsHousesItem} fontSize={12} />
                      ) : (
                        <TableListComponent headerList={tenantsHousesHeaderList} dataList={tenantsHouses} itemComponent={TenantsHousesItem} fontSize={12} /> 
                      )
                    }
                  </div>
                ) : <TableSkeleton />
              }
            </div>
          ) : compounds ? (
            <div>
              {
                compoundsData?.length > 0 ? (
                  <div>
                    {
                      searchItem ? (
                        <TableListComponent headerList={compoundsHeaderList} dataList={newDataList} itemComponent={CompoundsItem} fontSize={10} />
                      ) : (
                        <TableListComponent headerList={compoundsHeaderList} dataList={compoundsData} itemComponent={CompoundsItem} fontSize={10} /> 
                      )
                    }
                  </div>
                ) : <TableSkeleton />
              }
            </div>
          )
          : ''
        }
      </div>
    </>

  )
}

export default PropertiesHousesTab
