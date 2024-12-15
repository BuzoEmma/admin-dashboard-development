import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
// import profileIcon from '../../asserts/Icons/admin-img.png'
import menuIcon from '../../asserts/Icons/menu.png'
import backIcon from '../../asserts/Icons/back.png'
import profileIcon from '../../asserts/Icons/profile-icon.png'
import passwordIcon from '../../asserts/Icons/password.png'
import emailIcon from '../../asserts/Icons/email.png'
import logoutIcon from '../../asserts/Icons/logout.png'
import authService from '../../Authentication/services/auth-service'
import Login from '../../Authentication/Login'

const PageTitle = () => {
  const navigite = useNavigate();
  const [dropdown, setDropdown] = useState(false);
  const [logout, setLogout] = useState(false);

  const { logoutAdmin } = authService()

  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location.pathname;
  const modifiedPathName = pathName.slice(1);
  const title = modifiedPathName.charAt(0).toUpperCase() + modifiedPathName.slice(1).toLowerCase();

  const admin = JSON.parse(localStorage.getItem('admin'));
  const adminImg = admin?.data?.passport;

  const handleDropdown =()=> {
    setDropdown(!dropdown)
  }

  function refreshPage() {
    window.location.reload(false);
  }

  const handleLogout =()=> {
    setDropdown(!dropdown);
    logoutAdmin()
    refreshPage()
  }

  const logedInBgColor = {
    backgroundColor: '#E5E5E5'
  }

  const logedOutBgColor = {
    backgroundColor: '#5A71CC'
  }

  // logout && logoutAdmin() && handleNavigate()


  return (
    <div className='title-header z-50'>
        <div className='title-header-child'>
          {
            pathName == '/' || title.includes('Home')  ? '' :<span className="material-symbols-outlined" onClick={() => {navigate(-1)}}>arrow_back</span>
          }
          <h3>{ pathName == '/' ? "Home" : title.includes('Agent/') ? "Agents Profile" : title.includes('Tenant/') ? "Tenants Profile" : title.includes('Landlord/') ? 'Landlords Profile' : title  }</h3>
        </div>

        <div className='profile-section'>
            <div className="profile" onClick={handleDropdown}>
                <img src={adminImg} alt="" />
                <span>Admin</span>
            </div>

          {
            (
              <div className={dropdown ? "admin-dropdown move-down" : 'admin-dropdown move-up'}>
                <span className="material-symbols-outlined close" onClick={() => {setDropdown(!dropdown)}}>close</span>
                <div className='admin-info'>
                  <img src={profileIcon} alt="" />
                  <p>{admin?.data?.username}</p>
                </div>
                <div className='admin-info'>
                  <img src={emailIcon} alt="" />
                  <p>{admin?.data?.email}</p>
                </div>
                <div className='admin-info'>
                  <img src={passwordIcon} alt="" />
                  <p style={{marginRight: '40px'}}>*******</p>
                  <button className='edit-password'>Edit</button>
                </div>
                <div className='admin-info'>
                  <img  src={logoutIcon} alt="" />
                  {/* <p style={{marginRight: '40px'}}>Log out</p> */}
                  <button className='bg-[#E5E5E5] text-xs px-3 py-2 rounded' onClick={() => handleLogout()}>
                    Logout
                  </button>
                </div>
              </div>
            )
          }
        </div>
    </div>
  )
}

export default PageTitle