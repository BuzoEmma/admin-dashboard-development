import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { Total } from "../components/homeComponents/Total";
import { getSummary, getAgentsPerformance, getCountries, getTenantsProgress, getHabeepHouses, getAgents, getAds, getUsers  } from "../redux/Api";
import ChartArea from "../components/homeComponents/ChartArea";
import { abbreviateNumber } from "js-abbreviation-number";
import TotalSkeleton from "../components/skeleton/TotalSkeleton";
import "../components/skeleton/skeleton.scss";
import { getActiveTenants } from "../redux/Api";


export const Homepage = () => {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state?.users?.users);
  const summary = useSelector((state) => state?.summary?.summary?.result);
  const statistics = useSelector((state) => state?.summary?.summary?.statistics);
  const tenantsProgress = useSelector((state) => state?.tenantProgress?.tenantProgress);
  const habeepHouses = useSelector((state) => state?.houses?.houses);
  const agentsActivity = useSelector((state) => state?.agentsPerformance?.performance?.performance);


  // console.log(agentsActivity)

  const totalArr = {
    totalAds: abbreviateNumber(summary?.totalAds, 2),
    totalHouses: abbreviateNumber(summary?.totalHouses, 2),
    totalAgents: abbreviateNumber(summary?.totalAgents, 2),
    totalTenants: abbreviateNumber(summary?.totalTenants, 2),
    totalLandlords: abbreviateNumber(summary?.totalLandlords, 2),
    totalWallets: abbreviateNumber(summary?.totalWallets, 2),
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    dispatch(getUsers())
    dispatch(getSummary());
    dispatch(getAgentsPerformance({ year: '2023', state: 'Cross River State', city: 'Calabar'}));
    dispatch(getCountries());
    dispatch(getTenantsProgress());
    dispatch(getHabeepHouses());
    dispatch(getActiveTenants());
    dispatch(getAgents());
    // })
  }, [dispatch]);

  return (
    <div className="homepage">
      <div className="total-slide">
        <div className="display-total z-0">
          {summary && statistics ? (
            <Carousel responsive={responsive} className="carousel">
              <div>
                <Total
                  title="Total Ads"
                  total={totalArr.totalAds}
                  color="#BDCAFD"
                  stat={statistics.ads}
                />
              </div>
              <div>
                <Total
                  title="Total Houses"
                  total={totalArr.totalHouses}
                  color="#CAD5FF"
                  stat={statistics.houses}
                />
              </div>
              <div>
                <Total
                  title="Total Agents"
                  total={totalArr.totalAgents}
                  color="#D8E0FF"
                  stat={statistics.agents}
                />
              </div>
              <div>
                <Total
                  title="Total Tenants"
                  total={totalArr.totalTenants}
                  color="#E1E7FF"
                  stat={statistics.tenants}
                />
              </div>
              <div>
                <Total
                  title="Total Wallets"
                  total={totalArr.totalWallets}
                  color="#E4E9FD"
                  stat={statistics.wallet}
                />
              </div>
              <div>
                <Total
                  title="Total Landlords"
                  total={totalArr.totalLandlords}
                  color="#EAEEFF"
                  stat={statistics.landlords}
                />
              </div>
            </Carousel>
          ) : (
            <div className="flex">
              <TotalSkeleton />
              <TotalSkeleton />
              <TotalSkeleton />
              <TotalSkeleton />
              <TotalSkeleton />
            </div>
          )}
        </div>
      </div>
      <ChartArea summary={summary} tenantsProgress={tenantsProgress} habeepHouses={habeepHouses} users={usersData} />
    </div>
  );
};

export default Homepage
