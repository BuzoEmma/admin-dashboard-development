import React from 'react'
import { Outlet } from "react-router-dom"
import Sidebar from '../components/generalComponents/Sidebar'
import PageTitle from '../components/generalComponents/PageTitle'

const Layout = () => {
  return (
    <div className='main'>
        <Sidebar />
        <div className='dashboard'>
            <PageTitle />
            <div className='display-area'>
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default Layout
