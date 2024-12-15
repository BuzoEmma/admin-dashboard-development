import React, { useState } from 'react'
import TenantsFinancePerfomance from '../tenantsFinanceComponents/TenantsFinancePerfomance'
import TenantsFinanceLabels from '../tenantsFinanceComponents/TenantsFinanceLabels'
import searchIcon from '../../../asserts/Icons/search-icon.png'
import filterIcon from '../../../asserts/Icons/filter.png'
import ActiveTenantsList from '../activeTenantsComponents/ActiveTenantsList';
import NoAvailableData from '../../generalComponents/NoAvailableData'
import TenantsFinanceSkeleton from '../../skeleton/TenantsFinanceSkeleton'
import TableSkeleton from '../../skeleton/TableSkeleton'
import RentstatusSummary from '../activeTenantsComponents/RentstatusSummary'

const ActiveTenantsTab = ({ tenants, finance }) => {
    const [searchTenant, setSearchTenant] = useState('');
    // console.log(tenants)

    function checkForSubstring(arr, substring) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].toLowerCase().includes(substring)) {
                return true;
            }
        }
        return false;
    }

    if (Array.isArray(tenants)) {
        // Use filter method here
        var newData = tenants?.filter((tenant) => (
            tenant?.username.toLowerCase().includes(searchTenant.toLowerCase())
            || tenant?.nationality.toLowerCase().includes(searchTenant.toLowerCase())
            || tenant?.email.toLowerCase().includes(searchTenant.toLowerCase())
            || checkForSubstring(tenant?.rentStatus, searchTenant.toLowerCase())
        ));
      } else {
        console.error("Data is not an array");
      }

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchTenant(e.target.value);
    }
  return (
    <div>

        <div className="chart-area tenants-page-chart">
            {/* {
                finance?.length ? ( */}
                    <div className='chart-area_item tenants-finance-display-area'>
                    {
                        Object.keys(finance || {})?.length ? (
                            <>
                                {
                                    finance?.paidRent?.amount === 0 && finance?.oweRent?.amount === 0 && finance?.tenantSaving?.amount === 0 && finance?.upToDate?.amount === 0 ? (
                                        <NoAvailableData notice='No Chart Data'/>
                                    ) : (
                                        <>
                                            <div className='piechart'>
                                                <p className="font-bold mb-3">Tenants Finance Performance</p>
                                                <TenantsFinancePerfomance finance={finance} />
                                                <div className="piechart-center">
                                                    <div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                }
                                <div className="tenants-finance-info">
                                    <div className='tenants-finance-info-item'>
                                        <TenantsFinanceLabels color='#1CAA43' amount={finance?.paidRent?.amount} title='Paid Rent' tenantsNum={finance?.paidRent?.tenantsCount} percent={finance?.paidRent?.percentage ? finance?.paidRent?.percentage : 0} currency={finance?.paidRent?.amountCurrency} />
                                        <TenantsFinanceLabels color='#E93B3B' amount={finance?.oweRent?.amount} title='Owed Rent' tenantsNum={finance?.oweRent?.tenantsCount} percent={finance?.oweRent?.percentage ? finance?.oweRent?.percentage : 0} currency={finance?.oweRent?.amountCurrency} />
                                    </div>
                                    <div className='tenants-finance-info-item'>
                                        <TenantsFinanceLabels color='#FFDB1B' amount={finance?.tenantSaving?.amount} title='Saving' tenantsNum={finance?.tenantSaving?.tenantsCount} percent={finance?.tenantSaving?.percentage ? finance?.tenantSaving?.percentage : 0} currency={finance?.tenantSaving?.amountCurrency} />
                                        <TenantsFinanceLabels color='#1B49FF' amount={finance?.upToDate?.amount} title='Up-to-date' tenantsNum={finance?.upToDate?.tenantsCount} percent={finance?.upToDate?.percentage ? finance?.upToDate?.percentage : 0} currency={finance?.upToDate?.amountCurrency} />
                                    </div>
                                </div>
                            </>
                        ) : <TenantsFinanceSkeleton />
                    }
                </div>

            <div>
                {
                    Object.keys(finance || {})?.length ? (
                        <>
                            <RentstatusSummary data={finance?.stats?.rentStatus} />
                        </>
                    ) : <TableSkeleton />
                }
            </div>
        </div>

        <div className="search-filter">
            <div className="search-bar">
                <input type="text" value={searchTenant} onChange={handleSearch}  placeholder='Search for tenant eg Ag 01' />
                <div>
                    <img src={searchIcon} alt="" />
                </div>
            </div>
        </div>

        <div>
            {
                tenants?.length ? (
                    searchTenant?.length ? (
                        <ActiveTenantsList tenants={newData} />
                    ) : (
                        <ActiveTenantsList tenantsData={tenants} />
                    )
                ) : (
                    <TableSkeleton />
                )
            }
        </div>

    </div>
  )
}

export default ActiveTenantsTab
