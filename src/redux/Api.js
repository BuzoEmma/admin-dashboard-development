import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';

const admin = JSON.parse(localStorage.getItem('admin'));
axios.defaults.headers.common['Authorization'] = `Bearer ${admin?.token}`;
const ApiUrl = import.meta.env.VITE_API_KEY;

const currentYear = new Date().getFullYear()

export const getSummary = createAsyncThunk('admin-dashboard/getSummary', async () => {
    return await axios.get(ApiUrl + '/rem/mgt/summary')
    .then(response => {
        return response.data
    })
    .catch(err => {
        console.log(err.message)
    })
});

export const getAgentsPerformance = createAsyncThunk('admin-dashboard/getAgentsPerformance', async ({ year=currentYear.toString(), state, city='' }, thunkAPI) => {
    // console.log(typeof location, location?.toString().length > 0)
    console.log(year, state, city)
    return await axios.get(ApiUrl + `/rem/mgt/performance/agents/:${year}?state=${state}&city=${city}`)
    .then(response => {
        // console.log(response.data.data)
        return response.data.data;
    })
    .catch(err => {
        console.log(err.message)
    })
});

// export const getStates = async (country_code) => {
    export const getStates = createAsyncThunk('admin-dashboard/getStates', async (country_code, thunkAPI) => {
        return await axios.get(ApiUrl + '/countries-api/states/' + country_code )
    .then(response => {
        return response?.data?.results;        
        // setStates(response.data.results.map(result => ({ label: result.name, value: result.stateid})));
    })
    .catch(err => {
        console.log(err.message)
    })
  })


export const getAgents = createAsyncThunk('admin-dashboard/getAgents', async () =>{
    return await axios.get(ApiUrl + '/rem/mgt/agents')
    .then(response => {
        return response
    })
    .catch(err => {
        console.log(err.message)
    })

});

export const getCountries = createAsyncThunk('admin-dashboard/getCountries', async () => {
    return await axios.get(ApiUrl + '/countries-api/all-countries')
    .then(response => {
        return response
    })
    .catch(err => {
        console.log(err.message)
    })

});

export const getTenants = createAsyncThunk('admin-dashboard/getTenants', async () => {
    return await axios.get(ApiUrl + '/rem/mgt/tenants/all')
    .then(response => {
        // console.log(response?.data)
        return response?.data?.data
    })
    .catch(err => {
        console.log(err.message)
    })
});

export const getTenantsProgress = createAsyncThunk('admin-dashboard/getTenantsProgress', async () => {
    return await axios.get(ApiUrl + '/rem/mgt/tenants/progress')
    .then(response => {
        return response
    })
    .catch(err => {
        console.log(err.message)
    })

});
// getTenantsByType

export const getActiveTenants = createAsyncThunk('admin-dashboard/getActiveTenants', async () => {
    return await axios.get(ApiUrl + '/rem/mgt/tenants/type/active')
    .then(response => {
        // console.log(response?.data?.data)
        return response?.data?.data
    })
    .catch(err => {
        console.log(err.message)
    })

});

export const getInactiveTenants = createAsyncThunk('admin-dashboard/getInactiveTenants', async () => {
    return await axios.get(ApiUrl + '/rem/mgt/tenants/type/inactive')
    .then(response => {
        // console.log(response?.data?.data)
        return response?.data?.data
    })
    .catch(err => {
        console.log(err.message)
    })

});


export const getTenantsFinance = createAsyncThunk('admin-dashboard/getTenantsFinance', async () => {
    return await axios.get(ApiUrl + '/rem/mgt/tenants/performance/finance')
    .then(response => {
        // console.log(response?.data?.data)
        return response?.data?.data
    })
    .catch(err => {
        console.log(err.message)
    })

});

export const getHabeepHouses = createAsyncThunk('admin-dashboard/getHabeepHouses', async () => {
    return await axios.get(ApiUrl + '/rem/mgt/houses')
    .then(response => {
        // console.log(response?.data?.data)
        return response?.data?.data
    })
    .catch(err => {
        console.log(err.message)
    })
});

export const getTenantFinanaceDetails = async (tenantId) => {
    return await axios.get(ApiUrl + `/rem/mgt/tenants/performance/finance/${tenantId}` )
    .then(response => {
        return response;
    })
    .catch(err => {
        console.log(err.message)
    })
}

export const getTenantProfileDetails = async (tenantId) => {
    return await axios.get(ApiUrl + `/rem/mgt/tenants/profile/${tenantId}` )
    .then(response => {
        return response;
    })
    .catch(err => {
        console.log(err.message)
    })
}

export const getOfflineTransactions = createAsyncThunk('admin-dashboard/getOfflineTransactions', async () => {
    return await axios.get(ApiUrl + `/rem/mgt/finance/offline-deposits/all`)
    .then(response => {
        // console.log(response.data.data)
        return response?.data?.data;
        // return response;
    })
    .catch(err => {
        console.log(err.message);
        return err.message
    })
})

export const takeActionOnOfflineTransaction = async (action) => {
    return await axios.put(ApiUrl + `/rem/mgt/finance/offline-deposits/action`, action)
    .then(response => {
        // console.log(response)
        return response;
    })
    .catch(err => {
        console.log(err)
    })
}

export const getUsers = createAsyncThunk('admin-dashboard/getUsers', async () => {
    return await axios.get(ApiUrl + '/rem/mgt/user-info')
    .then(response => {
        // console.log(response?.data?.data)
        return response?.data?.data;
    })
    .catch(err => {
        console.log(err.message)
    })
});

export const getAds = createAsyncThunk('admin-dashboard/getAds', async () => {
    return await axios.get(ApiUrl + '/rem/mgt/properties/ads')
    .then(response => {
        return response.data.data;
    })
    .catch(err => {
        console.log(err.message)
    })
});

export const getHabeepLandlords = createAsyncThunk('admin-dashboard/getHabeepLandlords', async () => {
    return await axios.get(ApiUrl + '/rem/mgt/landlords')
    .then(response => {
        // console.log(response?.data?.data)
        return response?.data?.data;
    })
    .catch(err => {
        console.log(err.message)
    })
});

export const getCompounds = createAsyncThunk('admin-dashboard/getCompounds', async () => {
    return await axios.get(ApiUrl + '/rem/mgt/landlords/units/all')
    .then(response => {
        // console.log(response?.data?.data)
        return response?.data?.data;
    })
    .catch(err => {
        console.log(err.message)
    })
});

export const getLands = createAsyncThunk('admin-dashboard/getLands', async () => {
    return await axios.get(ApiUrl + '/rem/mgt/properties/lands')
    .then(response => {
        // console.log(response?.data?.data)
        return response?.data?.data;
    })
    .catch(err => {
        console.log(err.message)
    })
});

export const getHbpRates = createAsyncThunk('admin-dashboard/getHbpRates', async () => {
    return await axios.get(ApiUrl + '/rem/mgt/finance/hbp-economy')
    .then(response => {
        // console.log(response?.data?.data)
        return response?.data?.data;
    })
    .catch(err => {
        console.log(err.message)
    })
});

// export const getLoansCategory = createAsyncThunk('admin-dashboard/getRequestedLoans', async (category, thunkAPI) => {
//     return await axios.get(ApiUrl + `/rem/mgt/finance/loan/fetch?group=${category}`)
//     .then(response => {
//         // console.log(response?.data?.data)
//         return response?.data?.data
//     })
//     .catch(err => {
//         console.log(err.message)
//     })
// });

export const getRequestedLoans = createAsyncThunk('admin-dashboard/getRequestedLoans', async () => {
    return await axios.get(ApiUrl + `/rem/mgt/finance/loan/fetch?group=requested`)
    .then(response => {
        // console.log(response?.data?.data)
        return response?.data?.data
    })
    .catch(err => {
        console.log(err.message)
    })
});

export const getOutstandingLoans = createAsyncThunk('admin-dashboard/getOutstandingLoans', async () => {
    return await axios.get(ApiUrl + `/rem/mgt/finance/loan/fetch?group=outstanding`)
    .then(response => {
        // console.log(response?.data?.data)
        return response?.data?.data
    })
    .catch(err => {
        console.log(err.message)
    })
});

export const getOverdueLoans = createAsyncThunk('admin-dashboard/getOverdueLoans', async () => {
    return await axios.get(ApiUrl + `/rem/mgt/finance/loan/fetch?group=overdue`)
    .then(response => {
        // console.log(response?.data?.data)
        return response?.data?.data
    })
    .catch(err => {
        console.log(err.message)
    })
});

export const getCompletedLoans = createAsyncThunk('admin-dashboard/getCompletedLoans', async () => {
    return await axios.get(ApiUrl + `/rem/mgt/finance/loan/fetch?group=completed`)
    .then(response => {
        // console.log(response?.data?.data)
        return response?.data?.data
    })
    .catch(err => {
        console.log(err.message)
    })
});


export const takeActionOnApprovedLoan = async (action) => {
    return await axios.put(ApiUrl + `/rem/mgt/finance/update-loan-status`, action)
    .then(response => {
        // console.log(response)
        return response;
    })
    .catch(err => {
        console.log(err);
    })
}

export const getAgentsResidences = createAsyncThunk('admin-dashboard/getAgentsResidences', async () => {
    return await axios.get(ApiUrl + '/rem/mgt/agents/info/stats')
    .then(response => {
        // console.log(response?.data?.data)
        return response?.data?.data?.residence;
    })
    .catch(err => {
        console.log(err.message)
    })
});

export const getRevenueData = createAsyncThunk('admin-dashboard/getRevenueData', async () => {
    return await axios.get(ApiUrl + '/rem/mgt/finance/revenue/data')
    .then(response => {
        // console.log(response?.data?.data?.categories)
        return response?.data?.data?.categories;
    })
    .catch(err => {
        console.log(err.message)
    })
});

export const getRevenueAnalysis = createAsyncThunk('admin-dashboard/getRevenueAnalysis', async () => {
    return await axios.get(ApiUrl + '/rem/mgt/finance/revenue/analysis')
    .then(response => {
        // console.log(response?.data?.data.categories)
        return response?.data?.data;
    })
    .catch(err => {
        console.log(err.message)
    })
});

export const getAllTransactions = createAsyncThunk('admin-dashboard/getAllTransactions', async () => {
    return await axios.get(ApiUrl + '/rem/mgt/finance/all-transactions')
    .then(response => {
        // console.log(response?.data?.data?.transactions)
        return response?.data?.data?.transactions;
    })
    .catch(err => {
        console.log(err.message)
    })
});

export const getHbpTransactions = createAsyncThunk('admin-dashboard/getHbpTransactions', async () => {
    return await axios.get(ApiUrl + '/rem/mgt/finance/wallet/hbp-wallet/transactions')
    .then(response => {
        // console.log(response?.data?.data?.transactions)
        return response?.data?.data?.transactions
    })
    .catch(err => {
        console.log(err.message)
    })
});

export const getLoansActivity = async () => {
    return await axios.get(ApiUrl + '/rem/mgt/finance/loan-activity')
    .then(response => {
        // console.log(response)
        return response?.data
    })
    .catch(err => {
        console.log(err.message)
    })
};