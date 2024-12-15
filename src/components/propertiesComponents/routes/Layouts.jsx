import React from 'react'
import { Outlet } from "react-router-dom"
import { NavLink } from 'react-router-dom'
// import Sidebar from '../components/generalComponents/Sidebar'
// import PageTitle from '../components/generalComponents/PageTitle'

const Layout = () => {
  return (
    <div className=''>
      <div className="tenants-nav">
        <NavLink >Houses</NavLink>
        <NavLink >Lands</NavLink>
      </div>
        <div className=''>
            <Outlet />
        </div>
    </div>
  )
}

export default Layout
