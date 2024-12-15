import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import logo from '../asserts/logo-svg.svg'
import ErrImg from '../asserts/error-img.svg'
import fourOfour from '../asserts/404.svg'

const ErrorPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <div className='page'>
      <img src={logo} alt="Logo" />

      <div className='err-img1'>
        <img src={ErrImg} alt="Error image" />
        <p>Oops! it seems like something is wrong</p>
        <button onClick={() => {navigate(pathName)}}>Retry</button>
      </div>

      <div className='err-img2'>
        <img src={fourOfour} alt="" />
        <img src={fourOfour} alt="" />
      </div>
    </div>
  )
}

export default ErrorPage
