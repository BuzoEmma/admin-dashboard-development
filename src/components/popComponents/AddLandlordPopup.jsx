import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import axios from 'axios';

const AddLandlordPopup = ({ visible, onClose }) => {
    
  const [username, setUsername] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [compoundAddress, setCompoundAddress] = useState('');
  const [nickName, setNickName] = useState('');
  const [noOfHouses, setNoOfHouses] = useState('');
  const [houseID, setHouseID] = useState('');
  const [rentAmount, setRentAmount] = useState('');

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [landlordDetails, setLandlordDetails] = useState({
    username: '',
    phoneNo: '',
    compoundAddress: '',
    nickName: '',
    noOfHouses: '',
    rentAmount: '',
    state: '',
    city: ''
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

  const handleUsername = (event) => {
    setUsername(event.target.value);
    setLandlordDetails({ ...landlordDetails, username: event.target.value})
  }

  const handleLocationState = (value) => {
    setLandlordDetails({...landlordDetails,state: value});

    getCities(value);
  }

  const handleLocationCity = (value) => {
    setLandlordDetails({...landlordDetails, city: value});
  }

  const handleClose = (e) => {
    if(e.target.id === 'container') onClose()
  }

  const handlePhoneNo = (event) => {
    setPhoneNo(event.target.value);
    setLandlordDetails({...landlordDetails, phoneNo: event.target.value})
  }

  const handleCompoundAddress = (event) => {
    setCompoundAddress(event.target.value);
    setLandlordDetails({...landlordDetails, compoundAddress: event.target.value})
  }

  const handleNickname = (event) => {
    setNickName(event.target.value);
    setLandlordDetails({...landlordDetails, nickName: event.target.value})
  }

  const handleNoOfHouses = (event) => {
    setNoOfHouses(event.target.value);
    setLandlordDetails({...landlordDetails, noOfHouses: event.target.value})
  }

  const handleHouseID = (event) => {
    setHouseID(event.target.value);
    setLandlordDetails({...landlordDetails, houseID: event.target.value})
  }

  const handleRentAmount = (event) => {
    setRentAmount(event.target.value);
    setLandlordDetails({...landlordDetails, rentAmount: event.target.value})
  }


  useEffect(() => {
    getStates()
  }, [])

  if(!visible) {
    return null
  }

  return (
    <div  id='container' onClick={handleClose} className='fixed overflow-y-scroll inset-0 bg-black bg-opacity-30  z-50
    flex justify-center items-center'>
      <div className='bg-white p-5 rounded-md  w-96 mt-52 mb-5'>
        <div className='flex justify-between items-center mb-10 border-b pb-3'>
          <h2 className='font-bold'>Add/Edit Landlord Profile</h2>
          <span className="material-symbols-outlined close text-base text-[#71759D] cursor-pointer font-bold" onClick={onClose}>close</span>
        </div>
        
        <form>
          <div className='mb-5'>
            <label className='text-[#71759D] text-xs' htmlFor="username">Username:</label> <br />
            <input className='border rounded pt-1 pb-2 pl-2 w-72 placeholder:text-[#0A1045] outline-none' value={username} onChange={handleUsername} type="text" id='username' placeholder='Agbama Samuel'/>
          </div>

          <div className='mb-5'>
            <label className='text-[#71759D] text-xs' htmlFor="phoneNo">Phone no:</label> <br />
            <input className='border rounded pt-1 pb-2 pl-2 w-72 placeholder:text-[#0A1045] outline-none' value={phoneNo} onChange={handlePhoneNo} type="number" id='phoneNo' placeholder='09084574342'/>
          </div>

          <input type="text" className='border rounded pt-1 pb-2 pl-2 mb-5 w-72 placeholder:text-[#71759D] outline-none' value={compoundAddress} onChange={handleCompoundAddress} placeholder='Compound address' /><br />

          <div className="flex mb-5">
            <div className="">
              <Select className='w-32 placeholder:text-[#71759D]' placeholder={'State'} options={states} onChange={opt => handleLocationState(opt.value)} />
            </div>

            <div className="ml-3">
              <Select className='w-32 placeholder:text-[#71759D]' placeholder={'City'} options={cities} onChange={opt => handleLocationCity(opt.value)} />
            </div> 
          </div>

          <div className='mb-5'>
            <label className='text-[#71759D] text-xs' htmlFor="nickname">Compound Nickname:</label> <br />
            <input className='border rounded pt-1 pb-2 pl-2 w-72 placeholder:text-[#0A1045] outline-none' value={nickName} onChange={handleNickname} type="text" id='nickname' placeholder='Pearly Heights'/>
          </div>

          <div className='mb-5'>
            <label className='text-[#71759D] text-xs' htmlFor="nickname">No. of Houses:</label> <br />
            <input className='border rounded pt-1 pb-2 pl-2 w-72 placeholder:text-[#0A1045] outline-none' value={noOfHouses} onChange={handleNoOfHouses} type="number" id='noOfHouses' placeholder='3'/>
          </div>

          <div className='flex'>
            <input type="text" className='border rounded pt-1 pb-2 pl-2 mb-5 w-36 placeholder:text-[#71759D] outline-none' value={houseID} onChange={handleHouseID} placeholder='House ID' /><br />
            <input type="text" className='border rounded pt-1 pb-2 pl-2 mb-5 w-36 placeholder:text-[#71759D] outline-none' value={rentAmount} onChange={handleRentAmount} placeholder='Rent amount' /><br />
          </div>

          <button className='text-center bg-[#1B49FF] text-[#FFFFFF] w-full rounded py-3'>Add</button>
        </form>
      </div>
    </div>
  )
}

export default AddLandlordPopup
