import React from "react"
import PathConstants from "./pathsConstants"
import Homepage from '../pages/Homepage'
import AgentsPage from '../pages/AgentsPage'
import TenantsPage from '../pages/TenantsPage'
import AgentsProfilePage from '../pages/AgentsProfilePage'
import TenantsProfilePage from '../pages/TenantsProfilePage'
import PropertiesPage from '../pages/PropertiesPage'
import AdsPage from '../pages/AdsPage'
import LandlordsPage from '../pages/LandlordsPage'
import SettingsPage from '../pages/SettingsPage'
import AccountsPage from '../pages/AccountsPage'
import FinancesPage from '../pages/FinancesPage'
import Login from "../Authentication/Login"
import LandlordsProfilePage from "../pages/LandlordsProfilePage"


const routes = [
    // { path: '/', element: <Homepage /> },
    { path: PathConstants.LOGIN, element: <Login /> },
    { path: PathConstants.HOME, element: <Homepage /> },
    { path: PathConstants.AGENTS, element: <AgentsPage /> },
    { path: PathConstants.AGENTSPROFILE, element: <AgentsProfilePage /> },
    { path: PathConstants.TENANTS, element: <TenantsPage /> },
    { path: PathConstants.TENANTSPROFILE, element: <TenantsProfilePage /> },
    { path: PathConstants.LANDLORDSPROFILE, element: <LandlordsProfilePage /> },
    { path: PathConstants.PROPERTIES, element: <PropertiesPage /> },
    { path: PathConstants.ADS, element: <AdsPage /> },
    { path: PathConstants.LANDLORDS, element: <LandlordsPage /> },
    { path: PathConstants.SETTINGS, element: <SettingsPage /> },
    { path: PathConstants.ACCOUNT, element: <AccountsPage /> },
    { path: PathConstants.FINANCES, element: <FinancesPage /> },
]

export default routes