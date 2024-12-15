import React, { useEffect, useState } from 'react'
import AppearanceTab from '../components/settingsComponents/tabs/AppearanceTab';
import ProfileTab from '../components/settingsComponents/tabs/ProfileTab';
import handleTabs from '../components/generalComponents/HandleTabs';
import profilepic from '../asserts/profile-pic.png'

const SettingsPage = () => {
  const [appearance, setAppearance] = useState(true);
  const [profile, setProfile] = useState(false);
  const [adminImg, setAdminImg] = useState('')

  useEffect(()=>{
    const photo = JSON.parse(localStorage.getItem('adminImg')) || profilepic
    setAdminImg(photo);
    // console.log(photo)
  }, [])

  return (
    <>
      <div className="tenants-nav z-10 -mb-12">
          <p className={appearance ? `highlighted` : ''} onClick={() => handleTabs(setAppearance, [setAppearance, setProfile])}>Appearance</p>
          <p className={profile ? `highlighted` : ''} onClick={() => handleTabs(setProfile, [setAppearance, setProfile])}>Profile</p>
      </div>

      <div className="finances-page page">
          <div>
              {
                  appearance ? <AppearanceTab/> : profile ? <ProfileTab adminImg={adminImg} /> : ''
              }
          </div>
      </div>
    </>
  )
}

export default SettingsPage
