import React from 'react'
import { useLocation } from 'react-router-dom'
import logo from '../../asserts/logo-svg.svg'
import home from '../../asserts/Icons/sidebar_icons/home.png'
import ads from '../../asserts/Icons/sidebar_icons/ads.png'
import properties from '../../asserts/Icons/sidebar_icons/properties.png'
import agents from '../../asserts/Icons/sidebar_icons/agents.png'
import tenants from '../../asserts/Icons/sidebar_icons/tenants.png'
import landlords from '../../asserts/Icons/sidebar_icons/landlords.png'
import account from '../../asserts/Icons/sidebar_icons/admin-img.png'
import settings from '../../asserts/Icons/sidebar_icons/settings.png'
import finance from '../../asserts/Icons/sidebar_icons/finance.png'

import activeHome from '../../asserts/Icons/active_sidebar_icons/home.png'
import activeAds from '../../asserts/Icons/active_sidebar_icons/ads.png'
import activeProperties from '../../asserts/Icons/active_sidebar_icons/properties.png'
import activeAgents from '../../asserts/Icons/active_sidebar_icons/agents.png'
import activeTenants from '../../asserts/Icons/active_sidebar_icons/tenants.png'
import activeLandlords from '../../asserts/Icons/active_sidebar_icons/landlords.png'
import activeAccount from '../../asserts/Icons/active_sidebar_icons/admin-img.png'
import activeSettings from '../../asserts/Icons/active_sidebar_icons/settings.png'
import activeFinance from '../../asserts/Icons/active_sidebar_icons/finance.png'
import NavItem from './NavItem'

const Sidebar = () => {
  const location = useLocation();
  const path = location.pathname;

  if(path === '*') {
    return '';
  }

  return (
    <div className='sidebar'>
        <div>
          <img className="logo mx-auto" src={logo} width={100} alt="" />
        </div>
        <nav>
            <ul>
                <NavItem name="Home" icon={home} activeIcon={activeHome} path="/" />
                <NavItem name="Ads" icon={ads} activeIcon={activeAds} path="/ads"/>
                <NavItem name="Properties" icon={properties} activeIcon={activeProperties} path="/properties"/>
                <NavItem name="Agents" icon={agents} activeIcon={activeAgents} path="/agents"/>
                <NavItem name="Tenants" icon={tenants} activeIcon={activeTenants} path="/tenants"/>
                <NavItem name="Finances" icon={finance} activeIcon={activeFinance} path="/finances"/>
                <NavItem name="Landlords" icon={landlords} activeIcon={activeLandlords} path="/landlords"/>
            </ul>
            <ul className='settings-nav'>
              <NavItem name="Settings" icon={settings} activeIcon={activeSettings} path="/settings"/>
              <NavItem name="Account" icon={account} activeIcon={activeAccount} path="/account"/>
            </ul>
        </nav>
    </div>
  )
}

export default Sidebar