import React, { useEffect, useState } from "react";
import BarChart from "./BarChart";
import ChartData from "../../ChartData";
import PieChart from "./PieChart";
import ChartLabels from "./ChartLabels";
import { abbreviateNumber } from "js-abbreviation-number";
import HabeepHouses from "./HabeepHouses";
import PiechartSkeleton from "../skeleton/PiechartSkeleton";
import AgentsPerformance from "../generalComponents/AgentsPerformance";
import ProgressBar from "../progressbar/ProgressBar";
import TenantsProgress from "./TenantsProgress";
import SmallTableSkeleton from '../skeleton/SmallTableSkeleton'
import TotalSkeleton from '../skeleton/TotalSkeleton'
import ProgressSkeleton from '../skeleton/ProgressSkeleton'
import { NavLink } from 'react-router-dom'
import UsersList from "../financesComponents/overallTabComponents/UsersList";
import searchIcon from '../../asserts/Icons/search-icon.png'
import filterIcon from '../../asserts/Icons/filter.png'
import TableListComponent from "../generalComponents/TableListComponent";


const ChartArea = ({ summary, tenantsProgress, habeepHouses, users }) => {
  // console.log(users)
  const { pieChartData } = ChartData();

  const pieChartDataset = {
    labels: ["Unused HBP", "Converted HBP"],
    datasets: [
      {
        labels: "Pie chart",
        data: [pieChartData.unusedHBP, pieChartData.usedHBP],
        backgroundColor: ["#1033BE", "#FFDB1B"],
      },
    ],
  };

  const [pieData, setPieData] = useState(pieChartDataset);

  const [pieOptions, setPieOptions] = useState({
    plugins: {
      legend: {
        display: false,
      },
    },
  });

  const setData = () => {
    setPieData(pieChartDataset);
  };

const usersData =  users

const UsersTableHeader = ['USERNAME', 'LOCATION', 'EMAIL', 'USERTYPE', 'ACTIONS']

const [searchUser, setSearchUser] = useState('');

const handleUserSearch = (e) => {
  e.preventDefault();
  setSearchUser(e.target.value);
}

const newUsersData = usersData?.filter((user) => (
    user?.accountInfo?.fname?.toLowerCase().includes(searchUser?.toLowerCase())
    || user?.accountInfo?.surname?.toLowerCase().includes(searchUser?.toLowerCase())
    || user?.accountInfo?.email?.toLowerCase().includes(searchUser?.toLowerCase())
    || user?.accountInfo?.role?.toLowerCase().includes(searchUser?.toLowerCase())
));

  useEffect(() => {
    setData();
  }, [summary, tenantsProgress, habeepHouses, users]);

  return (
    <div className="chart-area">
      <div className="agent-performance chart-area_item">
        <AgentsPerformance closedAdsColor="#C0CAEF" openAdsColor="#1B49FF" />
      </div>

      <div className="wallet-overview chart-area_item">
        {pieChartData.unusedHBP ? (
          <div className="wallet-overview-flex">
            <p className="chart-title font-bold">Wallet Overview</p>
            <div className="piechart">
              <PieChart chartData={pieData} chartOptions={pieOptions} />
              <div className="home-piechart-center">
                <div>
                  <p>Total HBP</p>
                  <h1>{abbreviateNumber(pieChartData.totalHBP, 2)}</h1>
                </div>
              </div>
            </div>
            <div className="label">
              <ChartLabels
                title="Unused HBP"
                color="#1033BE"
                total={abbreviateNumber((pieChartData.unusedHBP).toFixed(2), 2)}
              />
              <ChartLabels
                title="Converted HBP"
                color="#FFDB1B"
                total={abbreviateNumber((pieChartData.usedHBP).toFixed(2), 2)}
              />
            </div>
          </div>
        ) : (
          <PiechartSkeleton />
        )}
      </div>
      
      <div className="recent-habeep-houses chart-area_item">
        {
          habeepHouses?.length > 1 ? (
            <>
              <div className="recent-habeep-houses-header chart-title">
                <p className="font-bold">Recent Habeep Houses</p>
                <NavLink to={"/properties"}>
                  <p className="text-[#1B49FF]">See more</p>
                </NavLink>
              </div>
              <HabeepHouses houses={habeepHouses} />  
            </>
          ) : (
            <SmallTableSkeleton />
          )
        }
      </div>

      {/* <div className="chart-area_item">
        {
          Object.keys(tenantsProgress || {})?.length > 0 ? (
            <div className="h-full">
              <p className="chart-title font-bold">Tenants Progress</p>
              <div className="h-4/5">
                <TenantsProgress progress={tenantsProgress} />
              </div>
            </div>
          ) : (
              <ProgressSkeleton />
          )
        }
      </div> */}
        <div className="chart-area_item finance-users-area">
            {
              users?.length ? (
                <>
                <div className='finance-overall-user-search'>
                  <h2 className='text-lg font-bold text-[#1D1F2C]'>Users ({users?.length})</h2>
                  <div className="search-filter">
                    <div className="search-bar">
                        <input type="text" value={searchUser} onChange={handleUserSearch} placeholder='Search for user' />
                        <div>
                          <span class="material-symbols-outlined text-[#CAD1E9]">search</span>
                        </div>
                    </div>
                  </div>
                </div>
                {
                  searchUser?.length ? (
                      <UsersList users={newUsersData}/>
                  ) : (
                      <UsersList users={usersData}/>
                  )
                }
                </>
              ) : (
                <SmallTableSkeleton />
              )
            }
        </div>
    </div>
  );
};

export default ChartArea;
