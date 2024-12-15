import React, { useState, useEffect } from 'react'
import Select from 'react-select';
import axios from 'axios';

const EditTenantPopup = ({ visible, onClose}) => {

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [username, setUsername] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [houseAddress, setHouseAddress] = useState('');
  const [agent, setAgent] = useState('');
  const [landlord, setLandlord] = useState('');
  const [rent, setRent] = useState('');

  const [tenantsNewDetails, setTenantsNewDetails] = useState({
    username: '',
    phoneNo: '',
    houseAddress: '',
    city: '',
    state: '',
    agent: '',
    landlord: '',
    rent: ''
  })

  const API_URL = import.meta.env.VITE_API_KEY;

  const getStates = async () => {
    return await axios.get(API_URL + '/countries-api/states/NG' )
    .then(response => {
        setStates(response.data.results.map(result => ({ label: result.name, value: result.stateid})));
    })
    .catch(err => {
        console.log(err.message)
    })
  }

  const getCities = async (stateId) => {
    return await axios.get(API_URL + `/countries-api/cities/NG/${stateId}` )
    .then(response => {
        console.log(response);
        setCities(response.data.results.map(result => ({ label: result.name, value: result.name})));
    })
    .catch(err => {
        console.log(err.message)
    })
  }

  const handleClose = (e) => {
    if(e.target.id === 'container') onClose()
  }

  const handleUsername = (event) => {
    setUsername(event.target.value);
    setTenantsNewDetails({...tenantsNewDetails, username: event.target.value})
  }

  const handlePhoneNo = (event) => {
    setPhoneNo(event.target.value);
    setTenantsNewDetails({...tenantsNewDetails, phoneNo: event.target.value})
  }

  const handleHouseAddress = (event) => {
    setHouseAddress(event.target.value);
    setTenantsNewDetails({...tenantsNewDetails, houseAddress: event.target.value})
  }

  const handleLocationState = (value) => {
    setTenantsNewDetails({...tenantsNewDetails, state: value});

    getCities(value);
  }

  const handleLocationCity = (value) => {
    setTenantsNewDetails({...tenantsNewDetails, city: value});
  }

  const handleAgent = (e) => {
    setAgent(e.target.value);
    setTenantsNewDetails({...tenantsNewDetails, agent: e.target.value});
  }

  const handleLandlord = (e) => {
    setLandlord(e.target.value);
    setTenantsNewDetails({...tenantsNewDetails, landlord: e.target.value});
  }

  const handleRent = (e) => {
    setRent(e.target.value);
    setTenantsNewDetails({...tenantsNewDetails, rent: e.target.value});
  }

  useEffect(() => {
    getStates()
  }, [])

  if(!visible) {
    return null
  }

  return (
    <div id='container' onClick={handleClose} className='fixed overflow-y-scroll inset-0 bg-black bg-opacity-30  z-50
    flex justify-center items-center'>
      <div className='bg-white p-5 rounded-md  w-96 mt-52 mb-5'>
        <div className='flex justify-between items-center mb-10 border-b pb-3'>
            <h2 className='font-bold'>Edit Tenant Profile</h2>
            <span className="material-symbols-outlined close text-base text-[#71759D] cursor-pointer font-bold" onClick={onClose}>close</span>
        </div>
        <form>
          <div className='mb-5'>
            <label className='text-[#71759D] text-xs' htmlFor="username">Username:</label> <br />
            <input className='border rounded pt-1 pb-2 pl-2 w-72 placeholder:text-[#0A1045] outline-none' value={username} onChange={handleUsername} type="text" id='username' placeholder='Agbama'/>
          </div>

          <div className='mb-5'>
            <label className='text-[#71759D] text-xs' htmlFor="phoneNo">Phone no:</label> <br />
            <input className='border rounded pt-1 pb-2 pl-2 w-72 placeholder:text-[#0A1045] outline-none' value={phoneNo} onChange={handlePhoneNo} type="text" id='first-name' placeholder='09084574342'/>
          </div>

          <input type="text" className='border rounded pt-1 pb-2 pl-2 mb-5 w-72 placeholder:text-[#71759D] outline-none' value={houseAddress} onChange={handleHouseAddress} placeholder='House Address' /><br />

          <div className="flex mb-5">
            <div className="">
              <Select className='w-32 placeholder:text-[#71759D]' placeholder={'State'} options={states} onChange={opt => handleLocationState(opt.value)} />
            </div>

            <div className="ml-3">
              <Select className='w-32 placeholder:text-[#71759D]' placeholder={'City'} options={cities} onChange={opt => handleLocationCity(opt.value)} />
            </div> 
          </div>

          <div className='mb-5'>
            <label className='text-[#71759D] text-xs' htmlFor="agent">Agent:</label> <br />
            <input className='border rounded pt-1 pb-2 pl-2 w-72 placeholder:text-[#0A1045] outline-none' value={agent} onChange={handleAgent} type="text" id='agent' placeholder='Anderson'/>
          </div>
 
          <div className='mb-5'>
            <label className='text-[#71759D] text-xs' htmlFor="landlord">Landlord:</label> <br />
            <input className='border rounded pt-1 pb-2 pl-2 w-72 placeholder:text-[#0A1045] outline-none' value={landlord} onChange={handleLandlord} type="text" id='landlord' placeholder='Anderson'/>
          </div>

          <div className='mb-5'>
            <label className='text-[#71759D] text-xs' htmlFor="rent">Rent:</label> <br />
            <input className='border rounded pt-1 pb-2 pl-2 w-72 placeholder:text-[#0A1045] outline-none' value={rent} onChange={handleRent} type="text" id='rent' placeholder='2,500,000'/>
          </div>

          <button className='text-center bg-[#1B49FF] text-[#FFFFFF] w-full rounded py-3'>Done</button>

        </form>
      </div>
    </div>
  )
}

export default EditTenantPopup
