import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ChartData from '../../ChartData';
import BarChart from '../homeComponents/BarChart';
import ChartLabels from '../homeComponents/ChartLabels';
import BarchartSkeleton from '../skeleton/BarchartSkeleton';
import locationIcon from '../../asserts/Icons/location.png'
import calenderIcon from '../../asserts/Icons/calender.png'
import { getSummary, getAgentsPerformance, getCountries, getStates } from '../../redux/Api';
import axios from "axios";
import searchIcon from '../../asserts/Icons/search-icon.png'
import Select from 'react-select';
import NoAvailableData from './NoAvailableData';

const AgentsPerformance = ({ openAdsColor, closedAdsColor }) => {

  const dispatch = useDispatch();
  const summary = useSelector((state) => state?.summary?.summary?.result);
  const loadingPerformance = useSelector((state) => state?.agentsPerformance?.status);
  const agentsActivity = useSelector((state) => state?.agentsPerformance?.performance?.performance);
  const nations = useSelector((state) => state?.countries?.countries);
  const nigerianStates = useSelector((state) => state?.states?.states);
  const states = nigerianStates?.map(result => ({ label: result.name, value: result.stateid}))
  const countries = nations?.map(nation => ({ label: nation.name, value: nation.shortName }));

  // console.log(nigerianStates)

  const [year, setYear] = useState('2024');
  const years = [
    { label: '2023', value: '2023'},
    { label: '2024', value: '2024'},
    { label: '2025', value: '2025'},
    { label: '2026', value: '2026'},
    { label: '2027', value: '2027'}
  ]
  const [country, setCountry] = useState(false);
  const [state, setState] = useState(false);
  const [city, setCity] = useState(false);

  // const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [location, setLocation] = useState({
    country: '',
    state: '',
    city: ''
  })

  const [chooseLocation, setChooseLocation] = useState(false);
  const [chooseYear, setChooseYear] = useState(false);

  const { barChartData } = ChartData();

  let totalOpenAds = 0;
  let totalClosedAds = 0;

  if (barChartData) {
    for (let bar of barChartData) {
      totalOpenAds += bar.openAds;
      totalClosedAds += bar.closedAds;
    }
  }

  const barChartDataset = {
    labels: barChartData?.map((data) => data?.month),
    datasets: [
      {
        label: "Opened Ads",
        data: barChartData?.map((data) => data?.openAds),
        backgroundColor: [openAdsColor],
      },
      {
        label: "Closed Ads",
        data: barChartData?.map((data) => data?.closedAds),
        backgroundColor: [closedAdsColor],
      },
    ],
  };

  const [barData, setBarData] = useState(barChartDataset);

  const [barOptions, setBarOptions] = useState({
    animation: true,
    plugins: {
      legend: {
        display: false,
      },
      ticks: { display: false },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  });

  const setData = () => {
    setBarData(barChartDataset);
    setBarOptions(barOptions)
  };


  const activateLocation = () => {
    setLocation({
      // country: '',
      state: '',
      city: ''
    })
    setCountry(!country);
    // setYear('');
    setChooseLocation(!chooseLocation);
  }

  const API_URL = import.meta.env.VITE_API_KEY;

  const getCities = async (country_code, stateId) => {
    return await axios.get(API_URL + `/countries-api/cities/${country_code}/${stateId}` )
    .then(response => {
        // console.log(country_code, response.data.results);
        setCities(response.data.results.map(result => ({ label: result.name, value: result.name})));
    })
    .catch(err => {
        console.log(err.message)
    })
  }

  // const getStates = async (country_code) => {
  //   return await axios.get(API_URL + '/countries-api/states/' + country_code )
  //   .then(response => {
  //     console.log(response)
  //       setStates(response.data.results.map(result => ({ label: result.name, value: result.stateid})));
  //   })
  //   .catch(err => {
  //       console.log(err.message)
  //   })
  // }

  // const getStates = async (country_code) => {
  //   return await axios.get(API_URL + '/countries-api/states/' + country_code )
  //   .then(response => {
  //     console.log(response)
  //       setStates(response.data.results.map(result => ({ label: result.name, value: result.stateid})));
  //   })
  //   .catch(err => {
  //       console.log(err.message)
  //   })
  // }

  const handleLocationCountry = (value, name, year) => {
    setLocation({...location, country: value});

    console.log(year)

    getStates(value);
    dispatch(getAgentsPerformance(year !== '' ? { year: year, location: name} : {location: name}))

    setCountry(!country);

    setState(!state);
  }

  const handleLocationState = (value, name) => {
    setLocation({...location, state: name});

    dispatch(getAgentsPerformance(year !== '' ? {year: year, state: name} : {state: name}));

    getCities('NG', value);

    setState(!state);

    setCity(!city);
  }

  const handleLocationCity = (value, name) => {
    setLocation({...location, city: value});

    dispatch(getAgentsPerformance(year !== '' ? { year: year, state: location.state, city: name } : { state: location.state, city: name }))

    console.log({ state: location.state, city: name })
    setCity(!city);

    setCountry(false)
    setChooseLocation(false);
    // dispatch(getCountries())
  }

  const showYear = () => {
    setChooseYear(!chooseYear)
  }

  const handleYear = (value) => {
    setYear(value);
    dispatch(getAgentsPerformance({ year: value, state: location.state }))
  }

  useEffect(() => {
    setData();
    dispatch(getCountries())
    dispatch(getStates('NG'))

  }, [summary, agentsActivity, dispatch]);


  return (
    <div>
         
          
            <div className="agent-performance-header chart-title">
              {
               year ? (
                <p className='font-bold'>{location?.city} Agent Performance ({year})</p>
              ) : (
                <p className='font-bold'>Agent Performance</p>
              )
              }
              <div className='location-calender'>
                <div className="location">
                  <button onClick={activateLocation}>
                    <img src={locationIcon} alt="Location" />
                    <p>Location</p>
                  </button>
                  {
                    chooseLocation && (
                      <div>
                      {
                        city ? (
                          <div className="select-dropdown">
                            <Select options={cities} onChange={opt => handleLocationCity(opt.value, opt.label)} />
                          </div>
                        ) : states ? (
                          <div className="select-dropdown">
                            <Select options={states} onChange={opt => handleLocationState(opt.value, opt.label)} />
                          </div>
                        ) 
                        // : country ? (
                        //   <div className="select-dropdown">
                        //      <Select options={countries} onChange={opt => handleLocationCountry(opt.value, opt.label, year)} />
                        //   </div>
                        // ) 
                        : ''
                      }
                    </div>
                    )
                  }
                </div>
                <div className='year'>
                  <button onClick={showYear}>
                    <img src={calenderIcon} alt="Calender" />
                    <p>Year</p>
                  </button>
                    {
                      chooseYear ? (
                        <div className='year-dropdown'>
                          <Select options={years} onChange={opt => handleYear(opt.value)}/>
                      </div>
                      ) : ''
                    }
                  </div>
                </div>
            </div>

        {
          Object.keys(agentsActivity || {})?.length > 0 ? (
            <>
            <BarChart chartData={barData} chartOptions={barOptions} />
              <div className="label">
                <ChartLabels
                  title="Opened Ads"
                  color={openAdsColor}
                  total={totalOpenAds}
                />
                <ChartLabels
                  title="Closed Ads"
                  color={closedAdsColor}
                  total={totalClosedAds}
                />
              </div>
            </>
          ) : (
            <BarchartSkeleton />
          )
          
          // (
          //     <NoAvailableData notice={'No agents performance for this location and year!!'} />
          // )
        }
    </div>
  )
}

export default AgentsPerformance