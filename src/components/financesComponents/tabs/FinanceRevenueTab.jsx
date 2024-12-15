import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import OverallRevenue from '../revenueComponents/OverallRevenue'
import searchIcon from '../../../asserts/Icons/search-icon.png'
import filterIcon from '../../../asserts/Icons/filter.png'
import plusIcon from '../../../asserts/Icons/plus.png'
import PropertiesList from '../revenueComponents/PropertiesList'
import RegistrationsList from '../revenueComponents/RegistrationsList'
import RentCommissionList from '../revenueComponents/RentCommissionList'
import InterestList from '../revenueComponents/InterestList'
import handleTabs from '../../generalComponents/HandleTabs'
// import { getRevenueAnalysis } from '../../../redux/Api'

const FinanceRevenueTab = () => {
  const dispatch = useDispatch()
  const [searchItem, setSearchItem] = useState('');
  const [properties, setProperties] = useState(true);
  const [registration, setRegistration] = useState(false);
  const [rentCommission, setRentCommision] = useState(false);
  const [interests, setInterest] = useState(false);

  const revenueAnalysis = useSelector((state) => state?.revenueAnalysis?.revenueAnalysis);

  const propList = useSelector((state) => state?.revenueAnalysis?.properties)
  const regisList = useSelector((state) => state?.revenueAnalysis?.registrations)
  const loanInterestList = useSelector((state) => state?.revenueAnalysis?.loanInterests)
  const rentComList  = useSelector((state) => state?.revenueAnalysis?.rentCommissions)
  const agentsReg = useSelector((state) => state?.revenueAnalysis?.registrations?.agents);
  const tenantsReg = useSelector((state) => state?.revenueAnalysis?.registrations?.tenants);
  const landlordsReg = useSelector((state) => state?.revenueAnalysis?.registrations?.landlords)

  const fullRegList = Array.prototype.concat(agentsReg, tenantsReg, landlordsReg);



  console.log(revenueAnalysis)
  // console.log(propList)
  console.log(fullRegList)
  // console.log(loanInterestList)
  // console.log(rentComList)


  var newDataList;

  const handleFilter =()=> {
    if(properties) {
      newDataList = propList?.filter(property => (
        property?.date.toLowerCase().includes(searchItem.toLowerCase())
        || property?.propertyId?.toLowerCase().includes(searchItem.toLowerCase())
        // || property?.value.toLocaleString().includes(searchItem.toLowerCase())
        || property?.location?.city.toLowerCase().includes(searchItem.toLowerCase())
        || property?.location.address.toLowerCase().includes(searchItem.toLowerCase())
        || property?.location.country.toLowerCase().includes(searchItem.toLowerCase())
        || property?.location.state.toLowerCase().includes(searchItem.toLowerCase())
        // || property?.agent.toLowerCase().includes(searchItem.toLowerCase())
      ))
    } else if(registration) {
      newDataList = fullRegList?.filter(record => (
        record?.date.toLowerCase().includes(searchItem.toLowerCase())
        || record?.amount.toLocaleString().includes(searchItem.toLowerCase())
        || record?.name.toLowerCase().includes(searchItem.toLowerCase())
        || record?.location.toLowerCase().includes(searchItem.toLowerCase())
        || record?.type.toLowerCase().includes(searchItem.toLowerCase())
      ))
    } else if(rentCommission) {
      newDataList = loanInterestList?.filter(record => (
        record?.date.toLowerCase().includes(searchItem.toLowerCase())
        || record?.tenant?.toLowerCase().includes(searchItem.toLowerCase())
        // || record?.rentAmount?.toLowerCase().includes(searchItem.toLowerCase())
        // || record?.commission?.toLowerCase().includes(searchItem.toLowerCase())
        || record?.location?.city?.toLowerCase().includes(searchItem.toLowerCase())
        || record?.location.address?.toLowerCase().includes(searchItem.toLowerCase())
        || record?.location.country?.toLowerCase().includes(searchItem.toLowerCase())
        || record?.location?.state?.toLowerCase().includes(searchItem.toLowerCase())
      ))
    } else if(interests) {
      newDataList = loanInterestList?.filter(record => (
        record?.date?.toLowerCase().includes(searchItem.toLowerCase())
        // || record?.rentAmount?.toLocaleString().includes(searchItem.toLowerCase())
        || record?.loanAndInterest?.toLocaleString().includes(searchItem.toLowerCase())
        || record?.location?.city.toLowerCase().includes(searchItem.toLowerCase())
        || record?.location.address.toLowerCase().includes(searchItem.toLowerCase())
        || record?.location.country.toLowerCase().includes(searchItem.toLowerCase())
        || record?.location.state.toLowerCase().includes(searchItem.toLowerCase())
      ))
    }
  }

  searchItem && handleFilter();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchItem(e.target.value);
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      {/* <div className='mb-5'>
        <div className="chart-area_item p-5">
            <OverallRevenue />
        </div>
      </div> */}
      <div className="chart-area_item">
        <div className='flex justify-between items-center mb-5'>
            <div>
                <h3 className='text-xl font-semibold'>Revenue Analysis</h3>
                <p className='text-xs text-gray-500'>View details of all revenue generated</p>
            </div>
            <div className='inline-flex items-baseline'>
                <div className='renenue-nav mr-3'>
                    <span className={properties ? `highlighted-revenue` : ''} onClick={() => handleTabs(setProperties, [setProperties, setRegistration, setRentCommision, setInterest])}>Properties</span>
                    <span className={registration ? `highlighted-revenue` : ''} onClick={() => handleTabs(setRegistration, [setProperties, setRegistration, setRentCommision, setInterest])}>Registrations</span>
                    <span className={rentCommission ? `highlighted-revenue` : ''} onClick={() => handleTabs(setRentCommision, [setProperties, setRegistration, setRentCommision, setInterest])}>Rent Commision</span>
                    <span className={interests ? `highlighted-revenue` : ''} onClick={() => handleTabs(setInterest, [setProperties, setRegistration, setRentCommision, setInterest])}>Interests</span>
                </div>
                <div className="search-filter">
                    <div className="search-bar mr-3 flex justify-between item-center h-10" style={{width: '200px'}}>
                        <input type="text" value={searchItem} onChange={handleSearch} placeholder='Search' />
                        <div>
                            <img src={searchIcon} alt="" />
                        </div>
                    </div>
                    {/* <div>
                        <img src={plusIcon} className='h-8 cursor-pointer mr-3' alt="" />
                    </div>
                    <div className='filter-area'>
                        <img src={filterIcon} alt="" />
                    </div> */}
              </div>
            </div>
        </div>
        <div>
          {
            searchItem.length ? (
                properties ? <PropertiesList properties={newDataList} />  : registration ? <RegistrationsList registrations={newDataList} /> : rentCommission ? <RentCommissionList rentCommissions={newDataList} /> : interests ? <InterestList interests={newDataList} /> : ''
            ) : (
                properties ? <PropertiesList properties={propList} />  : registration && fullRegList ? <RegistrationsList registrations={fullRegList} /> : rentCommission ? <RentCommissionList rentCommissions={rentComList} /> : interests ? <InterestList interests={loanInterestList} /> : ''
            )
          }
        </div>
      </div>
    </div>
  )
}

export default FinanceRevenueTab
