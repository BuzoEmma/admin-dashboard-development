import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HabeepLandlords from '../components/landlordsComponents/tab/HabeepLandlords'
import TenantsLandlords from '../components/landlordsComponents/tab/TenantsLandlords'
import { getHabeepLandlords } from '../redux/Api'

const LandlordsPage = () => {
  const dispatch = useDispatch()
  const habeebLandlordsData = useSelector((state) => state?.landlords?.landlords);
  const [landlordsMainTabs, setLandlordsMainTabs] = useState([])

  // console.log(hLandlords)

  // const habeepLandlordsData = [
  //   {
  //     fName: 'David',
  //     compounds: 1,
  //     state: 'Cross River - Calabar',
  //     location: 'Cross River - Calabar',
  //     email: 'Samuelbalogun@gmail.com',
  //     phoneNumber: '08036708456',
  //     nickName: 'Habor Heights',
  //     agent: 'Bassey Effiong',
  //     noOfHouses: 5,
  //     certification: 'C/O',
  //     surname: 'Isabella'
  //   },
  //   {
  //     fName: 'Turag',
  //     compounds: 4,
  //     state: 'Cross River - Calabar',
  //     location: 'Lagos - Ikeja',
  //     email: 'Samuelbalogun@gmail.com',
  //     phoneNumber: '08030005000',
  //     nickName: 'Habor Heights',
  //     agent: 'Bassey Effiong',
  //     noOfHouses: 5,
  //     certification: 'C/O',
  //     surname: 'Simeon'
  //   },
  //   {
  //     fName: 'David',
  //     compounds: 1,
  //     state: 'Cross River - Calabar',
  //     location: 'Cross River - Calabar',
  //     email: 'Samuelbalogun@gmail.com',
  //     phoneNumber: '08036708456',
  //     nickName: 'Habor Heights',
  //     agent: 'Bassey Effiong',
  //     noOfHouses: 5,
  //     certification: 'C/O',
  //     surname: 'Isabella'
  //   },
  //   {
  //     fName: 'Turag',
  //     compounds: 4,
  //     state: 'Cross River - Calabar',
  //     location: 'Lagos - Ikeja',
  //     email: 'Samuelbalogun@gmail.com',
  //     phoneNumber: '08030005000',
  //     nickName: 'Habor Heights',
  //     agent: 'Bassey Effiong',
  //     noOfHouses: 5,
  //     certification: 'C/O',
  //     surname: 'Simeon'
  //   },
  //   {
  //     fName: 'David',
  //     compounds: 1,
  //     state: 'Cross River - Calabar',
  //     location: 'Cross River - Calabar',
  //     email: 'Samuelbalogun@gmail.com',
  //     phoneNumber: '08036708456',
  //     nickName: 'Habor Heights',
  //     agent: 'Bassey Effiong',
  //     noOfHouses: 5,
  //     certification: 'C/O',
  //     surname: 'Isabella'
  //   },
  //   {
  //     fName: 'Turag',
  //     compounds: 4,
  //     state: 'Cross River - Calabar',
  //     location: 'Lagos - Ikeja',
  //     email: 'Samuelbalogun@gmail.com',
  //     phoneNumber: '08030005000',
  //     nickName: 'Habor Heights',
  //     agent: 'Bassey Effiong',
  //     noOfHouses: 5,
  //     certification: 'C/O',
  //     surname: 'Simeon'
  //   },
  //   {
  //     fName: 'David',
  //     compounds: 1,
  //     state: 'Cross River - Calabar',
  //     location: 'Cross River - Calabar',
  //     email: 'Samuelbalogun@gmail.com',
  //     phoneNumber: '08036708456',
  //     nickName: 'Habor Heights',
  //     agent: 'Bassey Effiong',
  //     noOfHouses: 5,
  //     certification: 'C/O',
  //     surname: 'Isabella'
  //   },
  //   {
  //     fName: 'Turag',
  //     compounds: 4,
  //     state: 'Cross River - Calabar',
  //     location: 'Lagos - Ikeja',
  //     email: 'Samuelbalogun@gmail.com',
  //     phoneNumber: '08030005000',
  //     nickName: 'Habor Heights',
  //     agent: 'Bassey Effiong',
  //     noOfHouses: 5,
  //     certification: 'C/O',
  //     surname: 'Simeon'
  //   },
    
  // ];

  const tenantsLandlordsData = [
    {
      username: 'Davinda Raman',
      location: 'Lagos - Ikeja',
      tenant: 'Davinda Mariama',
      phoneNumber: '09069469010',
      state: 'Cross River - Calabar',
    },
    {
      username: 'David Isabella',
      location: 'Cross River - Calabar',
      tenant: 'Davinda Mariama',
      phoneNumber: '08036708456',
      state: 'Cross River - Calabar',
    },
    {
      username: 'Turag Simeon',
      location: 'Lagos - Ikeja',
      tenant: 'Davinda Mariama',
      phoneNumber: '08030005000',
      state: 'Cross River - Calabar',
    },
    {
      username: 'Rejoice Isabella',
      location: 'Abia - Uturu',
      tenant: 'Davinda Mariama',
      phoneNumber: '08030005000',
      state: 'Cross River - Calabar',
    },
    {
      username: 'David Isabella',
      location: 'Cross River - Calabar',
      tenant: 'Davinda Mariama',
      phoneNumber: '08036708456',
      state: 'Cross River - Calabar',
    },
    {
      username: 'Turag Simeon',
      location: 'Lagos - Ikeja',
      tenant: 'Davinda Mariama',
      phoneNumber: '08030005000',
      state: 'Cross River - Calabar',
    },
    {
      username: 'Rejoice Isabella',
      location: 'Abia - Uturu',
      tenant: 'Davinda Mariama',
      phoneNumber: '08030005000',
      state: 'Cross River - Calabar',
    },
    {
      username: 'David Isabella',
      location: 'Cross River - Calabar',
      tenant: 'Davinda Mariama',
      phoneNumber: '08036708456',
      state: 'Cross River - Calabar',
    },
    {
      username: 'Turag Simeon',
      location: 'Lagos - Ikeja',
      tenant: 'Davinda Mariama',
      phoneNumber: '08030005000',
      state: 'Cross River - Calabar',
    },
    {
      username: 'Rejoice Isabella',
      location: 'Abia - Uturu',
      tenant: 'Davinda Mariama',
      phoneNumber: '08030005000',
      state: 'Cross River - Calabar',
    },
  ];

  const toggleMainTabs = (tabId) => {
    let newArr = [];
    landlordsMainTabs.map(tab => {
      if(tab.id === tabId) {
        tab.current = true;
        newArr.push(tab);
      } else {
        tab.current = false;
        newArr.push(tab);
      }
    })
    setLandlordsMainTabs(newArr)
    localStorage.setItem('landlordsMainTabs', JSON.stringify(newArr))
  }

  useEffect(() => {
    dispatch(getHabeepLandlords());
    let landlordsTabs = localStorage.getItem('landlordsMainTabs');
    if(landlordsTabs) {
      let lTabs = JSON.parse(landlordsTabs);
      setLandlordsMainTabs(lTabs);
    } else {
      let landlordsTabs = [
        {
          id: 1, 
          name: 'Habeeb Landlords',
          current: true
        },
        {
          id: 2,
          name: 'Tenants Landlords',
          current: false
        }
      ];
      setLandlordsMainTabs(landlordsTabs);

    }

  }, [dispatch]);
  
  return (
    <>
      <div className="tenants-nav w-full mb-10">
        {
          landlordsMainTabs?.map(tab => (
            <p className={tab?.current ? `highlighted` : ''} onClick={() => toggleMainTabs(tab?.id)}>{tab?.name}({tab?.name === 'Habeeb Landlords' ? habeebLandlordsData?.length : tenantsLandlordsData?.length})</p>
          ))
        }
      </div>

      <div className='mt-20 px-10'>
        {
          landlordsMainTabs[0]?.current ? <HabeepLandlords records={habeebLandlordsData} /> : landlordsMainTabs[1]?.current ? <TenantsLandlords records={tenantsLandlordsData} /> : ''
        }
      </div>
    </>
  )
}

export default LandlordsPage
