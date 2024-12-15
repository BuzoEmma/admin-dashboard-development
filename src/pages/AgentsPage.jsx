import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AgentsPerformance from '../components/generalComponents/AgentsPerformance'
import { useEffect } from 'react'
import { getSummary, getAgentsPerformance, getAgents, getCountries, getAgentsResidences } from '../redux/Api'
import searchIcon from '../asserts/Icons/search-icon.png'
import AgentsList from '../components/agentsComponents/AgentsList'
import TableSkeleton from '../components/skeleton/TableSkeleton'
import AddAgentsPopup from '../components/popComponents/AddAgentsPopup'
import TableListComponent from '../components/generalComponents/TableListComponent'
import AgentsResidenceItem from '../components/agentsComponents/AgentsResidenceItem'

const AgentsPage = () => {
    const dispatch = useDispatch();
    const agents = useSelector((state) => state?.agents?.agents);
    const agentResidence = useSelector((state) => state?.agentsResidence?.agentsResidence);
    // const summary = useSelector((state) => state?.summary?.summary?.result);

    const [searchAgent, setSearchAgent] = useState('');
    const [showAddAgentPopup, setShowAddAgentPopup] = useState(false);

    // console.log(agentResidence)

    const closeAddAgentPopup = () => {
        setShowAddAgentPopup(false)
      }

    useEffect(() => {
        dispatch(getSummary());
        dispatch(getCountries());
        dispatch(getAgentsPerformance());
        dispatch(getAgents());
        dispatch(getAgentsResidences());
        window.scrollTo(0, 0)
    }, [dispatch, agents?.length]);

    const newAgents = agents?.filter((agent) => (
        agent.username.toLowerCase().includes(searchAgent.toLowerCase())
        || agent.state.toLowerCase().includes(searchAgent.toLowerCase())
        || agent.city.toLowerCase().includes(searchAgent.toLowerCase()))
    );

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchAgent(e.target.value);
    }



  return (
    <>
        <div className="agents-nav z-50">
            <p>All agents</p>
            <p>Top agents</p>
        </div>
        <div className='agent-page page'>
            <div className="chart-area">
                <div className='chart-area_item'>
                    <AgentsPerformance openAdsColor='#1134BC' closedAdsColor='#FFDB1B'/>
                </div>
                <div className='chart-area_item'>
                    <p className="chart-title font-bold">Agents Residence</p>
                    <div>
                        <TableListComponent dataList={agentResidence} headerList={['CITY', 'NO OF AGENTS']} itemComponent={AgentsResidenceItem} />
                    </div>
                </div>
            </div>

            <div className="search-filter">
                <div className="search-bar">
                    <input type="text" value={searchAgent} onChange={handleSearch} placeholder='Search for agent eg Ag 01' />
                    <div>
                        <img src={searchIcon} alt="" />
                    </div>
                </div>

                <div className='filter-area'>
                    <button className='bg-[#1B49FF] text-white' onClick={() => {setShowAddAgentPopup(!showAddAgentPopup)}}>
                        <p className='text-sm'>Add Agent</p>
                    </button>
                </div>
            </div>

            <AddAgentsPopup visible={showAddAgentPopup} onClose={closeAddAgentPopup} />

            <>
                {
                    agents?.length > 1 ? (
                        <div>
                        {
                            searchAgent?.length ? (
                                <AgentsList agents={newAgents} />
                            ) : (
                                <AgentsList agents={agents}/>
                            )
                        }
                    </div>
                    ) : <TableSkeleton />
                }
            </>

        </div>
    </>
  )
}

export default AgentsPage