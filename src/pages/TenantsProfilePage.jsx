import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import locationIcon from '../asserts/Icons/location2.png'
import TenantsWalletBalance from '../components/tenantsComponents/tenantsFinanceComponents/TenantsWalletBalance';
import TenantsWalletTransactions from '../components/tenantsComponents/tenantsFinanceComponents/TenantsWalletTransactions';
import moreIcon from '../asserts/Icons/more.png'
import ProgressBar from '../components/progressbar/ProgressBar';
import TenantsRentHistory from '../components/tenantsComponents/tenantsFinanceComponents/TenantsRentHistory';
import TenantsLoanHistory from '../components/tenantsComponents/tenantsFinanceComponents/TenantsLoanHistory';
import { getTenantFinanaceDetails, getTenantProfileDetails } from '../redux/Api';
import EditTenantPopup from '../components/popComponents/EditTenantPopup';
import handleTabs from '../components/generalComponents/HandleTabs';

const TenantsProfilePage = () => {
    const location = useLocation();
    const tenant = location?.state?.tenant;
    const tag = 'Almost due';

    console.log(tenant)

    const [rentHistory, setRentHistory] = useState(true);
    const [loanHistory, setLoanHistory] = useState(false)

    const staticCardDetails = {
      walletBalance: '1,507,000',
      cardExpiringDate: '08/25',
      cardHolder: `${tenant?.surname} ${tenant?.fname}`,
      cardNumber: '**** **** **** ****'
    }

    const [tenantFinanceDetails, setTenantFinanceDetails] = useState([]);
    const [tenantProfileDetails, setTenantProfileDetails] = useState([]);
    const cardDetails = tenantFinanceDetails?.cardDetails;
    const homeDetails = tenantFinanceDetails?.homeDetails;
    const savings = tenantFinanceDetails?.savings;
    const transactions = tenantFinanceDetails?.transactions;
    const wallets = tenantFinanceDetails?.wallets
    const [showEditTenantProfilePopup, setShowEditTenantProfilePopup] = useState(false);
    console.log(tenantFinanceDetails)

    const closeEditTenantProfilePopup = () => {
      setShowEditTenantProfilePopup(!showEditTenantProfilePopup)
    }
  
  useEffect(() => {
    getTenantFinanaceDetails(tenant?.id)
    .then(response => {
      setTenantFinanceDetails(response?.data.data);
      console.log(response.data.data)
      // console.log(tenant?.id)
    })
    .catch(err => console.log(err.message))

    getTenantProfileDetails(tenant?.id)
    .then(response => {
      setTenantProfileDetails(response?.data.data)
      console.log(response.data.data)
    })


    window.scrollTo(0, 0)
  }, []) 

  return (
    <div className='page tenant-profile-page'>
        <div className="tenant-profile-header" style={{ 'gap': 80 }}>
            <div className='tenants-name-section'>
                <div className='name-section'>
                  {
                    tenant?.profilePicture ? (
                      <img className='agent-profile-img' src={tenant?.profilePicture} alt="" />
                    ) : (
                      <div className='profile-holder-img'>{tenant?.username[0]} {tenant?.username[1]}</div>
                    ) 
                  }
                  <div>
                      <h2>{tenant?.username}</h2>
                      <div className='agent-profile-location'>
                        <img className='agent-location-icon' src={locationIcon} alt="" />
                        <p><span>{tenant?.nationality}</span></p>
                      </div>
                      {
                        tenantProfileDetails?.rentStatus?.map(status => (
                          <button className={status.includes('Occupied') ? `occupied-btn tag` : status.includes('Vacant') ? `vacant-btn tag` : status.includes('Due') || status.includes('Loan') ? `due-btn tag` : status.includes('PAID') ? `paid-btn tag` : status.includes('Almost due') ? 'almost-due-btn tag' : 'sdsd' }>{status}</button>
                        ))
                      }
                  </div>
                </div>
                {/* <button className='edit' onClick={() => {setShowEditTenantProfilePopup(!showEditTenantProfilePopup)}}>Edit Profile</button> */}
            </div>
            <div>
              <div className='profile-infoboard' style={{ 'width': 200 }}>
                  <div className="profile-info">
                    <h2>{tenant?.savedAds?.length ? tenant?.savedAds?.length : 0}</h2>
                    <p>Saved Ads</p>
                  </div>
                  <div className="profile-info">
                    <h2>{tenant?.following?.length ? tenant?.following?.length : 0}</h2>
                    <p>Following</p>
                  </div>
              </div>
            </div>
        </div>

        <div className="tenants-finance-section">

          <div>
            <TenantsWalletBalance cardDetails={staticCardDetails} walletBalance={savings?.walletBalance.toLocaleString()} />
            <TenantsWalletTransactions transactions={transactions} />
            <EditTenantPopup visible={showEditTenantProfilePopup} onClose={closeEditTenantProfilePopup} />
          </div>

          <div>
            <div className="hbp-balance hpb-bg-img card">
                <div>
                  <p className='mb-1'>HBP BALANCE</p>
                  {/* <div className='more_vert'>
                    <span class="material-symbols-outlined">more_vert</span>
                  </div> */}
                </div>
                <p>{wallets?.HBP?.accountValue.toLocaleString()}</p>
            </div>
            
            <div className="rent-card card">
              <div className='first'>
                <p>AVAILABLE RENT</p>
                <div className='more_vert'>
                  <span class="material-symbols-outlined">more_vert</span>
                </div>
              </div>
              <p className='available-rent'>{savings?.walletBalance?.toLocaleString()}</p>
              <span className='actual-rent'>{homeDetails?.totalRent?.toLocaleString()}</span>
              <ProgressBar percent={(savings?.walletBalance / homeDetails?.totalRent) * 100} height={6} containerColor={'#D9D9D9'} fillColor={'#2E9BEF'}/>
              <span>Preferred Saving: <span className='preferred-saving'>{savings?.savingPreferences?.frequency}</span></span>
            </div>

            <div className=" card">
              <div className='flex justify-end text-xs'>
                  <span className={rentHistory ? `text-[#1B49FF] p-2 border-b border-b-[#1B49FF]` : 'text-[#71759D] p-2 cursor-pointer'} onClick={() => handleTabs(setRentHistory, [setRentHistory, setLoanHistory])}>Rent History</span>
                  <span className={loanHistory ? `text-[#1B49FF] p-2 border-b border-b-[#1B49FF]` : 'text-[#71759D] p-2 cursor-pointer'} onClick={() => handleTabs(setLoanHistory, [setRentHistory, setLoanHistory])}>Loan History</span>
              </div>
              {/* <p>RENT HISTORY</p>
              <small>Lorem ipsum dolor sit amet consectetur.</small> */}
              {
                rentHistory ? <TenantsRentHistory /> : loanHistory ? <TenantsLoanHistory history={tenantFinanceDetails?.loanHistory} /> : ''
              }
            </div>
          </div>

        </div>

    </div>
  )
}

export default TenantsProfilePage
