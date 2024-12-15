import React, { useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import locationIcon from '../asserts/Icons/location2.png'
import axios from 'axios';
import searchIcon from '../asserts/Icons/search-icon.png'
import UnitTab from '../components/agentsComponents/tabs/UnitTab';
import TenantsTab from '../components/agentsComponents/tabs/TenantsTab';
import LoanTab from '../components/agentsComponents/tabs/LoanTab';
import TransactionTab from '../components/agentsComponents/tabs/TransactionTab';
import handleTabs from '../components/generalComponents/HandleTabs';
import TableListComponent from '../components/generalComponents/TableListComponent';

const AgentsProfilePage = () => {

  const [agentDetails, setAgentDetails] = useState([]);
  const [units, setUnits] = useState(true);
  // const [tenants, setTenants] = useState(false);
  // const [loans, setLoans] = useState(false);
  const [transactions, setTransactions] = useState(false);

  const location = useLocation();
  const agent = location?.state?.agent;


//   const unitsData = [
//     {
//         id: 'Cal 02',
//         house: '06',
//         location: 'Plot 304 Sheeran highway, Lagos',
//         value: 'N40,000,000.00',
//         tenants: '04',
//         landlord: 'Umoh Daniel'
//     },
//     {
//         id: 'Cal 09',
//         house: '06',
//         location: 'Plot 304 Sheeran highway, Lagos',
//         value: 'N340,000,000.00',
//         tenants: '06',
//         landlord: 'Emmanuel Bassey'
//     }
// ]
const unitsData = agent?.ads

const tenantsData = [
  {
      id: 'Hou 01',
      bedroom: 4,
      value: 'N20,000,000',
      tenantName: 'Emerald Joseph',
      dueDate: 'Apr 04, 2023',
      houseTag: ['Occupied', 'Due'],

  },
  {
      id: 'Hou 23',
      bedroom: 2,
      value: 'N10,000,000.00',
      tenantName: 'Emerald Joseph',
      dueDate: 'Apr 04, 2023',
      houseTag: ['Vacant'],

  },
  {
      id: 'Hou 22',
      bedroom: 6,
      value: 'N30,000,000.00',
      tenantName: 'Bassey Duke',
      dueDate: 'Apr 27, 2023',
      houseTag: ['Occupied', 'Almost due'],
  },
  {
      id: 'Hou 21',
      bedroom: 6,
      value: 'N30,000,000.00',
      tenantName: 'Chris Olubamiu',
      dueDate: 'Aug 18, 2023',
      houseTag: ['Occupied', 'Paid', 'Loan'],
  },
  {
      id: 'Hou 07',
      bedroom: 1,
      value: 'N5,000,000.00',
      tenantName: 'Bartholomeum Mona',
      dueDate: 'Aug 18, 2023',
      houseTag: ['Occupied', 'Paid', 'Loan'],
  },
]

const loansData = [
  {
      id: 'Hou 01',
      bedroom: 4,
      value: 'N20,000,000',
      tenantName: 'Emerald Joseph',
      dueDate: 'Apr 04, 2023',
      walletBalance: 'N200,000',
      houseTag: ['Loan']
  },
  {
      id: 'Hou 21',
      bedroom: 4,
      value: 'N20,000,000',
      tenantName: 'Emerald Joseph',
      dueDate: 'Aug 18, 2023',
      walletBalance: 'N250,000',
      houseTag: ['Loan']
  },
]

  const agentsInitials =(fname, surname)=> {
    const firstStr = fname[0];
    const secondStr = surname[0];
    const initials = firstStr + secondStr;
    return initials;
}

  const API_URL = import.meta.env.VITE_API_KEY;

  const getAgentDetails = async (agentId) => {
    return await axios.get(API_URL + `/rem/mgt/agents/${agentId}` )
    .then(response => {
        setAgentDetails(response?.data?.data);
        console.log(response?.data?.data)
    })
    .catch(err => {
        console.log(err.message)
    })
  }


  useEffect(() => {
    getAgentDetails(agent?.id);
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='page'>
      {
        agentDetails ? (
          <>
          <div className="agent-profile-header">
            <div className='name-section'>
                {
                  agentDetails?.profileImg ? (
                    <img className='agent-profile-img' src={agentDetails?.profileImg} alt="" />
                  ) : (
                    <div className='profile-holder-img'>{agentsInitials(agent?.fname, agent?.surname)}</div>
                  ) 
                }
                <div>
                    <h2><span>{agent?.fname}</span> <span>{agent?.surname}</span></h2>
                    <div className='agent-profile-location'>
                      <img className='agent-location-icon' src={locationIcon} alt="" />
                      <p><span>{agent?.state}</span> - <span>{agent?.city}</span></p>
                    </div>
                </div>
            </div>

            <div className='profile-infoboard' style={{'width': 400}}>
                <div className="profile-info">
                  <h2>0</h2>
                  <p>Units</p>
                </div>
                <div className="profile-info">
                  <h2>{agentDetails?.ads?.length > 0 ? agentDetails?.ads?.length : '0'}</h2>
                  <p>Ads</p>
                </div>
                <div className="profile-info">
                  <h2>{agentDetails?.followers?.length > 0 ? agentDetails?.followers?.length : '0'}</h2>
                  <p>Followers</p>
                </div>
                <div className="profile-info">
                  <h2>{agentDetails?.following?.length > 0 ? agentDetails?.following?.length : '0'}</h2>
                  <p>Following</p>
                </div>
            </div>
        </div>

        <div>
            <div className="agent-table-header">
              <div className="agent-table_nav">
                <p className={units ? `highlighted mr-8` : 'mr-8'} onClick={() => handleTabs(setUnits, [setUnits, setTransactions])}>Units({unitsData.length})</p>
                {/* <p className={tenants ? `highlighted` : ''} onClick={() => handleTabs(setTenants, [setUnits, setTenants, setTransactions])}>Tenants({tenantsData.length})</p> */}
                {/* <p className={loans ? `highlighted` : ''} onClick={() => handleTabs(setLoans, [setUnits, setTenants, setTransactions])}>Loan({loansData.length})</p> */}
                <p className={transactions ? `highlighted mr-8` : 'mr-8'} onClick={() => handleTabs(setTransactions, [setUnits, setTransactions])}>Transactions</p>
              </div>
              <div className="search-bar">
                    <input type="text" placeholder='Search for unit e.g Cal 01' />
                    <div>
                        <img src={searchIcon} alt="" />
                    </div>
                </div>
            </div>

            <div>
                {
                  units ? <UnitTab data={unitsData} /> 
                  // : tenants ? <TenantsTab data={tenantsData} /> 
                  // : loans ? <LoanTab data={loansData} /> 
                  : transactions ? <TransactionTab agent={agent} /> : ''
                }
            </div>
        </div>
        </>
        ) : ''
      }
    </div>
  )
}

export default AgentsProfilePage