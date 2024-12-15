import './index.css'
import './stylesheets/tailwind.css'
import './stylesheets/app.scss';
import './stylesheets/login.scss';
import './stylesheets/sidebar.scss';
import './stylesheets/home.scss';
import './stylesheets/chart.scss';
import './stylesheets/agents.scss';
import './stylesheets/tenants.scss';
import './stylesheets/finances.scss';
import './stylesheets/properties.scss'
// import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from './Authentication/Login'
import Layout from './routes/Layout';
import routes from './routes/index';
import { useState } from 'react';
import ErrorPage from './pages/ErrorPage';

function App() {

  function getToken() {
    const tokenString = localStorage.getItem('admin');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  };
  
  const [token, setToken] = useState(getToken());

  if(!token) {
    return <Login setToken={setToken}/>
  }

  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: routes
    },
  ])




  return (
    <RouterProvider router={router} />
  );
}

export default App;
