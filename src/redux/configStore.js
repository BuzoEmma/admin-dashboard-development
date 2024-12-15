import { configureStore } from '@reduxjs/toolkit';
import summary from './slice/SummarySlice';
import agentsPerformance from './slice/AgentsPerformanceSlice';
import { agents } from './slice/AgentsSlice'
import countries from './slice/CountriesSlice'
import tenants from './slice/TenantsSlice'
import tenantProgress from './slice/TenantsProgressSlice'
import tenantsFinance from './slice/TenantsFinanceSlice'
import activeTenants from './slice/ActiveTenantsSlice'
import inactiveTenants from './slice/InactiveTenantsSlice'
import houses from './slice/HousesSlice'
import OfflineTransactions from './slice/OfflineTransactionsSlice';
import users from './slice/UsersSlice'
import ads from './slice/AdsSlice'
import landlords from './slice/HabeepLandlordsSlice'
import compounds from './slice/CompoundsSlice'
import lands from './slice/LandsSlice'
import hbpRates from './slice/HbpRatesSlice'
import { requestedLoansData } from './slice/LoansDataSlice';
import { outstandingLoansData } from './slice/LoansDataSlice';
import { overdueLoansData } from './slice/LoansDataSlice';
import { completedLoansData } from './slice/LoansDataSlice';
import { agentsResidence } from './slice/AgentsSlice'
import { revenueData, revenueAnalysis } from './slice/RevenueSlice';
import transactions from './slice/TransactionsSlice';
import hbpTransactions from './slice/HbpTransactionsSlice'
import states from './slice/StatesSlice'


const store = configureStore({
  reducer: {
    summary,
    agentsPerformance,
    agents,
    countries,
    tenants,
    tenantProgress,
    tenantsFinance,
    activeTenants,
    inactiveTenants,
    houses,
    OfflineTransactions,
    users,
    ads,
    landlords,
    compounds,
    lands,
    hbpRates,
    requestedLoansData,
    outstandingLoansData,
    overdueLoansData,
    completedLoansData,
    agentsResidence,
    revenueData,
    revenueAnalysis,
    transactions,
    hbpTransactions,
    states
  },
});

export default store;
