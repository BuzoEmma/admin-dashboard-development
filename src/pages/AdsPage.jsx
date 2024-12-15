import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AgentsPerformance from '../components/generalComponents/AgentsPerformance'
import searchIcon from '../asserts/Icons/search-icon.png'
import AdsItem from '../components/adsComponents/AdsItem'
import TableListComponent from '../components/generalComponents/TableListComponent'
import { getAgentsPerformance } from '../redux/Api';
import { useEffect } from 'react';
import { getAds } from '../redux/Api';
import TableSkeleton from '../components/skeleton/TableSkeleton'


const AdsPage = () => {
  const dispatch = useDispatch();
  const adsHeaderList = ['HOUSE ID', 'LOCATION', 'HOUSE VALUE', 'AGENT', 'SIZE', 'ACTIONS'];
  const adsData = useSelector((state) => state?.ads?.ads);
  const agents = useSelector((state) => state?.agents?.agents);

  // console.log(adsData);

  const [searchItem, setSearchItem] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchItem(e.target.value);
  }

  const newAdsData = adsData?.filter((item) => (
    item?._id.toLowerCase().includes(searchItem.toLowerCase())
    || item?.location?.address?.toLowerCase().includes(searchItem.toLowerCase())
    // || item?.agent.toLowerCase().includes(searchItem.toLowerCase())
));

  useEffect(() => {
    // dispatch(getAgentsPerformance());
    dispatch(getAds());
    window.scrollTo(0, 0)
  }, [dispatch]);

  return (
    <div className='page'>

      <div className='chart-area'>
        <div className='chart-area_item'>
            <AgentsPerformance openAdsColor='#1134BC' closedAdsColor='#FFDB1B'/>
        </div>
      </div>

      <div className="search-bar">
          <input type="text" onChange={handleSearch} placeholder='Search' value={searchItem} />
          <div>
              <img src={searchIcon} alt="" />
          </div>
      </div>

      <div className='border rounded-xl p-2 mt-3'>
        {
          adsData?.length ? (
            <div>
              {
                searchItem?.length ? (
                  <TableListComponent headerList={adsHeaderList} itemComponent={AdsItem} dataList={newAdsData} fontSize={10} />
                  ) : (
                  <TableListComponent headerList={adsHeaderList} itemComponent={AdsItem} dataList={adsData} fontSize={10} />
                )
              }
            </div>
          ) : <TableSkeleton />
        }
      </div>
    </div>
  )
}

export default AdsPage
