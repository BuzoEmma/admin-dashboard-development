import React, { useState } from 'react'
import logo from '../asserts/logo-png.png'
import authService from './services/auth-service'

const Login = ({ setToken }) => {
  
  const [userData, setUserData] = useState({});

  const { loginAdmin } = authService();

  const handleInput = (e) => {
    let newInput = { [e.target.name] : e.target.value };
    setUserData({...userData, ...newInput});
  }

  const handleLogin = (e) => {
    e.preventDefault()
    loginAdmin(userData.email, userData.password, setToken);
  }

  return (
    <div className='login-screen'>
        <div className='login-div'>
            <div>
                <img src={logo} alt="" />
            </div>
            <form onSubmit={handleLogin}>
                <h2 className='login-header'>Admin Login</h2>
                <p>Please enter details if you have been added as an admin</p>

                <input type="text" placeholder='Work Email' name='email' onChange={(e) => {handleInput(e)}} />

                <input type="password" placeholder='Password' name='password' onChange={(e) => {handleInput(e)}} />

                <button type='submit'>Login</button>

                <span>Forgot password?</span>
            </form>
        </div>
    </div>
  )
}

export default Login