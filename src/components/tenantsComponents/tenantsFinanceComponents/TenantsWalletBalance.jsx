import React from 'react'
import moreIcon from '../../../asserts/Icons/more.png'

const TenantsWalletBalance = ({ cardDetails, walletBalance }) => {
  return (
    <div className='tenant-wallet-balance-area card'>
      <div className='balance'>
        <p className='tenant-wallet-title'>WALLET BALANCE</p>
        <h2 className='tenant-wallet-balance'>{walletBalance}</h2>
      </div>
      <div className='card-details'>
        <div className='card-info'>
            <p className="detail-title">VALID THRU</p>
            <p className="detail-info">{cardDetails.cardExpiringDate}</p>
        </div>
        <div className='card-info'>
            <p className="detail-title">CARD HOLDER</p>
            <p className="detail-info">{cardDetails.cardHolder}</p>
        </div>
        <div className='card-info'>
            <p className="detail-title">CARD NUMBER</p>
            <p className="detail-info">{cardDetails.cardNumber}</p>
        </div>
      </div>
      {/* <div className='more_vert'>
        <span class="material-symbols-outlined">more_vert</span>
      </div> */}
    </div>
  )
}

export default TenantsWalletBalance
