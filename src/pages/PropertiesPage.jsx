import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import PropertiesHousesTab from '../components/propertiesComponents/tabs/PropertiesHousesTab';
import PropertiesLandsTab from '../components/propertiesComponents/tabs/PropertiesLandsTab';
import handleTabs from '../components/generalComponents/HandleTabs';
import { getTenants, getAds, getCompounds, getLands } from '../redux/Api';

const PropertiesPage = () => {
  const dispatch = useDispatch();

  const allTenants = useSelector((state) => state?.tenants?.tenants);
  const adsData = useSelector((state) => state?.ads?.ads);
  const compoundsData = useSelector((state) => state?.compounds?.compounds)
  const landsData = useSelector((state) => state?.lands.lands)
  const [propertiesMainTabs, setPropertiesMainTabs] = useState([] || JSON.parse(localStorage.getItem("propertiesMainTabs")));


  // console.log(allTenants);
  const toggleMainTabs = (tabId) => {
    let newArr = [];
  
    propertiesMainTabs.map((t) => {
      if (t.id == tabId) {
        t.current = true;
        newArr.push(t);
      } else {
        t.current = false;
        newArr.push(t);
      }
      setPropertiesMainTabs(newArr);
      localStorage.setItem("propertiesMainTabs", JSON.stringify(newArr));
    });
  };

  useEffect(() => {
    let propertiesMainTabs = localStorage.getItem("propertiesMainTabs");
    if (propertiesMainTabs) {
      let propMainTabs = JSON.parse(propertiesMainTabs);
      setPropertiesMainTabs(propMainTabs);
    } else {
      let propMainTabs = [
        {
          id: 1,
          name: "Houses",
          current: true,
        },
        {
          id: 2,
          name: "Lands",
          current: false,
        },
      ];
      setPropertiesMainTabs(propMainTabs);
    }
    dispatch(getTenants())
    dispatch(getAds());
    dispatch(getCompounds());
    dispatch(getLands());
  }, [dispatch])

  return (
    <>
      <div className="tenants-nav">
        {
          propertiesMainTabs?.map(tab => (
            <p className={tab?.current ? `highlighted` : ''} onClick={()=> toggleMainTabs(tab?.id)}>{tab?.name}</p>
          ))
        }
      </div>

      <div className="page mt-16">
            <div>
                {
                    propertiesMainTabs[0]?.current ? <PropertiesHousesTab tenantsHouses={allTenants} adsData={adsData} compoundsData={compoundsData} /> : propertiesMainTabs[1]?.current ? <PropertiesLandsTab landsData={landsData} />  : ''
                }
            </div>
        </div>
    </>
  )
}

export default PropertiesPage
