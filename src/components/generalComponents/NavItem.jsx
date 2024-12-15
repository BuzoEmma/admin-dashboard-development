import React from 'react'
import { NavLink } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom'

const NavItem = ({ name, icon, path, activeIcon}) => {
  const location = useLocation();
  const pathName = location.pathname;
  return (
      <NavLink to={path} className={({ isActive }) => (isActive ? "nav-active" : "link")}>
        {
          ({ isActive }) => (isActive ? (
            <li>
              <img src={activeIcon} alt="Navigation icon" />
              <p>{name}</p>
            </li>
            ) 
          : (
            <li>
              <img src={icon} alt="Navigation icon" />
              <p>{name}</p>
            </li>
            ))
        }
      </NavLink>
  )
}

export default NavItem