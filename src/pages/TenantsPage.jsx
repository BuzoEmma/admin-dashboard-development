import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTenantsFinance, getActiveTenants, getInactiveTenants } from '../redux/Api'
import ActiveTenantsTab from '../components/tenantsComponents/tabs/ActiveTenantsTab'
import InactiveTenantsTab from '../components/tenantsComponents/tabs/InactiveTenantsTab'

const TenantsPage = () => {
    const dispatch = useDispatch();

    const activeTenantsData = useSelector((state) => state?.activeTenants?.activeTenants);
    const inactiveTenantsData = useSelector((state) => state?.inactiveTenants?.inactiveTenants);
    const tenantsFinanceData = useSelector((state) => state?.tenantsFinance?.tenantsFinance);

    const [tenantsMainTabs, setTenantsMainTabs] = useState([] || JSON.parse(localStorage.getItem("tenantsMainTabs")));

    // console.log(tenantsFinanceData)

    const toggleMainTabs = (tabId) => {
        let newArr = [];
      
        tenantsMainTabs?.map((t) => {
          if (t.id == tabId) {
            t.current = true;
            newArr.push(t);
          } else {
            t.current = false;
            newArr.push(t);
          }
          setTenantsMainTabs(newArr);
          localStorage.setItem("tenantsMainTabs", JSON.stringify(newArr));
        });
      };

 useEffect(() => {
    let tenantsTabs = localStorage.getItem('tenantsMainTabs');
    if(tenantsTabs) {
        let tTabs = JSON.parse(tenantsTabs)
        setTenantsMainTabs(tTabs)
    } else {
        let tenantsTabs = [
            {
                id: 1,
                name: 'Active Tenants',
                current: true
            },
            {
                id: 2,
                name: 'Inactive Tenants',
                current: false
            }
        ]
        let tTabs = localStorage.setItem("tenantsMainTabs", JSON.stringify(tenantsTabs));;
        setTenantsMainTabs(tTabs)
    }

    dispatch(getActiveTenants());
    dispatch(getInactiveTenants());
    dispatch(getTenantsFinance());
 }, [dispatch])

  return (
    <>
        <div className="tenants-nav">
            {
                tenantsMainTabs?.map(tab => (
                    <p className={tab?.current ? `highlighted` : ''} onClick={() => toggleMainTabs(tab?.id)}>{tab?.name}</p>
                ))
            }
        </div>

        <div className="tenants-page page">
            <div>
                {
                    tenantsMainTabs[0]?.current ? <ActiveTenantsTab tenants={activeTenantsData} finance={tenantsFinanceData}/> : tenantsMainTabs[1]?.current ? <InactiveTenantsTab data={inactiveTenantsData} /> : ''
                }
            </div>
        </div>
    </>
  )
}

export default TenantsPage