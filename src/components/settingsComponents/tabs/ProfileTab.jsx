import React from 'react'
import AdminEditForm from '../AdminEditForm'

const ProfileTab = ({adminImg}) => {
  return (
    <div>
      <div className='mb-10'>
        <h2 className=' text-sm'>PERSONAL INFO</h2>
        <p className='text-[#A7ACB2] font-thin text-xs'>Edit your personal information</p>
      </div>
      
      <hr className='mb-2' />

      <AdminEditForm adminImg={adminImg} />
    </div>
  )
}

export default ProfileTab
