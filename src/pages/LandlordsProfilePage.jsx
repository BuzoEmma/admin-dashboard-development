import React from 'react'
import { useLocation } from 'react-router-dom';
import locationIcon from '../asserts/Icons/location2.png'
import phoneIcon from '../asserts/Icons/phone-icon.svg'
import searchIcon from '../asserts/Icons/search-icon.png'
import TableListComponent from '../components/generalComponents/TableListComponent';
import HabeepLandlordsProfileItem from '../components/landlordsComponents/habeepLandlordsComponents/HabeepLandlordsProfileItem';
import TenantsWalletBalance from '../components/tenantsComponents/tenantsFinanceComponents/TenantsWalletBalance';
import LandlordsWalletTransactions from '../components/landlordsComponents/habeepLandlordsComponents/LandlordsWalletTransactions';

const LandlordsProfilePage = () => {
    const location = useLocation();
    const landlord = location?.state?.landlord;
    const habeepLandlordsHeaderList = ['NICKNAME', 'LOCATION', 'AGENT', 'NO. HOUSES', 'CERTIFICATION', 'ACTIONS']
    const habeeblandlordrecords = [
      {
        username: 'Davinda Mariama',
        compounds: 2,
        state: 'Cross River - Calabar',
        location: 'Lagos - Ikeja',
        email: 'Samuelbalogun@gmail.com',
        phoneNumber: '09069469010',
        nickName: 'Habor Heights',
        agent: 'Bassey Effiong',
        noOfHouses: 5,
        certification: 'C/O'
      },
      {
        username: 'David Isabella',
        compounds: 1,
        state: 'Cross River - Calabar',
        location: 'Cross River - Calabar',
        email: 'Samuelbalogun@gmail.com',
        phoneNumber: '08036708456',
        nickName: 'Habor Heights',
        agent: 'Bassey Effiong',
        noOfHouses: 5,
        certification: 'C/O'
      },
    ];

    const staticCardDetails = {
      walletBalance: '1,507,000',
      cardExpiringDate: '08/25',
      cardHolder: landlord.nickName,
      cardNumber: '**** **** **** ****'
    }


  return (
    <div className='page tenant-profile-page'>
        <div className="tenant-profile-header mb-8" style={{ 'gap': 80 }}>
            <div className='flex items-center'>
                <div className='name-section mr-60'>
                  {
                    landlord?.profilePicture ? (
                      <img className='agent-profile-img' src={landlord?.profilePicture} alt="" />
                    ) : (
                      <div className='profile-holder-img'>{landlord?.name[0]} {landlord?.name[1]}</div>
                    ) 
                  }
                  <div>
                      <h2>{landlord?.name}</h2>
                      <div className='agent-profile-location'>
                        <img className='agent-location-icon' src={locationIcon} alt="" />
                        <p><span>{landlord?.state}</span></p>
                      </div>
                      <div className='flex  mt-3'>
                        <img src={phoneIcon} alt="" />
                        <span className='text-[#4E527B] text-xs -ml-3'>{landlord?.phoneNumber}</span>
                      </div>
                  </div>
                </div>
                <button className='edit'>Edit Profile</button>
            </div>
        </div>

        <div className="chart-area_item mb-3">
          <div className='flex justify-between items-center mb-5'>
            <div>
                <h3 className='text-xs font-meduim mb-1'>COMPOUNDS</h3>
                <p className='text-xs text-gray-500'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="search-filter">
              <div className="search-bar mr-3 flex justify-between item-center h-8" style={{width: '200px'}}>
                  <input type="text" placeholder='Search' />
                  <div>
                      <img src={searchIcon} alt="" />
                  </div>
              </div>
              <button className='edit bg-[#1B49FF] text-white text-xs p-2 rounded-t-md'>Add Compound</button>
            </div>
          </div>
          <div className=''>
            <TableListComponent headerList={habeepLandlordsHeaderList} dataList={habeeblandlordrecords} itemComponent={HabeepLandlordsProfileItem} fontSize={10} />
          </div>
        </div>

        <div className="flex">
          <div  className='chart-area_item w-9/12'>
            <TenantsWalletBalance cardDetails={staticCardDetails} walletBalance={staticCardDetails?.walletBalance} />
            {/* // <TenantsWalletTransactions transactions={transactions} /> */}
          </div>
          <div className=" bg-[#0A1045] text-white rounded-md p-3 w-1/4">
              <div className='flex justify-between items-center'>
                <p className='text-[#D5D7EA] text-xs'>HBP BALANCE</p>
                <div className='more_vert'>
                  <span class="material-symbols-outlined text-xs">more_vert</span>
                </div>
              </div>
              <p>{staticCardDetails?.walletBalance}</p>
          </div>
        </div>

        <div className="chart-area_item mt-5">
          <LandlordsWalletTransactions />
        </div>
    </div>
  )
}

export default LandlordsProfilePage
